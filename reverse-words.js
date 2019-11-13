function reverseWords(str) {
    let newArr = [];
    for(let i = str.length-1; i>=0 ;i--){
        const el = str[i];
        newArr.push(el);
    }
    return newArr.join('').split(' ').reverse().join(' ');
    
};

console.log(reverseWords('words'))