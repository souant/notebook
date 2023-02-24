/**
 * 这是使用import 引入其他js模块
 */

import sayHi from "./import.js"

function sayHello() {
  sayHi()
  const pDom = document.createElement("p")
  pDom.innerHTML = "hello, world！"
  document.body.appendChild(pDom)
}

export default sayHello
