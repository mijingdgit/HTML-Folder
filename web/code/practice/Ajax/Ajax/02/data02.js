// 封装后的ajax
function ajax(option){
//  默认值
    let methor = "get";
    let aysn = true;
    let url = "";
    let data = {};
    let success = function(){};
    let error = function(){};
    // 参数替换
    if(option){
        if(option.methor){
            methor = option.methor
        }
        if(option.aysn !== undefined){
            aysn = option.aysn;
        }
        if(option.url){
            url = option.url;
        }
        if(option.success){
            success = option.success;
        }
        if(option.error){
            error = option.error;
        }
        if(option.data){
            data = option.data;
        }
    }

    // var argStr = "&wd=a&username=mijing";
    // JSON对象拼接字符串
    var argStr = "";
    for(let key in data){
        argStr += `&${key}=${data[key]}`;
    }
    argStr = argStr.substr(1);
    
    // 创建请求对象
    var xmlHttp = new XMLHttpRequest();
    // 如果发送方式get,网址添加上参数
    if(methor == "get") url = url + "?" + argStr;
    // 创建链接
    xmlHttp.open(methor,url,aysn);

    
    //设置其他属性
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // 如果发送方式post，传入参数字符串
    if(methor == "get") argStr = "";
    xmlHttp.send(argStr);
    // 监听请求状态变化
    xmlHttp.onreadystatechange = function(e){
        if(this.status == 200 && this.readyState == 4){
            let data = this.responseText;//data = JSON
            console.log(data);


            // 错误处理
            try{
                data = JSON.parse(data);
                success(data);
                console.log(data);
                
            }catch(e){
                // 代码错误处理
                error(e);
                console.table(e);
            }
        }
    };

}




//逻辑错误处理
var errData = [];
function errorContral(code) {
  if (code == 300) {
    //提示登录失效
    alert();
    //跳转到登录页面
    window.location.href = "login.html";
  }

  if (code == -1) {
    //执行代码
  }
}

