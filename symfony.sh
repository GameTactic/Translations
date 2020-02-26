#!/usr/bin/env bash

if [ ! -f ../bin/console ]; then
	echo 'Console doesnt exist in ../bin/console.'
    exit 1;
fi

if [ ! -f ./locales.txt ]; then
	echo 'Locales.txt is missing from current directory.'
    exit 1;
fi

while read p; do
	echo "Generating locales for $p..."
    ../bin/console translation:update --force $p --domain messages -q -n
done < locales.txt

printf "Done!\n";
