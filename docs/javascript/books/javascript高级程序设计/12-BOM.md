# BOM

浏览器对象模型

## window 对象

`BOM` 的核心是 `window` 对象，表示浏览器的实例

- 可以作为 JS 全局对象
- 可以通过 window 调用浏览器 API

:::tip 注意
使用`var`关键字创建的变量，会成为`window`的属性和方法
:::

### 常用方法

1. `window.top` 获取窗口最上层 window 对象，例如 iframe 中访问
2. `window.parent` 获取上一层窗口 window 对象
3. `window.screenTop` 获取窗口距离屏幕上方的像素值
4. `window.screenLeft` 获取窗口距离屏幕左侧的像素值
5. `window.moveTo(left, top)` 移动窗口到
6. `window.moveBy()` 同上
7. `window.innerWidth` 获取窗口宽度，页面可视区域
8. `window.innerHeight` 获取窗口高度，页面可视区域
9. `window.outerWidth` 获取窗口本身宽度
10. `window,outerHeight` 获取窗口本身高度
11. `window.resizeTo(width, height)` 缩放窗口
12. `window.open(url)` 打开窗口， 可以设置打开方式
13. `window.opener` 获取打开当前窗口的 window 实例

### 定时器

1. `setTimeout(() => {}, delay)` 指定在一定时间后执行某些代码，返回一个定时器 ID，可用`clearTimeout()`结束
2. `setInterval(() => {}, delay)` 指定每隔一段时间执行某些代码，返回一个定时器 ID，可用`clearInterval()`结束

### 系统对话框

1. `alert()` 参数传字符串，点击确定关闭
2. `confirm()` 参数传字符串, 点击 OK 返回 true 点击 cancel 返回 false
3. `prompt()` 提示用户输入消息, 点击 OK 返回输入文本 点击 cancel 返回 null
4. `print()` 打开打印对话框
5. `find()` 打开查找对话框

## location 对象

location 对象提供当前网页的信息，主要为导航相关

### 实例方法

1. 获取导航 URL 地址相关
   页面 url: http://www.wrox.com:80/WileyCDA/?q=javascript#contents

| 属性              | 值                      | 说明                                                         |
| ----------------- | :---------------------- | :----------------------------------------------------------- |
| location.hash     | "#contents" URL         | 散列值（井号后跟零或多个字符），如果没有则为空字符串         |
| location.host     | "www.wrox.com:80"       | 服务器名及端口号                                             |
| location.hostname | "www.wrox.com" 服务器名 |
| location.href     | "url" 页面 url          | 当前加载页面的完整 URL。location 的 toString()方法返回这个值 |
| location.pathname | "/WileyCDA/"            | URL 中的路径和（或）文件名                                   |
| location.port     | "80"                    | 请求的端口。如果 URL 中没有端口，则返回空字符串              |
| location.protocol | "http:"                 | 页面使用的协议。通常是"http:"或"https:"                      |
| location.search   | "?q=javascript"         | URL 的查询字符串。这个字符串以问号开头                       |
| location.username | "foouser"               | 域名前指定的用户名                                           |
| location.password | "barpassword"           | 域名前指定的密码                                             |
| location.origin   | "http://www.wrox.com"   | URL 的源地址。只读                                           |

2. 重新加载页面
   location.reload();

## navigator 对象

navigator 对象是标识浏览器的标准，支持浏览器自己的属性

