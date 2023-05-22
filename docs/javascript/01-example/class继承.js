class A{
  constructor() {
    this.a = 1
  }
  aa() {

  }
}

class B extends A {
  constructor() {
    super()
    this.b = 2
  }
  bb() {

  }
}

console.log(new B())