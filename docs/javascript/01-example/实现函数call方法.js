Function.prototype.myCall = function(context) {
  // 判断调用该方法的是不是函数
  if(typeof this !== 'function') {
    throw new Error("type error")
  }
  // 解析参数，call方法参数是一个一个的，去除context
  let args = [...arguments].slice(1)
  // 定义结果
  let result = null
  // 判断是否有context, 没有设置为window
  context = context || window
  // 将调用的函数给到fn上，this即为调用的函数
  context.fn = this
  // 执行函数
  result = context.fn(...args)
  // 删除fn
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
console.log("obj2.b.myCall(obj1):", obj2.b.myCall(obj1))