// TODO 密码眼睛开闭
function eye(_icon1,_icon2,_passWord) {

  _icon1.onclick = function () {
    _icon1.style.display = "none";
    _icon2.style.display = "block";
    _passWord.type = "passWord";
  };
  _icon2.onclick = function () {
    _icon2.style.display = "none";
    _icon1.style.display = "block";
    _passWord.type = "text";
  };
}
