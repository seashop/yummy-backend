import{P as W}from"./index.edca75a1.js";import{av as M,a as X,ax as Y,bR as A,o as L,j as D,y as S,w as q,h as z,z as F}from"./index.71d27ec8.js";import"./index.4664d36a.js";import"./index.ca9c94a7.js";import"./useSize.7f6a0415.js";import"./eagerComputed.bf418e4f.js";import"./onMountedOrActivated.c17cdee3.js";import"./useWindowSizeFn.2f380c6a.js";import"./useContentViewHeight.3e540372.js";import"./ArrowLeftOutlined.c7d64000.js";import"./index.7cb9b95f.js";import"./transButton.d7be3a5c.js";const l={event:"mousedown",transition:400},x={beforeMount:(e,t)=>{if(t.value===!1)return;const o=e.getAttribute("ripple-background");I(Object.keys(t.modifiers),l);const s=o||x.background,r=x.zIndex;e.addEventListener(l.event,d=>{H({event:d,el:e,background:s,zIndex:r})})},updated(e,t){var s,r;if(!t.value){(s=e==null?void 0:e.clearRipple)==null||s.call(e);return}const o=e.getAttribute("ripple-background");(r=e==null?void 0:e.setBackground)==null||r.call(e,o)}};function H({event:e,el:t,zIndex:o,background:s}){var R,E;const r=parseInt(getComputedStyle(t).borderWidth.replace("px","")),d=e.clientX||e.touches[0].clientX,f=e.clientY||e.touches[0].clientY,g=t.getBoundingClientRect(),{left:C,top:T}=g,{offsetWidth:b,offsetHeight:_}=t,{transition:B}=l,m=d-C,u=f-T,y=Math.max(m,b-m),$=Math.max(u,_-u),N=window.getComputedStyle(t),h=Math.sqrt(y*y+$*$),w=r>0?r:0,a=document.createElement("div"),n=document.createElement("div");a.className="ripple",Object.assign((R=a.style)!=null?R:{},{marginTop:"0px",marginLeft:"0px",width:"1px",height:"1px",transition:`all ${B}ms cubic-bezier(0.4, 0, 0.2, 1)`,borderRadius:"50%",pointerEvents:"none",position:"relative",zIndex:o!=null?o:"9999",backgroundColor:s!=null?s:"rgba(0, 0, 0, 0.12)"}),n.className="ripple-container",Object.assign((E=n.style)!=null?E:{},{position:"absolute",left:`${0-w}px`,top:`${0-w}px`,height:"0",width:"0",pointerEvents:"none",overflow:"hidden"});const v=t.style.position.length>0?t.style.position:getComputedStyle(t).position;v!=="relative"&&(t.style.position="relative"),n.appendChild(a),t.appendChild(n),Object.assign(a.style,{marginTop:`${u}px`,marginLeft:`${m}px`});const{borderTopLeftRadius:k,borderTopRightRadius:j,borderBottomLeftRadius:P,borderBottomRightRadius:O}=N;Object.assign(n.style,{width:`${b}px`,height:`${_}px`,direction:"ltr",borderTopLeftRadius:k,borderTopRightRadius:j,borderBottomLeftRadius:P,borderBottomRightRadius:O}),setTimeout(()=>{var c;const i=`${h*2}px`;Object.assign((c=a.style)!=null?c:{},{width:i,height:i,marginLeft:`${m-h}px`,marginTop:`${u-h}px`})},0);function p(){setTimeout(()=>{a.style.backgroundColor="rgba(0, 0, 0, 0)"},250),setTimeout(()=>{var i;(i=n==null?void 0:n.parentNode)==null||i.removeChild(n)},850),t.removeEventListener("mouseup",p,!1),t.removeEventListener("mouseleave",p,!1),t.removeEventListener("dragstart",p,!1),setTimeout(()=>{let i=!0;for(let c=0;c<t.childNodes.length;c++)t.childNodes[c].className==="ripple-container"&&(i=!1);i&&(t.style.position=v!=="static"?v:"")},l.transition+260)}e.type==="mousedown"?(t.addEventListener("mouseup",p,!1),t.addEventListener("mouseleave",p,!1),t.addEventListener("dragstart",p,!1)):p(),t.setBackground=i=>{!i||(a.style.backgroundColor=i)}}function I(e,t){e.forEach(o=>{isNaN(Number(o))?t.event=o:t.transition=o})}const V=X({components:{PageWrapper:W},directives:{Ripple:x}}),G={class:"demo-box"};function J(e,t,o,s,r,d){const f=Y("PageWrapper"),g=A("ripple");return L(),D(f,{title:"Ripple\u793A\u4F8B"},{default:S(()=>[q((L(),z("div",G,[F("content")])),[[g]])]),_:1})}var pt=M(V,[["render",J],["__scopeId","data-v-42c234a1"]]);export{pt as default};
