//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num){







  



  return Number((JSON.stringify(num).split('').map((el => el*el)).join('')))














}

console.log(squareDigits(42));

