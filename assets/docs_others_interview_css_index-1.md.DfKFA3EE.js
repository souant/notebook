import{_ as t,c as i,o as l,a3 as e}from"./chunks/framework.ymtTkBEb.js";const k=JSON.parse('{"title":"初级","description":"","frontmatter":{},"headers":[],"relativePath":"docs/others/interview/css/index-1.md","filePath":"docs/others/interview/css/index-1.md"}'),a={name:"docs/others/interview/css/index-1.md"},s=e(`<h1 id="初级" tabindex="-1">初级 <a class="header-anchor" href="#初级" aria-label="Permalink to &quot;初级&quot;">​</a></h1><h2 id="css-的盒子模型" tabindex="-1">CSS 的盒子模型 <a class="header-anchor" href="#css-的盒子模型" aria-label="Permalink to &quot;CSS 的盒子模型&quot;">​</a></h2><p><code>content + padding + border + margin</code></p><ul><li>标准盒子模型: 宽/高是内容(content)</li><li>IE 盒子模型: 宽/高是(content + padding + border)</li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 标准盒子模型 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">box-sizing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">content-box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* IE盒子模型 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">box-sizing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">border-box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="css-选择器" tabindex="-1">CSS 选择器 <a class="header-anchor" href="#css-选择器" aria-label="Permalink to &quot;CSS 选择器&quot;">​</a></h2><table><thead><tr><th>选择器</th><th style="text-align:left;">格式</th><th>优先级权重</th></tr></thead><tbody><tr><td>id 选择器</td><td style="text-align:left;">#id</td><td>100</td></tr><tr><td>类选择器</td><td style="text-align:left;">#classname</td><td>10</td></tr><tr><td>属性选择器</td><td style="text-align:left;">a[ref=&quot;eee&quot;]</td><td>10</td></tr><tr><td>伪类选择器</td><td style="text-align:left;">li:last-child</td><td>10</td></tr><tr><td>标签选择器</td><td style="text-align:left;">div</td><td>1</td></tr><tr><td>伪元素选择器</td><td style="text-align:left;">li:after</td><td>1</td></tr><tr><td>相邻兄弟选择器</td><td style="text-align:left;">h1+p</td><td>0</td></tr><tr><td>子选择器</td><td style="text-align:left;">ul&gt;li</td><td>0</td></tr><tr><td>后代选择器</td><td style="text-align:left;">li a</td><td>0</td></tr><tr><td>通配符选择器</td><td style="text-align:left;">*</td><td>0</td></tr></tbody></table><h2 id="css-选择器优先级" tabindex="-1">CSS 选择器优先级 <a class="header-anchor" href="#css-选择器优先级" aria-label="Permalink to &quot;CSS 选择器优先级&quot;">​</a></h2><p>!important &gt; 内联样式 &gt; id &gt; [class 、 属性 、伪类 ] &gt; [标签 、伪元素 ]</p><p>如果优先级相同，则最后出现的样式生效</p><p>样式表的来源不同时，优先级顺序为：内联样式 &gt; 内部样式 &gt; 外部样式 &gt; 浏览器用户自定义样式 &gt; 浏览器默认样式</p><h2 id="display-有哪些值及其含义" tabindex="-1">display 有哪些值及其含义 <a class="header-anchor" href="#display-有哪些值及其含义" aria-label="Permalink to &quot;display 有哪些值及其含义&quot;">​</a></h2><ul><li>inherit 规定应该从父元素继承 display 属性的值。</li><li>none 元素不显示，并且会从文档流中移除。</li><li>inline 行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。</li><li>inline-block 默认宽度为内容宽度，可以设置宽高，同行显示。</li><li>block 块类型。默认宽度为父元素宽度，可设置宽高，换行显示。</li><li>table 此元素会作为块级表格来显示。</li><li>list-item 像块类型元素一样显示，并添加样式列表标记。</li></ul><p>行内元素和块级元素，其特点如下：</p><p>（1）行内元素</p><ul><li>设置宽高无效；</li><li>可以设置水平方向的 margin 和 padding 属性，不能设置垂直方向的 padding 和 margin；</li><li>不会自动换行；</li></ul><p>（2）块级元素</p><ul><li>可以设置宽高；</li><li>设置 margin 和 padding 都有效；</li><li>可以自动换行；</li><li>多个块状，默认排列从上到下。</li></ul><h2 id="position-有哪些值" tabindex="-1">position 有哪些值 <a class="header-anchor" href="#position-有哪些值" aria-label="Permalink to &quot;position 有哪些值&quot;">​</a></h2><ul><li>inherit 规定从父元素继承position属性的值</li><li>static（默认） 默认值，没有定位，元素出现在正常的文档流中</li><li>relative（相对定位） 生成相对定位的元素，相对于其原来的位置进行定位。元素的位置通过left、top、right、bottom属性进行规定。</li><li>absolute(绝对定位) 生成绝对定位的元素，相对于static定位以外的一个父元素进行定位。元素的位置通过left、top、right、bottom属性进行规定</li><li>fixed(固定定位) 生成绝对定位的元素，指定元素相对于屏幕视⼝（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变，⽐如回到顶部的按钮⼀般都是⽤此定位⽅式。</li></ul><h2 id="伪类与伪元素" tabindex="-1">伪类与伪元素 <a class="header-anchor" href="#伪类与伪元素" aria-label="Permalink to &quot;伪类与伪元素&quot;">​</a></h2><blockquote><p>注意：CSS2 中伪类、伪元素都是以单冒号，css2.1 后做了区分</p></blockquote><ul><li><p>伪类，使用<code>:</code>单冒号，类似于声明的 class 类，选择处于特定状态的元素，如：</p><ul><li>:link 未访问的链接</li><li>:hover 鼠标悬停链接</li><li>:active 已选择的链接</li><li>:visited 已访问的链接</li><li>:first-child 选中第一个子元素</li><li>:nth-child(n) 选中第 n 个子元素</li></ul></li><li><p>伪元素，使用<code>::</code>双冒号，创建通常不存在于文档中的元素，如：</p><ul><li>::before 在之前创建一个不在文档树中的元素</li><li>::before 在之后创建一个不在文档树中的元素</li><li>::placeholder 选中表单元素的占位文本</li></ul></li></ul><h2 id="css3-中有哪些新特性" tabindex="-1">CSS3 中有哪些新特性 <a class="header-anchor" href="#css3-中有哪些新特性" aria-label="Permalink to &quot;CSS3 中有哪些新特性&quot;">​</a></h2><ul><li>新增各种 CSS 选择器 （: not(.input)：所有 class 不是“input”的节点）</li><li>圆角 （border-radius:8px）</li><li>多列布局 （multi-column layout）</li><li>阴影和反射 （Shadoweflect）</li><li>文字特效 （text-shadow）</li><li>文字渲染 （Text-decoration）</li><li>线性渐变 （gradient）</li><li>过度 （transform） 增加了旋转,缩放,定位,倾斜,等</li><li>动画 （animation）</li></ul><h2 id="常见的css布局单位" tabindex="-1">常见的CSS布局单位 <a class="header-anchor" href="#常见的css布局单位" aria-label="Permalink to &quot;常见的CSS布局单位&quot;">​</a></h2><ul><li><code>px</code>，物理像素或逻辑像素</li><li><code>%</code>，百分比，相对值，一般为子元素的百分比相对于直接父元素</li><li><code>em</code>，文本相对长度单位</li><li><code>rem</code>，rem是CSS3新增的一个相对单位，相对于根元素（html元素）的font-size的倍数</li><li><code>vw</code> ，视图窗口单位，相对于视图窗口的宽度</li><li><code>vh</code>，视图窗口单位，相对于视图窗口高度</li><li><code>vmin</code>，相对单位，当前 vw 和 vh 中较小的一个值 ，其中较小的被分为 100 份 。</li><li><code>vmax</code>，当前 vw 和 vh 中较大的一个值 。其中较大的值被分为 100 份。</li></ul>`,27),d=[s];function n(o,r,h,c,p,u){return l(),i("div",null,d)}const b=t(a,[["render",n]]);export{k as __pageData,b as default};
