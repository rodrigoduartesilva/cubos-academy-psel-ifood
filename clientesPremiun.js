function solucao(precos) {
   let total = 0;
   let i = 0;
   let result1;
   let result2;
    
   while(i <= precos.length){
        if(precos[i] > 200){
            result1 = true;
            break;
        }else {
            result1 = false;
        }
        i++; 
  }
  if(total = precos.reduce((total, precos) => total + precos) > 1000){
        result2 = true;
  }else{
        result2 = false;
  }
    
  if(result1 == false && result2 == true){
        console.log("VIP");
  }else if(result1 == false && result2 == false || result1 == true && result2 == false){
        console.log("NORMAL");    
  }else if(result1 == true && result2 == true){
        console.log("PREMIUM");
  }
}