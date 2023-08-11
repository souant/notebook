# interface 与 type 的区别


有下面几点。

（1）type能够表示非对象类型，而interface只能表示对象类型（包括数组、函数等）。

（2）interface可以继承其他类型，type不支持继承。

（3）同名interface会自动合并，同名type则会报错。也就是说，TypeScript 不允许使用type多次定义同一个类型。

```ts
type A = { foo:number }; // 报错
type A = { bar:number }; // 报错

// 作为比较，interface则会自动合并。

interface A { foo:number };
interface A { bar:number };

const obj:A = {
  foo: 1,
  bar: 1
};
```

（4）interface不能包含属性映射（mapping），type可以。

```ts
interface Point {
  x: number;
  y: number;
}

// 正确
type PointCopy1 = {
  [Key in keyof Point]: Point[Key];
};

// 报错
interface PointCopy2 {
  [Key in keyof Point]: Point[Key];
};
```

（5）this关键字只能用于interface。

```ts
// 正确
interface Foo {
  add(num:number): this;
};

// 报错
type Foo = {
  add(num:number): this;
};
```

（6）type 可以扩展原始数据类型，interface 不行。

```ts
// 正确
type MyStr = string & {
  type: 'new'
};

// 报错
interface MyStr extends string {
  type: 'new'
}
```

（7）interface无法表达某些复杂类型（比如交叉类型`&`和联合类型`|`），但是type可以

