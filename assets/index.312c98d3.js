var f=(e,a,r)=>new Promise((p,m)=>{var s=o=>{try{i(r.next(o))}catch(t){m(t)}},l=o=>{try{i(r.throw(o))}catch(t){m(t)}},i=o=>o.done?p(o.value):Promise.resolve(o.value).then(s,l);i((r=r.apply(e,a)).next())});import{B as C}from"./TableImg.d2e92ef2.js";import{T as g}from"./BasicForm.11e460f6.js";import{u as _}from"./useTable.73eac09a.js";import{l as T,u as v,c as B}from"./level.a1581236.js";import{u as k}from"./index.a97dab51.js";import{L as y,c as L,s as M}from"./LevelModal.0559e500.js";import{av as E,a as S,ax as c,o as h,h as w,n as u,y as d,z as A,j as x,l as F}from"./index.c4bcccae.js";import"./index.ba0073c4.js";import"./Checkbox.6855b002.js";import"./index.57c3dc31.js";import"./index.8adaff47.js";import"./eagerComputed.d0b9ee41.js";import"./useForm.9fc31f81.js";import"./index.c4b57652.js";import"./index.32df30ea.js";import"./index.a7bd6f74.js";import"./useSize.1344b7d2.js";import"./onMountedOrActivated.36541739.js";import"./useWindowSizeFn.4ec568b8.js";import"./useContentViewHeight.4714da75.js";import"./ArrowLeftOutlined.f8f3dc9e.js";import"./index.2f012cb3.js";import"./transButton.80503396.js";import"./index.e7f07382.js";import"./index.fc21d40d.js";import"./index.3d13f588.js";import"./index.0a2bde25.js";import"./uuid.2b29000c.js";import"./index.b4ace7ad.js";import"./_baseIteratee.ea415784.js";import"./get.d6c8fb63.js";import"./DeleteOutlined.42e11d46.js";import"./index.e182d5a1.js";import"./useRefs.9398ff58.js";import"./Form.fcad3fe0.js";import"./Col.843b66ed.js";import"./useFlexGapSupport.d852bf74.js";import"./index.ce8ec429.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.f4d81b29.js";import"./FullscreenOutlined.83eb1df3.js";import"./index.e603a1c1.js";import"./fromPairs.84aabb58.js";import"./index.5b91ae9f.js";import"./scrollTo.43e7de4d.js";import"./index.579bacc2.js";/* empty css              *//* empty css               */import"./useFormItem.18f8f3df.js";import"./index.891c6174.js";import"./index.c5a9aa2d.js";import"./download.3199245e.js";import"./base64Conver.08b9f4ec.js";import"./index.587a0685.js";import"./index.8fb21350.js";import"./index.e291623e.js";import"./uniqBy.4b200e6e.js";import"./index.283107d4.js";import"./index.bc252866.js";const R=S({name:"LevelManagement",components:{BasicTable:C,LevelModal:y,TableAction:g},setup(){const[e,{openModal:a}]=k(),[r,{reload:p}]=_({title:"\u7B49\u7EA7\u5217\u8868",api:T,columns:L,formConfig:{labelWidth:120,schemas:M},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function m(){a(!0,{isUpdate:!1})}function s(o){a(!0,{record:o,isUpdate:!0})}function l(o){}function i(b){return f(this,arguments,function*({isUpdate:o,values:t}){if(o){const n=yield v(t)}else{const n=yield B(t)}p()})}return{registerTable:r,registerModal:e,handleCreate:m,handleEdit:s,handleDelete:l,handleSuccess:i}}});function $(e,a,r,p,m,s){const l=c("a-button"),i=c("TableAction"),o=c("BasicTable"),t=c("LevelModal");return h(),w("div",null,[u(o,{onRegister:e.registerTable},{toolbar:d(()=>[u(l,{type:"primary",onClick:e.handleCreate},{default:d(()=>[A(" \u65B0\u589E\u7B49\u7EA7 ")]),_:1},8,["onClick"])]),bodyCell:d(({column:b,record:n})=>[b.key==="action"?(h(),x(i,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,n)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,n)}}]},null,8,["actions"])):F("",!0)]),_:1},8,["onRegister"]),u(t,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Wo=E(R,[["render",$]]);export{Wo as default};