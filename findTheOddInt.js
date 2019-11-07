function findOdd(A) { 
  var count = 0;
  for(var i = 0; i < A.length; i++) {

    for(var j = 0; j < A.length; j++) {
          if(A[i] == A[j]) {
            count++;
          }
        }
    if (count % 2 !== 0) {
        return A[i];
        
    }
  }
  count = 0;
}
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))
