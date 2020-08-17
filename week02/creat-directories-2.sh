#!/bin/sh

#!/bin/sh

n=1;
max=$1;
while [ "$n" -le "$max" ]; do
    if [ "$n" -lt 10 ]; then
    mkdir "dir.00000$n"
    else
    mkdir "dir.0000$n"
    fi
    n='expr "$n" + 1';
done