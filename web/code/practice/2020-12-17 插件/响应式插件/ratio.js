    boxRatio(".ratio");
      function boxRatio(selector, ratio) {
       
        function drawRatio(box, ratio) {
          let boxWidth = box.offsetWidth;
          box.style.height = ratio * boxWidth + "px";
        }
       
        function loopRatio() {
          for (let i=0; i < box.length; i++) {
            // getAttribute() 方法返回指定属性名的属性值。
            let ratioValue = box[i].getAttribute("data-ratio");

            if (ratio !== undefined) {
              ratio = ratioValue;
            }
            drawRatio(box[i], ratioValue);
          }
        }

        var box = document.querySelectorAll(selector);
        loopRatio();
        window.addEventListener("resize", function () {
          loopRatio();
        });
      }