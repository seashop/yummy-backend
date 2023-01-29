var J=Object.defineProperty,Q=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var k=(t,r,d)=>r in t?J(t,r,{enumerable:!0,configurable:!0,writable:!0,value:d}):t[r]=d,p=(t,r)=>{for(var d in r||(r={}))Y.call(r,d)&&k(t,d,r[d]);if(C)for(var d of C(r))ee.call(r,d)&&k(t,d,r[d]);return t},V=(t,r)=>Q(t,U(r));import{c as F,a as A,v as Z,s as M,ds as te,f as D,a6 as H,K as ne,n as h,k as u,bb as K,cC as X,dg as se,fD as ae,ay as ie,fE as W,aE as q}from"./index.71d27ec8.js";const{t:j}=F(),z={value:{type:Boolean,default:!1},isSlot:{type:Boolean,default:!1},text:{type:[String],default:j("component.verify.dragText")},successText:{type:[String],default:j("component.verify.successText")},height:{type:[Number,String],default:40},width:{type:[Number,String],default:220},circle:{type:Boolean,default:!1},wrapStyle:{type:Object,default:{}},contentStyle:{type:Object,default:{}},barStyle:{type:Object,default:{}},actionStyle:{type:Object,default:{}}},oe=V(p({},z),{src:{type:String},imgWidth:{type:Number,default:260},imgWrapStyle:{type:Object,default:{}},minDegree:{type:Number,default:90},maxDegree:{type:Number,default:270},diffDegree:{type:Number,default:20}});var G=A({name:"BaseDargVerify",props:z,emits:["success","update:value","change","start","move","end"],setup(t,{emit:r,slots:d,expose:P}){const n=Z({isMoving:!1,isPassing:!1,moveDistance:0,toLeft:!1,startTime:0,endTime:0}),s=M(null),w=M(null),_=M(null),T=M(null);te({el:document,name:"mouseup",listener:()=>{n.isMoving&&y()}});const O=D(()=>{const{height:e,actionStyle:i}=t,c=`${parseInt(e)}px`;return p({left:0,width:c,height:c},i)}),N=D(()=>{const{height:e,width:i,circle:c,wrapStyle:a}=t,l=parseInt(e),m=`${parseInt(i)}px`;return p({width:m,height:`${l}px`,lineHeight:`${l}px`,borderRadius:c?l/2+"px":0},a)}),$=D(()=>{const{height:e,circle:i,barStyle:c}=t,a=parseInt(e);return p({height:`${a}px`,borderRadius:i?a/2+"px 0 0 "+a/2+"px":0},c)}),I=D(()=>{const{height:e,width:i,contentStyle:c}=t,a=`${parseInt(e)}px`,l=`${parseInt(i)}px`;return p({height:a,width:l},c)});H(()=>n.isPassing,e=>{if(e){const{startTime:i,endTime:c}=n,a=(c-i)/1e3;r("success",{isPassing:e,time:a.toFixed(1)}),r("update:value",e),r("change",e)}}),ne(()=>{n.isPassing=!!t.value});function b(e){return e.pageX||e.touches[0].pageX}function R(e){if(n.isPassing)return;const i=u(T);!i||(r("start",e),n.moveDistance=b(e)-parseInt(i.style.left.replace("px",""),10),n.startTime=new Date().getTime(),n.isMoving=!0)}function o(e){const i=parseInt(e.style.width),{width:c}=t,a=parseInt(c);return{offset:a-i-6,widthNum:a,actionWidth:i}}function f(e){const{isMoving:i,moveDistance:c}=n;if(i){const a=u(T),l=u(w);if(!a||!l)return;const{offset:m,widthNum:S,actionWidth:E}=o(a),v=b(e)-c;r("move",{event:e,moveDistance:c,moveX:v}),v>0&&v<=m?(a.style.left=`${v}px`,l.style.width=`${v+E/2}px`):v>m&&(a.style.left=`${S-E}px`,l.style.width=`${S-E/2}px`,t.isSlot||x())}}function g(e){const{isMoving:i,isPassing:c,moveDistance:a}=n;if(i&&!c){r("end",e);const l=u(T),m=u(w);if(!l||!m)return;const S=b(e)-a,{offset:E,widthNum:v,actionWidth:B}=o(l);S<E?t.isSlot?setTimeout(()=>{if(!t.value)y();else{const L=u(_);L&&(L.style.width=`${parseInt(m.style.width)}px`)}},0):y():(l.style.left=`${v-B}px`,m.style.width=`${v-B/2}px`,x()),n.isMoving=!1}}function x(){if(t.isSlot){y();return}n.endTime=new Date().getTime(),n.isPassing=!0,n.isMoving=!1}function y(){n.isMoving=!1,n.isPassing=!1,n.moveDistance=0,n.toLeft=!1,n.startTime=0,n.endTime=0;const e=u(T),i=u(w),c=u(_);!e||!i||!c||(n.toLeft=!0,K(()=>{n.toLeft=!1,e.style.left="0",i.style.width="0"},300),c.style.width=u(I).width)}return P({resume:y}),()=>{const e=()=>{const a=["darg-verify-bar"];return n.toLeft&&a.push("to-left"),h("div",{class:a,ref:w,style:u($)},null)},i=()=>{const a=["darg-verify-content"],{isPassing:l}=n,{text:m,successText:S}=t;return l&&a.push("success"),h("div",{class:a,ref:_,style:u(I)},[X(d,"text",l)||(l?S:m)])},c=()=>{const a=["darg-verify-action"],{toLeft:l,isPassing:m}=n;return l&&a.push("to-left"),h("div",{class:a,onMousedown:R,onTouchstart:R,style:u(O),ref:T},[X(d,"actionIcon",m)||(m?h(se,{class:"darg-verify-action__icon"},null):h(ae,{class:"darg-verify-action__icon"},null))])};return h("div",{class:"darg-verify",ref:s,style:u(N),onMousemove:f,onTouchmove:f,onMouseleave:g,onMouseup:g,onTouchend:g},[e(),i(),c()])}}});var re=A({name:"ImgRotateDragVerify",inheritAttrs:!1,props:oe,emits:["success","change","update:value"],setup(t,{emit:r,attrs:d,expose:P}){const n=M(null),s=Z({showTip:!1,isPassing:!1,imgStyle:{},randomRotate:0,currentRotate:0,toOrigin:!1,startTime:0,endTime:0,draged:!1}),{t:w}=F();H(()=>s.isPassing,o=>{if(o){const{startTime:f,endTime:g}=s,x=(g-f)/1e3;r("success",{isPassing:o,time:x.toFixed(1)}),r("change",o),r("update:value",o)}});const _=D(()=>{const{imgWrapStyle:o,imgWidth:f}=t;return p({width:`${f}px`,height:`${f}px`},o)}),T=D(()=>{const{minDegree:o,maxDegree:f}=t;return o===f?Math.floor(1+Math.random()*1)/10+1:1});function O(){s.startTime=new Date().getTime()}function N(o){s.draged=!0;const{imgWidth:f,height:g,maxDegree:x}=t,{moveX:y}=o,e=Math.ceil(y/(f-parseInt(g))*x*u(T));s.currentRotate=e,s.imgStyle=W("transform",`rotateZ(${s.randomRotate-e}deg)`)}function $(){const{minDegree:o,maxDegree:f}=t,g=Math.floor(o+Math.random()*(f-o));s.randomRotate=g,s.imgStyle=W("transform",`rotateZ(${g}deg)`)}function I(){const{randomRotate:o,currentRotate:f}=s,{diffDegree:g}=t;Math.abs(o-f)>=(g||20)?(s.imgStyle=W("transform",`rotateZ(${o}deg)`),s.toOrigin=!0,K(()=>{s.toOrigin=!1,s.showTip=!0},300)):b(),s.showTip=!0}function b(){s.isPassing=!0,s.endTime=new Date().getTime()}function R(){s.showTip=!1;const o=u(n);!o||(s.isPassing=!1,o.resume(),$())}return P({resume:R}),()=>{const{src:o}=t,{toOrigin:f,isPassing:g,startTime:x,endTime:y}=s,e=[];f&&e.push("to-origin");const i=(y-x)/1e3;return h("div",{class:"ir-dv"},[h("div",{class:"ir-dv-img__wrap",style:u(_)},[h("img",{src:o,onLoad:$,width:parseInt(t.width),class:e,style:s.imgStyle,onClick:()=>{R()},alt:"verify"},null),s.showTip&&h("span",{class:["ir-dv-img__tip",s.isPassing?"success":"error"]},[s.isPassing?w("component.verify.time",{time:i.toFixed(1)}):w("component.verify.error")]),!s.showTip&&!s.draged&&h("span",{class:["ir-dv-img__tip","normal"]},[w("component.verify.redoTip")])]),h(G,ie({class:"ir-dv-drag__bar",onMove:N,onEnd:I,onStart:O,ref:n},p(p({},d),t),{value:g,isSlot:!0}),null)])}}});const fe=q(G),ue=q(re);export{fe as B,ue as R};
