const binaryArrayToNumber = arr => {
    const newArr = [];
    let prev ;
    let next = 1;
    for(let i = 0; i<=arr.length;i++){
        prev = i+i;
        newArr.push(prev)
        
    }
    newArr[0] = 1;
    const binary =  newArr.reverse();

    return binary;
  };

console.log(binaryArrayToNumber([0,0,0,0,1]));