import{av as M,a as $,cH as U,b9 as C,bu as D,aF as b,b as O,c as N,r as S,f as x,ax as t,o as n,h as A,n as r,y as d,j as f,l as _,i as a,q as s,t as E,F as P,aO as R}from"./index.897eff97.js";import{D as V}from"./siteSetting.c485f07c.js";import{u as B}from"./useHeaderSetting.865a7058.js";import{u as F}from"./index.98fb7ffc.js";import{h as T}from"./header.d801b988.js";import{c as y}from"./index.abf98b77.js";import"./useWindowSizeFn.1986bc84.js";import"./FullscreenOutlined.61308bd0.js";import"./index.a0c7f509.js";import"./useContentViewHeight.f38aad7b.js";import"./uniqBy.d00325ce.js";import"./_baseIteratee.13226526.js";import"./get.12f2540a.js";import"./index.9a3dd532.js";import"./index.6360dd90.js";import"./useRefs.2622c820.js";import"./PlusOutlined.c225e82e.js";import"./RedoOutlined.ef33b52d.js";import"./index.889c5747.js";import"./lock.7393190b.js";const H=$({name:"UserDropdown",components:{Dropdown:U,Menu:C,MenuItem:y(()=>D(()=>import("./DropMenuItem.01e0ed82.js"),["assets/DropMenuItem.01e0ed82.js","assets/index.897eff97.js","assets/index.e2615e3c.css"])),MenuDivider:C.Divider,LockAction:y(()=>D(()=>import("./LockModal.a698a8a6.js"),["assets/LockModal.a698a8a6.js","assets/LockModal.0068f88c.css","assets/index.251e5d3f.css","assets/index.a18cc309.css","assets/index.897eff97.js","assets/index.e2615e3c.css","assets/index.98fb7ffc.js","assets/index.d0b877f3.css","assets/useWindowSizeFn.1986bc84.js","assets/FullscreenOutlined.61308bd0.js","assets/BasicForm.c9112e09.js","assets/BasicForm.4b70d73d.css","assets/index.1a3584cc.js","assets/index.3a3c1369.css","assets/index.e6ab6a99.js","assets/index.a3d94619.css","assets/Checkbox.b0115b6e.js","assets/index.f4c3ae7f.js","assets/index.2ce55b64.css","assets/index.dc85282d.js","assets/index.614d3a6c.css","assets/index.0aec3bad.js","assets/index.49ada229.css","assets/index.60f6a6f9.js","assets/index.47f7c782.css","assets/index.65a3c605.js","assets/index.579bd49e.css","assets/useFormItem.1fc06be9.js","assets/index.fa5b7037.js","assets/get.12f2540a.js","assets/index.17375207.js","assets/index.0558a8a0.css","assets/eagerComputed.feaabfb7.js","assets/index.332bc6f0.js","assets/index.faa73878.css","assets/_baseIteratee.13226526.js","assets/DeleteOutlined.9c2908e4.js","assets/index.db9478fd.js","assets/index.90320c17.css","assets/useRefs.2622c820.js","assets/Form.c7b93c30.js","assets/Col.aaf3a498.js","assets/useFlexGapSupport.d180d1f9.js","assets/useSize.9a44880f.js","assets/transButton.c4f208e8.js","assets/index.861cf7a1.js","assets/index.cd256673.css","assets/index.12a78234.js","assets/index.9d09be4d.css","assets/index.86d0d66d.js","assets/index.0ec4bbd2.css","assets/uuid.2b29000c.js","assets/download.a8bc32d2.js","assets/base64Conver.08b9f4ec.js","assets/index.4cbf34e1.js","assets/index.cb030764.css","assets/index.936f87ab.js","assets/index.7b8b5e30.css","assets/index.5c454517.js","assets/uniqBy.d00325ce.js","assets/useForm.68d81aa3.js","assets/lock.7393190b.js","assets/header.d801b988.js"]))},props:{theme:b.oneOf(["dark","light"])},setup(){const{prefixCls:e}=O("header-user-dropdown"),{t:g}=N(),{getShowDoc:k,getUseLockPage:h}=B(),i=S(),v=x(()=>{const{realName:u="",avatar:L,desc:I}=i.getUserInfo||{};return{realName:u,avatar:L||T,desc:I}}),[o,{openModal:l}]=F();function c(){l(!0)}function p(){i.confirmLoginOut()}function m(){R(V)}function w(u){switch(u.key){case"logout":p();break;case"doc":m();break;case"lock":c();break}}return{prefixCls:e,t:g,getUserInfo:v,handleMenuClick:w,getShowDoc:k,register:o,getUseLockPage:h}}}),j=["src"];function q(e,g,k,h,i,v){const o=t("MenuItem"),l=t("MenuDivider"),c=t("Menu"),p=t("Dropdown"),m=t("LockAction");return n(),A(P,null,[r(p,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:d(()=>[r(c,{onClick:e.handleMenuClick},{default:d(()=>[e.getShowDoc?(n(),f(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):_("",!0),e.getShowDoc?(n(),f(l,{key:1})):_("",!0),e.getUseLockPage?(n(),f(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):_("",!0),r(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:d(()=>[a("span",{class:s([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:s(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,j),a("span",{class:s(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:s([`${e.prefixCls}__name  `,"truncate"])},E(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),r(m,{onRegister:e.register},null,8,["onRegister"])],64)}var me=M(H,[["render",q]]);export{me as default};
