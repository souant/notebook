<template>
  <div class="container">
    <div class="three" id="three2"></div>
  </div>
</template>

<script>
import {
  Color,
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Vector3,
  LineBasicMaterial,
  BufferGeometry,
  Line,
} from "three";

export default {
  name: "LineThree",
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 创建场景
      const scene = new Scene();
      // 设置场景背景颜色
      scene.background = new Color(0xe3e3e3);

      // 创建相机
      const camera = new PerspectiveCamera(45, 1, 1, 500);
      // 移动相机位置
      camera.position.set(0, 0, 100);
      camera.lookAt(0, 0, 0);

      // 创建渲染器
      const renderer = new WebGLRenderer();
      renderer.setSize(500, 500);
      document.getElementById("three2").appendChild(renderer.domElement);

      // 创建线条
      // 创建线条的材质
      const material = new LineBasicMaterial({ color: 0x0000ff });
      // 创建绘制线条需要的顶点
      const points = [];
      points.push(new Vector3(-10, -10, 0));
      points.push(new Vector3(10, -10, 0));
      points.push(new Vector3(10, 10, 0));
      points.push(new Vector3(-10, 10, 0));
      points.push(new Vector3(-10, -10, 0));
      const geometry = new BufferGeometry().setFromPoints(points);
      // 创建线条
      const line = new Line(geometry, material);

      // 在场景中加入线条
      scene.add(line);
      // 渲染
      renderer.render(scene, camera);
    },
  },
};
</script>

<style>
.three {
  display: flex;
  justify-content: center;
}
</style>
