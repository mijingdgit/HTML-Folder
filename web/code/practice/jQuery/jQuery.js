(function(window){
    // 构造函数
    function myJQ(selector) {
       var _this = this;
        if(typeof selector === "object" ){
            var dom = [selector];
            
        }else{
            var dom  = document.querySelectorAll(selector);
        }
        //利用插件添加数组元素
        _this.eq = function (val) {
            dom = [dom[val]];
            return this;
        }
        // 利用插件在js中直接写css
        _this.css=function(option){
            for (const key in option) {
                for(let i = 0 ; i < dom.length; i++){
                    dom[i].style[key] = option[key];
                }
            }
            return this;
        }
        // 利用插件方便在js中给元素添加元素
        _this.color = function (opcolor) {
            for(let i = 0; i<dom.length; i++){
                dom[i].style.color = opcolor;
            }
        }
        // 利用插件方便将js中的元素渲染到页面上
        _this.html = function (val) {
                if(val === undefined){
                  return  dom[0].innerHTML;
                }
                for(let i = 0; i<dom.length; i++){
                    dom[i].innerHTML = val; 
                }
                return this
            
        }
        // 给标签添加属性名和属性值
        _this.attr = function (option,val) {
            // 容错能力
            if (val === undefined){
                if (typeof option === "string"){
                    return dom[0].getAttribute(option);
                }else{
                    for (const key in option) {
                        for (let i=0; i<dom.length; i++){
                            dom[i].setAttribute(key,option[key]);
                        }
                    }
                }
            }else{
                for (let i=0; i<dom.length; i++){
                    dom[i].setAttribute(option,val);
                }
            }

        }

        // 利用插件给元素添加点击事件
        _this.on = function (event,fn) {
            for(let i = 0;i<dom.length;i++){
                dom[i].addEventListener(event,function() {
                    dom[i].fn = fn;
                    dom[i].fn(i);
                })
                // dom[i].addEventListener(event,fn);
            }
            return this;
        }
    }
    // 直接调用实例化
    function $(selector){
        return new myJQ(selector);
    }
    window.miQ = $;


})(window)



