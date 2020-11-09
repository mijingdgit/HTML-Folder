/*
 * @Author: DsCode
 * @Date: 2020-07-27 11:42:24
 * @LastEditors: DsCode
 * @LastEditTime: 2020-07-27 11:43:21
 * @FilePath: \CSS Animation\sunDown\main.js
 */

document.getElementById("switch").onClick = function(){
  alert("demo switch");
  if (document.getElementById("fullpage").hasClass("night")) {
    document.getElementById("fullpage").removeclass("night");
    document.getElementById("switch").removeclass("switched");
  } else {
    document.getElementById("fullpage").addclass("night");
    document.getElementById("switch").addclass("switched");
  }
};
