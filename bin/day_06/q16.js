// guests 
let guests = ["bob", "albert", "john"];
console.log("I found a bigger dinner table");
// add new guest
guests.push("michael");
guests.splice(guests.indexOf("albert"), 0, "fraklin");
guests.unshift("potter");
// send new invitation.
guests.forEach((guests) => {
    console.log(`Dear ${guests} would you to like to join dinner.`);
});
export {};
