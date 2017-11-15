#!/bin/sh

ab -k -c $1 -n $2 -H "Accept-Encoding: gzip, deflate" http://127.0.0.1:2368/