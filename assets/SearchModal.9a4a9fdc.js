var D=Object.defineProperty,M=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var g=(o,s,e)=>s in o?D(o,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[s]=e,m=(o,s)=>{for(var e in s||(s={}))S.call(s,e)&&g(o,e,s[e]);if(f)for(var e of f(s))w.call(s,e)&&g(o,e,s[e]);return o},B=(o,s)=>M(o,C(s));var p=(o,s,e)=>new Promise((i,l)=>{var c=t=>{try{r(e.next(t))}catch(n){l(n)}},u=t=>{try{r(e.throw(t))}catch(n){l(n)}},r=t=>t.done?i(t.value):Promise.resolve(t.value).then(c,u);r((e=e.apply(o,s)).next())});import{B as y}from"./BasicForm.b02f3207.js";import{u as E}from"./useForm.76075c71.js";import{B as I,b as $}from"./index.4900e588.js";import{a as k,s as h,k as d,f as P,av as O,ax as F,o as R,j as T,y as j,n as x,ay as L}from"./index.d50a9800.js";const J=[{title:"\u5E8F\u53F7",dataIndex:"id",width:200},{title:"\u70ED\u8BCD",dataIndex:"name",width:200}],K=[{field:"name",label:"\u70ED\u8BCD",component:"Input",colProps:{span:8}}],U=[{field:"name",label:"\u70ED\u8BCD",required:!0,component:"Input"},{field:"num",label:"\u641C\u7D22\u6B21\u6570",required:!0,component:"InputNumber"}],q=k({name:"DiningTableModal",components:{BasicModal:I,BasicForm:y},emits:["success","register"],setup(o,{emit:s}){const e=h(!0),i=h(""),[l,{resetFields:c,setFieldsValue:u,validate:r}]=E({labelWidth:90,baseColProps:{span:24},schemas:U,showActionButtonGroup:!1}),[t,{setModalProps:n,closeModal:b}]=$(a=>p(this,null,function*(){c(),n({confirmLoading:!1}),e.value=!!(a!=null&&a.isUpdate),d(e)&&(i.value=a.record.id,u(m({},a.record)))})),_=P(()=>d(e)?"\u7F16\u8F91\u70ED\u8BCD":"\u65B0\u589E\u70ED\u8BCD");function v(){return p(this,null,function*(){try{const a=yield r();n({confirmLoading:!0}),b(),s("success",{isUpdate:d(e),values:B(m({},a),{id:d(e)?i.value:void 0})})}finally{n({confirmLoading:!1})}})}return{registerModal:t,registerForm:l,getTitle:_,handleSubmit:v}}});function N(o,s,e,i,l,c){const u=F("BasicForm"),r=F("BasicModal");return R(),T(r,L(o.$attrs,{onRegister:o.registerModal,showFooter:"",title:o.getTitle,width:"500px",onOk:o.handleSubmit}),{default:j(()=>[x(u,{onRegister:o.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var V=O(q,[["render",N]]),Q=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));export{V as S,Q as a,J as c,K as s};