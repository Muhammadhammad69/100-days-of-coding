//This profile sets itself up and can share info about the user using IIFE concept

let userProfile = ((name, age)=> {
    let userName = name;
    let userAge = age;

    return {
        displayUserInfo: () => {
        console.log(`Name: ${userName}, Age: ${userAge}`);
        }
    }
})("Alice", 25);


userProfile.displayUserInfo(); //this Immediately Involved Function Expression (IIFE) return the user Info. 

/* just practice of IIFE not a question.
(() => {console.log("hello")})();
((name) => {
    console.log(`Greeting ${name}`);
    
})("bob"); */