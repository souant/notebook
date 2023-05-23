# DOM扩展

## 选择器API

- `querySelector(CSS选择符) ` 返回匹配该模式的第一个后代元素
- `querySelectorAll(CSS选择符)` 返回所有匹配的节点
- `matches(CSS选择符)` 元素匹配则该选择符返回 true，否则返回 false

## 元素遍历

- `childElementCount`，返回子元素数量（不包含文本节点和注释）；
- `firstElementChild`，指向第一个 Element 类型的子元素（Element 版 firstChild）；
- `lastElementChild`，指向最后一个 Element 类型的子元素（Element 版 lastChild）；
- `previousElementSibling` ，指向前一个 Element 类型的同胞元素（ Element 版previousSibling）；
- `nextElementSibling`，指向后一个 Element 类型的同胞元素（Element 版 nextSibling）。

## CSS扩展

- `getElementsByClassName()` 通过类名获取节点
- `dom.classList` 返回类名列表，DOMTokenList实例
    1. add(value)，向类名列表中添加指定的字符串值 value。如果这个值已经存在，则什么也不做。
  1. contains(value)，返回布尔值，表示给定的 value 是否存在。
  2. remove(value)，从类名列表中删除指定的字符串值 value。
  3. toggle(value)，如果类名列表中已经存在指定的 value，则删除；如果不存在，则添加。

## HTMLDocument 扩展

- `document.readyState` 文档加载状态 loading，表示文档正在加载；complete，表示文档加载完成。
- `document.compatMode` 文档渲染模式 CSS1Compat，标准模式；BackCompat，混杂模式
- `document.head` 文档`<dead>`引用
- `document.characterSet` 文档字符集

## 自定义数据属性

使用 `data-attrName="value"`定义

可以使用 `document.dataset.attrName` 获取自定义属性值

> 注意：attrName在html标签中使用短横线，在获取时需使用小驼峰名

```html
<div id="myDiv" data-appId="12345" data-myname="Nicholas"></div>
```
```js
// 本例中使用的方法仅用于示范
let div = document.getElementById("myDiv"); 
// 取得自定义数据属性的值
let appId = div.dataset.appId; 
let myName = div.dataset.myname; 
// 设置自定义数据属性的值
div.dataset.appId = 23456; 
div.dataset.myname = "Michael"; 
// 有"myname"吗？
if (div.dataset.myname){ 
 console.log(`Hello, ${div.dataset.myname}`); 
}
```

## 插入标记innerHTML&outerHTML

1. innerHTML

innerHTML根据提供的字符串值以新的 DOM 子树替代元素中原来包含的所有节点

所有现代浏览器中，通过 innerHTML 插入的`<script>`标签是不会执行的

2. outerHTML
   
写入outerHTML 属性时，调用它的元素会被传入的 HTML字符串经解释之后生成的 DOM 子树取代


## 专有扩展

### contains()方法

目标节点是被搜索节点的后代，contains()返回 true

```js
console.log(document.documentElement.contains(document.body)); // true
```

