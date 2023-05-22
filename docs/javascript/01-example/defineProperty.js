let obj = {
  a: 1,
  b: 2,
}

function observer(obj, key) {
  let value = obj[key]
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      
      return value + 1
    },
    set: function (newVal) {
      value = newVal
    }
  })
} 

for(let key in obj) {
  observer(obj, key)
}

console.log(obj.a)
obj.b = 5
console.log(JSON.stringify(obj))
console.log(obj.b)