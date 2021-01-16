// input框判断
let phone1 = document.querySelector(".telephone");
let name1 = document.querySelector(".name");
let ures = document.querySelector(".uesr");
let phonebox = document.querySelector(".telephonebox");
let namebox = document.querySelector(".namebox");
let uesrbox = document.querySelector(".uesrbox");
let btn = document.querySelector(".cont-btn");
let arr = [0,0];

arrer();

 // 当姓名得到焦点时
 name1.onfocus = function () {
    let nameValue1 = name1.value;
    namebox.innerHTML = "";
  };
  // 当姓名失去焦点
  name1.onblur = function () {
    let namereg1 = /^[\u4e00-\u9fa5]{2,18}$/;
    let nameValue1 = name1.value;
    let tmpname1 = namereg1.test(nameValue1);
    if (nameValue1 === "") {
        namebox.innerHTML = "您还没有输入姓名，快去输入吧！";
      arr[0] = 0;
    } else if (tmpname1 === false) {
        namebox.innerHTML = "您输入的姓名不正确，请输入2-18个汉字！";
      arr[0] = 0;
    } else {
        namebox.innerHTML = "";
      arr[0] = 1;
    }
    arrer();
  };
// 电话号码的正则判断以及判空操作
phone1.onfocus = function () {
    let phoneValue1 = phone1.value;
    phonebox.innerHTML = "";
  };
  phone1.onblur = function () {
    let phonereg1 = /^1[3-9]\d{9}$/;
    let phoneValue1 = phone1.value;
    let tmpphone1 = phonereg1.test(phoneValue1);
    if (phoneValue1 === "") {
        phonebox.innerHTML = "您还没有输入电话号码，快去输入吧！";
      arr[1] = 0;
    } else if (tmpphone1 === false) {
        phonebox.innerHTML = "请输入正确的电话号码！";
      arr[1] = 0;
    } else {
        phonebox.innerHTML = "";
      arr[1] = 1;
    }
    arrer();
  };

function arrer(){
    
    for(let i=0; i<arr.length;i++){
        if(arr[i] == 0){
            btn.onclick = function(){
                alert("提交失败，还有未填项");
            }
        }else{
          btn.onclick = function(){
              alert("提交成功");
          }
        }
    }
}