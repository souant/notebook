import{_ as s,c as i,o as a,a3 as h}from"./chunks/framework.ymtTkBEb.js";const k="/notebook/assets/webkit-scrollbar.DNSGcLJu.png",b=JSON.parse('{"title":"改变滚动条样式","description":"","frontmatter":{},"headers":[],"relativePath":"docs/html/改变滚动条样式.md","filePath":"docs/html/改变滚动条样式.md"}'),t={name:"docs/html/改变滚动条样式.md"},l=h(`<h1 id="改变滚动条样式" tabindex="-1">改变滚动条样式 <a class="header-anchor" href="#改变滚动条样式" aria-label="Permalink to &quot;改变滚动条样式&quot;">​</a></h1><h2 id="webkit-scrollbar" tabindex="-1"><code>::-webkit-scrollbar</code> <a class="header-anchor" href="#webkit-scrollbar" aria-label="Permalink to &quot;\`::-webkit-scrollbar\`&quot;">​</a></h2><p>整个滚动条</p><h2 id="webkit-scrollbar-button" tabindex="-1"><code>::-webkit-scrollbar-button</code> <a class="header-anchor" href="#webkit-scrollbar-button" aria-label="Permalink to &quot;\`::-webkit-scrollbar-button\`&quot;">​</a></h2><p>滚动条上的按钮（上下箭头）</p><h2 id="webkit-scrollbar-thumb" tabindex="-1"><code>::-webkit-scrollbar-thumb</code> <a class="header-anchor" href="#webkit-scrollbar-thumb" aria-label="Permalink to &quot;\`::-webkit-scrollbar-thumb\`&quot;">​</a></h2><p>滚动条上的滚动滑块</p><h2 id="webkit-scrollbar-track" tabindex="-1"><code>::-webkit-scrollbar-track</code> <a class="header-anchor" href="#webkit-scrollbar-track" aria-label="Permalink to &quot;\`::-webkit-scrollbar-track\`&quot;">​</a></h2><p>滚动条轨道</p><h2 id="webkit-scrollbar-track-piece" tabindex="-1"><code>::-webkit-scrollbar-track-piece</code> <a class="header-anchor" href="#webkit-scrollbar-track-piece" aria-label="Permalink to &quot;\`::-webkit-scrollbar-track-piece\`&quot;">​</a></h2><p>滚动条没有滑块的轨道部分</p><h2 id="webkit-scrollbar-corner" tabindex="-1"><code>::-webkit-scrollbar-corner</code> <a class="header-anchor" href="#webkit-scrollbar-corner" aria-label="Permalink to &quot;\`::-webkit-scrollbar-corner\`&quot;">​</a></h2><p>垂直滚动条和水平滚动条时交汇的部分</p><h2 id="webkit-resizer" tabindex="-1"><code>::-webkit-resizer</code> <a class="header-anchor" href="#webkit-resizer" aria-label="Permalink to &quot;\`::-webkit-resizer\`&quot;">​</a></h2><p>某些元素底角的可拖动调整大小的滑块</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 滚动槽 */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">::-webkit-scrollbar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">::-webkit-scrollbar-track</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    border-radius</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rgba</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.06</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    -webkit-box-shadow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">inset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rgba</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.08</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 滚动条滑块 */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">::-webkit-scrollbar-thumb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    border-radius</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rgba</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    -webkit-box-shadow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">inset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rgba</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><img src="`+k+'" alt="兼容性"></p>',18),n=[l];function e(p,r,d,E,o,c){return a(),i("div",null,n)}const F=s(t,[["render",e]]);export{b as __pageData,F as default};
