---
lang: zh-CN
title: 02-script标签
description: 02-script标签
---

# `<script>`标签

将JavaScript插入到HTML中，主要使用script标签  

所有的script标签中的脚本程序会依次按照在文档中的顺序被执行，文档解析会在当前位置的脚本执行完成后再开始解析。  

防止这种情况，可将script标签防止再body标签的最后，或使用异步或延迟属性



## `<script>`标签的8个属性  

  1. async: 可选。表示立即加载脚本，但不阻碍页面其他动作，异步加载
  2. charset: 可选。标识加载的脚本代码字符集
  3. crossorigin: 可选。配置脚本加载请求跨域设置
  4. defer: 可选。表示延迟到文档加载完成后再加载脚本
  5. integrity: 可选。加密签名设置。emm: 没用过
  6. language: <span style="color: red">废弃 </span>。
  7. src: 可选。加载的脚本外部地址。
  8. type: 可选。标识脚本的语言类型(也称MIME类型)。值为："module"，表示代码会被当成es6模块

> script标签的两种用法，1、在html文档中嵌入代码。2、引入外部js文件


## **defer**与**async**的相同点与不同点  

相同点：

1. 两者均不会阻塞文档的解析。
2. 均加载外部脚本时使用。
3. 都是立即加载
   
不同点：

1. defer加载的脚本会顺序执行，async加载的脚本会在加载完成后执行
2. defer加载的脚本都会在DOMContentLoaded事件前执行
3. async可能会在DOMContenLoaded事件之前或之后执行，一定会在页面load事件前执行


## 动态脚本加载

使用`document.createElement("scrit")` 动态创建`script`标签，并加载到HTML中实现  

同时。还可预先使用`<link rel="preload" href="脚本地址"></link>`的方式预先下载好脚本文件，提高加载速度

<br/>

## `<noscript>`标签

浏览器不支持script，或浏览器关闭了script的支持时，会渲染标签中包含的内容