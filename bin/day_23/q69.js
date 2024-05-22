function divideAndRemainder(num1, num2) {
    let result = {
        quotient: Math.floor(num1 / num2),
        remainder: num1 % num2
    };
    return result;
}
;
console.log(divideAndRemainder(15, 12));
export {};
