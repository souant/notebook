<template>
  <div>
    <canvas id="canvas2" width="300" height="300"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
/**
 * [顺时针方向画图，起始点在左侧]
 * @param  {[number]} percent [所占的进度百分比，比如66%，则传66即可，0 <= percent <= 100]
 * @param  {[number]} sR      [圆弧起始角度，可不传，默认是π/2，Math.PI/2 <= sR < 3/2 * Math.PI]
 */

function draw(percent, options) {
  // 判断参数
  if (percent < 0 || percent > 100) {
    console.error("percent is not allowed value");
    return;
  }
  if (
    options &&
    Object.prototype.toString.call(options) !== "[object Object]"
  ) {
    console.error("options is not object value");
    return;
  }
  // 默认
  const defaultOptions = {
    size: 200,
    sR: 0.8 * Math.PI,
    eR: 2.2 * Math.PI,
    baseColor: "#e1e1e1",
    coverColor: "#fe4d43",
  };
  // options
  const { size, sR, eR, baseColor, coverColor } = options || defaultOptions;

  // 限制开始弧度值
  if (sR < Math.PI / 2 || sR >= (3 / 2) * Math.PI) {
    return;
  }
  // canvas
  let canvas = document.querySelector("#canvas2"),
    ctx = canvas.getContext("2d"),
    cWidth = canvas.width,
    cHeight = canvas.height;

  let currentPercent = 0; // 当前比例
  let step = (eR - sR) / 100; // 一个1%对应的弧度大小
  let finalRadian = sR + step * percent; // 终点弧度

  // 首次
  window.requestAnimationFrame(paint);

  // 绘制
  function paint() {
    ctx.clearRect(0, 0, cWidth, cHeight);
    let endRadian = sR + currentPercent * step;
    // 画灰色圆弧
    drawCanvas(cWidth / 2, cHeight / 2, size / 2, sR, eR, baseColor, 20);
    // 画红色圆弧
    drawCanvas(
      cWidth / 2,
      cHeight / 2,
      size / 2,
      sR,
      endRadian,
      coverColor,
      20
    );

    // 画红色圆头
    // 红色圆头其实就是一个圆，关键的是找到其圆心，涉及到三角函数知识，自己画个图一看就明了
    let angle = 2 * Math.PI - endRadian; // 转换成逆时针方向的弧度（三角函数中的）
    let xPos = (Math.cos(angle) * size) / 2 + cWidth / 2; // 红色圆 圆心的x坐标
    let yPos = (-Math.sin(angle) * size) / 2 + cHeight / 2; // 红色圆 圆心的y坐标
    drawCanvas(xPos, yPos, 2, 0, 2 * Math.PI, coverColor, 25);

    // 数字
    ctx.fillStyle = coverColor;
    ctx.font = "40px PT Sans";
    let textWidth = ctx.measureText(currentPercent + "%").width;
    ctx.fillText(
      currentPercent + "%",
      cWidth / 2 - textWidth / 2,
      cHeight / 2 + 15
    );
    currentPercent++;

    if (endRadian.toFixed(2) < finalRadian.toFixed(2)) {
      window.requestAnimationFrame(paint);
    }
  }
  // 绘制形状
  function drawCanvas(x, y, r, sRadian, eRadian, color, lineWidth) {
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.arc(x, y, r, sRadian, eRadian, false);
    ctx.stroke();
  }
}

onMounted(() => {
  draw(50);
});
</script>
