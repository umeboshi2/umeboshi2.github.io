import sys
import os
import pathlib
import subprocess
import json
import yaml

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

cvdir = pathlib.Path('assets/documents/blog/cv19')
events_dir = pathlib.Path('assets/events')

if not cvdir.is_dir():
    raise RuntimeError("Please run command from the root of the repo.")
if not events_dir.is_dir():
    raise RuntimeError("Please run command from the root of the repo.")
    

def make_soup(filename):
    "read a markdown file and return soup"
    text = open(filename).read()
    html = markdown.markdown(text)
    return BeautifulSoup(html, 'lxml')


def key_from_filename(filename, keep_extension=True):
    "create dictionary key from filename"
    parts = list(filename.parts)
    top = parts.pop(0)
    while top != 'cv19':
        top = parts.pop(0)
    key = '/'.join(parts)
    if keep_extension:
        return key
    else:
        return key.split('.md')[0]

def key_from_link(link):
    print(link)

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

def create_cvlinks_file(content):
    with open('assets/documents/cvlinks.json', 'w') as outfile:
        json.dump(content, outfile)

def create_event_index_file(content):
    with open('assets/events/index.json', 'w') as outfile:
        json.dump(content, outfile)
        

subprocess.run(DOCTOC_CMD)


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

create_cvlinks_file(jdata)

ev_nodes = list(events_dir.glob('**/*.yml'))

evdata = {}
for node in ev_nodes:
    if not node.name.endswith('.yml'):
        raise RuntimeError("Need yaml file")
    data = yaml.safe_load(open(node))
    topic = data['topic']
    if topic in evdata:
        raise RuntimeError("Topic {} already exists.",format(topic))
    evdata[topic] = node.name[:-4]

create_event_index_file(evdata)
