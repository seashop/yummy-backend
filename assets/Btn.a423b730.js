import{av as v,a as B,ax as r,bR as P,o as a,j as n,y as e,dk as T,r as g,fU as F,f as D,n as t,i as d,z as o,t as c,l as f,w as C}from"./index.c4bcccae.js";import{A as h}from"./index.c5a9aa2d.js";import{D as U}from"./index.ce8ec429.js";import{S as k}from"./index.891c6174.js";import $ from"./CurrentPermissionMode.efc63d32.js";import{A as w}from"./index.64cf1cbf.js";import{P as N}from"./index.c4b57652.js";import"./useFlexGapSupport.d852bf74.js";import"./index.32df30ea.js";import"./index.a7bd6f74.js";import"./useSize.1344b7d2.js";import"./eagerComputed.d0b9ee41.js";import"./onMountedOrActivated.36541739.js";import"./useWindowSizeFn.4ec568b8.js";import"./useContentViewHeight.4714da75.js";import"./ArrowLeftOutlined.f8f3dc9e.js";import"./index.2f012cb3.js";import"./transButton.80503396.js";const V=B({components:{Alert:h,PageWrapper:N,Space:k,CurrentPermissionMode:$,Divider:U,Authority:w},setup(){const{changeRole:u,hasPermission:l}=T(),E=g();return{userStore:E,RoleEnum:F,isSuper:D(()=>E.getRoleList.includes(F.SUPER)),isTest:D(()=>E.getRoleList.includes(F.TEST)),changeRole:u,hasPermission:l}}}),b={class:"mt-4"};function L(u,l,E,M,W,j){const R=r("CurrentPermissionMode"),_=r("Alert"),s=r("a-button"),A=r("Space"),i=r("Divider"),m=r("Authority"),S=r("PageWrapper"),p=P("auth");return a(),n(S,{title:"\u524D\u7AEF\u6743\u9650\u6309\u94AE\u793A\u4F8B",contentBackground:"",contentClass:"p-4",content:"\u7531\u4E8E\u5237\u65B0\u7684\u65F6\u5019\u4F1A\u8BF7\u6C42\u7528\u6237\u4FE1\u606F\u63A5\u53E3\uFF0C\u4F1A\u6839\u636E\u63A5\u53E3\u91CD\u7F6E\u89D2\u8272\u4FE1\u606F\uFF0C\u6240\u4EE5\u5237\u65B0\u540E\u754C\u9762\u4F1A\u6062\u590D\u539F\u6837\uFF0C\u5982\u679C\u4E0D\u9700\u8981\uFF0C\u53EF\u4EE5\u6CE8\u91CA src/layout/default/index\u5185\u7684\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u63A5\u53E3"},{default:e(()=>[t(R),d("p",null,[o(" \u5F53\u524D\u89D2\u8272: "),d("a",null,c(u.userStore.getRoleList),1)]),t(_,{class:"mt-4",type:"info",message:"\u70B9\u51FB\u540E\u8BF7\u67E5\u770B\u6309\u94AE\u53D8\u5316","show-icon":""}),d("div",b,[o(" \u6743\u9650\u5207\u6362(\u8BF7\u5148\u5207\u6362\u6743\u9650\u6A21\u5F0F\u4E3A\u524D\u7AEF\u89D2\u8272\u6743\u9650\u6A21\u5F0F): "),t(A,null,{default:e(()=>[t(s,{onClick:l[0]||(l[0]=y=>u.changeRole(u.RoleEnum.SUPER)),type:u.isSuper?"primary":"default"},{default:e(()=>[o(c(u.RoleEnum.SUPER),1)]),_:1},8,["type"]),t(s,{onClick:l[1]||(l[1]=y=>u.changeRole(u.RoleEnum.TEST)),type:u.isTest?"primary":"default"},{default:e(()=>[o(c(u.RoleEnum.TEST),1)]),_:1},8,["type"])]),_:1})]),t(i,null,{default:e(()=>[o("\u7EC4\u4EF6\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u6709\u9700\u8981\u53EF\u4EE5\u81EA\u884C\u5168\u5C40\u6CE8\u518C)")]),_:1}),t(m,{value:u.RoleEnum.SUPER},{default:e(()=>[t(s,{type:"primary",class:"mx-4"},{default:e(()=>[o(" \u62E5\u6709super\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})]),_:1},8,["value"]),t(m,{value:u.RoleEnum.TEST},{default:e(()=>[t(s,{color:"success",class:"mx-4"},{default:e(()=>[o(" \u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})]),_:1},8,["value"]),t(m,{value:[u.RoleEnum.TEST,u.RoleEnum.SUPER]},{default:e(()=>[t(s,{color:"error",class:"mx-4"},{default:e(()=>[o(" \u62E5\u6709[test,super]\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})]),_:1},8,["value"]),t(i,null,{default:e(()=>[o("\u51FD\u6570\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u9002\u7528\u4E8E\u51FD\u6570\u5185\u90E8\u8FC7\u6EE4)")]),_:1}),u.hasPermission(u.RoleEnum.SUPER)?(a(),n(s,{key:0,type:"primary",class:"mx-4"},{default:e(()=>[o(" \u62E5\u6709super\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})):f("",!0),u.hasPermission(u.RoleEnum.TEST)?(a(),n(s,{key:1,color:"success",class:"mx-4"},{default:e(()=>[o(" \u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})):f("",!0),u.hasPermission([u.RoleEnum.TEST,u.RoleEnum.SUPER])?(a(),n(s,{key:2,color:"error",class:"mx-4"},{default:e(()=>[o(" \u62E5\u6709[test,super]\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})):f("",!0),t(i,null,{default:e(()=>[o("\u6307\u4EE4\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u8BE5\u65B9\u5F0F\u4E0D\u80FD\u52A8\u6001\u4FEE\u6539\u6743\u9650.)")]),_:1}),C((a(),n(s,{type:"primary",class:"mx-4"},{default:e(()=>[o(" \u62E5\u6709super\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})),[[p,u.RoleEnum.SUPER]]),C((a(),n(s,{color:"success",class:"mx-4"},{default:e(()=>[o(" \u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})),[[p,u.RoleEnum.TEST]]),C((a(),n(s,{color:"error",class:"mx-4"},{default:e(()=>[o(" \u62E5\u6709[test,super]\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})),[[p,[u.RoleEnum.TEST,u.RoleEnum.SUPER]]])]),_:1})}var ru=v(V,[["render",L],["__scopeId","data-v-a5cca872"]]);export{ru as default};