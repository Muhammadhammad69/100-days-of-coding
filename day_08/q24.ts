//Equality of Strings.
console.log("hammad" == "hammad"); //true
// console.log("hammad" == "hammaD"); //false 

// testing with lower case function.
console.log("HAmmad".toLowerCase()  === "hammad"); // true.

//greater and less than.
console.log(10 > 5) // true
console.log(10 < 5) // false

//greater and less than equal to 
console.log(10 >= 10) // true
console.log(5 <= 5) // true.

// test whether is item is available in array or not.

let country: string[] = ["Pakistan", "Japan", "United States of America"];
console.log("is japan in county?");
console.log(country.includes("japan")) //true.

console.log("is london in county?");
console.log(country.includes("london")) //false
