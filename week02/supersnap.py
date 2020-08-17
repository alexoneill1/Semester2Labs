dir = tmp

while read word && ! test -f $dir/$word

do
    touch $dir/$word
    
done

rm -fr $dir

echo $word