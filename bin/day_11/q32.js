// current users of the website.
let currentUsers = [
    "Eric",
    "bob",
    "John",
    "admin",
    "fraklin",
    "tokoyo",
    "berlin",
    "marshall",
    "stark"
];
// new user is recently registered.
let newUsers = [
    "stark",
    "tokoyo",
    "John",
    "shakira",
    "fraklin"
];
// Method one to solve this question.
// newUsers.forEach((new_Users) => {
//     let result = currentUsers.some(
//         (currUsers) => currUsers.toLowerCase() === new_Users.toLowerCase() // some() compare the value of two arrays and return boolean.
//     );
// if(result){
//     console.log(`${new_Users} is already taken.`);
// }else {
//     console.log(`${new_Users} is available.`);
// }
// })
// Method two to solve this same question.
for (let i = 0; i < newUsers.length; i++) {
    if (currentUsers.includes(newUsers[i])) {
        console.log(`${newUsers[i]} is already taken`);
    }
    else {
        console.log(`${newUsers[i]} is available.`);
    }
}
export {};
