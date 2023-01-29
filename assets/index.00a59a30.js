import{a as b,aF as Q,b as Z,f as L,aG as ee,av as G,ax as _,o as y,h as W,n as a,y as C,aB as te,F as ne,aA as ae,j as T,aC as oe,ay as M,az as re,q as se,v as ie,s as N,K as le,k as f,c9 as ce,z as X,dd as ue,de as me,fx as de,fy as ge}from"./index.71d27ec8.js";import{I as R}from"./index.e69e205a.js";import{P as fe}from"./index.edca75a1.js";import"./index.4664d36a.js";import"./index.ca9c94a7.js";import"./useSize.7f6a0415.js";import"./eagerComputed.bf418e4f.js";import"./onMountedOrActivated.c17cdee3.js";import"./useWindowSizeFn.2f380c6a.js";import"./useContentViewHeight.3e540372.js";import"./ArrowLeftOutlined.c7d64000.js";import"./index.7cb9b95f.js";import"./transButton.d7be3a5c.js";const pe=b({name:"ImagePreview",components:{Image:R,PreviewGroup:R.PreviewGroup},props:{functional:Q.bool,imageList:{type:Array}},setup(n){const{prefixCls:u}=Z("image-preview"),i=L(()=>{const{imageList:s}=n;return s?s.map(t=>ee(t)?{src:t,placeholder:!1}:t):[]});return{prefixCls:u,getImageList:i}}});function ve(n,u,i,s,t,h){const d=_("Image"),p=_("PreviewGroup");return y(),W("div",{class:se(n.prefixCls)},[a(p,null,{default:C(()=>[!n.imageList||n.$slots.default?te(n.$slots,"default",{key:0}):(y(!0),W(ne,{key:1},ae(n.getImageList,l=>(y(),T(d,oe(M({key:l.src},l)),re({_:2},[l.placeholder?{name:"placeholder",fn:C(()=>[a(d,M(l,{src:l.placeholder,preview:!1}),null,16,["src"])]),key:"0"}:void 0]),1040))),128))]),_:3})],2)}var _e=G(pe,[["render",ve]]),he="/yummy-backend/assets/resume.8f27866b.svg",Ie="/yummy-backend/assets/p-rotate.cb8bbfc3.svg",we="/yummy-backend/assets/scale.44abde22.svg",Le="/yummy-backend/assets/unscale.c552f416.svg",ye="/yummy-backend/assets/unrotate.ef6a2daf.svg",g;(function(n){n[n.LOADING=0]="LOADING",n[n.DONE=1]="DONE",n[n.FAIL=2]="FAIL"})(g||(g={}));const Ce={show:{type:Boolean,default:!1},imageList:{type:[Array],default:null},index:{type:Number,default:0},scaleStep:{type:Number},defaultWidth:{type:Number},maskClosable:{type:Boolean},rememberState:{type:Boolean}},r="img-preview";var $e=b({name:"ImagePreview",props:Ce,emits:["img-load","img-error"],setup(n,{expose:u,emit:i}){const s=new Map,t=ie({currentUrl:"",imgScale:1,imgRotate:0,imgTop:0,imgLeft:0,status:g.LOADING,currentIndex:0,moveX:0,moveY:0,show:n.show}),h=N(null),d=N(null);function p(){Y();const{index:e,imageList:o}=n;if(!o||!o.length)throw new Error("imageList is undefined");t.currentIndex=e,F(o[e])}function l(){t.imgScale=1,t.imgRotate=0,t.imgTop=0,t.imgLeft=0}function Y(){const e=f(h);!e||(e.onmousewheel=$,document.body.addEventListener("DOMMouseScroll",$),document.ondragstart=function(){return!1})}const I=L(()=>{var o;const e=(o=n==null?void 0:n.scaleStep)!=null?o:0;return(e!=null?e:0>0)?e/100:t.imgScale/10});function $(e){e=e||window.event,e.delta=e.wheelDelta||-e.detail,e.preventDefault(),e.delta>0&&w(I.value),e.delta<0&&w(-I.value)}function w(e){t.imgScale<=.2&&e<0||(t.imgScale+=e)}function k(e){t.imgRotate+=e}function U(){const e=f(d);!e||(e.onmousemove=null)}function F(e){t.status=g.LOADING;const o=new Image;o.src=e,o.onload=c=>{if(t.currentUrl!==e){const m=c.composedPath();if(n.rememberState){s.set(t.currentUrl,{scale:t.imgScale,top:t.imgTop,left:t.imgLeft,rotate:t.imgRotate});const v=s.get(e);v?(t.imgScale=v.scale,t.imgTop=v.top,t.imgRotate=v.rotate,t.imgLeft=v.left):(l(),n.defaultWidth&&(t.imgScale=n.defaultWidth/m[0].naturalWidth))}else n.defaultWidth&&(t.imgScale=n.defaultWidth/m[0].naturalWidth);m&&i("img-load",{index:t.currentIndex,dom:m[0],url:e})}t.currentUrl=e,t.status=g.DONE},o.onerror=c=>{const m=c.composedPath();m&&i("img-error",{index:t.currentIndex,dom:m[0],url:e}),t.status=g.FAIL}}function P(e){e&&e.stopPropagation(),D()}function D(){t.show=!1,document.body.removeEventListener("DOMMouseScroll",$),document.ondragstart=null}function A(){l()}u({resume:A,close:D,prev:x.bind(null,"left"),next:x.bind(null,"right"),setScale:e=>{e>0&&e<=10&&(t.imgScale=e)},setRotate:e=>{t.imgRotate=e}});function x(e){const{currentIndex:o}=t,{imageList:c}=n;e==="left"&&(t.currentIndex--,o<=0&&(t.currentIndex=c.length-1)),e==="right"&&(t.currentIndex++,o>=c.length-1&&(t.currentIndex=0)),F(c[t.currentIndex])}function z(e){e=e||window.event,t.moveX=e.clientX,t.moveY=e.clientY;const o=f(d);o&&(o.onmousemove=j)}function j(e){e=e||window.event,e.preventDefault();const o=e.clientX-t.moveX,c=e.clientY-t.moveY;t.imgLeft+=o,t.imgTop+=c,t.moveX=e.clientX,t.moveY=e.clientY}const V=L(()=>{const{imgScale:e,imgRotate:o,imgTop:c,imgLeft:m}=t;return{transform:`scale(${e}) rotate(${o}deg)`,marginTop:`${c}px`,marginLeft:`${m}px`,maxWidth:n.defaultWidth?"unset":"100%"}}),E=L(()=>{const{imageList:e}=n;return e.length>1});le(()=>{n.show&&p(),n.imageList&&l()});const q=e=>{n.maskClosable&&e.target&&e.target.classList.contains(`${r}-content`)&&P(e)},K=()=>a("div",{class:`${r}__close`,onClick:P},[a(ce,{class:`${r}__close-icon`},null)]),H=()=>{if(!f(E))return null;const{currentIndex:e}=t,{imageList:o}=n;return a("div",{class:`${r}__index`},[e+1,X(" / "),o.length])},J=()=>a("div",{class:`${r}__controller`},[a("div",{class:`${r}__controller-item`,onClick:()=>w(-I.value)},[a("img",{src:Le},null)]),a("div",{class:`${r}__controller-item`,onClick:()=>w(I.value)},[a("img",{src:we},null)]),a("div",{class:`${r}__controller-item`,onClick:A},[a("img",{src:he},null)]),a("div",{class:`${r}__controller-item`,onClick:()=>k(-90)},[a("img",{src:ye},null)]),a("div",{class:`${r}__controller-item`,onClick:()=>k(90)},[a("img",{src:Ie},null)])]),O=e=>f(E)?a("div",{class:[`${r}__arrow`,e],onClick:()=>x(e)},[e==="left"?a(ue,null,null):a(me,null,null)]):null;return()=>t.show&&a("div",{class:r,ref:h,onMouseup:U,onClick:q},[a("div",{class:`${r}-content`},[a("img",{style:f(V),class:[`${r}-image`,t.status===g.DONE?"":"hidden"],ref:d,src:t.currentUrl,onMousedown:z},null),K(),H(),J(),O("left"),O("right")])])}});let S=null;function xe(n){var s;if(!de)return;const u={},i=document.createElement("div");return Object.assign(u,{show:!0,index:0,scaleStep:100},n),S=a($e,u),ge(S,i),document.body.appendChild(i),(s=S.component)==null?void 0:s.exposed}const B=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"],Se=b({components:{PageWrapper:fe,ImagePreview:_e},setup(){function n(){xe({imageList:B,defaultWidth:700,rememberState:!0,onImgLoad:({index:i,url:s,dom:t})=>{i+1,`${s}`}})}return{imgList:B,openImg:n}}});function be(n,u,i,s,t,h){const d=_("ImagePreview"),p=_("a-button"),l=_("PageWrapper");return y(),T(l,{title:"\u56FE\u7247\u9884\u89C8\u793A\u4F8B"},{default:C(()=>[a(d,{imageList:n.imgList},null,8,["imageList"]),a(p,{onClick:n.openImg,type:"primary"},{default:C(()=>[X("\u65E0\u9884\u89C8\u56FE")]),_:1},8,["onClick"])]),_:1})}var Te=G(Se,[["render",be]]);export{Te as default};
