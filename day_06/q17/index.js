"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// q 16 answer.
let inviteToDinner = ["bob", "albert", "john"];
console.log("I found a bigger dinner table");
// add new guest
inviteToDinner.push("michael");
inviteToDinner.splice(inviteToDinner.indexOf("albert"), 0, "fraklin");
inviteToDinner.unshift("potter");
// q17 answer
console.log(`unfortunately!, I can invite only two people for dinner`);
// removing guest.
while (inviteToDinner.length > 2) {
    let randomNumber = Math.round(Math.random() * 1);
    let removedGuest;
    if (randomNumber === 0) {
        removedGuest = inviteToDinner.shift();
    }
    else {
        removedGuest = inviteToDinner.pop();
    }
    console.log(`Sorry ${removedGuest} you are invited for dinner.`);
}
// still invited guest in the dinner.
inviteToDinner.forEach((guest) => {
    console.log(`Dear ${guest} you are still invited to dinner`);
});
inviteToDinner.splice(0, inviteToDinner.length);
console.log(inviteToDinner);
