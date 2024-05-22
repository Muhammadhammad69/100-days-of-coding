let pricesOne = [40000, 90000, 55000];
let pricesTwo = [50000, 45000, 60000];

let compPrices = [...pricesOne, ...pricesTwo]
// console.log(compPrices);
let length = compPrices.length;
while(length !== 1){

    for(let i = 0; i < length; i++){
        if(compPrices[i] > compPrices[i + 1]){
            let tempvalue = compPrices[i];
            compPrices[i] = compPrices[i + 1];
            compPrices[i + 1] = tempvalue;
        }
    }
    length--;
    // console.log("hello");
    
};
console.log(compPrices);
