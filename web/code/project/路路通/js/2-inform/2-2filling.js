// A,B,C卡类型
let cardtype = $(".cardType");
// 面值
let money1 = $(".money1");
// 本卡卡号
let idcard = $(".idcard");
// 本卡激活日期
let ActiveDate = $(".ActiveDate");
// 本卡生效日期
let TedtoaDate = $(".TedtoaDate");
// 保额信息
// 身故保险金额
let money2 = $(".money2");
// 医疗保险金额
let money3 = $(".money3");
//投保人
let bbtn1 = $(".bbtn1");
// 被保人
let bbtn2 = $(".bbtn2");
// 受益人
let bbtn3 = $(".bbtn3");
// 身份信息
let idtype1 = "";
let idtype2 = "";
let sex1 = "";
let sex2 = "";
let ul1 = $(".tan");
console.log(localStorage.cardNum1);
axios
  .post("http://192.168.0.9:3000/seeinfo", {
    name: "seeInfo",
    id: 1,
    CardNum: Number(localStorage.cardNum1),
  })
  .then((res) => {
    console.log(res.data);
    if (res.data[0].Type === 1) {
      cardtype.innerHTML = "A";
      money1.innerHTML = res.data[0].Price;
      money2.innerHTML = res.data[0].AccidentPrice;
      money3.innerHTML = res.data[0].OrdinaryPrice;
      idcard.innerHTML = Number(localStorage.cardNum1);
      ActiveDate.innerHTML = res.data[0].ActiveDate;
      TedtoaDate.innerHTML = res.data[0].TEDT0A;
      if (res.data[0].IdTypeA === 1) {
        idtype1 = "身份证";
      } else {
        idtype1 = "护照";
      }
      if (res.data[0].SexA === 1) {
        sex1 = "男";
      } else {
        sex1 = "女";
      }
      if (res.data[0].IdTypeE === 1) {
        idtype2 = "身份证";
      } else {
        idtype2 = "护照";
      }
      if (res.data[0].SexE === 1) {
        sex2 = "男";
      } else {
        sex2 = "女";
      }
      tmp = "";
      // 投保人信息
      tmp += `<li><span class="sp1">投保人姓名</span><span class="name">${res.data[0].NameA}</span></li>
            <li><span class="sp1">证件</span><span class="idtype">${idtype1}</span></li>
            <li><span class="sp1">证件号码</span><span class="idcardnum">${res.data[0].IDCardNumA}</span></li>
            <li><span class="sp1">性别</span><span class="sex">${sex1}</span></li>
            <li><span class="sp1">出生日期</span><span class="birth">${res.data[0].BirthA}</span></li>
            <li><span class="sp1">手机号</span><span class="phone">${res.data[0].PhoneA}</span></li>
            <li class="addry"><span class="sp1">地址</span><span class="addr">${res.data[0].AddrA}</span></li>`;
      ul1.innerHTML = tmp;

      // 点击投保人
      bbtn1.onclick = function () {
        bbtn1.style.background = "#1bac05";
        bbtn1.style.color = "#fff";
        bbtn2.style.background = "#fff";
        bbtn2.style.color = "#1bac05";
        bbtn3.style.background = "#fff";
        bbtn3.style.color = "#1bac05";
        tmp = "";
        // 投保人信息
        tmp += `<li><span class="sp1">投保人姓名</span><span class="name">${res.data[0].NameA}</span></li>
                <li><span class="sp1">证件</span><span class="idtype">${idtype1}</span></li>
                <li><span class="sp1">证件号码</span><span class="idcardnum">${res.data[0].IDCardNumA}</span></li>
                <li><span class="sp1">性别</span><span class="sex">${sex1}</span></li>
                <li><span class="sp1">出生日期</span><span class="birth">${res.data[0].BirthA}</span></li>
                <li><span class="sp1">手机号</span><span class="phone">${res.data[0].PhoneA}</span></li>
                <li class="addry"><span class="sp1">地址</span><span class="addr">${res.data[0].AddrA}</span></li>`;
        ul1.innerHTML = tmp;
      };
      // 点击被保人
      bbtn2.onclick = function () {
        bbtn1.style.background = "#fff";
        bbtn1.style.color = "#1bac05";
        bbtn2.style.background = "#1bac05";
        bbtn2.style.color = "#fff";
        bbtn3.style.background = "#fff";
        bbtn3.style.color = "#1bac05";
        tmp = "";
        // 被保人信息
        tmp += `<li><span class="sp1">被保人姓名</span><span class="name">${res.data[0].NameE}</span></li>
            <li><span class="sp1">证件</span><span class="idtype">${idtype2}</span></li>
            <li><span class="sp1">证件号码</span><span class="idcardnum">${res.data[0].IDCardNumE}</span></li>
            <li><span class="sp1">性别</span><span class="sex">${sex2}</span></li>
            <li><span class="sp1">出生日期</span><span class="birth">${res.data[0].BirthE}</span></li>
            <li><span class="sp1">手机号</span><span class="phone">${res.data[0].PhoneE}</span></li>
            <li class="addry"><span class="sp1">地址</span><span class="addr">${res.data[0].AddrE}</span></li>`;
        ul1.innerHTML = tmp;
      };
      // 点击受益人
      bbtn3.onclick = function () {
        bbtn1.style.background = "#fff";
        bbtn1.style.color = "#1bac05";
        bbtn2.style.background = "#fff";
        bbtn2.style.color = "#1bac05";
        bbtn3.style.background = "#1bac05";
        bbtn3.style.color = "#fff";
        tmp = "";
        tmp += `<div class="beneficiary">受益人为法定继承人</div>`;
        ul1.innerHTML = tmp;
      };
    } else if (res.data[0].Type === 2) {
      cardtype.innerHTML = "B";
      money1.innerHTML = res.data[0].Price;
      money2.innerHTML = res.data[0].AccidentPrice;
      money3.innerHTML = res.data[0].OrdinaryPrice;
      idcard.innerHTML = Number(localStorage.cardNum1);
      ActiveDate.innerHTML = res.data[0].ActiveDate;
      TedtoaDate.innerHTML = res.data[0].TEDT0A;
      if (res.data[0].IdTypeA === 1) {
        idtype1 = "身份证";
      } else {
        idtype1 = "护照";
      }
      if (res.data[0].SexA === 1) {
        sex1 = "男";
      } else {
        sex1 = "女";
      }
      if (res.data[0].IdTypeE === 1) {
        idtype2 = "身份证";
      } else {
        idtype2 = "护照";
      }
      if (res.data[0].SexE === 1) {
        sex2 = "男";
      } else {
        sex2 = "女";
      }
      tmp = "";
      // 投保人信息
      tmp += `<li><span class="sp1">投保人姓名</span><span class="name">${res.data[0].NameA}</span></li>
            <li><span class="sp1">证件</span><span class="idtype">${idtype1}</span></li>
            <li><span class="sp1">证件号码</span><span class="idcardnum">${res.data[0].IDCardNumA}</span></li>
            <li><span class="sp1">性别</span><span class="sex">${sex1}</span></li>
            <li><span class="sp1">出生日期</span><span class="birth">${res.data[0].BirthA}</span></li>
            <li><span class="sp1">手机号</span><span class="phone">${res.data[0].PhoneA}</span></li>
            <li class="addry"><span class="sp1">地址</span><span class="addr">${res.data[0].AddrA}</span></li>`;
      ul1.innerHTML = tmp;

      // 点击投保人
      bbtn1.onclick = function () {
        bbtn1.style.background = "#1bac05";
        bbtn1.style.color = "#fff";
        bbtn2.style.background = "#fff";
        bbtn2.style.color = "#1bac05";
        bbtn3.style.background = "#fff";
        bbtn3.style.color = "#1bac05";
        tmp = "";
        // 投保人信息
        tmp += `<li><span class="sp1">投保人姓名</span><span class="name">${res.data[0].NameA}</span></li>
                <li><span class="sp1">证件</span><span class="idtype">${idtype1}</span></li>
                <li><span class="sp1">证件号码</span><span class="idcardnum">${res.data[0].IDCardNumA}</span></li>
                <li><span class="sp1">性别</span><span class="sex">${sex1}</span></li>
                <li><span class="sp1">出生日期</span><span class="birth">${res.data[0].BirthA}</span></li>
                <li><span class="sp1">手机号</span><span class="phone">${res.data[0].PhoneA}</span></li>
                <li class="addry"><span class="sp1">地址</span><span class="addr">${res.data[0].AddrA}</span></li>`;
        ul1.innerHTML = tmp;
      };
      // 点击被保人
      bbtn2.onclick = function () {
        bbtn1.style.background = "#fff";
        bbtn1.style.color = "#1bac05";
        bbtn2.style.background = "#1bac05";
        bbtn2.style.color = "#fff";
        bbtn3.style.background = "#fff";
        bbtn3.style.color = "#1bac05";
        tmp = "";
        // 被保人信息
        tmp += `<li><span class="sp1">被保人姓名</span><span class="name">${res.data[0].NameE}</span></li>
            <li><span class="sp1">证件</span><span class="idtype">${idtype2}</span></li>
            <li><span class="sp1">证件号码</span><span class="idcardnum">${res.data[0].IDCardNumE}</span></li>
            <li><span class="sp1">性别</span><span class="sex">${sex2}</span></li>
            <li><span class="sp1">出生日期</span><span class="birth">${res.data[0].BirthE}</span></li>
            <li><span class="sp1">手机号</span><span class="phone">${res.data[0].PhoneE}</span></li>
            <li class="addry"><span class="sp1">地址</span><span class="addr">${res.data[0].AddrE}</span></li>`;
        ul1.innerHTML = tmp;
      };
      // 点击受益人
      bbtn3.onclick = function () {
        bbtn1.style.background = "#fff";
        bbtn1.style.color = "#1bac05";
        bbtn2.style.background = "#fff";
        bbtn2.style.color = "#1bac05";
        bbtn3.style.background = "#1bac05";
        bbtn3.style.color = "#fff";
        tmp = "";
        tmp += `<div class="beneficiary">受益人为法定继承人</div>`;
        ul1.innerHTML = tmp;
      };
    } else {
      cardtype.innerHTML = "C";
      money1.innerHTML = res.data[0].Price;
      money2.innerHTML = res.data[0].AccidentPrice;
      money3.innerHTML = res.data[0].OrdinaryPrice;
      idcard.innerHTML = Number(localStorage.cardNum1);
      ActiveDate.innerHTML = res.data[0].ActiveDate;
      TedtoaDate.innerHTML = res.data[0].TEDT0A;
      if (res.data[0].IdTypeA === 1) {
        idtype1 = "身份证";
      } else {
        idtype1 = "护照";
      }
      if (res.data[0].SexA === 1) {
        sex1 = "男";
      } else {
        sex1 = "女";
      }
      if (res.data[0].IdTypeE === 1) {
        idtype2 = "身份证";
      } else {
        idtype2 = "护照";
      }
      if (res.data[0].SexE === 1) {
        sex2 = "男";
      } else {
        sex2 = "女";
      }
      tmp = "";
      // 投保人信息
      tmp += `<li><span class="sp1">投保人姓名</span><span class="name">${res.data[0].NameA}</span></li>
            <li><span class="sp1">证件</span><span class="idtype">${idtype1}</span></li>
            <li><span class="sp1">证件号码</span><span class="idcardnum">${res.data[0].IDCardNumA}</span></li>
            <li><span class="sp1">性别</span><span class="sex">${sex1}</span></li>
            <li><span class="sp1">出生日期</span><span class="birth">${res.data[0].BirthA}</span></li>
            <li><span class="sp1">手机号</span><span class="phone">${res.data[0].PhoneA}</span></li>
            <li class="addry"><span class="sp1">地址</span><span class="addr">${res.data[0].AddrA}</span></li>`;
      ul1.innerHTML = tmp;

      // 点击投保人
      bbtn1.onclick = function () {
        bbtn1.style.background = "#1bac05";
        bbtn1.style.color = "#fff";
        bbtn2.style.background = "#fff";
        bbtn2.style.color = "#1bac05";
        bbtn3.style.background = "#fff";
        bbtn3.style.color = "#1bac05";
        tmp = "";
        // 投保人信息
        tmp += `<li><span class="sp1">投保人姓名</span><span class="name">${res.data[0].NameA}</span></li>
                <li><span class="sp1">证件</span><span class="idtype">${idtype1}</span></li>
                <li><span class="sp1">证件号码</span><span class="idcardnum">${res.data[0].IDCardNumA}</span></li>
                <li><span class="sp1">性别</span><span class="sex">${sex1}</span></li>
                <li><span class="sp1">出生日期</span><span class="birth">${res.data[0].BirthA}</span></li>
                <li><span class="sp1">手机号</span><span class="phone">${res.data[0].PhoneA}</span></li>
                <li class="addry"><span class="sp1">地址</span><span class="addr">${res.data[0].AddrA}</span></li>`;
        ul1.innerHTML = tmp;
      };
      // 点击被保人
      bbtn2.onclick = function () {
        bbtn1.style.background = "#fff";
        bbtn1.style.color = "#1bac05";
        bbtn2.style.background = "#1bac05";
        bbtn2.style.color = "#fff";
        bbtn3.style.background = "#fff";
        bbtn3.style.color = "#1bac05";
        tmp = "";
        // 被保人信息
        tmp += `<li><span class="sp1">被保人姓名</span><span class="name">${res.data[0].NameE}</span></li>
            <li><span class="sp1">证件</span><span class="idtype">${idtype2}</span></li>
            <li><span class="sp1">证件号码</span><span class="idcardnum">${res.data[0].IDCardNumE}</span></li>
            <li><span class="sp1">性别</span><span class="sex">${sex2}</span></li>
            <li><span class="sp1">出生日期</span><span class="birth">${res.data[0].BirthE}</span></li>
            <li><span class="sp1">手机号</span><span class="phone">${res.data[0].PhoneE}</span></li>
            <li class="addry"><span class="sp1">地址</span><span class="addr">${res.data[0].AddrE}</span></li>`;
        ul1.innerHTML = tmp;
      };
      // 点击受益人
      bbtn3.onclick = function () {
        bbtn1.style.background = "#fff";
        bbtn1.style.color = "#1bac05";
        bbtn2.style.background = "#fff";
        bbtn2.style.color = "#1bac05";
        bbtn3.style.background = "#1bac05";
        bbtn3.style.color = "#fff";
        tmp = "";
        tmp += `<div class="beneficiary">受益人为法定继承人</div>`;
        ul1.innerHTML = tmp;
      };
    }
  })
  .catch((err) => {
    console.log(err);
  });
