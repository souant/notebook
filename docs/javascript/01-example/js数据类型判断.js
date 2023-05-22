// js 8中类型判断
// 使用typeof
console.log('typeof undefined: ', typeof undefined) // typeof undefined:  undefined
console.log('typeof 2: ', typeof 2) // typeof 2:  number
console.log('typeof "abc": ', typeof 'abc') // typeof "abc":  string
console.log('typeof true: ', typeof true) // typeof true:  boolean
console.log('typeof null: ', typeof null) // typeof null:  object
console.log('typeof []: ', typeof []) // typeof []:  object
console.log('typeof {}: ', typeof {}) // typeof {}:  object
console.log('typeof Symbol("s"): ', typeof Symbol("s")) // typeof Symbol("s"):  symbol
console.log('typeof 2172171653n: ', typeof 2172171653n) // typeof 2172171653n:  bigint
// 函数
console.log('typeof function() {}: ', typeof function() {}) // typeof function() {}:  function

// 使用 instanceof 该方法判断的是对象的原型对象
console.log('{} instanceof Object:', {} instanceof Object) // {} instanceof Object: true

// 使用 Object.prototype.toString()
console.log('Object.prototype.toString.call(undefined):', Object.prototype.toString.call(undefined)) // [object Undefined]
console.log('Object.prototype.toString.call(2):', Object.prototype.toString.call(2)) // [object Number]
console.log('Object.prototype.toString.call("abc"):', Object.prototype.toString.call("abc")) // call(" [object String]
console.log('Object.prototype.toString.call(true):', Object.prototype.toString.call(true)) // call [object Boolean]
console.log('Object.prototype.toString.call(null):', Object.prototype.toString.call(null)) // call [object Null]
console.log('Object.prototype.toString.call([]):', Object.prototype.toString.call([])) // [object Array]
console.log('Object.prototype.toString.call({}):', Object.prototype.toString.call({})) // [object Object]
console.log('Object.prototype.toString.call(Symbol("s")):', Object.prototype.toString.call(Symbol("s"))) // [object Symbol]
console.log('Object.prototype.toString.call(2172171653n):', Object.prototype.toString.call(2172171653n)) // [object BigInt]
