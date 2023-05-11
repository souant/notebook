import{_ as s,o as a,c as n,d as l}from"./app.4e7bff94.js";const A=JSON.parse('{"title":"Note Book","description":"Note Book","frontmatter":{"lang":"zh-CN","title":"Note Book","description":"Note Book"},"headers":[{"level":2,"title":"文章中引入vue组件","slug":"文章中引入vue组件","link":"#文章中引入vue组件","children":[]},{"level":2,"title":"使用方式","slug":"使用方式","link":"#使用方式","children":[]}],"relativePath":"index.md"}'),p={name:"index.md"},e=l(`<h1 id="note-book" tabindex="-1">Note Book <a class="header-anchor" href="#note-book" aria-hidden="true">#</a></h1><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">└─javascript</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">└─javascript高级程序设计</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">└─微前端</span></span>
<span class="line"></span></code></pre></div><h2 id="文章中引入vue组件" tabindex="-1">文章中引入vue组件 <a class="header-anchor" href="#文章中引入vue组件" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import VueComponent from &#39;./example/vue-component/index.vue&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="使用方式" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式" aria-hidden="true">#</a></h2><blockquote><p><a href="http://xn--deploy-2w2r549b.sh" target="_blank" rel="noreferrer">运行deploy.sh</a> shell脚本文件, 发布+部署</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/deploy.sh</span></span>
<span class="line"></span></code></pre></div><p>包含构建、push到github代码，自动将build的文件发布到gh-pages分支</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 确保脚本抛出遇到的错误</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 生成静态文件</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 提交</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">build</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@github.com:souant/notebook.git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master:master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 进入生成的文件夹</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs/.vuepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 提交发布代码</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-A</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">deploy</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@github.com:souant/notebook.git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master:gh-pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span></span>
<span class="line"></span></code></pre></div>`,9),o=[e];function t(c,r,i,y,C,d){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{A as __pageData,h as default};
