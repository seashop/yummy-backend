var y=(a,n,s)=>new Promise((i,b)=>{var c=r=>{try{u(s.next(r))}catch(o){b(o)}},m=r=>{try{u(s.throw(r))}catch(o){b(o)}},u=r=>r.done?i(r.value):Promise.resolve(r.value).then(c,m);u((s=s.apply(a,n)).next())});import{av as B,a as k,cD as E,s as g,ao as A,ax as f,bR as $,w as D,o as _,j as C,y as p,i as T,n as F,z as v,h as P,F as w,aA as K,ay as V,dZ as R,D as S}from"./index.d50a9800.js";import{T as h}from"./index.aaa1fc50.js";import{P as W}from"./index.0bd7a6a1.js";import{B as j}from"./BasicForm.b02f3207.js";import{u as M}from"./useForm.76075c71.js";import"./useRefs.24425adc.js";import"./PlusOutlined.1e6c009a.js";import"./index.02325821.js";import"./index.b6395a58.js";import"./useSize.381fa398.js";import"./eagerComputed.7b567627.js";import"./onMountedOrActivated.276f36da.js";import"./useWindowSizeFn.974b14b8.js";import"./useContentViewHeight.52d4bb94.js";import"./ArrowLeftOutlined.3ec12d2b.js";import"./index.10182938.js";import"./transButton.1f86bfc1.js";/* empty css              *//* empty css               */import"./index.f2d505bc.js";import"./index.9bbde0e5.js";import"./Checkbox.ac809a47.js";import"./index.c240df87.js";import"./index.11b93be2.js";import"./index.406f84fe.js";import"./index.16714cd7.js";import"./index.118afb88.js";import"./useFormItem.a0990f77.js";import"./index.0698dd78.js";import"./get.87e704f3.js";import"./index.c693835c.js";import"./index.e56403fd.js";import"./_baseIteratee.9a09b333.js";import"./DeleteOutlined.e72cc543.js";import"./index.4d8ea057.js";import"./Form.a90eefb7.js";import"./Col.56b3f0ca.js";import"./useFlexGapSupport.7be7a3d1.js";import"./index.ad2e4158.js";import"./index.4900e588.js";import"./FullscreenOutlined.43b089d4.js";import"./index.7f7f4e74.js";import"./index.049dbb8d.js";import"./uuid.2b29000c.js";import"./download.1213368a.js";import"./base64Conver.08b9f4ec.js";import"./index.679e84c1.js";import"./index.14cbd24c.js";import"./index.4848492a.js";import"./uniqBy.08eb7f78.js";const N=k({name:"TabsFormDemo",components:{Tabs:h,TabPane:h.TabPane,PageWrapper:W,CollapseContainer:E,BasicForm:j},setup(){const{createMessage:a}=S(),n=g("tabs2"),s=g(!1),i=[],b={showActionButtonGroup:!1,labelWidth:100},c={};for(let o=1;o<=5;++o){const e=`tabs${o}`,l=[],d={};for(let t=1;t<=8;++t)l.push({field:`${e}.field${t}`,label:`${e}-field${t}`,component:"Input",colProps:{span:24}}),d[`field${t}`]=`field: ${e}.field${t}, default value`;c[e]=d,i.push({key:e,tab:e,forceRender:!0,Form:M(Object.assign({schemas:l},b))})}function m(){return y(this,null,function*(){for(const o of i){const{resetFields:e}=o.Form[1];yield e()}})}function u(){return y(this,null,function*(){let o="";s.value=!0;try{const e={};for(const l of i){o=l.key;const{validate:d,getFieldsValue:t}=l.Form[1];yield d(),R(e,t())}a.success("\u63D0\u4EA4\u6210\u529F\uFF01\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B")}catch(e){n.value=o}finally{s.value=!1}})}function r(){return y(this,null,function*(){for(const o of i){const{setFieldsValue:e}=o.Form[1];yield e(c)}})}return{omit:A,loading:s,activeKey:n,tabsFormSchema:i,handleReset:m,handleSubmit:u,handleSetValues:r}}}),z={class:"mb-4"};function G(a,n,s,i,b,c){const m=f("a-button"),u=f("BasicForm"),r=f("TabPane"),o=f("Tabs"),e=f("CollapseContainer"),l=f("PageWrapper"),d=$("loading");return D((_(),C(l,{title:"\u6807\u7B7E\u9875+\u591A\u7EA7field\u8868\u5355"},{default:p(()=>[T("div",z,[F(m,{onClick:a.handleReset,class:"mr-2"},{default:p(()=>[v(" \u91CD\u7F6E\u8868\u5355 ")]),_:1},8,["onClick"]),F(m,{onClick:a.handleSetValues,class:"mr-2"},{default:p(()=>[v(" \u8BBE\u7F6E\u9ED8\u8BA4\u503C ")]),_:1},8,["onClick"]),F(m,{onClick:a.handleSubmit,class:"mr-2",type:"primary"},{default:p(()=>[v(" \u63D0\u4EA4\u8868\u5355 ")]),_:1},8,["onClick"])]),F(e,{title:"\u6807\u7B7E\u9875+\u591A\u7EA7field\u8868\u5355"},{default:p(()=>[F(o,{activeKey:a.activeKey,"onUpdate:activeKey":n[0]||(n[0]=t=>a.activeKey=t)},{default:p(()=>[(_(!0),P(w,null,K(a.tabsFormSchema,t=>(_(),C(r,V({key:t.key},a.omit(t,["Form","key"])),{default:p(()=>[F(u,{onRegister:t.Form[0]},null,8,["onRegister"])]),_:2},1040))),128))]),_:1},8,["activeKey"])]),_:1})]),_:1})),[[d,a.loading]])}var Ne=B(N,[["render",G]]);export{Ne as default};