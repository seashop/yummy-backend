import{av as r,a as i,s,a6 as n,ax as l,o as d,j as m,y as p,i as u,bo as c}from"./index.71d27ec8.js";import{C as f}from"./index.5d633dba.js";import"./index.5cecd89c.js";/* empty css               */import{u as h}from"./useECharts.199857fb.js";import"./index.205180e2.js";import"./index.5f6622b1.js";import"./Col.cced6662.js";import"./useFlexGapSupport.dcaea212.js";import"./useRefs.4de25004.js";import"./PlusOutlined.3ca17d8f.js";const g=i({components:{Card:f},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(e){const a=s(null),{setOptions:t}=h(a);return n(()=>e.loading,()=>{e.loading||t({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"2017"},{name:"2017"},{name:"2018"},{name:"2019"},{name:"2020"},{name:"2021"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#9f8ed7"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#1edec5"}}]}]})},{immediate:!0}),{chartRef:a}}});function y(e,a,t,S,w,C){const o=l("Card");return d(),m(o,{title:"\u9500\u552E\u7EDF\u8BA1",loading:e.loading},{default:p(()=>[u("div",{ref:"chartRef",style:c({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"])}var z=r(g,[["render",y]]);export{z as default};
