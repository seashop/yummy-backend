import{B as d}from"./TableImg.06955667.js";import{T as F}from"./BasicForm.a2791009.js";import{u as B}from"./useTable.a0a7a9bc.js";import{P as C}from"./index.eed95980.js";import{getBasicColumns as f}from"./tableData.38d0f3c2.js";import{d as b}from"./table.0fde701a.js";import{av as E,a as g,ax as e,o as a,j as m,y as r,n as T,i as _,t as A,l as D}from"./index.05f21f62.js";import"./index.6c5e1569.js";import"./Checkbox.1e5d27b2.js";import"./index.a55a4d9b.js";import"./index.16d4d7e8.js";import"./eagerComputed.9ec758bd.js";import"./useForm.ffed4a20.js";import"./index.85eb05f3.js";import"./index.4ad5e6f5.js";import"./index.40ef4a43.js";import"./index.12aefbc8.js";import"./uuid.2b29000c.js";import"./index.3b87c3c2.js";import"./_baseIteratee.94f70879.js";import"./get.ab1579f8.js";import"./DeleteOutlined.f664363c.js";import"./index.9a120b4f.js";import"./useRefs.1930efb1.js";import"./Form.823f88cb.js";import"./Col.8f679cd2.js";import"./useFlexGapSupport.ed791f76.js";import"./useSize.b22e5468.js";import"./useWindowSizeFn.440a5bdc.js";import"./index.519bbcb9.js";import"./FullscreenOutlined.b131f636.js";import"./onMountedOrActivated.b7769380.js";import"./index.12871986.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.517aff61.js";import"./index.4d00782a.js";import"./fromPairs.84aabb58.js";import"./index.fa23812a.js";import"./scrollTo.0ddde201.js";import"./index.b1014795.js";/* empty css              *//* empty css               */import"./useFormItem.7678ea25.js";import"./transButton.88461f3e.js";import"./index.79c0f937.js";import"./index.75114586.js";import"./download.14350a99.js";import"./base64Conver.08b9f4ec.js";import"./index.54c1b7b5.js";import"./index.b7ce9023.js";import"./index.e2c79e1e.js";import"./uniqBy.bea82599.js";import"./index.368e30ed.js";import"./index.d1c5d9bc.js";import"./useContentViewHeight.054eb2bc.js";import"./ArrowLeftOutlined.f2895767.js";import"./index.44f008ce.js";const w=g({components:{BasicTable:d,TableAction:F,PageWrapper:C},setup(){const[o]=B({api:b,title:"\u53EF\u5C55\u5F00\u8868\u683C\u6F14\u793A",titleHelpMessage:["\u5DF2\u542F\u7528expandRowByClick","\u5DF2\u542F\u7528stopButtonPropagation"],columns:f(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",fixed:"right"}});function p(t){}function n(t){}return{registerTable:o,handleDelete:p,handleOpen:n}}});function x(o,p,n,t,y,h){const l=e("TableAction"),s=e("BasicTable"),c=e("PageWrapper");return a(),m(c,{title:"\u53EF\u5C55\u5F00\u8868\u683C",content:"TableAction\u7EC4\u4EF6\u53EF\u914D\u7F6EstopButtonPropagation\u6765\u963B\u6B62\u64CD\u4F5C\u6309\u94AE\u7684\u70B9\u51FB\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u4EE5\u4FBF\u914D\u5408Table\u7EC4\u4EF6\u7684expandRowByClick"},{default:r(()=>[T(s,{onRegister:o.registerTable},{expandedRowRender:r(({record:i})=>[_("span",null,"No: "+A(i.no),1)]),bodyCell:r(({column:i,record:u})=>[i.key==="action"?(a(),m(l,{key:0,stopButtonPropagation:"",actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:o.handleDelete.bind(null,u)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:o.handleOpen.bind(null,u)}}]},null,8,["actions","dropDownActions"])):D("",!0)]),_:1},8,["onRegister"])]),_:1})}var $o=E(w,[["render",x]]);export{$o as default};
