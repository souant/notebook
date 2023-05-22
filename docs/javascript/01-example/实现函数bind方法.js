Function.prototype.myBind = function(context) {
  if(typeof this !== 'function') {
    throw new Error('type Error')
  }
  let args = [...arguments].slice(1)
  // 获取当前函数 = this
  const fn = this
  return function Fn() {
    return fn.apply(context, [...args, ...arguments])
  }
}