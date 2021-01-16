// 国家
let state = document.querySelector("#state");
let statetmp = "";
// 省
let china = document.querySelector("#china");
let USA = document.querySelector("#USA");
let japan = document.querySelector("#japan");
let Korea = document.querySelector("#Korea");
let provincee = document.querySelector(".province");
console.log(china);
let chinatmp = "";
let USAtmp = "";
let japantmp = "";
let Koreatmp = "";
// 市
let chinacity = document.querySelector(".chinacity");
let USAcity = document.querySelector(".USAcity");
let japancity = document.querySelector(".japancity");
let Koreacity = document.querySelector(".Koreacity");
// 中国的省
let gan = document.querySelector("#gan");
let chuan = document.querySelector("#chuan");
let su = document.querySelector("#su");
let shan = document.querySelector("#shan");
// 美国的省
let niu = document.querySelector("#niu");
let hua = document.querySelector("#hua");
let jia = document.querySelector("#jia");
let a = document.querySelector("#a");
// 日本的省
let dong = document.querySelector("#dong");
let bei = document.querySelector("#bei");
let da = document.querySelector("#da");
let fu = document.querySelector("#fu");
// 韩国的省
let shou = document.querySelector("#shou");
let fushan = document.querySelector("#fushan");
let daqiu = document.querySelector("#daqiu");
let jiang = document.querySelector("#jiang");
statey();

// ! 国家的省会
function statey() {
  // TODO 初始化选择国家后出现省市
  if (state.value == 1) {
    statetmp = `
        <option value="1">甘肃</option>
        <option value="2">四川</option>
        <option value="3">江苏</option>
        <option value="4">陕西</option>
    `;
    china.style.display = "block";
    USA.style.display = "none";
    japan.style.display = "none";
    Korea.style.display = "none";
    chinacity.style.display = "inline-block";
    USAcity.style.display = "none";
    japancity.style.display = "none";
    Koreacity.style.display = "none";
    china.innerHTML = statetmp;
    chinaprovince();
  } else if (state.value == 2) {
    statetmp = `
        <option value="1">纽约</option>
        <option value="2">华盛顿</option>
        <option value="3">加利福尼亚</option>
        <option value="4">阿拉斯加</option>
    `;
    USA.style.display = "block";
    china.style.display = "none";
    japan.style.display = "none";
    Korea.style.display = "none";
    chinacity.style.display = "none";
    USAcity.style.display = "inline-block";
    japancity.style.display = "none";
    Koreacity.style.display = "none";
    USA.innerHTML = statetmp;
    USAy();
  } else if (state.value == 3) {
    statetmp = `
    <option value="1">东京</option>
    <option value="2">北海道</option>
    <option value="3">大阪府</option>
    <option value="4">福冈县</option>

    `;
    japan.style.display = "block";
    china.style.display = "none";
    USA.style.display = "none";
    Korea.style.display = "none";
    chinacity.style.display = "none";
    USAcity.style.display = "none";
    japancity.style.display = "inline-block";
    Koreacity.style.display = "none";
    japan.innerHTML = statetmp;
    Japany();
  } else {
    statetmp = `
        <option value="1">首尔</option>
        <option value="2">釜山</option>
        <option value="3">大邱广域市</option>
        <option value="4">江原道</option>`;
    Korea.style.display = "block";
    china.style.display = "none";
    USA.style.display = "none";
    japan.style.display = "none";
    chinacity.style.display = "none";
    USAcity.style.display = "none";
    japancity.style.display = "none";
    Koreacity.style.display = "inline-block";
    Korea.innerHTML = statetmp;
    Koreay();
  }
  //  TODO 点击选择国家后出现省市
  state.onclick = function () {
    if (state.value == 1) {
      statetmp = `
              <option value="1">甘肃</option>
              <option value="2">四川</option>
              <option value="3">江苏</option>
              <option value="4">陕西</option>
          `;
      china.style.display = "block";
      USA.style.display = "none";
      japan.style.display = "none";
      Korea.style.display = "none";
      chinacity.style.display = "inline-block";
      USAcity.style.display = "none";
      japancity.style.display = "none";
      Koreacity.style.display = "none";
      china.innerHTML = statetmp;
      chinaprovince();
    } else if (state.value == 2) {
      statetmp = `
        <option value="1">纽约</option>
        <option value="2">华盛顿</option>
        <option value="3">加利福尼亚</option>
        <option value="4">阿拉斯加</option>
          `;
      USA.style.display = "block";
      china.style.display = "none";
      japan.style.display = "none";
      Korea.style.display = "none";
      chinacity.style.display = "none";
      USAcity.style.display = "inline-block";
      japancity.style.display = "none";
      Koreacity.style.display = "none";
      USA.innerHTML = statetmp;
      USAy();
    } else if (state.value == 3) {
      statetmp = `
          <option value="1">东京</option>
          <option value="2">北海道</option>
          <option value="3">大阪府</option>
          <option value="4">福冈县</option>
          `;
      japan.style.display = "block";
      china.style.display = "none";
      USA.style.display = "none";
      Korea.style.display = "none";
      chinacity.style.display = "none";
      USAcity.style.display = "none";
      japancity.style.display = "inline-block";
      Koreacity.style.display = "none";
      japan.innerHTML = statetmp;
      Japany();
    } else {
      statetmp = `
        <option value="1">首尔</option>
        <option value="2">釜山</option>
        <option value="3">大邱广域市</option>
        <option value="4">江原道</option>
`;
      Korea.style.display = "block";
      china.style.display = "none";
      USA.style.display = "none";
      japan.style.display = "none";
      chinacity.style.display = "none";
      USAcity.style.display = "none";
      japancity.style.display = "none";
      Koreacity.style.display = "inline-block";
      Korea.innerHTML = statetmp;
      Koreay();
    }
  };
}

