!function(e){function t(t){for(var o,i,l=t[0],d=t[1],u=t[2],a=0,m=[];a<l.length;a++)i=l[a],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&m.push(c[i][0]),c[i]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);for(s&&s(t);m.length;)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,l=1;l<n.length;l++){var d=n[l];0!==c[d]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},c={0:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=d;r.push([121,1]),n()}({121:function(e,t,n){n(122),e.exports=n(309)},308:function(e,t,n){},309:function(e,t,n){"use strict";n.r(t);n(308);var o=n.p+"4ee89799c89d647ee61997b4196ca6ca.svg",c=n.p+"209c779234951858a5817ef6809de766.svg",r=n.p+"0465325eb3c48346f2a18b6941f28612.mp4",i=document.getElementById("videoAi"),l=document.getElementById("videoVideoAnalysis"),d=document.getElementById("videoRecognition"),u=document.getElementById("videoModeling"),s=document.getElementById("videoPlyerAnalysis");i.innerHTML='<source src="'.concat(r,'" type="video/mp4"></source>'),l.innerHTML='<source src="'.concat(r,'" type="video/mp4"></source>'),d.innerHTML='<source src="'.concat(r,'" type="video/mp4"></source>'),u.innerHTML='<source src="'.concat(r,'" type="video/mp4"></source>'),s.innerHTML='<source src="'.concat(r,'" type="video/mp4"></source>'),document.querySelector(".machinae__logo").innerHTML=' <img src="'.concat(c,'" alt="Machinae Albae">'),document.querySelector(".arrow").innerHTML='<div class="scroll" id="scroll">scroll</div> <img src="'.concat(o,'" id="arrowImg" alt="scroll arrow">');var a=n.p+"d63825c9f52af14fc336eb8f32ec68b8.png",m=document.getElementById("videoAi"),g=document.getElementById("videoVideoAnalysis"),y=document.getElementById("videoRecognition"),p=document.getElementById("videoModeling"),f=document.getElementById("videoPlyerAnalysis"),v=document.getElementById("play1"),E=document.getElementById("play2"),w=document.getElementById("play3"),I=document.getElementById("play4"),L=document.getElementById("play5");function h(e,t){e.setAttribute("poster",a),e.addEventListener("pause",(function(){t.classList.remove("active","hiden"),t.classList.add("active"),e.removeAttribute("controls")})),e.addEventListener("play",(function(){t.classList.remove("active","hiden"),t.classList.add("hiden")})),t.addEventListener("click",(function(){e.play(),t.classList.remove("active","hiden"),t.classList.add("hiden"),e.setAttribute("controls","controls")}))}h(m,v),h(g,E),h(y,w),h(p,I),h(f,L);var B={block:"center",behavior:"smooth"},b=document.getElementById("headerLink1"),k=document.getElementById("headerLink2"),M=document.getElementById("headerLink3"),H=document.getElementById("headerLink4"),V=document.getElementById("headerLink5"),_=document.getElementById("section_ai"),A=document.getElementById("section_video-analysis"),O=document.getElementById("section_recognition"),T=document.getElementById("section_modeling"),j=document.getElementById("section_player-analysis");b.addEventListener("click",(function(){return _.scrollIntoView(B)})),k.addEventListener("click",(function(){return A.scrollIntoView(B)})),M.addEventListener("click",(function(){return O.scrollIntoView(B)})),H.addEventListener("click",(function(){return T.scrollIntoView(B)})),V.addEventListener("click",(function(){return j.scrollIntoView(B)}));var P=null,R=document.getElementById("arrow"),x=window.scrollY+_.getBoundingClientRect().top;R.addEventListener("click",(function(){return _.scrollIntoView(B)}));var S=0,Y=!1;window.addEventListener("scroll",(function(){S=window.scrollY,Y||(window.requestAnimationFrame((function(){var e,t,n,o,c,r,i,l,d,u,s,a;e=S,t=document.getElementById("arrowImg"),n=document.getElementById("scroll"),o=document.getElementById("header"),c=document.getElementById("machinae"),r=window.scrollY+A.getBoundingClientRect().top,i=window.scrollY+O.getBoundingClientRect().top,l=window.scrollY+T.getBoundingClientRect().top,d=window.scrollY+j.getBoundingClientRect().top,u=window.scrollY+j.getBoundingClientRect().bottom,s=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),a=Math.floor(.1*s),e>=u-1.1*a?(t.classList.add("arrow_up"),n.innerHTML="up",P=!0,R.addEventListener("click",(function(){return o.scrollIntoView(B)}))):e>=d-a&&!P?R.addEventListener("click",(function(){return c.scrollIntoView(B)})):e>=l-a&&!P?R.addEventListener("click",(function(){return j.scrollIntoView(B)})):e>=i-a&&!P?R.addEventListener("click",(function(){return T.scrollIntoView(B)})):e>=r-a&&!P?R.addEventListener("click",(function(){return O.scrollIntoView(B)})):e>=x-a&&!P?R.addEventListener("click",(function(){return A.scrollIntoView(B)})):e<=x&&(R.addEventListener("click",(function(){return _.scrollIntoView(B)})),t.classList.remove("arrow_up"),n.innerHTML="scroll",P=!1),Y=!1})),Y=!0)}))}});