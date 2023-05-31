# Array 类型 Observer

其实 Array 类型跟 Object 类型一样，修改某一个属性也无法观察到变化。

vue2 只是针对 Array 类型的自操作方法做了重写，当调用这些方法时使用的就是 Vue 定义的方法

`push`,
`pop`,
`shift`,
`unshift`,
`splice`,
`sort`,
`reverse`

## 核心代码

```js
import { def } from "../util/index";

const arrayProto = Array.prototype;
export const arrayMethods = Object.create(arrayProto);

const methodsToPatch = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse",
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  const original = arrayProto[method];
  def(arrayMethods, method, function mutator(...args) {
    const result = original.apply(this, args);
    const ob = this.__ob__;
    let inserted;
    switch (method) {
      case "push":
      case "unshift":
        inserted = args;
        break;
      case "splice":
        inserted = args.slice(2);
        break;
    }
    if (inserted) ob.observeArray(inserted);
    // notify change
    ob.dep.notify();
    return result;
  });
});
```
