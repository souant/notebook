# DOM

文档对象模型（DOM，Document Object Model）是 HTML 和 XML 文档的编程接口

DOM 表示由多层节点构成的文档，通过它开发者可以添加、删除和修改页面的各个部分

## DOM 节点层级

```html
<html>
  <head>
    <title>Sample Page</title>
  </head>
  <body>
    <p>Hello World!</p>
  </body>
</html>
```

## Node & Document

以下是 DOM 节点类型常量

1. `Node.ELEMENT_NODE` 元素节点
2. `Node.ATTRIBUTE_NODE` 属性节点
3. `Node.TEXT_NODE` 文本节点
4. `Node.CDATA_SECTION_NODE` XML 中特有的 CDATA 区块，只在 XML 文档中有效, `<![CDATA[This is some content.]]>`
5. `Node.ENTITY_REFERENCE_NODE `
6. `Node.ENTITY_NODE`
7. `Node.PROCESSING_INSTRUCTION_NODE`
8. `Node.COMMENT_NODE` 注释节点，`<!-- A comment -->`
9. `Node.DOCUMENT_NODE`
10. `Node.DOCUMENT_TYPE_NODE ` DocumentType 类型的节点包含文档的文档类型信息，<!DOCTYPE HTML PUBLIC "-// W3C// DTD HTML 4.01// EN" "http:// www.w3.org/TR/html4/strict.dtd">
11. `Node.DOCUMENT_FRAGMENT_NODE` DocumentFragment 类型是唯一一个在标记中没有对应表示的类型， document.createDocumentFragment()创建
12. `Node.NOTATION_NODE`

### Node

- `dom.nodeType` 返回 dom 节点的类型
- `dom.nodeName` 返回 dom 节点的标签名
- `dom.childNodes` 返回该 dom 下的子节点 DOM 列表，是一个 NodeList 实例
- `dom.parentNode` 返回该节点的父节点 DOM
- `dom.previousSibling` 返回该节点相邻的上一个节点 DOM，该节点是第一个节点，返回 null
- `dom.nextSibling` 返回该节点相邻的下一个节点 DOM，该节点是最后一个节点，返回 null
- `dom.firstChild` 返回子节点的第一个，没有子节点，返回 null
- `dom.lastChild` 返回子节点的最后一个，没有子节点，返回 null
- `dom.appendChild(childNode)` 在该节点的子节点末尾添加一个子节点
- `dom.insertBefore(childNode, 插入位置子节点)` 插入位置子节点不传，将子节点插入到末尾
- `dom.replaceChild(newNode, replaceNode)` 替换子节点
- `dom.removeChild(childNode)` 删除子节点
- `dom.cloneNode(是否深度clone)` 克隆节点
- `dom.getAttribute('attrName')` 获取节点属性值
- `dom.setAttribute(attrName, attrValue)` 设置节点属性值
- `dom.removeAttribute(attrName)` 移除属性

### Document

- `document.doctype` 取得对<!doctype>的引用
- `document.documentElement` 获取`<html>`引用
- `document.head` 获取`<head>`引用
- `document.body` 获取`<body>`引用
- `document.title` 获取文档标题内容，也可以修改
- `document.URL` 获取文档 URL
- `document.domain` 获取文档域名
- `document.referrer` 获取文档来源
- `document.anchors` 获取文档中所有带 name 属性的`<a>`元素
- `document.links` 获取文档中所有带 href 属性的`<a>`元素
- `document.applets` 获取文档中所有`<applet>`元素, `<applet>`不再使用
- `document.forms` 获取文档中所有`<form>`元素
- `document.images` 获取文档中所有`<img>`元素

创建与查询

- `document.createElement("标签名")` 创建元素 ，
- 定位 DOM 获取 DOM 标签
  1.  `document.getElementById("ID名")`
  2.  `document.getElementByClassName("类名")`
  3.  `document.getElementByTagName("标签名")`

## MutationObserver 接口

MutationObserver 监听 DOM 变化

MutationObserver回调都会收到一个 MutationRecord 实例的数组，包含的信息包括发生了什么变化，以及 DOM 的哪一部分受到了影响

连续修改会生成多个 MutationRecord 实例

```js
let observer = new MutationObserver((mutationRecords) => {
  console.log(mutationRecords);
});
observer.observe(document.body, { attributes: true });
document.body.setAttribute("foo", "bar");
// [
//  {
//    addedNodes: NodeList [],
//    attributeName: "foo",
//    attributeNamespace: null,
//    nextSibling: null,
//    oldValue: null,
//    previousSibling: null
//    removedNodes: NodeList [],
//    target: body
//    type: "attributes"
//  }
// ]

// 终止执行回调
observer.disconnect();
```

MutationObserverInit 与观察范围

- `subtree` 布尔值，表示除了目标节点，是否观察目标节点的子树（后代）如果是 false，则只观察目标节点的变化；
  如果是 true，则观察目标节点及其整个子树 默认为 false
- `attributes` 布尔值，表示是否观察目标节点的属性变化
  默认为 false
- `attributeFilter` 字符串数组，表示要观察哪些属性的变化
  把这个值设置为 true 也会将 attributes 的值转换为 true
  默认为观察所有属性
- `attributeOldValue` 布尔值，表示 `MutationRecord` 是否记录变化之前的属性值
  把这个值设置为 true 也会将 attributes 的值转换为 true
  默认为 false

- `characterData` 布尔值，表示修改字符数据是否触发变化事件默认为 false
- `characterDataOldValue` 布尔值，表示 MutationRecord 是否记录变化之前的字符数据
  把这个值设置为 true 也会将 characterData 的值转换为 true
  默认为 false
- `childList` 布尔值，表示修改目标节点的子节点是否触发变化事件
  默认为 false

参考：[MutationObserver](../../others/MutationObserver.html)
