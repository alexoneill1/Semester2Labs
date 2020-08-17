#!/bin/sh

i=1
for number in "$@"
do 
    echo $((i))"." $number
    i=$(( i + 1 ))
done