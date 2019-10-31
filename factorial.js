function factorial(n){
    if(n>=0 && n<=12){
        let res=1;
        for( let i = 1; i<=n; i++){
          res*=i;
        }
        return res;
    } else {
        throw RangeError;
    }
   
}


console.log(factorial(13))