// ! 中国省会的区
function chinaprovince() {
  // TODO 初始化选择省市后出现区
  if (china.value == 1) {
    chinatmp = `
          <option value="1">陇南 </option>
          <option value="2">兰州</option>
          <option value="3">酒泉</option>
          <option value="4">张掖</option>
          <option value="5">天水</option>
    `;
    gan.style.display = "block";
    chuan.style.display = "none";
    su.style.display = "none";
    shan.style.display = "none";
    gan.innerHTML = chinatmp;
  } else if (china.value == 2) {
    chinatmp = `
        <option value="1">成都</option>
              <option value="2">广元</option>
              <option value="3">遂宁</option>
              <option value="4">绵阳</option>
              <option value="5">南充</option>
    `;
    chuan.style.display = "block";
    gan.style.display = "none";
    su.style.display = "none";
    shan.style.display = "none";
    chuan.innerHTML = chinatmp;
  } else if (china.value == 3) {
    chinatmp = `
          <option value="1">南京</option>
          <option value="2">连云港</option>
          <option value="3">无锡</option>
          <option value="4">徐州</option>
          <option value="5">苏州</option>
    `;
    su.style.display = "block";
    gan.style.display = "none";
    chuan.style.display = "none";
    shan.style.display = "none";
    su.innerHTML = chinatmp;
  } else {
    chinatmp = `
        <option value="1">西安</option>
        <option value="2">延安</option>
        <option value="3">咸阳</option>
        <option value="4">宝鸡</option>
        <option value="5">榆林</option>`;
    shan.style.display = "block";
    gan.style.display = "none";
    chuan.style.display = "none";
    su.style.display = "none";
    shan.innerHTML = chinatmp;
  }
  //  TODO 点击选择省市后出现区
  china.onclick = function () {
    if (china.value == 1) {
      chinatmp = `
                <option value="1">陇南 </option>
                <option value="2">兰州</option>
                <option value="3">酒泉</option>
                <option value="4">张掖</option>
                <option value="5">天水</option>
          `;
      gan.style.display = "block";
      chuan.style.display = "none";
      su.style.display = "none";
      shan.style.display = "none";
      gan.innerHTML = chinatmp;
    } else if (china.value == 2) {
      chinatmp = `
              <option value="1">成都</option>
                    <option value="2">广元</option>
                    <option value="3">遂宁</option>
                    <option value="4">绵阳</option>
                    <option value="5">南充</option>
          `;
      chuan.style.display = "block";
      gan.style.display = "none";
      su.style.display = "none";
      shan.style.display = "none";
      chuan.innerHTML = chinatmp;
    } else if (china.value == 3) {
      chinatmp = `
                <option value="1">南京</option>
                <option value="2">连云港</option>
                <option value="3">无锡</option>
                <option value="4">徐州</option>
                <option value="5">苏州</option>
          `;
      su.style.display = "block";
      gan.style.display = "none";
      chuan.style.display = "none";
      shan.style.display = "none";
      su.innerHTML = chinatmp;
    } else {
      chinatmp = `
              <option value="1">西安</option>
              <option value="2">延安</option>
              <option value="3">咸阳</option>
              <option value="4">宝鸡</option>
              <option value="5">榆林</option>`;
      shan.style.display = "block";
      gan.style.display = "none";
      chuan.style.display = "none";
      su.style.display = "none";
      shan.innerHTML = chinatmp;
    }
  };
}

