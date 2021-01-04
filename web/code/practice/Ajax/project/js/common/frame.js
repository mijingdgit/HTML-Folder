// 框架循环获取页面节点
function $(selector){
    let elment = document.querySelectorAll(selector);
    if(elment.length===1){
        return elment[0];
    }else{
        return elment;
    }
}