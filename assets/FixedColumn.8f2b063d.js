import{B as l}from"./TableImg.3f5fdb24.js";import{T as s}from"./BasicForm.c77a22ea.js";import{u as d}from"./useTable.8330530b.js";import{d as c}from"./table.51ec198b.js";import{av as F,a as b,ax as n,o as m,h as f,n as h,y as B,j as T,l as A}from"./index.332f1f61.js";import"./index.94c8f3b7.js";import"./Checkbox.d36bce60.js";import"./index.ee5847bb.js";import"./index.569fc2b5.js";import"./eagerComputed.b4fd04a8.js";import"./useForm.4855708a.js";import"./index.fb09cd3e.js";import"./index.f067aad0.js";import"./index.051b3cdd.js";import"./useSize.ccb706e0.js";import"./onMountedOrActivated.ae6205f0.js";import"./useWindowSizeFn.10a47dfe.js";import"./useContentViewHeight.ab3b2185.js";import"./ArrowLeftOutlined.2a6c8c6a.js";import"./index.3d54a3f8.js";import"./transButton.dc121a8e.js";import"./index.90f61e6e.js";import"./index.f67d6b77.js";import"./index.7a63a8fa.js";import"./index.0c8a73e2.js";import"./uuid.2b29000c.js";import"./index.85c6ade0.js";import"./_baseIteratee.b39208fd.js";import"./get.62966e6c.js";import"./DeleteOutlined.24a033a9.js";import"./index.95215ebf.js";import"./useRefs.32186409.js";import"./Form.6b7ab19e.js";import"./Col.c24e698a.js";import"./useFlexGapSupport.1de4ef65.js";import"./index.754223f0.js";import"./FullscreenOutlined.a861df37.js";import"./index.1e4861a7.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.ddeccf26.js";import"./index.6faba884.js";import"./fromPairs.84aabb58.js";import"./index.3dd7f5e6.js";import"./scrollTo.e4156db4.js";import"./index.52db270f.js";/* empty css              *//* empty css               */import"./useFormItem.937635d1.js";import"./index.461a54c8.js";import"./index.d6e61de6.js";import"./download.6a29d639.js";import"./base64Conver.08b9f4ec.js";import"./index.683bc381.js";import"./index.aa732719.js";import"./index.2b21a1d3.js";import"./uniqBy.b04fb3f0.js";const C=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"\u59D3\u540D",dataIndex:"name",width:260},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:300},{title:"\u5F00\u59CB\u65F6\u95F4",width:200,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],_=b({components:{BasicTable:l,TableAction:s},setup(){const[t]=d({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:c,columns:C,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action"}});function i(o){}function e(o){}return{registerTable:t,handleDelete:i,handleOpen:e}}}),x={class:"p-4"};function w(t,i,e,o,D,I){const p=n("TableAction"),a=n("BasicTable");return m(),f("div",x,[h(a,{onRegister:t.registerTable},{bodyCell:B(({column:u,record:r})=>[u.key==="action"?(m(),T(p,{key:0,actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,r)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,r)}}]},null,8,["actions","dropDownActions"])):A("",!0)]),_:1},8,["onRegister"])])}var Et=F(_,[["render",w]]);export{Et as default};
