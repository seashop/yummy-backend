var me=Object.defineProperty,be=Object.defineProperties;var $e=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var He=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var te=(e,t,r)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,D=(e,t)=>{for(var r in t||(t={}))He.call(t,r)&&te(e,r,t[r]);if(ee)for(var r of ee(t))ye.call(t,r)&&te(e,r,t[r]);return e},ae=(e,t)=>be(e,$e(t));var ne=(e,t,r)=>new Promise((h,n)=>{var $=v=>{try{g(r.next(v))}catch(H){n(H)}},d=v=>{try{g(r.throw(v))}catch(H){n(H)}},g=v=>v.done?h(v.value):Promise.resolve(v.value).then($,d);g((r=r.apply(e,t)).next())});import{n as p,b1 as _e,at as Ce,a as J,H as Pe,s as O,cv as Fe,f as P,O as ke,R as we,S as G,cj as Be,E as S,ai as Re,cw as Se,cx as Te,av as ce,b as ue,ba as Oe,o as z,h as X,i as Z,aB as T,q as N,bo as de,a6 as fe,ak as U,k as w,cy as Ae,cz as Ie,aG as Ee,cA as xe,aF as _,a3 as je,ao as re,ax as oe,j as ie,az as ze,aA as Ne,y as W,aC as De,aD as We,F as Le,z as Me,t as Ve,ay as qe,l as le,aE as ge}from"./index.c4bcccae.js";import{B as Ge}from"./index.32df30ea.js";import{A as Ue}from"./index.a7bd6f74.js";import{o as Xe}from"./onMountedOrActivated.36541739.js";import{u as Ze}from"./useWindowSizeFn.4ec568b8.js";import{a as Je}from"./useContentViewHeight.4714da75.js";import{A as Qe}from"./ArrowLeftOutlined.f8f3dc9e.js";import"./index.2f012cb3.js";import{T as Ye}from"./transButton.80503396.js";var Ke={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},et=Ke;function se(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},h=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(h=h.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),h.forEach(function(n){tt(e,n,r[n])})}return e}function tt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Q=function(t,r){var h=se({},t,r.attrs);return p(_e,se({},h,{icon:et}),null)};Q.displayName="ArrowRightOutlined";Q.inheritAttrs=!1;var at=Q,nt=function(){return{backIcon:S.any,prefixCls:String,title:S.any,subTitle:S.any,breadcrumb:S.object,tags:S.any,footer:S.any,extra:S.any,avatar:S.object,ghost:{type:Boolean,default:void 0},onBack:Function}},rt=J({compatConfig:{MODE:3},name:"APageHeader",props:nt(),slots:["backIcon","avatar","breadcrumb","title","subTitle","tags","extra","footer"],setup:function(t,r){var h=r.emit,n=r.slots,$=Pe("page-header",t),d=$.prefixCls,g=$.direction,v=$.pageHeader,H=O(!1),E=Fe(),F=function(a){var o=a.width;E.value||(H.value=o<768)},B=P(function(){var l,a,o;return(l=(a=t.ghost)!==null&&a!==void 0?a:(o=v.value)===null||o===void 0?void 0:o.ghost)!==null&&l!==void 0?l:!0}),R=function(){var a,o,u;return(a=(o=t.backIcon)!==null&&o!==void 0?o:(u=n.backIcon)===null||u===void 0?void 0:u.call(n))!==null&&a!==void 0?a:g.value==="rtl"?p(at,null,null):p(Qe,null,null)},f=function(a){return!a||!t.onBack?null:p(Te,{componentName:"PageHeader",children:function(u){var i=u.back;return p("div",{class:"".concat(d.value,"-back")},[p(Ye,{onClick:function(c){h("back",c)},class:"".concat(d.value,"-back-button"),"aria-label":i},{default:function(){return[a]}})])}},null)},k=function(){var a;return t.breadcrumb?p(Ge,t.breadcrumb,null):(a=n.breadcrumb)===null||a===void 0?void 0:a.call(n)},y=function(){var a,o,u,i,s,c,C,A,L,M=t.avatar,x=(a=t.title)!==null&&a!==void 0?a:(o=n.title)===null||o===void 0?void 0:o.call(n),j=(u=t.subTitle)!==null&&u!==void 0?u:(i=n.subTitle)===null||i===void 0?void 0:i.call(n),V=(s=t.tags)!==null&&s!==void 0?s:(c=n.tags)===null||c===void 0?void 0:c.call(n),q=(C=t.extra)!==null&&C!==void 0?C:(A=n.extra)===null||A===void 0?void 0:A.call(n),I="".concat(d.value,"-heading"),Y=x||j||V||q;if(!Y)return null;var pe=R(),K=f(pe),he=K||M||Y;return p("div",{class:I},[he&&p("div",{class:"".concat(I,"-left")},[K,M?p(Ue,M,null):(L=n.avatar)===null||L===void 0?void 0:L.call(n),x&&p("span",{class:"".concat(I,"-title"),title:typeof x=="string"?x:void 0},[x]),j&&p("span",{class:"".concat(I,"-sub-title"),title:typeof j=="string"?j:void 0},[j]),V&&p("span",{class:"".concat(I,"-tags")},[V])]),q&&p("span",{class:"".concat(I,"-extra")},[q])])},m=function(){var a,o,u=(a=t.footer)!==null&&a!==void 0?a:Re((o=n.footer)===null||o===void 0?void 0:o.call(n));return Se(u)?null:p("div",{class:"".concat(d.value,"-footer")},[u])},b=function(a){return p("div",{class:"".concat(d.value,"-content")},[a])};return function(){var l,a,o,u=((l=t.breadcrumb)===null||l===void 0?void 0:l.routes)||n.breadcrumb,i=t.footer||n.footer,s=ke((a=n.default)===null||a===void 0?void 0:a.call(n)),c=we(d.value,(o={"has-breadcrumb":u,"has-footer":i},G(o,"".concat(d.value,"-ghost"),B.value),G(o,"".concat(d.value,"-rtl"),g.value==="rtl"),G(o,"".concat(d.value,"-compact"),H.value),o));return p(Be,{onResize:F},{default:function(){return[p("div",{class:c},[k(),y(),s.length?b(s):null,m()])]}})}}}),ot=Ce(rt);const it=J({name:"PageFooter",inheritAttrs:!1,setup(){const{prefixCls:e}=ue("page-footer"),{getCalcContentWidth:t}=Oe();return{prefixCls:e,getCalcContentWidth:t}}});function lt(e,t,r,h,n,$){return z(),X("div",{class:N(e.prefixCls),style:de({width:e.getCalcContentWidth})},[Z("div",{class:N(`${e.prefixCls}__left`)},[T(e.$slots,"left",{},void 0,!0)],2),T(e.$slots,"default",{},void 0,!0),Z("div",{class:N(`${e.prefixCls}__right`)},[T(e.$slots,"right",{},void 0,!0)],2)],6)}var ve=ce(it,[["render",lt],["__scopeId","data-v-2c113217"]]);function st(e,t,r,h,n=0,$=O(0)){const d=O(null),{footerHeightRef:g}=Je();let v={useLayoutFooter:!0};const H=f=>{v=f};function E(){U(()=>{R()})}function F(f,k="all"){var l,a,o,u;function y(i){return Number(i.replace(/[^\d]/g,""))}let m=0;const b="0px";if(f){const i=getComputedStyle(f),s=y((l=i==null?void 0:i.marginTop)!=null?l:b),c=y((a=i==null?void 0:i.marginBottom)!=null?a:b),C=y((o=i==null?void 0:i.paddingTop)!=null?o:b),A=y((u=i==null?void 0:i.paddingBottom)!=null?u:b);k==="all"?(m+=s,m+=c,m+=C,m+=A):k==="top"?(m+=s,m+=C):(m+=c,m+=A)}return m}function B(f){return f==null?null:f instanceof HTMLDivElement?f:f.$el}function R(){return ne(this,null,function*(){var u;if(!e.value)return;yield U();const f=B(w(t));if(!f)return;const{bottomIncludeBody:k}=Ae(f);let y=0;r.forEach(i=>{var s,c;y+=(c=(s=B(w(i)))==null?void 0:s.offsetHeight)!=null?c:0});let m=(u=F(f))!=null?u:0;h.forEach(i=>{m+=F(B(w(i)))});let b=0;function l(i,s){if(i&&s){const c=i.parentElement;c&&(Ee(s)?c.classList.contains(s)?b+=F(c,"bottom"):(b+=F(c,"bottom"),l(c,s)):xe(s)&&s>0&&(b+=F(c,"bottom"),l(c,--s)))}}Ie(n)?l(f,w(n)):l(f,n);let a=k-w(g)-w($)-y-m-b;const o=()=>{var i;(i=v.elements)==null||i.forEach(s=>{var c,C;a+=(C=(c=B(w(s)))==null?void 0:c.offsetHeight)!=null?C:0})};v.useLayoutFooter&&w(g)>0,o(),d.value=a})}return Xe(()=>{U(()=>{R()})}),Ze(()=>{R()},50,{immediate:!0}),fe(()=>[g.value],()=>{R()},{flush:"post",immediate:!0}),{redoHeight:E,setCompensation:H,contentHeight:d}}const ct=J({name:"PageWrapper",components:{PageFooter:ve,PageHeader:ot},inheritAttrs:!1,props:{title:_.string,dense:_.bool,ghost:_.bool,content:_.string,contentStyle:{type:Object},contentBackground:_.bool,contentFullHeight:_.bool,contentClass:_.string,fixedHeight:_.bool,upwardSpace:_.oneOfType([_.number,_.string]).def(0)},setup(e,{slots:t,attrs:r}){const h=O(null),n=O(null),$=O(null),d=O(null),{prefixCls:g}=ue("page-wrapper");je(ft,P(()=>e.fixedHeight));const v=P(()=>e.contentFullHeight),H=P(()=>e.upwardSpace),{redoHeight:E,setCompensation:F,contentHeight:B}=st(v,h,[n,d],[$],H);F({useLayoutFooter:!0,elements:[d]});const R=P(()=>{var l;return[g,{[`${g}--dense`]:e.dense},(l=r.class)!=null?l:{}]}),f=P(()=>e.content||(t==null?void 0:t.headerContent)||e.title||y.value.length),k=P(()=>(t==null?void 0:t.leftFooter)||(t==null?void 0:t.rightFooter)),y=P(()=>Object.keys(re(t,"default","leftFooter","rightFooter","headerContent"))),m=P(()=>{const{contentFullHeight:l,contentStyle:a,fixedHeight:o}=e;if(!l)return D({},a);const u=`${w(B)}px`;return D(ae(D({},a),{minHeight:u}),o?{height:u}:{})}),b=P(()=>{const{contentBackground:l,contentClass:a}=e;return[`${g}-content`,a,{[`${g}-content-bg`]:l}]});return fe(()=>[k.value],()=>{E()},{flush:"post",immediate:!0}),{getContentStyle:m,wrapperRef:h,headerRef:n,contentRef:$,footerRef:d,getClass:R,getHeaderSlots:y,prefixCls:g,getShowHeader:f,getShowFooter:k,omit:re,getContentClass:b}}});function ut(e,t,r,h,n,$){const d=oe("PageHeader"),g=oe("PageFooter");return z(),X("div",{class:N(e.getClass),ref:"wrapperRef"},[e.getShowHeader?(z(),ie(d,qe({key:0,ghost:e.ghost,title:e.title},e.omit(e.$attrs,"class"),{ref:"headerRef"}),ze({default:W(()=>[e.content?(z(),X(Le,{key:0},[Me(Ve(e.content),1)],64)):T(e.$slots,"headerContent",{key:1})]),_:2},[Ne(e.getHeaderSlots,v=>({name:v,fn:W(H=>[T(e.$slots,v,De(We(H||{})))])}))]),1040,["ghost","title"])):le("",!0),Z("div",{class:N(["overflow-hidden",e.getContentClass]),style:de(e.getContentStyle),ref:"contentRef"},[T(e.$slots,"default")],6),e.getShowFooter?(z(),ie(g,{key:1,ref:"footerRef"},{left:W(()=>[T(e.$slots,"leftFooter")]),right:W(()=>[T(e.$slots,"rightFooter")]),_:3},512)):le("",!0)],2)}var dt=ce(ct,[["render",ut]]);ge(ve);const Ct=ge(dt),ft="PageWrapperFixedHeight";export{Ct as P,ft as a};