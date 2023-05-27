# 初级

## DOCTYPE(⽂档类型) 的作⽤

DOCTYPE 是 HTML5 中一种标准通用标记语言的文档类型声明，它的目的是告诉浏览器（解析器）应该以什么样（html 或 xhtml）的文档类型定义来解析文档

浏览器渲染页面的两种模式（可通过 document.compatMode 获取）

- CSS1Compat：标准模式（Strick mode），默认模式，浏览器使用 W3C 的标准解析渲染页面。在标准模式中，浏览器以其支持的最高标准呈现页面。
- BackCompat：怪异模式(混杂模式)(Quick mode)，浏览器使用自己的怪异模式解析渲染页面。在怪异模式中，页面以一种比较宽松的向后兼容的方式显示

## Html5 语义化标签

```html
<header></header>
头部
<nav></nav>
导航栏
<section></section>
区块（有语义化的div）
<main></main>
主要区域
<article></article>
主要内容
<aside></aside>
侧边栏
<footer></footer>
底部
```

## 为什么需要语义化标签

- 易修改、易维护。
- 无障碍阅读支持。
- 搜索引擎友好，利于 SEO。
- 面向未来的 HTML，浏览器在未来可能提供更丰富的支持。

## 行内元素有哪些？块级元素有哪些？

- 行内元素有：a b span img input select strong；
- 块级元素有：div ul ol li dl dt dd h1 h2 h3 h4 h5 h6 p；
- 常见的空元素：br、hr、img、input、link、meta

块级元素：

- 总是在新行上开始，就是每个块级元素独占一行，默认从上到下排列
- 宽度缺少时是它的容器的 100%，除非设置一个宽度
- 高度、行高以及外边距和内边距都是可以设置的
- 块级元素可以容纳其它行级元素和块级元素

行内元素：

- 和其它元素都会在一行显示
- 高、行高以及外边距和内边距可以设置
- 宽度就是文字或者图片的宽度，不能改变
- 行级元素只能容纳文本或者其它行内元素

使用行内元素需要注意的是：

- 行内元素设置宽度 width 无效
- 行内元素设置 height 无效，但是可以通过 line-height 来设置
- 设置 margin 只有左右有效，上下无效
- 设置 padding 只有左右有效，上下无效

## src 和 href 的区别

src 和 href 都是用来引用外部的资源

- src： 表示对资源的引用，它指向的内容会嵌入到当前标签所在的位置。src 会将其指向的资源下载并应⽤到⽂档内，如请求 js 脚本。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执⾏完毕，所以⼀般 js 脚本会放在页面底部。
- href： 表示超文本引用，它指向一些网络资源，建立和当前元素或本文档的链接关系。当浏览器识别到它他指向的⽂件时，就会并⾏下载资源，不会停⽌对当前⽂档的处理。 常用在 a、link 等标签上

## script 标签中 defer 和 async 的区别

defer 和 async 是两种脚本资源异步加载方式，没有 defer 或 async 属性，浏览器会立即加载并执行相应的脚本。它不会等待后续加载的文档元素，读取到就会开始加载和执行，这样就阻塞了后续文档的加载

- defer：可以保证脚本加载的执行顺序
- async: 无法保证按顺序执行脚本，加载完成后就执行

其他属性：

1. async: 可选。表示立即加载脚本，但不阻碍页面其他动作，异步加载
2. charset: 可选。标识加载的脚本代码字符集
3. crossorigin: 可选。配置脚本加载请求跨域设置
4. defer: 可选。表示延迟到文档加载完成后再加载脚本
5. integrity: 可选。加密签名设置。emm: 没用过
6. language: <span style="color: red">废弃 </span>。
7. src: 可选。加载的脚本外部地址。
8. type: 可选。标识脚本的语言类型(也称 MIME 类型)。值为："module"，表示代码会被当成 es6 模块

## meta 标签有哪些

`meta` 标签由 `name` 和 `content` 属性定义，用来描述网页文档的属性

1. 描述 HTML 文档的编码类型

```html
<meta charset="UTF-8" />
```

2. 页面关键词

```html
<meta name="keywords" content="关键词" />
```

3. 页面描述

```html
<meta name="description" content="页面描述内容" />
```

4. refresh 页面重定向和刷新

```html
<meta http-equiv="refresh" content="0;url=" />
```

5. viewport，适配移动端，可以控制视口的大小和比例

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, maximum-scale=1"
/>
```

content 参数有以下几种：

`width viewport` ：宽度(数值/device-width)
`height viewport` ：高度(数值/device-height)
`initial-scale` ：初始缩放比例
`maximum-scale` ：最大缩放比例
`minimum-scale` ：最小缩放比例
`user-scalable` ：是否允许用户缩放(yes/no) 6. 搜索引擎索引方式

```html
<meta name="robots" content="index,follow" />
```

content 参数有以下几种：

`all`：文件将被检索，且页面上的链接可以被查询；
`none`：文件将不被检索，且页面上的链接不可以被查询；
`index`：文件将被检索；
`follow`：页面上的链接可以被查询；
`noindex`：文件将不被检索；
`nofollow`：页面上的链接不可以被查询。

## HTML5 有哪些更新

1. 语义化标签

- `header`：定义文档的页眉（头部）；
- `nav`：定义导航链接的部分；
- `footer`：定义文档或节的页脚（底部）；
- `article`：定义文章内容；
- `section`：定义文档中的节（section、区段）；
- `aside`：定义其所处内容之外的内容（侧边）；

2. 媒体标签

- `audio` 音频
- `video` 视频

3. 画布canvas

4. 表单

- 表单类型
  `email` ：能够验证当前输入的邮箱地址是否合法
  `url` ： 验证 URL
  `number` ： 只能输入数字，其他输入不了，而且自带上下增大减小箭头，max 属性可以设置为最大值，min 可以设置为最小值，value 为默认值。
  `search` ： 输入框后面会给提供一个小叉，可以删除输入的内容，更加人性化。
  `range` ： 可以提供给一个范围，其中可以设置 max 和 min 以及 value，其中 value 属性可以设置为默认值
  `color` ： 提供了一个颜色拾取器
  `time` ： 时分秒
  `data` ： 日期选择年月日
  `datatime` ： 时间和日期(目前只有 Safari 支持)
  `datatime-local` ：日期时间控件
  `week` ：周控件
  `month`：月控件
- 表单属性：
  `placeholder` ：提示信息
  `autofocus` ：自动获取焦点
  `autocomplete=“on”` 或者 autocomplete=“off” 使用这个属性需要有两个前提：表单必须提交过 必须有 name 属性。
  `required`：要求输入框不能为空，必须有值才能够提交。
  `pattern=" "` 里面写入想要的正则模式，例如手机号 patte="^(+86)?\d{10}$"
  `multiple`：可以选择多个文件或者多个邮箱
  `form`=" form 表单的 ID"

- 表单事件：

  `oninput` 每当 input 里的输入框内容发生变化都会触发此事件。
  `oninvalid` 当验证不通过时触发此事件。

5. DOM 查询操作

- `document.querySelector()`
- `document.querySelectorAll()`

6. Web 存储

- `localStorage` 没有时间限制的数据存储
- `sessionStorage` 针对一个 session 的数据存储

移除的元素：

- 纯表现的元素：basefont、font、s、strike、tt、u、big、center
- 对可选用性产生负面影响的元素：frame、frameset、noframes
