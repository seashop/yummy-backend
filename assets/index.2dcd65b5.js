import{a as h,aF as v,s as a,b as y,f as x,o as H,h as w,n as S,y as R,i as b,q as f,k as e,bo as u,b3 as k,av as z}from"./index.c4bcccae.js";import{u as C}from"./useWindowSizeFn.4ec568b8.js";import{a as B}from"./useContentViewHeight.4714da75.js";const F=["src"],L=h({__name:"index",props:{frameSrc:v.string.def("")},setup(m){const n=a(!0),p=a(50),i=a(window.innerHeight),o=a(),{headerHeightRef:d}=B(),{prefixCls:r}=y("iframe-page");C(l,150,{immediate:!0});const c=x(()=>({height:`${e(i)}px`}));function l(){const s=e(o);if(!s)return;const t=d.value;p.value=t,i.value=window.innerHeight-t;const g=document.documentElement.clientHeight-t;s.style.height=`${g}px`}function _(){n.value=!1,l()}return(s,t)=>(H(),w("div",{class:f(e(r)),style:u(e(c))},[S(e(k),{spinning:n.value,size:"large",style:u(e(c))},{default:R(()=>[b("iframe",{src:m.frameSrc,class:f(`${e(r)}__main`),ref_key:"frameRef",ref:o,onLoad:_},null,42,F)]),_:1},8,["spinning","style"])],6))}});var V=z(L,[["__scopeId","data-v-179381bf"]]);export{V as default};