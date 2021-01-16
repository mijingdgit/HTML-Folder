// TODO 卡号的格式验证
function actcard(_textCard, _carder) {
  //   当卡号得到焦点时
  _textCard.onfocus = function () {
    let cardValue = _textCard.value;
    _carder.innerHTML = " ";
  };
  //   当卡号失去焦点时
  _textCard.onblur = function () {
    // 利用正则让用户填写正确的卡号
    let card = /^[1-9]{1}\d{11}$/;
    let cardValue = _textCard.value;
    let tmp1 = card.test(cardValue);
    if (cardValue === "") {
      _carder.innerHTML = "您还没有输入卡号，快去输入吧!";
    } else if (tmp1 === false) {
      _carder.innerHTML = "请输入正确的12位数卡号！";
    } else {
      _carder.innerHTML = "";
    }
  };
}
// TODO 密码的格式验证
function actpass(_pass, _passWord, _passer) {
  //当密码得到焦点
  _pass.onmouseover = function () {
    let passValue = _passWord.value;
    _passer.innerHTML = " ";
  };
  //   当密码失去焦点时
  _pass.onmouseout = function () {
    // 利用正则让用户填写正确的密码
    let pass = /^\d{6}$/;
    let passVaule = _passWord.value;
    let tmp2 = pass.test(passVaule);
    if (passVaule === "") {
      _passer.innerHTML = "您还没有输入密码，快去输入吧!";
    } else if (tmp2 === false) {
      _passer.innerHTML = "请输入正确的6位数密码！";
    } else {
      _passer.innerHTML = "";
    }
  };
}
// TODO 验证码的判空
function yan(_code, _codeer) {
  //当密码得到焦点
  _code.onmouseover = function () {
    let codeValue = _code.value;
    _codeer.innerHTML = " ";
  };
  //   当密码失去焦点时
  _code.onmouseout = function () {
    // 利用正则让用户填写正确的密码
    if (_code.value === "") {
      let codeValue = _code.value;
      _codeer.innerHTML = "您还没有输入验证码，快去输入吧!";
    } else {
      let codeValue = _code.value;
      _codeer.innerHTML = "";
    }
  };
}
