# HTML 元素

## `<a>` 标签

又称锚点元素，可通过属性 href 跳转其他网页、文件、同一页面位置或其他任意 URL（超链接）

## `<abbr>` 标签

表示缩写，用于文档的词组的缩写，通常配合 title 显示完整的描述

## `<address>` 标签

表示其中的元素带有个人或组织的联系信息
例：

```html
<address>
  <a href="mailto:jim@rock.com">jim@rock.com</a><br />
  <a href="tel:+13115552368">(311) 555-2368</a>
</address>
```

## `<area>` 标签

在图片中表示热区，可设置热区大小，其属性 href 可使用 href,通常配合 `<map>`使用

```html
<map name="primary">
  <area shape="circle" coords="200,250,25" href="another.htm" />
  <area shape="default" nohref />
</map>
```

## `<article>` 标签

语义元素，表示内容为文档、文章等内容

## `<aside>` 标签

语义元素，表示内容为 html 文档主体的侧边内容，非主体内容

## `<audio>` 标签

媒体元素，用于嵌入音频内容，一个或多个，使用 src 属性或者 `<source>`标签链接音频资源

例

```html
<!-- 单个资源用src -->
<audio controls src="/media/cc0-audio/t-rex-roar.mp3">
  <a href="/media/cc0-audio/t-rex-roar.mp3"> Download audio </a>
</audio>
<!-- 多个资源用source -->
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />
  <p>
    Your browser doesn't support HTML5 audio. Here is a
    <a href="myAudio.mp4">link to the audio</a> instead.
  </p>
</audio>
```

## `<b>` 标签

标识文字为粗体，有强调语义，一般只标识粗体使用 css font-weight

注意

- `<b>`应用场合如：摘要中的关键字、评论中的产品名称，或其他典型的应该加粗显示的文字（除此之外无其它特别强调）。
- 不要将 `<b>`元素与 `<strong>`、`<em>`或 `<mark>`元素混淆。 `<strong>`元素表示某些重要性的文本，`<em>`强调文本，而 `<mark>`元素表示某些相关性的文本。 `<b>`元素不传达这样的特殊语义信息；仅在没有其他合适的元素时使用它。
- 类似的，也不要用 `<b>`元素来标记标题。如果需要表示标题，请使用 `<h1>` (en-US) 到 `<h6>` (en-US) 标签。此外，可以通过样式表来改变这些元素的的默认样式，结果就是它们并不一定都是粗体。
- 通过在 `<b>`元素上添加 class 属性来表示额外的语义信息是一个很好的方式（例如 `<b class="lead">` 来表示段落中的第一句）。这可以在样式需要变动的情况下更轻松地处理不同应用场合的 `<b>`元素，无须改动 HTML。
- 以前 `<b>`元素的意思就是让文本变成粗体。但从 HTML4 开始，不赞成标签表示带样式信息，于是 `<b>`元素的含义发生了变化。
- 如果不是出于语义目的而使用 `<b>`元素，那么让文本显示粗体更好的方式是使用将 CSS 的 font-weight 属性设置为 "bold"。

## `<base>` 标签

指定用于一个文档中包含的所有相对 URL 的根 URL。一份中只能有一个 `<base>` 元素。
如果指定了多个 `<base>` 元素，只会使用第一个 href 和 target 值，其余都会被忽略

## `<bdi>` 标签

HTML 双向隔离元素，告诉浏览器的双向算法将其包含的文本与周围的文本隔离，当网站动态插入一些文本且不知道所插入文本的方向性时
同样的显示效果可以通过使用 CSS 规则 unicode-bidi：隔离 `<span dir="">`或者其他文本格式化元素，但语义信息只能通过 `<bdi>`元素传递。

## `<bdo>` 标签

HTML 双向文本替代元素 (`<bdo>`) 改写了文本的方向性，使文本以不同的方向渲染呈现出来

## `<blockquote>` 标签

标识内容为引用内容，其 cite 属性标识引用来源

## `<body>` 标签

html 文档内容元素，document.body 可访问到该 dom

## `<br>` 标签

在 html 文本中生成换行符

## `<button>` 标签

表示一个可点击的按钮，可以用在表单或文档其它需要使用简单标准按钮的地方

## `<canvas>` 标签

html 画布，通过该元素可使用 canvas API 或 webgl API 绘制图形

## `<caption>` 标签

用于 `<table`标签的标题，通常为 `<table`标签的第一个子元素

## `<cite>` 标签

语义化，表示一个作品的引用，且必须包含作品的标题。

## `<code>` 标签

标识内容为计算机代码

## `<col>` 标签

定义表格中的列，并用于定义所有公共单元格上的公共语义。它通常位于 `<colgroup>`元素内。

