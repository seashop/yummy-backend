var f=(e,a,r)=>new Promise((p,m)=>{var s=o=>{try{i(r.next(o))}catch(t){m(t)}},l=o=>{try{i(r.throw(o))}catch(t){m(t)}},i=o=>o.done?p(o.value):Promise.resolve(o.value).then(s,l);i((r=r.apply(e,a)).next())});import{B as C}from"./TableImg.3ce39f92.js";import{T as g}from"./BasicForm.c9112e09.js";import{u as _}from"./useTable.96bdc0ed.js";import{l as T,u as v,c as B}from"./level.1d0b3bd8.js";import{u as k}from"./index.98fb7ffc.js";import{L as y,c as L,s as M}from"./LevelModal.bd7afa7b.js";import{av as E,a as S,ax as c,o as h,h as w,n as u,y as d,z as A,j as x,l as F}from"./index.897eff97.js";import"./index.e6ab6a99.js";import"./Checkbox.b0115b6e.js";import"./index.f4c3ae7f.js";import"./index.17375207.js";import"./eagerComputed.feaabfb7.js";import"./useForm.68d81aa3.js";import"./index.60fb1875.js";import"./index.8b27a6ce.js";import"./index.3eebb70d.js";import"./useSize.9a44880f.js";import"./onMountedOrActivated.05e5a6b3.js";import"./useWindowSizeFn.1986bc84.js";import"./useContentViewHeight.f38aad7b.js";import"./ArrowLeftOutlined.bfc0be49.js";import"./index.c90244a3.js";import"./transButton.c4f208e8.js";import"./index.60f6a6f9.js";import"./index.65a3c605.js";import"./index.dc85282d.js";import"./index.0aec3bad.js";import"./uuid.2b29000c.js";import"./index.332bc6f0.js";import"./_baseIteratee.13226526.js";import"./get.12f2540a.js";import"./DeleteOutlined.9c2908e4.js";import"./index.db9478fd.js";import"./useRefs.2622c820.js";import"./Form.c7b93c30.js";import"./Col.aaf3a498.js";import"./useFlexGapSupport.d180d1f9.js";import"./index.1a3584cc.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.ef33b52d.js";import"./FullscreenOutlined.61308bd0.js";import"./index.86d0d66d.js";import"./fromPairs.84aabb58.js";import"./index.fa5b7037.js";import"./scrollTo.fdaedefa.js";import"./index.293f4e17.js";/* empty css              *//* empty css               */import"./useFormItem.1fc06be9.js";import"./index.861cf7a1.js";import"./index.12a78234.js";import"./download.a8bc32d2.js";import"./base64Conver.08b9f4ec.js";import"./index.4cbf34e1.js";import"./index.936f87ab.js";import"./index.5c454517.js";import"./uniqBy.d00325ce.js";import"./index.9a8bde03.js";import"./index.9a3dd532.js";const R=S({name:"LevelManagement",components:{BasicTable:C,LevelModal:y,TableAction:g},setup(){const[e,{openModal:a}]=k(),[r,{reload:p}]=_({title:"\u7B49\u7EA7\u5217\u8868",api:T,columns:L,formConfig:{labelWidth:120,schemas:M},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function m(){a(!0,{isUpdate:!1})}function s(o){a(!0,{record:o,isUpdate:!0})}function l(o){}function i(b){return f(this,arguments,function*({isUpdate:o,values:t}){if(o){const n=yield v(t)}else{const n=yield B(t)}p()})}return{registerTable:r,registerModal:e,handleCreate:m,handleEdit:s,handleDelete:l,handleSuccess:i}}});function $(e,a,r,p,m,s){const l=c("a-button"),i=c("TableAction"),o=c("BasicTable"),t=c("LevelModal");return h(),w("div",null,[u(o,{onRegister:e.registerTable},{toolbar:d(()=>[u(l,{type:"primary",onClick:e.handleCreate},{default:d(()=>[A(" \u65B0\u589E\u7B49\u7EA7 ")]),_:1},8,["onClick"])]),bodyCell:d(({column:b,record:n})=>[b.key==="action"?(h(),x(i,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,n)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,n)}}]},null,8,["actions"])):F("",!0)]),_:1},8,["onRegister"]),u(t,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Wo=E(R,[["render",$]]);export{Wo as default};
