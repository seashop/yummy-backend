import{B as b}from"./TableImg.06955667.js";import{T as C}from"./BasicForm.a2791009.js";import{u as g}from"./useTable.a0a7a9bc.js";import{d as T}from"./system.683028bd.js";import{u as D}from"./index.02c398aa.js";import{M as _,c as w,s as S}from"./MenuDrawer.5516ba8e.js";import{av as k,a as B,ax as t,o as h,h as F,n as s,y as p,z as y,j as M,l as v,ak as x}from"./index.05f21f62.js";import"./index.6c5e1569.js";import"./Checkbox.1e5d27b2.js";import"./index.a55a4d9b.js";import"./index.16d4d7e8.js";import"./eagerComputed.9ec758bd.js";import"./useForm.ffed4a20.js";import"./index.eed95980.js";import"./index.368e30ed.js";import"./index.d1c5d9bc.js";import"./useSize.b22e5468.js";import"./onMountedOrActivated.b7769380.js";import"./useWindowSizeFn.440a5bdc.js";import"./useContentViewHeight.054eb2bc.js";import"./ArrowLeftOutlined.f2895767.js";import"./index.44f008ce.js";import"./transButton.88461f3e.js";import"./index.85eb05f3.js";import"./index.4ad5e6f5.js";import"./index.40ef4a43.js";import"./index.12aefbc8.js";import"./uuid.2b29000c.js";import"./index.3b87c3c2.js";import"./_baseIteratee.94f70879.js";import"./get.ab1579f8.js";import"./DeleteOutlined.f664363c.js";import"./index.9a120b4f.js";import"./useRefs.1930efb1.js";import"./Form.823f88cb.js";import"./Col.8f679cd2.js";import"./useFlexGapSupport.ed791f76.js";import"./index.519bbcb9.js";import"./FullscreenOutlined.b131f636.js";import"./index.12871986.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.517aff61.js";import"./index.4d00782a.js";import"./fromPairs.84aabb58.js";import"./index.fa23812a.js";import"./scrollTo.0ddde201.js";import"./index.b1014795.js";/* empty css              *//* empty css               */import"./useFormItem.7678ea25.js";import"./index.79c0f937.js";import"./index.75114586.js";import"./download.14350a99.js";import"./base64Conver.08b9f4ec.js";import"./index.54c1b7b5.js";import"./index.b7ce9023.js";import"./index.e2c79e1e.js";import"./uniqBy.bea82599.js";import"./index.fea0c2f3.js";const A=B({name:"MenuManagement",components:{BasicTable:b,MenuDrawer:_,TableAction:C},setup(){const[e,{openDrawer:r}]=D(),[c,{reload:l,expandAll:u}]=g({title:"\u83DC\u5355\u5217\u8868",api:T,columns:w,formConfig:{labelWidth:120,schemas:S},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function d(){r(!0,{isUpdate:!1})}function i(o){r(!0,{record:o,isUpdate:!0})}function n(o){}function a(){l()}function m(){x(u)}return{registerTable:c,registerDrawer:e,handleCreate:d,handleEdit:i,handleDelete:n,handleSuccess:a,onFetchSuccess:m}}});function E(e,r,c,l,u,d){const i=t("a-button"),n=t("TableAction"),a=t("BasicTable"),m=t("MenuDrawer");return h(),F("div",null,[s(a,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:p(()=>[s(i,{type:"primary",onClick:e.handleCreate},{default:p(()=>[y(" \u65B0\u589E\u83DC\u5355 ")]),_:1},8,["onClick"])]),bodyCell:p(({column:o,record:f})=>[o.key==="action"?(h(),M(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,f)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,f)}}]},null,8,["actions"])):v("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),s(m,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Ie=k(A,[["render",E]]);export{Ie as default};
