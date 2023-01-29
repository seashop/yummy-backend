var C=(t,n,i)=>new Promise((c,m)=>{var u=o=>{try{r(i.next(o))}catch(e){m(e)}},p=o=>{try{r(i.throw(o))}catch(e){m(e)}},r=o=>o.done?c(o.value):Promise.resolve(o.value).then(u,p);r((i=i.apply(t,n)).next())});import{av as y,a as _,ax as l,o as d,h as T,n as f,y as g,z as B,j as h,l as k}from"./index.71d27ec8.js";import{I}from"./index.e69e205a.js";import{B as M}from"./TableImg.c25142d5.js";import{T as S}from"./BasicForm.ecc16293.js";import{u as w}from"./useTable.6a40baa5.js";import{i as E}from"./PictureDrawer.d169ad75.js";import{l as F,u as v,c as A}from"./category.26a8c601.js";import{u as R}from"./index.6cd30c01.js";import{C as U,c as $,s as x}from"./CategoryModal.ee277730.js";import"./index.82b73f0a.js";import"./Checkbox.b9fd9e63.js";import"./index.62708885.js";import"./index.d16cb426.js";import"./eagerComputed.bf418e4f.js";import"./useForm.1ef3442d.js";import"./index.edca75a1.js";import"./index.4664d36a.js";import"./index.ca9c94a7.js";import"./useSize.7f6a0415.js";import"./onMountedOrActivated.c17cdee3.js";import"./useWindowSizeFn.2f380c6a.js";import"./useContentViewHeight.3e540372.js";import"./ArrowLeftOutlined.c7d64000.js";import"./index.7cb9b95f.js";import"./transButton.d7be3a5c.js";import"./index.3e9a0c30.js";import"./index.570ef99c.js";import"./index.b58f965a.js";import"./index.d5597332.js";import"./uuid.2b29000c.js";import"./index.5dab2e2c.js";import"./_baseIteratee.07f786e9.js";import"./get.2ea61e62.js";import"./DeleteOutlined.9c425421.js";import"./index.b332413b.js";import"./useRefs.4de25004.js";import"./Form.7dd7a545.js";import"./Col.cced6662.js";import"./useFlexGapSupport.dcaea212.js";import"./index.0ddf3146.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.9218606a.js";import"./FullscreenOutlined.186960e1.js";import"./fromPairs.84aabb58.js";import"./index.41548fff.js";import"./scrollTo.7d8435ac.js";import"./index.776e169d.js";/* empty css              *//* empty css               */import"./useFormItem.f4a165d1.js";import"./index.13fbb7d1.js";import"./index.290183c2.js";import"./download.73216fb1.js";import"./base64Conver.08b9f4ec.js";import"./index.59a80f59.js";import"./index.f1d0b8cc.js";import"./index.5f6622b1.js";import"./uniqBy.49a2d577.js";import"./index.5cecd89c.js";import"./PlusOutlined.3ca17d8f.js";import"./index.50038997.js";import"./index.23339730.js";import"./inns.cee8c6db.js";const D=_({name:"CategoryManagement",components:{BasicTable:M,CategoryModal:U,TableAction:S,Image:I},setup(){const[t,{openModal:n}]=R(),[i,{reload:c}]=w({title:"\u5206\u7C7B\u5217\u8868",api:F,fetchSetting:{listField:"productCats"},columns:$,formConfig:{labelWidth:120,schemas:x},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function m(){n(!0,{isUpdate:!1})}function u(o){n(!0,{record:o,isUpdate:!0})}function p(o){}function r(b){return C(this,arguments,function*({isUpdate:o,values:e}){if(o){const a=yield v(e)}else{const a=yield A(e)}c()})}return{registerTable:i,registerModal:t,handleCreate:m,handleEdit:u,handleDelete:p,handleSuccess:r,imageUrl:E}}});function N(t,n,i,c,m,u){const p=l("a-button"),r=l("Image"),o=l("TableAction"),e=l("BasicTable"),b=l("CategoryModal");return d(),T("div",null,[f(e,{onRegister:t.registerTable},{toolbar:g(()=>[f(p,{type:"primary",onClick:t.handleCreate},{default:g(()=>[B(" \u65B0\u589E\u5206\u7C7B ")]),_:1},8,["onClick"])]),bodyCell:g(({column:a,record:s})=>[a.key==="imgId"?(d(),h(r,{key:0,src:t.imageUrl(s==null?void 0:s.imgId),width:60},null,8,["src"])):a.key==="action"?(d(),h(o,{key:1,actions:[{icon:"clarity:note-edit-line",onClick:t.handleEdit.bind(null,s)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:t.handleDelete.bind(null,s)}}]},null,8,["actions"])):k("",!0)]),_:1},8,["onRegister"]),f(b,{onRegister:t.registerModal,onSuccess:t.handleSuccess},null,8,["onRegister","onSuccess"])])}var Po=y(D,[["render",N]]);export{Po as default};
