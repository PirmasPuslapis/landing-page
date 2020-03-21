#!/usr/bin/env sh

# abort on errors
set -e

# build
export NODE_ENV=production
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'pirmaspuslapis.lt' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/pirmaspuslapis/landing-page.git/ master:gh-pages

cd -
