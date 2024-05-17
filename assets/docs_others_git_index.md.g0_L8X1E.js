import{_ as s,c as a,o as i,a3 as t}from"./chunks/framework.ymtTkBEb.js";const b=JSON.parse('{"title":"git 命令","description":"","frontmatter":{},"headers":[],"relativePath":"docs/others/git/index.md","filePath":"docs/others/git/index.md"}'),e={name:"docs/others/git/index.md"},h=t(`<h1 id="git-命令" tabindex="-1">git 命令 <a class="header-anchor" href="#git-命令" aria-label="Permalink to &quot;git 命令&quot;">​</a></h1><h2 id="_1、git初始化" tabindex="-1">1、git初始化 <a class="header-anchor" href="#_1、git初始化" aria-label="Permalink to &quot;1、git初始化&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><h2 id="_2、查看git项目状态-工作区、暂存区" tabindex="-1">2、查看Git项目状态（工作区、暂存区） <a class="header-anchor" href="#_2、查看git项目状态-工作区、暂存区" aria-label="Permalink to &quot;2、查看Git项目状态（工作区、暂存区）&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span></code></pre></div><h2 id="_3、查看git提交记录" tabindex="-1">3、查看Git提交记录 <a class="header-anchor" href="#_3、查看git提交记录" aria-label="Permalink to &quot;3、查看Git提交记录&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span></span></code></pre></div><h2 id="_4、远程服务器git仓库克隆项目到本地仓库" tabindex="-1">4、远程服务器Git仓库克隆项目到本地仓库 <a class="header-anchor" href="#_4、远程服务器git仓库克隆项目到本地仓库" aria-label="Permalink to &quot;4、远程服务器Git仓库克隆项目到本地仓库&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">远程仓</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">库</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [文件路径]</span></span></code></pre></div><h2 id="_5、将工作区的文件增加到暂存区进行追踪" tabindex="-1">5、将工作区的文件增加到暂存区进行追踪 <a class="header-anchor" href="#_5、将工作区的文件增加到暂存区进行追踪" aria-label="Permalink to &quot;5、将工作区的文件增加到暂存区进行追踪&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">文</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">件</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h2 id="_6、暂存区的文件提交到本地仓库" tabindex="-1">6、暂存区的文件提交到本地仓库 <a class="header-anchor" href="#_6、暂存区的文件提交到本地仓库" aria-label="Permalink to &quot;6、暂存区的文件提交到本地仓库&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;commit info&quot;</span></span></code></pre></div><h2 id="_7、本地仓库推送到远程仓库" tabindex="-1">7、本地仓库推送到远程仓库 <a class="header-anchor" href="#_7、本地仓库推送到远程仓库" aria-label="Permalink to &quot;7、本地仓库推送到远程仓库&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span></span></code></pre></div><h2 id="_8、远程仓库拉取到本地仓库" tabindex="-1">8、远程仓库拉取到本地仓库 <a class="header-anchor" href="#_8、远程仓库拉取到本地仓库" aria-label="Permalink to &quot;8、远程仓库拉取到本地仓库&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span></span></code></pre></div><h2 id="_9、版本比较" tabindex="-1">9、版本比较 <a class="header-anchor" href="#_9、版本比较" aria-label="Permalink to &quot;9、版本比较&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span></span></code></pre></div><h2 id="_10、分支合并" tabindex="-1">10、分支合并 <a class="header-anchor" href="#_10、分支合并" aria-label="Permalink to &quot;10、分支合并&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rebase</span></span></code></pre></div><p><a href="https://dingjingmaster.github.io/2022/05/0002-rebase%E4%B8%8Emerge%E7%9A%84%E5%8C%BA%E5%88%AB/" target="_blank" rel="noreferrer">https://dingjingmaster.github.io/2022/05/0002-rebase与merge的区别/</a></p>`,22),l=[h];function n(p,d,o,k,r,g){return i(),a("div",null,l)}const F=s(e,[["render",n]]);export{b as __pageData,F as default};