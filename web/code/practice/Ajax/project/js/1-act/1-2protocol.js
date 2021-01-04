// check
let check = document.querySelectorAll(".check");
// 全选按钮
let checkall = document.querySelector(".checkall");
// 跳转页面
let btn1 = document.querySelector(".btn1");
let cardtype = document.querySelector(".cardtype");
let money1 = document.querySelector(".money1");
let money2 = document.querySelector(".money2");
let money3 = document.querySelector(".money3");
let checkarr = [0, 0, 0];
checkall.onclick = function () {
  if (checkall.checked) {
    for (let i = 0; i < check.length; i++) {
      check[i].checked = "checked";
      checkarr[i] = 1;
    }
  } else {
    for (let i = 0; i < check.length; i++) {
      check[i].checked = "";
      checkarr[i] = 0;
    }
  }
  checker();
};
// 当点击上面三个选项时判断有没有全部选中如果没有选中全选按钮不选
for (let i = 0; i < check.length; i++) {
  check[i].onclick = function () {
    if (this.checked) {
      checkarr[i] = 1;
    } else {
      checkarr[i] = 0;
    }
    checker();
  };
}
function checker() {
  if (checkarr.includes(0)) {
    checkall.checked = "";
    btn1.style.background = "#ccc";
  } else {
    checkall.checked = "checked";
    btn1.style.background = " #1bac05";
    btn1.onclick = function () {
      window.location.href = "./information1-3.html";
    };
  }
}

let accountNum = { CardNum:Number(localStorage.cardNum),Pwd:Number(localStorage.passNum)}
    axios
    .post(
        "http://192.168.0.9:3000/activation"
        ,{ 
            name: "activation",
            id: 2,
            accountNum 
        } //传过去的参数
    )
    .then(res=>{
        if(res.data[0].Type === 1){
            cardtype.innerHTML = "A";
            money1.innerHTML = res.data[0].Price;
            money2.innerHTML = res.data[0].AccidentPrice;
            money3.innerHTML = res.data[0].OrdinaryPrice;
        }else if(res.data[0].Type === 2){
            cardtype.innerHTML = "B";
            money1.innerHTML = res.data[0].Price;
            money2.innerHTML = res.data[0].AccidentPrice;
            money3.innerHTML = res.data[0].OrdinaryPrice;

        }else{
            cardtype.innerHTML = "C";
            money1.innerHTML = res.data[0].Price;
            money2.innerHTML = res.data[0].AccidentPrice;
            money3.innerHTML = res.data[0].OrdinaryPrice;
        }
      
    })

    .catch(err=>{
        console.log(err);
        
})