## `<colgroup>` 标签

HTML 中的 表格列组（Column Group `<colgroup>`）标签用来定义表中的一组列表

## `<data>` 标签

标识内容指向来源数据，通过 value 属性

## `<datalist>` 标签

包含了一组 `<option>` 元素，这些元素表示其它表单控件可选值

例

```html
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
  <option value="Chocolate"></option>
  <option value="Coconut"></option>
  <option value="Mint"></option>
  <option value="Strawberry"></option>
  <option value="Vanilla"></option>
</datalist>
```

## `<dl>` 标签

是一个包含术语定义以及描述的列表，通常用于展示词汇表或者元数据 (键 - 值对列表)。
例

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>
  <!-- other terms and definitions -->
</dl>
```

## `<dt>` 标签

用于在一个定义列表中声明一个术语。该元素仅能作为 `<dl>` 的子元素出现。通常在该元素后面会跟着 `<dd>` 元素，然而，多个连续出现的 `<dt>` 元素都将由出现在它们后面的第一个 `<dd>` 元素定义。

## `<dd>` 标签

用来指明一个描述列表 (`<dl>`) 元素中一个术语的描述。这个元素只能作为描述列表元素的子元素出现，并且必须跟着一个 `<dt>` 元素。

## `<del>` 标签

标识删除的内容，在文本上显示删除线

## `<details>` 标签

创建一个组件，仅在被切换成展开状态时，它才会显示内含的信息。`<summary>` 元素可为该部件提供概要或者标签。

例

```html
<details>
  <summary>Details</summary>
  Something small enough to escape casual notice.
</details>
```

## `<summary>` 标签

用作 一个 `<details>`元素的一个内容的摘要，标题或图例

## `<dfn>` 标签

表示定义一个术语，用于文档段落内容中

## `<dialog>` 标签

标示一个对话框或其他交互式组件，例如一个可关闭警告、检查器或者窗口
例

```html
<!-- Simple modal dialog containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <p>
      <label
        >Favorite animal:
        <select>
          <option value="default">Choose…</option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select>
      </label>
    </p>
    <div>
      <button value="cancel">Cancel</button>
      <button id="confirmBtn" value="default">Confirm</button>
    </div>
  </form>
</dialog>
<p>
  <button id="updateDetails">Update details</button>
</p>

<output></output>
```

```javascript
const updateButton = document.getElementById("updateDetails");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// If a browser doesn't support the dialog, then hide the
// dialog contents by default.
if (typeof favDialog.showModal !== "function") {
  favDialog.hidden = true;
  /* a fallback script to allow this dialog/form to function
     for legacy browsers that do not support <dialog>
     could be provided here.
  */
}
// "Update details" button opens the <dialog> modally
updateButton.addEventListener("click", () => {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    outputBox.value =
      "Sorry, the <dialog> API is not supported by this browser.";
  }
});
// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener("change", (e) => {
  confirmBtn.value = selectEl.value;
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener("close", () => {
  outputBox.value = `${
    favDialog.returnValue
  } button clicked - ${new Date().toString()}`;
});
```

## `<div>` 标签

html 内容划分元素，块级元素，

## `<em>` 标签

标记出需要用户着重阅读的内容， `<em>` 元素是可以嵌套的，嵌套层次越深，则其包含的内容被认定为越需要着重阅读。
显示效果为斜体，与 `<i>`标签相比，语义更重

## `<embed>` 标签

外部内容嵌入文档中的指定位置。此内容由外部应用程序或其他交互式内容源（如浏览器插件）提供。没啥用！！！

## `<fieldset>` 标签

用于对表单中的控制元素进行分组，类似一个盒子，使用 `<legend>`显示组标题
分组禁用时，表单元素同样会被禁用
例

```html
<form action="#">
  <fieldset>
    <legend>Simple fieldset</legend>
    <input type="radio" id="radio" />
    <label for="radio">Spirit of radio</label>
  </fieldset>
