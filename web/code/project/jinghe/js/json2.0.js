// 后台数据重构
data = {
    nav: {
        cont: [
            { id: 1, title: "首页" },
            { id: 2, title: "关于锦和" },
            { id: 3, title: "买买车辆" },
            { id: 4, title: "锦和天地" },
            { id: 5, title: "锦和保障" },
            { id: 6, title: "联系锦和" },
        ],
        color: [
            { id: 1, colorcn: "天蓝色", colorun: "skyblue" },
            { id: 2, colorcn: "粉色", colorun: "pink" },
            { id: 3, colorcn: "青绿色", colorun: "palegreen" },
            { id: 4, colorcn: "淡黄色", colorun: "palegoldenrod" },
            { id: 5, colorcn: "橙色", colorun: "#ff6600" }
        ]
    },
    slide1:{
        slide1er:[
            "./images/lun1.jpg",
            "./images/lun2.jpg",
            "./images/lun3.jpg",
            "./images/7c7fed36c83d0ce9233878cc172995cb.png",
            "./images/53c44b6c89f5a0be8c1073bd45d344e3.png",
            "./images/739da3ccceff19df624ee67a03e9cc9a.jpg",
            "./images/3309e28666fc11a6ee159d05e732bed8.png",
            "./images/chengping1.jpg" 
        ]
    },
    slide2:{
        slide2er:[
            "./images/0f1cfad0a82df46791ac5a3f6cae09ef.jpg",
            "./images/7c7fed36c83d0ce9233878cc172995cb.png",
            "./images/53c44b6c89f5a0be8c1073bd45d344e3.png",
            "./images/739da3ccceff19df624ee67a03e9cc9a.jpg",
            "./images/3309e28666fc11a6ee159d05e732bed8.png",
            "./images/chengping1.jpg" 
        ]
    },
    add:"联系地址：成都市双流区大同路与机场交叉口锦和汽车交易中心",
    text:[
            {name:"联系我们",title:"客服电话：028-80802626"},
            {name:"联系我们",title:"蜀ICP备19039015"},
            {name:"联系我们",title:"技术支持：万息科技"},
            {name:"关于锦和",title:"锦和汽车商业中心，坐落于西南汽车交易的核心商圈一成都白家。项目总用地83亩，建面约16万m7，展位超5000个，是目前西南业态最全、设计最优的体验型汽车商业综合体。项目涵盖二手车展销、汽车主题文化、汽车博物馆、休闲餐饮等多业态，规划近2000m休闲广场、300m长商业走廊、30000m7 屋顶汽车艺展中心、4000mf 中庭汽车博览广场;采用创新性螺旋式建筑设计，接驳城市轨道交通，链接全城;身定制Loft层高，空间灵动，一可变两层，办公经营两不误。"},
            {name:"企业使命",title:"锦和以“诚信、透明、服务、保障”为基石，以消费者需求为市场导向，打造集二手车交易、休闲娱乐、文教研学为一体的一站式汽车主题消费目的地，让锦和汽车商业中心成为西南地区的二手车潮流圣地、城市生活娱乐场。"},

        ]
    

}
console.log(data.text);
localStorage.setItem("datanavtext",JSON.stringify(data.nav.cont));
localStorage.setItem("datanavcolor1",JSON.stringify(data.nav.color[0].colorun));
localStorage.setItem("datanavcolor2",JSON.stringify(data.nav.color[0].colorun));
localStorage.setItem("datanavcolor3",JSON.stringify(data.nav.color[0].colorun));
localStorage.setItem("datanavcolor4",JSON.stringify(data.nav.color[0].colorun));
localStorage.setItem("datanavcolor5",JSON.stringify(data.nav.color[0].colorun));
localStorage.setItem("datanavcolor6",JSON.stringify(data.nav.color[0].colorun));
localStorage.setItem("dataslide1",JSON.stringify(data.slide1.slide1er));
localStorage.setItem("dataslide2",JSON.stringify(data.slide2.slide2er));
localStorage.setItem("dataadd",JSON.stringify(data.add));
localStorage.setItem("datatitle1",JSON.stringify(data.text[0]));
localStorage.setItem("datatitle2",JSON.stringify(data.text[1]));
localStorage.setItem("datatitle3",JSON.stringify(data.text[2]));
localStorage.setItem("datatitle4",JSON.stringify(data.text[3]));
localStorage.setItem("datatitle5",JSON.stringify(data.text[4]));
