import{B as b}from"./TableImg.c25142d5.js";import{T as C}from"./BasicForm.ecc16293.js";import{u as g}from"./useTable.6a40baa5.js";import{a as _}from"./system.af2c1941.js";import{u as T}from"./index.6cd30c01.js";import{D as B,c as D,s as E}from"./DeptModal.87c3a577.js";import{av as k,a as M,ax as e,o as d,h as y,n as a,y as m,z as S,j as v,l as R}from"./index.71d27ec8.js";import"./index.82b73f0a.js";import"./Checkbox.b9fd9e63.js";import"./index.62708885.js";import"./index.d16cb426.js";import"./eagerComputed.bf418e4f.js";import"./useForm.1ef3442d.js";import"./index.edca75a1.js";import"./index.4664d36a.js";import"./index.ca9c94a7.js";import"./useSize.7f6a0415.js";import"./onMountedOrActivated.c17cdee3.js";import"./useWindowSizeFn.2f380c6a.js";import"./useContentViewHeight.3e540372.js";import"./ArrowLeftOutlined.c7d64000.js";import"./index.7cb9b95f.js";import"./transButton.d7be3a5c.js";import"./index.3e9a0c30.js";import"./index.570ef99c.js";import"./index.b58f965a.js";import"./index.d5597332.js";import"./uuid.2b29000c.js";import"./index.5dab2e2c.js";import"./_baseIteratee.07f786e9.js";import"./get.2ea61e62.js";import"./DeleteOutlined.9c425421.js";import"./index.b332413b.js";import"./useRefs.4de25004.js";import"./Form.7dd7a545.js";import"./Col.cced6662.js";import"./useFlexGapSupport.dcaea212.js";import"./index.0ddf3146.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.9218606a.js";import"./FullscreenOutlined.186960e1.js";import"./index.e69e205a.js";import"./fromPairs.84aabb58.js";import"./index.41548fff.js";import"./scrollTo.7d8435ac.js";import"./index.776e169d.js";/* empty css              *//* empty css               */import"./useFormItem.f4a165d1.js";import"./index.13fbb7d1.js";import"./index.290183c2.js";import"./download.73216fb1.js";import"./base64Conver.08b9f4ec.js";import"./index.59a80f59.js";import"./index.f1d0b8cc.js";import"./index.5f6622b1.js";import"./uniqBy.49a2d577.js";const w=M({name:"DeptManagement",components:{BasicTable:b,DeptModal:B,TableAction:C},setup(){const[o,{openModal:i}]=T(),[p,{reload:s}]=g({title:"\u90E8\u95E8\u5217\u8868",api:_,columns:D,formConfig:{labelWidth:120,schemas:E},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function l(){i(!0,{isUpdate:!1})}function c(t){i(!0,{record:t,isUpdate:!0})}function r(t){}function n(){s()}return{registerTable:p,registerModal:o,handleCreate:l,handleEdit:c,handleDelete:r,handleSuccess:n}}});function x(o,i,p,s,l,c){const r=e("a-button"),n=e("TableAction"),t=e("BasicTable"),f=e("DeptModal");return d(),y("div",null,[a(t,{onRegister:o.registerTable},{toolbar:m(()=>[a(r,{type:"primary",onClick:o.handleCreate},{default:m(()=>[S(" \u65B0\u589E\u90E8\u95E8 ")]),_:1},8,["onClick"])]),bodyCell:m(({column:h,record:u})=>[h.key==="action"?(d(),v(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])):R("",!0)]),_:1},8,["onRegister"]),a(f,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var Vo=k(w,[["render",x]]);export{Vo as default};
