"use strict";(self["webpackChunkbadmintion"]=self["webpackChunkbadmintion"]||[]).push([[524],{524:function(e,t,s){s.r(t),s.d(t,{default:function(){return X}});var i=function(){var e=this,t=e._self._c;return t("div",[t("el-card",{staticStyle:{padding:"10vh"}},[t("div",[t("el-avatar",{staticClass:"head",attrs:{icon:"el-icon-user-solid"}})],1),t("el-descriptions",{attrs:{title:"XX球馆负责人"}},[t("el-descriptions-item",{attrs:{label:"负责人"}},[e._v("XXX")]),t("el-descriptions-item",{attrs:{label:"昵称"}},[e._v(e._s(e.userid)+"   "),t("p",{staticStyle:{color:"rgb(64, 158, 255)"},on:{click:e.changeid}},[e._v(" 更改昵称 ")])]),t("el-descriptions-item",{attrs:{label:"联系方式"}},[e._v("136XXXXXXXX")]),t("el-descriptions-item",{attrs:{label:"邮箱"}},[e._v("136XXXXXXXX@qq.com")]),t("el-descriptions-item",{attrs:{label:"注册时间"}},[e._v("2023-9-9")]),t("el-descriptions-item",{attrs:{label:"备注"}},[t("el-tag",{attrs:{size:"small"}},[e._v("XX球馆")])],1),t("el-descriptions-item",{attrs:{label:"球馆场地"}},[e._v("江门市")]),t("el-descriptions-item",{attrs:{label:"详细地址"}},[e._v("广东省江门市XX县XX区XX大道XX街道XXX号")])],1)],1)],1)},a=[],r=s(6176),n={data(){return{userid:sessionStorage.getItem("username")}},created(){this.$route.meta.keepAlive=!0},methods:{async changeid(){await this.$prompt("请输入昵称","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^.+$/,inputErrorMessage:"不能为空！"}).then((({value:e})=>{(0,r.v)("/user/rename",e).then((()=>{this.$message({type:"success",message:"你的昵称是: "+e}),sessionStorage.setItem("username",e),this.userid=e,this.$store.commit("changename",e)}))})).catch((()=>{this.$message({type:"info",message:"取消输入"})}))}}},l=n,c=s(1001),o=(0,c.Z)(l,i,a,!1,null,"718f54a4",null),X=o.exports}}]);
//# sourceMappingURL=524.ec901901.js.map