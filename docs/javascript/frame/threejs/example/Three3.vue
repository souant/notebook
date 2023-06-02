<template>
  <div class="container">
    <div id="three3" class="three3"></div>
  </div>
</template>

<script>
import { withBase } from 'vitepress'
import {
  Color, // 色彩
  Scene, // 场景
  PerspectiveCamera, // 相机
  WebGLRenderer, // 渲染器
  DirectionalLight,
  AmbientLight,
  Fog,
} from "three";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export default {
  name: "three-view",
  data() {
    return {};
  },
  mounted() {
    this.init();
    console.log(this);
  },
  methods: {
    init() {
      const loader = new GLTFLoader();
      // 创建场景
      const scene = new Scene();
      // 设置场景背景颜色
      scene.background = new Color(0xe3e3e3);
      scene.fog = new Fog(0xa0a0a0, 10, 50);

      // 创建渲染器
      const renderer = new WebGLRenderer({
        antialias: true, // 开启抗锯齿
      });
      renderer.setSize(500, 500);
      document.getElementById("three3").appendChild(renderer.domElement);

      // 创建相机
      const camera = new PerspectiveCamera(60, 1, 1, 1000);
      // 移动相机位置
      camera.position.set(5, 2, 1);

      // 添加光照
      // 环境光照， 环境光会均匀的照亮场景中的所有物体。
      const light = new AmbientLight(0xffffff);
      light.position.set(30, 20, 0);
      scene.add(light);
      // 平行光照，平行光是沿着特定方向发射的光。这种光的表现像是无限远，从它发出的光线都是平行的。常常用平行光来模拟太阳光的效果
      const dirLight = new DirectionalLight(0xffffff);
      dirLight.position.set(30, 20, 0);
      scene.add(dirLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      // 开启控制器的阻尼效果
      controls.enableDamping = true;

      controls.addEventListener("change", changeControls);
      function changeControls() {
        // 渲染
        render();
      }
      console.log(withBase('1'))

      // 加载3D模型
      loader.load(
        // "./example/scifi_girl_v.01.glb",
        // "./example/phoenix_bird/scene.gltf",
        withBase("/gtlf/pony_cartoon/scene.gltf"),
        function (gltf) {
          scene.add(gltf.scene);

          controls.update();
          render();
        },
        undefined,
        function (error) {
          console.error(error);
        }
      );

      function render() {
        // 渲染
        renderer.render(scene, camera);
      }
    },
  },
};
</script>

<style>
.three3 {
  display: flex;
  justify-content: center;
}
</style>
