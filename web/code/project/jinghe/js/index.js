// TODO 轮播
(function () {
  //大轮播
  var mySwiper = new Swiper(".swiper-container", {
    //初始化Swiper
    autoplay: {
      //自动切换
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    pagination: {
      //分页器
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true, //循环
  });
  // 小轮播
  var mySwiper = new Swiper(".swiper-container1", {
    //初始化Swiper
    autoplay: {
      //自动切换
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    navigation: {
      //前进后退
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true, //循环
  });
})();

fixed();
// TODO PC端导航栏固定
function fixed() {
  let wrap = document.querySelector(".warp");
  let warper = document.querySelector(".warper");
  window.onscroll = function () {
    if (window.pageYOffset >= wrap.offsetHeight) {
      warper.classList.add("fixed");
    } else {
      warper.classList.remove("fixed");
    }
  };
  window.onresize = function () {
    if (window.pageYOffset < wrap.offsetHeight && window.innerWidth > 770) {
      warper.classList.remove("fixed");
    }
  };
}
// TODO 移动端导航栏弹出
mb();
function mb() {
  let sp  = $(".sp");
  $(".mb-btn").on("click",function(event){
    for(let i = 0; i<sp.length;i++){
      sp[i].style.background = "#E3141F";
    }
    isShow = true
    $(".nav-uli").slideDown()
    event.stopPropagation()
})
$(".headermb").on("click",function(){
  for(let i = 0; i<sp.length;i++){
    sp[i].style.background = "#090909";
  }
    isShow = false
    $(".nav-uli").slideUp()
})
}
