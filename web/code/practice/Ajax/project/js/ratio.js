function boxRatio(selector,ratio){
// 获取页面中所有元素
function drawRatio(box,ratio){
    let boxWidth = box.offsetWidth;
    box.style.height = ratio * boxWidth+"px"
}
function loopRatio(){
    for(let i= 0;i<box.length;i++){
        let ratioValue = box[i].getAttribute("data-ratio");
        if(ratio !== undefined){
            ratio = ratioValue;
        }
        drawRatio(box[i],ratioValue);
    }
}
var box = document.querySelectorAll(selector);
loopRatio();
window.addEventListener("resize",function(){
    loopRatio();
});

}