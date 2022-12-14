import{_ as s,c as n,o as a,d as l}from"./app.43cd3461.js";const C=JSON.parse('{"title":"Note Book","description":"Note Book","frontmatter":{"lang":"zh-CN","title":"Note Book","description":"Note Book"},"headers":[{"level":2,"title":"使用方式","slug":"使用方式","link":"#使用方式","children":[]}],"relativePath":"index.md"}'),p={name:"index.md"},e=l(`<h1 id="note-book" tabindex="-1">Note Book <a class="header-anchor" href="#note-book" aria-hidden="true">#</a></h1><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">└─javascript</span></span>
<span class="line"><span style="color:#A6ACCD;">    └─javascript高级程序设计</span></span>
<span class="line"><span style="color:#A6ACCD;">    └─微前端</span></span>
<span class="line"></span></code></pre></div><h2 id="使用方式" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式" aria-hidden="true">#</a></h2><blockquote><p><a href="http://xn--deploy-2w2r549b.sh" target="_blank" rel="noreferrer">运行deploy.sh</a> shell脚本文件, 发布+部署</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">  ./deploy.sh</span></span>
<span class="line"></span></code></pre></div><p>包含构建、push到github代码，自动将build的文件发布到gh-pages分支</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 确保脚本抛出遇到的错误</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> -e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 生成静态文件</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 提交</span></span>
<span class="line"><span style="color:#A6ACCD;">git add </span><span style="color:#82AAFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">build</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">git push git@github.com:souant/notebook.git master:master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 进入生成的文件夹</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> docs/.vuepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 提交发布代码</span></span>
<span class="line"><span style="color:#A6ACCD;">git init</span></span>
<span class="line"><span style="color:#A6ACCD;">git add -A</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">deploy</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">git push -f git@github.com:souant/notebook.git master:gh-pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> -</span></span>
<span class="line"></span></code></pre></div>`,7),o=[e];function t(c,i,r,d,h,A){return a(),n("div",null,o)}const g=s(p,[["render",t]]);export{C as __pageData,g as default};
