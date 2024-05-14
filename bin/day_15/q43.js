"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magician = ["Bob", "Allie", "Grace"];
function makeGreat(magicianNames) {
    let greatMagician = [];
    magicianNames.forEach((names) => {
        greatMagician.push(`${names} the Great Magician.`);
    });
    return greatMagician;
}
function showMagician(magicianNames, greatMagician) {
    magicianNames.forEach((names) => {
        console.log(names); // print the original array.
    });
    greatMagician.forEach((names) => {
        console.log(names); // print modified array.
    });
}
// Two method show original and modified array .
//Method number one.
let greatMagician = makeGreat(magician); // return a new array of magician.
showMagician(magician, greatMagician);
//Method number two.
showMagician(magician, makeGreat(magician)); // makeGreat() function return a new array and pass in argument.
