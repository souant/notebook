import{_ as e,o as t,c as o,d as r}from"./app.6416ea19.js";const i={},c=r('<h1 id="script-标签" tabindex="-1"><a class="header-anchor" href="#script-标签" aria-hidden="true">#</a> <code>&lt;script&gt;</code>标签</h1><blockquote><p>将JavaScript插入到HTML中，主要使用script标签<br> 所有的script标签中的脚本程序会依次按照在文档中的顺序被执行，文档解析会在当前位置的脚本执行完成后再开始解析。</p></blockquote><pre><code>防止这种情况，可将script标签防止再body标签的最后，或使用异步或延迟属性\n</code></pre><br><h2 id="script-标签的8个属性" tabindex="-1"><a class="header-anchor" href="#script-标签的8个属性" aria-hidden="true">#</a> <code>&lt;script&gt;</code>标签的8个属性</h2><ol><li>async: 可选。表示立即加载脚本，但不阻碍页面其他动作，异步加载</li><li>charset: 可选。标识加载的脚本代码字符集</li><li>crossorigin: 可选。配置脚本加载请求跨域设置</li><li>defer: 可选。表示延迟到文档加载完成后再加载脚本</li><li>integrity: 可选。加密签名设置。emm: 没用过</li><li>language: <span style="color:red;">废弃 </span>。</li><li>src: 可选。加载的脚本外部地址。</li><li>type: 可选。标识脚本的语言类型(也称MIME类型)。值为：&quot;module&quot;，表示代码会被当成es6模块</li></ol><blockquote><p>script标签的两种用法，1、在html文档中嵌入代码。2、引入外部js文件</p></blockquote><br><h2 id="defer与async的相同点与不同点" tabindex="-1"><a class="header-anchor" href="#defer与async的相同点与不同点" aria-hidden="true">#</a> <strong>defer</strong>与<strong>async</strong>的相同点与不同点</h2><blockquote><p>相同点：</p></blockquote><ol><li>两者均不会阻塞文档的解析。</li><li>均加载外部脚本时使用。</li><li>都是立即加载</li></ol><blockquote><p>不同点：</p></blockquote><ol><li>defer加载的脚本会顺序执行，async加载的脚本会在加载完成后执行</li><li>defer加载的脚本都会在DOMContentLoaded事件前执行</li><li>async可能会在DOMContenLoaded事件之前或之后执行，一定会在页面load事件前执行</li></ol><br><h2 id="动态脚本加载" tabindex="-1"><a class="header-anchor" href="#动态脚本加载" aria-hidden="true">#</a> 动态脚本加载</h2><blockquote><p>使用document.createElement(&quot;scrit&quot;) 动态创建script标签，并加载到HTML中实现</p></blockquote><pre><code>同时。还可预先使用`&lt;link rel=&quot;preload&quot; href=&quot;脚本地址&quot;&gt;&lt;/link&gt;`的方式预先下载好脚本文件，提高加载速度\n</code></pre><br><h2 id="noscript-标签" tabindex="-1"><a class="header-anchor" href="#noscript-标签" aria-hidden="true">#</a> <code>&lt;noscript&gt;</code>标签</h2><blockquote><p>浏览器不支持script，或浏览器关闭了script的支持时，会渲染标签中包含的内容</p></blockquote>',20),l=[c];function a(s,d){return t(),o("div",null,l)}const p=e(i,[["render",a],["__file","02-script标签.html.vue"]]);export{p as default};
