var v=Object.defineProperty,D=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var B=(o,t,e)=>t in o?v(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,m=(o,t)=>{for(var e in t||(t={}))M.call(t,e)&&B(o,e,t[e]);if(F)for(var e of F(t))E.call(t,e)&&B(o,e,t[e]);return o},g=(o,t)=>D(o,_(t));var f=(o,t,e)=>new Promise((n,s)=>{var c=a=>{try{r(e.next(a))}catch(i){s(i)}},l=a=>{try{r(e.throw(a))}catch(i){s(i)}},r=a=>a.done?n(a.value):Promise.resolve(a.value).then(c,l);r((e=e.apply(o,t)).next())});import{B as P,b as k}from"./index.a97dab51.js";import{B as y}from"./BasicForm.11e460f6.js";import{u as S}from"./useForm.9fc31f81.js";import{i as x,b as q,a as T}from"./system.9bec63d6.js";import{a as $,s as b,k as d,f as L,av as O,ax as h,o as R,j as N,y as j,n as U,ay as V}from"./index.c4bcccae.js";const ee=[{title:"\u7528\u6237\u540D",dataIndex:"account",width:120},{title:"\u6635\u79F0",dataIndex:"nickname",width:120},{title:"\u90AE\u7BB1",dataIndex:"email",width:120},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:180},{title:"\u89D2\u8272",dataIndex:"role",width:200},{title:"\u5907\u6CE8",dataIndex:"remark"}],oe=[{field:"account",label:"\u7528\u6237\u540D",component:"Input",colProps:{span:8}},{field:"nickname",label:"\u6635\u79F0",component:"Input",colProps:{span:8}}],z=[{field:"account",label:"\u7528\u6237\u540D",component:"Input",helpMessage:["\u672C\u5B57\u6BB5\u6F14\u793A\u5F02\u6B65\u9A8C\u8BC1","\u4E0D\u80FD\u8F93\u5165\u5E26\u6709admin\u7684\u7528\u6237\u540D"],rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},{validator(o,t){return new Promise((e,n)=>{x(t).then(()=>e()).catch(s=>{n(s.message||"\u9A8C\u8BC1\u5931\u8D25")})})}}]},{field:"pwd",label:"\u5BC6\u7801",component:"InputPassword",required:!0,ifShow:!1},{label:"\u89D2\u8272",field:"role",component:"ApiSelect",componentProps:{api:q,labelField:"roleName",valueField:"roleValue"},required:!0},{field:"dept",label:"\u6240\u5C5E\u90E8\u95E8",component:"TreeSelect",componentProps:{fieldNames:{label:"deptName",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"nickname",label:"\u6635\u79F0",component:"Input",required:!0},{label:"\u90AE\u7BB1",field:"email",component:"Input",required:!0},{label:"\u5907\u6CE8",field:"remark",component:"InputTextArea"}],G=$({name:"AccountModal",components:{BasicModal:P,BasicForm:y},emits:["success","register"],setup(o,{emit:t}){const e=b(!0),n=b(""),[s,{setFieldsValue:c,updateSchema:l,resetFields:r,validate:a}]=S({labelWidth:100,baseColProps:{span:24},schemas:z,showActionButtonGroup:!1,actionColOptions:{span:23}}),[i,{setModalProps:p,closeModal:w}]=k(u=>f(this,null,function*(){r(),p({confirmLoading:!1}),e.value=!!(u!=null&&u.isUpdate),d(e)&&(n.value=u.record.id,c(m({},u.record)));const I=yield T();l([{field:"pwd",show:!d(e)},{field:"dept",componentProps:{treeData:I}}])})),A=L(()=>d(e)?"\u7F16\u8F91\u8D26\u53F7":"\u65B0\u589E\u8D26\u53F7");function C(){return f(this,null,function*(){try{const u=yield a();p({confirmLoading:!0}),w(),t("success",{isUpdate:d(e),values:g(m({},u),{id:n.value})})}finally{p({confirmLoading:!1})}})}return{registerModal:i,registerForm:s,getTitle:A,handleSubmit:C}}});function W(o,t,e,n,s,c){const l=h("BasicForm"),r=h("BasicModal");return R(),N(r,V(o.$attrs,{onRegister:o.registerModal,title:o.getTitle,onOk:o.handleSubmit}),{default:j(()=>[U(l,{onRegister:o.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var H=O(G,[["render",W]]),te=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));export{H as A,te as a,ee as c,oe as s};