#!/bin/bash

doctoc -t '**[Home](#pages/blog/cv19/index)**' assets/documents/blog/cv19
python managecv19.py 
git add assets/documents/blog/cv19
git add assets/documents/cvlinks.json 
git commit -m "update links"
git push

