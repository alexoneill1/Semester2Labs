#!/bin/sh

i=0
read number
echo $number
for i in $(seq 19)
do
    if test $((number%2)) -eq 0
    then
        echo $((number/2))
        number=$((number/2))
    else
        echo $(((number*3)+1))
        number=$(((number*3)+1))
    fi
done