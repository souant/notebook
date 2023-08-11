# 装饰器(Decorator)

装饰器（Decorator）是一种语法结构，用来在定义时修改类（class）的行为。

在语法上，装饰器有如下几个特征。

（1）第一个字符（或者说前缀）是@，后面是一个表达式。

（2）@后面的表达式，必须是一个函数（或者执行后可以得到一个函数）。

（3）这个函数接受所修饰对象的一些相关值作为参数。

（4）这个函数要么不返回值，要么返回一个新对象取代所修饰的目标对象。

## 装饰器的结构

装饰器函数的类型

```ts
type Decorator = (
  // value所装饰的对象
  value: DecoratedValue,
  // context上下文对象，TypeScript 提供一个原生接口
  context: {
    // kind：字符串，表示所装饰对象的类型，可能取以下的值
    // 'class'
    // 'method'
    // 'getter'
    // 'setter'
    // 'field'
    // 'accessor'
    kind: string;
    // name：字符串或者 Symbol 值，所装饰对象的名字，比如类名、属性名等。
    name: string | symbol;
    // addInitializer()：函数，用来添加类的初始化逻辑。以前，这些逻辑通常放在构造函数里面，对方法进行初始化，现在改成以函数形式传入addInitializer()方法。注意，addInitializer()没有返回值。
    addInitializer?(initializer: () => void): void;
    // static：布尔值，表示所装饰的对象是否为类的静态成员。
    static?: boolean;
    // private：布尔值，表示所装饰的对象是否为类的私有成员。
    private?: boolean;
    // access：一个对象，包含了某个值的 get 和 set 方法。
    access: {
      get?(): unknown;
      set?(value: unknown): void;
    };
  }
) => void | ReplacementValue;
```

## 类装饰器

```ts
type ClassDecorator = (
  value: Function,
  context: {
    kind: 'class';
    name: string | undefined;
    addInitializer(initializer: () => void): void;
  }
) => Function | void;


```
