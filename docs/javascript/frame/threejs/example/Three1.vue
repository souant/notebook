<template>
  <div class="container">
    <div id="three" class="three"></div>
  </div>
</template>

<script>
import {
  Color, // 色彩
  Scene, // 场景
  PerspectiveCamera, // 相机
  WebGLRenderer, // 渲染器
  BoxGeometry, //  立方缓冲几何体
  MeshBasicMaterial, // 基础网格材质
  Mesh, // 网格
} from "three";

export default {
  name: "three-view",
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const threeDom = document.getElementById("three");
      // 初始化一个场景
      const scene = new Scene();
      // 设置场景背景
      scene.background = new Color(0xe3e3e3);
      // 初始化摄像机，使用透视摄像机
      // PerspectiveCamera(视野角度（FOV）, 长宽比（aspect ratio）, 近截面（near）, 远截面（far）)
      const camera = new PerspectiveCamera(75, 1, 0.1, 1000);
      // 初始化渲染器, 使用WebGLRenderer渲染器
      const renderer = new WebGLRenderer();
      // 设置渲染器尺寸
      renderer.setSize(500, 500);
      // 将three渲染的Dom添加
      threeDom.appendChild(renderer.domElement);

      // 创建一个立体几何体，BoxGeometry(width, height, depth)
      const geometry = new BoxGeometry(1, 1, 1);
      // 创建一个基础网格材质, MeshBasicMaterial({ color: 0x00ff00 })
      const material = new MeshBasicMaterial({ color: 0x99999 });
      // 为集合体绑定材质，得到一个有材质的立方体
      const cube = new Mesh(geometry, material);
      // 在场景中添加这个立方体
      scene.add(cube);

      // 移动摄像机位置
      camera.position.z = 5;

      // 定义动画渲染
      function animate() {
        requestAnimationFrame(animate);
        // 设置位置
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        // 渲染器渲染
        renderer.render(scene, camera);
      }

      animate();
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
