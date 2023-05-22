// 一个未resolve reject的Primose
let p = new Promise((resolve, reject) => {
  
})
console.log(p)
console.log(p.then())

let p = new Promise((resolve, reject) => {
  resolve(1)
})
console.log(p)
console.log(p.then().then().catch())

// 一个未resolve的Primose
let p = new Promise((resolve, reject) => {
  resolve(1)
})
console.log(p)
console.log(p.then())

// 一个reject的Primose
let p = new Promise((resolve, reject) => {
  reject(1)
})
console.log(p)
console.log(p.then())

// promise.then(resolveCallback,rejectCallback)
// 定义了第二个参数的回调reject错误不会进入catch
let p = new Promise((resolve, reject) => {
  reject(1)
})
console.log(p)
console.log(p.then(() => console.log(11), () => console.log(22)).catch((err) => console.log(33)))

// promise.then() 返回的promise
let p = new Promise((resolve,reject) => {
  reject('error')
})

p
.then(res => console.log("then1:" + res))
.then(res => console.log("then2:" + res))
.catch(err => console.log("catch:" + err))
.then(res => console.log("then3:" + res))

// promise.then()中返回一个promise
let p = new Promise((resolve,reject) => {
  resolve('success')
})

p
.then(res => new Promise((resolve,reject) => resolve('success2')))
.then(res => console.log("then:" + res))