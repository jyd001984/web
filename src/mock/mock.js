import Mock from "mockjs";

//模拟网络延时
// Mock.setup({
//     timeout: 500
// })

//登录验证 成功需要返回token跟name（前端会存在浏览器本地存储里面，除了登录请求外每次发送请求请求头都会携带token）
Mock.mock("http://localhost:8080/user/login", "post", (res) => {
    const body = JSON.parse(res.body)
    if (body.userid === "user" && body.password === "123456") {
        return {
            success: true,
            message: "登录成功",
            accessToken: "3arc9h0vhcr0f8iprpnscmfo8s",
            userid: "user",
            username:"张三",
            op:"order",
            accessTokenAge:"2023-11-30",
            refreshToken:"dasdawfaw",
            refreshTokenAge:"2023-11-31"
        }
    } else {
        return {
            success: false,
            message: "账号或密码有误"
        }
    }
})

// //导航菜单栏 根据账号密码返回对应的菜单栏
// //注意:需要返回url（前端定义的路由，可以直接绑定点击事件）,icon（图标，地址在https://element.eleme.io/#/zh-CN/component/icon）
// Mock.mock("http://localhost:8080/menu", "post", () => {
//     return {
//         code: 200,
//         success: true,
//         message: "请求成功",
//         data: [
//             {
//                 name: "首页",
//                 url: "/home",
//                 icon: "el-icon-s-home"
//             },
//             {
//                 name: "预约管理",
//                 url: "/bookmage",
//                 icon: "el-icon-phone"
//             },
//             {
//                 name: "前台收银",
//                 url: "/frontdesk",
//                 icon: "el-icon-bank-card"
//             },
//             {
//                 name: "场地管理",
//                 url: "/sitemage",
//                 icon: "el-icon-film",
//                 //此为二级导航栏
//                 children: [
//                     {
//                         name: "场地详情",
//                         url: "/sitemage/detail",
//                         icon: "el-icon-document"
//                     },
//                     {
//                         name: "计费规则",
//                         url: "/sitemage/rule",
//                         icon: "el-icon-money"
//                     }
//                 ]
//             },
//             {
//                 name: "个人中心",
//                 icon: "el-icon-user-solid",
//                 url: "percen",
//                 children: [
//                     {
//                         name: "个人中心",
//                         url: "/percen/index",
//                         icon: "el-icon-user-solid"
//                     },
//                     {
//                         name: "修改密码",
//                         url: "/percen/psw",
//                         icon: "el-icon-warning-outline"
//                     },
//                 ]
//             },
//             //此为管理员权限,根据身份验证返回
//             {
//                 name: "管理员",
//                 url: "/manage/user",
//                 icon: "el-icon-s-custom"
//             }
//         ]
//     }
// })

//获取首页视图数据 参数是多少意味着返回多少条数据
Mock.mock("http://localhost:8080/homedata", "post", ({ body }) => {
    if (body == 7) {
        return {
            code: 200,
            success: true,
            message: "请求成功",
            data: [10, 50, 60, 90, 770, 660, 30]
        }
    } else if (body == 14) {
        return {
            code: 200,
            success: true,
            message: "请求成功",
            data: [10, 50, 60, 90, 770, 660, 30, 6, 99, 663, 160, 264, 26, 999,]
        }
    } else {
        return {
            code: 200,
            success: true,
            message: "请求成功",
            data: [10, 50, 60, 90, 770, 660, 30, 999, 1, 92, 646, 3116, 313, 600, 264, 1, 613, 61, 64, 976, 161, 631, 460, 4, 62, 64, 2, 0, 61]
        }
    }
})

//获取各时段预约量
Mock.mock("http://localhost:8080/reser", "post", () => {
    return {
        code: 200,
        success: true,
        message: "请求成功",
        data: [114, 222, 20, 41, 100, 23, 54, 66]
    }
})

//获取公告栏数据
Mock.mock("http://localhost:8080/home/notice","post",()=>{
    return {
        code: 200,
        success: true,
        message: "请求成功",
        data:Mock.mock({
            [`list|${5}`]:[{
                'date':Mock.Random.time("yyyy/MM/dd"),
                'title|1':['更新内容通知','关于管理方案','收费规则说明','其他说明'],
                'content|+1':1000
            }]
        })
    }
})

//获取预约管理订单
Mock.mock("http://localhost:8080/bookmage", "post", (res) => {
    const { pageSize, currentPage } = JSON.parse(res.body);
    console.log("返回数据量：" + pageSize + "当前页码：" + currentPage)
    return {
        code: 200,
        success: true,
        message: "请求成功",
        data: Mock.mock({
            [`list|${pageSize}`]: [{
                'order|+1': 1001,
                'date|1': ["2022-1-1", "2023-5-5", "2024-6-6"],
                'time': Mock.Random.time("HH:mm") + ' ~ ' + Mock.Random.time("HH:mm"),
                'name': Mock.Random.name(),
                'cellphone': "1369546361",
                'area|1': ["区域1", "区域2", "区域3"],
                'address|1': ["场地1", "场地2", "场地3"],
            }],
            total: 300
        })
    }
})

