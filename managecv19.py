import sys
import os
import pathlib
import subprocess
import json

from bs4 import BeautifulSoup
import markdown
import networkx as nx


COMMAND_ARGS = sys.argv

if not COMMAND_ARGS:
    raise RuntimeError("Bad command")

if not os.path.isdir('/'):
    raise RuntimeError("Can't find root directory.")

# doctoc -t '**[Home](#pages/blog/cv19/index)**' assets/documents/blog/cv19

DOCTOC_CMD = ['doctoc', '-t', '**[Home](#pages/blog/cv19/index)**',
              'assets/documents/blog/cv19']



def key_from_filename(filename, keep_extension=True):
    parts = list(filename.parts)
    top = parts.pop(0)
    while top != 'cv19':
        top = parts.pop(0)
    key = '/'.join(parts)
    if keep_extension:
        return key
    else:
        return key.split('.md')[0]



def make_soup(filename):
    text = open(filename).read()
    html = markdown.markdown(text)
    return BeautifulSoup(html, 'lxml')


def get_html_links(soup):
    links = set()
    anchors = soup.findAll('a')
    for a in anchors:
        l = a['href']
        if l.startswith('#'):
            if l.startswith('#pages/'):
                links.add(l)
        else:
            links.add(a['href'])
    return sorted(list(links))


subprocess.run(DOCTOC_CMD)

cvdir = pathlib.Path('assets/documents/blog/cv19')

cvnodes = list(cvdir.glob('**/*'))

cvfiles = [n for n in cvnodes if n.is_file()]

cvcontent = dict()
all_links = dict()
page_data = dict()

for filename in cvfiles:
    cvcontent[filename] = make_soup(filename)
    all_links[filename] = get_html_links(cvcontent[filename])
    key = key_from_filename(filename)
    page_data[key] = all_links[filename]


jdata = dict()
jdata['pages'] = list()
for pname in sorted(page_data.keys()):
    pdata = dict(name=pname)
    pdata['links'] = page_data[pname]
    jdata['pages'].append(pdata)

htmlfiles = [make_soup(f) for f in cvfiles]

with open('assets/documents/cvlinks.json', 'w') as outfile:
    json.dump(jdata, outfile)
