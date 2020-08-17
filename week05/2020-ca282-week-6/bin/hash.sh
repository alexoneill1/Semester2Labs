#!/bin/sh

echo "user is $CI_PROJECT_NAMESPACE"
echo "hash is" $( /var/script/hash-args "$CI_PROJECT_NAMESPACE" )

