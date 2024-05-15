import{_ as e,c as o,o as a,a3 as d}from"./chunks/framework.ymtTkBEb.js";const m=JSON.parse('{"title":"常用正则表达式","description":"","frontmatter":{},"headers":[],"relativePath":"docs/javascript/regex/常用正则表达式.md","filePath":"docs/javascript/regex/常用正则表达式.md"}'),c={name:"docs/javascript/regex/常用正则表达式.md"},t=d('<h1 id="常用正则表达式" tabindex="-1">常用正则表达式 <a class="header-anchor" href="#常用正则表达式" aria-label="Permalink to &quot;常用正则表达式&quot;">​</a></h1><h2 id="匹配字符串前后空格" tabindex="-1">匹配字符串前后空格 <a class="header-anchor" href="#匹配字符串前后空格" aria-label="Permalink to &quot;匹配字符串前后空格&quot;">​</a></h2><p>匹配字符串前后空格，可以达到去除的效果，同<code>string.trim()</code></p><p>正则：</p><p><code>/(^\\s+|\\s+$)/g</code></p><p>分析：</p><p><code>^</code> 匹配开头、<code>$</code> 匹配结尾、<code>|</code> 分支或 、<code>\\s</code> 空白符 、<code>+</code> 量词1次或多次</p><h2 id="匹配手机号" tabindex="-1">匹配手机号 <a class="header-anchor" href="#匹配手机号" aria-label="Permalink to &quot;匹配手机号&quot;">​</a></h2><p>匹配手机号，用于验证手机号是否符合规范，主要验证中国的</p><p>正则：</p><p><code>/^1[3-9]\\d{9}$/g</code></p><p>分析：</p><p>中国手机号都是数字字符、且是号段都是1开头，第二位非0-2的数字</p><p><code>^</code> 匹配开头、<code>$</code> 匹配结尾、<code>[3-9]</code> 标识3-9的数字字符集、<code>\\d</code> 数字字符 、<code>{9}</code> 量词，标识字符数量为9次</p><h2 id="匹配邮箱" tabindex="-1">匹配邮箱 <a class="header-anchor" href="#匹配邮箱" aria-label="Permalink to &quot;匹配邮箱&quot;">​</a></h2><p>匹配邮箱，用于验证邮箱</p><p>正则：</p><p><code>/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-z]{2,6})+$/g</code></p><p>分析：</p><p>邮箱地址规则：用户名@服务器域名</p><ul><li>用户名：由字母、数字、下划线、横杠组成</li><li>域名：一级主机名.顶级域名，主机名可由字母、数字、下划线、横杠组成，顶级域名一般为2-6个小写字母组成，且可能有多个</li></ul><h2 id="匹配url" tabindex="-1">匹配URL <a class="header-anchor" href="#匹配url" aria-label="Permalink to &quot;匹配URL&quot;">​</a></h2><p>匹配url，用于验证链接完整行</p><p>正则：</p><p><code>/^((https?|ftp|file):)?\\/\\/[\\w.-]+(\\.[a-z]{2,6})+(:[0-9]+)?(\\/\\S*)?$/</code></p><p>分析：</p><p>url地址规则：协议://域名:端口/path</p><ul><li>协议：有 <code>http:</code> <code>https:</code> <code>ftp:</code> <code>file:</code> 等</li><li>域名：[多级主机名].顶级域名, 主机名可由字母、数字、下划线、横杠组成, 顶级域名一般为2-6个小写字母组成，且可能有多个</li><li>端口：0-65535的数字，可以省略</li><li>path: 可以不用匹配</li></ul><h2 id="匹配html标签" tabindex="-1">匹配html标签 <a class="header-anchor" href="#匹配html标签" aria-label="Permalink to &quot;匹配html标签&quot;">​</a></h2><p>匹配html标签，用于去除标签内容</p><p>正则：</p><p><code>/&lt;[^&gt;]+&gt;/g</code></p><p>分析：</p><p>html标签规则：<code>&lt;</code>任意非闭合<code>&gt;</code>的内容<code>&gt;</code></p><h2 id="匹配ipv4地址" tabindex="-1">匹配ipv4地址 <a class="header-anchor" href="#匹配ipv4地址" aria-label="Permalink to &quot;匹配ipv4地址&quot;">​</a></h2><p>匹配ip地址用于验证是否符合规范</p><p>正则：</p><p><code>/^(2[0-5][0-5]|1\\d{2}|[1-9]?\\d)(\\.(2[0-5][0-5]|1\\d{2}|[1-9]?\\d)){3}$/</code></p><p>分析：</p><ul><li><code>2[0-5][0-5]</code> 匹配 200 - 255</li><li><code>1\\d{2}</code> 匹配 100 - 199</li><li><code>[1-9]?\\d</code> 匹配 0 - 99</li></ul>',40),p=[t];function l(i,r,h,s,n,_){return a(),o("div",null,p)}const f=e(c,[["render",l]]);export{m as __pageData,f as default};
