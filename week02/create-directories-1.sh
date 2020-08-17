#!/bin/sh

n=1;
max=$1;
while [ "$n" -le "$max" ]; do
    mkdir "dir.$n"
    n=`expr "$n" + 1`;
done