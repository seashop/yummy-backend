import{l as c,B as l}from"./BasicForm.11e460f6.js";import{av as d,a as g,ax as r,o as f,j as B,y as F,n as t,D as _}from"./index.c4bcccae.js";import{u as A}from"./useForm.9fc31f81.js";import{P as C}from"./index.c4b57652.js";import{A as m}from"./index.c5a9aa2d.js";import{u as a}from"./upload.9e33eee1.js";/* empty css              *//* empty css               */import"./index.ce8ec429.js";import"./index.ba0073c4.js";import"./Checkbox.6855b002.js";import"./index.57c3dc31.js";import"./index.3d13f588.js";import"./index.0a2bde25.js";import"./index.e7f07382.js";import"./index.fc21d40d.js";import"./useFormItem.18f8f3df.js";import"./index.5b91ae9f.js";import"./get.d6c8fb63.js";import"./index.8adaff47.js";import"./eagerComputed.d0b9ee41.js";import"./index.b4ace7ad.js";import"./_baseIteratee.ea415784.js";import"./DeleteOutlined.42e11d46.js";import"./index.e182d5a1.js";import"./useRefs.9398ff58.js";import"./Form.fcad3fe0.js";import"./Col.843b66ed.js";import"./useFlexGapSupport.d852bf74.js";import"./useSize.1344b7d2.js";import"./transButton.80503396.js";import"./index.891c6174.js";import"./index.a97dab51.js";import"./useWindowSizeFn.4ec568b8.js";import"./FullscreenOutlined.83eb1df3.js";import"./index.e603a1c1.js";import"./uuid.2b29000c.js";import"./download.3199245e.js";import"./base64Conver.08b9f4ec.js";import"./index.587a0685.js";import"./index.8fb21350.js";import"./index.e291623e.js";import"./uniqBy.4b200e6e.js";import"./index.32df30ea.js";import"./index.a7bd6f74.js";import"./onMountedOrActivated.36541739.js";import"./useContentViewHeight.4714da75.js";import"./ArrowLeftOutlined.f8f3dc9e.js";import"./index.2f012cb3.js";const h=[{field:"field1",component:"Upload",label:"\u5B57\u6BB51",colProps:{span:8},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u4F20\u6587\u4EF6"}],componentProps:{api:a}}],E=g({components:{BasicUpload:c,BasicForm:l,PageWrapper:C,[m.name]:m},setup(){const{createMessage:o}=_(),[p]=A({labelWidth:120,schemas:h,actionColOptions:{span:16}});return{handleChange:e=>{o.info(`\u5DF2\u4E0A\u4F20\u6587\u4EF6${JSON.stringify(e)}`)},uploadApi:a,register:p}}});function P(o,p,e,x,$,y){const i=r("a-alert"),s=r("BasicUpload"),n=r("BasicForm"),u=r("PageWrapper");return f(),B(u,{title:"\u4E0A\u4F20\u7EC4\u4EF6\u793A\u4F8B"},{default:F(()=>[t(i,{message:"\u57FA\u7840\u793A\u4F8B"}),t(s,{maxSize:20,maxNumber:10,onChange:o.handleChange,api:o.uploadApi,class:"my-5",accept:["image/*"]},null,8,["onChange","api"]),t(i,{message:"\u5D4C\u5165\u8868\u5355,\u52A0\u5165\u8868\u5355\u6821\u9A8C"}),t(n,{onRegister:o.register,class:"my-5"},null,8,["onRegister"])]),_:1})}var Po=d(E,[["render",P]]);export{Po as default};