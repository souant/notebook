import{e as w,o as _,c as R,a as i,f as q,b as m,d as b}from"./app.39a2d636.js";const W=i("canvas",{id:"canvas1",width:"300",height:"300"},null,-1),S=[W],M={__name:"circle-progress",setup(P){function E(C,a){if(C<0||C>100||a<Math.PI/2||a>=3/2*Math.PI)return;var f=document.querySelector("#canvas1"),s=f.getContext("2d"),p=f.width,t=f.height,o="#e1e1e1",l="#fe4d43",n=Math.PI,a=a||1/2*n,c=a+(n+(n-a)*2)*C/100,h=(n+(n-a)*2)/100,D=0;window.requestAnimationFrame(A);function A(){s.clearRect(0,0,p,t);var e=a+D*h;r(p/2,t/2,80,a,a+(n+(n-a)*2),o,2),r(p/2,t/2,80,a,e,l,2);var F=2*n-e;let y=Math.cos(F)*80+p/2,d=-Math.sin(F)*80+t/2;r(y,d,2,0,2*n,l,2),s.fillStyle=l,s.font="40px PT Sans";var u=s.measureText(D+"%").width;s.fillText(D+"%",p/2-u/2,t/2+15),D++,e.toFixed(2)<c.toFixed(2)&&window.requestAnimationFrame(A)}function r(e,F,y,d,u,g,v){s.beginPath(),s.lineCap="round",s.strokeStyle=g,s.lineWidth=v,s.arc(e,F,y,d,u,!1),s.stroke()}}return w(()=>{E(50)}),(C,x)=>(_(),R("div",null,S))}},O=i("canvas",{id:"canvas2",width:"300",height:"300"},null,-1),T=[O],I={__name:"dashboard-progress",setup(P){w(()=>{E(50,{canvas:document.querySelector("#canvas2"),lineWidth:10})});function E(s,p){if(s<0||s>100){console.error("percent is not allowed value");return}if(p&&Object.prototype.toString.call(p)!=="[object Object]"){console.error("options is not object value");return}const t={canvas:document.querySelector("#canvas"),size:200,lineWidth:20,sR:.8*Math.PI,eR:2.2*Math.PI,baseColor:"#e1e1e1",coverColor:"#fe4d43",textFont:"40px PT Sans"},o=Object.assign({},t,p),{canvas:l,sR:n,eR:a}=o;if(n<Math.PI/2||n>=3/2*Math.PI)return;let c=l.getContext("2d"),h=l.width,D=l.height,A=(a-n)/100;const r={...o,ctx:c,cWidth:h,cHeight:D,step:A};let e=0;function F(y){window.requestAnimationFrame(()=>{e++,!(e>s)&&C(e,y,()=>{F(y)})})}F(r)}function C(s,p,t){const{ctx:o,cWidth:l,cHeight:n,size:a,sR:c,eR:h,step:D,baseColor:A,coverColor:r,lineWidth:e,textFont:F}=p;let y=c+s*D;o.clearRect(0,0,l,n),x({ctx:o,x:l/2,y:n/2,r:a/2,sRadian:c,eRadian:h,color:A,lineWidth:e}),x({ctx:o,x:l/2,y:n/2,r:a/2,sRadian:c,eRadian:y,color:r,lineWidth:e});let d=2*Math.PI-y,u=Math.cos(d)*a/2+l/2,g=-Math.sin(d)*a/2+n/2;x({ctx:o,x:u,y:g,r:2,sRadian:0,eRadian:2*Math.PI,color:r,lineWidth:e*1.25});let v=s+"%";f({ctx:o,x:l/2,y:n/2+15,text:v,fillStyle:r,font:F}),t()}function x({ctx:s,x:p,y:t,r:o,sRadian:l,eRadian:n,color:a,lineWidth:c}){s.beginPath(),s.lineCap="round",s.strokeStyle=a,s.lineWidth=c,s.arc(p,t,o,l,n,!1),s.stroke()}function f({ctx:s,x:p,y:t,text:o,fillStyle:l,font:n}){s.fillStyle=l,s.font=n;let a=s.measureText(o).width;s.fillText(o,p-a/2,t)}return(s,p)=>(_(),R("div",null,T))}},k=i("h1",{id:"实现一个环形进度条",tabindex:"-1"},[m("实现一个环形进度条 "),i("a",{class:"header-anchor",href:"#实现一个环形进度条","aria-hidden":"true"},"#")],-1),j=i("h2",{id:"示例-1",tabindex:"-1"},[m("示例 1 "),i("a",{class:"header-anchor",href:"#示例-1","aria-hidden":"true"},"#")],-1),H=i("h2",{id:"示例-2",tabindex:"-1"},[m("示例 2 "),i("a",{class:"header-anchor",href:"#示例-2","aria-hidden":"true"},"#")],-1),B=b("",2),V=JSON.parse('{"title":"实现一个环形进度条","description":"","frontmatter":{},"headers":[{"level":2,"title":"示例 1","slug":"示例-1","link":"#示例-1","children":[]},{"level":2,"title":"示例 2","slug":"示例-2","link":"#示例-2","children":[]},{"level":2,"title":"示例代码","slug":"示例代码","link":"#示例代码","children":[]}],"relativePath":"docs/html/实现一个环形进度条.md"}'),z={name:"docs/html/实现一个环形进度条.md"},$=Object.assign(z,{setup(P){return(E,C)=>(_(),R("div",null,[k,j,q(M),H,q(I),B]))}});export{V as __pageData,$ as default};
