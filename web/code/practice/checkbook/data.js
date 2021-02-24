
var $ = (selector) => {
  return document.querySelectorAll(selector);
};

let left = [
  { id: 1, title: "备选1", chack: false, dis: false },
  { id: 2, title: "备选2", chack: false, dis: false },
  { id: 3, title: "备选3", chack: false, dis: false },
  { id: 5, title: "备选5", chack: false, dis: false },
  { id: 6, title: "备选6", chack: false, dis: false },
  { id: 7, title: "备选7", chack: false, dis: false },
  { id: 8, title: "备选8", chack: true, dis: true },
  { id: 9, title: "备选9", chack: false, dis: false },
  { id: 10, title: "备选10", chack: false, dis: false },
  { id: 11, title: "备选11", chack: false, dis: false },
  { id: 12, title: "备选12", chack: true, dis: true },
  { id: 13, title: "备选13", chack: false, dis: false },
  { id: 14, title: "备选14", chack: false, dis: false },
  { id: 15, title: "备选15", chack: false, dis: false },
];
let right = [{ id: 4, title: "备选4", chack: true, dis: true }];

leftfun();
check();

// 左边渲染
function leftfun() {
  $(".list1ul")[0].innerHTML = "";
  $(".list1sp2")[0].innerHTML = "";
  for (let i = 0; i < left.length; i++) {
    $(
      ".list1ul"
    )[0].innerHTML += `<li><input type="checkbox" name="" id="">${left[i].title}</li>`;
  }
  $(".list1sp2")[0].innerHTML = $(".list1ul li").length;
  // 左边不可选项禁止
  for (let i = 0; i < left.length; i++) {
    if (left[i].dis == true) {
      $(".list1ul li input")[i].disabled = "disabled";
      $(".list1ul li input")[i].style.cursor = "not-allowed";
      $(".list1ul li")[i].style.color = "#ccc";
      $(".list1ul li")[i].style.cursor = "not-allowed";
    }
  }
}
// 判断选择后的复选框有几个
function number() {
  let num = 0;
  for (let i = 0; i < left.length; i++) {
    if (!left[i].dis) {
      if (left[i].chack) {
        num++;
      }
    }
  }
  $(".list1sp1")[0].innerHTML = num;
}
// 判断是否右已选项
function check() {
  let num = 0;
  for (let i = 0; i < left.length; i++) {
    if (left[i].dis === true) {
    } else {
      $(".list1ul li input")[i].onclick = function () {
        // console.log(left);
        if ($(".list1ul li input")[i].checked == true) {
          left[i].chack = true;
          //    console.log(left);
        } else {
          left[i].chack = false;
          // console.log(left[i]);
        }
        allcheck();
        number();
        btnleft();
      };
    }
  }
}
// 判断是否全选
function allcheck() {
  let flag = true;
  $(".rightbtn")[0].classList.remove("curr");
  for (let j = 0; j < left.length; j++) {
    if (left[j].chack === false) {
      flag = false;
    }
  }
  if (flag === true) {
    $(".list1er input")[0].checked = "checked";
  } else {
    $(".list1er input")[0].checked = "";
  }
}
// 点击全选
allcheckadd();
function allcheckadd() {
  let num = 0;
  $(".list1er input")[0].onclick = function () {
    for (let i = 0; i < left.length; i++) {
      if (left[i].dis === true) {
      } else {
        if ($(".list1er input")[0].checked === true) {
          left[i].chack = true;
          $(".list1ul li input")[i].checked = "checked";

          check();
        } else {
          left[i].chack = false;
          $(".list1ul li input")[i].checked = "";
        }
      }
    }
    number();
    btnleft();
    // console.log(left);
  };
}
// 当左边有按钮被选择右箭头按钮点亮变为可点击
function btnleft() {
  $(".rightbtn")[0].classList.remove("curr");
  for (let i = 0; i < left.length; i++) {
    if (!left[i].dis) {
      if (left[i].chack) {
        $(".rightbtn")[0].classList.add("curr");
      }
    }
  }
}

$(".rightbtn")[0].onclick = function () {
  console.log("jhjhjj");

  let removeData = []; // 存放需要删除的数据
  for (let j = 0; j < left.length; j++) {
    if (!left[j].dis) {
      if (left[j].chack) {
        removeData.push(left[j]);
      }
    }
  }

  for (let index = 0; index < removeData.length; index++) {
    let ind = left.indexOf(removeData[index]);
    left.splice(ind, 1);
    removeData[index].chack = false;
    $(".list1ul li input")[index].checked = "";

    right.push(removeData[index]);
  }
  for (let i = 0; i < right.length - 1; i++) {
    for (let j = 0; j < right.length - 1 - i; j++) {
      // console.log(right[j+1]);
      // console.log(right[j]);
      if (right[j + 1].id < right[j].id) {
        console.log("dddd");
        let temp = right[j];
        right[j] = right[j + 1];
        right[j + 1] = temp;
      }
    }
  }
  if (removeData.length) {
    $(".list2er input")[0].disabled = false;
  }

  rightfun();
  leftfun();
  number();
  check();
  check1();
  allcheck();
  allcheckadd();
  allleft();
  allleft1();
  // $(".list1er input")[0].checked = false;
};

