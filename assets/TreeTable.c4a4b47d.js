import{B as l}from"./TableImg.3ce39f92.js";import"./BasicForm.c9112e09.js";import{u as n}from"./useTable.96bdc0ed.js";import{getBasicColumns as c,getTreeTableData as d}from"./tableData.38d0f3c2.js";import{av as _,a as b,ax as a,o as f,h as C,n as t,y as r,z as s}from"./index.897eff97.js";import"./index.e6ab6a99.js";import"./Checkbox.b0115b6e.js";import"./index.f4c3ae7f.js";import"./index.17375207.js";import"./eagerComputed.feaabfb7.js";import"./useForm.68d81aa3.js";import"./index.60fb1875.js";import"./index.8b27a6ce.js";import"./index.3eebb70d.js";import"./useSize.9a44880f.js";import"./onMountedOrActivated.05e5a6b3.js";import"./useWindowSizeFn.1986bc84.js";import"./useContentViewHeight.f38aad7b.js";import"./ArrowLeftOutlined.bfc0be49.js";import"./index.c90244a3.js";import"./transButton.c4f208e8.js";import"./index.60f6a6f9.js";import"./index.65a3c605.js";import"./index.dc85282d.js";import"./index.0aec3bad.js";import"./uuid.2b29000c.js";import"./index.332bc6f0.js";import"./_baseIteratee.13226526.js";import"./get.12f2540a.js";import"./DeleteOutlined.9c2908e4.js";import"./index.db9478fd.js";import"./useRefs.2622c820.js";import"./Form.c7b93c30.js";import"./Col.aaf3a498.js";import"./useFlexGapSupport.d180d1f9.js";import"./index.98fb7ffc.js";import"./FullscreenOutlined.61308bd0.js";import"./index.1a3584cc.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.ef33b52d.js";import"./index.86d0d66d.js";import"./fromPairs.84aabb58.js";import"./index.fa5b7037.js";import"./scrollTo.fdaedefa.js";import"./index.293f4e17.js";/* empty css              *//* empty css               */import"./useFormItem.1fc06be9.js";import"./index.861cf7a1.js";import"./index.12a78234.js";import"./download.a8bc32d2.js";import"./base64Conver.08b9f4ec.js";import"./index.4cbf34e1.js";import"./index.936f87ab.js";import"./index.5c454517.js";import"./uniqBy.d00325ce.js";const T=b({components:{BasicTable:l},setup(){const[o,{expandAll:e,collapseAll:i}]=n({title:"\u6811\u5F62\u8868\u683C",isTreeTable:!0,rowSelection:{type:"checkbox",getCheckboxProps(p){return p.id==="0"?{disabled:!0}:{disabled:!1}}},titleHelpMessage:"\u6811\u5F62\u7EC4\u4EF6\u4E0D\u80FD\u548C\u5E8F\u5217\u53F7\u5217\u540C\u65F6\u5B58\u5728",columns:c(),dataSource:d(),rowKey:"id"});return{register:o,expandAll:e,collapseAll:i}}}),g={class:"p-4"};function k(o,e,i,p,B,E){const m=a("a-button"),u=a("BasicTable");return f(),C("div",g,[t(u,{onRegister:o.register},{toolbar:r(()=>[t(m,{type:"primary",onClick:o.expandAll},{default:r(()=>[s("\u5C55\u5F00\u5168\u90E8")]),_:1},8,["onClick"]),t(m,{type:"primary",onClick:o.collapseAll},{default:r(()=>[s("\u6298\u53E0\u5168\u90E8")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])])}var ho=_(T,[["render",k]]);export{ho as default};
