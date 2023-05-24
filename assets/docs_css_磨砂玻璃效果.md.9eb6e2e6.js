import{_ as o,o as a,c as n,C as s,J as t,a as l,V as c}from"./chunks/framework.0c5895ca.js";const r="/notebook/assets/02.ace7d50d.png";const i={},d={class:"example-container"},C=s("div",{class:"box"},[s("div",{class:"glass"},"磨砂玻璃效果 backdrop-filter")],-1),y=[C];function _(e,p){return a(),n("div",d,y)}const F=o(i,[["render",_]]),f=s("h1",{id:"磨砂玻璃效果",tabindex:"-1"},[l("磨砂玻璃效果 "),s("a",{class:"header-anchor",href:"#磨砂玻璃效果","aria-label":'Permalink to "磨砂玻璃效果"'},"​")],-1),A=s("h2",{id:"实现",tabindex:"-1"},[l("实现 "),s("a",{class:"header-anchor",href:"#实现","aria-label":'Permalink to "实现"'},"​")],-1),B=c(`<h2 id="分析" tabindex="-1">分析 <a class="header-anchor" href="#分析" aria-label="Permalink to &quot;分析&quot;">​</a></h2><p>利用 backdrop-filter 实现</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 关键词值 */</span></span>
<span class="line"><span style="color:#FFCB6B;">backdrop-filter</span><span style="color:#A6ACCD;">: none;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 指向 SVG 滤镜的 URL */</span></span>
<span class="line"><span style="color:#FFCB6B;">backdrop-filter</span><span style="color:#A6ACCD;">: url(commonfilters</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">svg</span><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">filter</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* &lt;filter-function&gt; 滤镜函数值 */</span></span>
<span class="line"><span style="color:#FFCB6B;">backdrop-filter</span><span style="color:#A6ACCD;">: blur(2px);</span></span>
<span class="line"><span style="color:#FFCB6B;">backdrop-filter</span><span style="color:#A6ACCD;">: brightness(60%);</span></span>
<span class="line"><span style="color:#FFCB6B;">backdrop-filter</span><span style="color:#A6ACCD;">: contrast(40%);</span></span>
<span class="line"><span style="color:#FFCB6B;">backdrop-filter</span><span style="color:#A6ACCD;">: drop-shadow(4px 4px 10px blue);</span></span>
<span class="line"><span style="color:#FFCB6B;">backdrop-filter</span><span style="color:#A6ACCD;">: grayscale(30%);</span></span>
<span class="line"><span style="color:#FFCB6B;">backdrop-filter</span><span style="color:#A6ACCD;">: hue-rotate(120deg);</span></span>
<span class="line"><span style="color:#FFCB6B;">backdrop-filter</span><span style="color:#A6ACCD;">: invert(70%);</span></span>
<span class="line"><span style="color:#FFCB6B;">backdrop-filter</span><span style="color:#A6ACCD;">: opacity(20%);</span></span>
<span class="line"><span style="color:#FFCB6B;">backdrop-filter</span><span style="color:#A6ACCD;">: sepia(90%);</span></span>
<span class="line"><span style="color:#FFCB6B;">backdrop-filter</span><span style="color:#A6ACCD;">: saturate(80%);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 多重滤镜 */</span></span>
<span class="line"><span style="color:#FFCB6B;">backdrop-filter</span><span style="color:#A6ACCD;">: url(filters</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">svg</span><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">filter</span><span style="color:#A6ACCD;">) blur(4px) saturate(150%);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 全局值 */</span></span>
<span class="line"><span style="color:#FFCB6B;">backdrop-filter</span><span style="color:#A6ACCD;">: inherit;</span></span>
<span class="line"><span style="color:#FFCB6B;">backdrop-filter</span><span style="color:#A6ACCD;">: initial;</span></span>
<span class="line"><span style="color:#FFCB6B;">backdrop-filter</span><span style="color:#A6ACCD;">: revert;</span></span>
<span class="line"><span style="color:#FFCB6B;">backdrop-filter</span><span style="color:#A6ACCD;">: unset;</span></span></code></pre></div><h2 id="兼容性" tabindex="-1">兼容性 <a class="header-anchor" href="#兼容性" aria-label="Permalink to &quot;兼容性&quot;">​</a></h2><p><img src="`+r+'" alt="mdn兼容性"></p>',5),k=JSON.parse('{"title":"磨砂玻璃效果","description":"","frontmatter":{},"headers":[],"relativePath":"docs/css/磨砂玻璃效果.md","filePath":"docs/css/磨砂玻璃效果.md"}'),b={name:"docs/css/磨砂玻璃效果.md"},u=Object.assign(b,{setup(e){return(p,h)=>(a(),n("div",null,[f,A,t(F),B]))}});export{k as __pageData,u as default};
