# 高级

## 对 BFC 规范(块级格式化上下文：block formatting context)的理解？

先来看两个相关的概念

Box: Box 是 CSS 布局的对象和基本单位，⼀个⻚⾯是由很多个 Box 组成的，这个 Box 就是我们所说的盒模型。

Formatting context：块级上下⽂格式化，它是⻚⾯中的⼀块渲染区域，并且有⼀套渲染规则，它决定了其⼦元素将如何定位，以及和其他元素的关系和相互作⽤。

BFC 的特点：

- 垂直方向上，自上而下排列，和文档流的排列方式一致。
- 在 BFC 中上下相邻的两个容器的 margin 会重叠
- 计算 BFC 的高度时，需要计算浮动元素的高度
- BFC 区域不会与浮动的容器发生重叠
- BFC 是独立的容器，容器内部元素不会影响外部元素
- 每个元素的左 margin 值和容器的左 border 相接触

满足下列条件之一就可触发 BFC

- 根元素：`body`；
- 元素设置浮动：`float` 除 none 以外的值；
- 元素设置绝对定位：`position (absolute、fixed)`；
- `display` 值为：`inline-block、table-cell、table-caption、flex` 等；
- `overflow` 值为：`hidden、auto、scroll`；

BFC 的作用

- 解决 margin 的重叠问题：由于 BFC 是一个独立的区域，内部的元素和外部的元素互不影响，将两个元素变为两个 BFC，就解决了 margin 重叠的问题。
- 解决高度塌陷的问题：在对子元素设置浮动后，父元素会发生高度塌陷，也就是父元素的高度变为 0。解决这个问题，只需要把父元素变成一个 BFC。常用的办法是给父元素设置 overflow:hidden。
- 创建自适应两栏布局：可以用来创建自适应两栏布局：左边的宽度固定，右边的宽度自适应

## link 和@import 的区别

两者都是外部引用 CSS 的方式，它们的区别如下：

- link 是 XHTML 标签，除了加载 CSS 外，还可以定义 RSS 等其他事务；@import 属于 CSS 范畴，只能加载 CSS。
- link 引用 CSS 时，在页面载入时同时加载；@import 需要页面网页完全载入以后加载。
- link 是 XHTML 标签，无兼容问题；@import 是在 CSS2.1 提出的，低版本的浏览器不支持。
- link 支持使用 Javascript 控制 DOM 去改变样式；而@import 不支持。

## display:none 与 visibility:hidden 的区别

这两个属性都是让元素隐藏，不可见。两者区别如下：

1. 在渲染树中

- display:none 会让元素完全从渲染树中消失，渲染时不会占据任何空间；
- visibility:hidden 不会让元素从渲染树中消失，渲染的元素还会占据相应的空间，只是内容不可见。

2. 是否是继承属性

- display:none 是非继承属性，子孙节点会随着父节点从渲染树消失，通过修改子孙节点的属性也无法显示；
- visibility:hidden 是继承属性，子孙节点消失是由于继承了 hidden，通过设置 visibility:visible 可以让子孙节点显示；

3. 修改常规文档流中元素的 display 通常会造成文档的重排，但是修改 visibility 属性只会造成本元素的重绘；

4. 如果使用读屏器，设置为 display:none 的内容不会被读取，设置为 visibility:hidden 的内容会被读取。

## 为什么有时候⽤ translate 来改变位置⽽不是定位？

改变 transform 或 opacity 不会触发浏览器重新布局（reflow）或重绘（repaint），只会触发复合（compositions）

transform 使浏览器为元素创建⼀个 GPU 图层，但改变绝对定位会使⽤到 CPU。

因此 translate()更⾼效，可以缩短平滑动画的绘制时间。 ⽽ translate 改变位置时，元素依然会占据其原始空间，绝对定位就不会发⽣这种情况

## 常见的图片格式及使用场景

