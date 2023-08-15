# LESS

Less （Leaner Style Sheets 的缩写） 是一门向后兼容的 CSS 扩展语言

## 嵌套规则

`&` 表示当前选择器的父级

```less
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
// to

#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
```

## 变量 `@`

```less
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}

// 同

#header {
  width: 10px;
  height: 20px;
}
```

## 函数

[参见：函数手册](https://less.bootcss.com/functions/)

```less
@base: #f04615;
@width: 0.5;

.class {
  width: percentage(@width); // returns `50%`
  color: saturate(@base, 5%);
  background-color: spin(lighten(@base, 25%), 8);
}
```

## 混入 minxins

```less
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}

#menu a {
  color: #111;
  .bordered();
}

// to

#menu a {
  color: #111;
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```

## 映射

```less
#colors() {
  primary: blue;
  secondary: green;
}

.button {
  color: #colors[primary];
  border: 1px solid #colors[secondary];
}

// to

.button {
  color: blue;
  border: 1px solid green;
}
```

## 命名空间

```less
#bundle() {
  .button {
    display: block;
    border: 1px solid black;
    background-color: grey;
    &:hover {
      background-color: white;
    }
  }
  .tab {
    ...;
  }
  .citation {
    ...;
  }
}

// 使用

#header a {
  color: orange;
  #bundle.button(); // 还可以书写为 #bundle > .button 形式
}
```

## 导入（Importing）

```less
@import "library"; // library.less
@import "typo.css";
```
