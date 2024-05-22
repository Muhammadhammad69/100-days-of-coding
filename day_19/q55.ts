let num = [2, 4, 6, 8, 15, 7];

let trickArray = num.map((double) => {
return double % 2 === 0; 
});
// let testing = num.filter((condition) => {
//     return condition * 2;
// })
// num.forEach((double) => {
//     trickArray.push(double);
//     trickArray.push(double);
// });

console.log(trickArray);
