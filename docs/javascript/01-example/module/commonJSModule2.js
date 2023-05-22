const m1 = require('./commonJSModule1')
m1.a = 0
m1.b.c = 0
module.exports = {
  h: 1,
  i: {
    j: 2,
    k: {
      l: m1.b.c
    }
  }
}