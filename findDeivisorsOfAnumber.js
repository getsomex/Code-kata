function getDivisorsCnt(n){
    let el = 0;
   for(let i =0; i<=n ; i++){     
       if(n%i===0){
        el++      
        }         
    }
   return (el)
}

console.log (getDivisorsCnt(30));
