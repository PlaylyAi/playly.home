!function(e){function t(t){for(var o,i,l=t[0],d=t[1],u=t[2],a=0,m=[];a<l.length;a++)i=l[a],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&m.push(c[i][0]),c[i]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);for(s&&s(t);m.length;)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,l=1;l<n.length;l++){var d=n[l];0!==c[d]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},c={0:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=d;r.push([121,1]),n()}({121:function(e,t,n){n(122),e.exports=n(309)},308:function(e,t,n){},309:function(e,t,n){"use strict";n.r(t);n(308);var o=n.p+"4ee89799c89d647ee61997b4196ca6ca.svg",c=n.p+"209c779234951858a5817ef6809de766.svg",r=n.p+"0465325eb3c48346f2a18b6941f28612.mp4",i=document.getElementById("videoAi"),l=document.getElementById("videoVideoAnalysis"),d=document.getElementById("videoRecognition"),u=document.getElementById("videoModeling"),s=document.getElementById("videoPlyerAnalysis");i.innerHTML='<source src="'.concat(r,'" type="video/mp4"></source>'),l.innerHTML='<source src="'.concat(r,'" type="video/mp4"></source>'),d.innerHTML='<source src="'.concat(r,'" type="video/mp4"></source>'),u.innerHTML='<source src="'.concat(r,'" type="video/mp4"></source>'),s.innerHTML='<source src="'.concat(r,'" type="video/mp4"></source>'),document.querySelector(".machinae__logo").innerHTML=' <img src="'.concat(c,'" alt="Machinae Albae">'),document.querySelector(".arrow").innerHTML='<div class="scroll" id="scroll">scroll</div> <img src="'.concat(o,'" id="arrowImg" alt="scroll arrow">');var a=document.getElementById("videoAi"),m=document.getElementById("videoVideoAnalysis"),y=document.getElementById("videoRecognition"),g=document.getElementById("videoModeling"),v=document.getElementById("videoPlyerAnalysis"),p=document.getElementById("play1"),f=document.getElementById("play2"),E=document.getElementById("play3"),w=document.getElementById("play4"),I=document.getElementById("play5");function L(e,t){e.addEventListener("pause",(function(){t.classList.remove("active","hiden"),t.classList.add("active"),e.removeAttribute("controls")})),e.addEventListener("play",(function(){t.classList.remove("active","hiden"),t.classList.add("hiden")})),t.addEventListener("click",(function(){e.play(),t.classList.remove("active","hiden"),t.classList.add("hiden"),e.setAttribute("controls","controls")}))}L(a,p),L(m,f),L(y,E),L(g,w),L(v,I);var h={block:"center",behavior:"smooth"},B=document.getElementById("headerLink1"),b=document.getElementById("headerLink2"),k=document.getElementById("headerLink3"),M=document.getElementById("headerLink4"),H=document.getElementById("headerLink5"),V=document.getElementById("section_ai"),_=document.getElementById("section_video-analysis"),O=document.getElementById("section_recognition"),T=document.getElementById("section_modeling"),A=document.getElementById("section_player-analysis");B.addEventListener("click",(function(){return V.scrollIntoView(h)})),b.addEventListener("click",(function(){return _.scrollIntoView(h)})),k.addEventListener("click",(function(){return O.scrollIntoView(h)})),M.addEventListener("click",(function(){return T.scrollIntoView(h)})),H.addEventListener("click",(function(){return A.scrollIntoView(h)}));var j=null,P=document.getElementById("arrow"),R=window.scrollY+V.getBoundingClientRect().top;P.addEventListener("click",(function(){return V.scrollIntoView(h)}));var x=0,S=!1;window.addEventListener("scroll",(function(){x=window.scrollY,S||(window.requestAnimationFrame((function(){var e,t,n,o,c,r,i,l,d,u,s,a,m;e=x,t=document.getElementById("arrowImg"),n=document.getElementById("scroll"),o=document.getElementById("header"),c=document.getElementById("machinae"),r=document.getElementById("bottom"),i=window.scrollY+_.getBoundingClientRect().top,l=window.scrollY+O.getBoundingClientRect().top,d=window.scrollY+T.getBoundingClientRect().top,u=window.scrollY+A.getBoundingClientRect().top,s=window.scrollY+r.getBoundingClientRect().top,a=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),m=Math.floor(.1*a),e>=s-m?(t.classList.add("arrow_up"),n.innerHTML="up",j=!1,P.addEventListener("click",(function(){return o.scrollIntoView(h)}))):e>=u-m&&j?P.addEventListener("click",(function(){return c.scrollIntoView(h)})):e>=d-m&&j?P.addEventListener("click",(function(){return A.scrollIntoView(h)})):e>=l-m&&j?P.addEventListener("click",(function(){return T.scrollIntoView(h)})):e>=i-m&&j?P.addEventListener("click",(function(){return O.scrollIntoView(h)})):e>=R-m&&j?P.addEventListener("click",(function(){return _.scrollIntoView(h)})):e<=R-m&&(P.addEventListener("click",(function(){return V.scrollIntoView(h)})),t.classList.remove("arrow_up"),n.innerHTML="scroll",j=!0),S=!1})),S=!0)}))}});