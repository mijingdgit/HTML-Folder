//登录渲染
if (localStorage.getItem("Identification") == null) {
  $(".register")[0].innerHTML = `<a href="./backstageenter.html">登录</a>`;
} else {
  $(".register")[0].innerHTML = `<a href="#">${localStorage.getItem(
    "Identification"
  )}</a>`;
}
// 获取页面节点
// TODO 导航节点获取
let jinhenav = document.querySelector(".jinhenav"); //导航
let jinheslide1 = document.querySelector(".jinheslide1"); //大轮播
let jinheslide2 = document.querySelector(".jinheslide2"); //小轮播
let jinhecall = document.querySelector(".jinhecall"); //联系锦和
let textamend = document.querySelector(".textamend"); //文字编辑
// TODO 页面中部内容区节点
let addbtn = document.querySelector(".addbtn"); //添加
let con1 = document.querySelector(".cont .con1"); //顶部标签
let con2 = document.querySelector(".cont .con2"); //内容

// TODO 弹出框节点
let addbox = document.querySelector(".addbox");
let sp1 = document.querySelector(".addbox .sp1"); //叉号
let amenddiv = document.querySelector(".amenddiv"); //中间填充
let endaddbtn = document.querySelector(".endaddbtn"); //确定按钮
// TODO 模板字符串

let topcont = (topstr1, topstr2) => {
  return `<div class="row toptitle"><div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 id">${topstr1}</div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 color">${topstr2}</div>
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 alldelete"></div></div>`;
};

let content = (contstr1, contstr2, amender, deleteer) => {
  return `<div class="row edit">
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 id">${contstr1}</div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 color">${contstr2}</div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 amend">${amender}</div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 delete">${deleteer}</div>
          </div>
          `;
};
let content1 = (contstr1, contstr2, amender, deleteer) => {
  return `
  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 id">${contstr1}</div>
  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 color">${contstr2}</div>
  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 amend">${amender}</div>
  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 delete">${deleteer}</div>
         `;
};
let amend = (titletext1, navtitle, amendor) => {
  return `<h4>${titletext1}</h4>
    <div>当前编辑：<span>${navtitle}</span></div>
    <div class="ad addid">
    ${amendor}
    </div>`;
};
let op = (opcolorun, opcolorcn) => {
  return `<option value="${opcolorun}">${opcolorcn}</option>`;
};

let navtext = JSON.parse(localStorage.getItem("datanavtext"));

