var G=Object.defineProperty;var w=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var P=(t,r,n)=>r in t?G(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,V=(t,r)=>{for(var n in r||(r={}))O.call(r,n)&&P(t,n,r[n]);if(w)for(var n of w(r))R.call(r,n)&&P(t,n,r[n]);return t};var _=(t,r,n)=>new Promise((e,u)=>{var o=i=>{try{p(n.next(i))}catch(c){u(c)}},s=i=>{try{p(n.throw(i))}catch(c){u(c)}},p=i=>i.done?e(i.value):Promise.resolve(i.value).then(o,s);p((n=n.apply(t,r)).next())});import{a0 as U,ez as K,eA as k,aX as N,aV as W,aW as q,eB as X,eC as Z,eD as M,eE as D,av as H,a as J,B as Q,aZ as Y,s as j,f as I,a6 as rr,di as g,ax as l,o as A,j as L,y as b,n as y,h as tr,F as nr,aA as or,i as S,z as $,bs as ar,cA as er,D as ir}from"./index.c4bcccae.js";import{C as sr}from"./index.70c93871.js";import{T as x}from"./index.37646cfb.js";/* empty css               */import{B as ur}from"./BasicForm.11e460f6.js";import{u as cr}from"./useForm.9fc31f81.js";import{a as pr,b as mr}from"./inns.8aa7cee4.js";import{b as F}from"./club.39955e46.js";import"./index.9b9274b9.js";import{b as fr}from"./_baseIteratee.ea415784.js";import{a as dr}from"./index.b4ace7ad.js";import"./index.f2c3655e.js";import"./index.e291623e.js";import"./Col.843b66ed.js";import"./useFlexGapSupport.d852bf74.js";import"./useRefs.9398ff58.js";import"./PlusOutlined.e5075723.js";/* empty css              */import"./index.ce8ec429.js";import"./index.ba0073c4.js";import"./Checkbox.6855b002.js";import"./index.57c3dc31.js";import"./index.3d13f588.js";import"./index.0a2bde25.js";import"./index.e7f07382.js";import"./index.fc21d40d.js";import"./useFormItem.18f8f3df.js";import"./index.5b91ae9f.js";import"./get.d6c8fb63.js";import"./index.8adaff47.js";import"./eagerComputed.d0b9ee41.js";import"./DeleteOutlined.42e11d46.js";import"./transButton.80503396.js";import"./index.891c6174.js";import"./index.a97dab51.js";import"./useWindowSizeFn.4ec568b8.js";import"./FullscreenOutlined.83eb1df3.js";import"./index.e182d5a1.js";import"./index.c5a9aa2d.js";import"./index.e603a1c1.js";import"./uuid.2b29000c.js";import"./download.3199245e.js";import"./base64Conver.08b9f4ec.js";import"./index.587a0685.js";import"./index.8fb21350.js";import"./Form.fcad3fe0.js";import"./useSize.1344b7d2.js";import"./uniqBy.4b200e6e.js";function lr(t,r){var n=-1,e=U(t)?Array(t.length):[];return dr(t,function(u,o,s){e[++n]=r(u,o,s)}),e}function gr(t,r){var n=t.length;for(t.sort(r);n--;)t[n]=t[n].value;return t}function br(t,r){if(t!==r){var n=t!==void 0,e=t===null,u=t===t,o=K(t),s=r!==void 0,p=r===null,i=r===r,c=K(r);if(!p&&!c&&!o&&t>r||o&&s&&i&&!p&&!c||e&&s&&i||!n&&i||!u)return 1;if(!e&&!o&&!c&&t<r||c&&n&&u&&!e&&!o||p&&n&&u||!s&&u||!i)return-1}return 0}function yr(t,r,n){for(var e=-1,u=t.criteria,o=r.criteria,s=u.length,p=n.length;++e<s;){var i=br(u[e],o[e]);if(i){if(e>=p)return i;var c=n[e];return i*(c=="desc"?-1:1)}}return t.index-r.index}function Cr(t,r,n){r.length?r=k(r,function(o){return N(o)?function(s){return W(s,o.length===1?o[0]:o)}:o}):r=[q];var e=-1;r=k(r,X(fr));var u=lr(t,function(o,s,p){var i=k(r,function(c){return c(o)});return{criteria:i,index:++e,value:o}});return gr(u,function(o,s){return yr(o,s,n)})}var Br=Z(function(t,r){if(t==null)return[];var n=r.length;return n>1&&M(t,r[0],r[1])?r=[]:n>2&&M(r[0],r[1],r[2])&&(r=[r[0]]),Cr(t,D(r,1),[])}),_r=Br;const kr=J({name:"ConfigManagement",components:{Button:Q,Card:sr,Tabs:x,TabPane:x.TabPane,BasicForm:ur},setup(){var h,v;const r=(v=(h=Y().params)==null?void 0:h.id)!=null?v:"",{createMessage:n}=ir(),e=j(F.CAT_VARIABLE),u=j([{id:-1,scope:F.CAT_VARIABLE,title:"\u57FA\u7840\u4FE1\u606F"},{id:-2,scope:F.CAT_PRINTER,title:"\u6253\u5370\u673A"}]),o=I(()=>u.value.map((m,f)=>(f===0&&(e.value=m.scope),{title:m.title,scope:m.scope}))),[s,{appendSchemaByField:p,resetSchema:i,validate:c,setFieldsValue:C,resetFields:d}]=cr({size:"default",baseColProps:{span:24},labelWidth:160,showActionButtonGroup:!1,schemas:[]});rr([e],()=>_(this,null,function*(){i([]);let{innConfigs:m}=yield yield pr(r,e.value),f={};m&&(m=_r(m,function(a){return a.sortId})),m==null||m.forEach(a=>{var E,T;const B={field:a.key,component:a.component,label:a.title,required:!0};switch(a.props instanceof Object&&g(B,"componentProps",V({},a.props)),a.component){case"Switch":g(f,a.key,((E=a.value)==null?void 0:E.toString())==="true");break;case"RadioGroup":case"InputNumber":g(f,a.key,parseInt((T=a.value)==null?void 0:T.toString()));break;default:g(f,a.key,a.value);break}p(B,"")}),C(f)}),{immediate:!0});function z(){return _(this,null,function*(){try{const m=yield c(),f=Object.entries(m).map(a=>ar(a[1])?{key:a[0],value:a[1]?"true":"false"}:er(a[1])?{key:a[0],value:a[1].toString()}:{key:a[0],value:a[1]});return mr(r,f).then(()=>{n.success("\u4FEE\u6539\u6210\u529F")})}catch(m){}})}return{tabs:o,activeKey:e,register:s,resetFields:d,handleSubmit:z}}}),Ar={class:"flex flex-col items-center justify-center py-8 bg-white"},Fr={class:"flex justify-center"};function hr(t,r,n,e,u,o){const s=l("TabPane"),p=l("Tabs"),i=l("BasicForm"),c=l("Button"),C=l("Card");return A(),L(C,{title:"\u5546\u6237\u914D\u7F6E"},{default:b(()=>[y(p,{activeKey:t.activeKey,"onUpdate:activeKey":r[0]||(r[0]=d=>t.activeKey=d)},{default:b(()=>[(A(!0),tr(nr,null,or(t.tabs,d=>(A(),L(s,{key:d.scope,tab:d.title},null,8,["tab"]))),128))]),_:1},8,["activeKey"]),S("div",Ar,[y(i,{onRegister:t.register},null,8,["onRegister"]),S("div",Fr,[y(c,{onClick:t.resetFields},{default:b(()=>[$(" \u91CD\u7F6E ")]),_:1},8,["onClick"]),y(c,{class:"!ml-4",type:"primary",onClick:t.handleSubmit},{default:b(()=>[$(" \u786E\u8BA4 ")]),_:1},8,["onClick"])])])]),_:1})}var _t=H(kr,[["render",hr]]);export{_t as default};