1. `BMP`，是无损的、既支持索引色也支持直接色的点阵图。这种图片格式几乎没有对数据进行压缩，所以 BMP 格式的图片通常是较大的文件。
2. `GIF`，是无损的、采用索引色的点阵图。采用 LZW 压缩算法进行编码。文件小，是 GIF 格式的优点，同时，GIF 格式还具有支持动画以及透明的优点。但是 GIF 格式仅支持 8bit 的索引色，所以 GIF 格式适用于对色彩要求不高同时需要文件体积较小的场景。
3. `JPEG`，是有损的、采用直接色的点阵图。JPEG 的图片的优点是采用了直接色，得益于更丰富的色彩，JPEG 非常适合用来存储照片，与 GIF 相比，JPEG 不适合用来存储企业 Logo、线框类的图。因为有损压缩会导致图片模糊，而直接色的选用，又会导致图片文件较 GIF 更大。
4. `PNG-8`，是无损的、使用索引色的点阵图。PNG 是一种比较新的图片格式，PNG-8 是非常好的 GIF 格式替代者，在可能的情况下，应该尽可能的使用 PNG-8 而不是 GIF，因为在相同的图片效果下，PNG-8 具有更小的文件体积。除此之外，PNG-8 还支持透明度的调节，而 GIF 并不支持。除非需要动画的支持，否则没有理由使用 GIF 而不是 PNG-8。
5. `PNG-24`，是无损的、使用直接色的点阵图。PNG-24 的优点在于它压缩了图片的数据，使得同样效果的图片，PNG-24 格式的文件大小要比 BMP 小得多。当然，PNG24 的图片还是要比 JPEG、GIF、PNG-8 大得多。
6. `SVG`，是无损的矢量图。SVG 是矢量图意味着 SVG 图片由直线和曲线以及绘制它们的方法组成。当放大 SVG 图片时，看到的还是线和曲线，而不会出现像素点。SVG 图片在放大时，不会失真，所以它适合用来绘制 Logo、Icon 等。
7. `WebP`，是谷歌开发的一种新图片格式，WebP 是同时支持有损和无损压缩的、使用直接色的点阵图。从名字就可以看出来它是为 Web 而生的，什么叫为 Web 而生呢？就是说相同质量的图片，WebP 具有更小的文件体积。现在网站上充满了大量的图片，如果能够降低每一个图片的文件大小，那么将大大减少浏览器和服务器之间的数据传输量，进而降低访问延迟，提升访问体验。目前只有 Chrome 浏览器和 Opera 浏览器支持 WebP 格式，兼容性不太好。

- 在无损压缩的情况下，相同质量的 WebP 图片，文件大小要比 PNG 小 26%；
- 在有损压缩的情况下，具有相同图片精度的 WebP 图片，文件大小要比 JPEG 小 25%~34%；
- WebP 图片格式支持图片透明度，一个无损压缩的 WebP 图片，如果要支持透明度只需要 22%的格外文件大小。

## CSS 优化和提高性能的方法有哪些

- 加载性能：
  1. css 压缩：将写好的 css 进行打包压缩，可以减小文件体积。
  2. css 单一样式：当需要下边距和左边距的时候，很多时候会选择使用 margin:top 0 bottom 0；但 margin-bottom:bottom;margin-left:left;执行效率会更高。
  3. 减少使用`@import`，建议使用 link，因为后者在页面加载时一起加载，前者是等待页面加载完成之后再进行加载。
- 选择器性能：

  1. 关键选择器（key selector）。选择器的最后面的部分为关键选择器（即用来匹配目标元素的部分）。CSS 选择符是从右到左进行匹配的。当使用后代选择器的时候，浏览器会遍历所有子元素来确定是否是指定的元素等等；
  2. 如果规则拥有 ID 选择器作为其关键选择器，则不要为规则增加标签。过滤掉无关的规则（这样样式系统就不会浪费时间去匹配它们了）。
  3. 避免使用通配规则，如\*{}计算次数惊人，只对需要用到的元素进行选择。
  4. 尽量少的去对标签进行选择，而是用 class。
  5. 尽量少的去使用后代选择器，降低选择器的权重值。后代选择器的开销是最高的，尽量将选择器的深度降到最低，最高不要超过三层，更多的使用类来关联每一个标签元素。
  6. 了解哪些属性是可以通过继承而来的，然后避免对这些属性重复指定规则。