function allleft() {
  console.log(left);
  let tmp = true;
  for (let i = 0; i < left.length; i++) {
    if (left[i].dis === false) {
      return (tmp = false);
    }
  }

  if (tmp === true) {
    $(".list1er input")[0].checked = "";
    $(".rightbtn")[0].classList.remove("curr");
    $(".list1er input")[0].disabled = true;
    // $(".list1er input")[0].onclick = function () {
    //     $(".list1er input")[0].checked = "";
    // }
  } else {
    $(".list1er input")[0].disabled = false;
  }
}

rightfun();
check1();
allcheckadd1();
// 右边渲染
function rightfun() {
  $(".list2ul")[0].innerHTML = "";
  $(".list2sp2")[0].innerHTML = "";

  for (let i = 0; i < right.length; i++) {
    $(
      ".list2ul"
    )[0].innerHTML += `<li><input type="checkbox" name="" id="">${right[i].title}</li>`;
  }
  $(".list2sp2")[0].innerHTML = $(".list2ul li").length;
  // 右边不可选项禁止
  for (let i = 0; i < right.length; i++) {
    if (right[i].dis == true) {
      $(".list2ul li input")[i].disabled = "disabled";
      $(".list2ul li input")[i].style.cursor = "not-allowed";
      $(".list2ul li")[i].style.color = "#ccc";
      $(".list2ul li")[i].style.cursor = "not-allowed";
    }
  }
}
// 判断选择后的复选框有几个
function number1() {
  let num1 = 0;
  for (let i = 0; i < right.length; i++) {
    if (!right[i].dis) {
      if (right[i].chack) {
        num1++;
      }
    }
  }
  $(".list2sp1")[0].innerHTML = num1;
}
// 判断是否右已选项
function check1() {
  let num1 = 0;
  for (let i = 0; i < right.length; i++) {
    if (right[i].dis === true) {
    } else {
      $(".list2ul li input")[i].onclick = function () {
        // console.log(left);
        if ($(".list2ul li input")[i].checked == true) {
          right[i].chack = true;
          //    console.log(left);
        } else {
          right[i].chack = false;
          // console.log(left[i]);
        }
        allcheck1();
        number1();
        btnleft1();
      };
    }
  }
}
// 判断是否全选
function allcheck1() {
  let flag1 = true;
  $(".leftbtn")[0].classList.remove("curr");
  for (let j = 0; j < right.length; j++) {
    if (right[j].chack === false) {
      flag1 = false;
    }
  }
  if (flag1 === true) {
    $(".list2er input")[0].checked = "checked";
  } else {
    $(".list2er input")[0].checked = "";
  }
}
// 点击全选

function allcheckadd1() {
  let num1 = 0;
  $(".list2er input")[0].onclick = function () {
    for (let i = 0; i < right.length; i++) {
      if (right[i].dis === true) {
      } else {
        if ($(".list2er input")[0].checked === true) {
          right[i].chack = true;
          $(".list2ul li input")[i].checked = "checked";

          check();
        } else {
          right[i].chack = false;
          $(".list2ul li input")[i].checked = "";
        }
      }
    }
    number1();
    btnleft1();
    // console.log(left);
  };
}
// 当左边有按钮被选择右箭头按钮点亮变为可点击
function btnleft1() {
  $(".leftbtn")[0].classList.remove("curr");
  for (let i = 0; i < right.length; i++) {
    if (!right[i].dis) {
      if (right[i].chack) {
        $(".leftbtn")[0].classList.add("curr");
      }
    }
  }
}
$(".leftbtn")[0].onclick = function () {
  let removeData1 = []; // 存放需要删除的数据
  for (let j = 0; j < right.length; j++) {
    if (!right[j].dis) {
      if (right[j].chack) {
        removeData1.push(right[j]);
      }
    }
  }

  for (let index1 = 0; index1 < removeData1.length; index1++) {
    let ind1 = right.indexOf(removeData1[index1]);
    right.splice(ind1, 1);
    removeData1[index1].chack = false;
    $(".list2ul li input")[index1].checked = "";

    left.push(removeData1[index1]);
  }
  for (let i = 0; i < left.length - 1; i++) {
    for (let j = 0; j < left.length - 1 - i; j++) {
      // console.log(right[j+1]);
      // console.log(right[j]);
      if (left[j + 1].id < left[j].id) {
        console.log("dddd");
        let temp = left[j];
        left[j] = left[j + 1];
        left[j + 1] = temp;
      }
    }
  }
  if (removeData1.length) {
    $(".list1er input")[0].disabled = false;
  }
  rightfun();
  leftfun();
  number1();
  check();
  check1();
  allcheck1();
  allcheckadd1();
  allleft1();
  allleft();
};

function allleft1() {
  let tmp1 = true;
  for (let i = 0; i < right.length; i++) {
    if (right[i].dis === false) {
      return (tmp1 = false);
    }
  }
  if (tmp1 === true) {
    $(".list2er input")[0].checked = "";
    $(".leftbtn")[0].classList.remove("curr");
    $(".list2er input")[0].disabled = true;
    // $(".list2er input")[0].onclick = function () {
    //     $(".list2er input")[0].checked = "";
    // }
  } else {
    $(".list2er input")[0].disabled = false;
  }
}
