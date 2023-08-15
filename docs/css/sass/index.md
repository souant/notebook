# SASS css 预编译语言

SASS 是 css 语言的超集，可以使用缩进的方式写 css，支持变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports)

Sass 有两种语法格式。首先是 SCSS (Sassy CSS) 另一种也是最早的 Sass 语法格式，被称为缩进格式 (Indented Sass) 通常简称 "Sass"

`.scss` 这种格式仅在 CSS3 语法的基础上进行拓展，所有 CSS3 语法在 SCSS 中都是通用的，这种格式以 .scss 作为拓展名

`.sass` 它使用 “缩进” 代替 “花括号” 表示属性属于某个选择器，用 “换行” 代替 “分号” 分隔属性，很多人认为这样做比 SCSS 更容易阅读，书写也更快速。缩进格式也可以使用 Sass 的全部功能，只是与 SCSS 相比个别地方采取了不同的表达方式，这种格式以 .sass 作为拓展名。

## 嵌套规则

Sass 允许将一套 CSS 样式嵌套进另一套样式中，内层的样式将它外层的选择器作为父选择器

在嵌套 CSS 规则时，需要直接使用嵌套外层的父选择器，可以用 & 代表嵌套规则外层的父选择器

& 必须作为选择器的第一个字符，其后可以跟随后缀生成复合的选择器

```scss
#main p {
  color: #00ff00;
  width: 97%;

  .redbox {
    background-color: #ff0000;
    color: #000000;
  }
}

// 同

#main p {
  color: #00ff00;
  width: 97%;
}
#main p .redbox {
  background-color: #ff0000;
  color: #000000;
}
```

```scss
a {
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  body.firefox & {
    font-weight: normal;
  }
}
// 同
a {
  font-weight: bold;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
body.firefox a {
  font-weight: normal;
}
```
**属性嵌套** 有些 CSS 属性遵循相同的命名空间 (namespace)，比如 font-family, font-size, font-weight 都以 font 作为属性的命名空间。为了便于管理这样的属性，同时也为了避免了重复输入，Sass 允许将属性嵌套在命名空间中

```scss
.funky {
  font: {
    family: fantasy;
    size: 30em;
    weight: bold;
  }
}
// 同

.funky {
  font-family: fantasy;
  font-size: 30em;
  font-weight: bold;
}
```

**插值语句** `#{}`

```scss
$name: foo;
$attr: border;
p.#{$name} {
  #{$attr}-color: blue;
}

// 同
p.foo {
  border-color: blue;
}
```

**占位符选择器** `%foo`

## 变量 `$`

SassScript 最普遍的用法就是变量，变量以美元符号开头，赋值方法与 CSS 属性的写法一样

**数据类型**

- 数字，1, 2, 13, 10px
- 字符串，有引号字符串与无引号字符串，"foo", 'bar', baz
- 颜色，blue, #04a3f9, rgba(255,0,0,0.5)
- 布尔型，true, false
- 空值，null
- 数组 (list)，用空格或逗号作分隔符，1.5em 1em 0 2em, Helvetica, Arial, sans-serif
- maps, 相当于 JavaScript 的 object，(key1: value1, key2: value2)

```scss
// 定义变量
$width: 5em;

// 使用变量
#main {
  width: $width;
}

// 同
#main {
  width: 5em;
}

// 变量的块级作用域
// 添加!global将局部变量转换为全局变量
#main {
  $width: 5em !global;
  width: $width;
}

// !default
```



## 函数 `@function`


[函数手册](https://sass-lang.com/documentation/modules/)

### 自定义函数

```scss
$grid-width: 40px;
$gutter-width: 10px;

@function grid-width($n) {
  @return $n * $grid-width + ($n - 1) * $gutter-width;
}

#sidebar {
  width: grid-width(5);
}

// 同

#sidebar {
  width: 240px;
}
```



## 混合指令 `@mixin` `@include`

@mixin 简写可用 `=` 表示

@include 简写可用 `+` 表示

```scss
// 定义一个mixin
@mixin large-text {
  font: {
    family: Arial;
    size: 20px;
    weight: bold;
  }
  color: #ff0000;
}

// 混入
.page-title {
  @include large-text;
  padding: 4px;
  margin-top: 10px;
}

/* 同 */

.page-title {
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  color: #ff0000;
  padding: 4px;
  margin-top: 10px;
}
```

### mixin 参数

参数用于给混合指令中的样式设定变量，并且赋值使用

```scss
// 定义一个mixin
@mixin sexy-border($color, $width) {
  border: {
    color: $color;
    width: $width;
    style: dashed;
  }
}
// 混入
p {
  @include sexy-border(blue, 1in);
}

/* 同 */
p {
  border-color: blue;
  border-width: 1in;
  border-style: dashed;
}
```

### 向混合样式中导入内容

在引用混合样式的时候，可以先将一段代码导入到混合指令中，然后再输出混合样式，额外导入的部分将出现在 @content 标志的地方：

```scss
@mixin apply-to-ie6-only {
  * html {
    @content;
  }
}
@include apply-to-ie6-only {
  #logo {
    background-image: url(/logo.gif);
  }
}

// 同

* html #logo {
  background-image: url(/logo.gif);
}
```

## 媒体查询 `@media`

同 css 的用法


## 导入 `@import`

```scss
@import xx.scss;
```
