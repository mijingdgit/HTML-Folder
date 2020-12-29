function Sudoku(selector) {
    this.content = document.querySelector(selector);
    // console.log(this.content);
    this.uli = document.querySelector(`${selector}>ul`);
    this.li = document.querySelectorAll(`${selector}>ul>li`);
    this.a = document.querySelector(`${selector}>ul>a`);
    this.tmp = null;
    this.a.addEventListener("click",this.fn.call(this,4000));
    this.i=0
}
// 获取节点
Sudoku.prototype.fn = function(time){
    let t = 0
    // console.log(time);
    return ()=>{
        let timer = new Date()
        if(timer-t>time){
            this.show()
            t = timer
        }
        // console.log(1);
    }
    // return function
}
Sudoku.prototype.show = function(){
    let num = Math.floor(Math.random() * this.li.length) + 20;
    if(this.i<num){
        this.tmp = setInterval(()=> {
            for(let j = 0; j < this.li.length;j++){
                this.li[j].classList.remove("curr");
            }
            this.li[this.i%this.li.length].classList.add("curr");
            this.i++;
            console.log(this.i);
            if(this.i === num){
                this.i=0
                clearInterval(this.tmp);
            }

        },130);
    }
    
}

