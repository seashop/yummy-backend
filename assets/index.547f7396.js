var E=Object.defineProperty;var S=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var _=(t,e,o)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,f=(t,e)=>{for(var o in e||(e={}))x.call(e,o)&&_(t,o,e[o]);if(S)for(var o of S(e))A.call(e,o)&&_(t,o,e[o]);return t};import{av as k,a as y,s as R,v as w,be as D,ax as p,o as u,j as m,y as v,i as h,n,w as a,x as s,l as F}from"./index.71d27ec8.js";import $ from"./Step1.fc890e92.js";import V from"./Step2.877c6f0e.js";import W from"./Step3.cd8bf1f8.js";import{P as b}from"./index.edca75a1.js";import{S as i}from"./index.db9a7503.js";import"./index.b332413b.js";import"./BasicForm.ecc16293.js";/* empty css              *//* empty css               */import"./index.0ddf3146.js";import"./index.82b73f0a.js";import"./Checkbox.b9fd9e63.js";import"./index.62708885.js";import"./index.b58f965a.js";import"./index.d5597332.js";import"./index.3e9a0c30.js";import"./index.570ef99c.js";import"./useFormItem.f4a165d1.js";import"./index.41548fff.js";import"./get.2ea61e62.js";import"./index.d16cb426.js";import"./eagerComputed.bf418e4f.js";import"./index.5dab2e2c.js";import"./_baseIteratee.07f786e9.js";import"./DeleteOutlined.9c425421.js";import"./Form.7dd7a545.js";import"./Col.cced6662.js";import"./useFlexGapSupport.dcaea212.js";import"./useSize.7f6a0415.js";import"./transButton.d7be3a5c.js";import"./index.13fbb7d1.js";import"./index.6cd30c01.js";import"./useWindowSizeFn.2f380c6a.js";import"./FullscreenOutlined.186960e1.js";import"./index.290183c2.js";import"./index.e69e205a.js";import"./uuid.2b29000c.js";import"./download.73216fb1.js";import"./base64Conver.08b9f4ec.js";import"./index.59a80f59.js";import"./index.f1d0b8cc.js";import"./useRefs.4de25004.js";import"./index.5f6622b1.js";import"./uniqBy.49a2d577.js";import"./useForm.1ef3442d.js";import"./data.1866c55a.js";import"./index.9d14b45e.js";import"./index.cfb904a4.js";import"./index.4664d36a.js";import"./index.ca9c94a7.js";import"./onMountedOrActivated.c17cdee3.js";import"./useContentViewHeight.3e540372.js";import"./ArrowLeftOutlined.c7d64000.js";import"./index.7cb9b95f.js";const j=y({name:"FormStepPage",components:{Step1:$,Step2:V,Step3:W,PageWrapper:b,[i.name]:i,[i.Step.name]:i.Step},setup(){const t=R(0),e=w({initSetp2:!1,initSetp3:!1});function o(r){t.value++,e.initSetp2=!0}function c(){t.value--}function l(r){t.value++,e.initSetp3=!0}function d(){t.value=0,e.initSetp2=!1,e.initSetp3=!1}return f({current:t,handleStep1Next:o,handleStep2Next:l,handleRedo:d,handleStepPrev:c},D(e))}}),I={class:"step-form-form"},q={class:"mt-5"};function z(t,e,o,c,l,d){const r=p("a-step"),B=p("a-steps"),C=p("Step1"),N=p("Step2"),P=p("Step3"),g=p("PageWrapper");return u(),m(g,{title:"\u5206\u6B65\u8868\u5355",contentBackground:"",content:" \u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002",contentClass:"p-4"},{default:v(()=>[h("div",I,[n(B,{current:t.current},{default:v(()=>[n(r,{title:"\u586B\u5199\u8F6C\u8D26\u4FE1\u606F"}),n(r,{title:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F"}),n(r,{title:"\u5B8C\u6210"})]),_:1},8,["current"])]),h("div",q,[a(n(C,{onNext:t.handleStep1Next},null,8,["onNext"]),[[s,t.current===0]]),t.initSetp2?a((u(),m(N,{key:0,onPrev:t.handleStepPrev,onNext:t.handleStep2Next},null,8,["onPrev","onNext"])),[[s,t.current===1]]):F("",!0),t.initSetp3?a((u(),m(P,{key:1,onRedo:t.handleRedo},null,8,["onRedo"])),[[s,t.current===2]]):F("",!0)])]),_:1})}var Jt=k(j,[["render",z],["__scopeId","data-v-46d6ddea"]]);export{Jt as default};
