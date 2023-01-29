import{P as T}from"./index.edca75a1.js";import{fA as I,av as x,a as L,cD as D,ax as M,o as B,j as U,y as j,n as w,z as O}from"./index.71d27ec8.js";import"./index.4664d36a.js";import"./index.ca9c94a7.js";import"./useSize.7f6a0415.js";import"./eagerComputed.bf418e4f.js";import"./onMountedOrActivated.c17cdee3.js";import"./useWindowSizeFn.2f380c6a.js";import"./useContentViewHeight.3e540372.js";import"./ArrowLeftOutlined.c7d64000.js";import"./index.7cb9b95f.js";import"./transButton.d7be3a5c.js";var C={exports:{}};(function(E,P){(function(f,n){E.exports=n()})(window,function(){return function(b){var f={};function n(o){if(f[o])return f[o].exports;var d=f[o]={i:o,l:!1,exports:{}};return b[o].call(d.exports,d,d.exports,n),d.l=!0,d.exports}return n.m=b,n.c=f,n.d=function(o,d,a){n.o(o,d)||Object.defineProperty(o,d,{enumerable:!0,get:a})},n.r=function(o){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,d){if(d&1&&(o=n(o)),d&8||d&4&&typeof o=="object"&&o&&o.__esModule)return o;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:o}),d&2&&typeof o!="string")for(var y in o)n.d(a,y,function(i){return o[i]}.bind(null,y));return a},n.n=function(o){var d=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(d,"a",d),d},n.o=function(o,d){return Object.prototype.hasOwnProperty.call(o,d)},n.p="",n(n.s=0)}({"./src/index.js":function(b,f,n){n.r(f),n("./src/sass/index.scss");var o=n("./src/js/init.js"),d=o.default.init;typeof window!="undefined"&&(window.printJS=d),f.default=d},"./src/js/browser.js":function(b,f,n){n.r(f);var o={isFirefox:function(){return typeof InstallTrigger!="undefined"},isIE:function(){return navigator.userAgent.indexOf("MSIE")!==-1||!!document.documentMode},isEdge:function(){return!o.isIE()&&!!window.StyleMedia},isChrome:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window;return!!a.chrome},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||navigator.userAgent.toLowerCase().indexOf("safari")!==-1},isIOSChrome:function(){return navigator.userAgent.toLowerCase().indexOf("crios")!==-1}};f.default=o},"./src/js/functions.js":function(b,f,n){n.r(f),n.d(f,"addWrapper",function(){return y}),n.d(f,"capitalizePrint",function(){return i}),n.d(f,"collectStyles",function(){return l}),n.d(f,"addHeader",function(){return e}),n.d(f,"cleanUp",function(){return u}),n.d(f,"isRawHTML",function(){return p});var o=n("./src/js/modal.js"),d=n("./src/js/browser.js");function a(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?a=function(c){return typeof c}:a=function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},a(t)}function y(t,s){var c="font-family:"+s.font+" !important; font-size: "+s.font_size+" !important; width:100%;";return'<div style="'+c+'">'+t+"</div>"}function i(t){return t.charAt(0).toUpperCase()+t.slice(1)}function l(t,s){for(var c=document.defaultView||window,h="",m=c.getComputedStyle(t,""),g=0;g<m.length;g++)(s.targetStyles.indexOf("*")!==-1||s.targetStyle.indexOf(m[g])!==-1||r(s.targetStyles,m[g]))&&m.getPropertyValue(m[g])&&(h+=m[g]+":"+m.getPropertyValue(m[g])+";");return h+="max-width: "+s.maxWidth+"px !important; font-size: "+s.font_size+" !important;",h}function r(t,s){for(var c=0;c<t.length;c++)if(a(s)==="object"&&s.indexOf(t[c])!==-1)return!0;return!1}function e(t,s){var c=document.createElement("div");if(p(s.header))c.innerHTML=s.header;else{var h=document.createElement("h1"),m=document.createTextNode(s.header);h.appendChild(m),h.setAttribute("style",s.headerStyle),c.appendChild(h)}t.insertBefore(c,t.childNodes[0])}function u(t){t.showModal&&o.default.close(),t.onLoadingEnd&&t.onLoadingEnd(),(t.showModal||t.onLoadingStart)&&window.URL.revokeObjectURL(t.printable);var s="mouseover";(d.default.isChrome()||d.default.isFirefox())&&(s="focus");var c=function h(){window.removeEventListener(s,h),t.onPrintDialogClose();var m=document.getElementById(t.frameId);m&&m.remove()};window.addEventListener(s,c)}function p(t){var s=new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");return s.test(t)}},"./src/js/html.js":function(b,f,n){n.r(f);var o=n("./src/js/functions.js"),d=n("./src/js/print.js");function a(l){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?a=function(e){return typeof e}:a=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(l)}f.default={print:function(r,e){var u=i(r.printable)?r.printable:document.getElementById(r.printable);if(!u){window.console.error("Invalid HTML element id: "+r.printable);return}r.printableElement=y(u,r),r.header&&Object(o.addHeader)(r.printableElement,r),d.default.send(r,e)}};function y(l,r){for(var e=l.cloneNode(),u=Array.prototype.slice.call(l.childNodes),p=0;p<u.length;p++)if(r.ignoreElements.indexOf(u[p].id)===-1){var t=y(u[p],r);e.appendChild(t)}switch(r.scanStyles&&l.nodeType===1&&e.setAttribute("style",Object(o.collectStyles)(l,r)),l.tagName){case"SELECT":e.value=l.value;break;case"CANVAS":e.getContext("2d").drawImage(l,0,0);break}return e}function i(l){return a(l)==="object"&&l&&(l instanceof HTMLElement||l.nodeType===1)}},"./src/js/image.js":function(b,f,n){n.r(f);var o=n("./src/js/functions.js"),d=n("./src/js/print.js"),a=n("./src/js/browser.js");f.default={print:function(i,l){i.printable.constructor!==Array&&(i.printable=[i.printable]),i.printableElement=document.createElement("div"),i.printable.forEach(function(r){var e=document.createElement("img");if(e.setAttribute("style",i.imageStyle),e.src=r,a.default.isFirefox()){var u=e.src;e.src=u}var p=document.createElement("div");p.appendChild(e),i.printableElement.appendChild(p)}),i.header&&Object(o.addHeader)(i.printableElement,i),d.default.send(i,l)}}},"./src/js/init.js":function(b,f,n){n.r(f);var o=n("./src/js/browser.js"),d=n("./src/js/modal.js"),a=n("./src/js/pdf.js"),y=n("./src/js/html.js"),i=n("./src/js/raw-html.js"),l=n("./src/js/image.js"),r=n("./src/js/json.js");function e(p){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?e=function(s){return typeof s}:e=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},e(p)}var u=["pdf","html","image","json","raw-html"];f.default={init:function(){var t={printable:null,fallbackPrintable:null,type:"pdf",header:null,headerStyle:"font-weight: 300;",maxWidth:800,properties:null,gridHeaderStyle:"font-weight: bold; padding: 5px; border: 1px solid #dddddd;",gridStyle:"border: 1px solid lightgray; margin-bottom: -1px;",showModal:!1,onError:function(A){throw A},onLoadingStart:null,onLoadingEnd:null,onPrintDialogClose:function(){},onIncompatibleBrowser:function(){},modalMessage:"Retrieving Document...",frameId:"printJS",printableElement:null,documentTitle:"Document",targetStyle:["clear","display","width","min-width","height","min-height","max-height"],targetStyles:["border","box","break","text-decoration"],ignoreElements:[],repeatTableHeader:!0,css:null,style:null,scanStyles:!0,base64:!1,onPdfOpen:null,font:"TimesNewRoman",font_size:"12pt",honorMarginPadding:!0,honorColor:!1,imageStyle:"max-width: 100%;"},s=arguments[0];if(s===void 0)throw new Error("printJS expects at least 1 attribute.");switch(e(s)){case"string":t.printable=encodeURI(s),t.fallbackPrintable=t.printable,t.type=arguments[1]||t.type;break;case"object":t.printable=s.printable,t.fallbackPrintable=typeof s.fallbackPrintable!="undefined"?s.fallbackPrintable:t.printable,t.fallbackPrintable=t.base64?"data:application/pdf;base64,".concat(t.fallbackPrintable):t.fallbackPrintable;for(var c in t)c==="printable"||c==="fallbackPrintable"||(t[c]=typeof s[c]!="undefined"?s[c]:t[c]);break;default:throw new Error('Unexpected argument type! Expected "string" or "object", got '+e(s))}if(!t.printable)throw new Error("Missing printable information.");if(!t.type||typeof t.type!="string"||u.indexOf(t.type.toLowerCase())===-1)throw new Error("Invalid print type. Available types are: pdf, html, image and json.");t.showModal&&d.default.show(t),t.onLoadingStart&&t.onLoadingStart();var h=document.getElementById(t.frameId);h&&h.parentNode.removeChild(h);var m=document.createElement("iframe");switch(o.default.isFirefox()?m.setAttribute("style","width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0"):m.setAttribute("style","visibility: hidden; height: 0; width: 0; position: absolute; border: 0"),m.setAttribute("id",t.frameId),t.type!=="pdf"&&(m.srcdoc="<html><head><title>"+t.documentTitle+"</title>",t.css&&(Array.isArray(t.css)||(t.css=[t.css]),t.css.forEach(function(v){m.srcdoc+='<link rel="stylesheet" href="'+v+'">'})),m.srcdoc+="</head><body></body></html>"),t.type){case"pdf":if(o.default.isIE())try{console.info("Print.js doesn't support PDF printing in Internet Explorer.");var g=window.open(t.fallbackPrintable,"_blank");g.focus(),t.onIncompatibleBrowser()}catch(v){t.onError(v)}finally{t.showModal&&d.default.close(),t.onLoadingEnd&&t.onLoadingEnd()}else a.default.print(t,m);break;case"image":l.default.print(t,m);break;case"html":y.default.print(t,m);break;case"raw-html":i.default.print(t,m);break;case"json":r.default.print(t,m);break}}}},"./src/js/json.js":function(b,f,n){n.r(f);var o=n("./src/js/functions.js"),d=n("./src/js/print.js");function a(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?a=function(r){return typeof r}:a=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},a(i)}f.default={print:function(l,r){if(a(l.printable)!=="object")throw new Error("Invalid javascript data object (JSON).");if(typeof l.repeatTableHeader!="boolean")throw new Error("Invalid value for repeatTableHeader attribute (JSON).");if(!l.properties||!Array.isArray(l.properties))throw new Error("Invalid properties array for your JSON data.");l.properties=l.properties.map(function(e){return{field:a(e)==="object"?e.field:e,displayName:a(e)==="object"?e.displayName:e,columnSize:a(e)==="object"&&e.columnSize?e.columnSize+";":100/l.properties.length+"%;"}}),l.printableElement=document.createElement("div"),l.header&&Object(o.addHeader)(l.printableElement,l),l.printableElement.innerHTML+=y(l),d.default.send(l,r)}};function y(i){var l=i.printable,r=i.properties,e='<table style="border-collapse: collapse; width: 100%;">';i.repeatTableHeader&&(e+="<thead>"),e+="<tr>";for(var u=0;u<r.length;u++)e+='<th style="width:'+r[u].columnSize+";"+i.gridHeaderStyle+'">'+Object(o.capitalizePrint)(r[u].displayName)+"</th>";e+="</tr>",i.repeatTableHeader&&(e+="</thead>"),e+="<tbody>";for(var p=0;p<l.length;p++){e+="<tr>";for(var t=0;t<r.length;t++){var s=l[p],c=r[t].field.split(".");if(c.length>1)for(var h=0;h<c.length;h++)s=s[c[h]];else s=s[r[t].field];e+='<td style="width:'+r[t].columnSize+i.gridStyle+'">'+s+"</td>"}e+="</tr>"}return e+="</tbody></table>",e}},"./src/js/modal.js":function(b,f,n){n.r(f);var o={show:function(a){var y="font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;",i=document.createElement("div");i.setAttribute("style",y),i.setAttribute("id","printJS-Modal");var l=document.createElement("div");l.setAttribute("style","display:table-cell; vertical-align:middle; padding-bottom:100px;");var r=document.createElement("div");r.setAttribute("class","printClose"),r.setAttribute("id","printClose"),l.appendChild(r);var e=document.createElement("span");e.setAttribute("class","printSpinner"),l.appendChild(e);var u=document.createTextNode(a.modalMessage);l.appendChild(u),i.appendChild(l),document.getElementsByTagName("body")[0].appendChild(i),document.getElementById("printClose").addEventListener("click",function(){o.close()})},close:function(){var a=document.getElementById("printJS-Modal");a&&a.parentNode.removeChild(a)}};f.default=o},"./src/js/pdf.js":function(b,f,n){n.r(f);var o=n("./src/js/print.js"),d=n("./src/js/functions.js");f.default={print:function(i,l){if(i.base64){var r=Uint8Array.from(atob(i.printable),function(u){return u.charCodeAt(0)});a(i,l,r);return}i.printable=/^(blob|http|\/\/)/i.test(i.printable)?i.printable:window.location.origin+(i.printable.charAt(0)!=="/"?"/"+i.printable:i.printable);var e=new window.XMLHttpRequest;e.responseType="arraybuffer",e.addEventListener("error",function(){Object(d.cleanUp)(i),i.onError(e.statusText,e)}),e.addEventListener("load",function(){if([200,201].indexOf(e.status)===-1){Object(d.cleanUp)(i),i.onError(e.statusText,e);return}a(i,l,e.response)}),e.open("GET",i.printable,!0),e.send()}};function a(y,i,l){var r=new window.Blob([l],{type:"application/pdf"});r=window.URL.createObjectURL(r),i.setAttribute("src",r),o.default.send(y,i)}},"./src/js/print.js":function(b,f,n){n.r(f);var o=n("./src/js/browser.js"),d=n("./src/js/functions.js"),a={send:function(e,u){document.getElementsByTagName("body")[0].appendChild(u);var p=document.getElementById(e.frameId);p.onload=function(){if(e.type==="pdf"){o.default.isFirefox()?setTimeout(function(){return y(p,e)},1e3):y(p,e);return}var t=p.contentWindow||p.contentDocument;if(t.document&&(t=t.document),t.body.appendChild(e.printableElement),e.type!=="pdf"&&e.style){var s=document.createElement("style");s.innerHTML=e.style,t.head.appendChild(s)}var c=t.getElementsByTagName("img");c.length>0?i(Array.from(c)).then(function(){return y(p,e)}):y(p,e)}}};function y(r,e){try{if(r.focus(),o.default.isEdge()||o.default.isIE())try{r.contentWindow.document.execCommand("print",!1,null)}catch(u){r.contentWindow.print()}else r.contentWindow.print()}catch(u){e.onError(u)}finally{o.default.isFirefox()&&(r.style.visibility="hidden",r.style.left="-1px"),Object(d.cleanUp)(e)}}function i(r){var e=r.map(function(u){if(u.src&&u.src!==window.location.href)return l(u)});return Promise.all(e)}function l(r){return new Promise(function(e){var u=function p(){!r||typeof r.naturalWidth=="undefined"||r.naturalWidth===0||!r.complete?setTimeout(p,500):e()};u()})}f.default=a},"./src/js/raw-html.js":function(b,f,n){n.r(f);var o=n("./src/js/print.js");f.default={print:function(a,y){a.printableElement=document.createElement("div"),a.printableElement.setAttribute("style","width:100%"),a.printableElement.innerHTML=a.printable,o.default.send(a,y)}}},"./src/sass/index.scss":function(b,f,n){},0:function(b,f,n){b.exports=n("./src/index.js")}}).default})})(C);var S=I(C.exports);const W=L({name:"AppLogo",components:{PageWrapper:T,CollapseContainer:D},setup(){function E(){S({printable:[{name:"ll",email:"123@gmail.com",phone:"123"},{name:"qq",email:"456@gmail.com",phone:"456"}],properties:["name","email","phone"],type:"json"})}function P(){S({printable:["https://anncwb.github.io/anncwb/images/preview1.png","https://anncwb.github.io/anncwb/images/preview2.png"],type:"image",header:"Multiple Images",imageStyle:"width:100%;"})}return{jsonPrint:E,imagePrint:P}}});function R(E,P,b,f,n,o){const d=M("a-button"),a=M("CollapseContainer"),y=M("PageWrapper");return B(),U(y,{title:"\u6253\u5370\u793A\u4F8B"},{default:j(()=>[w(a,{title:"json\u6253\u5370\u8868\u683C"},{default:j(()=>[w(d,{type:"primary",onClick:E.jsonPrint},{default:j(()=>[O("\u6253\u5370")]),_:1},8,["onClick"])]),_:1}),w(d,{type:"primary",class:"mt-5",onClick:E.imagePrint},{default:j(()=>[O("Image Print")]),_:1},8,["onClick"])]),_:1})}var Q=x(W,[["render",R]]);export{Q as default};
