import{B as d}from"./TableImg.c25142d5.js";import"./BasicForm.ecc16293.js";import{E as f}from"./index.7aaab673.js";import{c as _,d as n,j as E}from"./data.ff2ec25c.js";import{u as C}from"./index.6cd30c01.js";import{P as F}from"./index.edca75a1.js";import{av as x,a as B,ax as t,o as g,j as b,y as r,n as p,z as M}from"./index.71d27ec8.js";import"./index.82b73f0a.js";import"./Checkbox.b9fd9e63.js";import"./index.62708885.js";import"./index.d16cb426.js";import"./eagerComputed.bf418e4f.js";import"./useForm.1ef3442d.js";import"./index.3e9a0c30.js";import"./index.570ef99c.js";import"./index.b58f965a.js";import"./index.d5597332.js";import"./uuid.2b29000c.js";import"./index.5dab2e2c.js";import"./_baseIteratee.07f786e9.js";import"./get.2ea61e62.js";import"./DeleteOutlined.9c425421.js";import"./index.b332413b.js";import"./useRefs.4de25004.js";import"./Form.7dd7a545.js";import"./Col.cced6662.js";import"./useFlexGapSupport.dcaea212.js";import"./useSize.7f6a0415.js";import"./useWindowSizeFn.2f380c6a.js";import"./onMountedOrActivated.c17cdee3.js";import"./index.0ddf3146.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.9218606a.js";import"./FullscreenOutlined.186960e1.js";import"./index.e69e205a.js";import"./fromPairs.84aabb58.js";import"./index.41548fff.js";import"./scrollTo.7d8435ac.js";import"./index.776e169d.js";/* empty css              *//* empty css               */import"./useFormItem.f4a165d1.js";import"./transButton.d7be3a5c.js";import"./index.13fbb7d1.js";import"./index.290183c2.js";import"./download.73216fb1.js";import"./base64Conver.08b9f4ec.js";import"./index.59a80f59.js";import"./index.f1d0b8cc.js";import"./index.5f6622b1.js";import"./uniqBy.49a2d577.js";import"./index.4664d36a.js";import"./index.ca9c94a7.js";import"./useContentViewHeight.3e540372.js";import"./ArrowLeftOutlined.c7d64000.js";import"./index.7cb9b95f.js";const A=B({components:{BasicTable:d,ExpExcelModal:f,PageWrapper:F},setup(){function o({filename:i,bookType:a}){E({data:n,filename:i,write2excelOpts:{bookType:a}})}const[e,{openModal:m}]=C();return{defaultHeader:o,columns:_,data:n,register:e,openModal:m}}});function S(o,e,m,i,a,T){const s=t("a-button"),u=t("BasicTable"),c=t("ExpExcelModal"),l=t("PageWrapper");return g(),b(l,{title:"\u5BFC\u51FA\u793A\u4F8B",content:"\u53EF\u4EE5\u9009\u62E9\u5BFC\u51FA\u683C\u5F0F"},{default:r(()=>[p(u,{title:"\u57FA\u7840\u8868\u683C",columns:o.columns,dataSource:o.data},{toolbar:r(()=>[p(s,{onClick:o.openModal},{default:r(()=>[M(" \u5BFC\u51FA ")]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"]),p(c,{onRegister:o.register,onSuccess:o.defaultHeader},null,8,["onRegister","onSuccess"])]),_:1})}var ho=x(A,[["render",S]]);export{ho as default};