// ! 美国省会的区
function USAy() {
  // TODO 初始化选择省市后出现区
  if (USA.value == 1) {
    USAtmp = `
    <option value="1">布鲁克林 </option>
    <option value="2">皇后区</option>
    <option value="3">史丹顿岛</option>
    <option value="4">布朗克斯</option>
    `;
    niu.style.display = "block";
    hua.style.display = "none";
    jia.style.display = "none";
    a.style.display = "none";
    niu.innerHTML = USAtmp;
  } else if (USA.value == 2) {
    USAtmp = `
              <option value="1">亚当斯县</option>
              <option value="2">阿索廷县</option>
              <option value="3">本顿县</option>
              <option value="4">奇兰县</option>
              <option value="5">克拉勒姆县</option>
    `;
    hua.style.display = "block";
    niu.style.display = "none";
    jia.style.display = "none";
    a.style.display = "none";
    hua.innerHTML = USAtmp;
  } else if (USA.value == 3) {
    USAtmp = `
          <option value="1">洛杉矶</option>
          <option value="2">贝尔</option>
          <option value="3">旧金山</option>
          <option value="4">克莱顿</option>
          <option value="5">奥本</option>
    `;
    jia.style.display = "block";
    niu.style.display = "none";
    hua.style.display = "none";
    a.style.display = "none";
    jia.innerHTML = USAtmp;
  } else {
    USAtmp = `
    <option value="1">安克雷奇</option>
    <option value="2">费尔班克斯</option>
    <option value="3">朱诺</option>
    <option value="4">克奇坎</option>`;
    a.style.display = "block";
    niu.style.display = "none";
    hua.style.display = "none";
    jia.style.display = "none";
    a.innerHTML = USAtmp;
  }
  //  TODO 点击选择省市后出现区
  USA.onclick = function () {
    if (USA.value == 1) {
      USAtmp = `
        <option value="1">布鲁克林 </option>
        <option value="2">皇后区</option>
        <option value="3">史丹顿岛</option>
        <option value="4">布朗克斯</option>
          `;
      niu.style.display = "block";
      hua.style.display = "none";
      jia.style.display = "none";
      a.style.display = "none";
      niu.innerHTML = USAtmp;
    } else if (USA.value == 2) {
      USAtmp = `
      <option value="1">亚当斯县</option>
      <option value="2">阿索廷县</option>
      <option value="3">本顿县</option>
      <option value="4">奇兰县</option>
      <option value="5">克拉勒姆县</option>
          `;
      hua.style.display = "block";
      niu.style.display = "none";
      jia.style.display = "none";
      a.style.display = "none";
      hua.innerHTML = USAtmp;
    } else if (USA.value == 3) {
      USAtmp = `
      <option value="1">奥本</option>
      <option value="2">贝尔</option>
      <option value="3">旧金山</option>
      <option value="4">克莱顿</option>
      <option value="5">洛杉矶</option>
          `;
      jia.style.display = "block";
      niu.style.display = "none";
      hua.style.display = "none";
      a.style.display = "none";
      jia.innerHTML = USAtmp;
    } else {
      USAtmp = `
              <option value="1">安克雷奇</option>
              <option value="2">费尔班克斯</option>
              <option value="3">朱诺</option>
              <option value="4">克奇坎</option>`;
      a.style.display = "block";
      niu.style.display = "none";
      hua.style.display = "none";
      jia.style.display = "none";
      a.innerHTML = USAtmp;
    }
  };
}

