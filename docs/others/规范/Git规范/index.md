# Git 提交规范

## 目的

统一团队 Git commit 日志标准，便于后续代码 review，版本发布以及日志自动化生成等等。

统一团队的 Git 工作流，包括分支使用、tag 规范、issue 等

## Git commit 日志基本规范

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### type(必须)

type 代表某次提交的类型，比如：是修复一个 bug 还是增加一个新的 feature。

类型如下：

- feat: 新功能、新特性
- fix: 修复 bug
- docs: 文档（documentation），比如 README, CHANGELOG, CONTRIBUTE 等等
- style: 格式（不影响代码运行的变动），仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
- refactor: 重构（即不是新增功能，也不是修改 bug 的代码变动）
- perf: 优化相关，比如提升性能、体验
- test: 增加测试，测试用例，包括单元测试、集成测试等
- chore: 构建过程或辅助工具的变动
- revert: 回滚到上一个版本
- merge：代码合并。
- sync：同步主线或分支的 Bug。
- build: 打包
- ci: 与 CI（持续集成服务）有关的改动
- release：发布新版本；
- workflow：工作流相关文件修改。


### scope(可选)

scope 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

### subject(必须)

subject 是 commit 目的的简短描述，不超过 50 个字符。

### body(可选)

用新的空行将“标题”和“主体内容”隔开，Git 会自动识别第一行为摘要。

主体内容是 commit 目的的详细描述，可以放一些备注、说明等。

### footer(可选)

用新的空行隔开，描述与本次提交相关联的 break change 或 issue 。

## Git 分支与版本发布规范

基本原则：master 为保护分支，不直接在 master 上进行代码修改和提交。

开发日常需求或者项目时，从 master 分支上 checkout 一个 feature 分支进行开发或者 bugfix 分支进行 bug 修复，功能测试完毕并且项目发布上线后，将 feature 分支合并到主干 master，并且打 Tag 发布，最后删除开发分支。

### 分支命名：

| 分支       | 命名         | 说明                                                             |
| ---------- | :----------- | :--------------------------------------------------------------- |
| 主分支     | master       | 主分支，负责记录上线版本的迭代，该分支代码与线上代码是完全一致的 |
| 开发分支   | dev(develop) | 开发分支，该分支记录相对稳定的版本                               |
| 功能分支   | feature-\*   | 新功能分支，该分支从 develop 分支创建                            |
| 发布版本   | release-\*   | 预发布分支，用于代码上线准备                                     |
| 修复分支   | bugfix-\*    | bug 修复分支，修复代码的 bug                                     |
| 热修复分支 | hotfix-\*    | 热修复分支，用于修复某个紧急的 bug，该分支只有在紧急情况下使用   |

### 流程规范:

正常开发流程

1. 从 `develop` 分支切出一个新分支，根据是 功能 还是 bug，命名为 `feature-\*` 或 `bugfix-\*` 分支。
2. 开发者完成开发，提交该分支到远程仓库。
3. 开发者发起 `merge request` 请求（可在 gitlab 页面 New merge request），将新分支请求合并到 `develop` 分支，并提醒组长或同事进行 `code reviewer`。
4. ` code reviewer` 后，若无问题，则接受 `merge request`，并将新分支合并到 `develop` 分支，同时可以删除新建分支；若有问题，则不能进行合并，可 close 该请求，同时通知开发者在新分支上进行相应调整，调整完后提交代码，重复 `code reviewer` 流程。
5. 转测时，直接从当前 `develop` 分支合并到 `release` 分支，重新构建测试环境，完成转测。
6. 测试完成后，从 `release` 分支合并到 `master` 分支，基于 `master` 分支构建生产环境完成上线，并对 `master` 分支打 `tag`， `tag` 名可为 v1.0.0（即：版本号\*上线时间）。

## 参考：

[Commit message 和 Change log 编写指南](https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
