import{D as f}from"./index.69624bc8.js";import{B as _}from"./TableImg.8c3ea297.js";import"./BasicForm.b02f3207.js";import{u as l}from"./useTable.ce0f5d89.js";import{P as T}from"./index.0bd7a6a1.js";import{av as h,a as g,ax as r,o as D,j as b,y as B,n as t}from"./index.d50a9800.js";import{D as c}from"./index.f2d505bc.js";import{refundSchema as v,refundData as S,personSchema as y,personData as C,refundTableData as F,refundTableSchema as R,refundTimeTableSchema as E,refundTimeTableData as w}from"./data.898b822b.js";import"./index.b6e9d8c6.js";import"./get.87e704f3.js";import"./index.9bbde0e5.js";import"./Checkbox.ac809a47.js";import"./index.c240df87.js";import"./index.c693835c.js";import"./eagerComputed.7b567627.js";import"./useForm.76075c71.js";import"./index.16714cd7.js";import"./index.118afb88.js";import"./index.11b93be2.js";import"./index.406f84fe.js";import"./uuid.2b29000c.js";import"./index.e56403fd.js";import"./_baseIteratee.9a09b333.js";import"./DeleteOutlined.e72cc543.js";import"./index.4d8ea057.js";import"./useRefs.24425adc.js";import"./Form.a90eefb7.js";import"./Col.56b3f0ca.js";import"./useFlexGapSupport.7be7a3d1.js";import"./useSize.381fa398.js";import"./useWindowSizeFn.974b14b8.js";import"./index.4900e588.js";import"./FullscreenOutlined.43b089d4.js";import"./onMountedOrActivated.276f36da.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.089d0fa2.js";import"./index.049dbb8d.js";import"./fromPairs.84aabb58.js";import"./index.0698dd78.js";import"./scrollTo.ebc992b0.js";import"./index.f3371471.js";/* empty css              *//* empty css               */import"./useFormItem.a0990f77.js";import"./transButton.1f86bfc1.js";import"./index.ad2e4158.js";import"./index.7f7f4e74.js";import"./download.1213368a.js";import"./base64Conver.08b9f4ec.js";import"./index.679e84c1.js";import"./index.14cbd24c.js";import"./index.4848492a.js";import"./uniqBy.08eb7f78.js";import"./index.02325821.js";import"./index.b6395a58.js";import"./useContentViewHeight.52d4bb94.js";import"./ArrowLeftOutlined.3ec12d2b.js";import"./index.10182938.js";const x=g({components:{Description:f,BasicTable:_,PageWrapper:T,[c.name]:c},setup(){const[e]=l({title:"\u9000\u8D27\u5546\u54C1",dataSource:F,columns:R,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:n}),[p]=l({title:"\u9000\u8D27\u8FDB\u5EA6",columns:E,pagination:!1,dataSource:w,showIndexColumn:!1,scroll:{y:300}});function n(s){let i=0,a=0;return s.forEach(o=>{i+=o.t5,a+=o.t6}),[{t1:"\u603B\u8BA1",t5:i,t6:a}]}return{registerRefundTable:e,registerTimeTable:p,refundSchema:v,refundData:S,personSchema:y,personData:C}}});function P(e,p,n,s,i,a){const o=r("Description"),m=r("a-divider"),u=r("BasicTable"),d=r("PageWrapper");return D(),b(d,{title:"\u57FA\u7840\u8BE6\u60C5\u9875",contentBackground:""},{default:B(()=>[t(o,{size:"middle",title:"\u9000\u6B3E\u7533\u8BF7",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),t(m),t(o,{size:"middle",title:"\u7528\u6237\u4FE1\u606F",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),t(m),t(u,{onRegister:e.registerRefundTable},null,8,["onRegister"]),t(m),t(u,{onRegister:e.registerTimeTable},null,8,["onRegister"])]),_:1})}var We=h(x,[["render",P],["__scopeId","data-v-33e8998f"]]);export{We as default};
