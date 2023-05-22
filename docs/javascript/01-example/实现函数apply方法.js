Function.prototype.myApply = function(context) {
  if(typeof this !== 'function') {
    throw new Error('错误类型')
  }
  // 获取参数
  let args = [...arguments][1] || []
  // 定义结果
  let result = null
  // 获取需要执行的函数，并绑定到context
  context.fn = this
  // 执行函数
  result = context.fn(...args)
  // 删除绑定
  delete context.fn
  return result
}

// 测试
var obj1 = {
  a: 1
}
var obj2 = {
  a: 2,
  b: function() {
    return this.a
  }
}

console.log("obj2.b():", obj2.b())
console.log("obj2.b.myApply(obj1):", obj2.b.myApply(obj1))