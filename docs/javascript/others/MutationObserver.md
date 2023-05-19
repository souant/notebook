# MutationObserver

## 介绍

接口提供了监视对 DOM 树所做更改的能力。它被设计为旧的 Mutation Events 功能的替代品，该功能是 DOM3 Events 规范的一部分

1. 创建监听实例
```js
// 监听回调
function(mutationsList, observer) {
  // ...
}
// 创建实例
const observer = new MutationObserver(callback);
```
2. 监听 DOM 对象


```js
// 获取需要监听的对象
const targetNode = document.getElementById("#target");
const options = {
  childList: true,
};
// 监听
observer.observe(targetNode, options);
```

`observe` options

> 此对象的配置项描述了 DOM 的哪些变化应该报告给 MutationObserver 的 callback。当调用 observe() 时，childList、attributes 和 characterData 中，必须有一个参数为 true。否则会抛出 TypeError 异常。

> options 的属性如下：

> `subtree` 可选
> 当为 true 时，将会监听以 target 为根节点的整个子树。包括子树中所有节点的属性，而不仅仅是针对 target。默认值为 false。

> `childList` 可选
> 当为 true 时，监听 target 节点中发生的节点的新增与删除（同时，如果 subtree 为 true，会针对整个子树生效）。默认值为 false。

> `attributes` 可选
> 当为 true 时观察所有监听的节点属性值的变化。默认值为 true，当声明了 attributeFilter 或 attributeOldValue，默认值则为 false。

> `attributeFilter` 可选
> 一个用于声明哪些属性名会被监听的数组。如果不声明该属性，所有属性的变化都将触发通知。

> `attributeOldValue` 可选
> 当为 true 时，记录上一次被监听的节点的属性变化；可查阅监听属性值了解关于观察属性变化和属性值记录的详情。默认值为 false。

> `characterData` 可选
> 当为 true 时，监听声明的 target 节点上所有字符的变化。默认值为 true，如果声明了 characterDataOldValue，默认值则为 false

> `characterDataOldValue` 可选
> 当为 true 时，记录前一个被监听的节点中发生的文本变化。默认值为 false


3. 断开监听

```js
observer.disconnect();
```

## 应用场景
`mutationObserver`的应用场景非常广泛，以下是一些常见的例子：

自动保存表单：监听表单内容的变化，自动保存表单内容，避免用户手动点击保存按钮；

自动加载数据：监听列表滚动条位置的变化，自动加载更多数据；

观察者模式：监听一个对象的变化，当变化发生时触发相应的回调函数。

自动获取页面高度：监听页面添加元素成员,自动计算高度（微页面组装元素列表）

总之，`mutationObserver`可以帮助我们在DOM变化时及时更新页面，并提升用户体验。