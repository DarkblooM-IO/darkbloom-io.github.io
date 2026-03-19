rm -rf ./docs/* ./docs/.*
cp ./src/{.htaccess,robots.txt} ./docs/
eleventy "$@"
