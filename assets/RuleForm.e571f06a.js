var f=(e,o,r)=>new Promise((m,i)=>{var d=u=>{try{l(r.next(u))}catch(s){i(s)}},t=u=>{try{l(r.throw(u))}catch(s){i(s)}},l=u=>u.done?m(u.value):Promise.resolve(u.value).then(d,t);l((r=r.apply(e,o)).next())});import{B as b}from"./BasicForm.b02f3207.js";import{u as g}from"./useForm.76075c71.js";import{av as A,a as P,cD as E,ax as B,o as _,j as v,y as n,i as k,n as p,z as c,D}from"./index.d50a9800.js";import{P as h}from"./index.0bd7a6a1.js";import{i as V}from"./system.e4088e46.js";/* empty css              *//* empty css               */import"./index.f2d505bc.js";import"./index.9bbde0e5.js";import"./Checkbox.ac809a47.js";import"./index.c240df87.js";import"./index.11b93be2.js";import"./index.406f84fe.js";import"./index.16714cd7.js";import"./index.118afb88.js";import"./useFormItem.a0990f77.js";import"./index.0698dd78.js";import"./get.87e704f3.js";import"./index.c693835c.js";import"./eagerComputed.7b567627.js";import"./index.e56403fd.js";import"./_baseIteratee.9a09b333.js";import"./DeleteOutlined.e72cc543.js";import"./index.4d8ea057.js";import"./useRefs.24425adc.js";import"./Form.a90eefb7.js";import"./Col.56b3f0ca.js";import"./useFlexGapSupport.7be7a3d1.js";import"./useSize.381fa398.js";import"./transButton.1f86bfc1.js";import"./index.ad2e4158.js";import"./index.4900e588.js";import"./useWindowSizeFn.974b14b8.js";import"./FullscreenOutlined.43b089d4.js";import"./index.7f7f4e74.js";import"./index.049dbb8d.js";import"./uuid.2b29000c.js";import"./download.1213368a.js";import"./base64Conver.08b9f4ec.js";import"./index.679e84c1.js";import"./index.14cbd24c.js";import"./index.4848492a.js";import"./uniqBy.08eb7f78.js";import"./index.02325821.js";import"./index.b6395a58.js";import"./onMountedOrActivated.276f36da.js";import"./useContentViewHeight.52d4bb94.js";import"./ArrowLeftOutlined.3ec12d2b.js";import"./index.10182938.js";const C=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",show:!1},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"\u5B57\u6BB533",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field44",component:"InputCountDown",label:"\u9A8C\u8BC1\u7801",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165aa",type:"array"}]},{field:"field441",component:"Input",label:"\u81EA\u5B9A\u4E49\u6821\u9A8C",colProps:{span:8},rules:[{required:!0,validator:(e,o)=>f(void 0,null,function*(){return o?o==="1"?Promise.reject("\u503C\u4E0D\u80FD\u4E3A1"):Promise.resolve():Promise.reject("\u503C\u4E0D\u80FD\u4E3A\u7A7A")}),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0,message:"\u8986\u76D6\u9ED8\u8BA4\u751F\u6210\u7684\u6821\u9A8C\u4FE1\u606F"}]},{field:"field8",component:"Input",label:"\u540E\u7AEF\u5F02\u6B65\u9A8C\u8BC1",colProps:{span:8},helpMessage:["\u672C\u5B57\u6BB5\u6F14\u793A\u5F02\u6B65\u9A8C\u8BC1","\u672C\u5730\u89C4\u5219\uFF1A\u5FC5\u987B\u586B\u5199","\u540E\u7AEF\u89C4\u5219\uFF1A\u4E0D\u80FD\u5305\u542Badmin"],rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E"},{validator(e,o){return new Promise((r,m)=>{V(o).then(()=>r()).catch(i=>{m(i.message||"\u9A8C\u8BC1\u5931\u8D25")})})}}]}],y=P({components:{BasicForm:b,CollapseContainer:E,PageWrapper:h},setup(){const{createMessage:e}=D(),[o,{validateFields:r,clearValidate:m,getFieldsValue:i,resetFields:d,setFieldsValue:t}]=g({labelWidth:120,schemas:C,actionColOptions:{span:24}});function l(){return f(this,null,function*(){try{const a=yield r()}catch(a){}})}function u(){return f(this,null,function*(){m()})}function s(){const a=i();e.success("values:"+JSON.stringify(a))}function F(){t({field1:1111,field5:["1"],field7:"1",field33:"2020-12-12",field3:"2020-12-12"})}return{register:o,schemas:C,handleSubmit:a=>{e.success("click search,values:"+JSON.stringify(a))},getFormValues:s,setFormValues:F,validateForm:l,resetValidate:u,resetFields:d}}}),q={class:"mb-4"};function S(e,o,r,m,i,d){const t=B("a-button"),l=B("BasicForm"),u=B("CollapseContainer"),s=B("PageWrapper");return _(),v(s,{title:"\u8868\u5355\u6821\u9A8C\u793A\u4F8B"},{default:n(()=>[k("div",q,[p(t,{onClick:e.validateForm,class:"mr-2"},{default:n(()=>[c(" \u624B\u52A8\u6821\u9A8C\u8868\u5355 ")]),_:1},8,["onClick"]),p(t,{onClick:e.resetValidate,class:"mr-2"},{default:n(()=>[c(" \u6E05\u7A7A\u6821\u9A8C\u4FE1\u606F ")]),_:1},8,["onClick"]),p(t,{onClick:e.getFormValues,class:"mr-2"},{default:n(()=>[c(" \u83B7\u53D6\u8868\u5355\u503C ")]),_:1},8,["onClick"]),p(t,{onClick:e.setFormValues,class:"mr-2"},{default:n(()=>[c(" \u8BBE\u7F6E\u8868\u5355\u503C ")]),_:1},8,["onClick"]),p(t,{onClick:e.resetFields,class:"mr-2"},{default:n(()=>[c(" \u91CD\u7F6E ")]),_:1},8,["onClick"])]),p(u,{title:"\u8868\u5355\u6821\u9A8C"},{default:n(()=>[p(l,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])]),_:1})]),_:1})}var Ve=A(y,[["render",S]]);export{Ve as default};