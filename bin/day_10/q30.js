let userNames = [
    "Eric",
    "bob",
    "John",
    "admin",
    "fraklin",
    "tokoyo",
    "berlin",
    "marshall"
];
userNames.forEach((names) => {
    if (names.toLowerCase() === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else if (names.toLocaleLowerCase() !== "admin") {
        console.log(`Hello ${names}, thank you for logging in again.`);
    }
});
export {};
