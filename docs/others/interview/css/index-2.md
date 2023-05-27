# 中级

## 为什么要初始化 CSS 样式

浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对 CSS 初始化往往会出现浏览器之间的页面显示差异

## display:none 与 visibility：hidden 的区别？

- `display: none` 不显示对应的元素，在文档布局中不再分配空间（回流+重绘）
- `visibility: hidden` 隐藏对应元素，在文档布局中仍保留原来的空间（重绘）

## 浮动是什么？会导致什么？怎么清除浮动？

设置元素`float: left;`定义元素浮动方向

- 浮动元素脱离文档流，不占据空间（引起“高度塌陷”现象）
- 浮动元素碰到包含它的边框或者其他浮动元素的边框停留

导致问题：

- 非 IE 浏览器下，容器不设高度且子元素浮动时，容器高度不能被内容撑开。 此时，内容会溢出到容器外面而影响布局。这种现象被称为浮动（溢出）
- 浮动元素的后一个元素会跟随浮动

清除浮动的方式如下：

- 给父级 `div` 定义 `height` 属性
- 最后一个浮动元素之后添加一个空的 `div` 标签，并添加 `clear:both` 样式
- 包含浮动元素的父级标签添加` overflow:hidden` 或者 `overflow:auto`
- 使用 `:after` 伪元素。由于 IE6-7 不支持 :after，使用 `zoom:1` 触发 hasLayout\*\*

## margin 折叠

两个块级元素的上外边距和下外边距可能会合并（折叠）为一个外边距，其大小会取其中外边距值大的那个，这种行为就是外边距折叠

计算原则：
折叠合并后外边距的计算原则如下：

如果两者都是正数，那么就去最大者
如果是一正一负，就会正值减去负值的绝对值
两个都是负值时，用 0 减去两个中绝对值大的那个

解决办法：

对于折叠的情况，主要有两种：兄弟之间重叠和父子之间重叠

1. 兄弟之间重叠

- 底部元素变为行内盒子：`display: inline-block`
- 底部元素设置浮动：`float`
- 底部元素的 `position` 的值为 `absolute/fixed`

2. 父子之间重叠

- 父元素加入：`overflow: hidden`
- 父元素添加透明边框：`border:1px solid transparent`
- 子元素变为行内盒子：`display: inline-block`
- 子元素加入浮动属性或定位

## 网页中字体大小怎么设置？为什么呢？

一般使用偶数字体大小，如 12px、14px、16px 等

原因是字体点阵为偶数，采用奇数字体，字体点阵不会变小，这样会使得字体变得稀疏

## 怎么设置小于 12px 的文字？

使用 CSS3 缩放, `transform: scale()`

```css
 {
  font-size: 10px;
  transform: scale(0.8);
}
```

## 动画效果的最小时间间隔

大多数显示器都是 60HZ 刷新率的屏幕，所以 1s 中内时间间隔当设置为 1000 / 60 = {{ (1000 / 60).toFixed(1)}} ms

## li 与 li 之间有看不见的空白间隔是什么原因引起的？有什么解决办法？

浏览器会把 inline 内联元素间的空白字符（空格、换行、Tab 等）渲染成一个空格

解决方法：

- 可以将`<li>`代码全部写在一排
- li 设置浮动 `float：left`
- 在 ul 中用 `font-size：0`（谷歌不支持）；可以使用`letter-space：-3px`

## CSS 中可继承与不可继承属性有哪些

- 无继承性的属性

  - display：规定元素应该生成的框的类型
  - 文本属性：

    - vertical-align：垂直文本对齐
    - text-decoration：规定添加到文本的装饰
    - text-shadow：文本阴影效果
    - white-space：空白符的处理
    - unicode-bidi：设置文本的方向

  - 盒子模型的属性：width、height、margin、border、padding
  - 背景属性：background、background-color、background-image、background-repeat、background-position、background-attachment
  - 定位属性：float、clear、position、top、right、bottom、left、min-width、min-height、max-width、max-height、overflow、clip、z-index
  - 生成内容属性：content、counter-reset、counter-increment
  - 轮廓样式属性：outline-style、outline-width、outline-color、outline
  - 页面样式属性：size、page-break-before、page-break-after
  - 声音样式属性：pause-before、pause-after、pause、cue-before、cue-after、cue、play-during

- 有继承性的属性

  - 字体系列属性

    - font-family：字体系列
    - font-weight：字体的粗细
    - font-size：字体的大小
    - font-style：字体的风格

  - 文本系列属性

    - text-indent：文本缩进
    - text-align：文本水平对齐
    - line-height：行高
    - word-spacing：单词之间的间距
    - letter-spacing：中文或者字母之间的间距
    - text-transform：控制文本大小写（就是 uppercase、lowercase、capitalize 这三个）
    - color：文本颜色

  - 元素可见性

    - visibility：控制元素显示隐藏

  - 列表布局属性
    - list-style：列表风格，包括 list-style-type、list-style-image 等
  - 光标属性
    - cursor：光标显示为何种形态

## 单行文本溢出隐藏

```css
 {
  /* 设置不换行 */
  white-space: nowrap;
  /* 设置溢出内容不显示 */
  overflow: hidden;
  /* 设置溢出用省略号 */
  text-overflow: ellipsis;
}
```

## 多行文本溢出隐藏

```css
 {
  /* 设置超出内容隐藏 */
  overflow: hidden;
  /* 设置溢出用省略号 */
  text-overflow: ellipsis;
  /* 设置使用弹性伸缩盒子模型 */
  display: -webkit-box;
  /* 设置盒子元素排列方式，垂直排列 */
  -webkit-box-orient: vertical;
  /* 设置显示行数 */
  -webkit-line-clamp: 3;
}
```

## 水平垂直居中的实现

- 利用绝对定位

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

/* 或者 */
/* 设置四个方向的值都为 0，并将 margin 设置为 auto，由于宽高固定，因此对应方向实现平分，可以实现水平和垂直方向上的居中 */

.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
```

- 使用 flex 布局

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## 实现一个三角形

主要使用 CSS border 特性，当 content 、padding 都没有时，border 会显示成上、下、左、右四个三角形组成

当设置其他方向 border 颜色为透明时，就得到一个三角形

```css
div {
  width: 0;
  height: 0;
  border-bottom: 50px solid red;
  border-right: 50px solid transparent;
  border-left: 50px solid transparent;
}
```

## 实现一个宽高自适应的正方形

- 利用`vw`实现

```css
 {
  width: 10vw;
  height: 10vw;
}
```

- 利用元素的 margin/padding 百分比是相对父元素 width 的性质来实现

```css
 {
  width: 20%;
  height: 0;
  padding-top: 20%;
  background: orange;
}
```

- 利用子元素的 margin-top 的值来实现：

```css
.square {
  width: 30%;
  overflow: hidden;
  background: yellow;
}
.square::after {
  content: "";
  display: block;
  margin-top: 100%;
}
```

## 画一条 0.5px 的线

- 采用 transform: scale()的方式

```css
 {
  transform: scale(0.5, 0.5);
}
```

- 采用 meta viewport 的方式

viewport只针对于移动端，只在移动端上才能看到效果
```html
<meta name="viewport" content="width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5"/>
```

## 如何解决 1px 问题？

window.devicePixelRatio = 设备的物理像素 / CSS像素。

利用物理像素与逻辑像素的比值，动态计算实际物理1px的值
