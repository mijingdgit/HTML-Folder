function $(selector){
    let element = document.querySelectorAll(selector);
    if(element.length === 1){
        return element[0];
    }else{
        return element;
    }
}
function $C(elename){
    return document.createElement(elename);
}