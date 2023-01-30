import{B as b}from"./TableImg.3f5fdb24.js";import{T as C}from"./BasicForm.c77a22ea.js";import{u as g}from"./useTable.8330530b.js";import{d as T}from"./system.5fa26406.js";import{u as D}from"./index.43348817.js";import{M as _,c as w,s as S}from"./MenuDrawer.c810ce94.js";import{av as k,a as B,ax as t,o as h,h as F,n as s,y as p,z as y,j as M,l as v,ak as x}from"./index.332f1f61.js";import"./index.94c8f3b7.js";import"./Checkbox.d36bce60.js";import"./index.ee5847bb.js";import"./index.569fc2b5.js";import"./eagerComputed.b4fd04a8.js";import"./useForm.4855708a.js";import"./index.fb09cd3e.js";import"./index.f067aad0.js";import"./index.051b3cdd.js";import"./useSize.ccb706e0.js";import"./onMountedOrActivated.ae6205f0.js";import"./useWindowSizeFn.10a47dfe.js";import"./useContentViewHeight.ab3b2185.js";import"./ArrowLeftOutlined.2a6c8c6a.js";import"./index.3d54a3f8.js";import"./transButton.dc121a8e.js";import"./index.90f61e6e.js";import"./index.f67d6b77.js";import"./index.7a63a8fa.js";import"./index.0c8a73e2.js";import"./uuid.2b29000c.js";import"./index.85c6ade0.js";import"./_baseIteratee.b39208fd.js";import"./get.62966e6c.js";import"./DeleteOutlined.24a033a9.js";import"./index.95215ebf.js";import"./useRefs.32186409.js";import"./Form.6b7ab19e.js";import"./Col.c24e698a.js";import"./useFlexGapSupport.1de4ef65.js";import"./index.754223f0.js";import"./FullscreenOutlined.a861df37.js";import"./index.1e4861a7.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.ddeccf26.js";import"./index.6faba884.js";import"./fromPairs.84aabb58.js";import"./index.3dd7f5e6.js";import"./scrollTo.e4156db4.js";import"./index.52db270f.js";/* empty css              *//* empty css               */import"./useFormItem.937635d1.js";import"./index.461a54c8.js";import"./index.d6e61de6.js";import"./download.6a29d639.js";import"./base64Conver.08b9f4ec.js";import"./index.683bc381.js";import"./index.aa732719.js";import"./index.2b21a1d3.js";import"./uniqBy.b04fb3f0.js";import"./index.7cb50b61.js";const A=B({name:"MenuManagement",components:{BasicTable:b,MenuDrawer:_,TableAction:C},setup(){const[e,{openDrawer:r}]=D(),[c,{reload:l,expandAll:u}]=g({title:"\u83DC\u5355\u5217\u8868",api:T,columns:w,formConfig:{labelWidth:120,schemas:S},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function d(){r(!0,{isUpdate:!1})}function i(o){r(!0,{record:o,isUpdate:!0})}function n(o){}function a(){l()}function m(){x(u)}return{registerTable:c,registerDrawer:e,handleCreate:d,handleEdit:i,handleDelete:n,handleSuccess:a,onFetchSuccess:m}}});function E(e,r,c,l,u,d){const i=t("a-button"),n=t("TableAction"),a=t("BasicTable"),m=t("MenuDrawer");return h(),F("div",null,[s(a,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:p(()=>[s(i,{type:"primary",onClick:e.handleCreate},{default:p(()=>[y(" \u65B0\u589E\u83DC\u5355 ")]),_:1},8,["onClick"])]),bodyCell:p(({column:o,record:f})=>[o.key==="action"?(h(),M(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,f)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,f)}}]},null,8,["actions"])):v("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),s(m,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Ie=k(A,[["render",E]]);export{Ie as default};
