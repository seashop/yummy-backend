var d=(o,s,r)=>new Promise((c,i)=>{var l=e=>{try{a(r.next(e))}catch(m){i(m)}},t=e=>{try{a(r.throw(e))}catch(m){i(m)}},a=e=>e.done?c(e.value):Promise.resolve(e.value).then(l,t);a((r=r.apply(o,s)).next())});import{a as C,av as h,cD as B,B as F,r as g,M as A,f as b,ax as p,o as I,j as S,y as u,n,i as _,z as w,D as y,f0 as R,f1 as k}from"./index.d50a9800.js";/* empty css               */import{B as x}from"./BasicForm.b02f3207.js";import{u as E}from"./useForm.76075c71.js";import{a as M}from"./index.98926004.js";import{h as U}from"./header.d801b988.js";import{a as V}from"./account.c7bff9d5.js";import{b as $}from"./data.08d7c751.js";import{u as N}from"./upload.1bda8984.js";import{R as D,C as T}from"./index.4848492a.js";/* empty css              */import"./index.f2d505bc.js";import"./index.9bbde0e5.js";import"./Checkbox.ac809a47.js";import"./index.c240df87.js";import"./index.11b93be2.js";import"./index.406f84fe.js";import"./index.16714cd7.js";import"./index.118afb88.js";import"./useFormItem.a0990f77.js";import"./index.0698dd78.js";import"./get.87e704f3.js";import"./index.c693835c.js";import"./eagerComputed.7b567627.js";import"./index.e56403fd.js";import"./_baseIteratee.9a09b333.js";import"./DeleteOutlined.e72cc543.js";import"./index.4d8ea057.js";import"./useRefs.24425adc.js";import"./Form.a90eefb7.js";import"./Col.56b3f0ca.js";import"./useFlexGapSupport.7be7a3d1.js";import"./useSize.381fa398.js";import"./transButton.1f86bfc1.js";import"./index.ad2e4158.js";import"./index.4900e588.js";import"./useWindowSizeFn.974b14b8.js";import"./FullscreenOutlined.43b089d4.js";import"./index.7f7f4e74.js";import"./index.049dbb8d.js";import"./uuid.2b29000c.js";import"./download.1213368a.js";import"./base64Conver.08b9f4ec.js";import"./index.679e84c1.js";import"./index.14cbd24c.js";import"./uniqBy.08eb7f78.js";import"./index.b6395a58.js";import"./index.10182938.js";const j=C({components:{BasicForm:x,CollapseContainer:B,Button:F,ARow:D,ACol:T,CropperAvatar:M},setup(){const{createMessage:o}=y(),s=g(),[r,{setFieldsValue:c}]=E({labelWidth:120,schemas:$,showActionButtonGroup:!1});A(()=>d(this,null,function*(){const t=yield V();c(t)}));const i=b(()=>{const{avatar:t}=s.getUserInfo;return t||U});function l(t){const a=s.getUserInfo;a.avatar=t,s.setUserInfo(a)}return{avatar:i,register:r,uploadApi:N,updateAvatar:l,handleSubmit:()=>{o.success("\u66F4\u65B0\u6210\u529F\uFF01")}}}}),z=o=>(R("data-v-249137cb"),o=o(),k(),o),G={class:"change-avatar"},P=z(()=>_("div",{class:"mb-2"},"\u5934\u50CF",-1));function W(o,s,r,c,i,l){const t=p("BasicForm"),a=p("a-col"),e=p("CropperAvatar"),m=p("a-row"),f=p("Button"),v=p("CollapseContainer");return I(),S(v,{title:"\u57FA\u672C\u8BBE\u7F6E",canExpan:!1},{default:u(()=>[n(m,{gutter:24},{default:u(()=>[n(a,{span:14},{default:u(()=>[n(t,{onRegister:o.register},null,8,["onRegister"])]),_:1}),n(a,{span:10},{default:u(()=>[_("div",G,[P,n(e,{uploadApi:o.uploadApi,value:o.avatar,btnText:"\u66F4\u6362\u5934\u50CF",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:o.updateAvatar,width:"150"},null,8,["uploadApi","value","onChange"])])]),_:1})]),_:1}),n(f,{type:"primary",onClick:o.handleSubmit},{default:u(()=>[w(" \u66F4\u65B0\u57FA\u672C\u4FE1\u606F ")]),_:1},8,["onClick"])]),_:1})}var zo=h(j,[["render",W],["__scopeId","data-v-249137cb"]]);export{zo as default};