import{aM as f,v,aN as i,K as m,f as d,ap as g,ak as S,al as h,k}from"./index.c4bcccae.js";function x(n,u="value",c="change",o){const e=f(),s=e==null?void 0:e.emit,t=v({value:n[u]}),r=i(t),l=a=>{t.value=a};return m(()=>{t.value=n[u]}),[d({get(){return t.value},set(a){g(a,r.value)||(t.value=a,S(()=>{s==null||s(c,a,...h(k(o))||[])}))}}),l,r]}export{x as u};