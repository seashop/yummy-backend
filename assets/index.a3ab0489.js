var c=(e,p,r)=>new Promise((n,m)=>{var s=t=>{try{o(r.next(t))}catch(i){m(i)}},a=t=>{try{o(r.throw(t))}catch(i){m(i)}},o=t=>t.done?n(t.value):Promise.resolve(t.value).then(s,a);o((r=r.apply(e,p)).next())});import{B as h}from"./TableImg.8c3ea297.js";import{T as b}from"./BasicForm.b02f3207.js";import{u as g}from"./useTable.ce0f5d89.js";import{l as C}from"./order.17fce07f.js";import{u as T}from"./index.4900e588.js";import{D as _,c as B,s as M}from"./DetailModal.75768575.js";import{av as S,a as k,ax as l,o as d,h as y,n as u,y as D,j as w,l as x}from"./index.d50a9800.js";import"./index.9bbde0e5.js";import"./Checkbox.ac809a47.js";import"./index.c240df87.js";import"./index.c693835c.js";import"./eagerComputed.7b567627.js";import"./useForm.76075c71.js";import"./index.0bd7a6a1.js";import"./index.02325821.js";import"./index.b6395a58.js";import"./useSize.381fa398.js";import"./onMountedOrActivated.276f36da.js";import"./useWindowSizeFn.974b14b8.js";import"./useContentViewHeight.52d4bb94.js";import"./ArrowLeftOutlined.3ec12d2b.js";import"./index.10182938.js";import"./transButton.1f86bfc1.js";import"./index.16714cd7.js";import"./index.118afb88.js";import"./index.11b93be2.js";import"./index.406f84fe.js";import"./uuid.2b29000c.js";import"./index.e56403fd.js";import"./_baseIteratee.9a09b333.js";import"./get.87e704f3.js";import"./DeleteOutlined.e72cc543.js";import"./index.4d8ea057.js";import"./useRefs.24425adc.js";import"./Form.a90eefb7.js";import"./Col.56b3f0ca.js";import"./useFlexGapSupport.7be7a3d1.js";import"./index.f2d505bc.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.089d0fa2.js";import"./FullscreenOutlined.43b089d4.js";import"./index.049dbb8d.js";import"./fromPairs.84aabb58.js";import"./index.0698dd78.js";import"./scrollTo.ebc992b0.js";import"./index.f3371471.js";/* empty css              *//* empty css               */import"./useFormItem.a0990f77.js";import"./index.ad2e4158.js";import"./index.7f7f4e74.js";import"./download.1213368a.js";import"./base64Conver.08b9f4ec.js";import"./index.679e84c1.js";import"./index.14cbd24c.js";import"./index.4848492a.js";import"./uniqBy.08eb7f78.js";import"./index.67ef7a53.js";import"./index.caf1eb53.js";import"./level.be0a1fb9.js";import"./PictureDrawer.31aa45e2.js";import"./index.aaa1fc50.js";import"./PlusOutlined.1e6c009a.js";const v=k({name:"OrderManagement",components:{BasicTable:h,DetailModal:_,TableAction:b},setup(){const[e,{openModal:p}]=T(),[r,{reload:n}]=g({title:"\u8BA2\u5355\u5217\u8868",api:C,fetchSetting:{listField:"orders"},columns:B,formConfig:{labelWidth:120,schemas:M},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function m(o){p(!0,{record:o,isUpdate:!0})}function s(o){}function a(t){return c(this,arguments,function*({values:o}){const i=yield updateOrder(o.id,o);n()})}return{registerTable:r,registerModal:e,handleEdit:m,handleDelete:s,handleUpdateSuccess:a}}});function A(e,p,r,n,m,s){const a=l("TableAction"),o=l("BasicTable"),t=l("DetailModal");return d(),y("div",null,[u(o,{onRegister:e.registerTable},{bodyCell:D(({column:i,record:f})=>[i.key==="action"?(d(),w(a,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,f)}]},null,8,["actions"])):x("",!0)]),_:1},8,["onRegister"]),u(t,{onRegister:e.registerModal,onSuccess:e.handleUpdateSuccess},null,8,["onRegister","onSuccess"])])}var qo=S(v,[["render",A]]);export{qo as default};
