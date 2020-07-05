#!/bin/zsh

rm pokes.json
scrapy runspider spider.py -o pokes.json