// TODO 导航栏
function navfun() {
  // 初始化页面
  con1.innerHTML = "";
  con2.innerHTML = "";
  addbtn.innerHTML = "";
  let pageBox = document.querySelector("#page");
  pageBox.innerHTML = "";
  let topstr1 = "导航名";
  let topstr2 = "颜色选择";
  jinhenav.style.background = " #ff6600";
  jinheslide1.style.background = "";
  jinheslide2.style.background = "";
  jinhecall.style.background = "";
  textamend.style.background = "";
  con1.innerHTML = topcont(topstr1, topstr2);
  let contstr2 = data.nav.color[0].colorcn;
  let amender = "编辑";
  let deleteer = "";
  //   第一次循环渲染整个中间页面部分
  for (let i = 0; i < navtext.length; i++) {
    let contstr1 = navtext[i].title;
    con2.innerHTML += content(contstr1, contstr2, amender, deleteer);
  }
  //  当点击编辑时
  xiunav();
  function xiunav() {
    let amendon = document.querySelectorAll(".amend");
    for (let i = 0; i < navtext.length; i++) {
      amendon[i].onclick = function () {
        let titletext1 = "编辑菜单";
        let navtitle = "导航栏";
        let amendor = `
          导航名称：<input type="text" value="${navtext[i].title}" class="amendinput" placeholder=""><br>
          颜色选择：<select name="" id="" value="" class="amendsele"></select><br>
          `;
        amenddiv.innerHTML = amend(titletext1, navtitle, amendor);
        //   获取弹出框select节点
        let amendsele = document.querySelector(".amendsele");

        for (let j = 0; j < data.nav.color.length; j++) {
          let opcolorun = data.nav.color[j].colorun;
          let opcolorcn = data.nav.color[j].colorcn;
          amendsele.innerHTML += op(opcolorun, opcolorcn);
        }
        addbox.style.display = "block";
        // 点击确定按钮关闭弹窗
        let endaddbtn = document.querySelector(".endaddbtn");
        let amendinput = document.querySelector(".amendinput");
        endaddbtn.onclick = function () {
          let edit = document.querySelectorAll(".con2 .edit");
          contstr1 = amendinput.value;
          // 判断颜色输出中文
          if (amendsele.value == "skyblue") {
            contstr2 = "天蓝色";
            // return contstr2
          } else if (amendsele.value == "pink") {
            contstr2 = "粉色";
            // return contstr2;
          } else if (amendsele.value == "palegreen") {
            contstr2 = "青绿色";
            // return contstr2;
          } else if (amendsele.value == "palegoldenrod") {
            contstr2 = "淡黄色";
            // return contstr2;
          } else {
            contstr2 = "橙色";
          }
          // 将颜色储存到缓存中
          if (i == 0) {
            localStorage.setItem(
              "datanavcolor1",
              JSON.stringify(amendsele.value)
            );
            navtext[0].title = amendinput.value;
          } else if (i == 1) {
            localStorage.setItem(
              "datanavcolor2",
              JSON.stringify(amendsele.value)
            );
            navtext[1].title = amendinput.value;
          } else if (i == 2) {
            localStorage.setItem(
              "datanavcolor3",
              JSON.stringify(amendsele.value)
            );
            navtext[2].title = amendinput.value;
          } else if (i == 3) {
            localStorage.setItem(
              "datanavcolor4",
              JSON.stringify(amendsele.value)
            );
            navtext[3].title = amendinput.value;
          } else if (i == 4) {
            localStorage.setItem(
              "datanavcolor5",
              JSON.stringify(amendsele.value)
            );
            navtext[4].title = amendinput.value;
          } else {
            localStorage.setItem(
              "datanavcolor6",
              JSON.stringify(amendsele.value)
            );
            navtext[5].title = amendinput.value;
          }
          localStorage.setItem("datanavtext", JSON.stringify(navtext));
          edit[i].innerHTML = "";
          edit[i].innerHTML += content1(contstr1, contstr2, amender, deleteer);
          addbox.style.display = "none";
          xiunav();
        };
      };
    }
  }
}
// navfun();
jinhenav.onclick = () => {
  navfun();
};
let slide1text = JSON.parse(localStorage.getItem("dataslide1"));
// TODO 轮播一
slide1fun();
function slide1fun() {
  con1.innerHTML = "";
  con2.innerHTML = "";
  let topstr1 = "序号";
  let topstr2 = "图片链接";
  jinhenav.style.background = "";
  jinheslide1.style.background = "#ff6600";
  jinheslide2.style.background = "";
  jinhecall.style.background = "";
  textamend.style.background = "";
  addbtn.innerHTML = `<div class="col-md-12 col-sm-12 col-xs-12 add">+添加</div>`;
  con1.innerHTML = topcont(topstr1, topstr2);
  let amender = "编辑";
  let deleteer = "删除";
  // for (let i = 0; i < slide1text.length; i++) {
  //   let contstr1 = i + 1;
  //   let contstr2 = slide1text[i];
  //   con2.innerHTML += content(contstr1, contstr2, amender, deleteer);
  // }

  // 分页
  //每页数据4条
  var pagePerNum = 4;
  // fengye();
  // function fengye() {
  con2.innerHTML = "";
  //页码容器
  let pageBox = document.querySelector("#page");
  //当前加载页码
  var pageIdx = 1;
  //计算总页码数，向上取整，哪怕最后只有一条，也算一页
  var allPagesNum = Math.ceil(slide1text.length / pagePerNum);
  //网页打开或刷新时获取参数
  var argArgs = getUrlArgs();
  //检查参数的合法性
  checkArgs(argArgs);
  //初始化（页面打开就执行）
  showList(pageIdx); //显示第idx页数据
  showPage(pageIdx); //显示页码

  // 工具函数-获取网址中的参数
  function getUrlArgs() {
    //获取页面url网址
    let url = window.location.href;
    //准备参数对象
    let args = {};
    //如果有参数，处理参数

    if (url.includes("?")) {
      let argStr = url.split("?")[1]; //pageIdx=1&pagePerNum=4
      let argArr = argStr.split("&"); //["pageIdx=1","pagePerNum=4"]
      for (let i = 0; i < argArr.length; i++) {
        let key = argArr[i].split("=")[0]; //page
        let val = argArr[i].split("=")[1]; //1
        args[key] = val;
      }
      // args = {
      //   "pageIdx":3,
      //   "pagePerNum":4
      // }
    }
    //返回JSON对象
    return args; //{"page":1,"pagePerNum":4}
  }
  // 工具函数-检查页面url中参数的合法性
  function checkArgs(_args) {
    //替换网址传入的页码
    if (_args.pageIdx) {
      pageIdx = parseInt(_args.pageIdx);

      //如果输入的不是数字
      if (isNaN(pageIdx)) {
        pageIdx = 1;
      }
      //如果输入的数字小于1
      if (pageIdx < 1) {
        pageIdx = 1;
      }
      //如果输入的数字大于最大页码数
      if (pageIdx > allPagesNum) {
        pageIdx = allPagesNum;
      }

      // 上述代码可以写成下面代码
      // if( isNaN(page) || page < 1 || page > allPagesNum) {
      //     page = 1;
      // }
    }
  }
  // 工具函数-渲染当前页码对应的数据
  function showList(_pageIdx) {
    //数据起始下标
    var sIdx = (_pageIdx - 1) * pagePerNum; //0
    //数据结束下标
    var eIdx = _pageIdx * pagePerNum; //4
    //根据数据下标渲染页面
    for (let i = sIdx; i < eIdx && i < slide1text.length; i++) {
      let contstr1 = i + 1;
      let contstr2 = slide1text[i];
      con2.innerHTML += content(contstr1, contstr2, amender, deleteer);
    }
  }
  // 工具函数-显示页码
  function showPage(_pageIdx) {
    //构建页面结构
    var tmp = "";
    //如果是第一页，那么首页和上一页就不可点
    if (_pageIdx == 1) {
      tmp += `
                    <a class="nolink">首页</a>
                    <a class="nolink">上一页</a>
                    `;
    } else {
      tmp += `<a href="?pageIdx=1">首页</a><a href="?pageIdx=${
        _pageIdx - 1
      }">上一页</a>`;
    }
    //动态构建页面数据
    for (let i = 1; i <= allPagesNum; i++) {
      //如果是当前页，那么当前页设置curr样式
      if (i == _pageIdx) {
        tmp += `
                      <a class="curr" href="?pageIdx=${i}">${i}</a>`;
      } else {
        tmp += `<a href="?pageIdx=${i}">${i}</a>`;
      }
    }
    //如果是最后一页，那么下一页和尾页就不可点
    if (_pageIdx == allPagesNum) {
      tmp += `
                    <a class="nolink">下一页</a>
                    <a class="nolink">尾页</a>
                    `;
    } else {
      tmp += `
                    <a href="?pageIdx=${_pageIdx + 1}">下一页</a>
                    <a href="?pageIdx=${allPagesNum}">尾页</a>
                    `;
    }
    //渲染到页面
    pageBox.innerHTML = tmp;
  }
  // }
  // 删除大轮播
  shanslide1();
  function shanslide1() {
    let dele = document.querySelectorAll(".delete");
    for (let i = 0; i < dele.length; i++) {
      dele[i].onclick = function () {
        let ii =
          this.previousElementSibling.previousElementSibling.innerHTML - 1;
        con2.innerHTML = "";
        slide1text.splice(ii, 1);
        localStorage.setItem("dataslide1", JSON.stringify(slide1text));
        slide1text = JSON.parse(localStorage.getItem("dataslide1"));
        // for (let i = 0; i < slide1text.length; i++) {
        //   console.log(slide1text.length);
        //   let contstr1 = i + 1;
        //   let contstr2 = slide1text[i];
        //   con2.innerHTML += content(contstr1, contstr2, amender, deleteer);
        // }

        //检查参数的合法性
        checkArgs(argArgs);
        //初始化（页面打开就执行）
        showList(pageIdx); //显示第idx页数据
        showPage(pageIdx); //显示页码
        shanslide1();
        bianslide1();
      };
    }
  }
  // 添加大轮播点击之后弹出弹出框添加
  tianslide1();
  function tianslide1() {
    addbtn.onclick = function () {
      let titletext1 = "添加菜单";
      let navtitle = "轮播1";
      let amendor = `轮播地址：<input type="text" value="" class="amendinput" placeholder="">`;
      amenddiv.innerHTML = amend(titletext1, navtitle, amendor);
      addbox.style.display = "block";
      let endaddbtn = document.querySelector(".endaddbtn");
      let amendinput = document.querySelector(".amendinput");
      endaddbtn.onclick = () => {
        con2.innerHTML = "";
        slide1text.push(amendinput.value);
        localStorage.setItem("dataslide1", JSON.stringify(slide1text));
        slide1text = JSON.parse(localStorage.getItem("dataslide1"));
        // for (let i = 0; i < slide1text.length; i++) {
        //   let contstr1 = i + 1;
        //   let contstr2 = slide1text[i];
        //   con2.innerHTML += content(contstr1, contstr2, amender, deleteer);
        // }
        //检查参数的合法性
        checkArgs(argArgs);
        //初始化（页面打开就执行）
        showList(pageIdx); //显示第idx页数据
        showPage(pageIdx); //显示页码
        addbox.style.display = "none";
        shanslide1();
        bianslide1();
      };
    };
  }
  // 编辑大轮播
  bianslide1();
  function bianslide1() {
    let amendon = document.querySelectorAll(".amend");
    for (let i = 0; i < amendon.length; i++) {
      amendon[i].onclick = function () {
        let ii =
          this.previousElementSibling.previousElementSibling.innerHTML - 1;
        console.log(ii);
        let titletext1 = "编辑菜单";
        let navtitle = "轮播1";
        let amendor = `轮播序号：<span>${ii + 1}</span></br>
          轮播地址：<input type="text" value="${
            slide1text[ii]
          }" class="amendinput" placeholder="">`;
        amenddiv.innerHTML = amend(titletext1, navtitle, amendor);
        addbox.style.display = "block";
        queslide1(ii);
      };
    }
  }
  function queslide1(i) {
    console.log(i);
    let endaddbtn = document.querySelector(".endaddbtn");
    let amendinput = document.querySelector(".amendinput");
    endaddbtn.onclick = () => {
      con2.innerHTML = "";
      slide1text[i] = amendinput.value;
      localStorage.setItem("dataslide1", JSON.stringify(slide1text));
      slide1text = JSON.parse(localStorage.getItem("dataslide1"));
      // for (let i = 0; i < slide1text.length; i++) {
      //   let contstr1 = i + 1;
      //   let contstr2 = slide1text[i];
      //   con2.innerHTML += content(contstr1, contstr2, amender, deleteer);
      // }
      //检查参数的合法性
      checkArgs(argArgs);
      //初始化（页面打开就执行）
      showList(pageIdx); //显示第idx页数据
      showPage(pageIdx); //显示页码
      addbox.style.display = "none";
      bianslide1();
      shanslide1();
    };
  }
}
jinheslide1.onclick = () => {
  slide1fun();
};
// TODO 轮播二
let slide2text = JSON.parse(localStorage.getItem("dataslide2"));
slide2fun();
function slide2fun() {
  jinheslide2.onclick = function () {
    con1.innerHTML = "";
    con2.innerHTML = "";
    let pageBox = document.querySelector("#page");
    pageBox.innerHTML = "";
    let topstr1 = "序号";
    let topstr2 = "图片链接";
    jinhenav.style.background = "";
    jinheslide1.style.background = "";
    jinheslide2.style.background = "#ff6600";
    jinhecall.style.background = "";
    textamend.style.background = "";
    addbtn.innerHTML = `<div class="col-md-12 col-sm-12 col-xs-12 add">+添加</div>`;
    con1.innerHTML = topcont(topstr1, topstr2);
    let amender = "编辑";
    let deleteer = "删除";
    for (let i = 0; i < slide2text.length; i++) {
      let contstr1 = i + 1;
      let contstr2 = slide2text[i];
      con2.innerHTML += content(contstr1, contstr2, amender, deleteer);
    }

    // 删除小轮播
    shanslide2();
    function shanslide2() {
      let dele = document.querySelectorAll(".delete");
      for (let i = 0; i < dele.length; i++) {
        dele[i].onclick = function () {
          // let ii = this.previousElementSibling.previousElementSibling.innerHTML-1;
          con2.innerHTML = "";
          slide2text.splice(i, 1);
          localStorage.setItem("dataslide2", JSON.stringify(slide2text));
          slide2text = JSON.parse(localStorage.getItem("dataslide2"));
          for (let i = 0; i < slide2text.length; i++) {
            let contstr1 = i + 1;
            let contstr2 = slide2text[i];
            con2.innerHTML += content(contstr1, contstr2, amender, deleteer);
          }
          shanslide2();
          bianslide2();
        };
      }
    }
    // 添加小轮播点击之后弹出弹出框添加
    tianslide2();
    function tianslide2() {
      addbtn.onclick = function () {
        let titletext1 = "添加菜单";
        let navtitle = "轮播2";
        let amendor = `轮播地址：<input type="text" value="" class="amendinput" placeholder="">`;
        amenddiv.innerHTML = amend(titletext1, navtitle, amendor);
        addbox.style.display = "block";
        let endaddbtn = document.querySelector(".endaddbtn");
        let amendinput = document.querySelector(".amendinput");
        endaddbtn.onclick = () => {
          con2.innerHTML = "";
          slide2text.push(amendinput.value);
          localStorage.setItem("dataslide2", JSON.stringify(slide2text));
          slide2text = JSON.parse(localStorage.getItem("dataslide2"));
          for (let i = 0; i < slide2text.length; i++) {
            let contstr1 = i + 1;
            let contstr2 = slide2text[i];
            con2.innerHTML += content(contstr1, contstr2, amender, deleteer);
          }
          addbox.style.display = "none";
          shanslide2();
          bianslide2();
        };
      };
    }
    // 编辑小轮播
    bianslide2();
    function bianslide2() {
      let amendon = document.querySelectorAll(".amend");
      for (let i = 0; i < amendon.length; i++) {
        amendon[i].onclick = function () {
          let titletext1 = "编辑菜单";
          let navtitle = "轮播2";
          let amendor = `轮播序号：<span>${i + 1}</span></br>
          轮播地址：<input type="text" value="${
            slide2text[i]
          }" class="amendinput" placeholder="">`;
          amenddiv.innerHTML = amend(titletext1, navtitle, amendor);
          addbox.style.display = "block";
          queslide2(i);
        };
      }
    }
    function queslide2(i) {
      let endaddbtn = document.querySelector(".endaddbtn");
      let amendinput = document.querySelector(".amendinput");
      endaddbtn.onclick = () => {
        con2.innerHTML = "";
        slide2text[i] = amendinput.value;
        localStorage.setItem("dataslide2", JSON.stringify(slide2text));
        slide2text = JSON.parse(localStorage.getItem("dataslide2"));
        for (let i = 0; i < slide2text.length; i++) {
          let contstr1 = i + 1;
          let contstr2 = slide2text[i];
          con2.innerHTML += content(contstr1, contstr2, amender, deleteer);
        }
        addbox.style.display = "none";
        bianslide2();
        shanslide2();
      };
    }
  };
}
// TODO 联系锦和
let addtext = JSON.parse(localStorage.getItem("dataadd"));
addfun();
function addfun() {
  jinhecall.onclick = function () {
    con1.innerHTML = "";
    con2.innerHTML = "";
    let pageBox = document.querySelector("#page");
    pageBox.innerHTML = "";
    let topstr1 = "";
    let topstr2 = "地址";
    jinhenav.style.background = "";
    jinheslide1.style.background = "";
    jinheslide2.style.background = "";
    jinhecall.style.background = "#ff6600";
    textamend.style.background = "";
    addbtn.innerHTML = "";
    con1.innerHTML = topcont(topstr1, topstr2);
    let amender = "编辑";
    let deleteer = "";
    let contstr1 = "";
    let contstr2 = addtext;
    con2.innerHTML += content(contstr1, contstr2, amender, deleteer);
    bianadd();
    function bianadd() {
      let amendon = document.querySelector(".amend");
      amendon.onclick = function () {
        let titletext1 = "编辑菜单";
        let navtitle = "地址";
        let amendor = `<div class="js-demo">
        省份：
        <select id="province"></select></br></br>
    
        城市：
        <select id="city"></select></br></br>
    
        区县：
        <select id="county"></select></br></br>
        <input type="text" id="addinput"></br></br>
        </div>
        `;
        amenddiv.innerHTML = amend(titletext1, navtitle, amendor);
        addbox.style.display = "block";
        // 获取下拉表单
        var select_province = document.querySelector("#province");
        var select_city = document.querySelector("#city");
        var select_county = document.querySelector("#county");
        var addinput = document.querySelector("#addinput");
        // ===== ===== ===== 准备三级联动的数据 ===== ===== =====
        // 省份
        var arr_province = [
          // 省份ID, 省份名称
          { id: 110000, name: "北京市" },
          { id: 120000, name: "天津市" },
          { id: 130000, name: "河北省" },
          { id: 140000, name: "山西省" },
          { id: 150000, name: "内蒙古自治区" },
          { id: 210000, name: "辽宁省" },
          { id: 220000, name: "吉林省" },
          { id: 230000, name: "黑龙江省" },
          { id: 310000, name: "上海市" },
          { id: 320000, name: "江苏省" },
        ];

        // 城市
        var arr_city = [
          // 城市ID, 城市名称, 城市所属的省份（即本级的上一级的ID）
          { id: 110000, name: "北京市", province_id: 110000 },
          { id: 120000, name: "天津市", province_id: 120000 },
          { id: 320100, name: "南京市", province_id: 320000 },
          { id: 320200, name: "无锡市", province_id: 320000 },
          { id: 320300, name: "徐州市", province_id: 320000 },
          { id: 320400, name: "常州市", province_id: 320000 },
          { id: 320500, name: "苏州市", province_id: 320000 },
          { id: 320600, name: "南通市", province_id: 320000 },
          { id: 320700, name: "连云港市", province_id: 320000 },
          { id: 320800, name: "淮安市", province_id: 320000 },
        ];

        // 区县
        var arr_county = [
          // 区县ID, 区县名称, 区县所属的城市（即本级的上一级的ID）
          { id: 110101, name: "东城区", city_id: 110000 },
          { id: 110102, name: "西城区", city_id: 110000 },
          { id: 110105, name: "朝阳区", city_id: 110000 },
          { id: 110106, name: "丰台区", city_id: 110000 },
          { id: 110107, name: "石景山区", city_id: 110000 },
          { id: 110108, name: "海淀区", city_id: 110000 },
          { id: 110109, name: "门头沟区", city_id: 110000 },
          { id: 110111, name: "房山区", city_id: 110000 },
          { id: 110112, name: "通州区", city_id: 110000 },
          { id: 110113, name: "顺义区", city_id: 110000 },
          { id: 110114, name: "昌平区", city_id: 110000 },
          { id: 110115, name: "大兴区", city_id: 110000 },
          { id: 110116, name: "怀柔区", city_id: 110000 },
          { id: 110117, name: "平谷区", city_id: 110000 },
          { id: 110118, name: "密云区", city_id: 110000 },
          { id: 110119, name: "延庆区", city_id: 110000 },
          { id: 320102, name: "玄武区", city_id: 320100 },
          { id: 320104, name: "秦淮区", city_id: 320100 },
          { id: 320105, name: "建邺区", city_id: 320100 },
          { id: 320106, name: "鼓楼区", city_id: 320100 },
          { id: 320111, name: "浦口区", city_id: 320100 },
          { id: 320113, name: "栖霞区", city_id: 320100 },
          { id: 320114, name: "雨花台区", city_id: 320100 },
          { id: 320115, name: "江宁区", city_id: 320100 },
          { id: 320116, name: "六合区", city_id: 320100 },
          { id: 320117, name: "溧水区", city_id: 320100 },
          { id: 320118, name: "高淳区", city_id: 320100 },
          { id: 320117, name: "溧水区", city_id: 320100 },
        ];

        // ===== ===== ===== 给select填充数据的操作 ===== ===== =====
        // 填充province
        function addDataProvince() {
          var html = "<option value='0'>请选择省份</option>";
          var length = arr_province.length;
          for (var i = 0; i < length; i++) {
            html +=
              "<option value='" +
              arr_province[i].id +
              "' text = '" +
              arr_province[i].name +
              "'>" +
              arr_province[i].name +
              "</option>";
          }
          select_province.innerHTML = html;
        }

        // 填充city
        function addDataCity(provinceId) {
          var html = "<option value='0'>请选择城市</option>";
          var length = arr_city.length;
          for (var i = 0; i < length; i++) {
            var obj = arr_city[i];
            if (obj.province_id == provinceId) {
              html +=
                "<option value='" + obj.id + "' text = '" + obj.name + "'>" + obj.name + "</option>";
            }
          }
          select_city.innerHTML = html;
        }

        // 填充county
        function addDataCounty(cityId) {
          var html = "<option value='0'>请选择区县</option>";
          var length = arr_county.length;
          for (var i = 0; i < length; i++) {
            var obj = arr_county[i];
            if (obj.city_id == cityId) {
              html +=
                "<option value='" + obj.id + "' text = '" + obj.name + "'>" + obj.name + "</option>";
            }
          }
          select_county.innerHTML = html;
        }

        // ===== ===== ===== 给select绑定change事件 ===== ===== =====
        // select_province绑定change事件
        select_province.onchange = function () {
          var provinceId = select_province.value;
          addDataCity(provinceId);
        };

        // select_city绑定change事件
        select_city.onchange = function () {
          var cityId = select_city.value;
          addDataCounty(cityId);
        };

        // select初始化数据
        addDataProvince();
        addDataCity(arr_province[0].id);
        addDataCounty(arr_city[0].id);

        /* 核心思想就是，通过监听上一级的变化获得上级的value，进而改变本级显示的列表内容。*/
        let endaddbtn = document.querySelector(".endaddbtn");
        let amendinput = document.querySelector(".amendinput");
        var op_province = document.querySelectorAll("#province option");
        var op_city = document.querySelector("#city option");
        var op_county = document.querySelector("#county option");
        console.log(op_province);
        for(let i=0;i<op_province.length;i++){
          // console.log(i);
          op_province[i].onclick = ()=>{
            // console.log(select_province.options[i].text);
            console.log(i);
          }
        }
        endaddbtn.onclick = () => {
          con2.innerHTML = "";
          console.log(select_province.options[select_province.selectedIndex].innerHTML);
          let select_provinceinn = select_province.options[select_province.selectedIndex].innerHTML
          let select_cityinn = select_city.options[select_city.selectedIndex].innerHTML
          let select_countyinn = select_county.options[select_county.selectedIndex].innerHTML
          addtext =select_provinceinn+select_cityinn+select_countyinn+addinput.value;
          localStorage.setItem("dataadd", JSON.stringify(addtext));
          addtext = JSON.parse(localStorage.getItem("dataadd"));
          let contstr1 = "";
          let contstr2 = addtext;
          con2.innerHTML += content(contstr1, contstr2, amender, deleteer);
          addbox.style.display = "none";
          bianadd();
         
        };
      };
    }
  };
}

