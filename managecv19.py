import sys
import os
import pathlib
# import subprocess
import collections
import json
import yaml

from bs4 import BeautifulSoup
import markdown
# import networkx as nx


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
        link = a['href']
        if link.startswith('#'):
            if link.startswith('#pages/'):
                links.add(link)
        else:
            links.add(a['href'])
    return sorted(list(links))


def create_cvlinks_file(content):
    with open('assets/documents/cvlinks.json', 'w') as outfile:
        json.dump(content, outfile)


def create_event_index_file(content):
    with open('assets/events/index.json', 'w') as outfile:
        json.dump(content, outfile)


class EventParser(object):
    def __init__(self):
        self.parsed = None
        self.category = None
        needed = ['start', 'topics', 'title', 'link']
        known = needed + ['end', 'pretext', 'authors', 'journal', 'extra']
        self.needed = needed
        self.known = known

    def check_event(self, event):
        for key in self.needed:
            if key not in event:
                raise RuntimeError("{} not in event: {}".format(key, event))
        for key in event.keys():
            if key not in self.known:
                msg = "Unknown key {} in category: {}, event: {}"
                print(msg.format(key, self.category, event))

    def parse(self, path):
        if not path.name.endswith('.yml'):
            raise RuntimeError("Need yaml file")
        self.parsed = yaml.safe_load(open(path))
        self.category = self.parsed['category']

    def get_event_topics(self):
        events = self.parsed['events']
        topic_set = set()
        for e in events:
            try:
                topics = e['topics']
            except KeyError:
                print("No topic list in category:{}".format(self.category))
                raise RuntimeError(
                    "Add a topic list to the event: {}".format(e))
            for t in topics:
                topic_set.add(t)
        return sorted(list(topic_set))

    def check_event_links(self):
        events = self.parsed['events']
        for e in events:
            self.check_event(e)
            link = e['link']
            if link.endswith(')'):
                msg = "Bad link for {}: {}".format(self.category, link)
                raise RuntimeError(msg)
            if 'extra' in e:
                for ex in e['extra']:
                    link = ex['link']
                    if link.endswith(')'):
                        msg = "extra Bad link for {}: {}"
                        raise RuntimeError(msg.format(self.category, link))

    def get_pmc_ids(self):
        pmc_ids = set()
        events = self.parsed['events']
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
    parser = EventParser()
    for node in yaml_files:
        parser.parse(node)
        parser.check_event_links()
        category = parser.category
        if category in tdict:
            raise RuntimeError("Topic {} already exists.".format(category))
        tdict[category] = dict(filename=node.name[:-4], name=category)
        tdict[category]['topics'] = parser.get_event_topics()
        tdict[category]['pmc_ids'] = parser.get_pmc_ids()
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
