var d=(o,n,i)=>new Promise((m,l)=>{var c=t=>{try{r(i.next(t))}catch(e){l(e)}},p=t=>{try{r(i.throw(t))}catch(e){l(e)}},r=t=>t.done?m(t.value):Promise.resolve(t.value).then(c,p);r((i=i.apply(o,n)).next())});import{av as _,a as A,ax as s,o as f,h as T,n as h,y as g,z as y,j as b,l as k}from"./index.c4bcccae.js";import{I as B}from"./index.e603a1c1.js";import{B as w}from"./TableImg.d2e92ef2.js";import{T as M}from"./BasicForm.11e460f6.js";import{u as E}from"./useTable.73eac09a.js";import{l as S,d as I,u as v,c as x}from"./article.c83c914b.js";import{u as F}from"./index.a97dab51.js";import{A as R,c as $,s as D}from"./ArticleModal.4e7baeb2.js";import"./index.ba0073c4.js";import"./Checkbox.6855b002.js";import"./index.57c3dc31.js";import"./index.8adaff47.js";import"./eagerComputed.d0b9ee41.js";import"./useForm.9fc31f81.js";import"./index.c4b57652.js";import"./index.32df30ea.js";import"./index.a7bd6f74.js";import"./useSize.1344b7d2.js";import"./onMountedOrActivated.36541739.js";import"./useWindowSizeFn.4ec568b8.js";import"./useContentViewHeight.4714da75.js";import"./ArrowLeftOutlined.f8f3dc9e.js";import"./index.2f012cb3.js";import"./transButton.80503396.js";import"./index.e7f07382.js";import"./index.fc21d40d.js";import"./index.3d13f588.js";import"./index.0a2bde25.js";import"./uuid.2b29000c.js";import"./index.b4ace7ad.js";import"./_baseIteratee.ea415784.js";import"./get.d6c8fb63.js";import"./DeleteOutlined.42e11d46.js";import"./index.e182d5a1.js";import"./useRefs.9398ff58.js";import"./Form.fcad3fe0.js";import"./Col.843b66ed.js";import"./useFlexGapSupport.d852bf74.js";import"./index.ce8ec429.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.f4d81b29.js";import"./FullscreenOutlined.83eb1df3.js";import"./fromPairs.84aabb58.js";import"./index.5b91ae9f.js";import"./scrollTo.43e7de4d.js";import"./index.579bacc2.js";/* empty css              *//* empty css               */import"./useFormItem.18f8f3df.js";import"./index.891c6174.js";import"./index.c5a9aa2d.js";import"./download.3199245e.js";import"./base64Conver.08b9f4ec.js";import"./index.587a0685.js";import"./index.8fb21350.js";import"./index.e291623e.js";import"./uniqBy.4b200e6e.js";import"./index.283107d4.js";import"./index.bc252866.js";import"./useComponentRegister.c4841e82.js";import"./index.d134e362.js";import"./PictureDrawer.f0f77004.js";import"./index.37646cfb.js";import"./PlusOutlined.e5075723.js";const N=A({name:"ArticleManagement",components:{BasicTable:w,ArticleModal:R,TableAction:M,Image:B},setup(){const[o,{openModal:n}]=F(),[i,{reload:m}]=E({title:"\u6587\u7AE0\u5217\u8868",api:S,columns:$,formConfig:{labelWidth:120,schemas:D},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function l(){n(!0,{isUpdate:!1})}function c(t){n(!0,{record:t,isUpdate:!0})}function p(t){return d(this,null,function*(){yield I(t.id).then(()=>{m()})})}function r(C){return d(this,arguments,function*({isUpdate:t,values:e}){if(t){const a=yield v(e)}else{const a=yield x(e)}m()})}return{registerTable:i,registerModal:o,handleCreate:l,handleEdit:c,handleDelete:p,handleSuccess:r}}});function V(o,n,i,m,l,c){const p=s("a-button"),r=s("Image"),t=s("TableAction"),e=s("BasicTable"),C=s("ArticleModal");return f(),T("div",null,[h(e,{onRegister:o.registerTable},{toolbar:g(()=>[h(p,{type:"primary",onClick:o.handleCreate},{default:g(()=>[y(" \u65B0\u589E\u6587\u7AE0 ")]),_:1},8,["onClick"])]),bodyCell:g(({column:a,record:u})=>[a.key==="img"?(f(),b(r,{key:0,src:u.img.full_url,width:60},null,8,["src"])):a.key==="action"?(f(),b(t,{key:1,actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])):k("",!0)]),_:1},8,["onRegister"]),h(C,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var Pt=_(N,[["render",V]]);export{Pt as default};