import{_ as s,o as a,c as n,d as l}from"./app.8463a873.js";const D=JSON.parse('{"title":"Note Book","description":"Note Book","frontmatter":{"lang":"zh-CN","title":"Note Book","description":"Note Book"},"headers":[{"level":2,"title":"vitepress 标记","slug":"vitepress-标记","link":"#vitepress-标记","children":[{"level":3,"title":"- vitepress 文章前言","slug":"vitepress-文章前言","link":"#vitepress-文章前言","children":[]},{"level":3,"title":"- 表情符号","slug":"表情符号","link":"#表情符号","children":[]},{"level":3,"title":"- .md 文件中引入 vue 组件","slug":"md-文件中引入-vue-组件","link":"#md-文件中引入-vue-组件","children":[]},{"level":3,"title":"- 目录","slug":"目录","link":"#目录","children":[]},{"level":3,"title":"- 自定义容器","slug":"自定义容器","link":"#自定义容器","children":[]},{"level":3,"title":"- 代码组","slug":"代码组","link":"#代码组","children":[]},{"level":3,"title":"- 引入markdown文件","slug":"引入markdown文件","link":"#引入markdown文件","children":[]}]},{"level":2,"title":"markdown 标记","slug":"markdown-标记","link":"#markdown-标记","children":[{"level":3,"title":"- markdown 表格","slug":"markdown-表格","link":"#markdown-表格","children":[]},{"level":3,"title":"- markdown 删除线","slug":"markdown-删除线","link":"#markdown-删除线","children":[]},{"level":3,"title":"- markdown 任务列表","slug":"markdown-任务列表","link":"#markdown-任务列表","children":[]}]}],"relativePath":"index.md"}'),e={name:"index.md"},p=l(`<h1 id="note-book" tabindex="-1">Note Book <a class="header-anchor" href="#note-book" aria-hidden="true">#</a></h1><nav class="table-of-contents"><ul><li><a href="#vitepress-标记">vitepress 标记</a><ul><li><a href="#vitepress-文章前言">- vitepress 文章前言</a></li><li><a href="#表情符号">- 表情符号</a></li><li><a href="#md-文件中引入-vue-组件">- .md 文件中引入 vue 组件</a></li><li><a href="#目录">- 目录</a></li><li><a href="#自定义容器">- 自定义容器</a></li><li><a href="#代码组">- 代码组</a></li><li><a href="#引入markdown文件">- 引入markdown文件</a></li></ul></li><li><a href="#markdown-标记">markdown 标记</a><ul><li><a href="#markdown-表格">- markdown 表格</a></li><li><a href="#markdown-删除线">- markdown 删除线</a></li><li><a href="#markdown-任务列表">- markdown 任务列表</a></li></ul></li></ul></nav><h2 id="vitepress-标记" tabindex="-1">vitepress 标记 <a class="header-anchor" href="#vitepress-标记" aria-hidden="true">#</a></h2><p>VitePress 使用markdown-it作为 Markdown 渲染器</p><h3 id="vitepress-文章前言" tabindex="-1">- vitepress 文章前言 <a class="header-anchor" href="#vitepress-文章前言" aria-hidden="true">#</a></h3><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Blogging Like a Hacker</span></span>
<span class="line"><span style="color:#F07178;">lang</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">en-US</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"></span></code></pre></div><hr><h3 id="表情符号" tabindex="-1">- 表情符号 <a class="header-anchor" href="#表情符号" aria-hidden="true">#</a></h3><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">:tada: :100:</span></span>
<span class="line"></span></code></pre></div><p><a href="https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json" target="_blank" rel="noreferrer">《表情符号列表》</a></p><hr><h3 id="md-文件中引入-vue-组件" tabindex="-1">- <code>.md</code> 文件中引入 vue 组件 <a class="header-anchor" href="#md-文件中引入-vue-组件" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import VueComponent from &#39;./example/vue-component/index.vue&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="目录" tabindex="-1">- 目录 <a class="header-anchor" href="#目录" aria-hidden="true">#</a></h3><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">[toc</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="自定义容器" tabindex="-1">- 自定义容器 <a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a></h3><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">::: info</span></span>
<span class="line"><span style="color:#A6ACCD;">This is an info box.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">::: tip</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a tip.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">::: warning</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a warning.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">::: danger</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a dangerous warning.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">::: details</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a details block.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span></code></pre></div><p>示例</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning.</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details><ul><li>导入代码片段</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">&lt;&lt;&lt; @/filepath</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><h3 id="代码组" tabindex="-1">- 代码组 <a class="header-anchor" href="#代码组" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">::: code-group</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`js [config.js]</span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @type {import(&#39;vitepress&#39;).UserConfig}</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">const config = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default config</span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`ts [config.ts]</span></span>
<span class="line"><span style="color:#A6ACCD;">import type { UserConfig } from &#39;vitepress&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const config: UserConfig = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default config</span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>示例</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-J4hRr" id="tab-yExxF0y" checked="checked"><label for="tab-yExxF0y">config.js</label><input type="radio" name="group-J4hRr" id="tab-NsxPByV"><label for="tab-NsxPByV">config.ts</label></div><div class="blocks"><div class="language-js active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">type</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">import(&#39;vitepress&#39;).UserConfig</span><span style="color:#89DDFF;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> config </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> config</span></span>
<span class="line"></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UserConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vitepress</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> config</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UserConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> config</span></span>
<span class="line"></span></code></pre></div></div></div><h3 id="引入markdown文件" tabindex="-1">- 引入markdown文件 <a class="header-anchor" href="#引入markdown文件" aria-hidden="true">#</a></h3><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- @include: ./src/index.md --&gt;</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="markdown-标记" tabindex="-1">markdown 标记 <a class="header-anchor" href="#markdown-标记" aria-hidden="true">#</a></h2><p><a href="https://www.markdown.xyz/cheat-sheet/" target="_blank" rel="noreferrer">《Markdown 指南中文版》</a></p><h3 id="markdown-表格" tabindex="-1">- markdown 表格 <a class="header-anchor" href="#markdown-表格" aria-hidden="true">#</a></h3><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">| Tables        |      Are      |  Cool |</span></span>
<span class="line"><span style="color:#A6ACCD;">| ------------- | :-----------: | ----: |</span></span>
<span class="line"><span style="color:#A6ACCD;">| col 3 is      | right-aligned | $1600 |</span></span>
<span class="line"><span style="color:#A6ACCD;">| col 2 is      |   centered    |   $12 |</span></span>
<span class="line"><span style="color:#A6ACCD;">| zebra stripes |   are neat    |    $1 |</span></span>
<span class="line"></span></code></pre></div><p>示例</p><table><thead><tr><th>Tables</th><th style="text-align:center;">Are</th><th style="text-align:right;">Cool</th></tr></thead><tbody><tr><td>col 3 is</td><td style="text-align:center;">right-aligned</td><td style="text-align:right;">$1600</td></tr><tr><td>col 2 is</td><td style="text-align:center;">centered</td><td style="text-align:right;">$12</td></tr><tr><td>zebra stripes</td><td style="text-align:center;">are neat</td><td style="text-align:right;">$1</td></tr></tbody></table><h3 id="markdown-删除线" tabindex="-1">- markdown 删除线 <a class="header-anchor" href="#markdown-删除线" aria-hidden="true">#</a></h3><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">~~</span><span style="color:#A6ACCD;">The world is flat.</span><span style="color:#89DDFF;">~~</span></span>
<span class="line"></span></code></pre></div><p><s>The world is flat.</s></p><h3 id="markdown-任务列表" tabindex="-1">- markdown 任务列表 <a class="header-anchor" href="#markdown-任务列表" aria-hidden="true">#</a></h3><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">x</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> Write the press release</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> [ ] Update the website</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> [ ] Contact the media</span></span>
<span class="line"></span></code></pre></div><ul><li>[x] Write the press release</li><li>[ ] Update the website</li><li>[ ] Contact the media</li></ul>`,45),t=[p];function o(i,c,r,d,y,C){return a(),n("div",null,t)}const A=s(e,[["render",o]]);export{D as __pageData,A as default};