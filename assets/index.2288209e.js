var c=(l,p,r)=>new Promise((a,e)=>{var s=t=>{try{o(r.next(t))}catch(i){e(i)}},n=t=>{try{o(r.throw(t))}catch(i){e(i)}},o=t=>t.done?a(t.value):Promise.resolve(t.value).then(s,n);o((r=r.apply(l,p)).next())});import{B as h}from"./TableImg.06955667.js";import{T as _}from"./BasicForm.a2791009.js";import{u as g}from"./useTable.a0a7a9bc.js";import{l as C}from"./order.2f8cd945.js";import{u as b}from"./index.519bbcb9.js";import{c as k,s as x,_ as y}from"./DetailModal.fc73fe1e.js";import{a as B,o as u,h as S,n as d,y as T,j as w,k as m,l as F}from"./index.05f21f62.js";import"./index.6c5e1569.js";import"./Checkbox.1e5d27b2.js";import"./index.a55a4d9b.js";import"./index.16d4d7e8.js";import"./eagerComputed.9ec758bd.js";import"./useForm.ffed4a20.js";import"./index.eed95980.js";import"./index.368e30ed.js";import"./index.d1c5d9bc.js";import"./useSize.b22e5468.js";import"./onMountedOrActivated.b7769380.js";import"./useWindowSizeFn.440a5bdc.js";import"./useContentViewHeight.054eb2bc.js";import"./ArrowLeftOutlined.f2895767.js";import"./index.44f008ce.js";import"./transButton.88461f3e.js";import"./index.85eb05f3.js";import"./index.4ad5e6f5.js";import"./index.40ef4a43.js";import"./index.12aefbc8.js";import"./uuid.2b29000c.js";import"./index.3b87c3c2.js";import"./_baseIteratee.94f70879.js";import"./get.ab1579f8.js";import"./DeleteOutlined.f664363c.js";import"./index.9a120b4f.js";import"./useRefs.1930efb1.js";import"./Form.823f88cb.js";import"./Col.8f679cd2.js";import"./useFlexGapSupport.ed791f76.js";import"./index.12871986.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.517aff61.js";import"./FullscreenOutlined.b131f636.js";import"./index.4d00782a.js";import"./fromPairs.84aabb58.js";import"./index.fa23812a.js";import"./scrollTo.0ddde201.js";import"./index.b1014795.js";/* empty css              *//* empty css               */import"./useFormItem.7678ea25.js";import"./index.79c0f937.js";import"./index.75114586.js";import"./download.14350a99.js";import"./base64Conver.08b9f4ec.js";import"./index.54c1b7b5.js";import"./index.b7ce9023.js";import"./index.e2c79e1e.js";import"./uniqBy.bea82599.js";import"./index.02c398aa.js";import"./index.fea0c2f3.js";import"./PictureDrawer.b95eab52.js";import"./index.61c63259.js";import"./PlusOutlined.d7f809b2.js";const Do=B({__name:"index",setup(l){const[p,{openModal:r}]=b(),[a,{reload:e}]=g({title:"\u8BA2\u5355\u5217\u8868",api:C,fetchSetting:{listField:"orders"},columns:k,formConfig:{labelWidth:120,schemas:x},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function s(o){r(!0,{record:o,isUpdate:!0})}function n(t){return c(this,arguments,function*({values:o}){e()})}return(o,t)=>(u(),S("div",null,[d(m(h),{onRegister:m(a)},{bodyCell:T(({column:i,record:f})=>[i.key==="action"?(u(),w(m(_),{key:0,actions:[{icon:"clarity:note-edit-line",onClick:s.bind(null,f)}]},null,8,["actions"])):F("",!0)]),_:1},8,["onRegister"]),d(y,{onRegister:m(p),onSuccess:n},null,8,["onRegister"])]))}});export{Do as default};
