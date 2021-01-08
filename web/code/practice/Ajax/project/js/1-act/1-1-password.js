// 封装
window.onload = ()=>{
  // TODO 获取页面所需节点
  let textCard = $(".text1");
  let passWord = $(".password");
  let pass = $(".pass");
  let icon1 = $(".iconopen");
  let icon2 = $(".iconclose");
  let btn = $(".btn");
  let carder = $(".carder");
  let passer = $(".passer");
  let codeArr = $("#goudan");
  let code = $(".code");
  let codeerr = $(".codeerr");
  let hint = $(".hint");
  

  
  // TODO 卡号格式的验证
  actcard(textCard,carder);

  // TODO 密码格式的验证
  actpass(pass,passWord,passer);

  // TODO 密码眼睛开闭和
  eye(icon1,icon2,passWord);

  // TODO验证码验证
  codes(codeArr,code,btn,textCard,passWord,carder,passer,codeerr,hint);
  // TODO 验证码的判空
  yan(code,codeerr);
}
