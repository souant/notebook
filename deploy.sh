#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 提交
git add .
git commit -m 'build'
git push git@github.com:souant/notebook.git master:master

# 进入生成的文件夹
cd .vitepress/dist

# 提交发布代码
git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:souant/notebook.git master:gh-pages

cd -