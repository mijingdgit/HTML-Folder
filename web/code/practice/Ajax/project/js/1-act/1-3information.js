window.onload = ()=>{
  let cardtext = $(".cardtext");
  let birthday1 = $(".birthday1");
  let birthday2 = $(".birthday2");
  
  cardtext.innerHTML = localStorage.cardNum;
  age();
  function age(){
    birthday1.onchange = function(){  
      let birthday1 = $(".birthday1");
      let operant1 = $(".operant1");
      let birthdayValue1 = birthday1.value;
      let birdate1 = birthdayValue1.split("-");
      let date1 = Date();
      let datenew1 = date1.split(" ");
      operant1.innerHTML = datenew1[3]-Number(birdate1[0]);
    }
    birthday2.onchange = function(){  
      let birthday2 = $(".birthday2");
      let operant2 = $(".operant2");
      let birthdayValue2 = birthday2.value;
      let birdate2 = birthdayValue2.split("-");
      let date2 = Date();
      let datenew2 = date2.split(" ");
      operant2.innerHTML = datenew2[3]-Number(birdate2[0]);
    }
  }
  
}

