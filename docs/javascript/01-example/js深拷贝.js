function deepclone(obj = {}) {
  if(typeof obj !== 'object' && obj !== null) {
    return obj
  }
  let result = {}

  if(obj instanceof Array || Object.prototype.toString.call(obj) === 'object Array') {
    result = []
  }

  for(const key in obj) {
    if(obj.hasOwnProperty(key)) {
      result[key] = deepclone(obj[key])
    }
  }

  return result
}

let obj = {
  a: {
    b: {
      c: '1'
    }
  }
}

let deepcloneObj = deepclone(obj)

console.log("验证是否deepclone obj.a.b !== deepcloneObj.a.b:", obj.a.b !== deepcloneObj.a.b)