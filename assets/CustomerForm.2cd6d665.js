import{B as C}from"./BasicForm.c77a22ea.js";import{u as B}from"./useForm.4855708a.js";import{av as g,a as E,cD as F,I as n,ax as e,o as h,j as v,y as p,n as i,bT as b,D as A}from"./index.332f1f61.js";import{P}from"./index.fb09cd3e.js";/* empty css              *//* empty css               */import"./index.1e4861a7.js";import"./index.94c8f3b7.js";import"./Checkbox.d36bce60.js";import"./index.ee5847bb.js";import"./index.7a63a8fa.js";import"./index.0c8a73e2.js";import"./index.90f61e6e.js";import"./index.f67d6b77.js";import"./useFormItem.937635d1.js";import"./index.3dd7f5e6.js";import"./get.62966e6c.js";import"./index.569fc2b5.js";import"./eagerComputed.b4fd04a8.js";import"./index.85c6ade0.js";import"./_baseIteratee.b39208fd.js";import"./DeleteOutlined.24a033a9.js";import"./index.95215ebf.js";import"./useRefs.32186409.js";import"./Form.6b7ab19e.js";import"./Col.c24e698a.js";import"./useFlexGapSupport.1de4ef65.js";import"./useSize.ccb706e0.js";import"./transButton.dc121a8e.js";import"./index.461a54c8.js";import"./index.754223f0.js";import"./useWindowSizeFn.10a47dfe.js";import"./FullscreenOutlined.a861df37.js";import"./index.d6e61de6.js";import"./index.6faba884.js";import"./uuid.2b29000c.js";import"./download.6a29d639.js";import"./base64Conver.08b9f4ec.js";import"./index.683bc381.js";import"./index.aa732719.js";import"./index.2b21a1d3.js";import"./uniqBy.b04fb3f0.js";import"./index.f067aad0.js";import"./index.051b3cdd.js";import"./onMountedOrActivated.ae6205f0.js";import"./useContentViewHeight.ab3b2185.js";import"./ArrowLeftOutlined.2a6c8c6a.js";import"./index.3d54a3f8.js";const u=[{field:"field1",component:"Input",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:o,field:t})=>b(n,{placeholder:"\u8BF7\u8F93\u5165",value:o[t],onChange:r=>{o[t]=r.target.value}})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=E({components:{BasicForm:C,CollapseContainer:F,PageWrapper:P,[n.name]:n},setup(){const{createMessage:o}=A(),[t,{setProps:r}]=B({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:t,schemas:u,handleSubmit:a=>{o.success("click search,values:"+JSON.stringify(a))},setProps:r}}});function x(o,t,r,a,I,W){const l=e("a-input"),c=e("BasicForm"),d=e("CollapseContainer"),f=e("PageWrapper");return h(),v(f,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:p(()=>[i(d,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:p(()=>[i(c,{onRegister:o.register,onSubmit:o.handleSubmit},{f3:p(({model:s,field:m})=>[i(l,{value:s[m],"onUpdate:value":_=>s[m]=_,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var Po=g(S,[["render",x]]);export{Po as default};
