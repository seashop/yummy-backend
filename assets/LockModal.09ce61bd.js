var f=(o,l,r)=>new Promise((c,s)=>{var d=e=>{try{t(r.next(e))}catch(i){s(i)}},a=e=>{try{t(r.throw(e))}catch(i){s(i)}},t=e=>e.done?c(e.value):Promise.resolve(e.value).then(d,a);t((r=r.apply(o,l)).next())});import{av as y,a as w,c as $,b as F,r as L,f as _,ax as u,o as M,j as S,y as g,i as p,q as m,t as k,n as h,z as I,ay as b}from"./index.c4bcccae.js";import{B as N,b as R}from"./index.a97dab51.js";import{B as P}from"./BasicForm.11e460f6.js";import{u as U}from"./useForm.9fc31f81.js";import{u as V}from"./lock.712a3518.js";import{h as q}from"./header.d801b988.js";import"./useWindowSizeFn.4ec568b8.js";import"./FullscreenOutlined.83eb1df3.js";/* empty css              *//* empty css               */import"./index.ce8ec429.js";import"./index.ba0073c4.js";import"./Checkbox.6855b002.js";import"./index.57c3dc31.js";import"./index.3d13f588.js";import"./index.0a2bde25.js";import"./index.e7f07382.js";import"./index.fc21d40d.js";import"./useFormItem.18f8f3df.js";import"./index.5b91ae9f.js";import"./get.d6c8fb63.js";import"./index.8adaff47.js";import"./eagerComputed.d0b9ee41.js";import"./index.b4ace7ad.js";import"./_baseIteratee.ea415784.js";import"./DeleteOutlined.42e11d46.js";import"./index.e182d5a1.js";import"./useRefs.9398ff58.js";import"./Form.fcad3fe0.js";import"./Col.843b66ed.js";import"./useFlexGapSupport.d852bf74.js";import"./useSize.1344b7d2.js";import"./transButton.80503396.js";import"./index.891c6174.js";import"./index.c5a9aa2d.js";import"./index.e603a1c1.js";import"./uuid.2b29000c.js";import"./download.3199245e.js";import"./base64Conver.08b9f4ec.js";import"./index.587a0685.js";import"./index.8fb21350.js";import"./index.e291623e.js";import"./uniqBy.4b200e6e.js";const z=w({name:"LockModal",components:{BasicModal:N,BasicForm:P},setup(){const{t:o}=$(),{prefixCls:l}=F("header-lock-modal"),r=L(),c=V(),s=_(()=>{var n;return(n=r.getUserInfo)==null?void 0:n.realName}),[d,{closeModal:a}]=R(),[t,{validateFields:e,resetFields:i}]=U({showActionButtonGroup:!1,schemas:[{field:"password",label:o("layout.header.lockScreenPassword"),colProps:{span:24},component:"InputPassword",required:!0}]});function v(){return f(this,null,function*(){const C=(yield e()).password;a(),c.setLockInfo({isLock:!0,pwd:C}),yield i()})}const B=_(()=>{const{avatar:n}=r.getUserInfo;return n||q});return{t:o,prefixCls:l,getRealName:s,register:d,registerForm:t,handleLock:v,avatar:B}}}),D=["src"];function j(o,l,r,c,s,d){const a=u("BasicForm"),t=u("a-button"),e=u("BasicModal");return M(),S(e,b({footer:null,title:o.t("layout.header.lockScreen")},o.$attrs,{class:o.prefixCls,onRegister:o.register}),{default:g(()=>[p("div",{class:m(`${o.prefixCls}__entry`)},[p("div",{class:m(`${o.prefixCls}__header`)},[p("img",{src:o.avatar,class:m(`${o.prefixCls}__header-img`)},null,10,D),p("p",{class:m(`${o.prefixCls}__header-name`)},k(o.getRealName),3)],2),h(a,{onRegister:o.registerForm},null,8,["onRegister"]),p("div",{class:m(`${o.prefixCls}__footer`)},[h(t,{type:"primary",block:"",class:"mt-2",onClick:o.handleLock},{default:g(()=>[I(k(o.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var No=y(z,[["render",j]]);export{No as default};