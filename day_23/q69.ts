type Remainder = {
    quotient: number;
    remainder: number;
}
function divideAndRemainder(num1: number, num2: number): Remainder {

    let result: Remainder = {
        quotient: Math.floor(num1 / num2),
        remainder: num1 % num2
    };

    return result;
};

console.log(divideAndRemainder(15, 12));