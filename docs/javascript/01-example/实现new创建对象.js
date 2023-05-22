function myNew(constructor) {
  // 创建空对象
  const obj = new Object()
  // 修改原型
  obj.__proto__ = constructor.prototype
  // 将作用域付给新对象
  const res = constructor.apply(obj, [...arguments].slice(1))
  // 返回对象
  return typeof res === 'object' ? res : obj
}

function A(b) {
  this.a = 1
  this.b = b
}

console.log(myNew(A, 2))