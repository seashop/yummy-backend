import{B as d}from"./TableImg.d2e92ef2.js";import"./BasicForm.11e460f6.js";import{E as f}from"./index.a062640a.js";import{c as _,d as n,j as E}from"./data.be6d2684.js";import{u as C}from"./index.a97dab51.js";import{P as F}from"./index.c4b57652.js";import{av as x,a as B,ax as t,o as g,j as b,y as r,n as p,z as M}from"./index.c4bcccae.js";import"./index.ba0073c4.js";import"./Checkbox.6855b002.js";import"./index.57c3dc31.js";import"./index.8adaff47.js";import"./eagerComputed.d0b9ee41.js";import"./useForm.9fc31f81.js";import"./index.e7f07382.js";import"./index.fc21d40d.js";import"./index.3d13f588.js";import"./index.0a2bde25.js";import"./uuid.2b29000c.js";import"./index.b4ace7ad.js";import"./_baseIteratee.ea415784.js";import"./get.d6c8fb63.js";import"./DeleteOutlined.42e11d46.js";import"./index.e182d5a1.js";import"./useRefs.9398ff58.js";import"./Form.fcad3fe0.js";import"./Col.843b66ed.js";import"./useFlexGapSupport.d852bf74.js";import"./useSize.1344b7d2.js";import"./useWindowSizeFn.4ec568b8.js";import"./onMountedOrActivated.36541739.js";import"./index.ce8ec429.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.f4d81b29.js";import"./FullscreenOutlined.83eb1df3.js";import"./index.e603a1c1.js";import"./fromPairs.84aabb58.js";import"./index.5b91ae9f.js";import"./scrollTo.43e7de4d.js";import"./index.579bacc2.js";/* empty css              *//* empty css               */import"./useFormItem.18f8f3df.js";import"./transButton.80503396.js";import"./index.891c6174.js";import"./index.c5a9aa2d.js";import"./download.3199245e.js";import"./base64Conver.08b9f4ec.js";import"./index.587a0685.js";import"./index.8fb21350.js";import"./index.e291623e.js";import"./uniqBy.4b200e6e.js";import"./index.32df30ea.js";import"./index.a7bd6f74.js";import"./useContentViewHeight.4714da75.js";import"./ArrowLeftOutlined.f8f3dc9e.js";import"./index.2f012cb3.js";const A=B({components:{BasicTable:d,ExpExcelModal:f,PageWrapper:F},setup(){function o({filename:i,bookType:a}){E({data:n,filename:i,write2excelOpts:{bookType:a}})}const[e,{openModal:m}]=C();return{defaultHeader:o,columns:_,data:n,register:e,openModal:m}}});function S(o,e,m,i,a,T){const s=t("a-button"),u=t("BasicTable"),c=t("ExpExcelModal"),l=t("PageWrapper");return g(),b(l,{title:"\u5BFC\u51FA\u793A\u4F8B",content:"\u53EF\u4EE5\u9009\u62E9\u5BFC\u51FA\u683C\u5F0F"},{default:r(()=>[p(u,{title:"\u57FA\u7840\u8868\u683C",columns:o.columns,dataSource:o.data},{toolbar:r(()=>[p(s,{onClick:o.openModal},{default:r(()=>[M(" \u5BFC\u51FA ")]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"]),p(c,{onRegister:o.register,onSuccess:o.defaultHeader},null,8,["onRegister","onSuccess"])]),_:1})}var ho=x(A,[["render",S]]);export{ho as default};
