function replaceWord(str) {
    let lowerCase = str.toLowerCase(); // convert into lower case.
    //replace the word javascript to Typescript.
    let replace = lowerCase.replaceAll("javascript", "Typescript");
    console.log(replace);
}
replaceWord("I like Javascript and learn more javascript");
export {};
