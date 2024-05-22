function makeShirt(size = "large", message = "I love typescript") {
    console.log(`
Making a ${size} size of t-shirt, write the message (${message}) printed on it!
`);
}
;
makeShirt();
makeShirt("medium");
makeShirt("small", "Practice is EveryThing");
export {};
