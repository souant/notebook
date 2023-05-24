# 动画与 Canvas 图形

## 动画

早期**计时器**和**定时执行**都是 JavaScript 动画最先进的工具
setInterval()和 setTimeout()的不精确是个大问题，这种情况动画的问题在于无法准确知晓循环之间的延时

### requestAnimationFrame

```js
function updateProgress() {
  var div = document.getElementById("status");
  div.style.width = parseInt(div.style.width, 10) + 5 + "%";
  if (div.style.left != "100%") {
    requestAnimationFrame(updateProgress);
  }
}
requestAnimationFrame(updateProgress);
```

### cancelAnimationFrame

```js
let requestID = window.requestAnimationFrame(() => {
  console.log("Repaint!");
});
window.cancelAnimationFrame(requestID);
```

### 通过 requestAnimationFrame 节流

```js
// 判断节流后是否执行了
let enqueued = false;

function expensiveOperation() {
  console.log("Invoked at", Date.now());
  enqueued = false;
}
window.addEventListener("scroll", () => {
  if (!enqueued) {
    enqueued = true;
    window.requestAnimationFrame(expensiveOperation);
  }
});
```

## Canvas 画布

```html
<canvas id="drawing" width="200" height="200">A drawing of something.</canvas>
```

### 2D 绘图上下文

```js
let drawing = document.getElementById("drawing");
// 确保浏览器支持<canvas>
if (drawing.getContext) {
  // 获取2D 绘图上下文
  let context = drawing.getContext("2d");
  context.strokeStyle = "red";
  context.fillStyle = "#0000ff";
}
```

#### 2d 绘图 API

- 绘制矩形
  - fillStyle 填充指定样式
  - fillRect(x, y, width, height)
  - strokeStyle 填充指定样式
  - strokeRect(x, y, width, height)
  - clearRect(x, y, width, height)
- 绘制路径 beginPath()
  - arc(x, y, radius, startAngle, endAngle, counterclockwise)：以坐标(x, y)为圆
    心，以 radius 为半径绘制一条弧线，起始角度为 startAngle，结束角度为 endAngle（都是
    弧度）。最后一个参数 counterclockwise 表示是否逆时针计算起始角度和结束角度（默认为
    顺时针）。
  - arcTo(x1, y1, x2, y2, radius)：以给定半径 radius，经由(x1, y1)绘制一条从上一点
    到(x2, y2)的弧线。
  - bezierCurveTo(c1x, c1y, c2x, c2y, x, y)：以(c1x, c1y)和(c2x, c2y)为控制点，
    绘制一条从上一点到(x, y)的弧线（三次贝塞尔曲线）。
  - lineTo(x, y)：绘制一条从上一点到(x, y)的直线。
  - moveTo(x, y)：不绘制线条，只把绘制光标移动到(x, y)。
  - quadraticCurveTo(cx, cy, x, y)：以(cx, cy)为控制点，绘制一条从上一点到(x, y)
    的弧线（二次贝塞尔曲线）。
  - rect(x, y, width, height)：以给定宽度和高度在坐标点(x, y)绘制一个矩形。这个方法
    与 strokeRect()和 fillRect()的区别在于，它创建的是一条路径，而不是独立的图形。
- 绘制文本

  - font：以 CSS 语法指定的字体样式、大小、字体族等，比如"10px Arial"。
  - textAlign：指定文本的对齐方式，可能的值包括"start"、"end"、"left"、"right"和
    "center"。推荐使用"start"和"end"，不使用"left"和"right"，因为前者无论在从左到右
    书写的语言还是从右到左书写的语言中含义都更明确。
  - textBaseLine ：指定文本的基线，可能的值包括 "top" 、 "hanging" 、 "middle" 、
    "alphabetic"、"ideographic"和"bottom"。
  - fillText(text, x, y)
  - strokeText(text, x, y)

- 变换
  - rotate(angle)：围绕原点把图像旋转 angle 弧度。
  - scale(scaleX, scaleY)：通过在 x 轴乘以 scaleX、在 y 轴乘以 scaleY 来缩放图像。scaleX
    和 scaleY 的默认值都是 1.0。
  - translate(x, y)：把原点移动到(x, y)。执行这个操作后，坐标(0, 0)就会变成(x, y)。
  - transform(m1_1, m1_2, m2_1, m2_2, dx, dy)：像下面这样通过矩阵乘法直接修改矩阵。
    m1_1 m1_2 dx
    m2_1 m2_2 dy
    0 0 1
  - setTransform(m1_1, m1_2, m2_1, m2_2, dx, dy)：把矩阵重置为默认值，再以传入的
    参数调用 transform()。
- 绘制图片
  - drawImage(image, imgX, imgX, imgWidth, imgHeight, targetX, targetY, targetWidth, targetHeight)
  - toDataUrl()
- 绘制阴影
  - shadowColor：CSS 颜色值，表示要绘制的阴影颜色，默认为黑色。
  - shadowOffsetX：阴影相对于形状或路径的 x 坐标的偏移量，默认为 0。
  - shadowOffsetY：阴影相对于形状或路径的 y 坐标的偏移量，默认为 0。
  - shadowBlur：像素，表示阴影的模糊量。默认值为 0，表示不模糊。

### WebGL 3D 绘图

```js
let drawing = document.getElementById("drawing");
// 确保浏览器支持<canvas>
if (drawing.getContext) {
  let gl = drawing.getContext("webgl");
  if (gl) {
    // 使用 WebGL
  }
}
```
