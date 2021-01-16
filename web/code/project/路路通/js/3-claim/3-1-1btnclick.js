// TODO验证码验证
//初始化验证码图像
function codes(
  _codeArr,
  _code,
  _btn,
  _textCard,
  _passWord,
  _carder,
  _passer,
  _codeerr,
  _hint
) {
  axios
    .post(
      "http://192.168.0.9:3000/svg", //url
      { name: "svgCheck" } //传过去的参数
    )
    // 验证码如果出来正确的
    .then((res) => {
      console.log(res.data.code); // 前端自行验证验证码，正确才发起登录请求
      goudan.innerHTML = res.data.svg;
      qrcode = res.data.code;
      _hint.style.display = "none";
      // TODO 点击切换下一步按钮时
      _btn.addEventListener("click", function () {
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

        // 判断用户输入验证码和后端传过来的验证码是否一致
        if (_code.value == res.data.code) {
          // 再将用户输入的卡号和密码传入数据库进行后端判断
          let accountNum = {
            //   验证卡号是否在数据库中
            CardNum: Number(_textCard.value),
            // 验证密码是否在数据库中并且匹配
            Pwd: Number(_passWord.value),
          };
          axios
            .post(
              "http://192.168.0.9:3000/login", //url
              {
                name: "login",
                accountNum,
              } //传过去的参数
            )
            // 正确
            .then((res) => {
              console.log(res);
              if (res.data.state === 1) {
                window.localStorage.setItem("cardNum1", _textCard.value);
                window.localStorage.setItem("passNum1", _passWord.value);
                window.location.href = "./lilist3-2.html";
              } else if (res.data.state === 2) {
                _hint.style.display = "block";
                _hint.innerHTML = "您好，您的卡号未激活，快去激活吧"+`<a href = "./index.html" class = "index">返回首页</a>`;
              } else {
                // _hint.style.display = "block";
                // _hint.innerHTML = "您好，您的"+res.data.msg+"，请检查后重新输入";
              }
            })
            // 错误
            .catch((err) => {
              console.log(err);
            });
        } else {
          if (_code.value === "") {
            _codeerr.innerHTML = "您还没有输入验证码，快去输入吧";
          } else {
            _codeerr.innerHTML = "您好，您的验证码输入错误";
          }
        }
      });
    })
    // 因为网址或其他原因导致验证码没有出来
    .catch((err) => {
      console.log(err);
    });

  // TODO 验证码图像点击切换
  // 验证码图像是异步获取，在一个页面中既有异步也有同步，因为异步是最低级所以优先执行同步代码块
  _codeArr.onclick = function () {
    axios
      .post(
        "http://192.168.0.9:3000/svg", //url
        { name: "svgCheck" } //传过去的参数
      )
      .then((res) => {
        console.log(res.data.code); // 前端自行验证验证码，正确才发起登录请求
        goudan.innerHTML = res.data.svg;
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
