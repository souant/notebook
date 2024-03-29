# 正则表达式

正则表达式，即 Regular Expressions，缩写为 Regex 或 Regexp，是在正则表达式语法框架内创建的字符串。您可以用正则表达式轻松管理数据，执行查找、匹配或编辑等命令。正则表达式适用于 Python、SQL、JavaScript、R、Google Analytics、Google Data Studio 等编程语言和整个编程过程

[RegexLearn](https://regexlearn.com/zh-cn/learn)

## 标识符

- `i` 忽略大小写
- `g` 全局匹配
- `m` 多行匹配


## 锚点

- `^` 字符串或行的开头
- `$` 字符串或行的结尾
- `\b` 单词边界
- `\B` 非单词边界

## 字符类

- `[abc]` 字符集，表示有a、b、c的
- `[^abc]` 否定字符集，表示没有a、b、c的
- `[a-z]` 范围，表示从a到z的小写字母
- `.` 点，表示任意字符
- `\w` 单词，表示字母、数字、下划线
- `\W` 非单词，表示非字母、数字、下划线
- `\d` 数字，表示0-9的数字
- `\D` 非数字
- `\s` 空白符，表示空格
- `\S` 非空白符

## 两次与分支

- `+` 加号，表示一次或多次，1-n次
- `*` 星号，表示任意次，0-n次
- `{1, 3}` 重复次数，1-3次
- `?` 可选号，0次或1次
- `|` 分支，表示或的逻辑
  
## 组和引用

- `()` 表示组，会将括号内的匹配定义为一个组
- `\1` 表示组的引用, 按照组的顺序和层级标识
- `(?:)` 非捕获组，创建无法引用的分组

## 零宽断言

- `(?=)` 正向先行断言
- `(?!)` 负向先行断言
- `(?<=)` 正向后行断言
- `(?<!)` 负向后行断言


