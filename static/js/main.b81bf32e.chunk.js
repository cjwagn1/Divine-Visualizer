(this.webpackJsonpvisual=this.webpackJsonpvisual||[]).push([[0],[,function(e,n,t){},,,function(e,n,t){e.exports=t(12)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a,i=t(0),c=t.n(i),o=t(3),l=t.n(o),r=(t(9),t(10),t(1),function(){return c.a.createElement("div",{className:"center"},c.a.createElement("h1",{className:"font"},"Music Visualization"),c.a.createElement("div",null,c.a.createElement("button",{className:"button"},"Upload")))}),u=function(){return window.onload=function(){var e=document.getElementById("input"),n=document.getElementById("audio");e.onchange=function(){var e=this.files;n.src=URL.createObjectURL(e[0]),n.load(),n.play();var t=new AudioContext,a=t.createMediaElementSource(n),i=t.createAnalyser(),c=document.getElementById("canvas");c.width=window.innerWidth,c.height=window.innerHeight;var o=c.getContext("2d");a.connect(i),i.connect(t.destination),i.fftSize=1024;var l=i.frequencyBinCount;console.log(l);var r,u=new Uint8Array(l),s=c.width,d=c.height,m=s/l*2.5,f=0;n.play(),function e(){requestAnimationFrame(e),f=0,i.getByteFrequencyData(u),o.fillStyle="#1a1a1d",o.fillRect(0,0,s,d);for(var n=0;n<l;n++){var t=(r=u[n])+n/l*90,a=n/l*250;o.fillStyle="rgb("+t+","+a+",90)",o.fillRect(f,2*r,1*m/2,r),f+=m+1}}()}},a=c.a.createElement(r,null),c.a.createElement("div",null,a)},s=function(){return c.a.createElement("div",{className:"center"},c.a.createElement("div",null,c.a.createElement("input",{id:"input",type:"file",accept:"audio/*"}),c.a.createElement("canvas",{id:"canvas"}),c.a.createElement("audio",{id:"audio",controls:!0})))},d=(t(11),function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"wrap"},c.a.createElement(s,null),c.a.createElement(u,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.b81bf32e.chunk.js.map