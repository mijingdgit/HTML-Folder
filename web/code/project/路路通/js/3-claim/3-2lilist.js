let cards = $(".card");
let ul2 = $(".contery");
let tmp1 = "";
let tt = "";
axios
  .post("http://192.168.0.9:3000/seeinfo", {
    name: "seeInfo",
    id: 2,
    CardNum: Number(localStorage.cardNum1),
  })
  .then((res) => {
    console.log(res.data);
    cards.innerHTML = Number(localStorage.cardNum1);
    if(res.data[0].Status===1){
        tt = "已受理";
    }else if(res.data[0].Status===2){
        tt = "处理中";
    }else if(res.data[0].Status===3){
        tt = "未受理";
    }else{
        tt = "暂无信息";
    }
    for (let i = 0; i < res.data.length;i++) {
        tmp1+=`<li><span class="sp1">申请理赔时间：<span class="sp3">${res.data[0].ClaimTime}</span></span><span class="sp2">理赔状态：<span class="sp4">${tt}</span></span></li>`;
    }
    ul2.innerHTML = tmp1;
  })
  .catch((err) => {
    console.log(err);
  });
