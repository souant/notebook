# 初级

## CSS 的盒子模型

`content + padding + border + margin`

- 标准盒子模型: 宽/高是内容(content)
- IE 盒子模型: 宽/高是(content + padding + border)

```css
/* 标准盒子模型 */
box-sizing: content-box;
/* IE盒子模型 */
box-sizing: border-box;
```

## CSS 选择器

| 选择器         | 格式          | 优先级权重 |
| -------------- | :------------ | ---------- |
| id 选择器      | #id           | 100        |
| 类选择器       | #classname    | 10         |
| 属性选择器     | a[ref="eee"]  | 10         |
| 伪类选择器     | li:last-child | 10         |
| 标签选择器     | div           | 1          |
| 伪元素选择器   | li:after      | 1          |
| 相邻兄弟选择器 | h1+p          | 0          |
| 子选择器       | ul>li         | 0          |
| 后代选择器     | li a          | 0          |
| 通配符选择器   | \*            | 0          |

## CSS 选择器优先级

!important > 内联样式 > id > [class 、 属性 、伪类 ] > [标签 、伪元素 ]

如果优先级相同，则最后出现的样式生效

样式表的来源不同时，优先级顺序为：内联样式 > 内部样式 > 外部样式 > 浏览器用户自定义样式 > 浏览器默认样式

## display 有哪些值及其含义

- inherit 规定应该从父元素继承 display 属性的值。
- none 元素不显示，并且会从文档流中移除。
- inline 行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。
- inline-block 默认宽度为内容宽度，可以设置宽高，同行显示。
- block 块类型。默认宽度为父元素宽度，可设置宽高，换行显示。
- table 此元素会作为块级表格来显示。
- list-item 像块类型元素一样显示，并添加样式列表标记。

行内元素和块级元素，其特点如下：

（1）行内元素

- 设置宽高无效；
- 可以设置水平方向的 margin 和 padding 属性，不能设置垂直方向的 padding 和 margin；
- 不会自动换行；

（2）块级元素

- 可以设置宽高；
- 设置 margin 和 padding 都有效；
- 可以自动换行；
- 多个块状，默认排列从上到下。

## position 有哪些值

- inherit 规定从父元素继承position属性的值
- static（默认） 默认值，没有定位，元素出现在正常的文档流中
- relative（相对定位） 生成相对定位的元素，相对于其原来的位置进行定位。元素的位置通过left、top、right、bottom属性进行规定。
- absolute(绝对定位) 生成绝对定位的元素，相对于static定位以外的一个父元素进行定位。元素的位置通过left、top、right、bottom属性进行规定
- fixed(固定定位) 生成绝对定位的元素，指定元素相对于屏幕视⼝（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变，⽐如回到顶部的按钮⼀般都是⽤此定位⽅式。

## 伪类与伪元素

> 注意：CSS2 中伪类、伪元素都是以单冒号，css2.1 后做了区分

- 伪类，使用`:`单冒号，类似于声明的 class 类，选择处于特定状态的元素，如：

  - :link 未访问的链接
  - :hover 鼠标悬停链接
  - :active 已选择的链接
  - :visited 已访问的链接
  - :first-child 选中第一个子元素
  - :nth-child(n) 选中第 n 个子元素

- 伪元素，使用`::`双冒号，创建通常不存在于文档中的元素，如：
  - ::before 在之前创建一个不在文档树中的元素
  - ::before 在之后创建一个不在文档树中的元素
  - ::placeholder 选中表单元素的占位文本

## CSS3 中有哪些新特性

- 新增各种 CSS 选择器 （: not(.input)：所有 class 不是“input”的节点）
- 圆角 （border-radius:8px）
- 多列布局 （multi-column layout）
- 阴影和反射 （Shadoweflect）
- 文字特效 （text-shadow）
- 文字渲染 （Text-decoration）
- 线性渐变 （gradient）
- 过度 （transform） 增加了旋转,缩放,定位,倾斜,等
- 动画 （animation）


## 常见的CSS布局单位

- `px`，物理像素或逻辑像素
- `%`，百分比，相对值，一般为子元素的百分比相对于直接父元素
- `em`，文本相对长度单位
- `rem`，rem是CSS3新增的一个相对单位，相对于根元素（html元素）的font-size的倍数
- `vw` ，视图窗口单位，相对于视图窗口的宽度
- `vh`，视图窗口单位，相对于视图窗口高度
- `vmin`，相对单位，当前 vw 和 vh 中较小的一个值 ，其中较小的被分为 100 份 。
- `vmax`，当前 vw 和 vh 中较大的一个值 。其中较大的值被分为 100 份。
