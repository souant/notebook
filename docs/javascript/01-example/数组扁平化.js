// 数组扁平化
function flat(arr) {
  return arr.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? flat(cur) : cur) 
  }, [])
}

// 测试
console.log(flat([1, [2, [2, 3, [2, 1]]], [3, 1, [2,1]]]))

