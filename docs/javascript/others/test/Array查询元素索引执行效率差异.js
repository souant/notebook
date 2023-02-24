let arr = [];
// 生成一个100万级的随机整数, 并在里面插入一个目标值
for (let i = 0; i <= 1000000; i++) {
  if (i === 678900) {
    arr.push("target");
    continue;
  }
  const number = parseInt(Math.random() * 1000000);
  arr.push(number);
}
console.log(arr);
// indexOf
console.log("----------------------indexOf:");
console.time();
console.log(arr.indexOf("target"));
console.timeEnd();
//findIndex
console.log("----------------------findIndex:");
console.time();
console.log(arr.findIndex((it) => it === "target"));
console.timeEnd();
//find
console.log("----------------------find:");
console.time();
console.log(arr.find((it) => it === "target"));
console.timeEnd();
//for
console.log("----------------------for:");
console.time();
let index = -1
for(let i = 0; i< arr.length; i++) {
  if(arr[i] === 'target') {
    index = i
    break
  }
}
console.log(index);
console.timeEnd();

