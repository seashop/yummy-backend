import{B as P}from"./TableImg.8c3ea297.js";import"./BasicForm.b02f3207.js";import{u as $}from"./useTable.ce0f5d89.js";import{getBasicColumns as p,getBasicShortColumns as M}from"./tableData.38d0f3c2.js";import{av as N,a as V,ax as g,o as z,h as I,i as C,n as t,y as u,z as i,D as H}from"./index.d50a9800.js";import{d as U}from"./table.01871394.js";import"./index.9bbde0e5.js";import"./Checkbox.ac809a47.js";import"./index.c240df87.js";import"./index.c693835c.js";import"./eagerComputed.7b567627.js";import"./useForm.76075c71.js";import"./index.0bd7a6a1.js";import"./index.02325821.js";import"./index.b6395a58.js";import"./useSize.381fa398.js";import"./onMountedOrActivated.276f36da.js";import"./useWindowSizeFn.974b14b8.js";import"./useContentViewHeight.52d4bb94.js";import"./ArrowLeftOutlined.3ec12d2b.js";import"./index.10182938.js";import"./transButton.1f86bfc1.js";import"./index.16714cd7.js";import"./index.118afb88.js";import"./index.11b93be2.js";import"./index.406f84fe.js";import"./uuid.2b29000c.js";import"./index.e56403fd.js";import"./_baseIteratee.9a09b333.js";import"./get.87e704f3.js";import"./DeleteOutlined.e72cc543.js";import"./index.4d8ea057.js";import"./useRefs.24425adc.js";import"./Form.a90eefb7.js";import"./Col.56b3f0ca.js";import"./useFlexGapSupport.7be7a3d1.js";import"./index.4900e588.js";import"./FullscreenOutlined.43b089d4.js";import"./index.f2d505bc.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.089d0fa2.js";import"./index.049dbb8d.js";import"./fromPairs.84aabb58.js";import"./index.0698dd78.js";import"./scrollTo.ebc992b0.js";import"./index.f3371471.js";/* empty css              *//* empty css               */import"./useFormItem.a0990f77.js";import"./index.ad2e4158.js";import"./index.7f7f4e74.js";import"./download.1213368a.js";import"./base64Conver.08b9f4ec.js";import"./index.679e84c1.js";import"./index.14cbd24c.js";import"./index.4848492a.js";import"./uniqBy.08eb7f78.js";const j=V({components:{BasicTable:P},setup(){const{createMessage:o}=H();function n(){}const[r,{setLoading:a,setColumns:s,getColumns:c,getDataSource:e,getRawDataSource:l,reload:m,getPaginationRef:f,setPagination:d,getSelectRows:F,getSelectRowKeys:B,setSelectedRowKeys:k,clearSelectedRowKeys:b}]=$({canResize:!0,title:"useTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528useTable\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",api:U,columns:p(),defSort:{field:"name",order:"ascend"},rowKey:"id",showTableSetting:!0,onChange:n,rowSelection:{type:"checkbox"},onColumnsChange:v=>{}});function D(){a(!0),setTimeout(()=>{a(!1)},1e3)}function E(){s(M())}function S(){s(p()),m({page:1})}function T(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),c()}function _(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),e()}function h(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),l()}function w(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),f()}function R(){d({current:2}),m()}function y(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),F()}function A(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),B()}function L(){k(["0","1","2"])}function K(){b()}return{registerTable:r,changeLoading:D,changeColumns:E,reloadTable:S,getColumn:T,getTableData:_,getTableRawData:h,getPagination:w,setPaginationInfo:R,getSelectRowList:y,getSelectRowKeyList:A,setSelectedRowKeyList:L,clearSelect:K,onChange:n}}}),q={class:"p-4"},G={class:"mb-4"},J={class:"mb-4"};function O(o,n,r,a,s,c){const e=g("a-button"),l=g("BasicTable");return z(),I("div",q,[C("div",G,[t(e,{class:"mr-2",onClick:o.reloadTable},{default:u(()=>[i(" \u8FD8\u539F ")]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.changeLoading},{default:u(()=>[i(" \u5F00\u542Floading ")]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.changeColumns},{default:u(()=>[i(" \u66F4\u6539Columns ")]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getColumn},{default:u(()=>[i(" \u83B7\u53D6Columns ")]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getTableData},{default:u(()=>[i(" \u83B7\u53D6\u8868\u683C\u6570\u636E ")]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getTableRawData},{default:u(()=>[i(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E ")]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.setPaginationInfo},{default:u(()=>[i(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 ")]),_:1},8,["onClick"])]),C("div",J,[t(e,{class:"mr-2",onClick:o.getSelectRowList},{default:u(()=>[i(" \u83B7\u53D6\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getSelectRowKeyList},{default:u(()=>[i(" \u83B7\u53D6\u9009\u4E2D\u884CKey ")]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.setSelectedRowKeyList},{default:u(()=>[i(" \u8BBE\u7F6E\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.clearSelect},{default:u(()=>[i(" \u6E05\u7A7A\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getPagination},{default:u(()=>[i(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ")]),_:1},8,["onClick"])]),t(l,{onRegister:o.registerTable},null,8,["onRegister"])])}var Zo=N(j,[["render",O]]);export{Zo as default};