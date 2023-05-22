Array.prototype.myReduce = function(callback, initValue) {
  // 获取当前数组
  const arr = this
  // 设置total初始值,没有取数组第一个
  let total = initValue || arr[0]
  // 循环遍历
  for(let i = initValue ? 0 : 1; i < arr.length; i++ ){
    total = callback(total, arr[i], i, arr)
  }
  return total
}

// 测试
console.log([1, 2, 3, 4].myReduce((acc, cur) => acc + cur, 10))
