/*
 * @Author: DsCode
 * @Date: 2020-07-27 11:42:24
 * @LastEditors: DsCode
 * @LastEditTime: 2020-07-27 11:42:25
 * @FilePath: \CSS Animation\sunDown\main.js
 */

document.getElementById("switch").onClick = () => {
  alert("demo switch");
  if (document.getElementById("fullpage").hasClass("night")) {
    document.getElementById("fullpage").removeclass("night");
    document.getElementById("switch").removeclass("switched");
  } else {
    document.getElementById("fullpage").addclass("night");
    document.getElementById("switch").addclass("switched");
  }
};
