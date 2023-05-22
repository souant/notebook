function Parent() {
  this.a = 1
  this.b = 2
}

Parent.prototype.getNum = function() {
  console.log(this.a)
}

function Child() {
  // 状态继承
  Parent.call(this)
  this.c = 3
}

// 原型继承
Child.prototype = Object.create(Parent.prototype)
Child.prototype.contructor = Child

let obj = new Child()

console.log(obj)

