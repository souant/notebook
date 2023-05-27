# 高级

## img 的 srcset 属性的作⽤？

响应式页面中经常用到根据屏幕密度设置不同的图片。这时就用到了 img 标签的 srcset 属性。srcset 属性用于设置不同屏幕密度下，img 会自动加载不同的图片

```html
<img src="image-128.png" srcset="image-256.png 2x" />
```

按照上面的实现，不同的屏幕密度都要设置图片地址，目前的屏幕密度有 1x,2x,3x,4x 四种，如果每一个图片都设置 4 张图片，加载就会很慢。所以就有了新的 srcset 标准。代码如下：

```html
<img
  src="image-128.png"
  srcset="image-128.png 128w, image-256.png 256w, image-512.png 512w"
  sizes="(max-width: 360px) 340px, 128px"
/>
```

其中 srcset 指定图片的地址和对应的图片质量。sizes 用来设置图片的尺寸零界点。对于srcset 中的 w单位，可以理解成图片质量。如果可视区域小于这个质量的值，就可以使用。浏览器会自动选择一个最小的可用图片。

sizes 语法如下：
```shell
sizes="[media query] [length], [media query] [length] ... "
```

## 说一下 HTML5 drag API

- dragstart：事件主体是被拖放元素，在开始拖放被拖放元素时触发。
- darg：事件主体是被拖放元素，在正在拖放被拖放元素时触发。
- dragenter：事件主体是目标元素，在被拖放元素进入某元素时触发。
- dragover：事件主体是目标元素，在被拖放在某元素内移动时触发。
- dragleave：事件主体是目标元素，在被拖放元素移出目标元素是触发。 
- drop：事件主体是目标元素，在目标元素完全接受被拖放元素时触发。
- dragend：事件主体是被拖放元素，在整个拖放操作结束时触发。

## SEO中的TDK

在SEO中，TDK其实就是title、description、keywords这三个标签，title表示标题标签，description是描述标签，keywords是关键词标签

## 解决H5点击300ms延迟

移动端要判断是否是双击，所以单击之后不能够立刻触发click，要等300ms，直到确认不是双击了才触发click。所以就导致了click有延迟

解决方案有:
- 禁用浏览器缩放
- 更改默认的视口宽度

