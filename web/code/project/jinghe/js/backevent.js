let text = $(".texter");
let textbox = $(".textbox");
let password = $(".passworder");
let passwordbox = $(".passwordbox");
let btn = $(".btn");
let btnbox = $(".btnbox");
let fork = $(".sp1");
let cont = $(".cont");
// TODO 提交按钮点击判断
let arr = [0, 0];
arrer();
function arrer() {
  var flag = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      flag = false;
      break;
    } else {
      flag = true;
    }
  }
  btn[0].onclick = function () {
    if (flag == true) {
    window.location.href = "./backstage.html";
    localStorage.setItem("Identification",text[0].value);
    } else {
      cont[0].innerHTML = "您的，账号或密码输入错误快去查看一下吧！";
      btnbox[0].style.opacity = "1";
      btnbox[0].style.height = "100%";
      fork[0].onclick = function () {
        btnbox[0].style.opacity = "0";
        btnbox[0].style.height = "0";
      };
    }
  };
}
// TODO 账号验证
text[0].onfocus = function () {
  textbox[0].innerHTML = " ";
};
text[0].onblur = function () {
  let textPhone = /^1[3-9]\d{9}$/;
  let textValue = text[0].value;
  let tmptext = textPhone.test(textValue);
  if (textValue === "") {
    textbox[0].innerHTML = "您的账号为空，快去输入吧！";
  } else if (tmptext === false) {
    textbox[0].innerHTML = "请输入正确的电话号码！";
  } else {
    textbox[0].innerHTML = "";
    arr[0] = 1;
  }
  arrer();
  console.log(arr);
};
// TODO 密码验证
password[0].onfocus = function () {
  passwordbox[0].innerHTML = " ";
};
password[0].onblur = function () {
  let pass = /^\d{6}$/;
  let passValue = password[0].value;
  let tmppass = pass.test(passValue);
  if (passValue === "") {
    passwordbox[0].innerHTML = "您的密码为空，快去输入吧！";
  } else if (tmppass === false) {
    passwordbox[0].innerHTML = "请输入正确的六位密码！";
  } else {
    passwordbox[0].innerHTML = "";
    arr[1] = 1;
  }
  arrer();
};