| 属性                        | 说明                                                                  |
| --------------------------- | :-------------------------------------------------------------------- |
| activeVrDisplays            | 返回数组，包含 ispresenting 属性为 true 的 VRDisplay 实例             |
| appCodeName                 | 即使在非 Mozilla 浏览器中也会返回"Mozilla"                            |
| appName                     | 浏览器全名                                                            |
| appVersion                  | 浏览器版本。通常与实际的浏览器版本不一致                              |
| battery                     | 返回暴露 Battery Status API 的 BatteryManager 对象                    |
| buildId                     | 浏览器的构建编号                                                      |
| connection                  | 返回暴露 Network Information API 的 NetworkInformation 对象           |
| cookieEnabled               | 返回布尔值，表示是否启用了 cookie                                     |
| credentials                 | 返回暴露 Credentials Management API 的 CredentialsContainer 对象      |
| deviceMemory                | 返回单位为 GB 的设备内存容量                                          |
| doNotTrack                  | 返回用户的“不跟踪”（do-not-track）设置                                |
| geolocation                 | 返回暴露 Geolocation API 的 Geolocation 对象                          |
| getVRDisplays               | () 返回数组，包含可用的每个 VRDisplay 实例                            |
| getUserMedia                | () 返回与可用媒体设备硬件关联的流                                     |
| hardwareConcurrency         | 返回设备的处理器核心数量                                              |
| javaEnabled                 | 返回布尔值，表示浏览器是否启用了 Java                                 |
| language                    | 返回浏览器的主语言                                                    |
| languages                   | 返回浏览器偏好的语言数组                                              |
| locks                       | 返回暴露 Web Locks API 的 LockManager 对象                            |
| mediaCapabilities           | 返回暴露 Media Capabilities API 的 MediaCapabilities 对象             |
| mediaDevices                | 返回可用的媒体设备                                                    |
| maxTouchPoints              | 返回设备触摸屏支持的最大触点数                                        |
| mimeTypes                   | 返回浏览器中注册的 MIME 类型数组                                      |
| onLine                      | 返回布尔值，表示浏览器是否联网                                        |
| oscpu                       | 返回浏览器运行设备的操作系统和（或）CPU                               |
| permissions                 | 返回暴露 Permissions API 的 Permissions 对象                          |
| platform                    | 返回浏览器运行的系统平台                                              |
| plugins                     | 返回浏览器安装的插件数组。在 IE 中，这个数组包含页面中所有<embed>元素 |
| product                     | 返回产品名称（通常是"Gecko"）                                         |
| productSub                  | 返回产品的额外信息（通常是 Gecko 的版本）                             |
| registerProtocolHandler     | () 将一个网站注册为特定协议的处理程序                                 |
| requestMediaKeySystemAccess | () 返回一个期约，解决为 MediaKeySystemAccess 对象                     |
| sendBeacon                  | () 异步传输一些小数据                                                 |
| serviceWorker               | 返回用来与 ServiceWorker 实例交互的 ServiceWorkerContainer            |
| share                       | () 返回当前平台的原生共享机制                                         |
| storage                     | 返回暴露 Storage API 的 StorageManager 对象                           |
| userAgent                   | 返回浏览器的用户代理字符串                                            |
| vendor                      | 返回浏览器的厂商名称                                                  |
| vendorSub                   | 返回浏览器厂商的更多信息                                              |
| vibrate                     | () 触发设备振动                                                       |
| webdriver                   | 返回浏览器当前是否被自动化程序控制                                    |

## screen 对象

screen 对象 保存浏览器客户端能力信息

| 属性        | 说明                                         |
| ----------- | :------------------------------------------- |
| availHeight | 屏幕像素高度减去系统组件高度（只读）         |
| availLeft   | 没有被系统组件占用的屏幕的最左侧像素（只读） |
| availTop    | 没有被系统组件占用的屏幕的最顶端像素（只读） |
| availWidth  | 屏幕像素宽度减去系统组件宽度（只读）         |
| colorDepth  | 表示屏幕颜色的位数；多数系统是 32（只读）    |
| height      | 屏幕像素高度                                 |
| left        | 当前屏幕左边的像素距离                       |
| pixelDepth  | 屏幕的位深（只读）                           |
| top         | 当前屏幕顶端的像素距离                       |
| width       | 屏幕像素宽度                                 |
| orientation | 返回 Screen Orientation API 中屏幕的朝向     |

## history 对象

history 对象表示当前窗口首次使用以来用户的导航历史记录。

### 常用方法

```js
// 后退一页
history.go(-1);
// 前进一页
history.go(1);
// 前进两页
history.go(2);
// 导航到最近的 wrox.com 页面
history.go("wrox.com");
// 导航到最近的 nczonline.net 页面
history.go("nczonline.net");
// 后退一页
history.back();
// 前进一页
history.forward();

if (history.length == 1) {
  // 这是用户窗口中的第一个页面
}
// 创建新的历史记录
let stateObject = { foo: "bar" };
history.pushState(stateObject, "My title", "baz.html");
// 替换当前历史记录
history.replaceState({newFoo: "newBar"}, "New title");

```
