var c=(e,p,r)=>new Promise((n,m)=>{var s=t=>{try{o(r.next(t))}catch(i){m(i)}},a=t=>{try{o(r.throw(t))}catch(i){m(i)}},o=t=>t.done?n(t.value):Promise.resolve(t.value).then(s,a);o((r=r.apply(e,p)).next())});import{B as h}from"./TableImg.c25142d5.js";import{T as b}from"./BasicForm.ecc16293.js";import{u as g}from"./useTable.6a40baa5.js";import{l as C}from"./order.0ec836c4.js";import{u as T}from"./index.6cd30c01.js";import{D as _,c as B,s as M}from"./DetailModal.ec9b73df.js";import{av as S,a as k,ax as l,o as d,h as y,n as u,y as D,j as w,l as x}from"./index.71d27ec8.js";import"./index.82b73f0a.js";import"./Checkbox.b9fd9e63.js";import"./index.62708885.js";import"./index.d16cb426.js";import"./eagerComputed.bf418e4f.js";import"./useForm.1ef3442d.js";import"./index.edca75a1.js";import"./index.4664d36a.js";import"./index.ca9c94a7.js";import"./useSize.7f6a0415.js";import"./onMountedOrActivated.c17cdee3.js";import"./useWindowSizeFn.2f380c6a.js";import"./useContentViewHeight.3e540372.js";import"./ArrowLeftOutlined.c7d64000.js";import"./index.7cb9b95f.js";import"./transButton.d7be3a5c.js";import"./index.3e9a0c30.js";import"./index.570ef99c.js";import"./index.b58f965a.js";import"./index.d5597332.js";import"./uuid.2b29000c.js";import"./index.5dab2e2c.js";import"./_baseIteratee.07f786e9.js";import"./get.2ea61e62.js";import"./DeleteOutlined.9c425421.js";import"./index.b332413b.js";import"./useRefs.4de25004.js";import"./Form.7dd7a545.js";import"./Col.cced6662.js";import"./useFlexGapSupport.dcaea212.js";import"./index.0ddf3146.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.9218606a.js";import"./FullscreenOutlined.186960e1.js";import"./index.e69e205a.js";import"./fromPairs.84aabb58.js";import"./index.41548fff.js";import"./scrollTo.7d8435ac.js";import"./index.776e169d.js";/* empty css              *//* empty css               */import"./useFormItem.f4a165d1.js";import"./index.13fbb7d1.js";import"./index.290183c2.js";import"./download.73216fb1.js";import"./base64Conver.08b9f4ec.js";import"./index.59a80f59.js";import"./index.f1d0b8cc.js";import"./index.5f6622b1.js";import"./uniqBy.49a2d577.js";import"./index.50038997.js";import"./index.23339730.js";import"./level.4748163a.js";import"./PictureDrawer.d169ad75.js";import"./index.5cecd89c.js";import"./PlusOutlined.3ca17d8f.js";const v=k({name:"OrderManagement",components:{BasicTable:h,DetailModal:_,TableAction:b},setup(){const[e,{openModal:p}]=T(),[r,{reload:n}]=g({title:"\u8BA2\u5355\u5217\u8868",api:C,fetchSetting:{listField:"orders"},columns:B,formConfig:{labelWidth:120,schemas:M},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function m(o){p(!0,{record:o,isUpdate:!0})}function s(o){}function a(t){return c(this,arguments,function*({values:o}){const i=yield updateOrder(o.id,o);n()})}return{registerTable:r,registerModal:e,handleEdit:m,handleDelete:s,handleUpdateSuccess:a}}});function A(e,p,r,n,m,s){const a=l("TableAction"),o=l("BasicTable"),t=l("DetailModal");return d(),y("div",null,[u(o,{onRegister:e.registerTable},{bodyCell:D(({column:i,record:f})=>[i.key==="action"?(d(),w(a,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,f)}]},null,8,["actions"])):x("",!0)]),_:1},8,["onRegister"]),u(t,{onRegister:e.registerModal,onSuccess:e.handleUpdateSuccess},null,8,["onRegister","onSuccess"])])}var qo=S(v,[["render",A]]);export{qo as default};
