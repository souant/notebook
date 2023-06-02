<script setup>
  import Three1 from './example/Three1.vue'
  import Three2 from './example/Three2.vue'
  import Three3 from './example/Three3.vue'
</script>

# threejs

## 官方文档

https://threejs.org/docs/index.html#manual/zh/introduction/Creating-a-scene

## 核心 API

| 属性     | 名称     | 描述                                                                                                      |
| -------- | -------- | --------------------------------------------------------------------------------------------------------- |
| 场景     | Scene    | 是物体、光源等元素的容器，可以配合 chrome 插件使用，抛出 window.scene 即可实时调整 obj 的信息和材质信息。 |
| 相机     | Camera   | 场景中的相机，代替人眼去观察，场景中只能添加一个，一般常用的是透视相机(PerspectiveCamera)。               |
| 渲染器   | Renderer | 场景的渲染方式，如 WebGL、canvas2D、css3D。                                                               |
| 物体对象 | Mesh     | 包括二维物体（点、线、面）、三维物体、模型等等。                                                          |
| 光源     | Light    | 场景中的光照，如果不添加光照场景将会是一片漆黑，包括全局光、平行光、点光源等。                            |
| 控制器   | Control  | 可通过键盘、鼠标控制相机的移动。                                                                          |

## 官方示例

### 实现几何体
---
<Three1 />

::: code-group

```html
<div class="container">
  <div id="three" class="three"></div>
</div>
```

```css
.three {
  display: flex;
  justify-content: center;
}
```

```js
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
```

:::


### 实现矩形(画线)

---

<Three2 />

::: code-group

```html
<div class="container">
  <div id="three2" class="three"></div>
</div>
```

```css
.three {
  display: flex;
  justify-content: center;
}
```

```js
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
```

:::


### 3D模型

<Three3 />

