let currentDate = new Date(); // print the current date.
let newYearDate = new Date("01-01-2025"); // print the new year date.
let remainingTime = newYearDate.getTime() - currentDate.getTime(); //print the remaining time in milliseconds.
let remainingDays = Math.ceil(remainingTime / 86400000); // convert millisecond into days (86400000) is one day millisecond value.
console.log(`${remainingDays} days remaining in the new year`);
export {};
