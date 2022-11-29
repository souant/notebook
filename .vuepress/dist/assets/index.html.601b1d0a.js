import{_ as t,r as c,o as d,c as o,a as s,b as e,w as i,d as n,e as l}from"./app.208d3657.js";const r={},p=l(`<h1 id="note-book" tabindex="-1"><a class="header-anchor" href="#note-book" aria-hidden="true">#</a> Note Book</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>└─javascript
    └─javascript高级程序设计
    └─微前端
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="计划" tabindex="-1"><a class="header-anchor" href="#计划" aria-hidden="true">#</a> 计划</h2>`,3),u=l(`<h2 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式" aria-hidden="true">#</a> 使用方式</h2><blockquote><p>运行deploy.sh shell脚本文件, 发布+部署</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  ./deploy.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>包含构建、push到github代码，自动将build的文件发布到gh-pages分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成静态文件</span>
<span class="token function">npm</span> run docs:build

<span class="token comment"># 提交</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;build&#39;</span>
<span class="token function">git</span> push git@github.com:souant/notebook.git master:master

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token comment"># 提交发布代码</span>
<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:souant/notebook.git master:gh-pages

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function v(m,b){const a=c("RouterLink");return d(),o("div",null,[p,s("ul",null,[s("li",null,[e(a,{to:"/javascript/javascript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/"},{default:i(()=>[n("JavaScript高级程序设计")]),_:1}),n(" 30%")]),s("li",null,[e(a,{to:"/javascript/%E5%BE%AE%E5%89%8D%E7%AB%AF/"},{default:i(()=>[n("微前端-乾坤")]),_:1}),n(" 0%")])]),u])}const k=t(r,[["render",v],["__file","index.html.vue"]]);export{k as default};
