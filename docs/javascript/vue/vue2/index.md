# vue2

## 核心执行流程

![vue核心](../images/01.png)

## Vue 实例

```js
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

/**
 * 混入初始化
 */
initMixin(Vue)
/**
 * 混入状态state相关
 * $props
 * $data
 * $set
 * $delete
 * $watch
 */
stateMixin(Vue)
/**
 * 混入事件相关
 * $on
 * $emit
 * $once
 * $off
 */
eventsMixin(Vue)
/**
 * 混入生命周期相关
 * _update
 * $forceUpdate
 * $destroy
 */
lifecycleMixin(Vue)
/**
 * 混入渲染相关
 * $nextTick
 * _render
 */
renderMixin(Vue)

export default Vue

```
## 初始化阶段


```js
export function initMixin (Vue: Class<Component>) {
  Vue.prototype._init = function (options?: Object) {
    const vm: Component = this
    
    // ...
    
    /**
     * 初始化生命周期相关内容，如：
     * $parent
     * $root
     * $children
     * $refs
     * 
     * _isMounted
     * _isDestroyed
     * _isBeginDestroyed
     */
    initLifecycle(vm)
    /**
     * 初始化事件属性，如：
     * _events
     */
    initEvents(vm)
    /**
     * 初始化渲染器, 如：
     * _vdom 定义虚拟dom
     * $slots 定义插槽
     * $createElement 定义虚拟dom构建函数
     */
    initRender(vm)
    /**
     * beforeCreate 生命周期钩子
     */
    callHook(vm, 'beforeCreate')
    /**
     * 初始化inject
     */
    initInjections(vm) // resolve injections before data/props
    /**
     * 初始化状态state
     * initProps 初始化props
     * initMethods 初始化methods,主要为methods bind vue this
     * initData 初始化data, 将data定义响应式
     * initComputed 初始化computed
     * initWatch 初始化监听器
     */
    initState(vm)
    /**
     * 初始化注入器provide
     */
    initProvide(vm) // resolve provide after data/props
    /**
     * created 生命周期钩子
     */
    callHook(vm, 'created')

    // ...

    /**
     * 判断mount元素$el
     */
    if (vm.$options.el) {
      /**
       * 执行mountComponent()
       * 创建渲染Watcher，new Watcher()
       * 并执行渲染函数，得到虚拟dom，vm._update(vm._render(), hydrating)
       * 最后执行__patch__函数，完成dom更新渲染，vm.__patch__(prevVnode, vnode)
       */
      vm.$mount(vm.$options.el)
    }
  }
}
```

## 渲染阶段

```js
export function mountComponent (
  vm: Component,
  el: ?Element,
  hydrating?: boolean
): Component {
  vm.$el = el

  /**
   * 判断是否有渲染函数render
   */
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode
    // ...
  }

  /**
   * 经过判断$el以及render()
   * 执行beforeMount()
   */
  callHook(vm, 'beforeMount')

  /**
   * 生成一个渲染更新函数updateComponent
   * 此函数首先执行渲染函数render()得到VDOM
   * 再执行执行VDOM更新函数vm._update(VDOM)
   */
  let updateComponent
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
   // ...
  } else {
    updateComponent = () => {
      vm._update(vm._render(), hydrating)
    }
  }

  /**
   * 创建渲染Watcher
   * 并执行updateComponent()函数
   */
  new Watcher(vm, updateComponent, noop, {
    before () {
      /**
       * 提供给更新时执行beforeUpdate()
       */
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate')
      }
    }
  }, true /* isRenderWatcher */)
  hydrating = false

  /**
   * 渲染完成
   * 执行mounted()
   */
  if (vm.$vnode == null) {
    vm._isMounted = true
    callHook(vm, 'mounted')
  }
  return vm
}
```

## 更新阶段


```js

/**
 * state发生变化
 */
export function defineReactive (
  obj: Object,
  key: string,
  val: any,
  customSetter?: ?Function,
  shallow?: boolean
) {
  const dep = new Dep()

  // ...

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      const value = getter ? getter.call(obj) : val
      /**
       * 依赖收集
       * dep.depend()会在上面渲染阶段执行render()函数时执行
       * 会为每个被观察的属性绑定渲染Watcher
       */
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
          if (Array.isArray(value)) {
            dependArray(value)
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      const value = getter ? getter.call(obj) : val

      // ...

      /**
       * 当修改data的值时触发set
       * 执行当前state的dep.notify()发布方法
       * 再执行每个dep中绑定的Watcher
       */
      dep.notify()
    }
  })
}

/**
 * Dep执行
 */
export default class Dep {

  // ...

  notify () {
    // stabilize the subscriber list first
    const subs = this.subs.slice()
    
    /**
     * 遍历每个Watcher，执行Watcher的update()方法
     * update()方法则会执行绑定的执行函数
     */
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}


/**
 * Watcher执行
 */
export default class Watcher {

  // ...

  update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true
    } else if (this.sync) {
      this.run()
    } else {

      /**
       * 普通的state变更
       * 会将需要执行的Watcher优先放入执行队列
       * 使用$nexttick在一次EventLoop中收集，再一起执行
       */
      queueWatcher(this)
    }
  }

  run () {
    if (this.active) {
      
      // 执行Watcher绑定的执行函数
      const value = this.get()
     
     // ...
    }
  }
}


/**
 * 更新队列执行
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow()
  flushing = true
  let watcher, id

  
  queue.sort((a, b) => a.id - b.id)

  // 执行Watcher队列
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index]
    /**
     * 执行beforeUpdate()
     */
    if (watcher.before) {
      watcher.before()
    }
    id = watcher.id
    has[id] = null
    /**
     * 执行更新操作
     */
    watcher.run()
    
    // ...
  }

  // ...

  /**
   * 执行updated()
   */
  callUpdatedHooks(updatedQueue)

  // ...
}
function callUpdatedHooks (queue) {
  let i = queue.length
  while (i--) {
    const watcher = queue[i]
    const vm = watcher.vm
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated')
    }
  }
}
```

## 销毁阶段

```js
/**
 * 执行$destroy方法
 * 
 */
Vue.prototype.$destroy = function () {
    const vm: Component = this
    /**
     * 判断是否已销毁
     */
    if (vm._isBeingDestroyed) {
      return
    }
    /**
     * 执行beforeDestroy()
     */
    callHook(vm, 'beforeDestroy')
    vm._isBeingDestroyed = true
    /**
     * 根据父vue实例
     * 从vue实例树中移除自己
     */
    const parent = vm.$parent
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm)
    }
    /**
     * 销毁Watcher
     */
    if (vm._watcher) {
      vm._watcher.teardown()
    }
    let i = vm._watchers.length
    while (i--) {
      vm._watchers[i].teardown()
    }
    /**
     * vue实例数递减
     */
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--
    }
    
    vm._isDestroyed = true
    /**
     * 移除DOM节点
     */
    vm.__patch__(vm._vnode, null)
    /**
     * 执行destroyed()
     */
    callHook(vm, 'destroyed')
    /**
     * 移除事件
     */
    vm.$off()
    /**
     * DOM节点置空
     */
    if (vm.$el) {
      vm.$el.__vue__ = null
    }
    if (vm.$vnode) {
      vm.$vnode.parent = null
    }
  }

```