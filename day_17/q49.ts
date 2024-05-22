// create a function that receive multiple hobbies.
function receiveHobbies(...hobbies:string[]){
//That loops print each hobby    
hobbies.forEach((hobby) => {
    console.log(`You enjoy ${hobby}`);
})
};

receiveHobbies("cricket", "gaming", "watching football");