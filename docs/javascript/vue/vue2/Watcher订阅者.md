# Watcher 订阅者

Watcher 实例用于定义 vue 响应式系统各项操作的执行者

Watcher 实例分为： 渲染 Watcher、computed Watcher 、 user Watcher

- `render Watcher`: 用于执行渲染虚拟 DOM，以及更新虚拟 DOM 操作
- `computed Watcher`: 用于 `computed Options` 声明的计算属性
- `user Watcher`: 用户自定义的 `Watcher`，`watch options` 声明的或者 `this.$watch()` 定义的


## 核心代码

```js
export default class Watcher {
  // ...
  constructor(
    vm: Component,
    expOrFn: string | Function,
    cb: Function,
    options?: ?Object,
    isRenderWatcher?: boolean
  ) {
    this.vm = vm;

    // ...

    /**
     * 判断传入的Watcher执行代码函数
     */
    if (typeof expOrFn === "function") {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = noop;
        process.env.NODE_ENV !== "production" &&
          warn(
            `Failed watching path: "${expOrFn}" ` +
              "Watcher only accepts simple dot-delimited paths. " +
              "For full control, use a function instead.",
            vm
          );
      }
    }

    /**
     * 创建Watcher实例
     * 判断lazy, 会执行wathcer操作
     */
    this.value = this.lazy ? undefined : this.get();
  }

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  get() {
    pushTarget(this);
    let value;
    const vm = this.vm;
    try {
      /**
       * this.getter 为watcher的操作函数
       */
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, `getter for watcher "${this.expression}"`);
      } else {
        throw e;
      }
    } finally {
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value;
  }

  /**
   * 添加Wathcer到Dep
   */
  addDep (dep: Dep) {
    const id = dep.id
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id)
      this.newDeps.push(dep)
      if (!this.depIds.has(id)) {
        dep.addSub(this)
      }
    }
  }

  // ...
  

  /**
   * Watcher 执行
   */
  update() {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      /**
       * 将需要执行的Watcher加入执行队列
       */
      queueWatcher(this);
    }
  }

  /**
   * 判断实例是否active
   * 再执行
   */
  run() {
    if (this.active) {
      /**
       * 执行watcher
       */
      const value = this.get();
      // ...
    }
  }

  // ...

  /**
   * Watcher关联dep
   */
  depend() {
    let i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  }

  // ...
}
```

