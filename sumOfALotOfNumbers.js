//https://www.codewars.com/kata/gauss-needs-help-sums-of-a-lot-of-numbers/train/javascript
function f(n){
    if(Number.isInteger(n) && n>0){
        let el = 0;
        for(let i = 1; i<=n; i++){
            el += i;
        }
        return el;
    } else {
        return false;
    }
    

};

console.log(f(12))