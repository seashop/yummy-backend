var H=Object.defineProperty,J=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var A=(n,a,t)=>a in n?H(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t,F=(n,a)=>{for(var t in a||(a={}))X.call(a,t)&&A(n,t,a[t]);if(V)for(var t of V(a))Y.call(a,t)&&A(n,t,a[t]);return n},E=(n,a)=>J(n,Q(a));var w=(n,a,t)=>new Promise((f,g)=>{var _=i=>{try{u(t.next(i))}catch(o){g(o)}},I=i=>{try{u(t.throw(i))}catch(o){g(o)}},u=i=>i.done?f(i.value):Promise.resolve(i.value).then(_,I);u((t=t.apply(n,a)).next())});import{e4 as Z,dU as v,a as ee,es as te,e5 as ne,v as ae,k as M,f as re,be as ie,av as ue,di as oe,ax as l,o as k,h as y,n as m,y as p,F as R,aA as se,j as q,z as T,ay as le,D as de}from"./index.c4bcccae.js";import{I as ce}from"./index.e603a1c1.js";import"./index.b4ace7ad.js";import{u as me}from"./index.283107d4.js";import{B as pe}from"./BasicForm.11e460f6.js";import{u as fe}from"./useForm.9fc31f81.js";import ge from"./Sku.7e413387.js";import{l as O}from"./inns.8aa7cee4.js";import{l as Ie}from"./category.aaafa021.js";import{u as he}from"./useComponentRegister.c4841e82.js";import{T as Fe}from"./index.d134e362.js";import{B as we,b as ke}from"./index.a97dab51.js";import{_ as _e,i as Ce,l as be}from"./PictureDrawer.f0f77004.js";import{g as Pe,u as Be,c as Se}from"./product.2f45fb91.js";he("Tinymce",Fe);const Ge=[{title:"\u5E8F\u53F7",dataIndex:"id",width:200},{title:"\u540D\u79F0",dataIndex:"title",width:200},{title:"\u5546\u6237",dataIndex:"innId",width:200},{title:"\u5206\u7C7B",dataIndex:"catId",width:180},{title:"\u4F7F\u7528SKU",dataIndex:"hasSku",width:180,format:(n,a)=>a!=null&&a.hasSku?"\u662F":"\u5426"},{title:"\u53D1\u5E03\u65F6\u95F4",dataIndex:"createdAt",width:180,format:(n,a)=>a!=null&&a.createdAt?Z(v(a==null?void 0:a.createdAt)):"-"},{title:"\u4EF7\u683C",dataIndex:"price",width:180},{title:"\u6392\u5E8F",dataIndex:"sortId",width:180},{title:"\u72B6\u6001",dataIndex:"status",width:180}],We=[{field:"innId",label:"\u5546\u6237",required:!0,component:"ApiSelect",componentProps:({formModel:n})=>({api:O,resultField:"inns",labelField:"title",valueField:"id",onOptionsChange:a=>{a.length>0&&(n.innId=a[0].value)}}),colProps:{span:8}},{field:"title",label:"\u540D\u79F0",component:"Input",colProps:{span:8}}],$=[{field:"title",label:"\u540D\u79F0",required:!0,component:"Input"},{field:"imgIds",label:"\u9910\u54C1\u56FE\u7247",required:!0,slot:"picDrawer",component:"Input"},{field:"innId",label:"\u6240\u5C5E\u5546\u6237",required:!0,component:"ApiSelect",componentProps:({formModel:n,schema:a})=>({api:O,resultField:"inns",labelField:"title",valueField:"id",onOptionsChange:t=>{t.length>0&&(a.defaultValue=t[0].value,n.innId=t[0].value)}})},{field:"catId",label:"\u6240\u5C5E\u5206\u7C7B",required:!0,component:"ApiSelect",componentProps:({formModel:n,schema:a})=>n.innId?{api:Ie,params:{innId:n.innId},resultField:"productCats",labelField:"title",valueField:"id",onOptionsChange:t=>{t.length>0&&(a.defaultValue=t[0].value,n.catId=t[0].value)}}:{}},{field:"sortId",label:"\u6392\u5E8F",required:!0,component:"InputNumber",colProps:{span:8},defaultValue:0},{field:"hasSku",label:"\u662F\u5426\u4F7F\u7528SKU",required:!0,component:"Switch",defaultValue:!1},{field:"price",label:"\u9500\u552E\u4EF7\u683C",required:!0,component:"InputNumber",colProps:{span:8}},{field:"stock",label:"\u603B\u5E93\u5B58",required:!0,component:"InputNumber",colProps:{span:12}},{field:"content",label:"\u5546\u54C1\u8BE6\u60C5",required:!0,component:"Tinymce",componentProps:{showImageUpload:!1},defaultValue:""}],De=ee({name:"ProductDrawer",components:{FormItemRest:te,Image:ce,BasicModal:we,BasicForm:pe,PictureDrawer:_e,BasicButton:ne,Sku:ge},emits:["success","register","back"],setup(n,{emit:a}){const t=ae({innId:"",sub:0,sku_comfirm:0,rdata:[],isUpdate:!0,images:[],rowId:""}),{createMessage:f}=de(),[g,{openDrawer:_}]=me();function I(){return t.innId=o().innId,_}const[u,{resetSchema:i,getFieldsValue:o,setFieldsValue:h,validate:S}]=fe({labelWidth:90,baseColProps:{span:24},schemas:$,showActionButtonGroup:!1}),[D,{setModalProps:s,closeModal:d}]=ke(e=>w(this,null,function*(){if(i($),t.rdata=void 0,t.rowId="",s({confirmLoading:!1}),t.isUpdate=!!(e!=null&&e.isUpdate),M(t.isUpdate)){const r=yield Pe(e.record.innId,e.record.id);t.rowId=r.id,(r==null?void 0:r.skuAttrIds.length)>0&&(h({hasSku:!0}),t.rdata=r.skuAttrIds),h(F({},r))}})),C=re(()=>M(t.isUpdate)?"\u7F16\u8F91\u5546\u54C1":"\u65B0\u589E\u5546\u54C1");function b(e,r){switch(e){case"innId":t.innId=r;break}}function N(e){return e!=null&&e.show_sku?(e.sku=P.list,e.sku_img_ids=P.sku_img_id):(e.sku=[],e.sku_img_ids=[]),e}function L(e){var r;for(let c=0;c<((r=t.images)==null?void 0:r.length);c++){const B=t.images[c];if(B.id==e)return Ce(B.id)}return""}function U(){return w(this,null,function*(){var e;t.images=(e=(yield be()).images)!=null?e:[]})}U();function j({data:e,items:r}){let c={};oe(c,e.field,(r==null?void 0:r.length)>0?r.map(B=>B.id):[]),h(c)}function x(e){return e.banner_imgs&&!e.banner_imgs[0]?(e.banner_imgs,f.error("\u672A\u9009\u62E9\u5546\u54C1\u56FE\u7247"),!1):e.fx_money*1>e.price*1?(f.error("\u5206\u9500\u4F63\u91D1\u5FC5\u987B\u5C0F\u4E8E\u9500\u552E\u4EF7\u683C"),!1):!0}function z(e){if(!!x(e))return(e==null?void 0:e.sku)!==void 0&&(e.price=e.sku[0].price,e.stock=e.sku[0].stock_num),e}function K(e){return E(F({},e),{id:t.rowId})}let P={};function G(e){return w(this,null,function*(){P=F({},e)})}function W(){return w(this,null,function*(){try{let e=yield S();if(e.show_sku&&(e=N(e)),s({confirmLoading:!0}),e=t.isUpdate?K(e):z(e),e===void 0)return;const r=t.isUpdate?yield Be(e):yield Se(e);e==null||e.value,d(),a("success",{result:r})}finally{s({confirmLoading:!1})}})}return E(F({},ie(t)),{registerModal:D,registerForm:u,getTitle:C,fieldValueChange:b,handleSkuResult:G,handleSubmit:W,registerDrawer:g,openPictureDrawer:I,getImageUrlById:L,handlePictureDrawerRealod:U,handlePictureDrawerSuccess:j})}});function Ee(n,a,t,f,g,_){const I=l("Image"),u=l("BasicButton"),i=l("Sku"),o=l("FormItemRest"),h=l("BasicForm"),S=l("BasicModal"),D=l("PictureDrawer");return k(),y(R,null,[m(S,le(n.$attrs,{onRegister:n.registerModal,showFooter:"",title:n.getTitle,width:"500px",onOk:n.handleSubmit}),{default:p(()=>[m(h,{onRegister:n.registerForm,onFieldValueChange:n.fieldValueChange},{picDrawer:p(({model:s,field:d})=>{var C;return[((C=s[d])==null?void 0:C.length)>0?(k(),y(R,{key:0},[(k(!0),y(R,null,se(s[d],b=>(k(),q(I,{key:b,src:n.getImageUrlById(b),width:60,preview:!1},null,8,["src"]))),128)),m(u,{onClick:()=>s[d]=0},{default:p(()=>[T("\u5220\u9664")]),_:2},1032,["onClick"])],64)):(k(),q(u,{key:1,onClick:()=>n.openPictureDrawer()(!0,{field:d})},{default:p(()=>[T(" \u9009\u62E9\u56FE\u7247 ")]),_:2},1032,["onClick"]))]}),sku:p(({})=>[m(o,null,{default:p(()=>[m(i,{rdata:n.rdata,onResult:n.handleSkuResult},null,8,["rdata","onResult"])]),_:1})]),_:1},8,["onRegister","onFieldValueChange"])]),_:1},16,["onRegister","title","onOk"]),m(D,{innId:n.innId,images:n.images,limit:3,onRegister:n.registerDrawer,onReload:n.handlePictureDrawerRealod,onSuccess:n.handlePictureDrawerSuccess},null,8,["innId","images","onRegister","onReload","onSuccess"])],64)}var ye=ue(De,[["render",Ee]]),He=Object.freeze(Object.defineProperty({__proto__:null,default:ye},Symbol.toStringTag,{value:"Module"}));export{ye as P,He as a,Ge as c,We as s};