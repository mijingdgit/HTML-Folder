function Boxbuttle(box, bbox) {
 
 
    this.box = box;
    this.bbox = bbox;
    this.flag = true;
    this.init();
    this.box.addEventListener("mouseover", this.show.bind(this));
    this.box.addEventListener("mouseout", this.show.bind(this));
  }
  Boxbuttle.prototype.init = function () {
    
    this.box = document.querySelector(this.box);
    console.log(this.box);
    this.bbox = document.querySelector(this.bbox);
    console.log(this.bbox);
  };
  Boxbuttle.prototype.show = function () {
    
    if (this.flag) {
      this.flag = false;
      this.bbox.classList.add("curr");
    } else {
      this.flag = true;
      this.bbox.classList.remove("curr");
    }
    
  };