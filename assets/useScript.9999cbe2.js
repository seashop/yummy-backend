import{s as r,M as i,c1 as f}from"./index.71d27ec8.js";function p(a){const s=r(!1),o=r(!1),t=r(!1);let e;const n=new Promise((c,u)=>{i(()=>{e=document.createElement("script"),e.type="text/javascript",e.onload=function(){s.value=!1,t.value=!0,o.value=!1,c("")},e.onerror=function(l){s.value=!1,t.value=!1,o.value=!0,u(l)},e.src=a.src,document.head.appendChild(e)})});return f(()=>{e&&e.remove()}),{isLoading:s,error:o,success:t,toPromise:()=>n}}export{p as u};
