import sys
import os
import pathlib
import subprocess
import collections
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

PMC_URL_PREFIX = "https://www.ncbi.nlm.nih.gov/pmc/articles/"

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


def get_event_topics(parsed_yaml):
    main_data = dict(main_topic=parsed_yaml['category'])
    events = parsed_yaml['events']
    # print("Events", events)
    topic_set = set()
    for e in events:
        try:
            topics = e['topics']
        except KeyError:
            print("No topic list in {}".format(parsed_yaml['topic']))
            print(e)
            raise RuntimeError("Add a topic list to the event: {}".format(e))
        for t in topics:
            topic_set.add(t)
    main_data['topics'] = sorted(list(topic_set))
    return main_data

def check_event_links(parsed_yaml):
    category = parsed_yaml['category']
    events = parsed_yaml['events']
    for e in events:
        link = e['link']
        if link.endswith(')'):
            raise RuntimeError("Bad link for {}: {}".format(category, link))
        if 'extra' in e:
            for ex in e['extra']:
                link = ex['link']
                if link.endswith(')'):
                    raise RuntimeError(
                        "extra Bad link for {}: {}".format(category, link))


def get_pmc_ids(parsed_yaml):
    pmc_ids = set()
    events = parsed_yaml['events']
    for e in events:
        link = e['link']
        if '/pmc/' in link:
            if not link.startswith(PMC_URL_PREFIX):
                raise RuntimeError("Bad pmc url {}".format(link))
            dirname = os.path.dirname(link)
            basename = os.path.basename(dirname)
            if not basename.startswith('PMC'):
                raise RuntimeError("problem with {}".format(link))
            id = int(basename[3:])
            pmc_ids.add(id)
    return sorted(list(pmc_ids))


def generate_topic_database(yaml_files):
    yaml_files = sorted(yaml_files)
    main_data = dict()
    main_data['categories'] = dict()
    tdict = main_data['categories']
    for node in yaml_files:
        if not node.name.endswith('.yml'):
            raise RuntimeError("Need yaml file")
        parsed = yaml.safe_load(open(node))
        check_event_links(parsed)
        category = parsed['category']
        if category in tdict:
            raise RuntimeError("Topic {} already exists.".format(category))
        tdict[category] = dict(filename=node.name[:-4], name=category)
        tdict[category]['topics'] = get_event_topics(parsed)['topics']
        tdict[category]['pmc_ids'] = get_pmc_ids(parsed)
    topic_dict = collections.defaultdict(list)
    for category in sorted(tdict.keys()):
        sublist = sorted(tdict[category]['topics'])
        for sub in sublist:
            topic_dict[sub].append(category)
    main_data['topics'] = topic_dict
    return main_data


def generate_pagelink_database(md_files):
    cvcontent = dict()
    all_links = dict()
    page_data = dict()
    for filename in md_files:
        cvcontent[filename] = make_soup(filename)
        links = get_html_links(cvcontent[filename])
        all_links[filename] = links
        key = key_from_filename(filename)
        page_data[key] = all_links[filename]

    jdata = dict()
    jdata['pages'] = list()
    for pname in sorted(page_data.keys()):
        pdata = dict(name=pname)
        pdata['links'] = page_data[pname]
        jdata['pages'].append(pdata)
    return jdata


# subprocess.run(DOCTOC_CMD)

cvnodes = list(cvdir.glob('**/*'))
cvfiles = [n for n in cvnodes if n.is_file()]
pagelink_data = generate_pagelink_database(cvfiles)
create_cvlinks_file(pagelink_data)

ev_nodes = list(events_dir.glob('**/*.yml'))
topic_db = generate_topic_database(ev_nodes)
create_event_index_file(topic_db)

