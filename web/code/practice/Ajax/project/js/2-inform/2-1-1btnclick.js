// TODO验证码验证
//初始化验证码图像
function codes(_codeArr,_code,_btn,_textCard,_passWord,_codeerr,_hint) {
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
                "http://192.168.0.9:3000/activation", //url
                {
                  name: "activation",
                  id: 1,
                  accountNum,
                } //传过去的参数
              )
              // 正确
              .then((res) => {
                console.log(res);
                if(res.data.state === 1){
                    _hint.style.display = "block";
                    _hint.innerHTML = "您好，您的卡号未激活，快去激活吧";
                }else if(res.data.state === 2){
                   window.location.href="./FillingApplication2-2.html";
                }else{
                  _hint.style.display = "block";
                  _hint.innerHTML = "您好，您的"+res.data.msg+"，请检查后重新输入";
                }
              })
              // 错误
              .catch((err) => {
                console.log(err);
              });
          } else {
            _codeerr.innerHTML = "您好，您的验证码输入错误";
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
  