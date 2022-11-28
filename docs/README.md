---
lang: zh-CN
title: Note Book
description: Note Book
---
# Note Book 

```bash
└─javascript
    └─javascript高级程序设计
    └─微前端
```



## 计划
- [JavaScript高级程序设计](/notebook/javascript/javascript高级程序设计/) 30%
- [微前端-乾坤](/notebook/javascript/微前端/) 0%




## 使用方式
> 运行deploy.sh shell脚本文件, 发布+部署

```bash
  ./deploy.sh
```
包含构建、push到github代码，自动将build的文件发布到gh-pages分支

```bash
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 提交
git add .
git commit -m 'build'
git push git@github.com:souant/notebook.git master:master

# 进入生成的文件夹
cd docs/.vuepress/dist

# 提交发布代码
git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:souant/notebook.git master:gh-pages

cd -
```



