boxRatio(".ratio");
function boxRatio(selector,ratio) {
    var box = document.querySelectorAll(selector);
    loopRatio();
    function loopRatio() {
        for(let i=1;i<box.length;i++){
            let ratioVaule = box[i].getAttribute("data-ratio");
            if(ratio!==undefined){
                ratio = ratioVaule;
            }
            drawRatio(box[i],ratioVaule);
        }

    }
    function drawRatio(box,ratio) {
        let boxWidth = box.offsetWidth;
        box.style.height = ratio*boxWidth+"px";
    }

    window.addEventListener("resize",function () {
        loopRatio();
    });

}