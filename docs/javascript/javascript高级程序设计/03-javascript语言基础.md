---
lang: zh-CN
title: 03-javascript语言基础
description: 03-javascript语言基础
contributors: false
---

# 语言基础

## js6种原始数据类型
  1. Undefined
  2. Null
  3. Boolean
  4. Number
  5. String
  6. Symbol


## typeof 操作符
> typeof对值类型的判断返回值，7种
  1. undefined  未定义
  2. boolean 布尔值
  3. string 字符串
  4. number 数字
  5. function 函数
  6. symbol 符号
  7. object 对象（null值返回也是这个）
   
> typeof 一个未声明的变量  返回: undefined

## Undefined类型
> 值未初始化，默认值为undefined
> 

## Null类型
> null表示空对象指针，所以typeof null。返回object  
> null是一个假值，`Boolean(null); // false`  
> undefined值由null值派生而来，所以 
```js
console.log(undefined == null); // true
console.log(undefined === null); // false
```

## Boolean类型（布尔值，两个值true | false）
> true 不等于 1 ; false 不等于 0


## Number类型（数字类型）
> 整数的表示，使用没有小数点的数字声明  
> 小数为双精度数字，浮点精度最高小数点后17位   
> 特殊的数值 NaN (not a number), 表示不是数字，NaN 不等于 NaN  
> 

```js
console.log(Number(false)); // 0
console.log(Number(true)); // 1
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number('')); // 0
console.log(Number('0000112')); // 112
console.log(Number({})); // NaN
console.log(isNaN(1)); // false
console.log(isNaN('1')); // false
console.log(isNaN(false)); // false
console.log(isNaN(true)); // false
console.log(isNaN('true')); // true
console.log(isNaN(NaN)); // true
console.log(isNaN(undefined)); // true
console.log(isNaN('')); // false
console.log(isNaN(null)); // false
```
> isNaN方法判断时，会做隐式的类型转换

## String类型（字符串）
> toString()方法可用于将数字转换进制


## Symbol类型（符号）
> 初始化需要用Symbol()函数初始化  
> 对象object可用Symbol类型的值作为键值

## Object类型（对象）
> 一组数据和功能的集合  
> 使用 new 关键词创建  

### 每个Object对象都有的属性和方法
  1. constructor: （属性） 当前对象的创建函数
  2. hasOwnProperty(propertyName): (方法) 判断参数propertyName是否为该对象的属性
  3. isPrototypeof(object): (方法) 判断当前对象是否为传入的参数对象的原型
  4. propertyIsEnumerable(propertyName): (方法) 判断传入的属性在该对象中是否可用
  5. toLocaleString(): (方法) 返回对象的字符串表示，类似于object.toString()
  6. toString(): (方法) 返回对象的字符串表示
  7. valueOf(): (方法)  返回对象对应的字符串、数字或布尔值表示，通常与toString()一致

## Function类型（函数）
> 默认返回值undefined
