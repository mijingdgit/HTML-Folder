function Sudoku(selector) {
    this.content = document.querySelector(selector);
    // console.log(this.content);
    this.uli = document.querySelector(`${selector} ul`);
    this.li = document.querySelectorAll(`${selector} ul li`);
    this.a = document.querySelector(`${selector} ul a`);
    this.tmp = null;   
    this.a.addEventListener("click",this.show.bind(this));
    this.lastTime = new Date();

}

// 获取节点
Sudoku.prototype.show = function(){
    let i = 0;
    var num = Math.floor(Math.random() * this.li.length) + 20;
    if(new Date-this.lastTime>3120){
        if(i<num){
            this.tmp = setInterval(()=> {
                for(j = 0; j < this.li.length;j++){
                    this.li[j].classList.remove("curr");
                }
                this.li[i%this.li.length].classList.add("curr");
                i++;
                if(i === num){
                    clearInterval(this.tmp);
                }
            },130);

        }

        this.lastTime = new Date();
    }
   
}

