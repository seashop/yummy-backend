var Ft=Object.defineProperty;var lt=Object.getOwnPropertySymbols;var kt=Object.prototype.hasOwnProperty,zt=Object.prototype.propertyIsEnumerable;var ft=(e,t,r)=>t in e?Ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,dt=(e,t)=>{for(var r in t||(t={}))kt.call(t,r)&&ft(e,r,t[r]);if(lt)for(var r of lt(t))zt.call(t,r)&&ft(e,r,t[r]);return e};var gt=(e,t,r)=>new Promise((i,o)=>{var n=a=>{try{u(r.next(a))}catch(l){o(l)}},s=a=>{try{u(r.throw(a))}catch(l){o(l)}},u=a=>a.done?i(a.value):Promise.resolve(a.value).then(n,s);u((r=r.apply(e,t)).next())});import{ag as Ht,aG as Vt,a as Kt,s as $t,M as Jt,a6 as Ot,av as Yt,k as q,o as ht,h as jt,j as Qt,aH as Gt,aE as qt}from"./index.71d27ec8.js";import{d as Wt}from"./download.73216fb1.js";var Xt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Et={},T={};let it;const Zt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];T.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};T.getSymbolTotalCodewords=function(t){return Zt[t]};T.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};T.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');it=t};T.isKanjiModeEnabled=function(){return typeof it!="undefined"};T.toSJIS=function(t){return it(t)};var O={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+r)}}e.isValid=function(i){return i&&typeof i.bit!="undefined"&&i.bit>=0&&i.bit<4},e.from=function(i,o){if(e.isValid(i))return i;try{return t(i)}catch(n){return o}}})(O);function pt(){this.buffer=[],this.length=0}pt.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let r=0;r<t;r++)this.putBit((e>>>t-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var xt=pt;function H(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}H.prototype.set=function(e,t,r,i){const o=e*this.size+t;this.data[o]=r,i&&(this.reservedBit[o]=!0)};H.prototype.get=function(e,t){return this.data[e*this.size+t]};H.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r};H.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var te=H,Bt={};(function(e){const t=T.getSymbolSize;e.getRowColCoords=function(i){if(i===1)return[];const o=Math.floor(i/7)+2,n=t(i),s=n===145?26:Math.ceil((n-13)/(2*o-2))*2,u=[n-7];for(let a=1;a<o-1;a++)u[a]=u[a-1]-s;return u.push(6),u.reverse()},e.getPositions=function(i){const o=[],n=e.getRowColCoords(i),s=n.length;for(let u=0;u<s;u++)for(let a=0;a<s;a++)u===0&&a===0||u===0&&a===s-1||u===s-1&&a===0||o.push([n[u],n[a]]);return o}})(Bt);var At={};const ee=T.getSymbolSize,mt=7;At.getPositions=function(t){const r=ee(t);return[[0,0],[r-mt,0],[0,r-mt]]};var It={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const n=o.size;let s=0,u=0,a=0,l=null,c=null;for(let E=0;E<n;E++){u=a=0,l=c=null;for(let d=0;d<n;d++){let f=o.get(E,d);f===l?u++:(u>=5&&(s+=t.N1+(u-5)),l=f,u=1),f=o.get(d,E),f===c?a++:(a>=5&&(s+=t.N1+(a-5)),c=f,a=1)}u>=5&&(s+=t.N1+(u-5)),a>=5&&(s+=t.N1+(a-5))}return s},e.getPenaltyN2=function(o){const n=o.size;let s=0;for(let u=0;u<n-1;u++)for(let a=0;a<n-1;a++){const l=o.get(u,a)+o.get(u,a+1)+o.get(u+1,a)+o.get(u+1,a+1);(l===4||l===0)&&s++}return s*t.N2},e.getPenaltyN3=function(o){const n=o.size;let s=0,u=0,a=0;for(let l=0;l<n;l++){u=a=0;for(let c=0;c<n;c++)u=u<<1&2047|o.get(l,c),c>=10&&(u===1488||u===93)&&s++,a=a<<1&2047|o.get(c,l),c>=10&&(a===1488||a===93)&&s++}return s*t.N3},e.getPenaltyN4=function(o){let n=0;const s=o.data.length;for(let a=0;a<s;a++)n+=o.data[a];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function r(i,o,n){switch(i){case e.Patterns.PATTERN000:return(o+n)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(o+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return o*n%2+o*n%3===0;case e.Patterns.PATTERN110:return(o*n%2+o*n%3)%2===0;case e.Patterns.PATTERN111:return(o*n%3+(o+n)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}e.applyMask=function(o,n){const s=n.size;for(let u=0;u<s;u++)for(let a=0;a<s;a++)n.isReserved(a,u)||n.xor(a,u,r(o,a,u))},e.getBestMask=function(o,n){const s=Object.keys(e.Patterns).length;let u=0,a=1/0;for(let l=0;l<s;l++){n(l),e.applyMask(l,o);const c=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(l,o),c<a&&(a=c,u=l)}return u}})(It);var Y={};const R=O,V=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],K=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Y.getBlocksCount=function(t,r){switch(r){case R.L:return V[(t-1)*4+0];case R.M:return V[(t-1)*4+1];case R.Q:return V[(t-1)*4+2];case R.H:return V[(t-1)*4+3];default:return}};Y.getTotalCodewordsCount=function(t,r){switch(r){case R.L:return K[(t-1)*4+0];case R.M:return K[(t-1)*4+1];case R.Q:return K[(t-1)*4+2];case R.H:return K[(t-1)*4+3];default:return}};var Tt={},j={};const k=new Uint8Array(512),$=new Uint8Array(256);(function(){let t=1;for(let r=0;r<255;r++)k[r]=t,$[t]=r,t<<=1,t&256&&(t^=285);for(let r=255;r<512;r++)k[r]=k[r-255]})();j.log=function(t){if(t<1)throw new Error("log("+t+")");return $[t]};j.exp=function(t){return k[t]};j.mul=function(t,r){return t===0||r===0?0:k[$[t]+$[r]]};(function(e){const t=j;e.mul=function(i,o){const n=new Uint8Array(i.length+o.length-1);for(let s=0;s<i.length;s++)for(let u=0;u<o.length;u++)n[s+u]^=t.mul(i[s],o[u]);return n},e.mod=function(i,o){let n=new Uint8Array(i);for(;n.length-o.length>=0;){const s=n[0];for(let a=0;a<o.length;a++)n[a]^=t.mul(o[a],s);let u=0;for(;u<n.length&&n[u]===0;)u++;n=n.slice(u)}return n},e.generateECPolynomial=function(i){let o=new Uint8Array([1]);for(let n=0;n<i;n++)o=e.mul(o,new Uint8Array([1,t.exp(n)]));return o}})(Tt);const Nt=Tt;function st(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}st.prototype.initialize=function(t){this.degree=t,this.genPoly=Nt.generateECPolynomial(this.degree)};st.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const r=new Uint8Array(t.length+this.degree);r.set(t);const i=Nt.mod(r,this.genPoly),o=this.degree-i.length;if(o>0){const n=new Uint8Array(this.degree);return n.set(i,o),n}return i};var ne=st,St={},L={},at={};at.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var M={};const Mt="[0-9]+",re="[A-Z $%*+\\-./:]+";let z="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";z=z.replace(/u/g,"\\u");const oe="(?:(?![A-Z0-9 $%*+\\-./:]|"+z+`)(?:.|[\r
]))+`;M.KANJI=new RegExp(z,"g");M.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");M.BYTE=new RegExp(oe,"g");M.NUMERIC=new RegExp(Mt,"g");M.ALPHANUMERIC=new RegExp(re,"g");const ie=new RegExp("^"+z+"$"),se=new RegExp("^"+Mt+"$"),ae=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");M.testKanji=function(t){return ie.test(t)};M.testNumeric=function(t){return se.test(t)};M.testAlphanumeric=function(t){return ae.test(t)};(function(e){const t=at,r=M;e.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return r.testNumeric(n)?e.NUMERIC:r.testAlphanumeric(n)?e.ALPHANUMERIC:r.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function i(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(n,s){if(e.isValid(n))return n;try{return i(n)}catch(u){return s}}})(L);(function(e){const t=T,r=Y,i=O,o=L,n=at,s=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,u=t.getBCHDigit(s);function a(d,f,g){for(let y=1;y<=40;y++)if(f<=e.getCapacity(y,g,d))return y}function l(d,f){return o.getCharCountIndicator(d,f)+4}function c(d,f){let g=0;return d.forEach(function(y){g+=l(y.mode,f)+y.getBitsLength()}),g}function E(d,f){for(let g=1;g<=40;g++)if(c(d,g)<=e.getCapacity(g,f,o.MIXED))return g}e.from=function(f,g){return n.isValid(f)?parseInt(f,10):g},e.getCapacity=function(f,g,y){if(!n.isValid(f))throw new Error("Invalid QR Code version");typeof y=="undefined"&&(y=o.BYTE);const A=t.getSymbolTotalCodewords(f),w=r.getTotalCodewordsCount(f,g),C=(A-w)*8;if(y===o.MIXED)return C;const h=C-l(y,f);switch(y){case o.NUMERIC:return Math.floor(h/10*3);case o.ALPHANUMERIC:return Math.floor(h/11*2);case o.KANJI:return Math.floor(h/13);case o.BYTE:default:return Math.floor(h/8)}},e.getBestVersionForData=function(f,g){let y;const A=i.from(g,i.M);if(Array.isArray(f)){if(f.length>1)return E(f,A);if(f.length===0)return 1;y=f[0]}else y=f;return a(y.mode,y.getLength(),A)},e.getEncodedBits=function(f){if(!n.isValid(f)||f<7)throw new Error("Invalid QR Code version");let g=f<<12;for(;t.getBCHDigit(g)-u>=0;)g^=s<<t.getBCHDigit(g)-u;return f<<12|g}})(St);var bt={};const et=T,Pt=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,ue=1<<14|1<<12|1<<10|1<<4|1<<1,wt=et.getBCHDigit(Pt);bt.getEncodedBits=function(t,r){const i=t.bit<<3|r;let o=i<<10;for(;et.getBCHDigit(o)-wt>=0;)o^=Pt<<et.getBCHDigit(o)-wt;return(i<<10|o)^ue};var Rt={};const ce=L;function D(e){this.mode=ce.NUMERIC,this.data=e.toString()}D.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};D.prototype.getLength=function(){return this.data.length};D.prototype.getBitsLength=function(){return D.getBitsLength(this.data.length)};D.prototype.write=function(t){let r,i,o;for(r=0;r+3<=this.data.length;r+=3)i=this.data.substr(r,3),o=parseInt(i,10),t.put(o,10);const n=this.data.length-r;n>0&&(i=this.data.substr(r),o=parseInt(i,10),t.put(o,n*3+1))};var le=D;const fe=L,W=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function _(e){this.mode=fe.ALPHANUMERIC,this.data=e}_.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};_.prototype.getLength=function(){return this.data.length};_.prototype.getBitsLength=function(){return _.getBitsLength(this.data.length)};_.prototype.write=function(t){let r;for(r=0;r+2<=this.data.length;r+=2){let i=W.indexOf(this.data[r])*45;i+=W.indexOf(this.data[r+1]),t.put(i,11)}this.data.length%2&&t.put(W.indexOf(this.data[r]),6)};var de=_,ge=function(t){for(var r=[],i=t.length,o=0;o<i;o++){var n=t.charCodeAt(o);if(n>=55296&&n<=56319&&i>o+1){var s=t.charCodeAt(o+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,o+=1)}if(n<128){r.push(n);continue}if(n<2048){r.push(n>>6|192),r.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){r.push(n>>12|224),r.push(n>>6&63|128),r.push(n&63|128);continue}if(n>=65536&&n<=1114111){r.push(n>>18|240),r.push(n>>12&63|128),r.push(n>>6&63|128),r.push(n&63|128);continue}r.push(239,191,189)}return new Uint8Array(r).buffer};const he=ge,me=L;function U(e){this.mode=me.BYTE,typeof e=="string"&&(e=he(e)),this.data=new Uint8Array(e)}U.getBitsLength=function(t){return t*8};U.prototype.getLength=function(){return this.data.length};U.prototype.getBitsLength=function(){return U.getBitsLength(this.data.length)};U.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)};var we=U;const Ce=L,ye=T;function v(e){this.mode=Ce.KANJI,this.data=e}v.getBitsLength=function(t){return t*13};v.prototype.getLength=function(){return this.data.length};v.prototype.getBitsLength=function(){return v.getBitsLength(this.data.length)};v.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=ye.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(r&255),e.put(r,13)}};var Ee=v,Lt={exports:{}};(function(e){var t={single_source_shortest_paths:function(r,i,o){var n={},s={};s[i]=0;var u=t.PriorityQueue.make();u.push(i,0);for(var a,l,c,E,d,f,g,y,A;!u.empty();){a=u.pop(),l=a.value,E=a.cost,d=r[l]||{};for(c in d)d.hasOwnProperty(c)&&(f=d[c],g=E+f,y=s[c],A=typeof s[c]=="undefined",(A||y>g)&&(s[c]=g,u.push(c,g),n[c]=l))}if(typeof o!="undefined"&&typeof s[o]=="undefined"){var w=["Could not find a path from ",i," to ",o,"."].join("");throw new Error(w)}return n},extract_shortest_path_from_predecessor_list:function(r,i){for(var o=[],n=i;n;)o.push(n),r[n],n=r[n];return o.reverse(),o},find_path:function(r,i,o){var n=t.single_source_shortest_paths(r,i,o);return t.extract_shortest_path_from_predecessor_list(n,o)},PriorityQueue:{make:function(r){var i=t.PriorityQueue,o={},n;r=r||{};for(n in i)i.hasOwnProperty(n)&&(o[n]=i[n]);return o.queue=[],o.sorter=r.sorter||i.default_sorter,o},default_sorter:function(r,i){return r.cost-i.cost},push:function(r,i){var o={value:r,cost:i};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Lt);(function(e){const t=L,r=le,i=de,o=we,n=Ee,s=M,u=T,a=Lt.exports;function l(w){return unescape(encodeURIComponent(w)).length}function c(w,C,h){const m=[];let p;for(;(p=w.exec(h))!==null;)m.push({data:p[0],index:p.index,mode:C,length:p[0].length});return m}function E(w){const C=c(s.NUMERIC,t.NUMERIC,w),h=c(s.ALPHANUMERIC,t.ALPHANUMERIC,w);let m,p;return u.isKanjiModeEnabled()?(m=c(s.BYTE,t.BYTE,w),p=c(s.KANJI,t.KANJI,w)):(m=c(s.BYTE_KANJI,t.BYTE,w),p=[]),C.concat(h,m,p).sort(function(I,N){return I.index-N.index}).map(function(I){return{data:I.data,mode:I.mode,length:I.length}})}function d(w,C){switch(C){case t.NUMERIC:return r.getBitsLength(w);case t.ALPHANUMERIC:return i.getBitsLength(w);case t.KANJI:return n.getBitsLength(w);case t.BYTE:return o.getBitsLength(w)}}function f(w){return w.reduce(function(C,h){const m=C.length-1>=0?C[C.length-1]:null;return m&&m.mode===h.mode?(C[C.length-1].data+=h.data,C):(C.push(h),C)},[])}function g(w){const C=[];for(let h=0;h<w.length;h++){const m=w[h];switch(m.mode){case t.NUMERIC:C.push([m,{data:m.data,mode:t.ALPHANUMERIC,length:m.length},{data:m.data,mode:t.BYTE,length:m.length}]);break;case t.ALPHANUMERIC:C.push([m,{data:m.data,mode:t.BYTE,length:m.length}]);break;case t.KANJI:C.push([m,{data:m.data,mode:t.BYTE,length:l(m.data)}]);break;case t.BYTE:C.push([{data:m.data,mode:t.BYTE,length:l(m.data)}])}}return C}function y(w,C){const h={},m={start:{}};let p=["start"];for(let B=0;B<w.length;B++){const I=w[B],N=[];for(let P=0;P<I.length;P++){const S=I[P],F=""+B+P;N.push(F),h[F]={node:S,lastCount:0},m[F]={};for(let G=0;G<p.length;G++){const b=p[G];h[b]&&h[b].node.mode===S.mode?(m[b][F]=d(h[b].lastCount+S.length,S.mode)-d(h[b].lastCount,S.mode),h[b].lastCount+=S.length):(h[b]&&(h[b].lastCount=S.length),m[b][F]=d(S.length,S.mode)+4+t.getCharCountIndicator(S.mode,C))}}p=N}for(let B=0;B<p.length;B++)m[p[B]].end=0;return{map:m,table:h}}function A(w,C){let h;const m=t.getBestModeForData(w);if(h=t.from(C,m),h!==t.BYTE&&h.bit<m.bit)throw new Error('"'+w+'" cannot be encoded with mode '+t.toString(h)+`.
 Suggested mode is: `+t.toString(m));switch(h===t.KANJI&&!u.isKanjiModeEnabled()&&(h=t.BYTE),h){case t.NUMERIC:return new r(w);case t.ALPHANUMERIC:return new i(w);case t.KANJI:return new n(w);case t.BYTE:return new o(w)}}e.fromArray=function(C){return C.reduce(function(h,m){return typeof m=="string"?h.push(A(m,null)):m.data&&h.push(A(m.data,m.mode)),h},[])},e.fromString=function(C,h){const m=E(C,u.isKanjiModeEnabled()),p=g(m),B=y(p,h),I=a.find_path(B.map,"start","end"),N=[];for(let P=1;P<I.length-1;P++)N.push(B.table[I[P]].node);return e.fromArray(f(N))},e.rawSplit=function(C){return e.fromArray(E(C,u.isKanjiModeEnabled()))}})(Rt);const Q=T,X=O,pe=xt,Be=te,Ae=Bt,Ie=At,nt=It,rt=Y,Te=ne,J=St,Ne=bt,Se=L,Z=Rt;function Me(e,t){const r=e.size,i=Ie.getPositions(t);for(let o=0;o<i.length;o++){const n=i[o][0],s=i[o][1];for(let u=-1;u<=7;u++)if(!(n+u<=-1||r<=n+u))for(let a=-1;a<=7;a++)s+a<=-1||r<=s+a||(u>=0&&u<=6&&(a===0||a===6)||a>=0&&a<=6&&(u===0||u===6)||u>=2&&u<=4&&a>=2&&a<=4?e.set(n+u,s+a,!0,!0):e.set(n+u,s+a,!1,!0))}}function be(e){const t=e.size;for(let r=8;r<t-8;r++){const i=r%2===0;e.set(r,6,i,!0),e.set(6,r,i,!0)}}function Pe(e,t){const r=Ae.getPositions(t);for(let i=0;i<r.length;i++){const o=r[i][0],n=r[i][1];for(let s=-2;s<=2;s++)for(let u=-2;u<=2;u++)s===-2||s===2||u===-2||u===2||s===0&&u===0?e.set(o+s,n+u,!0,!0):e.set(o+s,n+u,!1,!0)}}function Re(e,t){const r=e.size,i=J.getEncodedBits(t);let o,n,s;for(let u=0;u<18;u++)o=Math.floor(u/3),n=u%3+r-8-3,s=(i>>u&1)===1,e.set(o,n,s,!0),e.set(n,o,s,!0)}function x(e,t,r){const i=e.size,o=Ne.getEncodedBits(t,r);let n,s;for(n=0;n<15;n++)s=(o>>n&1)===1,n<6?e.set(n,8,s,!0):n<8?e.set(n+1,8,s,!0):e.set(i-15+n,8,s,!0),n<8?e.set(8,i-n-1,s,!0):n<9?e.set(8,15-n-1+1,s,!0):e.set(8,15-n-1,s,!0);e.set(i-8,8,1,!0)}function Le(e,t){const r=e.size;let i=-1,o=r-1,n=7,s=0;for(let u=r-1;u>0;u-=2)for(u===6&&u--;;){for(let a=0;a<2;a++)if(!e.isReserved(o,u-a)){let l=!1;s<t.length&&(l=(t[s]>>>n&1)===1),e.set(o,u-a,l),n--,n===-1&&(s++,n=7)}if(o+=i,o<0||r<=o){o-=i,i=-i;break}}}function De(e,t,r){const i=new pe;r.forEach(function(a){i.put(a.mode.bit,4),i.put(a.getLength(),Se.getCharCountIndicator(a.mode,e)),a.write(i)});const o=Q.getSymbolTotalCodewords(e),n=rt.getTotalCodewordsCount(e,t),s=(o-n)*8;for(i.getLengthInBits()+4<=s&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const u=(s-i.getLengthInBits())/8;for(let a=0;a<u;a++)i.put(a%2?17:236,8);return _e(i,e,t)}function _e(e,t,r){const i=Q.getSymbolTotalCodewords(t),o=rt.getTotalCodewordsCount(t,r),n=i-o,s=rt.getBlocksCount(t,r),u=i%s,a=s-u,l=Math.floor(i/s),c=Math.floor(n/s),E=c+1,d=l-c,f=new Te(d);let g=0;const y=new Array(s),A=new Array(s);let w=0;const C=new Uint8Array(e.buffer);for(let I=0;I<s;I++){const N=I<a?c:E;y[I]=C.slice(g,g+N),A[I]=f.encode(y[I]),g+=N,w=Math.max(w,N)}const h=new Uint8Array(i);let m=0,p,B;for(p=0;p<w;p++)for(B=0;B<s;B++)p<y[B].length&&(h[m++]=y[B][p]);for(p=0;p<d;p++)for(B=0;B<s;B++)h[m++]=A[B][p];return h}function Ue(e,t,r,i){let o;if(Array.isArray(e))o=Z.fromArray(e);else if(typeof e=="string"){let l=t;if(!l){const c=Z.rawSplit(e);l=J.getBestVersionForData(c,r)}o=Z.fromString(e,l||40)}else throw new Error("Invalid data");const n=J.getBestVersionForData(o,r);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=De(t,r,o),u=Q.getSymbolSize(t),a=new Be(u);return Me(a,t),be(a),Pe(a,t),x(a,r,0),t>=7&&Re(a,t),Le(a,s),isNaN(i)&&(i=nt.getBestMask(a,x.bind(null,a,r))),nt.applyMask(i,a),x(a,r,i),{modules:a,version:t,errorCorrectionLevel:r,maskPattern:i,segments:o}}Et.create=function(t,r){if(typeof t=="undefined"||t==="")throw new Error("No input text");let i=X.M,o,n;return typeof r!="undefined"&&(i=X.from(r.errorCorrectionLevel,X.M),o=J.from(r.version),n=nt.from(r.maskPattern),r.toSJISFunc&&Q.setToSJISFunction(r.toSJISFunc)),Ue(t,o,i,n)};var Dt={},ut={};(function(e){function t(r){if(typeof r=="number"&&(r=r.toString()),typeof r!="string")throw new Error("Color should be defined as hex string");let i=r.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+r);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(n){return[n,n]}))),i.length===6&&i.push("F","F");const o=parseInt(i.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+i.slice(0,6).join("")}}e.getOptions=function(i){i||(i={}),i.color||(i.color={});const o=typeof i.margin=="undefined"||i.margin===null||i.margin<0?4:i.margin,n=i.width&&i.width>=21?i.width:void 0,s=i.scale||4;return{width:n,scale:n?4:s,margin:o,color:{dark:t(i.color.dark||"#000000ff"),light:t(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},e.getScale=function(i,o){return o.width&&o.width>=i+o.margin*2?o.width/(i+o.margin*2):o.scale},e.getImageWidth=function(i,o){const n=e.getScale(i,o);return Math.floor((i+o.margin*2)*n)},e.qrToImageData=function(i,o,n){const s=o.modules.size,u=o.modules.data,a=e.getScale(s,n),l=Math.floor((s+n.margin*2)*a),c=n.margin*a,E=[n.color.light,n.color.dark];for(let d=0;d<l;d++)for(let f=0;f<l;f++){let g=(d*l+f)*4,y=n.color.light;if(d>=c&&f>=c&&d<l-c&&f<l-c){const A=Math.floor((d-c)/a),w=Math.floor((f-c)/a);y=E[u[A*s+w]?1:0]}i[g++]=y.r,i[g++]=y.g,i[g++]=y.b,i[g]=y.a}}})(ut);(function(e){const t=ut;function r(o,n,s){o.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function i(){try{return document.createElement("canvas")}catch(o){throw new Error("You need to specify a canvas element")}}e.render=function(n,s,u){let a=u,l=s;typeof a=="undefined"&&(!s||!s.getContext)&&(a=s,s=void 0),s||(l=i()),a=t.getOptions(a);const c=t.getImageWidth(n.modules.size,a),E=l.getContext("2d"),d=E.createImageData(c,c);return t.qrToImageData(d.data,n,a),r(E,l,c),E.putImageData(d,0,0),l},e.renderToDataURL=function(n,s,u){let a=u;typeof a=="undefined"&&(!s||!s.getContext)&&(a=s,s=void 0),a||(a={});const l=e.render(n,s,a),c=a.type||"image/png",E=a.rendererOpts||{};return l.toDataURL(c,E.quality)}})(Dt);var _t={};const ve=ut;function Ct(e,t){const r=e.a/255,i=t+'="'+e.hex+'"';return r<1?i+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':i}function tt(e,t,r){let i=e+t;return typeof r!="undefined"&&(i+=" "+r),i}function Fe(e,t,r){let i="",o=0,n=!1,s=0;for(let u=0;u<e.length;u++){const a=Math.floor(u%t),l=Math.floor(u/t);!a&&!n&&(n=!0),e[u]?(s++,u>0&&a>0&&e[u-1]||(i+=n?tt("M",a+r,.5+l+r):tt("m",o,0),o=0,n=!1),a+1<t&&e[u+1]||(i+=tt("h",s),s=0)):o++}return i}_t.render=function(t,r,i){const o=ve.getOptions(r),n=t.modules.size,s=t.modules.data,u=n+o.margin*2,a=o.color.light.a?"<path "+Ct(o.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",l="<path "+Ct(o.color.dark,"stroke")+' d="'+Fe(s,n,o.margin)+'"/>',c='viewBox="0 0 '+u+" "+u+'"',E=o.width?'width="'+o.width+'" height="'+o.width+'" ':"",d='<svg xmlns="http://www.w3.org/2000/svg" '+E+c+' shape-rendering="crispEdges">'+a+l+`</svg>
