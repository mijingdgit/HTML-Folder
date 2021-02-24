function $(selector){
    let elment = document.querySelectorAll(selector);
    if(elment.length===1){
        return elment[0];
    }else{
        return elment;
    }
}

function $C(elename){
    return document.createElement(elename);
}