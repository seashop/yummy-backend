import{l as c,B as l}from"./BasicForm.ecc16293.js";import{av as d,a as g,ax as r,o as f,j as B,y as F,n as t,D as _}from"./index.71d27ec8.js";import{u as A}from"./useForm.1ef3442d.js";import{P as C}from"./index.edca75a1.js";import{A as m}from"./index.290183c2.js";import{u as a}from"./upload.e75998d5.js";/* empty css              *//* empty css               */import"./index.0ddf3146.js";import"./index.82b73f0a.js";import"./Checkbox.b9fd9e63.js";import"./index.62708885.js";import"./index.b58f965a.js";import"./index.d5597332.js";import"./index.3e9a0c30.js";import"./index.570ef99c.js";import"./useFormItem.f4a165d1.js";import"./index.41548fff.js";import"./get.2ea61e62.js";import"./index.d16cb426.js";import"./eagerComputed.bf418e4f.js";import"./index.5dab2e2c.js";import"./_baseIteratee.07f786e9.js";import"./DeleteOutlined.9c425421.js";import"./index.b332413b.js";import"./useRefs.4de25004.js";import"./Form.7dd7a545.js";import"./Col.cced6662.js";import"./useFlexGapSupport.dcaea212.js";import"./useSize.7f6a0415.js";import"./transButton.d7be3a5c.js";import"./index.13fbb7d1.js";import"./index.6cd30c01.js";import"./useWindowSizeFn.2f380c6a.js";import"./FullscreenOutlined.186960e1.js";import"./index.e69e205a.js";import"./uuid.2b29000c.js";import"./download.73216fb1.js";import"./base64Conver.08b9f4ec.js";import"./index.59a80f59.js";import"./index.f1d0b8cc.js";import"./index.5f6622b1.js";import"./uniqBy.49a2d577.js";import"./index.4664d36a.js";import"./index.ca9c94a7.js";import"./onMountedOrActivated.c17cdee3.js";import"./useContentViewHeight.3e540372.js";import"./ArrowLeftOutlined.c7d64000.js";import"./index.7cb9b95f.js";const h=[{field:"field1",component:"Upload",label:"\u5B57\u6BB51",colProps:{span:8},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u4F20\u6587\u4EF6"}],componentProps:{api:a}}],E=g({components:{BasicUpload:c,BasicForm:l,PageWrapper:C,[m.name]:m},setup(){const{createMessage:o}=_(),[p]=A({labelWidth:120,schemas:h,actionColOptions:{span:16}});return{handleChange:e=>{o.info(`\u5DF2\u4E0A\u4F20\u6587\u4EF6${JSON.stringify(e)}`)},uploadApi:a,register:p}}});function P(o,p,e,x,$,y){const i=r("a-alert"),s=r("BasicUpload"),n=r("BasicForm"),u=r("PageWrapper");return f(),B(u,{title:"\u4E0A\u4F20\u7EC4\u4EF6\u793A\u4F8B"},{default:F(()=>[t(i,{message:"\u57FA\u7840\u793A\u4F8B"}),t(s,{maxSize:20,maxNumber:10,onChange:o.handleChange,api:o.uploadApi,class:"my-5",accept:["image/*"]},null,8,["onChange","api"]),t(i,{message:"\u5D4C\u5165\u8868\u5355,\u52A0\u5165\u8868\u5355\u6821\u9A8C"}),t(n,{onRegister:o.register,class:"my-5"},null,8,["onRegister"])]),_:1})}var Po=d(E,[["render",P]]);export{Po as default};
