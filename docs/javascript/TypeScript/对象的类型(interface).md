# 对象的类型

在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型

interface 是对象的模板，可以看作是一种类型约定

在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）

## 定义 Interfaces

使用关键词 `interface` 定义

```ts
// 接口
interface Person {
  name: string;
  age: number;
}
// 对象
let tom: Person = {
  name: "Tom",
  age: 25,
};

```
:::warning
由上接口定义了`name`和`age`，那么对象初始化也必须要有`name`和`age`的属性，多一个或者少一个都不行
:::

## 定义可选属性

接口定义后，初始化的对象属性必须与接口定义的一致，但是这样不利于接口的复用

所以可选属性也是很重要的一种定义方式

使用`?:`定义可选属性

```ts
// 接口
interface Person {
    name: string;
    // 可选属性
    age?: number;
}
// 对象
let tom: Person = {
    name: 'Tom'
};
```
:::warning
可选属性只是标识属性`age`是否可选，如果要增加不属于定义的`name`和`age`的属性，也是不行的
:::

## 定义任意属性

如果要定义一个不清楚属性名称的的属性，那就需要使用任意属性来定义

使用 `[propName string]: number` 来定义

一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型

```ts
// 接口
interface Person {
    name: string;
    // 可选属性
    age?: number;
    // 任意属性
    [propName string]: number
}
// 对象
let tom: Person = {
    name: 'Tom',
    score: 11
};
```

## 定义只读属性

用户标识对象属性只只读，不能修改

使用 `readonly` 定义

```ts
// 接口
interface Person {
    readonly id: number;
    name: string;
    // 可选属性
    age?: number;
    // 任意属性
    [propName string]: number
}
// 对象
let tom: Person = {
    id: 1,
    name: 'Tom',
    score: 11
};
// 会报错
tom.id = 2
```

:::warning
注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
:::

