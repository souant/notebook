# for循环中return、break、continue作用

## break

> for 循环中使用break；只会结束当前for循环，对于for循环外无影响

```js
function forFun() {
  for(let i = 0; i < 4; i++) {
    if(i == 2) break;
    console.log(i)
  }
  console.log('for end')
}
forFun()
// 0
// 1
// for end
```

## return

> for循环中使用return，会结束当前for循环，也会直接结束函数执行

```js
function forFun() {
  for(let i = 0; i < 4; i++) {
    if(i == 2) return;
    console.log(i)
  }
  console.log('for end')
}
forFun()
// 0
// 1
```

## continue

> for循环中使用continue，只会跳过当前循环

```js
function forFun() {
  for(let i = 0; i < 4; i++) {
    if(i == 2) continue;
    console.log(i)
  }
  console.log('for end')
}
forFun()
// 0
// 1
// 3
// for end
```
