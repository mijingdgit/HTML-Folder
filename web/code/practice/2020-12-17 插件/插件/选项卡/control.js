function Tab(selector) {
  
    this.nav = document.querySelector(selector);
  
    this.ul = document.querySelector(`${selector}>ul`);
    this.li = document.querySelectorAll(`${selector}>ul>li`);
    this.a = document.querySelectorAll(`${selector}>ul>li>a`);
    this.cont = document.querySelector(`${selector}>div`);
    this.cons = document.querySelectorAll(`${selector}>div>div`);

    this.init();
    this.changnav(0);
    this.changcons(0);

    for(let i = 0;i<this.a.length;i++){
      this.a[i].onclick = ()=>{
        this.init();
        this.changnav(i);
        this.changcons(i);
      }
    }


  }


    Tab.prototype.init = function(){
      for(let j=0;j<this.a.length;j++){
      this.a[j].classList.remove("curr");
      this.cons[j].style.display = "none";
    }
    }
    Tab.prototype.changnav = function(idx){
      this.a[idx].classList.add("curr");
    }
    Tab.prototype.changcons = function(idx){
      this.cons[idx].style.display = "block";
    }

