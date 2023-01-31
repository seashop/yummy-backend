var de=Object.defineProperty,fe=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var K=(e,s,o)=>s in e?de(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,D=(e,s)=>{for(var o in s||(s={}))we.call(s,o)&&K(e,o,s[o]);if(G)for(var o of G(s))he.call(s,o)&&K(e,o,s[o]);return e},L=(e,s)=>fe(e,ge(s));var U=(e,s,o)=>new Promise((c,l)=>{var p=i=>{try{r(o.next(i))}catch(u){l(u)}},t=i=>{try{r(o.throw(i))}catch(u){l(u)}},r=i=>i.done?c(i.value):Promise.resolve(i.value).then(p,t);r((o=o.apply(e,s)).next())});import{c as X,a as j,b as E,f as w,av as z,ax as C,o as f,h as B,F as ye,aB as g,j as S,y as h,z as R,t as T,ay as F,l as P,q as k,bo as x,dr as me,aF as V,i as Y,n as A,bG as De,s as v,cB as Ce,dZ as Z,k as a,al as b,cA as ve,a6 as J,ak as ee,aM as O,aw as te,bR as ke,az as Q,w as $e,aA as be,aC as Be,aD as Pe,v as oe,ap as Se,K as Te,au as se,cF as Fe,dY as re,aE as Oe}from"./index.c4bcccae.js";import{D as _e}from"./index.bc252866.js";import{A as He}from"./ArrowLeftOutlined.f8f3dc9e.js";const{t:W}=X(),ne={confirmLoading:{type:Boolean},showCancelBtn:{type:Boolean,default:!0},cancelButtonProps:Object,cancelText:{type:String,default:W("common.cancelText")},showOkBtn:{type:Boolean,default:!0},okButtonProps:Object,okText:{type:String,default:W("common.okText")},okType:{type:String,default:"primary"},showFooter:{type:Boolean},footerHeight:{type:[String,Number],default:60}},Le=D({isDetail:{type:Boolean},title:{type:String,default:""},loadingText:{type:String},showDetailBack:{type:Boolean,default:!0},visible:{type:Boolean},loading:{type:Boolean},maskClosable:{type:Boolean,default:!0},getContainer:{type:[Object,String]},closeFunc:{type:[Function,Object],default:null},destroyOnClose:{type:Boolean}},ne);const Ve=j({name:"BasicDrawerFooter",props:L(D({},ne),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:s}){const{prefixCls:o}=E("basic-drawer-footer"),c=w(()=>{const t=`${e.height}`;return{height:t,lineHeight:`calc(${t} - 1px)`}});function l(){s("ok")}function p(){s("close")}return{handleOk:l,prefixCls:o,handleClose:p,getStyle:c}}});function Re(e,s,o,c,l,p){const t=C("a-button");return e.showFooter||e.$slots.footer?(f(),B("div",{key:0,class:k(e.prefixCls),style:x(e.getStyle)},[e.$slots.footer?g(e.$slots,"footer",{key:1}):(f(),B(ye,{key:0},[g(e.$slots,"insertFooter"),e.showCancelBtn?(f(),S(t,F({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:h(()=>[R(T(e.cancelText),1)]),_:1},16,["onClick"])):P("",!0),g(e.$slots,"centerFooter"),e.showOkBtn?(f(),S(t,F({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:h(()=>[R(T(e.okText),1)]),_:1},16,["type","onClick","loading"])):P("",!0),g(e.$slots,"appendFooter")],64))],6)):P("",!0)}var Ae=z(Ve,[["render",Re]]);const Ne=j({name:"BasicDrawerHeader",components:{BasicTitle:me,ArrowLeftOutlined:He},props:{isDetail:V.bool,showDetailBack:V.bool,title:V.string},emits:["close"],setup(e,{emit:s}){const{prefixCls:o}=E("basic-drawer-header");function c(){s("close")}return{prefixCls:o,handleClose:c}}}),je={key:1};function Ee(e,s,o,c,l,p){const t=C("BasicTitle"),r=C("ArrowLeftOutlined");return e.isDetail?(f(),B("div",{key:1,class:k([e.prefixCls,`${e.prefixCls}--detail`])},[Y("span",{class:k(`${e.prefixCls}__twrap`)},[e.showDetailBack?(f(),B("span",{key:0,onClick:s[0]||(s[0]=(...i)=>e.handleClose&&e.handleClose(...i))},[A(r,{class:k(`${e.prefixCls}__back`)},null,8,["class"])])):P("",!0),e.title?(f(),B("span",je,T(e.title),1)):P("",!0)],2),Y("span",{class:k(`${e.prefixCls}__toolbar`)},[g(e.$slots,"titleToolbar")],2)],2)):(f(),S(t,{key:0,class:k(e.prefixCls)},{default:h(()=>[g(e.$slots,"title"),R(" "+T(e.$slots.title?"":e.title),1)]),_:3},8,["class"]))}var ze=z(Ne,[["render",Ee]]);const Me=j({components:{Drawer:_e,ScrollContainer:De,DrawerFooter:Ae,DrawerHeader:ze},inheritAttrs:!1,props:Le,emits:["visible-change","ok","close","register"],setup(e,{emit:s}){const o=v(!1),c=Ce(),l=v(null),{t:p}=X(),{prefixVar:t,prefixCls:r}=E("basic-drawer"),i={setDrawerProps:ce,emitVisible:void 0},u=O();u&&s("register",i,u.uid);const m=w(()=>Z(b(e),a(l))),y=w(()=>{const n=L(D(D({placement:"right"},a(c)),a(m)),{visible:a(o)});n.title=void 0;const{isDetail:d,width:H,wrapClassName:q,getContainer:pe}=n;if(d){H||(n.width="100%");const I=`${r}__detail`;n.class=q?`${q} ${I}`:I,pe||(n.getContainer=`.${t}-layout-content`)}return n}),_=w(()=>D(D({},c),a(y))),M=w(()=>{const{footerHeight:n,showFooter:d}=a(y);return d&&n?ve(n)?`${n}px`:`${n.replace("px","")}px`:"0px"}),ae=w(()=>{const n=a(M);return{position:"relative",height:`calc(100% - ${n})`}}),le=w(()=>{var n;return!!((n=a(y))!=null&&n.loading)});J(()=>e.visible,(n,d)=>{n!==d&&(o.value=n)},{deep:!0}),J(()=>o.value,n=>{ee(()=>{var d;s("visible-change",n),u&&((d=i.emitVisible)==null||d.call(i,n,u.uid))})});function ie(n){return U(this,null,function*(){const{closeFunc:d}=a(y);if(s("close",n),d&&te(d)){const H=yield d();o.value=!H;return}o.value=!1})}function ce(n){l.value=Z(a(l)||{},n),Reflect.has(n,"visible")&&(o.value=!!n.visible)}function ue(){s("ok")}return{onClose:ie,t:p,prefixCls:r,getMergeProps:m,getScrollContentStyle:ae,getProps:y,getLoading:le,getBindValues:_,getFooterHeight:M,handleOk:ue}}});function qe(e,s,o,c,l,p){const t=C("DrawerHeader"),r=C("ScrollContainer"),i=C("DrawerFooter"),u=C("Drawer"),m=ke("loading");return f(),S(u,F({class:e.prefixCls,onClose:e.onClose},e.getBindValues),Q({default:h(()=>[$e((f(),S(r,{style:x(e.getScrollContentStyle),"loading-tip":e.loadingText||e.t("common.loadingText")},{default:h(()=>[g(e.$slots,"default")]),_:3},8,["style","loading-tip"])),[[m,e.getLoading]]),A(i,F(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),Q({_:2},[be(Object.keys(e.$slots),y=>({name:y,fn:h(_=>[g(e.$slots,y,Be(Pe(_||{})))])}))]),1040,["onClose","onOk","height"])]),_:2},[e.$slots.title?{name:"title",fn:h(()=>[g(e.$slots,"title")]),key:"1"}:{name:"title",fn:h(()=>[A(t,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:h(()=>[g(e.$slots,"titleToolbar")]),_:3},8,["title","isDetail","showDetailBack","onClose"])]),key:"0"}]),1040,["class","onClose"])}var Ie=z(Me,[["render",qe]]);const $=oe({}),N=oe({});function Ze(){if(!O())throw new Error("useDrawer() can only be used inside setup() or functional components!");const e=v(null),s=v(!1),o=v("");function c(t,r){se(()=>{e.value=null,s.value=null,$[a(o)]=null}),!(a(s)&&Fe()&&t===a(e))&&(o.value=r,e.value=t,s.value=!0,t.emitVisible=(i,u)=>{N[u]=i})}const l=()=>{const t=a(e);return t||re("useDrawer instance is undefined!"),t},p={setDrawerProps:t=>{var r;(r=l())==null||r.setDrawerProps(t)},getVisible:w(()=>N[~~a(o)]),openDrawer:(t=!0,r,i=!0)=>{var m;if((m=l())==null||m.setDrawerProps({visible:t}),!r)return;if(i){$[a(o)]=null,$[a(o)]=b(r);return}Se(b($[a(o)]),b(r))||($[a(o)]=b(r))},closeDrawer:()=>{var t;(t=l())==null||t.setDrawerProps({visible:!1})}};return[c,p]}const Je=e=>{const s=v(null),o=O(),c=v("");if(!O())throw new Error("useDrawerInner() can only be used inside setup() or functional components!");const l=()=>{const t=a(s);if(!t){re("useDrawerInner instance is undefined!");return}return t},p=(t,r)=>{se(()=>{s.value=null}),c.value=r,s.value=t,o==null||o.emit("register",t,r)};return Te(()=>{const t=$[a(c)];!t||!e||!te(e)||ee(()=>{e(t)})}),[p,{changeLoading:(t=!0)=>{var r;(r=l())==null||r.setDrawerProps({loading:t})},changeOkLoading:(t=!0)=>{var r;(r=l())==null||r.setDrawerProps({confirmLoading:t})},getVisible:w(()=>N[~~a(c)]),closeDrawer:()=>{var t;(t=l())==null||t.setDrawerProps({visible:!1})},setDrawerProps:t=>{var r;(r=l())==null||r.setDrawerProps(t)}}]},Qe=Oe(Ie);export{Qe as B,Je as a,Ze as u};