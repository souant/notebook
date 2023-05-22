// 快速排序
// 设一个中间基准点值,将数组按基准点的大小分为左右数组,递归执行,就得到排序
function quickSort(array) {
  if(array.length < 1) return array
  // 基准索引, 取中间值
  let midIndex = Math.floor(array.length / 2)
  // 获取基准点的值, 并从列表中删除
  let midValue = array.splice(midIndex, 1)[0]
  // 设置左数组
  let left = []
  // 设置右数组
  let right = []

  for(let i = 0; i < array.length; i++ ) {
    if(array[i] < midValue) {
      left.push(array[i])
    } else{
      right.push(array[i])
    }
  }

  return quickSort(left).concat(midValue).concat(quickSort(right))

}

// 测试
console.log(quickSort([2,1,4,6,2,3,1,8,2]))