#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

npm run build

cd dist

# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
