<template>
  <div>
    <canvas id="canvas2" width="300" height="300"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // 绘制进度条
  draw(50, {
    canvas: document.querySelector("#canvas2"),
    lineWidth: 10,
  });
});

/**
 * 绘制方法
 * @param {*} percent 进度
 * @param {*} options 选项(可选)
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
    canvas: document.querySelector("#canvas"),
    size: 200,
    lineWidth: 20,
    sR: 0.8 * Math.PI,
    eR: 2.2 * Math.PI,
    baseColor: "#e1e1e1",
    coverColor: "#fe4d43",
    textFont: "40px PT Sans",
  };
  // options
  const rawOptions = Object.assign({}, defaultOptions, options);
  const { canvas, sR, eR } = rawOptions;

  // 限制开始弧度值
  if (sR < Math.PI / 2 || sR >= (3 / 2) * Math.PI) {
    return;
  }
  // canvas
  let ctx = canvas.getContext("2d");
  let cWidth = canvas.width;
  let cHeight = canvas.height;

  let step = (eR - sR) / 100; // 一个1%对应的弧度大小

  const paintOptions = {
    ...rawOptions,
    ctx,
    cWidth,
    cHeight,
    step,
  };
  // 直接绘制
  // paint(percent, paintOptions, () => {
  //   console.log(percent);
  // });

  // 开始进度
  let currentPercent = 0;
  // 动画绘制函数
  function animation(options) {
    window.requestAnimationFrame(() => {
      currentPercent++;
      // 结束绘制判断
      if (currentPercent > percent) {
        return;
      }
      paint(currentPercent, options, () => {
        // console.log(currentPercent);
        animation(options);
      });
    });
  }
  // 开始动画绘制
  animation(paintOptions);
}

// 绘制
function paint(currentPercent, options, callback) {
  const {
    ctx,
    cWidth,
    cHeight,
    size,
    sR,
    eR,
    step,
    baseColor,
    coverColor,
    lineWidth,
    textFont,
  } = options;

  // 计算当前绘制结束位置
  let endRadian = sR + currentPercent * step;

  // 清理画布
  ctx.clearRect(0, 0, cWidth, cHeight);

  // 画底色圆弧
  drawArc({
    ctx,
    x: cWidth / 2,
    y: cHeight / 2,
    r: size / 2,
    sRadian: sR,
    eRadian: eR,
    color: baseColor,
    lineWidth,
  });
  // 画进度圆弧
  drawArc({
    ctx,
    x: cWidth / 2,
    y: cHeight / 2,
    r: size / 2,
    sRadian: sR,
    eRadian: endRadian,
    color: coverColor,
    lineWidth,
  });

  // 画进度圆头
  let angle = 2 * Math.PI - endRadian; // 转换成逆时针方向的弧度（三角函数中的）
  let xPos = (Math.cos(angle) * size) / 2 + cWidth / 2; // 红色圆 圆心的x坐标
  let yPos = (-Math.sin(angle) * size) / 2 + cHeight / 2; // 红色圆 圆心的y坐标
  drawArc({
    ctx,
    x: xPos,
    y: yPos,
    r: 2,
    sRadian: 0,
    eRadian: 2 * Math.PI,
    color: coverColor,
    lineWidth: lineWidth * 1.25,
  });

  // 画中心进度数字
  let text = currentPercent + "%";
  drawText({
    ctx,
    x: cWidth / 2,
    y: cHeight / 2 + 15,
    text,
    fillStyle: coverColor,
    font: textFont,
  });

  // 绘制完成，回调
  callback();
}

// 绘制圆形状
function drawArc({ ctx, x, y, r, sRadian, eRadian, color, lineWidth }) {
  ctx.beginPath();
  ctx.lineCap = "round";
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.arc(x, y, r, sRadian, eRadian, false);
  ctx.stroke();
}

// 绘制文本
function drawText({ ctx, x, y, text, fillStyle, font }) {
  ctx.fillStyle = fillStyle;
  ctx.font = font;
  let textWidth = ctx.measureText(text).width;
  ctx.fillText(text, x - textWidth / 2, y);
}
</script>
