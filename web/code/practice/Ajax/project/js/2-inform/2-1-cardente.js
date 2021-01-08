// 封装

// window.onload = () => {
// };
// TODO 获取页面所需节点
let textCard1 = $(".text1");
let passWord1 = $(".password");
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
actcard(textCard1, carder);

// TODO 密码格式的验证
actpass(pass, passWord1, passer);

// TODO 密码眼睛开闭和
eye(icon1, icon2, passWord1);

// TODO验证码验证
codes(codeArr, code, btn, textCard1, passWord1, carder, passer, codeerr, hint);
// TODO 验证码的判空
yan(code, codeerr);
