import{B}from"./TableImg.3f5fdb24.js";import"./BasicForm.c77a22ea.js";import{getBasicColumns as v,getBasicData as b}from"./tableData.38d0f3c2.js";import{av as h,a as A,s as e,ax as c,o as E,h as k,n as i,y as r,z as m,t as l}from"./index.332f1f61.js";import"./index.94c8f3b7.js";import"./Checkbox.d36bce60.js";import"./index.ee5847bb.js";import"./index.569fc2b5.js";import"./eagerComputed.b4fd04a8.js";import"./useForm.4855708a.js";import"./index.fb09cd3e.js";import"./index.f067aad0.js";import"./index.051b3cdd.js";import"./useSize.ccb706e0.js";import"./onMountedOrActivated.ae6205f0.js";import"./useWindowSizeFn.10a47dfe.js";import"./useContentViewHeight.ab3b2185.js";import"./ArrowLeftOutlined.2a6c8c6a.js";import"./index.3d54a3f8.js";import"./transButton.dc121a8e.js";import"./index.90f61e6e.js";import"./index.f67d6b77.js";import"./index.7a63a8fa.js";import"./index.0c8a73e2.js";import"./uuid.2b29000c.js";import"./index.85c6ade0.js";import"./_baseIteratee.b39208fd.js";import"./get.62966e6c.js";import"./DeleteOutlined.24a033a9.js";import"./index.95215ebf.js";import"./useRefs.32186409.js";import"./Form.6b7ab19e.js";import"./Col.c24e698a.js";import"./useFlexGapSupport.1de4ef65.js";import"./index.754223f0.js";import"./FullscreenOutlined.a861df37.js";import"./index.1e4861a7.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.ddeccf26.js";import"./index.6faba884.js";import"./fromPairs.84aabb58.js";import"./index.3dd7f5e6.js";import"./scrollTo.e4156db4.js";import"./index.52db270f.js";/* empty css              *//* empty css               */import"./useFormItem.937635d1.js";import"./index.461a54c8.js";import"./index.d6e61de6.js";import"./download.6a29d639.js";import"./base64Conver.08b9f4ec.js";import"./index.683bc381.js";import"./index.aa732719.js";import"./index.2b21a1d3.js";import"./uniqBy.b04fb3f0.js";const y=A({components:{BasicTable:B},setup(){const o=e(!1),a=e(!1),n=e(!0),p=e(!0),u=e(!1);function d(){o.value=!o.value}function t(){n.value=!n.value}function s(){a.value=!0,setTimeout(()=>{a.value=!1,u.value={pageSize:20}},3e3)}function g(){p.value=!p.value}function C(f){}return{columns:v(),data:b(),canResize:o,loading:a,striped:n,border:p,toggleStriped:t,toggleCanResize:d,toggleLoading:s,toggleBorder:g,pagination:u,handleColumnChange:C}}}),z={class:"p-4"};function F(o,a,n,p,u,d){const t=c("a-button"),s=c("BasicTable");return E(),k("div",z,[i(s,{title:"\u57FA\u7840\u793A\u4F8B",titleHelpMessage:"\u6E29\u99A8\u63D0\u9192",columns:o.columns,dataSource:o.data,canResize:o.canResize,loading:o.loading,striped:o.striped,bordered:o.border,showTableSetting:"",pagination:o.pagination,onColumnsChange:o.handleColumnChange},{toolbar:r(()=>[i(t,{type:"primary",onClick:o.toggleCanResize},{default:r(()=>[m(l(o.canResize?"\u53D6\u6D88\u81EA\u9002\u5E94":"\u81EA\u9002\u5E94\u9AD8\u5EA6"),1)]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleBorder},{default:r(()=>[m(l(o.border?"\u9690\u85CF\u8FB9\u6846":"\u663E\u793A\u8FB9\u6846"),1)]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleLoading},{default:r(()=>[m(" \u5F00\u542Floading ")]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleStriped},{default:r(()=>[m(l(o.striped?"\u9690\u85CF\u6591\u9A6C\u7EB9":"\u663E\u793A\u6591\u9A6C\u7EB9"),1)]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination","onColumnsChange"])])}var Do=h(y,[["render",F]]);export{Do as default};
