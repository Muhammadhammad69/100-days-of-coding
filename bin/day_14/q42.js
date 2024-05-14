"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magician = ["Bob", "Allie", "Grace"];
function makeGreat(magicianNames) {
    magicianNames.forEach((names) => {
        magician[magician.indexOf(names)] = `${names} the Great`;
    });
}
;
function showMagician(magicianNames) {
    magicianNames.forEach((names) => {
        console.log(names);
    });
}
makeGreat(magician);
showMagician(magician);