// ! 日本省会的区
function Japany() {
  // TODO 初始化选择省市后出现区
  if (japan.value == 1) {
    japantmp = `
      <option value="1">新宿区 </option>
      <option value="2">千代田区</option>
      <option value="3">中央区</option>
      <option value="4">文京区</option>
      `;
    dong.style.display = "block";
    bei.style.display = "none";
    da.style.display = "none";
    fu.style.display = "none";
    dong.innerHTML = japantmp;
  } else if (japan.value == 2) {
    japantmp = `
                <option value="1">渡岛</option>
                <option value="2">桧山振兴局</option>
                <option value="3">上川</option>
                <option value="4">留萌</option>
                <option value="5">宗谷</option>
      `;
    bei.style.display = "block";
    dong.style.display = "none";
    da.style.display = "none";
    fu.style.display = "none";
    bei.innerHTML = japantmp;
  } else if (japan.value == 3) {
    japantmp = `
            <option value="1">吹田市</option>
            <option value="2">茨木市</option>
            <option value="3">岸和田市</option>
            <option value="4">寝屋川市</option>
            <option value="5">八尾市</option>
      `;
    da.style.display = "block";
    dong.style.display = "none";
    bei.style.display = "none";
    fu.style.display = "none";
    da.innerHTML = japantmp;
  } else {
    japantmp = `
      <option value="1">太宰府市</option>
      <option value="2">那珂川市</option>
      <option value="3">赤村</option>
      <option value="4">门司区</option>`;
    fu.style.display = "block";
    dong.style.display = "none";
    bei.style.display = "none";
    da.style.display = "none";
    fu.innerHTML = japantmp;
  }
  //  TODO 点击选择省市后出现区
  japan.onclick = function () {
    if (japan.value == 1) {
      japantmp = `
          <option value="1">新宿区 </option>
          <option value="2">千代田区</option>
          <option value="3">中央区</option>
          <option value="4">文京区</option>
          `;
      dong.style.display = "block";
      bei.style.display = "none";
      da.style.display = "none";
      fu.style.display = "none";
      dong.innerHTML = japantmp;
    } else if (japan.value == 2) {
      japantmp = `
                    <option value="1">渡岛</option>
                    <option value="2">桧山振兴局</option>
                    <option value="3">上川</option>
                    <option value="4">留萌</option>
                    <option value="5">宗谷</option>
          `;
      bei.style.display = "block";
      dong.style.display = "none";
      da.style.display = "none";
      fu.style.display = "none";
      bei.innerHTML = japantmp;
    } else if (japan.value == 3) {
      japantmp = `
                <option value="1">吹田市</option>
                <option value="2">茨木市</option>
                <option value="3">岸和田市</option>
                <option value="4">寝屋川市</option>
                <option value="5">八尾市</option>
          `;
      da.style.display = "block";
      dong.style.display = "none";
      bei.style.display = "none";
      fu.style.display = "none";
      da.innerHTML = japantmp;
    } else {
      japantmp = `
          <option value="1">太宰府市</option>
          <option value="2">那珂川市</option>
          <option value="3">赤村</option>
          <option value="4">门司区</option>`;
      fu.style.display = "block";
      dong.style.display = "none";
      bei.style.display = "none";
      da.style.display = "none";
      fu.innerHTML = japantmp;
    }
  };
}

