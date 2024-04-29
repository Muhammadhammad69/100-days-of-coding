let friendNames: string[] = ["alice", "bob", "pop"];
for(let i = 0; i < friendNames.length; i++){
    console.log(`Hello ${friendNames[i].charAt(0).toUpperCase() + friendNames[i].slice(1).toLowerCase()} would you like to learn some TypeScript today?`);
}