`;return typeof i=="function"&&i(null,d),d};const ke=Xt,ot=Et,Ut=Dt,ze=_t;function ct(e,t,r,i,o){const n=[].slice.call(arguments,1),s=n.length,u=typeof n[s-1]=="function";if(!u&&!ke())throw new Error("Callback required as last argument");if(u){if(s<2)throw new Error("Too few arguments provided");s===2?(o=r,r=t,t=i=void 0):s===3&&(t.getContext&&typeof o=="undefined"?(o=i,i=void 0):(o=i,i=r,r=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(r=t,t=i=void 0):s===2&&!t.getContext&&(i=r,r=t,t=void 0),new Promise(function(a,l){try{const c=ot.create(r,i);a(e(c,t,i))}catch(c){l(c)}})}try{const a=ot.create(r,i);o(null,e(a,t,i))}catch(a){o(a)}}ot.create;var vt=ct.bind(null,Ut.render),He=ct.bind(null,Ut.renderToDataURL);ct.bind(null,function(e,t,r){return ze.render(e,r)});const Ve=({canvas:e,content:t,width:r=0,options:i={}})=>{const o=Ht(i);return o.errorCorrectionLevel=o.errorCorrectionLevel||$e(t),Ke(t,o).then(n=>(o.scale=r===0?void 0:r/n*4,vt(e,t,o)))};function Ke(e,t){const r=document.createElement("canvas");return vt(r,e,t).then(()=>r.width)}function $e(e){return e.length>36?"M":e.length>16?"Q":"H"}const Je=({canvas:e,logo:t})=>{if(!t)return new Promise(C=>{C(e.toDataURL())});const r=e.width,{logoSize:i=.15,bgColor:o="#ffffff",borderSize:n=.05,crossOrigin:s,borderRadius:u=8,logoRadius:a=0}=t,l=Vt(t)?t:t.src,c=r*i,E=r*(1-i)/2,d=r*(i+n),f=r*(1-i-n)/2,g=e.getContext("2d");if(!g)return;yt(g)(f,f,d,d,u),g.fillStyle=o,g.fill();const y=new Image;(s||a)&&y.setAttribute("crossOrigin",s||"anonymous"),y.src=l;const A=C=>{g.drawImage(C,E,E,c,c)},w=C=>{const h=document.createElement("canvas");h.width=E+c,h.height=E+c;const m=h.getContext("2d");if(!m||!g||(m.drawImage(C,E,E,c,c),yt(g)(E,E,c,c,a),!g))return;const p=g.createPattern(h,"no-repeat");p&&(g.fillStyle=p,g.fill())};return new Promise(C=>{y.onload=()=>{a?w(y):A(y),C(e.toDataURL())}})};function yt(e){return(t,r,i,o,n)=>{const s=Math.min(i,o);return n>s/2&&(n=s/2),e.beginPath(),e.moveTo(t+n,r),e.arcTo(t+i,r,t+i,r+o,n),e.arcTo(t+i,r+o,t,r+o,n),e.arcTo(t,r+o,t,r,n),e.arcTo(t,r,t+i,r,n),e.closePath(),e}}const Oe=e=>Ve(e).then(()=>e).then(Je),Ye=Kt({name:"QrCode",props:{value:{type:[String,Array],default:null},options:{type:Object,default:null},width:{type:Number,default:200},logo:{type:[String,Object],default:""},tag:{type:String,default:"canvas",validator:e=>["canvas","img"].includes(e)}},emits:{done:e=>!!e,error:e=>!!e},setup(e,{emit:t}){const r=$t(null);function i(){return gt(this,null,function*(){try{const{tag:n,value:s,options:u={},width:a,logo:l}=e,c=String(s),E=q(r);if(!E)return;if(n==="canvas"){const d=yield Oe({canvas:E,width:a,logo:l,content:c,options:u||{}});t("done",{url:d,ctx:E.getContext("2d")});return}if(n==="img"){const d=yield He(c,dt({errorCorrectionLevel:"H",width:a},u));q(r).src=d,t("done",{url:d})}}catch(n){t("error",n)}})}function o(n){let s="";const u=q(r);u instanceof HTMLCanvasElement?s=u.toDataURL():u instanceof HTMLImageElement&&(s=u.src),s&&Wt({url:s,fileName:n})}return Jt(i),Ot(e,()=>{i()},{deep:!0}),{wrapRef:r,download:o}}});function je(e,t,r,i,o,n){return ht(),jt("div",null,[(ht(),Qt(Gt(e.tag),{ref:"wrapRef"},null,512))])}var Qe=Yt(Ye,[["render",je]]);const Xe=qt(Qe);export{Xe as Q};
