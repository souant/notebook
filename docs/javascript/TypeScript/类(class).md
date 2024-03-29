# 类与接口

## 类的概念

- **类**（Class）：定义了一件事物的抽象特点，包含它的属性和方法

```ts
class Point {
  // 属性类型
  x: number;
  y: number;

  // 构造函数
  constructor(x:number, y:number) {
    this.x = x;
    this.y = y;
  }
  // 类方法
  add(point:Point) {
    return new Point(
      this.x + point.x,
      this.y + point.y
    );
  }
}
```

- **对象**（Object）：类的实例，通过 new 生成

- **面向对象**（OOP）的三大特性：封装、继承、多态

  - 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
  - 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
  - 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 Cat 和 Dog 都继承自 Animal，但是分别实现了自己的 eat 方法。此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法，程序会自动判断出来应该如何执行 eat

- **存取器**（getter & setter）：用以改变属性的读取和赋值行为

```ts
class C {
  _name = "";
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}
```

- **修饰符**（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 public 表示公有属性或方法
- **抽象类**（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
- **接口**（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口

### 参数属性

- readonly 只读属性关键字，只允许出现在属性声明或索引签名或构造函数中。

### 访问修饰符

TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected。

- public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
- private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
- protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

### 静态成员

类的内部可以使用`static`关键字，定义静态成员。静态成员是只能通过类本身使用的成员，不能通过实例对象使用。

```ts
class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}

MyClass.x // 0
MyClass.printX() // 0
```

## 抽象类

abstract 用于定义抽象类和其中的抽象方法。

抽象类是不允许被实例化的：

```ts
abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

let a = new Animal("Jack");

// index.ts(9,11): error TS2511: Cannot create an instance of the abstract class 'Animal'.
```

## 接口

使用 `interface` 关键字定义

### 类实现接口

实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性。

```ts
interface Alarm {
  alert(): void;
}

class Door {}

class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log("SecurityDoor alert");
  }
}

class Car implements Alarm {
  alert() {
    console.log("Car alert");
  }
}
```

### 接口继承接口

接口与接口之间可以是继承关系：

```ts
interface Alarm {
  alert(): void;
}
// 继承后LightableAlarm接口就拥有Alarm的alert()方法
interface LightableAlarm extends Alarm {
  lightOn(): void;
  lightOff(): void;
}
```

### 接口继承类

常见的面向对象语言中，接口是不能继承类的，但是在 TypeScript 中却是可以的：

使用效果同上
