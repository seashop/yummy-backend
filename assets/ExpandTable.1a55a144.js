import{B as d}from"./TableImg.8c3ea297.js";import{T as F}from"./BasicForm.b02f3207.js";import{u as B}from"./useTable.ce0f5d89.js";import{P as C}from"./index.0bd7a6a1.js";import{getBasicColumns as f}from"./tableData.38d0f3c2.js";import{d as b}from"./table.01871394.js";import{av as E,a as g,ax as e,o as a,j as m,y as r,n as T,i as _,t as A,l as D}from"./index.d50a9800.js";import"./index.9bbde0e5.js";import"./Checkbox.ac809a47.js";import"./index.c240df87.js";import"./index.c693835c.js";import"./eagerComputed.7b567627.js";import"./useForm.76075c71.js";import"./index.16714cd7.js";import"./index.118afb88.js";import"./index.11b93be2.js";import"./index.406f84fe.js";import"./uuid.2b29000c.js";import"./index.e56403fd.js";import"./_baseIteratee.9a09b333.js";import"./get.87e704f3.js";import"./DeleteOutlined.e72cc543.js";import"./index.4d8ea057.js";import"./useRefs.24425adc.js";import"./Form.a90eefb7.js";import"./Col.56b3f0ca.js";import"./useFlexGapSupport.7be7a3d1.js";import"./useSize.381fa398.js";import"./useWindowSizeFn.974b14b8.js";import"./index.4900e588.js";import"./FullscreenOutlined.43b089d4.js";import"./onMountedOrActivated.276f36da.js";import"./index.f2d505bc.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.089d0fa2.js";import"./index.049dbb8d.js";import"./fromPairs.84aabb58.js";import"./index.0698dd78.js";import"./scrollTo.ebc992b0.js";import"./index.f3371471.js";/* empty css              *//* empty css               */import"./useFormItem.a0990f77.js";import"./transButton.1f86bfc1.js";import"./index.ad2e4158.js";import"./index.7f7f4e74.js";import"./download.1213368a.js";import"./base64Conver.08b9f4ec.js";import"./index.679e84c1.js";import"./index.14cbd24c.js";import"./index.4848492a.js";import"./uniqBy.08eb7f78.js";import"./index.02325821.js";import"./index.b6395a58.js";import"./useContentViewHeight.52d4bb94.js";import"./ArrowLeftOutlined.3ec12d2b.js";import"./index.10182938.js";const w=g({components:{BasicTable:d,TableAction:F,PageWrapper:C},setup(){const[o]=B({api:b,title:"\u53EF\u5C55\u5F00\u8868\u683C\u6F14\u793A",titleHelpMessage:["\u5DF2\u542F\u7528expandRowByClick","\u5DF2\u542F\u7528stopButtonPropagation"],columns:f(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",fixed:"right"}});function p(t){}function n(t){}return{registerTable:o,handleDelete:p,handleOpen:n}}});function x(o,p,n,t,y,h){const l=e("TableAction"),s=e("BasicTable"),c=e("PageWrapper");return a(),m(c,{title:"\u53EF\u5C55\u5F00\u8868\u683C",content:"TableAction\u7EC4\u4EF6\u53EF\u914D\u7F6EstopButtonPropagation\u6765\u963B\u6B62\u64CD\u4F5C\u6309\u94AE\u7684\u70B9\u51FB\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u4EE5\u4FBF\u914D\u5408Table\u7EC4\u4EF6\u7684expandRowByClick"},{default:r(()=>[T(s,{onRegister:o.registerTable},{expandedRowRender:r(({record:i})=>[_("span",null,"No: "+A(i.no),1)]),bodyCell:r(({column:i,record:u})=>[i.key==="action"?(a(),m(l,{key:0,stopButtonPropagation:"",actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:o.handleDelete.bind(null,u)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:o.handleOpen.bind(null,u)}}]},null,8,["actions","dropDownActions"])):D("",!0)]),_:1},8,["onRegister"])]),_:1})}var $o=E(w,[["render",x]]);export{$o as default};