// ! 韩国省会的区
function Koreay() {
  // TODO 初始化选择省市后出现区
  if (Korea.value == 1) {
    Koreatmp = `
        <option value="1">马达加斯加企鹅 </option>
        <option value="2">朴景惠</option>
        <option value="3">张艺馨</option>
        <option value="4">加尼福利亚</option>
        `;
    shou.style.display = "block";
    fushan.style.display = "none";
    daqiu.style.display = "none";
    jiang.style.display = "none";
    shou.innerHTML = Koreatmp;
  } else if (Korea.value == 2) {
    Koreatmp = `
                  <option value="1">渡岛</option>
                  <option value="2">桧山振兴局</option>
                  <option value="3">上川</option>
                  <option value="4">留萌</option>
                  <option value="5">宗谷</option>
        `;
    fushan.style.display = "block";
    shou.style.display = "none";
    daqiu.style.display = "none";
    jiang.style.display = "none";
    fushan.innerHTML = Koreatmp;
  } else if (Korea.value == 3) {
    Koreatmp = `
              <option value="1">吹田市</option>
              <option value="2">茨木市</option>
              <option value="3">岸和田市</option>
              <option value="4">寝屋川市</option>
              <option value="5">八尾市</option>
        `;
    daqiu.style.display = "block";
    shou.style.display = "none";
    fushan.style.display = "none";
    jiang.style.display = "none";
    daqiu.innerHTML = Koreatmp;
  } else {
    Koreatmp = `
        <option value="1">太宰府市</option>
        <option value="2">那珂川市</option>
        <option value="3">赤村</option>
        <option value="4">门司区</option>`;
    jiang.style.display = "block";
    shou.style.display = "none";
    fushan.style.display = "none";
    daqiu.style.display = "none";
    jiang.innerHTML = Koreatmp;
  }
  //  TODO 点击选择省市后出现区
  Korea.onclick = function () {
    if (Korea.value == 1) {
        Koreatmp = `
            <option value="1">首尔 </option>
            <option value="2">建发啥</option>
            <option value="3">的大大</option>
            <option value="4">文京区</option>
            `;
        shou.style.display = "block";
        fushan.style.display = "none";
        daqiu.style.display = "none";
        jiang.style.display = "none";
        shou.innerHTML = Koreatmp;
      } else if (Korea.value == 2) {
        Koreatmp = `
                      <option value="1">渡岛</option>
                      <option value="2">桧山振兴局</option>
                      <option value="3">上川</option>
                      <option value="4">留萌</option>
                      <option value="5">宗谷</option>
            `;
        fushan.style.display = "block";
        shou.style.display = "none";
        daqiu.style.display = "none";
        jiang.style.display = "none";
        fushan.innerHTML = Koreatmp;
      } else if (Korea.value == 3) {
        Koreatmp = `
                  <option value="1">吹田市</option>
                  <option value="2">茨木市</option>
                  <option value="3">岸和田市</option>
                  <option value="4">寝屋川市</option>
                  <option value="5">八尾市</option>
            `;
        daqiu.style.display = "block";
        shou.style.display = "none";
        fushan.style.display = "none";
        jiang.style.display = "none";
        daqiu.innerHTML = Koreatmp;
      } else {
        Koreatmp = `
            <option value="1">太宰府市</option>
            <option value="2">那珂川市</option>
            <option value="3">赤村</option>
            <option value="4">门司区</option>`;
        jiang.style.display = "block";
        shou.style.display = "none";
        fushan.style.display = "none";
        daqiu.style.display = "none";
        jiang.innerHTML = Koreatmp;
      }
  };
}