- 渲染性能：

  1. 慎重使用高性能属性：浮动、定位。
  2. 尽量减少页面重排、重绘。
  3. 去除空规则：｛｝。空规则的产生原因一般来说是为了预留样式。去除这些空规则无疑能减少 css 文档体积。
  4. 属性值为 0 时，不加单位。
  5. 属性值为浮动小数 0.\*\*，可以省略小数点之前的 0。
  6. 标准化各种浏览器前缀：带浏览器前缀的在前。标准属性在后。
  7. 不使用@import 前缀，它会影响 css 的加载速度。
  8. 选择器优化嵌套，尽量避免层级过深。
  9. css 雪碧图，同一页面相近部分的小图标，方便使用，减少页面的请求次数，但是同时图片本身会变大，使用时，优劣考虑清楚，再使用。
  10. 正确使用 display 的属性，由于 display 的作用，某些样式组合会无效，徒增样式体积的同时也影响解析性能。
  11. 不滥用 web 字体。对于中文网站来说 WebFonts 可能很陌生，国外却很流行。web fonts 通常体积庞大，而且一些浏览器在下载 web fonts 时会阻塞页面渲染损伤性能。

## Sass、Less 是什么？为什么要使用他们？

他们都是 CSS 预处理器，是 CSS 上的一种抽象层。他们是一种特殊的语法/语言编译成 CSS。 例如 Less 是一种动态样式语言，将 CSS 赋予了动态语言的特性，如变量，继承，运算， 函数，LESS 既可以在客户端上运行 (支持 IE 6+, Webkit, Firefox)，也可以在服务端运行 (借助 Node.js)。

## Flex 布局

使用 ` display: flex; | display: inline-flex;` 定义弹性盒子

flex 盒子定义属性：

- `flex-direction:  row | row-reverse | column | column-reverse; ` 定义主轴方向
- `flex-wrap: nowrap | wrap | wrap-reverse;` 定义主轴方向如何换行
- `flex-flow: <flex-direction> || <flex-wrap>` 默认值为`row nowrap`
- `justify-content: flex-start | flex-end | center | space-between | space-around;` 定义在主轴上的对齐方式
- `align-items: flex-start | flex-end | center | baseline | stretch;` 定义在交叉轴上如何对齐
- `align-content: flex-start | flex-end | center | space-between | space-around | stretch;` 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用

flex item 定义属性：

- `order: <integer>;` 定义项目的排列顺序。数值越小，排列越靠前，默认为 0
- `flex-grow: <number>; /* default 0 */` 定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大
- `flex-shrink: <number>; /* default 1 */` 定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小
- `flex-basis: <length> | auto; /* default auto */` 定义了在分配多余空间之前，项目占据的主轴空间（main size）
- `flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]` `flex-grow, flex-shrink 和 flex-basis`的简写，默认值为`0 1 auto` 后两个属性可选
- `align-self: auto | flex-start | flex-end | center | baseline | stretch;` 允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch

## Grid 网格布局

`display: grid;  display: inline-grid;`指定一个容器采用网格布局

划分`行`和`列`:

- `grid-template-columns: 100px 100px 100px;` 三列, 列宽 100px
- `grid-template-rows: 100px 100px 100px;` 三行, 行高 100px

1. repeat()

重复写同样的值非常麻烦，尤其网格很多时。这时，可以使用 repeat()函数，简化重复的值

- `grid-template-columns: repeat(3, 100px);` 三列, 列宽 100px
- `grid-template-rows: repeat(3, 100px);` 三行, 行高 100px

2. auto-fill 关键字

有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用 auto-fill 关键字表示自动填充
`grid-template-columns: repeat(auto-fill, 100px);`

3. fr 关键字
   如果两列的宽度分别为 1fr 和 2fr，就表示后者是前者的两倍
   `grid-template-columns: 1fr 1fr;`

4. minmax()
   minmax()函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值
   `grid-template-columns: 1fr 1fr minmax(100px, 1fr);`

5. auto 关键字  
   auto 关键字表示由浏览器自己决定长度。
   `grid-template-columns: 100px auto 100px;`

6. 网格线的名称

```css
grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
```

- `grid-gap` 属性是 grid-column-gap 和 grid-row-gap 的合并简写形式，语法如下
- `grid-template-areas` 网格布局允许指定"区域"（area），一个区域由单个或多个单元格组成。grid-template-areas 属性用于定义区域
- `grid-auto-flow ` 划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。默认的放置顺序是"先行后列"，即先填满第一行，再开始放入第二行

- `justify-items: start | end | center | stretch;` justify-items 属性设置单元格内容的水平位置（左中右），
- `align-items: start | end | center | stretch;` align-items 属性设置单元格内容的垂直位置（上中下）
- `place-items: <align-items> <justify-items>; ` place-items 属性是 align-items 属性和 justify-items 属性的合并简写形式
