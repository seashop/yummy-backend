var f=(t,a,i)=>new Promise((p,m)=>{var l=o=>{try{r(i.next(o))}catch(e){m(e)}},s=o=>{try{r(i.throw(o))}catch(e){m(e)}},r=o=>o.done?p(o.value):Promise.resolve(o.value).then(l,s);r((i=i.apply(t,a)).next())});import{av as b,a as g,B,ax as c,o as h,h as T,n as u,y as d,z as _,j as D,l as E}from"./index.c4bcccae.js";import{B as k}from"./TableImg.d2e92ef2.js";import{T as y}from"./BasicForm.11e460f6.js";import{u as M}from"./useTable.73eac09a.js";import{l as S,c as w,s as F,u as A,a as R}from"./discount.data.d4399e6d.js";import{u as $}from"./index.a97dab51.js";import x from"./DiscountModal.82ce8f7b.js";import"./index.ba0073c4.js";import"./Checkbox.6855b002.js";import"./index.57c3dc31.js";import"./index.8adaff47.js";import"./eagerComputed.d0b9ee41.js";import"./useForm.9fc31f81.js";import"./index.c4b57652.js";import"./index.32df30ea.js";import"./index.a7bd6f74.js";import"./useSize.1344b7d2.js";import"./onMountedOrActivated.36541739.js";import"./useWindowSizeFn.4ec568b8.js";import"./useContentViewHeight.4714da75.js";import"./ArrowLeftOutlined.f8f3dc9e.js";import"./index.2f012cb3.js";import"./transButton.80503396.js";import"./index.e7f07382.js";import"./index.fc21d40d.js";import"./index.3d13f588.js";import"./index.0a2bde25.js";import"./uuid.2b29000c.js";import"./index.b4ace7ad.js";import"./_baseIteratee.ea415784.js";import"./get.d6c8fb63.js";import"./DeleteOutlined.42e11d46.js";import"./index.e182d5a1.js";import"./useRefs.9398ff58.js";import"./Form.fcad3fe0.js";import"./Col.843b66ed.js";import"./useFlexGapSupport.d852bf74.js";import"./index.ce8ec429.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.f4d81b29.js";import"./FullscreenOutlined.83eb1df3.js";import"./index.e603a1c1.js";import"./fromPairs.84aabb58.js";import"./index.5b91ae9f.js";import"./scrollTo.43e7de4d.js";import"./index.579bacc2.js";/* empty css              *//* empty css               */import"./useFormItem.18f8f3df.js";import"./index.891c6174.js";import"./index.c5a9aa2d.js";import"./download.3199245e.js";import"./base64Conver.08b9f4ec.js";import"./index.587a0685.js";import"./index.8fb21350.js";import"./index.e291623e.js";import"./uniqBy.4b200e6e.js";import"./useComponentRegister.c4841e82.js";import"./index.37646cfb.js";import"./PlusOutlined.e5075723.js";const N=g({name:"DiscountManagement",components:{BasicTable:k,DiscountModal:x,TableAction:y,Button:B},setup(){const[t,{openModal:a}]=$(),[i,{reload:p}]=M({title:"\u6EE1\u51CF\u5217\u8868",api:S,columns:w,formConfig:{labelWidth:120,schemas:F},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action"}});function m(){a(!0,{isUpdate:!1})}function l(o){a(!0,{record:o,isUpdate:!0})}function s(o){}function r(C){return f(this,arguments,function*({isUpdate:o,values:e}){if(o){const n=yield A(e.id,e)}else{const n=yield R(e)}p()})}return{registerTable:i,registerModal:t,handleCreate:m,handleEdit:l,handleDelete:s,handleSuccess:r}}});function V(t,a,i,p,m,l){const s=c("Button"),r=c("TableAction"),o=c("BasicTable"),e=c("DiscountModal");return h(),T("div",null,[u(o,{onRegister:t.registerTable},{toolbar:d(()=>[u(s,{type:"primary",onClick:t.handleCreate},{default:d(()=>[_(" \u65B0\u589E\u6EE1\u51CF ")]),_:1},8,["onClick"])]),bodyCell:d(({column:C,record:n})=>[C.key==="action"?(h(),D(r,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:t.handleEdit.bind(null,n)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:t.handleDelete.bind(null,n)}}]},null,8,["actions"])):E("",!0)]),_:1},8,["onRegister"]),u(e,{onRegister:t.registerModal,onSuccess:t.handleSuccess},null,8,["onRegister","onSuccess"])])}var Ho=b(N,[["render",V]]);export{Ho as default};