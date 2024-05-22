let mixTypesArray = ["hamamd", 25, "bob", true, "alice", false, 89, "john"];
let wordArray = mixTypesArray.filter((items) => {
    return typeof (items) === "string";
});
console.log(wordArray);
export {};
