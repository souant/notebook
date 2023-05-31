# 异步更新与 nextTick()

当 `vue` 完成第一次渲染后，任何改变状态 `state` 的操作都会调用 `dep.notify()`

`dep.notify()`调用 `subs[i].update()`，也就是 `Watcher` 的 `update()`方法

`update()`执行，调用 `queueWatcher()`，该方法相当于把要执行的 `Watcher` 放入执行队列

执行队列在统一执行所有需要执行的 `Watcher`，完成更新渲染

## 执行核心代码

```js
/**
 * Observer
 * 值改变 update
 */
Object.defineProperty(obj, key, {
  // ...
  set: function reactiveSetter(newVal) {
    // ...
    // 调用发布
    dep.notify();
  }
}

/**
 * Dep
 * 发布者 执行发布
 */
export default class Dep {
  // ...


  notify () {
    const subs = this.subs.slice()
    // ...
    for (let i = 0, l = subs.length; i < l; i++) {
      // 执行绑定的Wathcer update()
      subs[i].update()
    }
  }

  // ...
}

/**
 * Watcher 执行
 *
 */
export default class Watcher {

  // ...

  // 执行update
  update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true
    } else if (this.sync) {
      this.run()
    } else {
      queueWatcher(this)
    }
  }

  // ...
}

/**
 * 将Watcher 加入执行队列
 * 默认执行队列时wating = false状态
 * 直接执行nextTick()
 */

export function queueWatcher (watcher: Watcher) {
  const id = watcher.id
  if (has[id] == null) {
    // 将Wathcer加入到执行队列，queue
    has[id] = true
    if (!flushing) {
      queue.push(watcher)
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      let i = queue.length - 1
      while (i > index && queue[i].id > watcher.id) {
        i--
      }
      queue.splice(i + 1, 0, watcher)
    }
    // 默认 false 直接执行
    if (!waiting) {
      waiting = true

      // ...
      /**
       * 使用nextTick, 收集同步依赖
       * 再执行所有Wacher,flushSchedulerQueue
       */
      nextTick(flushSchedulerQueue)
    }
  }
}

// Watcher 队列执行器
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow()
  flushing = true
  let watcher, id

  // 排序，保证父组件先执行
  queue.sort((a, b) => a.id - b.id)

  for (index = 0; index < queue.length; index++) {
    // ...
    // 执行
    watcher.run()

  }

  resetSchedulerState()
}

// 执行队列完成执行
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0
  has = {}

  waiting = flushing = false
}


```

## nextTick()

`nextTick()`是 `vue` 的异步更新策略实现的主要模式

`nextTick()`利用 `javascript EventLoop`，在一次事件循环中，可以搜集所有需要执行的`Watcher`，提升渲染性能,

执行 `nextTick()`函数:
1. 搜集所有异步回调函数，`callbacks`
2. 创建异步任务，异步任务执行时，执行所有的`callbacks`

### 核心代码

```js
// nextTick是否在等待
let pending = false;
// 异步执行回调函数
let timerFunc;

export function nextTick(cb?: Function, ctx?: Object) {
  let _resolve;
  // 搜集回调
  callbacks.push(() => {
    // ...
    cb.call(ctx);
    // ...
  });
  /**
   * 判断是否pending
   * !pending可以执行
   */
  if (!pending) {
    pending = true;
    // 执行异步任务
    timerFunc();
  }
  // ..
}

// 创建异步任务，并执行回调
if (typeof Promise !== "undefined" && isNative(Promise)) {
  const p = Promise.resolve();
  timerFunc = () => {
    p.then(flushCallbacks);
    // ...
  };
  isUsingMicroTask = true;
}

// 所有回调执行函数
function flushCallbacks() {
  pending = false;
  const copies = callbacks.slice(0);
  callbacks.length = 0;
  for (let i = 0; i < copies.length; i++) {
    copies[i]();
  }
}
```
