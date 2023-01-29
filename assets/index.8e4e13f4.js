var $=Object.defineProperty;var y=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var m=(t,a,e)=>a in t?$(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,p=(t,a)=>{for(var e in a||(a={}))E.call(a,e)&&m(t,e,a[e]);if(y)for(var e of y(a))T.call(a,e)&&m(t,e,a[e]);return t};import{a as w,s as g,eH as S,f as B,k as C,K as F,a6 as k,M as I,eI as M,cA as z,av as A,o as D,h as H,t as K,bo as P,aE as j}from"./index.71d27ec8.js";const q={startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator(t){return t>=0}},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},G=w({name:"CountTo",props:q,emits:["onStarted","onFinished"],setup(t,{emit:a}){const e=g(t.startVal),u=g(!1);let o=S(e);const d=B(()=>x(C(o)));F(()=>{e.value=t.startVal}),k([()=>t.startVal,()=>t.endVal],()=>{t.autoplay&&s()}),I(()=>{t.autoplay&&s()});function s(){c(),e.value=t.endVal}function h(){e.value=t.startVal,c()}function c(){o=S(e,p({disabled:u,duration:t.duration,onFinished:()=>a("onFinished"),onStarted:()=>a("onStarted")},t.useEasing?{transition:M[t.transition]}:{}))}function x(n){if(!n&&n!==0)return"";const{decimals:b,decimal:V,separator:i,suffix:v,prefix:N}=t;n=Number(n).toFixed(b),n+="";const l=n.split(".");let r=l[0];const _=l.length>1?V+l[1]:"",f=/(\d+)(\d{3})/;if(i&&!z(i))for(;f.test(r);)r=r.replace(f,"$1"+i+"$2");return N+r+_+v}return{value:d,start:s,reset:h}}});function J(t,a,e,u,o,d){return D(),H("span",{style:P({color:t.color})},K(t.value),5)}var L=A(G,[["render",J]]);const R=j(L);export{R as C};
