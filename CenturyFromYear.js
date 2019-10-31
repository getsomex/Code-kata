function century(year) {
    return --year/100+1 | 0;
};


const arr = [1,2,3,4];

const addToSum = (sum,number) => {
    sum += number;
    return sum;
}
const r = arr.reduce(addToSum,0);

console.log(r);
