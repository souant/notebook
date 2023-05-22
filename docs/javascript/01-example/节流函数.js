// 节流函树，旨在连续变化的事件中，在规定的事件范围内只执行一次

function throttle(func, wait) {
  let timer = null
  return function() {
    let context = this
    let args =arguments
    // 时间范围内是否执行完成
    if(!timer) {
      timer = setTimeout(() => {
        // 执行完成
        timer = null
        func.apply(context, args)
      }, wait)
    }
  }
}