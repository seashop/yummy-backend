import{B as s}from"./TableImg.c25142d5.js";import{T as d}from"./BasicForm.ecc16293.js";import{u as c}from"./useTable.6a40baa5.js";import{d as F}from"./table.a0ac4ca9.js";import{av as h,a as b,ax as a,o as r,h as f,n as B,y as A,j as C,l as w}from"./index.71d27ec8.js";import"./index.82b73f0a.js";import"./Checkbox.b9fd9e63.js";import"./index.62708885.js";import"./index.d16cb426.js";import"./eagerComputed.bf418e4f.js";import"./useForm.1ef3442d.js";import"./index.edca75a1.js";import"./index.4664d36a.js";import"./index.ca9c94a7.js";import"./useSize.7f6a0415.js";import"./onMountedOrActivated.c17cdee3.js";import"./useWindowSizeFn.2f380c6a.js";import"./useContentViewHeight.3e540372.js";import"./ArrowLeftOutlined.c7d64000.js";import"./index.7cb9b95f.js";import"./transButton.d7be3a5c.js";import"./index.3e9a0c30.js";import"./index.570ef99c.js";import"./index.b58f965a.js";import"./index.d5597332.js";import"./uuid.2b29000c.js";import"./index.5dab2e2c.js";import"./_baseIteratee.07f786e9.js";import"./get.2ea61e62.js";import"./DeleteOutlined.9c425421.js";import"./index.b332413b.js";import"./useRefs.4de25004.js";import"./Form.7dd7a545.js";import"./Col.cced6662.js";import"./useFlexGapSupport.dcaea212.js";import"./index.6cd30c01.js";import"./FullscreenOutlined.186960e1.js";import"./index.0ddf3146.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.9218606a.js";import"./index.e69e205a.js";import"./fromPairs.84aabb58.js";import"./index.41548fff.js";import"./scrollTo.7d8435ac.js";import"./index.776e169d.js";/* empty css              *//* empty css               */import"./useFormItem.f4a165d1.js";import"./index.13fbb7d1.js";import"./index.290183c2.js";import"./download.73216fb1.js";import"./base64Conver.08b9f4ec.js";import"./index.59a80f59.js";import"./index.f1d0b8cc.js";import"./index.5f6622b1.js";import"./uniqBy.49a2d577.js";const T=[{title:"\u7F16\u53F7",dataIndex:"no",width:100},{title:"\u59D3\u540D",dataIndex:"name",width:200,auth:"test"},{title:"\u72B6\u6001",dataIndex:"status"},{title:"\u72B6\u60011",dataIndex:"status1"},{title:"\u72B6\u60012",dataIndex:"status2"},{title:"\u72B6\u60013",dataIndex:"status3"},{title:"\u72B6\u60014",dataIndex:"status4"},{title:"\u72B6\u60015",dataIndex:"status5"},{title:"\u5730\u5740",dataIndex:"address",auth:"super",ifShow:t=>!0},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],x=b({components:{BasicTable:s,TableAction:d},setup(){const[t]=c({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:F,columns:T,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox"},actionColumn:{width:250,title:"Action",dataIndex:"action"}});function i(e){}function u(e){}function n(e){}return{registerTable:t,handleEdit:i,handleDelete:u,handleOpen:n}}}),I={class:"p-4"};function _(t,i,u,n,e,E){const p=a("TableAction"),l=a("BasicTable");return r(),f("div",I,[B(l,{onRegister:t.registerTable},{bodyCell:A(({column:m,record:o})=>[m.key==="action"?(r(),C(p,{key:0,actions:[{label:"\u7F16\u8F91",onClick:t.handleEdit.bind(null,o),auth:"other"},{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,o),auth:"super"}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,o)},ifShow:g=>o.status!=="enable"},{label:"\u7981\u7528",popConfirm:{title:"\u662F\u5426\u7981\u7528\uFF1F",confirm:t.handleOpen.bind(null,o)},ifShow:()=>o.status==="enable"},{label:"\u540C\u65F6\u63A7\u5236",popConfirm:{title:"\u662F\u5426\u52A8\u6001\u663E\u793A\uFF1F",confirm:t.handleOpen.bind(null,o)},auth:"super",ifShow:()=>!0}]},null,8,["actions","dropDownActions"])):w("",!0)]),_:1},8,["onRegister"])])}var yt=h(x,[["render",_]]);export{yt as default};
