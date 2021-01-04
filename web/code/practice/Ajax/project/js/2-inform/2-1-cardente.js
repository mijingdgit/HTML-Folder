// 封装

window.onload = ()=>{
    // TODO 获取页面所需节点
    let textCard = document.querySelector(".text1");
    let passWord = document.querySelector(".password");
    let pass = document.querySelector(".pass");
    let icon1 = document.querySelector(".iconopen");
    let icon2 = document.querySelector(".iconclose");
    let btn = document.querySelector(".btn");
    let carder = document.querySelector(".carder");
    let passer = document.querySelector(".passer");
    let codeArr = document.querySelector("#goudan");
    let code = document.querySelector(".code");
    let codeerr = document.querySelector(".codeerr");
    let hint = document.querySelector(".hint");
    
  
    
    // TODO 卡号格式的验证
    actcard(textCard,carder);
  
    // TODO 密码格式的验证
    actpass(pass,passWord,passer);
  
    // TODO 密码眼睛开闭和
    eye(icon1,icon2,passWord);
  
    // TODO验证码验证
    codes(codeArr,code,btn,textCard,passWord,codeerr,hint);
  
  }
  