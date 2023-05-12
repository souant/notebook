# Javascript 规约

## 一、编码风格

## 1.1 命名

1. ### 【强制】命名规范

- 命名均不能以下划线，也不能以下划线或美元符号结束

  反例： `_name / name_ / name$`

- 方法名、参数名、成员变量、局部变量都统一使用 lowerCamelCase 风格，必须遵从驼峰形式。

  正例： `localValue / getHttpMessage() / inputUserId`

  - 其中 method 方法命名必须是 动词 或者 动词 + 名词 形式
    正例：`saveShopCarData /openShopCarInfoDialog`
    反例：`save / open / show / go`
  - 特此说明，增删查改，详情统一使用如下 5 个单词，不得使用其他（目的是为了统一各个端）`add / update / delete / detail / get`

- 常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚，不要嫌名字长。

  正例： `MAX_STOCK_COUNT`

  反例： `MAX_COUNT`

- 使用大驼峰（PascalCase）命名类和构造函数。

附： 函数方法常用的动词: [附录1](#动词列表)



## 1.2 缩进

1. ### 【强制】使用 2 个空格缩进

统一使用 2 个空格缩进，不要使用 4 个空格或 tab 缩进：

正例：

```js
if (x < y) {
  x += 10;
} else {
  x += 1;
}
```

## 1.3 注释

1. ### 【强制】单行注释使用 `//`。

- 注释内容和注释符之间需要有一个空格
- 注释行上方需要有一个空行（除非注释行上方是一个块的顶部），以增加可读性

正例：

```js
const blur = true;
// is current tab
const active = true;
```

反例：

```js
const blur = true;

//is current tab
const active = true;
```

2. ### 【强制】多行注释使用 `/** ... */`，而不是多行的 //。

正例：

```js
// good
/**
 * make() returns a new elemen
 * based on the passed-in tag name
 */
function make(tag) {
  // ...return element
}
```

反例：

```js
// bad
// make() returns a new element
// based on the passed in tag name
function make(tag) {
  // ...return element
}
```

3. ### 【强制】文档类注释使用 jsdoc 规范。

文档类注释，如函数、类、文件、事件等，推荐使用 jsdoc 规范或类 jsdoc 的规范。

示例：

```js
/**
 * Book类，代表一个书本.
 * @constructor * @param {string} title - 书本的标题.
 * @param {string} author - 书本的作者.
 */
function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype = {
  /**
   * 获取书本的标题
   * @returns {string|*}
   */
  getTitle() {
    return this.title;
  },

  /**
   * 设置书本的页数
   * @param pageNum {number} 页数
   */
  setPageNum(pageNum) {
    this.pageNum = pageNum;
  },
};
```

## 1.3 代码块

1. ### 【推荐】不同逻辑、不同语义、不同业务的代码之间插入一个空行分隔开来以提升可读性。

说明：任何情形，没有必要插入多个空行进行隔开。

2. ### 【推荐】if 条件判断 和 for 循环最多三层

条件判断能使用三目运算符和逻辑运算符解决的，就不要使用条件判断，但是谨记不要写太长的三目运算符。如果超过 3 层请抽成函数，并写清楚注释。

3. ### 【强制】逗号分隔的多行结构，始终加上最后一个逗号。eslint: comma-dangle

这样可以使增删行更加容易，也会使 git diffs 更清晰。Babel 等编译器会在编译后的代码里帮我们去掉最后额外的逗号，因此不必担心在旧浏览器中的问题。

正例：

```js
// good
const hero = {
     firstName: 'Florence',
     lastName: 'Nightingale',
+    inventorOf: ['coxcomb chart', 'modern nursing'],
};
```

反例：

```js
// bad - 没有结尾逗号时
const hero = {
     firstName: 'Florence',
-    lastName: 'Nightingale',
     inventorOf: ['coxcomb chart', 'modern nursing']
};

```

4. ### 【强制】大括号换行风格

- 对于非空的代码块，大括号的换行方式采用 Egyptian Brackets 风格，具体规则如下：
  - 左大括号 `{` 前面不换行，后面换行
  - 右大括号 `}` 前面换行
  - 右大括号 `}` 后面是否换行有两种情况：
    - 如果 `}` 终结了整个语句，如条件语句、函数或类的主体，则需要换行
    - 如果 `}` 后面存在 else、catch、while 等语句，或存在逗号、分号、右小括号（`)`），则不需要换行
- 对于空代码块，可以将大括号直接闭合。

示例：

```js
// good
function doNothing() {}

// bad
if (condition) {
  // …
} else if (otherCondition) {
} else {
  // …
}

// good
if (condition) {
  // …
} else if (otherCondition) {
} else {
  // …
}

// bad
try {
  // …
} catch (e) {}

// good
try {
  // …
} catch (e) {}
```

5. ### 【强制】空格风格

- 块的左大括号 `{` 前有一个空格：
- 控制语句（if、while 等）的左小括号 `(` 前有一个空格：
- 声明函数时，函数名和参数列表之间无空格：`function a(p1, p2, ...) { }`
- 小括号(...)内部两侧无空格：
- 方括号[...]内部两侧无空格：
- 大括号{ ... }内部两侧有空格：
- 运算符两侧有空格，除了一元运算符：`let a = 1`
- 定义对象字面量时， key, value 之间有且只有一个空格，不允许所谓的「水平对齐」：

```js
let obj = {
  a: 1,
  b: 2,
};
```

6. ### 【推荐】在文件末尾保留一行空行

在非空文件中保留拖尾换行是一种常见的 UNIX 风格。它的好处同输出文件到终端一样，方便在串联和追加文件时不会打断 shell 的提示。

## 1.4 最大字符数和最大行数

1. ### 【推荐】单行最大字符数：120

过长的单行代码不易阅读和维护，需要进行合理换行。

我们推荐单行代码最多不要超过 120 个字符，除了以下两种情况：

- 字符串和模板字符串
- 正则表达式

2. ### 【推荐】文件最大行数：1000

过长的文件不易阅读和维护，最好对其进行拆分。

## 二、语言特性

## 2.1 变量申明

1. ### 【强制】使用 const 或 let 声明变量

从 ES6 开始，可以使用 let 和 const 关键字在块级作用域下声明变量。块级作用域在很多其他编程语言中都有使用，这样声明的变量不会污染全局命名空间。

正例：

```js
// good
const foo = "foo";
let bar;
```

反例：

```js
// bad
var foo = "foo";
var bar;
```

2. ### 【强制】声明的变量必须被使用

声明而未使用的变量、表达式可能带来潜在的问题，也会给维护者造成困扰，应将它们删除

3. ### 【强制】不要在声明前就使用变量

在 ES5 中，由于 var 的声明提升作用，变量可以在 � 声明前 � 使用，但这样做可能给人带来疑惑和隐患，所以不要在声明前就使用变量

4. ### 【强制】不要使用 `new Number/String/Boolean`创建变量

使用 `new Number/String//Boolean` 声明不会有任何好处，还会导致变量成为 `object` 类型，可能引起 bug。

正例：

```js
const num = 0;
const str = "foo";
const bool = false;

console.log(typeof num, typeof str, typeof bool); // => number, string, boolean

if (num) {
  // false（0 相当于 false）
}

if (bool) {
  // false
}
```

反例：

```js
const num = new Number(0);
const str = new String("foo");
const bool = new Boolean(false);
console.log(typeof num, typeof str, typeof bool); // => object, object, object
if (num) {
  // true（对象相当于 true）
}
if (bool) {
  // true（对象相当于 true）
}
```

## 2.2 字符串

1. ### 【强制】字符串优先使用单引号

统一使用单引号 (')，不使用双引号 (")。这在创建 HTML 字符串非常有好处：

正例：

```js
let str = "foo";
let testDiv = '<div id="test"></div>';
```

反例：

```js
let str = "foo";
let testDiv = "<div id='test'></div>";
```

1. 【推荐】使用模板字符串替代字符串拼接。

正例：

```js
// good
function getDisplayName({ nickName, realName }) {
  return `${nickName} (${realName})`;
}
```

反例

```js
// bad
function getDisplayName({ nickName, realName }) {
  return nickName + " (" + realName + ")";
}
```

## 2.3 数组 & 对象

1. ### 【强制】使用字面量创建数组 & 对象

不要使用 `new Array()` 和` Array()` 创建数组，除非为了构造某一长度的空数组。

正例:

```js
// good
const a = [1, 2, 3];
const b = new Array(500); // 构造长度为 500 的空数组

const obj = {};
```

反例

```js
// bad
const a = new Array(1, 2, 3);
const b = Array(1, 2, 3);

const obj = new Object();
```

2. ### 【强制】某些数组方法的回调函数中必须包含 `return` 语句

以下数组方法：
`map, filter, from , every, find, findIndex, reduce, reduceRight, some, sort `
的回调函数中必须包含 `return` 语句，否则可能会产生误用或错误。

## 2.4 函数

1. ### 【强制】不要用 `Function` 构造函数创建函数

使用 `new Function` 创建函数会像 `eval()` 方法一样执行字符串，带来安全隐患

正例

```js
// good
const sum = (a, b) => a + b;
```

反例

```js
// bad
const sum = new Function("a", "b", "return a + b");
```

2. ### 【强制】不要在块中使用函数声明。

在非函数块（如 `if、while` 等）中，不要使用函数声明：

正例

```js
// good - 函数表达式可以清晰地说明函数能否在块外使用
// 不能在块外使用
if (true) {
  const test = function () {
    console.log("test");
  };
}
test(); // => Uncaught ReferenceError: test is not defined

// 能在块外使用
let test;
if (true) {
  test = function () {
    console.log("test");
  };
}
test(); // => test
```

反例

```js
// bad - 函数声明不是块作用域而是函数作用域，因此在块外也能使用函数，容易引起误解
if (true) {
  function test() {
    console.log("test");
  }
}
test(); // => test
```

3. ### 【推荐】不要修改函数参数

不要修改引用类型的参数，这可能导致作为入参的原变量发生变化：
更不要给参数重新赋值，这可能导致意外的行为和内核优化问题：

示例

```js
// bad
const f1 = function f1(obj) {
  obj.key = 1;
};

const originalObj = {
  key: 0,
};

f1(originalObj);

console.log(originalObj); // => { key: 1 }
```

4. ### 【强制】`generator `函数内必须有 `yield` 语句

如果一个 `generator` 中没有 `yield` 语句，那么这个 `generator` 就不是必须的。

正例

```js
function* foo() {
  yield 5;
  return 10;
}
```

反例

```js
// bad
function* foo() {
  return 10;
}
```

## 2.5 操作符

1. ### 【推荐】使用严格相等运算符

非严格相等运算符（`==` 和 `!=`）会在比较前将被比较值转换为相同类型 �，对于不熟悉 JS 语言特性的人来说，这可能造成不小的隐患。了解更多

因此，一般情况下我们应该使用严格比较运算符（ `===` 和 `!==`）进行比较。� 如果要比较的两个值类型不同，应该显性地将其转换成相同类型再进行严格比较，而不是依赖于 `==` 和 `!=` 的隐式类型转换。

```js
// bad
const id = "83949"; // - 为了兼容 id 可能是字符串的情况，而有意使用 == 与数字比较
if (id == 83949) {
  // do something
}

// good
const id = "83949"; // - 如果 id 可能是字符串，应该先将其进行类型转换，再使用 === 进行比较
if (Number(id) === 83949) {
  // do something
}
```

2. ### 【强制】避免嵌套的三元表达式

嵌套的三元表达式会降低代码可读性。

```js
// bad
const foo = bar ? baz : qux === quxx ? bing : bam;

// good
const qu = qux === quxx ? bing : bam;
const foo = bar ? baz : qu;
```

## 2.6 其他

1. ### 【强制】禁止使用 `eval`

`eval` 语句存在安全风险，可能导致注入攻击。


***

# 附录
## 动词列表

| 动词     |          释义           |
| -------- | :---------------------: |
| get      |     获取/set 设置,      |
| add      |    增加/remove 删除     |
| create   |    创建/destory 移除    |
| start    |     启动/stop 停止      |
| open     |    打开/close 关闭,     |
| read     |     读取/write 写入     |
| load     |     载入/save 保存,     |
| create   |    创建/destroy 销毁    |
| begin    |     开始/end 结束,      |
| backup   |    备份/restore 恢复    |
| import   |    导入/export 导出,    |
| split    |     分割/merge 合并     |
| inject   |   注入/extract 提取,    |
| attach   |    附着/detach 脱离     |
| bind     |   绑定/separate 分离,   |
| view     |    查看/browse 浏览     |
| edit     |    编辑/modify 修改,    |
| select   |     选取/mark 标记      |
| copy     |    复制/paste 粘贴,     |
| undo     |     撤销/redo 重做      |
| insert   |    插入/delete 移除,    |
| add      |    加入/append 添加     |
| clean    |    清理/clear 清除,     |
| index    |     索引/sort 排序      |
| find     |    查找/search 搜索,    |
| increase |   增加/decrease 减少    |
| play     |    播放/pause 暂停,     |
| launch   |      启动/run 运行      |
| compile  |   编译/execute 执行,    |
| debug    |     调试/trace 跟踪     |
| observe  |    观察/listen 监听,    |
| build    |    构建/publish 发布    |
| input    |    输入/output 输出,    |
| encode   |    编码/decode 解码     |
| encrypt  |   加密/decrypt 解密,    |
| compress | 压缩/decompress 解压缩  |
| pack     |    打包/unpack 解包,    |
| parse    |     解析/emit 生成      |
| connect  |  连接/disconnect 断开,  |
| send     |    发送/receive 接收    |
| download |    下载/upload 上传,    |
| refresh  |  刷新/synchronize 同步  |
| update   |    更新/revert 复原,    |
| lock     |    锁定/unlock 解锁     |
| check    | out 签出/check in 签入, |
| submit   |    提交/commit 交付     |
| push     |       推/pull 拉,       |
| expand   |   展开/collapse 折叠    |
| begin    |     起始/end 结束,      |
| start    |    开始/finish 完成     |
| enter    |     进入/exit 退出,     |
| abort    |     放弃/quit 离开      |
| obsolete |  废弃/depreciate 废旧,  |
| collect  |   收集/aggregate 聚集   |