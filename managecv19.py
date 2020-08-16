import sys
import os
import pathlib
import json

from bs4 import BeautifulSoup
import markdown


COMMAND_ARGS = sys.argv

if not COMMAND_ARGS:
    raise RuntimeError("Bad command")

if not os.path.isdir('/'):
    raise RuntimeError("Can't find root directory.")

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

cvdir = pathlib.Path('assets/documents/blog/cv19')

cvnodes = list(cvdir.glob('**/*'))

cvfiles = [n for n in cvnodes if n.is_file()]

cvcontent = dict()
all_links = dict()
page_data = dict()

for filename in cvfiles:
    cvcontent[filename] = make_soup(filename)
    all_links[filename] = get_html_links(cvcontent[filename])
    parts = list(filename.parts)
    top = parts.pop(0)
    while top != 'cv19':
        top = parts.pop(0)
    key = '/'.join(parts)
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
