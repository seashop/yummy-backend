import{B as d}from"./TableImg.1250a752.js";import{T as F}from"./BasicForm.14194d35.js";import{u as B}from"./useTable.280afa0d.js";import{P as C}from"./index.4dd15fe7.js";import{getBasicColumns as f}from"./tableData.38d0f3c2.js";import{d as b}from"./table.8322ec04.js";import{av as E,a as g,ax as e,o as a,j as m,y as r,n as T,i as _,t as A,l as D}from"./index.6d9bb3fb.js";import"./index.f5fff581.js";import"./Checkbox.573d65ae.js";import"./index.67c9f654.js";import"./index.e8fc2939.js";import"./eagerComputed.9bf0b1d5.js";import"./useForm.ed4caa1b.js";import"./index.6f0246c2.js";import"./index.f8b4f42d.js";import"./index.4b6dad8a.js";import"./index.60b81322.js";import"./uuid.2b29000c.js";import"./index.0de23d03.js";import"./_baseIteratee.9382b511.js";import"./get.8fe78ec1.js";import"./DeleteOutlined.e565875c.js";import"./index.8e7a8568.js";import"./useRefs.913cb0c7.js";import"./Form.156a57f0.js";import"./Col.e4a1ee5d.js";import"./useFlexGapSupport.4090089e.js";import"./useSize.773572b3.js";import"./useWindowSizeFn.fcba542a.js";import"./index.466e72dd.js";import"./FullscreenOutlined.c5d2b1bc.js";import"./onMountedOrActivated.ed3eafd4.js";import"./index.427c9aa1.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.7af94a94.js";import"./index.9fac26a9.js";import"./fromPairs.84aabb58.js";import"./index.a6b1d5e2.js";import"./scrollTo.aee92320.js";import"./index.8bb10007.js";/* empty css              *//* empty css               */import"./useFormItem.8ad155b2.js";import"./transButton.d55d8417.js";import"./index.561ec7f5.js";import"./index.0d84ec2e.js";import"./download.812ffb10.js";import"./base64Conver.08b9f4ec.js";import"./index.31b2292b.js";import"./index.3f358908.js";import"./index.edddeece.js";import"./uniqBy.7e5adb09.js";import"./index.8616b7df.js";import"./index.0cbb1b7b.js";import"./useContentViewHeight.6c9a586b.js";import"./ArrowLeftOutlined.054bc93b.js";import"./index.5df71566.js";const w=g({components:{BasicTable:d,TableAction:F,PageWrapper:C},setup(){const[o]=B({api:b,title:"\u53EF\u5C55\u5F00\u8868\u683C\u6F14\u793A",titleHelpMessage:["\u5DF2\u542F\u7528expandRowByClick","\u5DF2\u542F\u7528stopButtonPropagation"],columns:f(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",fixed:"right"}});function p(t){}function n(t){}return{registerTable:o,handleDelete:p,handleOpen:n}}});function x(o,p,n,t,y,h){const l=e("TableAction"),s=e("BasicTable"),c=e("PageWrapper");return a(),m(c,{title:"\u53EF\u5C55\u5F00\u8868\u683C",content:"TableAction\u7EC4\u4EF6\u53EF\u914D\u7F6EstopButtonPropagation\u6765\u963B\u6B62\u64CD\u4F5C\u6309\u94AE\u7684\u70B9\u51FB\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u4EE5\u4FBF\u914D\u5408Table\u7EC4\u4EF6\u7684expandRowByClick"},{default:r(()=>[T(s,{onRegister:o.registerTable},{expandedRowRender:r(({record:i})=>[_("span",null,"No: "+A(i.no),1)]),bodyCell:r(({column:i,record:u})=>[i.key==="action"?(a(),m(l,{key:0,stopButtonPropagation:"",actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:o.handleDelete.bind(null,u)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:o.handleOpen.bind(null,u)}}]},null,8,["actions","dropDownActions"])):D("",!0)]),_:1},8,["onRegister"])]),_:1})}var $o=E(w,[["render",x]]);export{$o as default};
