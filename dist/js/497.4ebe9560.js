"use strict";(self["webpackChunkbadmintion"]=self["webpackChunkbadmintion"]||[]).push([[497],{7497:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var i=function(){var t=this,e=t._self._c;return e("div",[e("el-card",{staticStyle:{padding:"50px"}},[e("el-row",{attrs:{gutter:30}},[e("el-col",{attrs:{span:12}},[e("div",{ref:"radar",staticStyle:{height:"500px"}})]),e("el-col",{attrs:{span:12}},[e("div",{ref:"Histogram",staticStyle:{height:"500px"}})])],1),e("el-descriptions",{staticClass:"margin-top",attrs:{title:"公司信息",column:3,size:t.size,border:""}},[e("el-descriptions-item",[e("template",{slot:"label"},[e("i",{staticClass:"el-icon-user"}),t._v(" 负责人 ")]),t._v(" XXX/XXX ")],2),e("el-descriptions-item",[e("template",{slot:"label"},[e("i",{staticClass:"el-icon-mobile-phone"}),t._v(" 手机号 ")]),t._v(" 18100000000 ")],2),e("el-descriptions-item",[e("template",{slot:"label"},[e("i",{staticClass:"el-icon-location-outline"}),t._v(" 公司地址 ")]),t._v(" 江门市XXX ")],2),e("el-descriptions-item",[e("template",{slot:"label"},[e("i",{staticClass:"el-icon-tickets"}),t._v(" 备注 ")]),e("el-tag",{attrs:{size:"small"}},[t._v("XX公司")])],2),e("el-descriptions-item",[e("template",{slot:"label"},[e("i",{staticClass:"el-icon-office-building"}),t._v(" 联系地址 ")]),t._v(" XXX ")],2)],1),e("el-button",{staticClass:"fr",staticStyle:{"margin-top":"30px"},attrs:{type:"primary"}},[t._v("增加球馆")]),e("el-table",{staticStyle:{width:"100%","font-size":"15px"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-form",{attrs:{"label-position":"left",inline:""}},[e("el-form-item",[e("span",[t._v(t._s(a.row.id))])])],1)]}}])}),e("el-table-column",{attrs:{label:"加盟球馆",prop:"id"}})],1),e("div",{staticClass:"clear"})],1)],1)},s=[],l=a(9043),o=a(6176),r={data(){return{legend:[],indicator:[],radarvalue:[],tableData:[{id:"XX球馆"},{id:"XX球馆"},{id:"XX球馆"},{id:"XX球馆"},{id:"XX球馆"},{id:"XX球馆"}]}},created(){this.$route.meta.keepAlive=!0},mounted(){this.getdata(),this.Histogram()},methods:{getRadar(){let t=l.S1(this.$refs.radar);const e={title:{text:"运动类型占比"},tooltip:{trigger:"item"},legend:{data:this.legend},radar:{indicator:this.indicator},series:[{name:"Budget vs spending",type:"radar",data:this.radarvalue}]};t.setOption(e)},getdata(){(0,o.v)("/manage/radar").then((({data:t})=>{this.legend=t.name,this.indicator=t.indicator,this.radarvalue=t.datavalue,this.getRadar(),console.log(this.legend),console.log(this.indicator),console.log(this.radarvalue)}))},Histogram(){let t=l.S1(this.$refs.Histogram);const e={title:{left:"center",text:"营收情况"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:80,bottom:30},xAxis:{type:"value",position:"top",splitLine:{lineStyle:{type:"dshed"}}},yAxis:{type:"category",axisLine:{show:!0},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},data:["广告支出","广告收入","加盟收入","其他收入","其他支出","净收入"]},series:[{name:"Cost",type:"bar",stack:"Total",label:{show:!0,formatter:"{b}"},data:[-3e3,5e3,12e3,3e3,-8e3,9e3]}]};t.setOption(e)}}},n=r,d=a(1001),c=(0,d.Z)(n,i,s,!1,null,"ec671838",null),p=c.exports}}]);
//# sourceMappingURL=497.4ebe9560.js.map