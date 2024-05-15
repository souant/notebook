import{_ as i,c as s,o as a,a3 as l}from"./chunks/framework.ymtTkBEb.js";const g=JSON.parse('{"title":"初级","description":"","frontmatter":{},"headers":[],"relativePath":"docs/others/interview/html/index-1.md","filePath":"docs/others/interview/html/index-1.md"}'),t={name:"docs/others/interview/html/index-1.md"},e=l(`<h1 id="初级" tabindex="-1">初级 <a class="header-anchor" href="#初级" aria-label="Permalink to &quot;初级&quot;">​</a></h1><h2 id="doctype-文档类型-的作用" tabindex="-1">DOCTYPE(⽂档类型) 的作⽤ <a class="header-anchor" href="#doctype-文档类型-的作用" aria-label="Permalink to &quot;DOCTYPE(⽂档类型) 的作⽤&quot;">​</a></h2><p>DOCTYPE 是 HTML5 中一种标准通用标记语言的文档类型声明，它的目的是告诉浏览器（解析器）应该以什么样（html 或 xhtml）的文档类型定义来解析文档</p><p>浏览器渲染页面的两种模式（可通过 document.compatMode 获取）</p><ul><li>CSS1Compat：标准模式（Strick mode），默认模式，浏览器使用 W3C 的标准解析渲染页面。在标准模式中，浏览器以其支持的最高标准呈现页面。</li><li>BackCompat：怪异模式(混杂模式)(Quick mode)，浏览器使用自己的怪异模式解析渲染页面。在怪异模式中，页面以一种比较宽松的向后兼容的方式显示</li></ul><h2 id="html5-语义化标签" tabindex="-1">Html5 语义化标签 <a class="header-anchor" href="#html5-语义化标签" aria-label="Permalink to &quot;Html5 语义化标签&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">头部</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">nav</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">nav</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">导航栏</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">section</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">section</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">区块（有语义化的div）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">主要区域</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">article</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">article</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">主要内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">aside</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">aside</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">侧边栏</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">底部</span></span></code></pre></div><h2 id="为什么需要语义化标签" tabindex="-1">为什么需要语义化标签 <a class="header-anchor" href="#为什么需要语义化标签" aria-label="Permalink to &quot;为什么需要语义化标签&quot;">​</a></h2><ul><li>易修改、易维护。</li><li>无障碍阅读支持。</li><li>搜索引擎友好，利于 SEO。</li><li>面向未来的 HTML，浏览器在未来可能提供更丰富的支持。</li></ul><h2 id="行内元素有哪些-块级元素有哪些" tabindex="-1">行内元素有哪些？块级元素有哪些？ <a class="header-anchor" href="#行内元素有哪些-块级元素有哪些" aria-label="Permalink to &quot;行内元素有哪些？块级元素有哪些？&quot;">​</a></h2><ul><li>行内元素有：a b span img input select strong；</li><li>块级元素有：div ul ol li dl dt dd h1 h2 h3 h4 h5 h6 p；</li><li>常见的空元素：br、hr、img、input、link、meta</li></ul><p>块级元素：</p><ul><li>总是在新行上开始，就是每个块级元素独占一行，默认从上到下排列</li><li>宽度缺少时是它的容器的 100%，除非设置一个宽度</li><li>高度、行高以及外边距和内边距都是可以设置的</li><li>块级元素可以容纳其它行级元素和块级元素</li></ul><p>行内元素：</p><ul><li>和其它元素都会在一行显示</li><li>高、行高以及外边距和内边距可以设置</li><li>宽度就是文字或者图片的宽度，不能改变</li><li>行级元素只能容纳文本或者其它行内元素</li></ul><p>使用行内元素需要注意的是：</p><ul><li>行内元素设置宽度 width 无效</li><li>行内元素设置 height 无效，但是可以通过 line-height 来设置</li><li>设置 margin 只有左右有效，上下无效</li><li>设置 padding 只有左右有效，上下无效</li></ul><h2 id="src-和-href-的区别" tabindex="-1">src 和 href 的区别 <a class="header-anchor" href="#src-和-href-的区别" aria-label="Permalink to &quot;src 和 href 的区别&quot;">​</a></h2><p>src 和 href 都是用来引用外部的资源</p><ul><li>src： 表示对资源的引用，它指向的内容会嵌入到当前标签所在的位置。src 会将其指向的资源下载并应⽤到⽂档内，如请求 js 脚本。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执⾏完毕，所以⼀般 js 脚本会放在页面底部。</li><li>href： 表示超文本引用，它指向一些网络资源，建立和当前元素或本文档的链接关系。当浏览器识别到它他指向的⽂件时，就会并⾏下载资源，不会停⽌对当前⽂档的处理。 常用在 a、link 等标签上</li></ul><h2 id="script-标签中-defer-和-async-的区别" tabindex="-1">script 标签中 defer 和 async 的区别 <a class="header-anchor" href="#script-标签中-defer-和-async-的区别" aria-label="Permalink to &quot;script 标签中 defer 和 async 的区别&quot;">​</a></h2><p>defer 和 async 是两种脚本资源异步加载方式，没有 defer 或 async 属性，浏览器会立即加载并执行相应的脚本。它不会等待后续加载的文档元素，读取到就会开始加载和执行，这样就阻塞了后续文档的加载</p><ul><li>defer：可以保证脚本加载的执行顺序</li><li>async: 无法保证按顺序执行脚本，加载完成后就执行</li></ul><p>其他属性：</p><ol><li>async: 可选。表示立即加载脚本，但不阻碍页面其他动作，异步加载</li><li>charset: 可选。标识加载的脚本代码字符集</li><li>crossorigin: 可选。配置脚本加载请求跨域设置</li><li>defer: 可选。表示延迟到文档加载完成后再加载脚本</li><li>integrity: 可选。加密签名设置。emm: 没用过</li><li>language: <span style="color:red;">废弃 </span>。</li><li>src: 可选。加载的脚本外部地址。</li><li>type: 可选。标识脚本的语言类型(也称 MIME 类型)。值为：&quot;module&quot;，表示代码会被当成 es6 模块</li></ol><h2 id="meta-标签有哪些" tabindex="-1">meta 标签有哪些 <a class="header-anchor" href="#meta-标签有哪些" aria-label="Permalink to &quot;meta 标签有哪些&quot;">​</a></h2><p><code>meta</code> 标签由 <code>name</code> 和 <code>content</code> 属性定义，用来描述网页文档的属性</p><ol><li>描述 HTML 文档的编码类型</li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><ol start="2"><li>页面关键词</li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;keywords&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;关键词&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><ol start="3"><li>页面描述</li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;description&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;页面描述内容&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><ol start="4"><li>refresh 页面重定向和刷新</li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> http-equiv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;refresh&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0;url=&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><ol start="5"><li>viewport，适配移动端，可以控制视口的大小和比例</li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;viewport&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;width=device-width, initial-scale=1, maximum-scale=1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><p>content 参数有以下几种：</p><p><code>width viewport</code> ：宽度(数值/device-width) <code>height viewport</code> ：高度(数值/device-height) <code>initial-scale</code> ：初始缩放比例 <code>maximum-scale</code> ：最大缩放比例 <code>minimum-scale</code> ：最小缩放比例 <code>user-scalable</code> ：是否允许用户缩放(yes/no) 6. 搜索引擎索引方式</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;robots&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;index,follow&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>content 参数有以下几种：</p><p><code>all</code>：文件将被检索，且页面上的链接可以被查询； <code>none</code>：文件将不被检索，且页面上的链接不可以被查询； <code>index</code>：文件将被检索； <code>follow</code>：页面上的链接可以被查询； <code>noindex</code>：文件将不被检索； <code>nofollow</code>：页面上的链接不可以被查询。</p><h2 id="html5-有哪些更新" tabindex="-1">HTML5 有哪些更新 <a class="header-anchor" href="#html5-有哪些更新" aria-label="Permalink to &quot;HTML5 有哪些更新&quot;">​</a></h2><ol><li>语义化标签</li></ol><ul><li><code>header</code>：定义文档的页眉（头部）；</li><li><code>nav</code>：定义导航链接的部分；</li><li><code>footer</code>：定义文档或节的页脚（底部）；</li><li><code>article</code>：定义文章内容；</li><li><code>section</code>：定义文档中的节（section、区段）；</li><li><code>aside</code>：定义其所处内容之外的内容（侧边）；</li></ul><ol start="2"><li>媒体标签</li></ol><ul><li><code>audio</code> 音频</li><li><code>video</code> 视频</li></ul><ol start="3"><li><p>画布canvas</p></li><li><p>表单</p></li></ol><ul><li><p>表单类型 <code>email</code> ：能够验证当前输入的邮箱地址是否合法 <code>url</code> ： 验证 URL <code>number</code> ： 只能输入数字，其他输入不了，而且自带上下增大减小箭头，max 属性可以设置为最大值，min 可以设置为最小值，value 为默认值。 <code>search</code> ： 输入框后面会给提供一个小叉，可以删除输入的内容，更加人性化。 <code>range</code> ： 可以提供给一个范围，其中可以设置 max 和 min 以及 value，其中 value 属性可以设置为默认值 <code>color</code> ： 提供了一个颜色拾取器 <code>time</code> ： 时分秒 <code>data</code> ： 日期选择年月日 <code>datatime</code> ： 时间和日期(目前只有 Safari 支持) <code>datatime-local</code> ：日期时间控件 <code>week</code> ：周控件 <code>month</code>：月控件</p></li><li><p>表单属性： <code>placeholder</code> ：提示信息 <code>autofocus</code> ：自动获取焦点 <code>autocomplete=“on”</code> 或者 autocomplete=“off” 使用这个属性需要有两个前提：表单必须提交过 必须有 name 属性。 <code>required</code>：要求输入框不能为空，必须有值才能够提交。 <code>pattern=&quot; &quot;</code> 里面写入想要的正则模式，例如手机号 patte=&quot;^(+86)?\\d{10}$&quot; <code>multiple</code>：可以选择多个文件或者多个邮箱 <code>form</code>=&quot; form 表单的 ID&quot;</p></li><li><p>表单事件：</p><p><code>oninput</code> 每当 input 里的输入框内容发生变化都会触发此事件。 <code>oninvalid</code> 当验证不通过时触发此事件。</p></li></ul><ol start="5"><li>DOM 查询操作</li></ol><ul><li><code>document.querySelector()</code></li><li><code>document.querySelectorAll()</code></li></ul><ol start="6"><li>Web 存储</li></ol><ul><li><code>localStorage</code> 没有时间限制的数据存储</li><li><code>sessionStorage</code> 针对一个 session 的数据存储</li></ul><p>移除的元素：</p><ul><li>纯表现的元素：basefont、font、s、strike、tt、u、big、center</li><li>对可选用性产生负面影响的元素：frame、frameset、noframes</li></ul>`,55),n=[e];function h(p,o,d,k,c,r){return a(),s("div",null,n)}const u=i(t,[["render",h]]);export{g as __pageData,u as default};