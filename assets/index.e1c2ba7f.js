var u=(t,m,e)=>new Promise((a,r)=>{var s=i=>{try{o(e.next(i))}catch(n){r(n)}},p=i=>{try{o(e.throw(i))}catch(n){r(n)}},o=i=>i.done?a(i.value):Promise.resolve(i.value).then(s,p);o((e=e.apply(t,m)).next())});import{B as g}from"./TableImg.3ce39f92.js";import{T as b}from"./BasicForm.c9112e09.js";import{u as C}from"./useTable.96bdc0ed.js";import{d$ as h,av as _,a as T,ax as l,o as d,h as B,n as f,y as M,j as S,l as y}from"./index.897eff97.js";import{u as k}from"./index.98fb7ffc.js";import{_ as D,c as $,s as v}from"./DetailModal.ca09d90c.js";import"./index.e6ab6a99.js";import"./Checkbox.b0115b6e.js";import"./index.f4c3ae7f.js";import"./index.17375207.js";import"./eagerComputed.feaabfb7.js";import"./useForm.68d81aa3.js";import"./index.60fb1875.js";import"./index.8b27a6ce.js";import"./index.3eebb70d.js";import"./useSize.9a44880f.js";import"./onMountedOrActivated.05e5a6b3.js";import"./useWindowSizeFn.1986bc84.js";import"./useContentViewHeight.f38aad7b.js";import"./ArrowLeftOutlined.bfc0be49.js";import"./index.c90244a3.js";import"./transButton.c4f208e8.js";import"./index.60f6a6f9.js";import"./index.65a3c605.js";import"./index.dc85282d.js";import"./index.0aec3bad.js";import"./uuid.2b29000c.js";import"./index.332bc6f0.js";import"./_baseIteratee.13226526.js";import"./get.12f2540a.js";import"./DeleteOutlined.9c2908e4.js";import"./index.db9478fd.js";import"./useRefs.2622c820.js";import"./Form.c7b93c30.js";import"./Col.aaf3a498.js";import"./useFlexGapSupport.d180d1f9.js";import"./index.1a3584cc.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.ef33b52d.js";import"./FullscreenOutlined.61308bd0.js";import"./index.86d0d66d.js";import"./fromPairs.84aabb58.js";import"./index.fa5b7037.js";import"./scrollTo.fdaedefa.js";import"./index.293f4e17.js";/* empty css              *//* empty css               */import"./useFormItem.1fc06be9.js";import"./index.861cf7a1.js";import"./index.12a78234.js";import"./download.a8bc32d2.js";import"./base64Conver.08b9f4ec.js";import"./index.4cbf34e1.js";import"./index.936f87ab.js";import"./index.5c454517.js";import"./uniqBy.d00325ce.js";import"./index.9a8bde03.js";import"./index.9a3dd532.js";import"./level.1d0b3bd8.js";import"./PictureDrawer.b4123ec3.js";import"./index.6360dd90.js";import"./PlusOutlined.c225e82e.js";const w=t=>h.get({url:"/accounts",params:t}),F=(t,m)=>{const{level_id:e,points:a,money:r}=m;return h.post({url:"/accounts/{id}",data:{id:t,level_id:e,points:a,money:r}})},x=T({name:"CustomerManagement",components:{BasicTable:g,DetailModal:D,TableAction:b},setup(){const[t,{openModal:m}]=k(),[e,{reload:a}]=C({title:"\u7528\u6237\u5217\u8868",api:w,fetchSetting:{listField:"accounts"},columns:$,formConfig:{labelWidth:120,schemas:v},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function r(o){m(!0,{record:o,isUpdate:!0})}function s(o){}function p(i){return u(this,arguments,function*({values:o}){const n=yield F(o.id,o);a()})}return{registerTable:e,registerModal:t,handleEdit:r,handleDelete:s,handleUpdateSuccess:p}}});function A(t,m,e,a,r,s){const p=l("TableAction"),o=l("BasicTable"),i=l("DetailModal");return d(),B("div",null,[f(o,{onRegister:t.registerTable},{bodyCell:M(({column:n,record:c})=>[n.key==="action"?(d(),S(p,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:t.handleEdit.bind(null,c)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:t.handleDelete.bind(null,c)}}]},null,8,["actions"])):y("",!0)]),_:1},8,["onRegister"]),f(i,{onRegister:t.registerModal,onSuccess:t.handleUpdateSuccess},null,8,["onRegister","onSuccess"])])}var qt=_(x,[["render",A]]);export{qt as default};
