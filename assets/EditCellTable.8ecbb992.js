var p=(t,n,r)=>new Promise((d,a)=>{var m=e=>{try{u(r.next(e))}catch(i){a(i)}},o=e=>{try{u(r.throw(e))}catch(i){a(i)}},u=e=>e.done?d(e.value):Promise.resolve(e.value).then(m,o);u((r=r.apply(t,n)).next())});import{B as s}from"./TableImg.8c3ea297.js";import"./BasicForm.b02f3207.js";import{u as l}from"./useTable.ce0f5d89.js";import{o as c,t as F}from"./tree.750ec334.js";import{d as C}from"./table.01871394.js";import{av as f,a as E,ax as b,o as D,h,n as B,bT as A,D as _}from"./index.d50a9800.js";import{P as w}from"./index.4d8ea057.js";import"./index.9bbde0e5.js";import"./Checkbox.ac809a47.js";import"./index.c240df87.js";import"./index.c693835c.js";import"./eagerComputed.7b567627.js";import"./useForm.76075c71.js";import"./index.0bd7a6a1.js";import"./index.02325821.js";import"./index.b6395a58.js";import"./useSize.381fa398.js";import"./onMountedOrActivated.276f36da.js";import"./useWindowSizeFn.974b14b8.js";import"./useContentViewHeight.52d4bb94.js";import"./ArrowLeftOutlined.3ec12d2b.js";import"./index.10182938.js";import"./transButton.1f86bfc1.js";import"./index.16714cd7.js";import"./index.118afb88.js";import"./index.11b93be2.js";import"./index.406f84fe.js";import"./uuid.2b29000c.js";import"./index.e56403fd.js";import"./_baseIteratee.9a09b333.js";import"./get.87e704f3.js";import"./DeleteOutlined.e72cc543.js";import"./Form.a90eefb7.js";import"./Col.56b3f0ca.js";import"./useFlexGapSupport.7be7a3d1.js";import"./index.4900e588.js";import"./FullscreenOutlined.43b089d4.js";import"./index.f2d505bc.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.089d0fa2.js";import"./index.049dbb8d.js";import"./fromPairs.84aabb58.js";import"./index.0698dd78.js";import"./scrollTo.ebc992b0.js";import"./index.f3371471.js";/* empty css              *//* empty css               */import"./useFormItem.a0990f77.js";import"./index.ad2e4158.js";import"./index.7f7f4e74.js";import"./download.1213368a.js";import"./base64Conver.08b9f4ec.js";import"./index.679e84c1.js";import"./index.14cbd24c.js";import"./useRefs.24425adc.js";import"./index.4848492a.js";import"./uniqBy.08eb7f78.js";const x=[{title:"\u8F93\u5165\u6846",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"\u9ED8\u8BA4\u8F93\u5165\u72B6\u6001",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"\u8F93\u5165\u6846\u6821\u9A8C",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"\u8F93\u5165\u6846\u51FD\u6570\u6821\u9A8C",dataIndex:"name2",edit:!0,editRule:t=>p(void 0,null,function*(){return t==="2"?"\u4E0D\u80FD\u8F93\u5165\u8BE5\u503C":""}),width:200},{title:"\u6570\u5B57\u8F93\u5165\u6846",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200,editComponentProps:()=>({max:100,min:0}),editRender:({text:t})=>A(w,{percent:Number(t)})},{title:"\u4E0B\u62C9\u6846",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:c,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9\u6811",dataIndex:"name71",edit:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:F,resultField:"list"},width:200},{title:"\u65E5\u671F\u9009\u62E9",dataIndex:"date",edit:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:200},{title:"\u65F6\u95F4\u9009\u62E9",dataIndex:"time",edit:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:200},{title:"\u52FE\u9009\u6846",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:t=>t?"\u662F":"\u5426",width:200},{title:"\u5F00\u5173",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:t=>t?"\u5F00":"\u5173",width:200}],I=E({components:{BasicTable:s},setup(){const[t]=l({title:"\u53EF\u7F16\u8F91\u5355\u5143\u683C\u793A\u4F8B",api:C,columns:x,showIndexColumn:!1,bordered:!0}),{createMessage:n}=_();function r({record:o,index:u,key:e,value:i}){return!1}function d({value:o,key:u,id:e}){return n.loading({content:`\u6B63\u5728\u6A21\u62DF\u4FDD\u5B58${u}`,key:"_save_fake_data",duration:0}),new Promise(i=>{setTimeout(()=>{o===""?(n.error({content:"\u4FDD\u5B58\u5931\u8D25\uFF1A\u4E0D\u80FD\u4E3A\u7A7A",key:"_save_fake_data",duration:2}),i(!1)):(n.success({content:`\u8BB0\u5F55${e}\u7684${u}\u5DF2\u4FDD\u5B58`,key:"_save_fake_data",duration:2}),i(!0))},2e3)})}function a($t){return p(this,arguments,function*({record:o,index:u,key:e,value:i}){return yield d({id:o.id,key:e,value:i})})}function m(){}return{registerTable:t,handleEditEnd:r,handleEditCancel:m,beforeEditSubmit:a}}}),P={class:"p-4"};function g(t,n,r,d,a,m){const o=b("BasicTable");return D(),h("div",P,[B(o,{onRegister:t.registerTable,onEditEnd:t.handleEditEnd,onEditCancel:t.handleEditCancel,beforeEditSubmit:t.beforeEditSubmit},null,8,["onRegister","onEditEnd","onEditCancel","beforeEditSubmit"])])}var Mt=f(I,[["render",g]]);export{Mt as default};