
// 回調函數
function ajax(option){
let method = "success";
let url = "";
let aysn = true;
let data  = {};
let success = function(){};
let error = function(){};
// 參數替換
if (option){
    if (option.method){
        method = option.method;
    }
    if (option.url){
        url = option.url;
    }
    if (option.aysn !== undefined){
        aysn = option.aysn;
    }
    if(option.data){
        data = option.data;
    }
    if(option.success){
        success = option.success;
    }
    if(option.error){
        error.option.error;
    }
}
// 获取页面中ul节点
let listDOM = document.querySelector(".list");
// 创建一个请求对象
let xmlhttp = new XMLHttpRequest();
// 创建连接
xmlhttp.open(method,url,aysn);
// 设置其他属性
xmlhttp.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
);
// 如果发送方式post，传入参数字符串



xmlhttp.send();
xmlhttp.onreadystatechange = function(e){
    if(this.status == 200 && this.readyState == 4){
        let data  = this.responseText;
        console.log(data);
        // 容错处理
        try{//没有出错
            // 将data转换为对象


    // 反序列化
        /*拿到一个JSON格式的字符串，我们直接用JSON.parse()
        把它变成一个JavaScript对象： */
        
        /*JSON.parse()还可以接收一个函数，用来转换解析出的属性：*/
            data = JSON.parse(data);
            success(data);
        }catch(e){//出错打印
            console.table(e);
        }finally{//不管错没错都得打印
            console.table(e);
        }

    }
}

}