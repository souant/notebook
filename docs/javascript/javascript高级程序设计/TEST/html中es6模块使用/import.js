function sayHi() {
  const pDom = document.createElement("p")
  pDom.innerHTML = "hi, 你好！"
  document.body.appendChild(pDom)
}

export default sayHi