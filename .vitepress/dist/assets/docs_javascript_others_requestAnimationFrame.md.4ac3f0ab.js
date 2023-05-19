import{_ as s,o as a,c as n,d as e}from"./app.1bd35a0b.js";const t="/notebook/assets/01.0c8a06ce.png",o="/notebook/assets/02.2d5d8b88.png",F=JSON.parse('{"title":"requestAnimationFrame 帧动画","description":"","frontmatter":{},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"浏览器兼容性","slug":"浏览器兼容性","link":"#浏览器兼容性","children":[]}],"relativePath":"docs/javascript/others/requestAnimationFrame.md"}'),l={name:"docs/javascript/others/requestAnimationFrame.md"},p=e(`<h1 id="requestanimationframe-帧动画" tabindex="-1">requestAnimationFrame 帧动画 <a class="header-anchor" href="#requestanimationframe-帧动画" aria-hidden="true">#</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-hidden="true">#</a></h2><p><code>requestAnimationFrame</code> 浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。</p><p>回调函数执行次数通常是每秒 60 次，但在大多数遵循 W3C 建议的浏览器中，回调函数执行次数通常与浏览器屏幕刷新次数相匹配。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 动画执行函数</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">callback</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// TODO ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 执行</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> animationId </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">requestAnimationFrame</span><span style="color:#A6ACCD;">(callback)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 取消</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cancelAnimationFrame</span><span style="color:#A6ACCD;">(animationId)</span></span>
<span class="line"></span></code></pre></div><h2 id="浏览器兼容性" tabindex="-1">浏览器兼容性 <a class="header-anchor" href="#浏览器兼容性" aria-hidden="true">#</a></h2><p><img src="`+t+'" alt="01"><img src="'+o+'" alt="02"></p>',7),c=[p];function r(i,d,m,A,_,h){return a(),n("div",null,c)}const D=s(l,[["render",r]]);export{F as __pageData,D as default};
