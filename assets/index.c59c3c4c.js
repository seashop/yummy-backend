import{P as h}from"./index.edca75a1.js";import{av as A,a as I,cD as y,s as a,r as E,ax as s,o as n,j as B,y as u,n as r,i,h as c,l,t as F}from"./index.71d27ec8.js";import{C as D,a as k}from"./index.fa9df965.js";import{u as w}from"./upload.e75998d5.js";import{h as P}from"./header.d801b988.js";import"./index.4664d36a.js";import"./index.ca9c94a7.js";import"./useSize.7f6a0415.js";import"./eagerComputed.bf418e4f.js";import"./onMountedOrActivated.c17cdee3.js";import"./useWindowSizeFn.2f380c6a.js";import"./useContentViewHeight.3e540372.js";import"./ArrowLeftOutlined.c7d64000.js";import"./index.7cb9b95f.js";import"./transButton.d7be3a5c.js";import"./index.13fbb7d1.js";import"./useFlexGapSupport.dcaea212.js";import"./index.5dab2e2c.js";import"./_baseIteratee.07f786e9.js";import"./get.2ea61e62.js";import"./DeleteOutlined.9c425421.js";import"./index.b332413b.js";import"./useRefs.4de25004.js";import"./Form.7dd7a545.js";import"./Col.cced6662.js";import"./index.6cd30c01.js";import"./FullscreenOutlined.186960e1.js";import"./base64Conver.08b9f4ec.js";const $=I({components:{PageWrapper:h,CropperImage:D,CollapseContainer:y,CropperAvatar:k},setup(){var t;const e=a(""),m=a(""),d=a(""),C=a(""),v=E(),g=a(((t=v.getUserInfo)==null?void 0:t.avatar)||"");function _({imgBase64:p,imgInfo:f}){e.value=f,m.value=p}function o({imgBase64:p,imgInfo:f}){d.value=f,C.value=p}return{img:P,info:e,circleInfo:d,cropperImg:m,circleImg:C,handleCropend:_,handleCircleCropend:o,avatar:g,uploadApi:w}}}),N={class:"container p-4"},S={class:"cropper-container mr-10"},V=["src"],W={key:0},U={class:"container p-4"},j={class:"cropper-container mr-10"},b=["src"],q={key:0};function z(e,m,d,C,v,g){const _=s("CropperAvatar"),o=s("CollapseContainer"),t=s("CropperImage"),p=s("PageWrapper");return n(),B(p,{title:"\u56FE\u7247\u88C1\u526A\u793A\u4F8B",content:"\u9700\u8981\u5F00\u542F\u6D4B\u8BD5\u63A5\u53E3\u670D\u52A1\u624D\u80FD\u8FDB\u884C\u4E0A\u4F20\u6D4B\u8BD5\uFF01"},{default:u(()=>[r(o,{title:"\u5934\u50CF\u88C1\u526A"},{default:u(()=>[r(_,{uploadApi:e.uploadApi,value:e.avatar},null,8,["uploadApi","value"])]),_:1}),r(o,{title:"\u77E9\u5F62\u88C1\u526A",class:"my-4"},{default:u(()=>[i("div",N,[i("div",S,[r(t,{ref:"refCropper",src:e.img,onCropend:e.handleCropend,style:{width:"40vw"}},null,8,["src","onCropend"])]),e.cropperImg?(n(),c("img",{key:0,src:e.cropperImg,class:"croppered",alt:""},null,8,V)):l("",!0)]),e.cropperImg?(n(),c("p",W,"\u88C1\u526A\u540E\u56FE\u7247\u4FE1\u606F\uFF1A"+F(e.info),1)):l("",!0)]),_:1}),r(o,{title:"\u5706\u5F62\u88C1\u526A"},{default:u(()=>[i("div",U,[i("div",j,[r(t,{ref:"refCropper",src:e.img,onCropend:e.handleCircleCropend,style:{width:"40vw"},circled:""},null,8,["src","onCropend"])]),e.circleImg?(n(),c("img",{key:0,src:e.circleImg,class:"croppered"},null,8,b)):l("",!0)]),e.circleImg?(n(),c("p",q,"\u88C1\u526A\u540E\u56FE\u7247\u4FE1\u606F\uFF1A"+F(e.circleInfo),1)):l("",!0)]),_:1})]),_:1})}var Ce=A($,[["render",z],["__scopeId","data-v-9d983438"]]);export{Ce as default};
