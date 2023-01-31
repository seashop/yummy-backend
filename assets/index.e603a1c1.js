import{e8 as Qe,e9 as qe,s as O,v as fe,_ as l,M as be,ce as Le,am as Ee,S as A,a3 as Je,J as Ke,f as c,a as ue,W as Oe,cp as Ve,a5 as le,a6 as q,K as et,e6 as tt,n as u,F as Ge,ea as rt,R as re,cQ as te,c1 as Ae,$ as nt,eb as at,c4 as Ie,E as it,Q as ot,b1 as de,c9 as lt,dd as ut,de as st,H as Te,d as vt,dz as je,ec as ct}from"./index.c4bcccae.js";var ft="[object Number]";function dt(r){return typeof r=="number"||Qe(r)&&qe(r)==ft}function mt(){var r=document.documentElement.clientWidth,e=window.innerHeight||document.documentElement.clientHeight;return{width:r,height:e}}function Ue(r){var e=r.getBoundingClientRect(),t=document.documentElement;return{left:e.left+(window.pageXOffset||t.scrollLeft)-(t.clientLeft||document.body.clientLeft||0),top:e.top+(window.pageYOffset||t.scrollTop)-(t.clientTop||document.body.clientTop||0)}}function gt(r){var e=O(null),t=fe(l({},r)),n=O([]),a=function(p){e.value===null&&(n.value=[],e.value=Le(function(){var m;n.value.forEach(function(j){m=l(l({},m),j)}),Ee(t,m),e.value=null})),n.value.push(p)};return be(function(){e.value&&Le.cancel(e.value)}),[t,a]}function ke(r,e,t,n){var a=e+t,o=(t-n)/2;if(t>n){if(e>0)return A({},r,o);if(e<0&&a<n)return A({},r,-o)}else if(e<0||a>n)return A({},r,e<0?o:-o);return{}}function pt(r,e,t,n){var a=mt(),o=a.width,p=a.height,m=null;return r<=o&&e<=p?m={x:0,y:0}:(r>o||e>p)&&(m=l(l({},ke("x",t,r,o)),ke("y",n,e,p))),m}var Ne=Symbol("previewGroupContext"),ye={provide:function(e){Je(Ne,e)},inject:function(){return Ke(Ne,{isPreviewGroup:O(!1),previewUrls:c(function(){return new Map}),setPreviewUrls:function(){},current:O(null),setCurrent:function(){},setShowPreview:function(){},setMousePosition:function(){},registerImage:null,rootClassName:""})}},wt=ue({compatConfig:{MODE:3},name:"PreviewGroup",inheritAttrs:!1,props:{previewPrefixCls:String,preview:{type:[Boolean,Object],default:!0},icons:{type:Object,default:function(){return{}}}},setup:function(e,t){var n=t.slots,a=c(function(){var f={visible:void 0,onVisibleChange:function(){},getContainer:void 0,current:0};return Oe(e.preview)==="object"?We(e.preview,f):f}),o=fe(new Map),p=O(),m=c(function(){return a.value.visible}),j=c(function(){return a.value.getContainer}),T=function(s,M){var w,b;(w=(b=a.value).onVisibleChange)===null||w===void 0||w.call(b,s,M)},C=Ve(!!m.value,{value:m,onChange:T}),S=le(C,2),$=S[0],g=S[1],R=O(null),W=c(function(){return m.value!==void 0}),U=c(function(){return Array.from(o.keys())}),x=c(function(){return U.value[a.value.current]}),P=c(function(){return new Map(Array.from(o).filter(function(f){var s=le(f,2),M=s[1].canPreview;return!!M}).map(function(f){var s=le(f,2),M=s[0],w=s[1].url;return[M,w]}))}),Z=function(s,M){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;o.set(s,{url:M,canPreview:w})},L=function(s){p.value=s},y=function(s){R.value=s},I=function(s,M){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,b=function(){o.delete(s)};return o.set(s,{url:M,canPreview:w}),b},H=function(s){s==null||s.stopPropagation(),g(!1),y(null)};return q(x,function(f){L(f)},{immediate:!0,flush:"post"}),et(function(){$.value&&W.value&&L(x.value)},{flush:"post"}),ye.provide({isPreviewGroup:O(!0),previewUrls:P,setPreviewUrls:Z,current:p,setCurrent:L,setShowPreview:g,setMousePosition:y,registerImage:I}),function(){var f=Ee({},(tt(a.value),a.value));return u(Ge,null,[n.default&&n.default(),u(He,l(l({},f),{},{"ria-hidden":!$.value,visible:$.value,prefixCls:e.previewPrefixCls,onClose:H,mousePosition:R.value,src:P.value.get(p.value),icons:e.icons,getContainer:j.value}),null)])}}}),Ze=wt,X={x:0,y:0},ht=l(l({},rt()),{},{src:String,alt:String,rootClassName:String,icons:{type:Object,default:function(){return{}}}}),Ct=ue({compatConfig:{MODE:3},name:"Preview",inheritAttrs:!1,props:ht,emits:["close","afterClose"],setup:function(e,t){var n=t.emit,a=t.attrs,o=fe(e.icons),p=o.rotateLeft,m=o.rotateRight,j=o.zoomIn,T=o.zoomOut,C=o.close,S=o.left,$=o.right,g=O(1),R=O(0),W=gt(X),U=le(W,2),x=U[0],P=U[1],Z=function(){return n("close")},L=O(),y=fe({originX:0,originY:0,deltaX:0,deltaY:0}),I=O(!1),H=ye.inject(),f=H.previewUrls,s=H.current,M=H.isPreviewGroup,w=H.setCurrent,b=c(function(){return f.value.size}),V=c(function(){return Array.from(f.value.keys())}),k=c(function(){return V.value.indexOf(s.value)}),me=c(function(){return M.value?f.value.get(s.value):e.src}),ne=c(function(){return M.value&&b.value>1}),G=O({wheelDirection:0}),J=function(){g.value=1,R.value=0,P(X),n("afterClose")},ae=function(){g.value++,P(X)},d=function(){g.value>1&&g.value--,P(X)},h=function(){R.value+=90},z=function(){R.value-=90},D=function(i){i.preventDefault(),i.stopPropagation(),k.value>0&&w(V.value[k.value-1])},_=function(i){i.preventDefault(),i.stopPropagation(),k.value<b.value-1&&w(V.value[k.value+1])},ge=re(A({},"".concat(e.prefixCls,"-moving"),I.value)),se="".concat(e.prefixCls,"-operations-operation"),pe="".concat(e.prefixCls,"-operations-icon"),ve=[{icon:C,onClick:Z,type:"close"},{icon:j,onClick:ae,type:"zoomIn"},{icon:T,onClick:d,type:"zoomOut",disabled:c(function(){return g.value===1})},{icon:m,onClick:h,type:"rotateRight"},{icon:p,onClick:z,type:"rotateLeft"}],ce=function(){if(e.visible&&I.value){var i=L.value.offsetWidth*g.value,E=L.value.offsetHeight*g.value,Y=Ue(L.value),N=Y.left,B=Y.top,F=R.value%180!==0;I.value=!1;var K=pt(F?E:i,F?i:E,N,B);K&&P(l({},K))}},we=function(i){i.button===0&&(i.preventDefault(),i.stopPropagation(),y.deltaX=i.pageX-x.x,y.deltaY=i.pageY-x.y,y.originX=x.x,y.originY=x.y,I.value=!0)},ie=function(i){e.visible&&I.value&&P({x:i.pageX-y.deltaX,y:i.pageY-y.deltaY})},he=function(i){if(!!e.visible){i.preventDefault();var E=i.deltaY;G.value={wheelDirection:E}}},Ce=function(i){!e.visible||!ne.value||(i.preventDefault(),i.keyCode===Ie.LEFT?k.value>0&&w(V.value[k.value-1]):i.keyCode===Ie.RIGHT&&k.value<b.value-1&&w(V.value[k.value+1]))},Pe=function(){e.visible&&(g.value!==1&&(g.value=1),(x.x!==X.x||x.y!==X.y)&&P(X))},oe=function(){};return be(function(){q([function(){return e.visible},I],function(){oe();var v,i,E=te(window,"mouseup",ce,!1),Y=te(window,"mousemove",ie,!1),N=te(window,"wheel",he,{passive:!1}),B=te(window,"keydown",Ce,!1);try{window.top!==window.self&&(v=te(window.top,"mouseup",ce,!1),i=te(window.top,"mousemove",ie,!1))}catch(F){}oe=function(){E.remove(),Y.remove(),N.remove(),B.remove(),v&&v.remove(),i&&i.remove()}},{flush:"post",immediate:!0}),q([G],function(){var v=G.value.wheelDirection;v>0?d():v<0&&ae()})}),Ae(function(){oe()}),function(){var v=e.visible,i=e.prefixCls,E=e.rootClassName;return u(at,l(l({},a),{},{transitionName:"zoom",maskTransitionName:"fade",closable:!1,keyboard:!0,prefixCls:i,onClose:Z,afterClose:J,visible:v,wrapClassName:ge,rootClassName:E,getContainer:e.getContainer}),{default:function(){return[u("ul",{class:"".concat(e.prefixCls,"-operations")},[ve.map(function(N){var B=N.icon,F=N.onClick,K=N.type,ee=N.disabled;return u("li",{class:re(se,A({},"".concat(e.prefixCls,"-operations-operation-disabled"),ee&&(ee==null?void 0:ee.value))),onClick:F,key:K},[nt(B,{class:pe})])})]),u("div",{class:"".concat(e.prefixCls,"-img-wrapper"),style:{transform:"translate3d(".concat(x.x,"px, ").concat(x.y,"px, 0)")}},[u("img",{onMousedown:we,onDblclick:Pe,ref:L,class:"".concat(e.prefixCls,"-img"),src:me.value,alt:e.alt,style:{transform:"scale3d(".concat(g.value,", ").concat(g.value,", 1) rotate(").concat(R.value,"deg)")}},null)]),ne.value&&u("div",{class:re("".concat(e.prefixCls,"-switch-left"),A({},"".concat(e.prefixCls,"-switch-left-disabled"),k.value<=0)),onClick:D},[S]),ne.value&&u("div",{class:re("".concat(e.prefixCls,"-switch-right"),A({},"".concat(e.prefixCls,"-switch-right-disabled"),k.value>=b.value-1)),onClick:_},[$])]}})}}}),He=Ct,Pt=["icons","maskClassName","src"],Fe=function(){return{src:String,wrapperClassName:String,wrapperStyle:{type:Object,default:void 0},rootClassName:String,prefixCls:String,previewPrefixCls:String,previewMask:{type:[Boolean,Function],default:void 0},placeholder:it.any,fallback:String,preview:{type:[Boolean,Object],default:!0},onClick:{type:Function},onError:{type:Function}}},We=function(e,t){var n=l({},e);return Object.keys(t).forEach(function(a){e[a]===void 0&&(n[a]=t[a])}),n},bt=0,Ye=ue({compatConfig:{MODE:3},name:"Image",inheritAttrs:!1,props:Fe(),emits:["click","error"],setup:function(e,t){var n=t.attrs,a=t.slots,o=t.emit,p=c(function(){return e.prefixCls}),m=c(function(){return"".concat(p.value,"-preview")}),j=c(function(){var d={visible:void 0,onVisibleChange:function(){},getContainer:void 0};return Oe(e.preview)==="object"?We(e.preview,d):d}),T=c(function(){return e.placeholder&&e.placeholder!==!0||a.placeholder}),C=c(function(){return j.value.visible}),S=c(function(){return j.value.getContainer}),$=c(function(){return C.value!==void 0}),g=function(h,z){var D,_;(D=(_=j.value).onVisibleChange)===null||D===void 0||D.call(_,h,z)},R=Ve(!!C.value,{value:C,onChange:g}),W=le(R,2),U=W[0],x=W[1];q(U,function(d,h){g(d,h)});var P=O(T.value?"loading":"normal");q(function(){return e.src},function(){P.value=T.value?"loading":"normal"});var Z=O(null),L=c(function(){return P.value==="error"}),y=ye.inject(),I=y.isPreviewGroup,H=y.setCurrent,f=y.setShowPreview,s=y.setMousePosition,M=y.registerImage,w=O(bt++),b=c(function(){return e.preview&&!L.value}),V=function(){P.value="normal"},k=function(h){P.value="error",o("error",h)},me=function(h){if(!$.value){var z=Ue(h.target),D=z.left,_=z.top;I.value?(H(w.value),s({x:D,y:_})):Z.value={x:D,y:_}}I.value?f(!0):x(!0),o("click",h)},ne=function(){x(!1),$.value||(Z.value=null)},G=O(null);q(function(){return G},function(){P.value==="loading"&&G.value.complete&&(G.value.naturalWidth||G.value.naturalHeight)&&V()});var J=function(){};be(function(){q([function(){return e.src},b],function(){if(J(),!I.value)return function(){};J=M(w.value,e.src,b.value),b.value||J()},{flush:"post",immediate:!0})}),Ae(function(){J()});var ae=function(h){return dt(h)?h+"px":h};return function(){var d=e.prefixCls,h=e.wrapperClassName,z=e.fallback,D=e.src,_=e.placeholder,ge=e.wrapperStyle,se=e.rootClassName,pe=n.width,ve=n.height,ce=n.crossorigin,we=n.decoding,ie=n.alt,he=n.sizes,Ce=n.srcset,Pe=n.usemap,oe=n.class,v=n.style,i=j.value,E=i.icons,Y=i.maskClassName,N=i.src,B=ot(i,Pt),F=re(d,h,se,A({},"".concat(d,"-error"),L.value)),K=L.value&&z?z:N!=null?N:D,ee={crossorigin:ce,decoding:we,alt:ie,sizes:he,srcset:Ce,usemap:Pe,class:re("".concat(d,"-img"),A({},"".concat(d,"-img-placeholder"),_===!0),oe),style:l({height:ve},v)};return u(Ge,null,[u("div",{class:F,onClick:b.value?me:function(Xe){o("click",Xe)},style:l({width:ae(pe),height:ae(ve)},ge)},[u("img",l(l(l({},ee),L.value&&z?{src:z}:{onLoad:V,onError:k,src:D}),{},{ref:G}),null),P.value==="loading"&&u("div",{"aria-hidden":"true",class:"".concat(d,"-placeholder")},[_||a.placeholder&&a.placeholder()]),a.previewMask&&b.value&&u("div",{class:["".concat(d,"-mask"),Y]},[a.previewMask()])]),!I.value&&b.value&&u(He,l(l({},B),{},{"aria-hidden":!U.value,visible:U.value,prefixCls:m.value,onClose:ne,mousePosition:Z.value,src:K,alt:ie,getContainer:S.value,icons:E,rootClassName:se}),null)])}}});Ye.PreviewGroup=Ze;var Ot=Ye,yt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}},{tag:"path",attrs:{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"}}]},name:"rotate-left",theme:"outlined"},St=yt;function ze(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.forEach(function(a){xt(r,a,t[a])})}return r}function xt(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Se=function(e,t){var n=ze({},e,t.attrs);return u(de,ze({},n,{icon:St}),null)};Se.displayName="RotateLeftOutlined";Se.inheritAttrs=!1;var Mt=Se,Rt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}},{tag:"path",attrs:{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"}}]},name:"rotate-right",theme:"outlined"},Lt=Rt;function De(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.forEach(function(a){It(r,a,t[a])})}return r}function It(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var xe=function(e,t){var n=De({},e,t.attrs);return u(de,De({},n,{icon:Lt}),null)};xe.displayName="RotateRightOutlined";xe.inheritAttrs=!1;var jt=xe,kt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"},Nt=kt;function $e(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.forEach(function(a){zt(r,a,t[a])})}return r}function zt(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Me=function(e,t){var n=$e({},e,t.attrs);return u(de,$e({},n,{icon:Nt}),null)};Me.displayName="ZoomInOutlined";Me.inheritAttrs=!1;var Dt=Me,$t={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"},_t=$t;function _e(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.forEach(function(a){Et(r,a,t[a])})}return r}function Et(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Re=function(e,t){var n=_e({},e,t.attrs);return u(de,_e({},n,{icon:_t}),null)};Re.displayName="ZoomOutOutlined";Re.inheritAttrs=!1;var Vt=Re,Be={rotateLeft:u(Mt,null,null),rotateRight:u(jt,null,null),zoomIn:u(Dt,null,null),zoomOut:u(Vt,null,null),close:u(lt,null,null),left:u(ut,null,null),right:u(st,null,null)},Gt=ue({compatConfig:{MODE:3},name:"AImagePreviewGroup",inheritAttrs:!1,props:{previewPrefixCls:String},setup:function(e,t){var n=t.attrs,a=t.slots,o=Te("image",e),p=o.getPrefixCls,m=c(function(){return p("image-preview",e.previewPrefixCls)});return function(){return u(Ze,l(l({},l(l({},n),e)),{},{icons:Be,previewPrefixCls:m.value}),a)}}}),At=Gt,Q=ue({name:"AImage",inheritAttrs:!1,props:Fe(),setup:function(e,t){var n=t.slots,a=t.attrs,o=Te("image",e),p=o.prefixCls,m=o.rootPrefixCls,j=o.configProvider,T=c(function(){var C=e.preview;if(C===!1)return C;var S=Oe(C)==="object"?C:{};return l(l({icons:Be},S),{},{transitionName:je(m.value,"zoom",S.transitionName),maskTransitionName:je(m.value,"fade",S.maskTransitionName)})});return function(){var C,S=((C=j.locale)===null||C===void 0?void 0:C.Image)||vt.Image,$=function(){return u("div",{class:"".concat(p.value,"-mask-info")},[u(ct,null,null),S==null?void 0:S.preview])},g=e.previewMask,R=g===void 0?n.previewMask||$:g;return u(Ot,l(l({},l(l(l({},a),e),{},{prefixCls:p.value})),{},{preview:T.value}),l(l({},n),{},{previewMask:typeof R=="function"?R:null}))}}});Q.PreviewGroup=At;Q.install=function(r){return r.component(Q.name,Q),r.component(Q.PreviewGroup.name,Q.PreviewGroup),r};var Ut=Q;export{Ut as I,Ue as g};