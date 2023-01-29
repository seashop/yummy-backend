import{M as E,a as F}from"./index.30a2f88d.js";import{P as k}from"./index.edca75a1.js";import{av as C,a as w,s as p,ax as t,o as g,j as A,y as r,i as s,n as a,z as d,k as B}from"./index.71d27ec8.js";import{C as D}from"./index.5d633dba.js";import"./index.5cecd89c.js";/* empty css               */import"./index.6cd30c01.js";import"./useWindowSizeFn.2f380c6a.js";import"./FullscreenOutlined.186960e1.js";import"./onMountedOrActivated.c17cdee3.js";import"./index.4664d36a.js";import"./index.ca9c94a7.js";import"./useSize.7f6a0415.js";import"./eagerComputed.bf418e4f.js";import"./useContentViewHeight.3e540372.js";import"./ArrowLeftOutlined.c7d64000.js";import"./index.7cb9b95f.js";import"./transButton.d7be3a5c.js";import"./index.205180e2.js";import"./index.5f6622b1.js";import"./Col.cced6662.js";import"./useFlexGapSupport.dcaea212.js";import"./useRefs.4de25004.js";import"./PlusOutlined.3ca17d8f.js";const M=w({components:{MarkDown:E,PageWrapper:k,MarkdownViewer:F,ACard:D},setup(){const e=p(null),u=p(`
# \u6807\u9898h1

##### \u6807\u9898h5

**\u52A0\u7C97**
*\u659C\u4F53*
~~\u5220\u9664\u7EBF~~
[\u94FE\u63A5](https://github.com/vbenjs/vue-vben-admin)
\u2193\u5206\u5272\u7EBF\u2193

---


* \u65E0\u5E8F\u5217\u88681
  * \u65E0\u5E8F\u5217\u88681.1

1. \u6709\u5E8F\u5217\u88681
2. \u6709\u5E8F\u5217\u88682

* [ ] \u4EFB\u52A1\u5217\u88681
* [x] \u4EFB\u52A1\u5217\u88682

> \u5F15\u7528\u793A\u4F8B

\`\`\`js
// \u4EE3\u7801\u5757:
(() => {
  var htmlRoot = document.getElementById('htmlRoot');
  var theme = window.localStorage.getItem('__APP__DARK__MODE__');
  if (htmlRoot && theme) {
    htmlRoot.setAttribute('data-theme', theme);
    theme = htmlRoot = null;
  }
})();
\`\`\`

| \u8868\u683C | \u793A\u4F8B | \u{1F389}\uFE0F |
| --- | --- | --- |
| 1 | 2 | 3 |
| 4 | 5 | 6 |
`);function m(){const o=B(e);if(!o)return;o.getVditor().setTheme("dark","dark","dracula")}function l(o){u.value=o}function i(){u.value=""}return{value:u,toggleTheme:m,markDownRef:e,handleChange:l,clearValue:i}}}),V={class:"mt-2"};function R(e,u,m,l,i,o){const n=t("a-button"),c=t("MarkDown"),f=t("MarkdownViewer"),_=t("a-card"),h=t("PageWrapper");return g(),A(h,{title:"MarkDown\u7EC4\u4EF6\u793A\u4F8B"},{default:r(()=>[s("div",null,[a(n,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:r(()=>[d(" \u9ED1\u6697\u4E3B\u9898 ")]),_:1},8,["onClick"]),a(n,{onClick:e.clearValue,class:"mb-2",type:"default"},{default:r(()=>[d(" \u6E05\u7A7A\u5185\u5BB9 ")]),_:1},8,["onClick"]),a(c,{value:e.value,"onUpdate:value":u[0]||(u[0]=v=>e.value=v),onChange:e.handleChange,ref:"markDownRef",placeholder:"\u8FD9\u662F\u5360\u4F4D\u6587\u672C"},null,8,["value","onChange"])]),s("div",V,[a(_,{title:"Markdown Viewer \u7EC4\u4EF6\u6F14\u793A"},{default:r(()=>[a(f,{value:e.value},null,8,["value"])]),_:1})])]),_:1})}var ee=C(M,[["render",R]]);export{ee as default};
