<template>
  <div class="example-container">
    <!-- 圆形扩散水波纹效果 -->
    <div class="ripple1">
      <!-- 中心点 -->
      <div class="dot"></div>
      <!-- 水波 -->
      <div class="animation-wave">
        <div class="w1"></div>
        <div class="w2"></div>
        <div class="w3"></div>
      </div>
    </div>
    <!-- 圆形扩散水波纹效果 end -->

    <br/>
    <!-- 容器水波纹效果 -->
    <div class="ripple2"></div>
    <!-- 容器水波纹效果 end -->
  </div>
</template>

<script setup></script>

<!-- 圆形扩散水波纹效果 -->
<style>
.example-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.ripple1 {
  position: relative;
  width: 300px;
  height: 300px;
}

/* 中心点 */
.dot {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background-color: #5f5f5f;
}

/* 波浪纹 */
.animation-wave {
  width: 100%;
  height: 100%;
}

/* 每个波浪纹 */
.animation-wave * {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 0;
  height: 0;
  border-radius: 100%;
  background-color: #949494;
  animation: wave 3s infinite;
}

.animation-wave .w2 {
  animation-delay: 1s;
}

.animation-wave .w3 {
  animation-delay: 2s;
}

/* 波浪动画 */
@keyframes wave {
  from {
    opacity: 1;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
  }

  to {
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}
</style>

<!-- 容器水波纹效果 -->

<style>
.ripple2 {
  width: 300px;
  height: 300px;
  border-radius: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  background-color: rgb(118, 218, 255);
  overflow: hidden;
}
.ripple2::before,
.ripple2::after {
  content: "";
  position: absolute;
  bottom: 120px;
  min-width: 600px;
  min-height: 600px;
  background-color: #ffffff;
  animation: rote 8s linear infinite;
}
.ripple2::before {
  left: -150px;
  border-radius: 40%;
  opacity: 0.5;
}
.ripple2::after {
  left: -150px;
  border-radius: 45%;
}
@keyframes rote {
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(360deg);
  }
}
</style>
