var K=Object.defineProperty,R=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var E=(e,t,u)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,D=(e,t)=>{for(var u in t||(t={}))q.call(t,u)&&E(e,u,t[u]);if(h)for(var u of h(t))$.call(t,u)&&E(e,u,t[u]);return e},y=(e,t)=>R(e,G(t));import{T as N}from"./BasicForm.b02f3207.js";import{u as O}from"./useComponentRegister.631337ca.js";import{d$ as m,e0 as x,a as j,B as V,es as z,cB as W,c as H,s as U,v as J,k as v,a6 as L,be as Q,av as X,ax as l,o as c,h as Y,n as i,y as n,j as C,l as B,z as T,F as Z}from"./index.d50a9800.js";import{T as S}from"./index.aaa1fc50.js";import"./index.e56403fd.js";import{B as M}from"./TableImg.8c3ea297.js";import{u as I}from"./useTable.ce0f5d89.js";const de=e=>m.get({url:"/reduction/admin/get_all_reduction",params:e}),k=e=>m.get({url:"/reduction/admin/get_no_goods",params:e}),ce=e=>m.post({url:"/reduction/admin/add_reduction",data:e}),me=e=>m.post({url:x("/reduction/admin/{id}/show",{id:e})}),pe=(e,t)=>m.post({url:x("/reduction/admin/{id}/update",{id:e}),data:t}),ee=j({name:"DiscountGoodsSelect",components:{Button:V,FormItemRest:z,Tabs:S,TabPane:S.TabPane,BasicTable:M,TableAction:N},inheritAttrs:!1,props:{value:{type:Array,default:()=>[]}},emits:["change"],setup(e,{emit:t}){const u=W(),{t:_}=H(),o=U([]),a=J({activeKey:1,loading:!1}),[p]=I({title:"\u6EE1\u51CF\u5217\u8868",api:k,columns:A,formConfig:{labelWidth:120,schemas:w},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{title:"\u64CD\u4F5C",dataIndex:"action"}}),[f,{reload:b}]=I({title:"\u6EE1\u51CF\u5217\u8868",api:k,beforeFetch:s=>(s.goods_ids=v(o),s),columns:A,formConfig:{labelWidth:120,schemas:w},showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{title:"\u64CD\u4F5C",dataIndex:"action"}});L(()=>a.activeKey,()=>{a.activeKey===2?t("change",v(o)):t("change",[])});function F(s){const r=o.value.indexOf(s.goods_id);r===-1?o.value.push(s.goods_id):o.value.splice(r,1),a.activeKey===2&&b()}return y(D({},Q(a)),{registerTableStep1:p,registerTableStep2:f,state:a,attrs:u,t:_,props:e,toggleSelect:F,selected:o,prev:()=>{a.activeKey=1},next:()=>{a.activeKey=2}})}});function te(e,t,u,_,o,a){const p=l("TableAction"),f=l("BasicTable"),b=l("FormItemRest"),F=l("TabPane"),s=l("Tabs"),r=l("Button");return c(),Y(Z,null,[i(s,{activeKey:e.activeKey,"onUpdate:activeKey":t[0]||(t[0]=d=>e.activeKey=d)},{default:n(()=>[(c(),C(F,{key:1,tab:"\u7B2C\u4E00\u6B65\uFF1A\u9009\u62E9\u5546\u54C1"},{default:n(()=>[i(b,null,{default:n(()=>[i(f,{onRegister:e.registerTableStep1,style:{padding:"0px"}},{bodyCell:n(({column:d,record:g})=>[d.key==="action"?(c(),C(p,{key:0,actions:[{label:e.selected.indexOf(g.goods_id)===-1?"\u53C2\u52A0\u6EE1\u51CF":"\u53D6\u6D88\u53C2\u52A0",onClick:e.toggleSelect.bind(null,g)}]},null,8,["actions"])):B("",!0)]),_:1},8,["onRegister"])]),_:1})]),_:1})),(c(),C(F,{key:2,tab:"\u7B2C\u4E8C\u6B65\uFF1A\u8BBE\u7F6E\u6EE1\u51CF",disabled:e.selected.length==0},{default:n(()=>[i(b,null,{default:n(()=>[i(f,{onRegister:e.registerTableStep2},{bodyCell:n(({column:d,record:g})=>[d.key==="action"?(c(),C(p,{key:0,actions:[{label:"\u53D6\u6D88",onClick:e.toggleSelect.bind(null,g)}]},null,8,["actions"])):B("",!0)]),_:1},8,["onRegister"])]),_:1})]),_:1},8,["disabled"]))]),_:1},8,["activeKey"]),i(r,{type:"primary",danger:"",onClick:e.prev},{default:n(()=>[T("\u4E0A\u4E00\u6B65")]),_:1},8,["onClick"]),i(r,{type:"primary",danger:"",onClick:e.next},{default:n(()=>[T("\u4E0B\u4E00\u6B65")]),_:1},8,["onClick"])],64)}var P=X(ee,[["render",te]]),fe=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));O("DiscountGoodsSelect",P);const be=[{title:"\u5E8F\u53F7",dataIndex:"id",fixed:"left",width:60},{title:"\u540D\u79F0",dataIndex:"name",width:200},{title:"\u6EE1\u591A\u5C11",dataIndex:"full",width:200},{title:"\u51CF\u591A\u5C11",dataIndex:"reduce",width:200},{title:"\u8D77\u59CB\u65F6\u95F4",dataIndex:"start_time",width:200},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"end_time",width:200},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"created_at",width:180}],A=[{title:"\u5546\u54C1\u4FE1\u606F",dataIndex:"title"},{title:"\u5E93\u5B58",dataIndex:"stock"}],w=[{field:"title",label:"\u540D\u79F0",component:"Input",colProps:{span:8}}],Fe=[{field:"name",label:"\u540D\u79F0",component:"Input",colProps:{span:8}}],ge=[{field:"divider-basic",label:"\u6D3B\u52A8\u4FE1\u606F",component:"Divider"},{field:"name",label:"\u6D3B\u52A8\u540D\u79F0",required:!0,component:"Input"},{field:"full",label:"\u6EE1\u591A\u5C11",required:!0,component:"InputNumber"},{field:"reduce",label:"\u51CF\u591A\u5C11",required:!0,component:"InputNumber"},{field:"time_range",label:"\u751F\u6548\u65F6\u95F4",required:!0,component:"RangePicker",componentProps:({formModel:e})=>(e.start_time&&e.end_time&&(e.time_range=[e.start_time,e.end_time]),{onChange:t=>{e.start_time=t[0],e.end_time=t[1]}})},{field:"start_time",label:"\u751F\u6548\u5F00\u59CB\u65F6\u95F4",required:!0,component:"DatePicker",show:!1},{field:"end_time",label:"\u751F\u6548\u7ED3\u675F\u65F6\u95F4",required:!0,component:"DatePicker",show:!1},{field:"divider-select-goods",label:"\u9009\u62E9\u6D3B\u52A8\u5546\u54C1",component:"Divider"},{field:"goods_ids",label:"\u6EE1\u51CF\u5546\u54C1",required:!0,component:"DiscountGoodsSelect"}];export{fe as D,ce as a,be as c,ge as f,me as g,de as l,Fe as s,pe as u};