import{B as C}from"./BasicForm.a2791009.js";import{u as B}from"./useForm.ffed4a20.js";import{av as g,a as E,cD as F,I as n,ax as e,o as h,j as v,y as p,n as i,bT as b,D as A}from"./index.05f21f62.js";import{P}from"./index.eed95980.js";/* empty css              *//* empty css               */import"./index.12871986.js";import"./index.6c5e1569.js";import"./Checkbox.1e5d27b2.js";import"./index.a55a4d9b.js";import"./index.40ef4a43.js";import"./index.12aefbc8.js";import"./index.85eb05f3.js";import"./index.4ad5e6f5.js";import"./useFormItem.7678ea25.js";import"./index.fa23812a.js";import"./get.ab1579f8.js";import"./index.16d4d7e8.js";import"./eagerComputed.9ec758bd.js";import"./index.3b87c3c2.js";import"./_baseIteratee.94f70879.js";import"./DeleteOutlined.f664363c.js";import"./index.9a120b4f.js";import"./useRefs.1930efb1.js";import"./Form.823f88cb.js";import"./Col.8f679cd2.js";import"./useFlexGapSupport.ed791f76.js";import"./useSize.b22e5468.js";import"./transButton.88461f3e.js";import"./index.79c0f937.js";import"./index.519bbcb9.js";import"./useWindowSizeFn.440a5bdc.js";import"./FullscreenOutlined.b131f636.js";import"./index.75114586.js";import"./index.4d00782a.js";import"./uuid.2b29000c.js";import"./download.14350a99.js";import"./base64Conver.08b9f4ec.js";import"./index.54c1b7b5.js";import"./index.b7ce9023.js";import"./index.e2c79e1e.js";import"./uniqBy.bea82599.js";import"./index.368e30ed.js";import"./index.d1c5d9bc.js";import"./onMountedOrActivated.b7769380.js";import"./useContentViewHeight.054eb2bc.js";import"./ArrowLeftOutlined.f2895767.js";import"./index.44f008ce.js";const u=[{field:"field1",component:"Input",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:o,field:t})=>b(n,{placeholder:"\u8BF7\u8F93\u5165",value:o[t],onChange:r=>{o[t]=r.target.value}})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=E({components:{BasicForm:C,CollapseContainer:F,PageWrapper:P,[n.name]:n},setup(){const{createMessage:o}=A(),[t,{setProps:r}]=B({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:t,schemas:u,handleSubmit:a=>{o.success("click search,values:"+JSON.stringify(a))},setProps:r}}});function x(o,t,r,a,I,W){const l=e("a-input"),c=e("BasicForm"),d=e("CollapseContainer"),f=e("PageWrapper");return h(),v(f,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:p(()=>[i(d,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:p(()=>[i(c,{onRegister:o.register,onSubmit:o.handleSubmit},{f3:p(({model:s,field:m})=>[i(l,{value:s[m],"onUpdate:value":_=>s[m]=_,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var Po=g(S,[["render",x]]);export{Po as default};
