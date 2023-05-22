// 防抖函数 旨在规定的时间范围后只执行一次
// 存在两种情况，1、立即执行，2、规定时间后执行
function debounce(func, wait, immediate) {
  let timer = null
  return function () {
    let context = this
    let args = arguments
    // timer还在，清除
    if(timer) clearTimeout(timer)
    // 立即执行
    if(immediate) {
      // 未执行
      if(!timer) func.apply(context, args)
      timer = setTimeout(() => {
        // 设置timer执行完成
        timer = null
      }, wait)
    } else {
      timer = setTimeout(() => {
        func.apply(context, args)
      }, wait)
    }
  }
}