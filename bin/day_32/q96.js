//declare the array of number.
let num = [45, 54, 98, 101, 5220, 620, 9, 10];
let num1 = [];
const sum = num1.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(sum);
export {};
