function multiplying(...decimalValues:number[]){
    let product = decimalValues[0] * decimalValues[1];
    return product.toFixed(2);
};

console.log(multiplying(0.1, 0.2))