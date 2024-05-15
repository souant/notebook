import{_ as s,c as a,o as i,a3 as n}from"./chunks/framework.ymtTkBEb.js";const E=JSON.parse('{"title":"Note Book","description":"","frontmatter":{},"headers":[],"relativePath":"markdown-examples.md","filePath":"markdown-examples.md"}'),e={name:"markdown-examples.md"},t=n(`<h1 id="note-book" tabindex="-1">Note Book <a class="header-anchor" href="#note-book" aria-label="Permalink to &quot;Note Book&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#vitepress-标记">vitepress 标记</a><ul><li><a href="#vitepress-文章前言">- vitepress 文章前言</a></li><li><a href="#表情符号">- 表情符号</a></li><li><a href="#md-文件中引入-vue-组件">- .md 文件中引入 vue 组件</a></li><li><a href="#目录">- 目录</a></li><li><a href="#自定义容器">- 自定义容器</a></li><li><a href="#代码组">- 代码组</a></li><li><a href="#引入markdown文件">- 引入markdown文件</a></li></ul></li><li><a href="#markdown-标记">markdown 标记</a><ul><li><a href="#markdown-表格">- markdown 表格</a></li><li><a href="#markdown-删除线">- markdown 删除线</a></li><li><a href="#markdown-任务列表">- markdown 任务列表</a></li></ul></li><li><a href="#更多">更多</a></li></ul></nav><h2 id="vitepress-标记" tabindex="-1">vitepress 标记 <a class="header-anchor" href="#vitepress-标记" aria-label="Permalink to &quot;vitepress 标记&quot;">​</a></h2><p>VitePress 使用markdown-it作为 Markdown 渲染器</p><h3 id="vitepress-文章前言" tabindex="-1">- vitepress 文章前言 <a class="header-anchor" href="#vitepress-文章前言" aria-label="Permalink to &quot;- vitepress 文章前言&quot;">​</a></h3><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Blogging Like a Hacker</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">en-US</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div><hr><h3 id="表情符号" tabindex="-1">- 表情符号 <a class="header-anchor" href="#表情符号" aria-label="Permalink to &quot;- 表情符号&quot;">​</a></h3><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:tada: :100:</span></span></code></pre></div><p><a href="https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json" target="_blank" rel="noreferrer">《表情符号列表》</a></p><hr><h3 id="md-文件中引入-vue-组件" tabindex="-1">- <code>.md</code> 文件中引入 vue 组件 <a class="header-anchor" href="#md-文件中引入-vue-组件" aria-label="Permalink to &quot;- \`.md\` 文件中引入 vue 组件&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  import VueComponent from &#39;./example/vue-component/index.vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="目录" tabindex="-1">- 目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;- 目录&quot;">​</a></h3><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[[</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">toc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]</span></span></code></pre></div><h3 id="自定义容器" tabindex="-1">- 自定义容器 <a class="header-anchor" href="#自定义容器" aria-label="Permalink to &quot;- 自定义容器&quot;">​</a></h3><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: info</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is an info box.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: tip</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a tip.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: warning</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a warning.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: danger</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a dangerous warning.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: details</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a details block.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div><p>示例</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning.</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details><ul><li>导入代码片段</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;&lt;&lt; @/filepath</span></span></code></pre></div><hr><h3 id="代码组" tabindex="-1">- 代码组 <a class="header-anchor" href="#代码组" aria-label="Permalink to &quot;- 代码组&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>::: code-group</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`js [config.js]</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @type {import(&#39;vitepress&#39;).UserConfig}</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>const config = {</span></span>
<span class="line"><span>  // ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default config</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`ts [config.ts]</span></span>
<span class="line"><span>import type { UserConfig } from &#39;vitepress&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const config: UserConfig = {</span></span>
<span class="line"><span>  // ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default config</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:::</span></span></code></pre></div><p>示例</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-4cVlX" id="tab-W389Ru2" checked="checked"><label for="tab-W389Ru2">config.js</label><input type="radio" name="group-4cVlX" id="tab-bzf5PHi"><label for="tab-bzf5PHi">config.ts</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {import(&#39;vitepress&#39;).UserConfig}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { UserConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UserConfig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config</span></span></code></pre></div></div></div><h3 id="引入markdown文件" tabindex="-1">- 引入markdown文件 <a class="header-anchor" href="#引入markdown文件" aria-label="Permalink to &quot;- 引入markdown文件&quot;">​</a></h3><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- @include: ./src/index.md --&gt;</span></span></code></pre></div><hr><h2 id="markdown-标记" tabindex="-1">markdown 标记 <a class="header-anchor" href="#markdown-标记" aria-label="Permalink to &quot;markdown 标记&quot;">​</a></h2><p><a href="https://www.markdown.xyz/cheat-sheet/" target="_blank" rel="noreferrer">《Markdown 指南中文版》</a></p><h3 id="markdown-表格" tabindex="-1">- markdown 表格 <a class="header-anchor" href="#markdown-表格" aria-label="Permalink to &quot;- markdown 表格&quot;">​</a></h3><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Tables        |      Are      |  Cool |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| ------------- | :-----------: | ----: |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| col 3 is      | right-aligned | $1600 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| col 2 is      |   centered    |   $12 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| zebra stripes |   are neat    |    $1 |</span></span></code></pre></div><p>示例</p><table><thead><tr><th>Tables</th><th style="text-align:center;">Are</th><th style="text-align:right;">Cool</th></tr></thead><tbody><tr><td>col 3 is</td><td style="text-align:center;">right-aligned</td><td style="text-align:right;">$1600</td></tr><tr><td>col 2 is</td><td style="text-align:center;">centered</td><td style="text-align:right;">$12</td></tr><tr><td>zebra stripes</td><td style="text-align:center;">are neat</td><td style="text-align:right;">$1</td></tr></tbody></table><h3 id="markdown-删除线" tabindex="-1">- markdown 删除线 <a class="header-anchor" href="#markdown-删除线" aria-label="Permalink to &quot;- markdown 删除线&quot;">​</a></h3><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">~~The world is flat.~~</span></span></code></pre></div><p><s>The world is flat.</s></p><h3 id="markdown-任务列表" tabindex="-1">- markdown 任务列表 <a class="header-anchor" href="#markdown-任务列表" aria-label="Permalink to &quot;- markdown 任务列表&quot;">​</a></h3><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] Write the press release</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] Update the website</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] Contact the media</span></span></code></pre></div><ul><li>[x] Write the press release</li><li>[ ] Update the website</li><li>[ ] Contact the media</li></ul><h2 id="更多" tabindex="-1">更多 <a class="header-anchor" href="#更多" aria-label="Permalink to &quot;更多&quot;">​</a></h2><p>Check out the documentation for the <a href="https://vitepress.dev/guide/markdown" target="_blank" rel="noreferrer">full list of markdown extensions</a>.</p>`,47),l=[t];function p(h,r,d,k,o,c){return i(),a("div",null,l)}const u=s(e,[["render",p]]);export{E as __pageData,u as default};