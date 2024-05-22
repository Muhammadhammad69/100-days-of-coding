function adder(addValue) {
    return (newValue) => {
        return addValue + newValue;
    };
}
;
let addSix = adder(6);
console.log(addSix(12));
console.log(addSix(15));
export {};
