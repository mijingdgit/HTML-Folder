// TODO 切换导航栏颜色
// console.log($("nav ul li"));
let divcolor1 = JSON.parse(localStorage.getItem("datacolor1"));
let divcolor2 = JSON.parse(localStorage.getItem("datacolor2"));
let divcolor3 = JSON.parse(localStorage.getItem("datacolor3"));
let divcolor4 = JSON.parse(localStorage.getItem("datacolor4"));
let divcolor5 = JSON.parse(localStorage.getItem("datacolor5"));
let divcolor6 = JSON.parse(localStorage.getItem("datacolor6"));
// 1
$("nav ul .indexer")[0].style.background = divcolor1[1];
// 2
$("nav ul .li2")[0].onmouseover = function () {
  $("nav ul .li2")[0].style.background = divcolor2[1];
};
$("nav ul .li2")[0].onmouseout = function () {
  $("nav ul .li2")[0].style.background = "#fff";
};
// 3
$("nav ul .li3")[0].onmouseover = function () {
  $("nav ul .li3")[0].style.background = divcolor3[1];

};
$("nav ul .li3")[0].onmouseout = function () {
  $("nav ul .li3")[0].style.background = "#fff";
};
// 4
$("nav ul .li4")[0].onmouseover = function () {
  $("nav ul .li4")[0].style.background = divcolor4[1];

};
$("nav ul .li4")[0].onmouseout = function () {
  $("nav ul .li4")[0].style.background = "#fff";
};
// 5
$("nav ul .li5")[0].onmouseover = function () {
  $("nav ul .li5")[0].style.background = divcolor5[1];

};
$("nav ul .li5")[0].onmouseout = function () {
  $("nav ul .li5")[0].style.background = "#fff";
};
// 6.
$("nav ul .li6")[0].onmouseover = function () {
  $("nav ul .li6")[0].style.background = divcolor6[1];
};
$("nav ul .li6")[0].onmouseout = function () {
  $("nav ul .li6")[0].style.background = "#fff";
};


// TODO slide1 改变大轮播图

let divslide1 = JSON.parse(localStorage.getItem("dataslide1"));
for (let i = 0; i < divslide1.length; i++) {
  $(
    ".slide1"
  )[0].innerHTML += ` <div class="swiper-slide"><img src="${divslide1[i][1]}" alt="" /></div>`;
}
// console.log($(".slide1")[0]);
// console.log(divslide1);
// TODO slide1 改变大小轮播图

let divslide2 = JSON.parse(localStorage.getItem("dataslide2"));
for (let i = 0; i < divslide2.length; i++) {
  $(
    ".slide2"
  )[0].innerHTML += ` <div class="swiper-slide"><img src="${divslide2[i][1]}" alt="" /></div>`;
}

// TODO 改变联系我们
let str = ``;
let divadd = JSON.parse(localStorage.getItem("dataadd"));
for (let i = 0; i < divadd.length; i++) {
  str += `<li>${divadd[i][1]}</li>`;
}
$("footer .contion .a2")[0].innerHTML = str;

// TODO关于我们
let divabout = JSON.parse(localStorage.getItem("dataabouttext"));

$(".incontent .top p")[0].innerHTML = divabout[0];
// TODO 企业使命
let divmission = JSON.parse(localStorage.getItem("datamissiontext"));
$(".index-sec1-news .incontion p")[0].innerHTML = divmission[0];
// TODO 保障文字编辑
let divbaozhang = JSON.parse(localStorage.getItem("databaozhang"));
$(".middleer .centretop a")[0].innerHTML = divbaozhang[0].title;
$(".middleer .centreleft a")[0].innerHTML = divbaozhang[1].title;
$(".middleer .centreright a")[0].innerHTML = divbaozhang[2].title;
$(".middleer .centrebottom a")[0].innerHTML = divbaozhang[3].title;
