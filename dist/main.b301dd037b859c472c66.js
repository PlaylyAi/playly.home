!function(e){function t(t){for(var o,i,d=t[0],l=t[1],u=t[2],a=0,m=[];a<d.length;a++)i=d[a],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&m.push(c[i][0]),c[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(s&&s(t);m.length;)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,d=1;d<n.length;d++){var l=n[d];0!==c[l]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},c={0:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var d=window.webpackJsonp=window.webpackJsonp||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var u=0;u<d.length;u++)t(d[u]);var s=l;r.push([121,1]),n()}({121:function(e,t,n){n(122),e.exports=n(309)},308:function(e,t,n){},309:function(e,t,n){"use strict";n.r(t);n(308);var o=n.p+"4ee89799c89d647ee61997b4196ca6ca.svg",c=n.p+"209c779234951858a5817ef6809de766.svg",r=n.p+"431a9624d2c4dbe5b50c10619ca6ff86.mp4",i=n.p+"9641ede8b9daa5f295125cffbf8644d4.mp4",d=n.p+"721db0f84842e03359cf5c14031027c5.mp4",l=n.p+"640ca70d7c289a69a622b3374ca4c06b.mp4",u=n.p+"6be15e9113510c99bd986eb6b0286515.mp4",s=document.getElementById("videoAi"),a=document.getElementById("videoVideoAnalysis"),m=document.getElementById("videoRecognition"),p=document.getElementById("videoModeling"),f=document.getElementById("videoPlyerAnalysis");s.innerHTML='<source src="'.concat(r,'" type="video/mp4"></source>'),a.innerHTML='<source src="'.concat(i,'" type="video/mp4"></source>'),m.innerHTML='<source src="'.concat(d,'" type="video/mp4"></source>'),p.innerHTML='<source src="'.concat(l,'" type="video/mp4"></source>'),f.innerHTML='<source src="'.concat(u,'" type="video/mp4"></source>'),document.querySelector(".machinae__logo").innerHTML=' <img src="'.concat(c,'" alt="Machinae Albae">'),document.querySelector(".arrow").innerHTML='<div class="scroll" id="scroll">scroll</div> <img src="'.concat(o,'" id="arrowImg" alt="scroll arrow">');var g=n.p+"d63825c9f52af14fc336eb8f32ec68b8.png",y=document.getElementById("videoAi"),v=document.getElementById("videoVideoAnalysis"),E=document.getElementById("videoRecognition"),w=document.getElementById("videoModeling"),I=document.getElementById("videoPlyerAnalysis"),b=document.getElementById("play1"),L=document.getElementById("play2"),h=document.getElementById("play3"),B=document.getElementById("play4"),k=document.getElementById("play5");function M(e,t){e.setAttribute("poster",g),e.addEventListener("pause",(function(){t.classList.remove("active","hiden"),t.classList.add("active"),e.removeAttribute("controls")})),e.addEventListener("play",(function(){t.classList.remove("active","hiden"),t.classList.add("hiden")})),t.addEventListener("click",(function(){e.play(),t.classList.remove("active","hiden"),t.classList.add("hiden"),e.setAttribute("controls","controls")}))}M(y,b),M(v,L),M(E,h),M(w,B),M(I,k);var H={block:"center",behavior:"smooth"},V=document.getElementById("headerLink1"),_=document.getElementById("headerLink2"),A=document.getElementById("headerLink3"),O=document.getElementById("headerLink4"),T=document.getElementById("headerLink5"),j=document.getElementById("section_ai"),P=document.getElementById("section_video-analysis"),R=document.getElementById("section_recognition"),x=document.getElementById("section_modeling"),S=document.getElementById("section_player-analysis");V.addEventListener("click",(function(){return j.scrollIntoView(H)})),_.addEventListener("click",(function(){return P.scrollIntoView(H)})),A.addEventListener("click",(function(){return R.scrollIntoView(H)})),O.addEventListener("click",(function(){return x.scrollIntoView(H)})),T.addEventListener("click",(function(){return S.scrollIntoView(H)}));var Y=null,C=document.getElementById("arrow"),q=window.scrollY+j.getBoundingClientRect().top;C.addEventListener("click",(function(){return j.scrollIntoView(H)}));var J=0,F=!1;window.addEventListener("scroll",(function(){J=window.scrollY,F||(window.requestAnimationFrame((function(){var e,t,n,o,c,r,i,d,l,u,s,a;e=J,t=document.getElementById("arrowImg"),n=document.getElementById("scroll"),o=document.getElementById("header"),c=document.getElementById("machinae"),r=window.scrollY+P.getBoundingClientRect().top,i=window.scrollY+R.getBoundingClientRect().top,d=window.scrollY+x.getBoundingClientRect().top,l=window.scrollY+S.getBoundingClientRect().top,u=window.scrollY+S.getBoundingClientRect().bottom,s=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),a=Math.floor(.1*s),e>=u-1.1*a||e>l?(t.classList.add("arrow_up"),n.innerHTML="up",Y=!0,C.addEventListener("click",(function(){return o.scrollIntoView(H)}))):e>=l-a&&!Y?C.addEventListener("click",(function(){return c.scrollIntoView(H)})):e>=d-a&&!Y?C.addEventListener("click",(function(){return S.scrollIntoView(H)})):e>=i-a&&!Y?C.addEventListener("click",(function(){return x.scrollIntoView(H)})):e>=r-a&&!Y?C.addEventListener("click",(function(){return R.scrollIntoView(H)})):e>=q-a&&!Y?C.addEventListener("click",(function(){return P.scrollIntoView(H)})):e<=q&&(C.addEventListener("click",(function(){return j.scrollIntoView(H)})),t.classList.remove("arrow_up"),n.innerHTML="scroll",Y=!1),F=!1})),F=!0)}))}});