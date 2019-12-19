npm run build: &&
git chekout gh-pages &&
rm -rf *.html *.js *.css *.png &&
mv dist /* ./ &&
rm -rf dist
git add . &&
git commit -m 'update' &&
git push