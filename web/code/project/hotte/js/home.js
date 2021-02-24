// TODO 轮播
    var mySwiper = new Swiper(".swiper-container", {
    //   初始化Swiper
      autoplay: {
        // 自动切换
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      pagination: {
        //分页器
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        //前进后退
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
      },
      loop: true, //循环
    });



// 置顶
    /*置顶功能*/
    $(function(){
        $(window).bind('scroll', {
            fixedOffsetBottom: parseInt($('#Fixed').css('bottom'))
        },
        function(e) {
            var scrollTop = $(window).scrollTop();
            var referFooter =$('#footer');
            scrollTop > 100 ? $('#goTop').show() : $('#goTop').hide();
            if (!/msie 6/i.test(navigator.userAgent)) {
                if ($(window).height()-(referFooter.offset(0).top - $(window).scrollTop()) > e.data.fixedOffsetBottom) {
                    $('#Fixed').css('bottom', $(window).height() - (referFooter.offset().top - $(window).scrollTop()))
                } else {
                    $('#Fixed').css('bottom', e.data.fixedOffsetBottom)
                }
            }
        });
    
        $('#goTop').click(function() {
            $('body,html').stop().animate({
                'scrollTop': 0,
                'duration': 100,
                'easing': 'ease-in'
            })
        });
        });
        /*置顶功能 end*/



        // TODO 移动端导航栏弹出
// mb();
// function mb() {
//   $(".mb-list").on("click",function(event){
//     isShow = true
//     $(".move-nav").slideDown()
//     event.stopPropagation()
// })
// $(".navbar").on("click",function(e){
//     isShow = false
//     $(".move-nav").slideUp()
// })
// }


let isShow = false
    $(".mb-nav").on("click",function(event){
        if(!isShow){
            isShow = true
            $(".move-nav").slideDown()
        }else{
            isShow = false
            $(".move-nav").slideUp()
        }
        // event.stopPropagation()
    })


// TODO 定时器
var p1 = document.querySelector(".time>.p1");
var span = document.querySelectorAll(".time>.p1>span");
console.log(span);

setInterval(function(){
    p1.style.color = "#c5331f";
    span[0].style.fontWeight = "600";
    span[1].style.fontWeight = "600";
  },1000)

  setInterval(function(){
      p1.style.color = " #b61904";
      span[0].style.fontWeight = "500";
      span[1].style.fontWeight = "500";
  
  },3000)




// // TODO PC端导航栏固定
//   let wrap = document.querySelector(".pc-wrape");
//   console.log(wrap);
//   window.onscroll = function () {
//     if (window.pageYOffset >= wrap.offsetHeight) {
//      wrap.style.position = "fixed";

//     } else {
//         wrap.style.position = "";
//     }
//   };
//   window.onresize = function () {
//     if (window.pageYOffset < wrap.offsetHeight && window.innerWidth > 770) {
//         wrap.style.position = "fixed"

//     }
//   };


// 点击下拉列表
let pages  = document.querySelector(".pages");
let pageser = document.querySelector(".pageser > ul");
let pagesee = document.querySelector(".pageser > ul > li");

pages.onclick = function(){
    if(pageser.getAttribute("class") == "pageser curr"){
    pageser.classList.remove("curr");

    }else{
    pageser.classList.add("curr");
    }
}

