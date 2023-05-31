# Dep 发布者

`Dep` 是 `Watcher` 的管理员，内有 `subs` 属性管理 `watcher`

`vue` 观察者会给每一个属性分配一个 `Dep` 实例

当值改变时，触发 `set` 操作，`dep` 实例调用 `notify()`方法，运行绑定的 `watcher` 执行渲染或其他操作

## 核心代码

```js
export default class Dep {
  static target: ?Watcher;
  id: number;
  subs: Array<Watcher>;

  constructor() {
    this.id = uid++;
    this.subs = [];
  }

  addSub(sub: Watcher) {
    this.subs.push(sub);
  }

  removeSub(sub: Watcher) {
    remove(this.subs, sub);
  }

  /**
   * depend 用于依赖watcher添加
   * 默认data属性未被使用时，不会添加相关watcher
   */
  depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  }

  /**
   * 当观察者observer值改变时触发
   */
  notify() {
    // stabilize the subscriber list first
    const subs = this.subs.slice();
    if (process.env.NODE_ENV !== "production" && !config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort((a, b) => a.id - b.id);
    }
    for (let i = 0, l = subs.length; i < l; i++) {
      /**
       * 调用watcher update()方法执行watcher的操作
       */
      subs[i].update();
    }
  }
}
```
