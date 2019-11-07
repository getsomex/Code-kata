function incrementString (str) {
    const a = str.split('');
   
 const x =   a.map((el,ind,arr) => {
  
     if(ind=== arr.length-1){
        return Number(el).toString() ==='NaN'? el+1 : Number(el)+1
     } else {
        console.log('Hello')
     }
     return arr[ind]
    });
   return x.join('')
  }

  console.log(incrementString('a'))