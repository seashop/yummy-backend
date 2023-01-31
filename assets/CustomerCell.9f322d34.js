import{B as g,T as _}from"./TableImg.d2e92ef2.js";import"./BasicForm.11e460f6.js";import{u as E}from"./useTable.73eac09a.js";import{av as T,a as y,ax as r,o as t,h as l,n as k,y as a,F as A,z as m,t as p,j as i,l as C}from"./index.c4bcccae.js";import{T as f}from"./index.0a2bde25.js";import{A as B}from"./index.a7bd6f74.js";import{d as I}from"./table.e8ebdb25.js";import"./index.ba0073c4.js";import"./Checkbox.6855b002.js";import"./index.57c3dc31.js";import"./index.8adaff47.js";import"./eagerComputed.d0b9ee41.js";import"./useForm.9fc31f81.js";import"./index.c4b57652.js";import"./index.32df30ea.js";import"./onMountedOrActivated.36541739.js";import"./useWindowSizeFn.4ec568b8.js";import"./useContentViewHeight.4714da75.js";import"./ArrowLeftOutlined.f8f3dc9e.js";import"./index.2f012cb3.js";import"./useSize.1344b7d2.js";import"./transButton.80503396.js";import"./index.e7f07382.js";import"./index.fc21d40d.js";import"./index.3d13f588.js";import"./uuid.2b29000c.js";import"./index.b4ace7ad.js";import"./_baseIteratee.ea415784.js";import"./get.d6c8fb63.js";import"./DeleteOutlined.42e11d46.js";import"./index.e182d5a1.js";import"./useRefs.9398ff58.js";import"./Form.fcad3fe0.js";import"./Col.843b66ed.js";import"./useFlexGapSupport.d852bf74.js";import"./index.a97dab51.js";import"./FullscreenOutlined.83eb1df3.js";import"./index.ce8ec429.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.f4d81b29.js";import"./index.e603a1c1.js";import"./fromPairs.84aabb58.js";import"./index.5b91ae9f.js";import"./scrollTo.43e7de4d.js";import"./index.579bacc2.js";/* empty css              *//* empty css               */import"./useFormItem.18f8f3df.js";import"./index.891c6174.js";import"./index.c5a9aa2d.js";import"./download.3199245e.js";import"./base64Conver.08b9f4ec.js";import"./index.587a0685.js";import"./index.8fb21350.js";import"./index.e291623e.js";import"./uniqBy.4b200e6e.js";const x=[{title:"ID",dataIndex:"id"},{title:"\u5934\u50CF",dataIndex:"avatar",width:100},{title:"\u5206\u7C7B",dataIndex:"category",width:80,align:"center",defaultHidden:!0},{title:"\u59D3\u540D",dataIndex:"name",width:120},{title:"\u56FE\u7247\u5217\u88681",dataIndex:"imgArr",helpMessage:["\u8FD9\u662F\u7B80\u5355\u6A21\u5F0F\u7684\u56FE\u7247\u5217\u8868","\u53EA\u4F1A\u663E\u793A\u4E00\u5F20\u5728\u8868\u683C\u4E2D","\u4F46\u70B9\u51FB\u53EF\u9884\u89C8\u591A\u5F20\u56FE\u7247"],width:140},{title:"\u7167\u7247\u5217\u88682",dataIndex:"imgs",width:160},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no"},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime"}],b=y({components:{BasicTable:g,TableImg:_,Tag:f,Avatar:B},setup(){const[u]=E({title:"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9",titleHelpMessage:"\u8868\u683C\u4E2D\u6240\u6709\u5934\u50CF\u3001\u56FE\u7247\u5747\u4E3Amock\u751F\u6210\uFF0C\u4EC5\u7528\u4E8E\u6F14\u793A\u56FE\u7247\u5360\u4F4D",api:I,columns:x,bordered:!0,showTableSetting:!0});return{registerTable:u}}}),h={class:"p-4"};function v(u,D,w,L,z,$){const s=r("Tag"),c=r("Avatar"),n=r("TableImg"),F=r("BasicTable");return t(),l("div",h,[k(F,{onRegister:u.registerTable},{bodyCell:a(({column:e,record:o,text:d})=>[e.key==="id"?(t(),l(A,{key:0},[m(" ID: "+p(o.id),1)],64)):e.key==="no"?(t(),i(s,{key:1,color:"green"},{default:a(()=>[m(p(o.no),1)]),_:2},1024)):e.key==="avatar"?(t(),i(c,{key:2,size:60,src:o.avatar},null,8,["src"])):e.key==="imgArr"?(t(),i(n,{key:3,size:60,simpleShow:!0,imgList:d},null,8,["imgList"])):e.key==="imgs"?(t(),i(n,{key:4,size:60,imgList:d},null,8,["imgList"])):e.key==="category"?(t(),i(s,{key:5,color:"green"},{default:a(()=>[m(p(o.no),1)]),_:2},1024)):C("",!0)]),_:1},8,["onRegister"])])}var Vt=T(b,[["render",v]]);export{Vt as default};