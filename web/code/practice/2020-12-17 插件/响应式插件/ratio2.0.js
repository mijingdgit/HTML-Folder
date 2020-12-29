responsive(".ratio");
function responsive(selector,ratio){
var box = document.querySelectorAll(selector);
// console.log(box);
loopRatio();
// 循环获取
function loopRatio(){
    for(let i=0;i<box.length;i++){
        let ratioValue = box[i].getAttribute("data-ratio");
        if(ratio!==undefined){
            ratio = ratioValue;
        }
        drawRatio(box[i],ratioValue);
    }

}
function drawRatio(box,ratio){
    let boxWidth = box.offsetWidth;
    box.style.height = ratio*boxWidth+"px";

}
window.addEventListener("resize",function(){
    loopRatio();
})
}
