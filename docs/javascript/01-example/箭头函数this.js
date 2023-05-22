const obj1 = {
  a: 1,
  getA: function() {
    console.log(this.a)
    const jA = () => {
      console.log(this.a)
    }
    jA()
  },
  findA: () => {
    console.log(this.a)
  }
}

// 测试

obj1.getA()
obj1.findA()

console.log('使用call、apply')
obj1.getA.call({a: 2})
obj1.findA.call({a: 2})