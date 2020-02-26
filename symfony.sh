#!/usr/bin/env bash

if [ ! -f ../bin/console ]; then
	echo 'Console doesnt exist in ../bin/console.'
    exit 1;
fi

echo "Generating locales..."
../bin/console translation:update --force en --domain messages --prefix="" --clean -q -n

for f in ./*/src/*; do
	n="${f//'en.'/''}"
	mv "$f" "$n" 2>/dev/null
done

printf "Done!\n";
