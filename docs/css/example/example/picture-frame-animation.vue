<template>
  <div class="pic-frame-animation">
    <div
      class="pic-box"
      :class="{ 'is-active': isActive }"
      @click="isActive = !isActive"
    ></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isActive = ref(false);
</script>

<style lang="less" scoped>
.pic-frame-animation {
  margin: 20px auto;
}
.pic-box {
  display: inline-block;
  width: 100px;
  height: 100px;
  background: url("../images/animate-frame.png") no-repeat;
  background-size: 2900px 100px;
  background-position: 0 -4px;
  transition: background-position 1s steps(28);
  transition-duration: 0s;

  &.is-active {
    -webkit-transition-duration: 1s;
    transition-duration: 1s;
    background-position: -2800px -4px;
    animation: none;
  }
}
</style>
