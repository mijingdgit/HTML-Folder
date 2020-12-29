/*
 * @Date: 2020-08-10 23:29:48
 * @LastEditors: DSCode
 * @LastEditTime: 2020-08-10 23:49:19
 * @FilePath: \toy-responsive-layout\files\4.js
 */
const inputEle = document.getElementById("composition");
const containerEle = document.querySelector(".box");

inputEle.addEventListener("click",(e) => {
    if (e.target.checked) {
        containerEle.classList.add("play");
    }else{
        containerEle.classList.remove("play");
    }
})