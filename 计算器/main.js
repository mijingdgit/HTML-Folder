/*
 * @Author: DSCode
 * @Date: 2020-11-20 14:24:32
 * @Open Source License: MIT
 * @LastEditTime: 2020-11-20 16:37:41
 * @FilePath: \计算器\main.js
 * @Description: 简易计算器
 */

/**
 * TODO 页面 DOM 渲染完成 执行相应 JS 初始化事件
 */
window.onload = () => {
  setClickFun();
  getInpElement();
};
let firstNumEle;
let secondNumEle;
let actions;

/**
 * TODO 获取输入栏数据
 * @description: 获取输入栏数据
 */
function getInpElement() {
  firstNumEle = document.getElementById("first-num");
  secondNumEle = document.getElementById("second-num");
  actions = document.getElementById("actions");
}

/**
 * TODO 为所有 DIV 绑定事件
 * @description:获取所有的 div 元素，是一个集合，遍历元素集合，给每一个元素绑定事件
 */
function setClickFun() {
  const queryElements = document.getElementsByTagName("div");
  for (const e in queryElements) {
    if (queryElements.hasOwnProperty(e)) {
      const element = queryElements[e];
      element.addEventListener("click", setActions);
    }
  }
}

/**
 * TODO 符号按键绑定事件
 * @description: 符号按键绑定事件，this 代表当前元素
 */
function setActions() {
  const val = this.innerHTML;
  let firstVal = firstNumEle.innerHTML;
  let secondVal = secondNumEle.innerHTML;
  setNum(val);

  getResult(val, secondVal, firstVal);

  setAnotherActons(val, firstVal, secondVal);
}

/**
 * TODO 数字按键绑定事件
 * @description: val 表示当前元素中的属性值
 */
function getResult(val, secondVal, firstVal) {
  if (val == "=") {
    if (firstNumEle != "") {
      if (secondVal == "") {
        secondVal = 0;
      }
      let result;

      switch (actions.innerHTML) {
        case "+":
          result = Number(firstVal) + Number(secondVal);
          break;
        case "-":
          result = Number(firstVal) - Number(secondVal);
          break;
        case "*":
          result = Number(firstVal) * Number(secondVal);
          break;
        case "/":
          result = Number(firstVal) / Number(secondVal);
          break;
        case "%":
          result = Number(firstVal) % Number(secondVal);
          break;
      }
      if (result == undefined) {
        result = firstVal;
      }
      firstNumEle.innerHTML = result;
      secondNumEle.innerHTML = "";
      actions.innerHTML = "";
    }
  }
  return secondVal;
}

/**
 * TODO 符号按键绑定事件
 * @param: val:表示当前元素中的属性值，firstVal：第一个值, secondVal：第二个值
 * @description: 根据不同符号绑定符号对应的方法
 */
function setAnotherActons(val, firstVal, secondVal) {
  if (
    (val == "+" || val == "-" || val == "*" || val == "/") &&
    firstVal != ""
  ) {
    actions.innerHTML = val;
  }

  if (val == "AC") {
    secondNumEle.innerHTML = "";
    actions.innerHTML = "";
    firstNumEle.innerHTML = "";
  }

  if (val == ".") {
    if (actions.innerHTML != "") {
      if (secondVal.indexOf(".") == -1) {
        secondNumEle.innerHTML += ".";
      }
    } else {
      if (firstVal.indexOf(".") == -1) {
        firstNumEle.innerHTML += ".";
      }
    }
  }
}

/**
 * TODO 数字按键绑定事件
 * @description: val 表示当前元素中的属性值
 */
function setNum(val) {
  if (val in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
    if (actions.innerHTML == "") {
      firstNumEle.innerHTML += val;
    } else {
      secondNumEle.innerHTML += val;
    }
  }
}
