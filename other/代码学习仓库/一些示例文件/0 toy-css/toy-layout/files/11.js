let vWidthElm = document.querySelector(".v-width-value");
let firstVal = document.querySelector(".val-1");
let secondVal = document.querySelector(".val-2");
let threeVal = document.querySelector(".val-3");
let elm = document.querySelector(".element");
let actualWidth = document.querySelector(".w-actual");

function resizeWindow() {
  // ! get css pixel ratio
  let vWidth = window.innerWidth;

  //  ! core code ========================================================
  // ?  get css pixel ratio
  //   a = window.screen.width;

  // ? get true display device Pixel Ratio;
  // value = window.devicePixelRatio;
  // ! ==================================================================
  vWidthElm.innerHTML = vWidth + "px";

  if (vWidth < 1000 && vWidth > 200) {
    firstVal.classList.add("dimmed");
    secondVal.classList.add("active");
    threeVal.classList.add("dimmed");

    firstVal.classList.remove("active");
    secondVal.classList.remove("dimmed");
    threeVal.classList.remove("active");
  } else if (vWidth < 200) {
    firstVal.classList.add("active");
    secondVal.classList.add("dimmed");
    threeVal.classList.add("dimmed");

    firstVal.classList.remove("dimmed");
    secondVal.classList.remove("active");
    threeVal.classList.remove("active");
  } else {
    firstVal.classList.add("dimmed");
    secondVal.classList.add("dimmed");
    threeVal.classList.add("active");

    firstVal.classList.remove("active");
    secondVal.classList.remove("active");
    threeVal.classList.remove("dimmed");
  }

  actualWidth.innerHTML = elm.getBoundingClientRect().width + "px";
}

resizeWindow();

window.addEventListener("resize", resizeWindow);