//获取区域场地信息
Mock.mock("http://localhost:8080/sitedetail", "post", () => {
    return {
        code: 200,
        success: true,
        message: "请求成功",
        data: [
            {
                area: "区域一",
                addtail: [
                    {
                        address: "场地一",
                        status: 2, //1为运营中，2位停运中
                        sport: 1, //1为乒乓球，2为羽毛球，3为桌球
                        court: "XX球场",
                    },
                    {
                        address: "场地二",
                        status: 2,
                        sport: 2, //1为乒乓球，2为羽毛球，3为桌球
                        court: "XX球场",
                    },
                    {
                        address: "场地三",
                        status: 2,
                        sport: 3, //1为乒乓球，2为羽毛球，3为桌球
                        court: "XX球场",
                    },
                    {
                        address: "场地四",
                        status: 2,
                        sport: 1, //1为乒乓球，2为羽毛球，3为桌球
                        court: "XX球场",
                    },
                ],
            }, {
                area: "区域二",
                areastatus: 12, //1为运营中，2为停运中
                addtail: [
                    {
                        address: "场地一",
                        status: 2,
                        sport: 1, //1为乒乓球，2为羽毛球，3为桌球
                        court: "XX球场",
                    },
                    {
                        address: "场地二",
                        status: 1,
                        sport: 2, //1为乒乓球，2为羽毛球，3为桌球
                        court: "XX球场",
                    },
                    {
                        address: "场地三",
                        status: 1,
                        sport: 3, //1为乒乓球，2为羽毛球，3为桌球
                        court: "XX球场",
                    },
                    {
                        address: "场地四",
                        status: 2,
                        sport: 1, //1为乒乓球，2为羽毛球，3为桌球
                        court: "XX球场",
                    },
                ],
            }, {
                area: "区域三",
                areastatus: 1, //1为运营中，2为停运中
                addtail: [
                    {
                        address: "场地一",
                        status: 2,
                        sport: 1, //1为乒乓球，2为羽毛球，3为桌球
                        court: "XX球场",
                    },
                    {
                        address: "场地二",
                        status: 1,
                        sport: 2, //1为乒乓球，2为羽毛球，3为桌球
                        court: "XX球场",
                    },
                    {
                        address: "场地三",
                        status: 1,
                        sport: 3, //1为乒乓球，2为羽毛球，3为桌球
                        court: "XX球场",
                    },
                    {
                        address: "场地四",
                        status: 2,
                        sport: 1, //1为乒乓球，2为羽毛球，3为桌球
                        court: "XX球场",
                    },
                ],
            }, {
                area: "区域四",
                areastatus: 12, //1为运营中，2为停运中
                addtail: [
                    {
                        address: "场地一",
                        status: 2,
                        sport: 1, //1为乒乓球，2为羽毛球，3为桌球
                        court: "XX球场",
                    },
                    {
                        address: "场地二",
                        status: 1,
                        sport: 2, //1为乒乓球，2为羽毛球，3为桌球
                        court: "XX球场",
                    },
                    {
                        address: "场地三",
                        status: 1,
                        sport: 3, //1为乒乓球，2为羽毛球，3为桌球
                        court: "XX球场",
                    },
                    {
                        address: "场地四",
                        status: 2,
                        sport: 1, //1为乒乓球，2为羽毛球，3为桌球
                        court: "XX球场",
                    },
                ],
            }
        ]
    }
})

//获取计费规则
Mock.mock("http://localhost:8080/siterule", "post", () => {
    return {
        code: 200,
        success: true,
        message: "请求成功",
        data: [
            {
                sport: "区域一/场地二/乒乓球",
                fit: "8元",
                member: "6元",
            },
            {
                sport: "区域一/场地二/羽毛球",
                fit: "8元",
                member: "6元",
            },
            {
                sport: "区域一/场地二/排球",
                fit: "8元",
                member: "6元",
            },
            {
                sport: "区域一/场地二/桌球",
                fit: "8元",
                member: "6元",
            },
            {
                sport: "区域一/场地二/毽子",
                fit: "8元",
                member: "6元",
            },
            {
                sport: "区域一/场地二/射击",
                fit: "8元",
                member: "6元",
            },
        ]
    }
})

//获取运动类型占比图雷达图
Mock.mock("http://localhost:8080/manage/radar", "post", () => {
    let allsprotdata = 500
    return {
        code: 200,
        success: true,
        message: "请求成功",
        data: {
            indicator: [
                {
                    name: '羽毛球', max: allsprotdata
                },
                {
                    name: '乒乓球', max: allsprotdata
                },
                {
                    name: '排球', max: allsprotdata
                },
                {
                    name: '桌球', max: allsprotdata
                },
                {
                    name: '棒球', max: allsprotdata
                },
            ],
            name: ["各运动类型场地数量占比", "各运动类型场地使用量"],
            datavalue: [
                {
                    value: [60, 200, 30, 100, 110],
                    name: "各运动类型场地数量占比"
                },
                {
                    value: [200, 300, 400, 30, 100],
                    name: "各运动类型场地使用量"
                }
            ]
        }
    }
})

//获取场地使用总时长柱状图

//获取加盟球馆数据

//获取前台收银数据
Mock.mock("http://localhost:8080/frontdest/index", "post", () => {
    return {
        code: 200,
        success: true,
        message: "请求成功",
        data: Mock.mock({
            [`list|${20}`]: [{
                'order|+1': 1000,
                'area|1': ["区域1", "区域2", "区域3"],
                'site|1': ["场地1", "场地2", "场地3"],
                "status|1": [1, 2],
                reserve: Mock.Random.time("HH:mm")+'~'+Mock.Random.time("HH:mm"),
                "timer|1":[`1h`,`2h`,`3h`,`4h`],
                custom: Mock.Random.name(),
            }],
        })
    }
})

Mock.mock("http://localhost:8080/user/changePassword", "post",()=>{
    return{
        success:true
    }
})

Mock.mock("http://localhost:8080/user/rename", "post",()=>{
    return{
        success:true
    }
})

Mock.mock("http://localhost:8080/user/newOrder", "post",(res)=>{
    console.log(res)
    return{
        success:true
    }
})