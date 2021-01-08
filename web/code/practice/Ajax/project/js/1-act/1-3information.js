// 当页面加载完成后才开始执行当前页面
window.onload = () => {
  let fill = $(".fill");
  // 获取页面节点
  // TODO 将储存好的卡号渲染到页面
  let cardtext = $(".cardtext");
  cardtext.innerHTML = localStorage.cardNum;
  var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // 判断能否点击
  let btn1 = $(".btn1");
  function arrer() {
    var flag = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == 0) {
        flag = false;
        break;
      }
      flag = true;
    }
    if (flag) {
      // 判断下一步可点吗？
      btn1.style.background = "#1bac05";
      btn1.innerHTML = "下一步";
      btn1.onclick = function () {
        if (flag) {
          let info = {
            CardNum: localStorage.cardNum,
            //投保人
            NameA: name1.value,
            IdTypeA: cardtype1.value,
            IDCardNumA: idnum1.value,
            SexA: sexValue1,
            BirthA: birthday1.innerHTML,
            EMailA: email1.value,
            PhoneA: phone1.value,
            AddrA: add1.value,
            //被保人
            RelashipE: relaship.value,
            NameE: name2.value,
            IdTypeE: cardtype1.value,
            IDCardNumE: idnum2.value,
            SexE: sexValue2,
            BirthE: birthday2.innerHTML,
            EMailE: email2.value,
            PhoneE: phone2.value,
            AddrE: add2.value,
            TEDT0A: tedtoadate.value,
            Status: 1,
            ActiveDate: choicnowdate,
          }; // 用户信息字段
          console.log(info);
          axios
            .post(
              "http://192.168.0.9:3000/activation", //url
              {
                name: "activation",
                id: 3,
                info,
              } //传过去的参数
            )
            .then((res) => {
              console.log(res.data);
              window.location.href = "activtionend1-4.html";
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          btn1.style.background = "#ccc";
          btn1.innerHTML = "您还有必填信息没有填哦";
        }
      };
    } else {
      btn1.style.background = "#ccc";
      btn1.innerHTML = "您还有必填信息没有填哦";
    }
  }
  // TODO 姓名格式验证
  // 姓名：全是汉字，至少两个，最多18个字）

  let name1 = $(".name1");
  let name2 = $(".name2");
  let namebox1 = $(".nametext1");
  let namebox2 = $(".nametext2");

  function allname() {
    // TODO 1、投保人
    // 当姓名得到焦点时
    name1.onfocus = function () {
      let nameValue1 = name1.value;
      namebox1.innerHTML = "";
    };
    // 当姓名失去焦点
    name1.onblur = function () {
      let namereg1 = /^[\u4e00-\u9fa5]{2,18}$/;
      let nameValue1 = name1.value;
      let tmpname1 = namereg1.test(nameValue1);
      if (nameValue1 === "") {
        namebox1.innerHTML = "您还没有输入姓名，快去输入吧！";
        arr[0] = 0;
      } else if (tmpname1 === false) {
        namebox1.innerHTML = "您输入的姓名不正确，请输入2-18个汉字！";
        arr[0] = 0;
      } else {
        namebox1.innerHTML = "";
        arr[0] = 1;
      }
      arrer();
    };
    // TODO 2、被保人
    // 当姓名得到焦点时
    // name2.onfocus = function () {
    //   let nameValue2 = name2.value;
    //   namebox2.innerHTML = "";
    // };
    // 当姓名失去焦点
    name2.onchange = function () {
      let namereg2 = /^[\u4e00-\u9fa5]{2,18}$/;
      let nameValue2 = name2.value;
      let tmpname2 = namereg2.test(nameValue2);
      if (nameValue2 === "") {
        namebox2.innerHTML = "您还没有输入姓名，快去输入吧！";
        arr[1] = 0;
      } else if (tmpname2 === false) {
        namebox2.innerHTML = "您输入的姓名不正确，请输入2-18个汉字！";
        arr[1] = 0;
      } else {
        namebox2.innerHTML = "";
        arr[1] = 1;
      }
      arrer();
    };
  }
  // TODO 证件类型
  let cardtype1 = $("#cardtype1"); //身份证1 护照2
  let cardtype2 = $("#cardtype2"); //身份证1 护照2
  // TODO 证件号码格式验证
  // 身份证号码：必须为18位，不能以0开头，最后一位可能是数字或者字母xX
  // 622621199912250226
  let idnum1 = $(".idnum1");
  let idnum2 = $(".idnum2");
  let idbox1 = $(".idnumtext1");
  let idbox2 = $(".idnumtext2");
  // TODO 获取性别的value值
  let sex1 = $(".sex1");
  let sex2 = $(".sex2");
  var sexValue1 = 0;
  var sexValue2 = 0;
  //TODO 获取出生日期
  var birthday1 = $(".birthday1");
  var birthday2 = $(".birthday2");
  // TODO 生效时年龄
  let operant1 = $(".operant1");
  let operant2 = $(".operant2");

  function id() {
    // TODO 1.投保人
    // 当身份证号得到焦点
    idnum1.onfocus = function () {
      let idValue1 = idnum1.value;
      idbox1.innerHTML = "";
    };
    idnum1.onblur = function () {
      let idreg1 = /^[1-9]\d{16}(\d|x|X)$/;
      let idValue1 = idnum1.value;
      let tmpid1 = idreg1.test(idValue1);
      
      if (idValue1 === "") {
        idbox1.innerHTML = "您还没有输入证件号码，快去输入吧！";
        arr[2] = 0;
        sex1[0].checked = "";
        sex1[1].checked = "";

      } else if (tmpid1 === false) {
        idbox1.innerHTML = "请输入正确的证件号码！";
        arr[2] = 0;

      } else {
        idbox1.innerHTML = "";
        arr[2] = 1;
        // TODO 用身份证号判断性别
        // 获取证件号码
        var sexCard1 = idnum1.value;
        // 获取性别
        if (parseInt(sexCard1.substr(16, 1)) % 2 == 1) {
          sex1[0].checked = "checked";
          sexValue1 = 1;
          // 是男则执行
        } else if (parseInt(sexCard1.substr(16, 1)) % 2 == 0) {
          sex1[1].checked = "checked";
          sexValue1 = 2;

          // 是女则执行
        } else {
          console.log("用户还没有输入身份证号码");
        }
        // TODO 身份证获取出生日期
        let UUserCard1 = idnum1.value;
        let bir1 =
          UUserCard1.substring(6, 10) +
          "-" +
          UUserCard1.substring(10, 12) +
          "-" +
          UUserCard1.substring(12, 14);
        birthday1.innerHTML = bir1;

        //TODO 身份证号码获取年龄
        let myDate1 = new Date();
        let month1 = myDate1.getMonth() + 1;
        let day1 = myDate1.getDate();
        let age1 = myDate1.getFullYear() - UUserCard1.substring(6, 10) - 1;
        if (
          UUserCard1.substring(10, 12) < month1 ||
          (UUserCard1.substring(10, 12) == month1 &&
            UUserCard1.substring(12, 14) <= day1)
        ) {
          age1++;
        }
        operant1.innerHTML = age1;
      }
      arrer();
    };
    // TODO 2.被保人
    // 当身份证号得到焦点
    idnum2.onfocus = function () {
      let idValue2 = idnum2.value;
      idbox2.innerHTML = "";
    };
    idnum2.onblur = function () {
      let idreg2 = /^[1-9]\d{16}(\d|x|X)$/;
      let idValue2 = idnum2.value;
      let tmpid2 = idreg2.test(idValue2);
      if (idValue2 === "") {
        idbox2.innerHTML = "您还没有输入证件号码，快去输入吧！";
        arr[3] = 0;
      } else if (tmpid2 === false) {
        idbox2.innerHTML = "请输入正确的证件号码！";
        arr[3] = 0;
      } else {
        idbox2.innerHTML = "";
        arr[3] = 1;
        // TODO 用身份证号判断性别
        var sexCard2 = idnum2.value;
        // 获取性别
        if (parseInt(sexCard2.substr(16, 1)) % 2 == 1) {
          sex2[0].checked = "checked";
          sexValue2 = 1;
          // 是男则执行
        } else if (parseInt(sexCard2.substr(16, 1)) % 2 == 0) {
          sex2[1].checked = "checked";
          sexValue2 = 2;
          // 是女则执行
        } else {
          console.log("用户还没有输入身份证号码");
        }
        // TODO 身份证获取出生日期
        let UUserCard2 = idnum2.value;
        let bir2 =
          UUserCard2.substring(6, 10) +
          "-" +
          UUserCard2.substring(10, 12) +
          "-" +
          UUserCard2.substring(12, 14);
        birthday2.innerHTML = bir2;
        //TODO 身份证号码获取年龄
        let myDate2 = new Date();
        let month2 = myDate2.getMonth() + 1;
        let day2 = myDate2.getDate();
        let age2 = myDate2.getFullYear() - UUserCard2.substring(6, 10) - 1;
        if (
          UUserCard2.substring(10, 12) < month2 ||
          (UUserCard2.substring(10, 12) == month2 &&
            UUserCard2.substring(12, 14) <= day2)
        ) {
          age2++;
        }
        if (age2 >= 18 && age2 <= 70) {
          arr[10] = 1;
          operant2.innerHTML = age2;
        } else {
          idbox2.innerHTML = "您好，被保人不在年龄区间内！";
          operant2.innerHTML = "";
          birthday2.innerHTML = "";
          sex2[0].checked = "";
          sex2[1].checked = "";
          arr[10] = 0;
        }
      }

      arrer();
    };
  }
  //  TODO 电子邮件格式验证
  // 邮箱：longjiang.gg_dd@yeah.com.cn
  // 2331922401@qq.com
  let email1 = $(".email1");
  let email2 = $(".email2");
  let emailbox1 = $(".emailtext1");
  let emailbox2 = $(".emailtext2");
  function email() {
    // 1、投保人
    email1.onfocus = function () {
      let emailValue1 = email1.value;
      emailbox1.innerHTML = "";
    };
    email1.onblur = function () {
      let emailreg1 = /^[a-zA-Z0-9]+(\.[\w-]+)*@[\w-]+(\.[\w-]+){1,2}$/;
      let emailValue1 = email1.value;
      let tmpemail1 = emailreg1.test(emailValue1);
      if (emailValue1 === "") {
        emailbox1.innerHTML = "";
        arr[4] = 1;
      } else if (tmpemail1 === false) {
        emailbox1.innerHTML = "请输入正确的电子邮箱！";
        arr[4] = 0;
      } else {
        emailbox1.innerHTML = "";
        arr[4] = 1;
      }
      arrer();
    };
    // 1、被保人
    email2.onfocus = function () {
      let emailValue2 = email2.value;
      emailbox2.innerHTML = "";
    };
    email2.onblur = function () {
      let emailreg2 = /^[a-zA-Z0-9]+(\.[\w-]+)*@[\w-]+(\.[\w-]+){1,2}$/;
      let emailValue2 = email2.value;
      let tmpemail2 = emailreg2.test(emailValue2);
      if (emailValue2 === "") {
        emailbox2.innerHTML = "";
        arr[5] = 1;
      } else if (tmpemail2 === false) {
        emailbox2.innerHTML = "请输入正确的电子邮箱！";
        arr[5] = 0;
      } else {
        emailbox2.innerHTML = "";
        arr[5] = 1;
      }
      arrer();
    };
  }

  //  TODO 手机号码格式验证
  // 手机号：11位 第一位是1，第二位不能是0 1和2，其他的没有要求
  // 13830920118
  let phone1 = $(".telephone1");
  let phone2 = $(".telephone2");
  let phonebox1 = $(".phonetext1");
  let phonebox2 = $(".phonetext2");

  function phone() {
    // 1、投保人
    phone1.onfocus = function () {
      let phoneValue1 = phone1.value;
      phonebox1.innerHTML = "";
    };
    phone1.onblur = function () {
      let phonereg1 = /^1[3-9]\d{9}$/;
      let phoneValue1 = phone1.value;
      let tmpphone1 = phonereg1.test(phoneValue1);
      if (phoneValue1 === "") {
        phonebox1.innerHTML = "您还没有输入电话号码，快去输入吧！";
        arr[6] = 0;
      } else if (tmpphone1 === false) {
        phonebox1.innerHTML = "请输入正确的电话号码！";
        arr[6] = 0;
      } else {
        phonebox1.innerHTML = "";
        arr[6] = 1;
      }
      arrer();
    };
    // 2、被保人
    phone2.onfocus = function () {
      let phoneValue2 = phone2.value;
      phonebox2.innerHTML = "";
    };
    phone2.onblur = function () {
      let phonereg2 = /^1[3-9]\d{9}$/;
      let phoneValue2 = phone2.value;
      let tmpphone2 = phonereg2.test(phoneValue2);
      if (phoneValue2 === "") {
        phonebox2.innerHTML = "您还没有输入电话号码，快去输入吧！";
        arr[7] = 0;
      } else if (tmpphone2 === false) {
        phonebox2.innerHTML = "请输入正确的电话号码！";
        arr[7] = 0;
      } else {
        phonebox2.innerHTML = "";
        arr[7] = 1;
      }
      arrer();
    };
  }

  // TODO 联系地址格式验证
  let add1 = $(".add1");
  let add2 = $(".add2");
  let addbox1 = $(".addbox1");
  let addbox2 = $(".addbox2");

  function add() {
    // 1、投保人
    add1.onfocus = function () {
      let addValue1 = add1.value;
      addbox1.innerHTML = "";
    };
    add1.onblur = function () {
      let addreg1 = /^[\u4e00-\u9fa5]{2,}$/;
      let addValue1 = add1.value;
      let tmpadd1 = addreg1.test(addValue1);
      if (addValue1 === "") {
        addbox1.innerHTML = "";
        arr[8] = 1;
      } else if (tmpadd1 === false) {
        addbox1.innerHTML = "你好，请输入正确的联系地址！";
        arr[8] = 0;
      } else {
        addbox1.innerHTML = "";
        arr[8] = 1;
      }
      arrer();
    };
    // 2、被保人
    add2.onfocus = function () {
      let addValue2 = add2.value;
      addbox2.innerHTML = "";
    };
    add2.onblur = function () {
      let addreg2 = /^[\u4e00-\u9fa5]{2,}$/;
      let addValue2 = add2.value;
      let tmpadd2 = addreg2.test(addValue2);
      if (addValue2 === "") {
        addbox2.innerHTML = "";
        arr[9] = 1;
      } else if (tmpadd2 === false) {
        addbox2.innerHTML = "你好，请输入正确的联系地址！";
        arr[9] = 0;
      } else {
        addbox2.innerHTML = "";
        arr[9] = 1;
      }
      arrer();
    };
  }

  // TODO 获取生效日期

  let tedtoadate = $(".tedtoadate");
  let tebValue = tedtoadate.value;
  let now = $(".now");
  let last = $(".last");
  let datebox = $(".datebox");
  // 当前时间
  let nowDate = new Date();
  let year3 = nowDate.getFullYear();
  let month3 = "";
  let day3 = "";
  if (nowDate.getMonth() + 1 < 10) {
    month3 = "0" + (nowDate.getMonth() + 1);
  } else {
    month3 = nowDate.getMonth() + 1;
  }
  if (nowDate.getDate() < 10) {
    day3 = "0" + nowDate.getDate();
  } else {
    day3 = nowDate.getDate();
  }
  let choicnowdate = year3 + "-" + month3 + "-" + day3;
  // 当前时间延后两天的秒数
  let ssnow = nowDate.getTime() + 2 * 24 * 60 * 60 * 1000;
  // 当前时间延后两天的秒数转化为yyyy-mm-dd
  let laterDate = new Date(ssnow);
  let year2 = laterDate.getFullYear();
  let month2 = "";
  let day2 = "";
  if (laterDate.getMonth() + 1 < 10) {
    month2 = "0" + (laterDate.getMonth() + 1);
  } else {
    month2 = laterDate.getMonth() + 1;
  }
  if (laterDate.getDate() < 10) {
    day2 = "0" + laterDate.getDate();
  } else {
    day2 = laterDate.getDate();
  }
  let ynowdate = year2 + "-" + month2 + "-" + day2;

  // 当前时间延后两天 再延后三个月后的秒数
  let sslast = ssnow + 90 * 24 * 60 * 60 * 1000;
  // 当前时间延后两天 再延后三个月后的秒数转化为yyyy-mm-dd
  let sslastdate = new Date(sslast);
  let year1 = sslastdate.getFullYear();
  let month1 = "";
  let day1 = "";
  if (sslastdate.getMonth() + 1 < 10) {
    month1 = "0" + (sslastdate.getMonth() + 1);
  } else {
    month1 = sslastdate.getMonth() + 1;
  }
  if (sslastdate.getDate() < 10) {
    day1 = "0" + sslastdate.getDate();
  } else {
    day1 = sslastdate.getDate();
  }
  let lasty = year1 + "-" + month1 + "-" + day1;
  tedtoadate.setAttribute("min", `${ynowdate}`);
  tedtoadate.setAttribute("max", `${lasty}`);
  now.innerHTML = ynowdate;
  last.innerHTML = lasty;

  tedtoadate.onfocus = function () {
    datebox.innerHTML = "";
  };
  tedtoadate.onblur = function () {
    let tedtoadate = $(".tedtoadate");
    let tebValue = tedtoadate.value;
    // 用户选择的时间
    let choiceDate = new Date(tebValue);
    // 用户选择的时间秒数
    let sschoiceDate = choiceDate.getTime();
    // 用户选择的时间秒数转化为yyyy-mm-dd

    let year4 = choiceDate.getFullYear();
    let month4 = "";
    let day4 = "";
    if (choiceDate.getMonth() + 1 < 10) {
      month4 = "0" + (choiceDate.getMonth() + 1);
    } else {
      month4 = choiceDate.getMonth() + 1;
    }
    if (choiceDate.getDate() < 10) {
      day4 = "0" + choiceDate.getDate();
    } else {
      day4 = choiceDate.getDate();
    }
    var ychoicedate = year4 + "-" + month4 + "-" + day4;
    if (tebValue === "") {
      datebox.innerHTML = "您好，您还没有选择生效日期！";
      arr[11] = 0;
    } else {
      if (sschoiceDate >= ssnow && sschoiceDate <= sslast) {
        datebox.innerHTML = "";
        arr[11] = 1;
      } else {
        arr[11] = 0;
      }
    }
    arrer();
  };

  allname();
  id();
  email();
  phone();
  add();
  sex1[0].setAttribute("disabled", true);
  sex1[1].setAttribute("disabled", true);
  sex2[0].setAttribute("disabled", true);
  sex2[1].setAttribute("disabled", true);

  // TODO 获取被投保人和投保人关系
  let relaship = $("#relaship");
  relaship.onclick = function () {
    relaship.onblur = function () {
      if (relaship.value == 1) {
        name2.value = name1.value;
        cardtype2.value = cardtype1.value;
        cardtype2.disabled = "disabled";
        idnum2.value = idnum1.value;
        birthday2.innerHTML = birthday1.innerHTML;
        operant2.innerHTML = operant1.innerHTML;
        email2.value = email1.value;
        phone2.value = phone1.value;
        add2.value = add1.value;
        // 判断被保人必填项
        // TODO 姓名
        let namereg2 = /^[\u4e00-\u9fa5]{2,18}$/;
        let nameValue2 = name2.value;
        name2.disabled = "disabled";
        let tmpname2 = namereg2.test(nameValue2);
        if (nameValue2 === "") {
          namebox2.innerHTML = "您还没有输入姓名，快去输入吧！";
          arr[1] = 0;
        } else if (tmpname2 === false) {
          namebox2.innerHTML = "您输入的姓名不正确，请输入2-18个汉字！";
          arr[1] = 0;
        } else {
          namebox2.innerHTML = "";
          arr[1] = 1;
        }

        // TODO 身份证
        let idreg2 = /^[1-9]\d{16}(\d|x|X)$/;
        let idValue2 = idnum2.value;
        idnum2.disabled = "disabled";
        let tmpid2 = idreg2.test(idValue2);
        if (idValue2 === "") {
          idbox2.innerHTML = "您还没有输入证件号码，快去输入吧！";
          arr[3] = 0;
        } else if (tmpid2 === false) {
          idbox2.innerHTML = "请输入正确的证件号码！";
          arr[3] = 0;
        } else {
          idbox2.innerHTML = "";
          arr[3] = 1;
          // TODO 用身份证号判断性别
          var sexCard2 = idnum2.value;

          // 获取性别
          if (parseInt(sexCard2.substr(16, 1)) % 2 == 1) {
            sex2[0].checked = "checked";
            sexValue2 = 1;

            // 是男则执行
          } else if (parseInt(sexCard2.substr(16, 1)) % 2 == 0) {
            sex2[1].checked = "checked";
            sexValue2 = 2;
            // 是女则执行
          } else {
            console.log("用户还没有输入身份证号码");
          }
          // TODO 身份证获取出生日期
          let UUserCard2 = idnum2.value;
          let bir2 =
            UUserCard2.substring(6, 10) +
            "-" +
            UUserCard2.substring(10, 12) +
            "-" +
            UUserCard2.substring(12, 14);
          birthday2.innerHTML = bir2;
          //TODO 身份证号码获取年龄
          let myDate2 = new Date();
          let month2 = myDate2.getMonth() + 1;
          let day2 = myDate2.getDate();
          let age2 = myDate2.getFullYear() - UUserCard2.substring(6, 10) - 1;
          if (
            UUserCard2.substring(10, 12) < month2 ||
            (UUserCard2.substring(10, 12) == month2 &&
              UUserCard2.substring(12, 14) <= day2)
          ) {
            age2++;
          }
          if (age2 >= 18 && age2 <= 70) {
            arr[10] = 1;
            operant2.innerHTML = age2;
          } else {
            idbox2.innerHTML = "您好，被保人不在年龄区间内！";
            operant2.innerHTML = "";
            birthday2.innerHTML = "";
            sex2[0].checked = "";
            sex2[1].checked = "";
            arr[10] = 0;
          }
        }
        // TODO 电子邮箱
        let emailreg1 = /^[a-zA-Z0-9]+(\.[\w-]+)*@[\w-]+(\.[\w-]+){1,2}$/;
        let emailValue1 = email1.value;
        let tmpemail1 = emailreg1.test(emailValue1);
        if (emailValue1 === "") {
          emailbox1.innerHTML = "";
          arr[4] = 1;
        } else if (tmpemail1 === false) {
          emailbox1.innerHTML = "请输入正确的电子邮箱！";
          arr[4] = 0;
        } else {
          emailbox1.innerHTML = "";
          arr[4] = 1;
        }

        let emailreg2 = /^[a-zA-Z0-9]+(\.[\w-]+)*@[\w-]+(\.[\w-]+){1,2}$/;
        let emailValue2 = email2.value;
        email2.disabled = "disabled";
        let tmpemail2 = emailreg2.test(emailValue2);
        if (emailValue2 === "") {
          emailbox2.innerHTML = "";
          arr[5] = 1;
        } else if (tmpemail2 === false) {
          emailbox2.innerHTML = "请输入正确的电子邮箱！";
          arr[5] = 0;
        } else {
          emailbox2.innerHTML = "";
          arr[5] = 1;
        }

        // TODO 手机号
        let phonereg2 = /^1[3-9]\d{9}$/;
        let phoneValue2 = phone2.value;
        phone2.disabled = "disabled";
        let tmpphone2 = phonereg2.test(phoneValue2);
        if (phoneValue2 === "") {
          phonebox2.innerHTML = "您还没有输入电话号码，快去输入吧！";
          arr[7] = 0;
        } else if (tmpphone2 === false) {
          phonebox2.innerHTML = "请输入正确的电话号码！";
          arr[7] = 0;
        } else {
          phonebox2.innerHTML = "";
          arr[7] = 1;
        }
        // TODO 联系地址
        let addreg1 = /^[\u4e00-\u9fa5]{2,}$/;
        let addValue1 = add1.value;
        let tmpadd1 = addreg1.test(addValue1);
        if (addValue1 === "") {
          addbox1.innerHTML = "";
          arr[8] = 1;
        } else if (tmpadd1 === false) {
          addbox1.innerHTML = "你好，请输入正确的联系地址！";
          arr[8] = 0;
        } else {
          addbox1.innerHTML = "";
          arr[8] = 1;
        }

        let addreg2 = /^[\u4e00-\u9fa5]{2,}$/;
        let addValue2 = add2.value;
        add2.disabled = "disabled";
        let tmpadd2 = addreg2.test(addValue2);
        if (addValue2 === "") {
          addbox2.innerHTML = "";
          arr[9] = 1;
        } else if (tmpadd2 === false) {
          addbox2.innerHTML = "你好，请输入正确的联系地址！";
          arr[9] = 0;
        } else {
          addbox2.innerHTML = "";
          arr[9] = 1;
        }

        arrer();
      } else {
        name2.disabled = "";
        name2.value = "";
        cardtype2.disabled = "";
        idnum2.value = "";
        idnum2.disabled = "";
        sexValue2 = "";
        sex2[0].checked = "";
        sex2[1].checked = "";
        birthday2.innerHTML = "";
        operant2.innerHTML = "";
        email2.value = "";
        email2.disabled = "";
        phone2.value = "";
        phone2.disabled = "";
        add2.value = "";
        add2.disabled = "";
        namebox2.innerHTML = "";
        idbox2.innerHTML = "";
        emailbox1.innerHTML = "";
        phonebox2.innerHTML = "";
        addbox2.innerHTML = "";
      }
      arrer();
    };
  };
};
