var friendNames = ["alice", "bob", "pop"];
for (var i = 0; i < friendNames.length; i++) {
    console.log("Hello ".concat(friendNames[i].charAt(0).toUpperCase() + friendNames[i].slice(1).toLowerCase(), " would you like to learn some TypeScript today?"));
}