</form>
```

## `<legend>` 标签

用于 `<fieldset>`的标题

## `<figure>` 标签

代表一段独立的内容，可能包含 `<figcaption>` 元素定义的说明元素

## `<figcaption>` 标签

与其相关联的图片的说明/标题，用于描述其父节点 `<figure>` 元素里的其他数据。

## `<footer>` 标签

语义元素，表示页面页脚或章节页脚，页脚通常包含该章节作者、版权数据或者与文档相关的链接等信息。

## `<form>` 标签

html 表单区域，包含交互性控件，用于向 web 服务器提交信息

## `<h1>` 标签

`<h1>–<h6>` 标题 (Heading) 元素呈现了六个不同的级别的标题，`<h1>` 级别最高，而 `<h6>` 级别最低。

## `<head>` 标签

规定文档相关的配置信息（元数据），包括文档的标题，引用的文档样式和脚本等

## `<header>` 标签

语义元素，用于展示介绍性内容，通常包含一组介绍性的或是辅助导航的实用元素

## `<hr>` 标签

显示水平分割线，通常用于段落

## `<html>` 标签

表示一个 HTML 文档的根（顶级元素），所以它也被称为根元素。所有其他元素必须是此元素的后代。

## `<i>` 标签

需要区分普通文本的一系列文本。例如技术术语、外文短语或是小说中人物的思想活动等
内容通常以斜体显示。

## `<iframe>` 标签

内联框架元素表示嵌套的 browsing context。它能够将另一个 HTML 页面嵌入到当前页面中。

## `<img>` 标签

嵌入图片资源到文档，src 属性链接

## `<input>` 标签

表单元素，一个表单交互式控件，

> type=button：link, menuitem, menuitemcheckbox, menuitemradio, radio, switch, tab
> type=checkbox：button, menuitemcheckbox, option, switch
> type=image：link, menuitem, menuitemcheckbox, menuitemradio, radio, switch
> type=radio：menuitemradio
> type=color|date|datetime|datetime-local|email|file：None
> type=hidden|month|number|password|range|research：None
> type=search|submit|tel|text|url|week：None

## `<ins>` 标签

定义已经被插入文档中的文本

## `<kbd>` 标签

用于定义键盘文本，以浏览器的默认 monospace 字体显示。

## `<label>` 标签

示用户界面中某个元素的说明， 使用 for 属性绑定 id
通常用于表单控件的说明

## `<li>` 标签

用于列表的条目，必须包含在一个父元素里：一个有序列表 (`<ol>`)，一个无序列表 (`<ul>`)，或者一个菜单 (`<menu>`)。

## `<link>` 标签

用于外部资源链接，加载外部资源， 通常在 `<head>`中使用

## `<main>` 标签

语义元素，标识文档的主体

## `<map>` 标签

定义一个图像映射， 与 `<area>` 一起使用

## `<mark>` 标签

标记文本元素 (< Mark >) 表示为引用或符号目的而标记或突出显示的文本
显示为一个黄色的高亮背景

## `<menu>` 标签

实验中的功能，

## `<meta>` 标签

定义文档元数据

1. 设置文档 charset
2. 设置文档 http-equiv

## `<meter>` 标签

用来显示已知范围的标量值或者分数值。类似于进度条
例

```html
<meter min="200" max="500" value="350">350 degrees</meter>
```

## `<nav>` 标签

语义元素，定义文档导航，一般用于菜单

## `<noscript>` 标签

定义 html 文档不支持 `<script>`标签脚本的情况，noscript 标签中的内容会显示

## `<object>` 标签

引入一个外部资源，这个资源可能是一张图片，一个嵌入的浏览上下文，亦或是一个插件所使用的资源
会在标签位置显示

## `<ol>` 标签

定义有序列表

## `<optgroup>` 标签

表单控件 `<select>` option 分组使用

## `<option>` 标签

用于定义在 `<select>`, `<optgroup>` 或 `<datalist>` 元素中包含的项。

## `<output>` 标签

表示计算或用户操作的结果

## `<p>` 标签

表示文本的一个段落。该元素通常表现为一整块与相邻文本分离的文本，

## `<picture>` 标签

用于图片的适配，内部 `<source media="">`来控制在不同的分辨率下显示哪个图片

例

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

## `<pre>` 标签

显示预定格式的文本

例

```html
<pre>
  L          TE
    A       A
      C    V
       R A
       DOU
       LOU
      REUSE
      QUE TU
      PORTES
    ET QUI T'
    ORNE O CI
     VILISÉ
    OTE-  TU VEUX
     LA    BIEN
    SI      RESPI
            RER       - Apollinaire
</pre>
```

## `<progress>` 标签

显示一个进度条

例

```html
<progress id="file" max="100" value="70">70%</progress>
```

<progress id="file" max="100" value="70"> 70% </progress>

## `<q>` 标签

表示一个封闭的并且是短的行内引用的文本

## `<ruby>` 标签

用来展示东亚文字注音或字符注释。

例

```html
<ruby>
  汉 <rp>(</rp><rt>han</rt><rp>)</rp> 字 <rp>(</rp><rt>zi</rt><rp>)</rp>
