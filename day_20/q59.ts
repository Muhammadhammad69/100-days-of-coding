function adder(addValue: number) {
    return (newValue: number): number => {
        return addValue + newValue;
    }
};
let addSix = adder(6);

console.log(addSix(12)) 
console.log(addSix(15))