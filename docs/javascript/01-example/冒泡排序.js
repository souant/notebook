// 冒泡排序
// 冒泡排序, 前一个数与后一个数比较

function bubbleSort(array) {
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length - i - 1; j++) {
      if(array[j] < array[j + 1]) {j
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
} 

// 测试
console.log(bubbleSort([2,1,4,6,2,3,1,8,2]))