"use strict";(self["webpackChunkbadmintion"]=self["webpackChunkbadmintion"]||[]).push([[312],{6672:function(t,a,s){s.r(a),s.d(a,{default:function(){return h}});var e=function(){var t=this,a=t._self._c;return a("div",[a("el-card",[a("el-row",{staticClass:"mb",staticStyle:{padding:"0 30px"},attrs:{type:"flex",gutter:100}},[a("el-col",{attrs:{span:6}},[a("el-card",{staticStyle:{"background-color":"rgb(64, 158, 255)"}},[a("div",{staticClass:"fl topData"},[a("p",[t._v("本月预约总量")]),a("p",[a("b",[t._v("XXX")])]),a("span",[t._v("+XX%")]),a("span",{staticStyle:{"font-size":"12px"}},[t._v(" 与上月相比")])]),a("div",{staticClass:"fr"},[a("i",{staticClass:"el-icon-s-order topicon"})]),a("div",{staticClass:"clear"})])],1),a("el-col",{attrs:{span:6}},[a("el-card",{staticStyle:{"background-color":"rgb(50, 220, 96)"}},[a("div",{staticClass:"fl topData"},[a("p",[t._v("今年预约总量")]),a("p",[a("b",[t._v("XXX")])]),a("span",[t._v("+XX%")]),a("span",{staticStyle:{"font-size":"12px"}},[t._v(" 与去年相比")])]),a("div",{staticClass:"fr"},[a("i",{staticClass:"el-icon-tickets topicon"})]),a("div",{staticClass:"clear"})])],1),a("el-col",{attrs:{span:6}},[a("el-card",{staticStyle:{"background-color":"rgb(255, 112, 112)"}},[a("div",{staticClass:"fl topData"},[a("p",[t._v("本月营收额")]),a("p",[a("b",[t._v("XXX")])]),a("span",[t._v("+XX%")]),a("span",{staticStyle:{"font-size":"12px"}},[t._v(" 与上月相比")])]),a("div",{staticClass:"fr"},[a("i",{staticClass:"el-icon-bank-card topicon"})]),a("div",{staticClass:"clear"})])],1),a("el-col",{attrs:{span:6}},[a("el-card",{staticStyle:{"background-color":"rgb(200, 224, 99)"}},[a("div",{staticClass:"fl topData"},[a("p",[t._v("今年营收额")]),a("p",[a("b",[t._v("XXX")])]),a("span",[t._v("+XX%")]),a("span",{staticStyle:{"font-size":"12px"}},[t._v(" 与去年相比")])]),a("div",{staticClass:"fr"},[a("i",{staticClass:"el-icon-money topicon"})]),a("div",{staticClass:"clear"})])],1)],1),a("el-row",{attrs:{gutter:18}},[a("el-col",{attrs:{span:16}},[a("div",{ref:"line",staticStyle:{height:"500px"}}),a("div",{staticClass:"select"},[a("el-radio-group",{staticClass:"radio",attrs:{size:"medium"},model:{value:t.radio,callback:function(a){t.radio=a},expression:"radio"}},[a("el-radio-button",{attrs:{label:"week"}},[t._v("过去一周")]),a("el-radio-button",{attrs:{label:"twoweek"}},[t._v("过去两周")]),a("el-radio-button",{attrs:{label:"month"}},[t._v("过去一个月")])],1)],1)]),a("el-col",{attrs:{span:8}},[a("div",{ref:"gram",staticStyle:{height:"500px"}})])],1),a("el-row",{staticStyle:{"margin-top":"40px"},attrs:{gutter:30}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"block"},[a("span",{staticClass:"notice"},[a("i",{staticClass:"el-icon-warning-outline"},[t._v(" 近期公告")])]),a("el-timeline",[t._l(t.noticeList,(function(s){return[a("el-timeline-item",{key:s.content,attrs:{timestamp:s.date,placement:"top"}},[a("el-card",[a("h4",[t._v(t._s(s.title))]),a("p",[t._v(t._s(s.content))])])],1)]}))],2)],1)]),a("el-col",{attrs:{span:12}},[a("el-calendar",{model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1)],1)],1)],1)},i=[],l=(s(7658),s(9043)),r=s(6797),o=s.n(r),c=s(6176),n={data(){return{radio:"month",days:30,dateList:[],dataList:[],reserList:[],noticeList:[]}},created(){this.$route.meta.keepAlive=!0},mounted(){this.getdata(),this.reser(),this.notice()},methods:{linechart(){let t=l.S1(this.$refs.line);const a={xAxis:{type:"category",data:this.dateList},tooltip:{trigger:"axis"},title:{left:"center",text:"场地使用量"},yAxis:{type:"value"},series:[{data:this.dataList,type:"line"}]};t.setOption(a)},Histogram(){let t=l.S1(this.$refs.gram);const a={xAxis:{type:"category",data:["0-3","3-6","6-9","9-12","12-15","15-18","18-21","21-24"]},tooltip:{trigger:"item"},yAxis:{type:"value"},title:{text:"各时段预约量"},series:[{data:this.reserList,type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}]};t.setOption(a)},getdata(){(0,c.v)("/homedata",this.days).then((({data:t})=>{this.dataList=t,this.dateList=[];for(var a=0;a<this.days;a++)this.dateList.push(o()().subtract(this.days-a,"days").format("MM-DD")),this.linechart()}))},reser(){(0,c.v)("/reser").then((({data:t})=>{this.reserList=t,this.Histogram()}))},notice(){(0,c.v)("/home/notice").then((({data:t})=>{this.noticeList=t.list}))}},watch:{radio(){"week"==this.radio?this.days=7:"twoweek"==this.radio?this.days=14:this.days=30,this.getdata()}}},d=n,p=s(1001),v=(0,p.Z)(d,e,i,!1,null,"7d9e6806",null),h=v.exports}}]);
//# sourceMappingURL=312.222fee79.js.map