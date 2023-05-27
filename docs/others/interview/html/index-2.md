# 中级

## HTML5为什么只需要写`<!DOCTYPE html>`

因为HTML5不基于SGML，所以不需要引用DTD。在HTML4中，<!DOCTYPE>声明引用DTD，因为HTML4基于SGML

## title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别

- strong 标签有语义，是起到加重语气的效果，而 b 标签是没有的，b 标签只是一个简单加粗标签。b 标签之间的字符都设为粗体，strong 标签加强字符的语气都是通过粗体来实现的，而搜索引擎更侧重 strong 标签。
- title 属性没有明确意义只表示是个标题，H1 则表示层次明确的标题，对页面信息的抓取有很大的影响
- i 内容展示为斜体，em 表示强调的文本

## iframe 有那些优点和缺点？

iframe 元素会创建包含另外一个文档的内联框架（即行内框架）

- 优点：

用来加载速度较慢的内容（如广告）
可以使脚本可以并行下载
可以实现跨子域通信

- 缺点：

iframe 会阻塞主页面的 onload 事件
无法被一些搜索引擎索识别
会产生很多页面，不容易管理

## label 的作用是什么？如何使用？

label 标签来定义表单控件的关系：当用户选择 label 标签时，浏览器会自动将焦点转到和 label 标签相关的表单控件上

```html
<label for="mobile">Number:</label> <input type="text" id="mobile" />
```

## SVG 是什么

SVG 可缩放矢量图形（Scalable Vector Graphics）是基于可扩展标记语言 XML 描述的 2D 图形的语言

特点如下：

- 不依赖分辨率
- 支持事件处理器
- 最适合带有大型渲染区域的应用程序（比如谷歌地图）
- 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
- 不适合游戏应用


## a元素除了用于导航外，还有什么作用

- 做锚点`<a href="#id"></a>`
- 下载文件`<a href="downloadUrl" download></a>`
- a标签可以用来手机拨号`<a href="tel:110">110</a>`
- 发送短信`<a href="sms:110">110</a>`

## 页面导入样式时， link 和@import 有什么区别？

- @import只能加载css，link除了能链接一个外部样式表，还可以指定网站小图标、指定规范网址等;
- 页面被加载的时，link 会同时被加载，而@import 引用的 CSS 会等到页面被加载完再加载;
- link是一的DOM元素，因此支持使用 js 控制DOM去改变样式，而@import 不支持;
- link标签引入的样式权重大于@import标签；