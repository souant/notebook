# 类型别名

## 定义

类型别名常用于联合类型

使用`type`关键字

```ts
type TypeName = {
  name: string;
  age: number;
};
```

## 字符串字面量类型

字符串字面量类型用来约束取值只能是某几个字符串中的一个。

```ts
type EventNames = "click" | "scroll" | "mousemove";
function handleEvent(ele: Element, event: EventNames) {
  // do something
}

handleEvent(document.getElementById("hello"), "scroll"); // 没问题
handleEvent(document.getElementById("world"), "dblclick"); // 报错，event 不能为 'dblclick'
```



