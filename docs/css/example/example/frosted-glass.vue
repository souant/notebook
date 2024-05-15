<template>
  <div class="example-container">
    <div class="box">
      <div class="glass">磨砂玻璃效果 backdrop-filter</div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.example-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.box {
  width: 100%;
  height: 600px;
  background: url(../images/01.jpg) no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

.glass {
  width: 400px;
  height: 220px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, .2);
  backdrop-filter: blur(6px);
}
</style>
