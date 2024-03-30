rm -rf docs
mkdir docs
yarn build
mv dist/wisy-angular-challenge/browser/* docs
rm -rf dist
sed -i 's/<base href="\//<base href=".\//g' docs/index.html
