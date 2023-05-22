function noop () {}

class Watcher {
  constructor(name, func, cb) {
    this.name = name
    this.func = func 
    this.getter = func
    this.cb = cb
  }
  get () {
    console.log(3)
    let value
    value = this.getter.call(this)
    
    return value
  }
  run() {
    const value = this.get()
    this.cb()
  }
}

let w = new Watcher(2,() => {
  console.log(1)
}, noop)

w.run()