</ruby>
```

<ruby>
  汉 <rp>(</rp><rt>han</rt><rp>)</rp>
  字 <rp>(</rp><rt>zi</rt><rp>)</rp>
</ruby>

## `<rp>` 标签

用于为那些不能使用 `<ruby>` 元素展示 ruby 注解的浏览器，提供随后的圆括号，支持则不显示 rq 中的内容

## `<rt>` 标签

用于注音

## `<s>` 标签

使用删除线来标记内容，来表示不再相关，或者不再准确的事情。
与 `<del>`标签相比，多了语义

## `<samp>` 标签

用于标识计算机程序输出，通常使用浏览器缺省的 monotype 字体

## `<script>` 标签

用于嵌入或引用可执行脚本，

1. async 属性标识异步加载，加载完就执行，没有文档先后
2. defer 属性，标识在文档完成解析后执行，触发 DOMContentLoaded 事件前执行，有文档先后顺序

## `<section>` 标签

语义元素，用于标识文档的章节

## `<select>` 标签

表单下拉选择控件

## `<slot>` 标签

Web Components 技术套件的一部分，是 Web 组件内的一个占位符。该占位符可以在后期使用自己的标记语言填充，这样您就可以创建单独的 DOM 树，并将它与其它的组件组合在一起。

## `<small>` 标签

使文本的字体变小一号。(例如从大变成中等，从中等变成小，从小变成超小)
html 中的语义为内容注释部分

## `<source>` 标签

为 `<picture>`, `<audio>` 或者 `<video>` 元素指定多个媒体资源

## `<span>` 标签

行级元素，与 `<div>`块级元素相反

## `<strong>` 标签

使文本显示为粗体，有强调的语义

## `<style>` 标签

用于插入 css 样式内容

## `<sub>` 标签

下标元素，用于化学方程或数学等

## `<sup>` 标签

上标元素

## `<table>` 标签

二维数据表
允许的子元素

- 一个可选的 `<caption>` 元素
- 零个或多个的 `<colgroup>` 元素
- 一个可选的 `<thead>` 元素
- 下列任意一个：
- 零个或多个 `<tbody>`
- 零个或多个 `<tr>`
- 一个可选的 `<tfoot>` 元素

## `<tbody>` 标签

表格主体内容

## `<thead>` 标签

定义表格头部

## `<tfoot>` 标签

定义表格底部

## `<tr>` 标签

定义表格行

## `<td>` 标签

定义表格单元格

## `<template>` 标签

内容模板，该内容在加载页面时不会呈现，但随后可以 (原文为 may be) 在运行时使用 JavaScript 实例化。
例

```html
<table id="producttable">
  <thead>
    <tr>
      <td>UPC_Code</td>
      <td>Product_Name</td>
    </tr>
  </thead>
  <tbody>
    <!-- 现有数据可以可选地包括在这里 -->
  </tbody>
</table>

<template id="productrow">
  <tr>
    <td class="record"></td>
    <td></td>
  </tr>
</template>
```

```js
// 通过检查来测试浏览器是否支持 HTML 模板元素
// 用于保存模板元素的内容属性。
if ("content" in document.createElement("template")) {
  // 使用现有的 HTML tbody 实例化表和该行与模板
  let t = document.querySelector("#productrow"),
    td = t.content.querySelectorAll("td");
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";

  // 克隆新行并将其插入表中
  let tb = document.getElementsByTagName("tbody");
  let clone = document.importNode(t.content, true);
  tb[0].appendChild(clone);

  // 创建一个新行
  td[0].textContent = "0384928528";
  td[1].textContent = "Acme Kidney Beans";

  // 克隆新行并将其插入表中
  let clone2 = document.importNode(t.content, true);
  tb[0].appendChild(clone2);
} else {
  // 找到另一种方法来添加行到表，因为不支持 HTML 模板元素。
}
```

## `<textarea>` 标签

表单控件，用于多行文本输入

## `<time>` 标签

来表示 24 小时制时间或者公历日期，若表示日期则也可包含时间和时区

## `<title>` 标签

定义文档的标题， 用于 `<head>`中

## `<track>` 标签

媒体元素字幕，当作媒体元素—`<audio>` 和 `<video>`的子元素来使用。它允许指定时序文本字幕（或者基于时间的数据），例如自动处理字幕。字幕格式有 WebVTT 格式 (en-US)（.vtt 格式文件）— Web 视频文本字幕格式，以及指时序文本标记语言（TTML）格式

## `u` 标签

表示一个需要标注为非文本化（non-textual）的内联文本域。默认情况下渲染为一个实线下划线，可以用 CSS 替换。

## `ul` 标签

无序列表

## `<var>` 标签

`<var> `元素表示数学表达式或编程上下文中的变量名称。尽管该行为取决于浏览器，但通常使用当前字体的斜体形式显示

## `<video>` 标签

用于嵌入媒体播放器

## `<wbr>` 标签

一个文本中的位置，其中浏览器可以选择来换行，虽然它的换行规则可能不会在这里换行。
