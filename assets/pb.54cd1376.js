function l(a,n){return({formModel:s,schema:i})=>{const t=[];return a.forEach(([r,e])=>{if(Number.isNaN(Number(e))||e<=0)return;let u={label:r,value:r};n&&(u=n(u,e)),u&&t.push(u)}),i.defaultValue=t[0].value,s.status=t[0].value,{options:t}}}export{l as s};