// TODO 文字编辑
let titletext1 = JSON.parse(localStorage.getItem("datatitle1"));
let titletext2 = JSON.parse(localStorage.getItem("datatitle2"));
let titletext3 = JSON.parse(localStorage.getItem("datatitle3"));
let titletext4 = JSON.parse(localStorage.getItem("datatitle4"));
let titletext5 = JSON.parse(localStorage.getItem("datatitle5"));
let titlearr = [titletext1,titletext2,titletext3,titletext4,titletext5];
titlefun();
function titlefun(){
  textamend.onclick = function () {
    con1.innerHTML = "";
    con2.innerHTML = "";
    let pageBox = document.querySelector("#page");
    pageBox.innerHTML = "";
    let topstr1 = "名称";
    let topstr2 = "内容";
    jinhenav.style.background = "";
    jinheslide1.style.background = "";
    jinheslide2.style.background = "";
    jinhecall.style.background = "";
    textamend.style.background = "#ff6600";
    addbtn.innerHTML = "";
    con1.innerHTML = topcont(topstr1, topstr2);
    let amender = "编辑";
    let deleteer = "";
    console.log(titlearr);
    for(let i=0;i<titlearr.length;i++){
      let contstr1 = titlearr[i].name;
      let contstr2 = titlearr[i].title;
      con2.innerHTML += content(contstr1, contstr2, amender, deleteer);
    }
    // 文字编辑
    xiutext();
    function xiutext() {
      let amendon = document.querySelectorAll(".amend");
      for (let i = 0; i < titlearr.length; i++) {
        amendon[i].onclick = function () {
          let titletext1 = "编辑菜单";
          let navtitle = "文字编辑";
          let amendor = `
            文字名称：<span>${titlearr[i].name}</span><br>
            内容：<input type="text" value="${titlearr[i].title}" class="amendinput" placeholder=""><br>
            `;
          amenddiv.innerHTML = amend(titletext1, navtitle, amendor);
          //   获取弹出框select节点
          addbox.style.display = "block";
          // 点击确定按钮关闭弹窗
          let endaddbtn = document.querySelector(".endaddbtn");
          let amendinput = document.querySelector(".amendinput");
          endaddbtn.onclick = function () {
            let edit = document.querySelectorAll(".con2 .edit");
            let contstr1 = titlearr[i].name;
            let contstr2 = amendinput.value;
            titlearr[i].title = amendinput.value;
            localStorage.setItem("datatitle1", JSON.stringify(titlearr[0]));
            localStorage.setItem("datatitle2", JSON.stringify(titlearr[1]));
            localStorage.setItem("datatitle3", JSON.stringify(titlearr[2]));
            localStorage.setItem("datatitle4", JSON.stringify(titlearr[3]));
            localStorage.setItem("datatitle5", JSON.stringify(titlearr[4]));
            edit[i].innerHTML = "";
            edit[i].innerHTML += content1(contstr1, contstr2, amender, deleteer);
            addbox.style.display = "none";
            xiutext();
          };
        };
      }
    }
  }
}

