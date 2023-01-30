import{av as M,a as $,cH as U,b9 as C,bu as D,aF as b,b as O,c as N,r as S,f as x,ax as t,o as n,h as A,n as r,y as d,j as f,l as _,i as a,q as s,t as E,F as P,aO as R}from"./index.332f1f61.js";import{D as V}from"./siteSetting.c485f07c.js";import{u as B}from"./useHeaderSetting.52989af0.js";import{u as F}from"./index.754223f0.js";import{h as T}from"./header.d801b988.js";import{c as y}from"./index.415f21e9.js";import"./useWindowSizeFn.10a47dfe.js";import"./FullscreenOutlined.a861df37.js";import"./index.8a0fcc6d.js";import"./useContentViewHeight.ab3b2185.js";import"./uniqBy.b04fb3f0.js";import"./_baseIteratee.b39208fd.js";import"./get.62966e6c.js";import"./index.7cb50b61.js";import"./index.14a8cf9c.js";import"./useRefs.32186409.js";import"./PlusOutlined.81d72c9e.js";import"./RedoOutlined.ddeccf26.js";import"./index.c8c40cb4.js";import"./lock.e70ee59b.js";const H=$({name:"UserDropdown",components:{Dropdown:U,Menu:C,MenuItem:y(()=>D(()=>import("./DropMenuItem.d6b94867.js"),["assets/DropMenuItem.d6b94867.js","assets/index.332f1f61.js","assets/index.e2615e3c.css"])),MenuDivider:C.Divider,LockAction:y(()=>D(()=>import("./LockModal.68234397.js"),["assets/LockModal.68234397.js","assets/LockModal.0068f88c.css","assets/index.251e5d3f.css","assets/index.a18cc309.css","assets/index.332f1f61.js","assets/index.e2615e3c.css","assets/index.754223f0.js","assets/index.d0b877f3.css","assets/useWindowSizeFn.10a47dfe.js","assets/FullscreenOutlined.a861df37.js","assets/BasicForm.c77a22ea.js","assets/BasicForm.4b70d73d.css","assets/index.1e4861a7.js","assets/index.3a3c1369.css","assets/index.94c8f3b7.js","assets/index.a3d94619.css","assets/Checkbox.d36bce60.js","assets/index.ee5847bb.js","assets/index.2ce55b64.css","assets/index.7a63a8fa.js","assets/index.614d3a6c.css","assets/index.0c8a73e2.js","assets/index.49ada229.css","assets/index.90f61e6e.js","assets/index.47f7c782.css","assets/index.f67d6b77.js","assets/index.579bd49e.css","assets/useFormItem.937635d1.js","assets/index.3dd7f5e6.js","assets/get.62966e6c.js","assets/index.569fc2b5.js","assets/index.0558a8a0.css","assets/eagerComputed.b4fd04a8.js","assets/index.85c6ade0.js","assets/index.faa73878.css","assets/_baseIteratee.b39208fd.js","assets/DeleteOutlined.24a033a9.js","assets/index.95215ebf.js","assets/index.90320c17.css","assets/useRefs.32186409.js","assets/Form.6b7ab19e.js","assets/Col.c24e698a.js","assets/useFlexGapSupport.1de4ef65.js","assets/useSize.ccb706e0.js","assets/transButton.dc121a8e.js","assets/index.461a54c8.js","assets/index.cd256673.css","assets/index.d6e61de6.js","assets/index.9d09be4d.css","assets/index.6faba884.js","assets/index.0ec4bbd2.css","assets/uuid.2b29000c.js","assets/download.6a29d639.js","assets/base64Conver.08b9f4ec.js","assets/index.683bc381.js","assets/index.cb030764.css","assets/index.aa732719.js","assets/index.7b8b5e30.css","assets/index.2b21a1d3.js","assets/uniqBy.b04fb3f0.js","assets/useForm.4855708a.js","assets/lock.e70ee59b.js","assets/header.d801b988.js"]))},props:{theme:b.oneOf(["dark","light"])},setup(){const{prefixCls:e}=O("header-user-dropdown"),{t:g}=N(),{getShowDoc:k,getUseLockPage:h}=B(),i=S(),v=x(()=>{const{realName:u="",avatar:L,desc:I}=i.getUserInfo||{};return{realName:u,avatar:L||T,desc:I}}),[o,{openModal:l}]=F();function c(){l(!0)}function p(){i.confirmLoginOut()}function m(){R(V)}function w(u){switch(u.key){case"logout":p();break;case"doc":m();break;case"lock":c();break}}return{prefixCls:e,t:g,getUserInfo:v,handleMenuClick:w,getShowDoc:k,register:o,getUseLockPage:h}}}),j=["src"];function q(e,g,k,h,i,v){const o=t("MenuItem"),l=t("MenuDivider"),c=t("Menu"),p=t("Dropdown"),m=t("LockAction");return n(),A(P,null,[r(p,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:d(()=>[r(c,{onClick:e.handleMenuClick},{default:d(()=>[e.getShowDoc?(n(),f(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):_("",!0),e.getShowDoc?(n(),f(l,{key:1})):_("",!0),e.getUseLockPage?(n(),f(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):_("",!0),r(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:d(()=>[a("span",{class:s([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:s(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,j),a("span",{class:s(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:s([`${e.prefixCls}__name  `,"truncate"])},E(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),r(m,{onRegister:e.register},null,8,["onRegister"])],64)}var me=M(H,[["render",q]]);export{me as default};
