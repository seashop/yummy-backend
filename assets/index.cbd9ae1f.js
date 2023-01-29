var M=(e,r,s)=>new Promise((u,n)=>{var d=o=>{try{i(s.next(o))}catch(a){n(a)}},p=o=>{try{i(s.throw(o))}catch(a){n(a)}},i=o=>o.done?u(o.value):Promise.resolve(o.value).then(d,p);i((s=s.apply(e,r)).next())});import{B as k}from"./TableImg.c25142d5.js";import{T as y}from"./BasicForm.ecc16293.js";import{u as B}from"./useTable.6a40baa5.js";import{d$ as c,e0 as U,av as F,a as R,ax as m,o as _,h as A,n as g,y as S,z as I,j as P,l as E}from"./index.71d27ec8.js";import{u as T}from"./index.6cd30c01.js";import N from"./PasswordModal.7d9df971.js";import{U as $,c as V,s as D}from"./UserModal.e4c4d4ab.js";import"./index.82b73f0a.js";import"./Checkbox.b9fd9e63.js";import"./index.62708885.js";import"./index.d16cb426.js";import"./eagerComputed.bf418e4f.js";import"./useForm.1ef3442d.js";import"./index.edca75a1.js";import"./index.4664d36a.js";import"./index.ca9c94a7.js";import"./useSize.7f6a0415.js";import"./onMountedOrActivated.c17cdee3.js";import"./useWindowSizeFn.2f380c6a.js";import"./useContentViewHeight.3e540372.js";import"./ArrowLeftOutlined.c7d64000.js";import"./index.7cb9b95f.js";import"./transButton.d7be3a5c.js";import"./index.3e9a0c30.js";import"./index.570ef99c.js";import"./index.b58f965a.js";import"./index.d5597332.js";import"./uuid.2b29000c.js";import"./index.5dab2e2c.js";import"./_baseIteratee.07f786e9.js";import"./get.2ea61e62.js";import"./DeleteOutlined.9c425421.js";import"./index.b332413b.js";import"./useRefs.4de25004.js";import"./Form.7dd7a545.js";import"./Col.cced6662.js";import"./useFlexGapSupport.dcaea212.js";import"./index.0ddf3146.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.9218606a.js";import"./FullscreenOutlined.186960e1.js";import"./index.e69e205a.js";import"./fromPairs.84aabb58.js";import"./index.41548fff.js";import"./scrollTo.7d8435ac.js";import"./index.776e169d.js";/* empty css              *//* empty css               */import"./useFormItem.f4a165d1.js";import"./index.13fbb7d1.js";import"./index.290183c2.js";import"./download.73216fb1.js";import"./base64Conver.08b9f4ec.js";import"./index.59a80f59.js";import"./index.f1d0b8cc.js";import"./index.5f6622b1.js";import"./uniqBy.49a2d577.js";import"./pb.54cd1376.js";const v=e=>c.post({url:"/users:list",params:e}),j=e=>c.post({url:"/users",data:e}),q=(e,r)=>c.patch({url:U("/users/{id}",{id:e}),data:r}),x=(e,r)=>c.patch({url:U("/users/{id}/password",{id:e}),data:r}),z=e=>c.delete({url:U("/users/{id}",{id:e})}),H=R({name:"UserManagement",components:{BasicTable:k,TableAction:y,Image,PasswordModal:N,UserModal:$},setup(){const[e,{openModal:r}]=T(),[s,{getForm:u,reload:n}]=B({title:"\u7BA1\u7406\u5458\u5217\u8868",api:v,handleSearchInfoFn:d,fetchSetting:{listField:"users"},columns:V,formConfig:{labelWidth:120,schemas:D},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function d(){return{filter:{loginName:{contains:u().getFieldsValue().loginName}}}}function p(){r(!0,{isUpdate:!1})}function i(t){r(!0,{record:t,isUpdate:!0})}function o(t){return M(this,null,function*(){yield z(t.id).then(()=>{n()})})}function a(Ye){return M(this,arguments,function*({isUpdate:t,values:h}){if(t){const C=yield q(h.id,h)}else{const C=yield j(h)}n()})}const[w,{openModal:b}]=T();function f(t){b(!0,{record:t,isUpdate:!0})}function l({values:t}){x(t.id,t).then(()=>{n()})}return{registerTable:s,registerModal:e,handleCreate:p,handleEdit:i,handlePassword:f,handleDelete:o,handleSuccess:a,registerPasswordModal:w,handlePasswordSuccess:l}}});function L(e,r,s,u,n,d){const p=m("a-button"),i=m("Image"),o=m("TableAction"),a=m("BasicTable"),w=m("PasswordModal"),b=m("UserModal");return _(),A("div",null,[g(a,{onRegister:e.registerTable},{toolbar:S(()=>[g(p,{type:"primary",onClick:e.handleCreate},{default:S(()=>[I(" \u65B0\u589E\u7BA1\u7406\u5458 ")]),_:1},8,["onClick"])]),bodyCell:S(({column:f,record:l})=>[f.key==="img"?(_(),P(i,{key:0,src:l.img.full_url,width:60},null,8,["src"])):f.key==="action"?(_(),P(o,{key:1,actions:[{icon:"ant-design:credit-card-twotone",onClick:e.handlePassword.bind(null,l)},{icon:"clarity:note-edit-line",ifShow:()=>!0,onClick:e.handleEdit.bind(null,l)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,l)}}]},null,8,["actions"])):E("",!0)]),_:1},8,["onRegister"]),g(w,{onRegister:e.registerPasswordModal,onSuccess:e.handlePasswordSuccess},null,8,["onRegister","onSuccess"]),g(b,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Qe=F(H,[["render",L]]);export{Qe as default};
