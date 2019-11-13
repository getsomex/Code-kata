//https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript


function findUniq(arr) {
    let fArr = [];
    for(let i =0; i<arr.length;i++){
       if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
           return arr[i]
       }
    }  
}
console.log(findUniq([  1,1,0,2,0 ]))  