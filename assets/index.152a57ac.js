import{C as g,M as i,J as F}from"./index.2f579132.js";import{P as x}from"./index.edca75a1.js";import{av as R,a as B,s as c,ax as n,o as b,j as S,y as o,n as a,z as r,k,e2 as h,bT as y}from"./index.71d27ec8.js";import{R as f}from"./index.82b73f0a.js";import{S as P}from"./index.13fbb7d1.js";import"./useWindowSizeFn.2f380c6a.js";import"./index.4664d36a.js";import"./index.ca9c94a7.js";import"./useSize.7f6a0415.js";import"./eagerComputed.bf418e4f.js";import"./onMountedOrActivated.c17cdee3.js";import"./useContentViewHeight.3e540372.js";import"./ArrowLeftOutlined.c7d64000.js";import"./index.7cb9b95f.js";import"./transButton.d7be3a5c.js";import"./Checkbox.b9fd9e63.js";import"./useFlexGapSupport.dcaea212.js";const v='{"name":"BeJson","url":"http://www.xxx.com","page":88,"isNonProfit":true,"address":{"street":"\u79D1\u6280\u56ED\u8DEF.","city":"\u6C5F\u82CF\u82CF\u5DDE","country":"\u4E2D\u56FD"},"links":[{"name":"Google","url":"http://www.xxx.com"},{"name":"Baidu","url":"http://www.xxx.com"},{"name":"SoSo","url":"http://www.xxx.com"}]}',j=`
      (() => {
        var htmlRoot = document.getElementById('htmlRoot');
        var theme = window.localStorage.getItem('__APP__DARK__MODE__');
        if (htmlRoot && theme) {
          htmlRoot.setAttribute('data-theme', theme);
          theme = htmlRoot = null;
        }
      })();
  `,J=`
     <!DOCTYPE html>
<html lang="en" id="htmlRoot">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="renderer" content="webkit" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"
    />
    <title><%= title %></title>
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body>
    <div id="app">
    </div>
  </body>
</html>
  `,M=B({components:{CodeEditor:g,PageWrapper:x,RadioButton:f.Button,RadioGroup:f.Group,ASpace:P},setup(){const t=c(i.JSON),e=c(v);function s(p){const u=p.target.value;if(u===i.JSON){e.value=v;return}if(u===i.HTML){e.value=J;return}if(u===i.JS){e.value=j;return}}function d(){k(t)==="application/json"?h.info({title:"\u7F16\u8F91\u5668\u5F53\u524D\u503C",content:y(F,{data:JSON.parse(e.value)})}):h.info({title:"\u7F16\u8F91\u5668\u5F53\u524D\u503C",content:e.value})}return{value:e,modeValue:t,handleModeChange:s,showData:d}}});function A(t,e,s,d,p,u){const _=n("a-button"),l=n("RadioButton"),w=n("RadioGroup"),E=n("a-space"),C=n("CodeEditor"),D=n("PageWrapper");return b(),S(D,{title:"\u4EE3\u7801\u7F16\u8F91\u5668\u7EC4\u4EF6\u793A\u4F8B",contentFullHeight:"",fixedHeight:"",contentBackground:""},{extra:o(()=>[a(E,{size:"middle"},{default:o(()=>[a(_,{onClick:t.showData,type:"primary"},{default:o(()=>[r("\u83B7\u53D6\u6570\u636E")]),_:1},8,["onClick"]),a(w,{"button-style":"solid",value:t.modeValue,"onUpdate:value":e[0]||(e[0]=m=>t.modeValue=m),onChange:t.handleModeChange},{default:o(()=>[a(l,{value:"application/json"},{default:o(()=>[r(" json\u6570\u636E ")]),_:1}),a(l,{value:"htmlmixed"},{default:o(()=>[r(" html\u4EE3\u7801 ")]),_:1}),a(l,{value:"javascript"},{default:o(()=>[r(" javascript\u4EE3\u7801 ")]),_:1})]),_:1},8,["value","onChange"])]),_:1})]),default:o(()=>[a(C,{value:t.value,"onUpdate:value":e[1]||(e[1]=m=>t.value=m),mode:t.modeValue},null,8,["value","mode"])]),_:1})}var Z=R(M,[["render",A]]);export{Z as default};
