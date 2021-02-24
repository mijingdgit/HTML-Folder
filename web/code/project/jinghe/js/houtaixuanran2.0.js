// TODO 切换导航栏颜色
// console.log($("nav ul li"));
let divcolor1 = JSON.parse(localStorage.getItem("datanavcolor1"));
let divcolor2 = JSON.parse(localStorage.getItem("datanavcolor2"));
let divcolor3 = JSON.parse(localStorage.getItem("datanavcolor3"));
let divcolor4 = JSON.parse(localStorage.getItem("datanavcolor4"));
let divcolor5 = JSON.parse(localStorage.getItem("datanavcolor5"));
let divcolor6 = JSON.parse(localStorage.getItem("datanavcolor6"));
let divnext = JSON.parse(localStorage.getItem("datanavtext"));
// 1
$("nav ul .indexer")[0].style.background = divcolor1;
// 2
$("nav ul .li2")[0].onmouseover = function () {
  $("nav ul .li2")[0].style.background = divcolor2;
};
$("nav ul .li2")[0].onmouseout = function () {
  $("nav ul .li2")[0].style.background = "#fff";
};
// 3
$("nav ul .li3")[0].onmouseover = function () {
  $("nav ul .li3")[0].style.background = divcolor3;
};
$("nav ul .li3")[0].onmouseout = function () {
  $("nav ul .li3")[0].style.background = "#fff";
};
// 4
$("nav ul .li4")[0].onmouseover = function () {
  $("nav ul .li4")[0].style.background = divcolor4;
};
$("nav ul .li4")[0].onmouseout = function () {
  $("nav ul .li4")[0].style.background = "#fff";
};
// 5
$("nav ul .li5")[0].onmouseover = function () {
  $("nav ul .li5")[0].style.background = divcolor5;
};
$("nav ul .li5")[0].onmouseout = function () {
  $("nav ul .li5")[0].style.background = "#fff";
};
// 6.
$("nav ul .li6")[0].onmouseover = function () {
  $("nav ul .li6")[0].style.background = divcolor6;
};
$("nav ul .li6")[0].onmouseout = function () {
  $("nav ul .li6")[0].style.background = "#fff";
};

for (let i = 0; i < divnext.length; i++) {
  $("nav ul li a")[i].innerHTML = "";
  $("nav ul li a")[i].innerHTML += divnext[i].title;
}

// TODO slide1 改变大轮播图

let divslide1 = JSON.parse(localStorage.getItem("dataslide1"));
let str2 = "";
for (let i = 0; i < divslide1.length; i++) {
  str2 += ` <div class="swiper-slide"><img src="${divslide1[i]}" alt="" /></div>`;
}
$(".slide1")[0].innerHTML = str2;
  


// TODO slide1 改变小轮播图

let divslide2 = JSON.parse(localStorage.getItem("dataslide2"));
console.log(divslide2);
let str1 ="";
for (let i = 0; i < divslide2.length; i++) {
   str1 += ` <div class="swiper-slide"><img src="${divslide2[i]}" alt="" /></div>`;
}
console.log(str1);
$(".slide2")[0].innerHTML = str1;
    
  
// TODO 改变联系我们
let divadd = JSON.parse(localStorage.getItem("dataadd"));
let titletext1 = JSON.parse(localStorage.getItem("datatitle1"));
let titletext2 = JSON.parse(localStorage.getItem("datatitle2"));
let titletext3 = JSON.parse(localStorage.getItem("datatitle3"));
let callarr = [divadd, titletext1.title, titletext2.title, titletext3.title];
let str = ``;
for (let i = 0; i < callarr.length; i++) {
  str += `<li>${callarr[i]}</li>`;
}
$("footer .contion .a2")[0].innerHTML = str;

// TODO关于我们
let titletext4 = JSON.parse(localStorage.getItem("datatitle4"));
console.log(titletext4.title);
$(".incontent .top p")[0].innerHTML = titletext4.title;

// TODO 企业使命
let titletext5 = JSON.parse(localStorage.getItem("datatitle5"));
$(".index-sec1-news .incontion p")[0].innerHTML = titletext5.title;
