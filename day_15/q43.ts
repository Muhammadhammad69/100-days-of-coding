let magician: string[] = ["Bob", "Allie", "Grace"];

function makeGreat(magicianNames: string[]) {
    let greatMagician: string[] = [];
    magicianNames.forEach((names) => {
        greatMagician.push(`${names} the Great Magician.`);
    });
    return greatMagician;
}

function showMagician(magicianNames:string[], greatMagician:string[]){
    magicianNames.forEach((names) => {
        console.log(names);// print the original array.
    });
    greatMagician.forEach((names) => {
        console.log(names);// print modified array.
    });
}

// Two method show original and modified array .
//Method number one.

let greatMagician: string[] = makeGreat(magician); // return a new array of magician.
showMagician(magician, greatMagician);

//Method number two.

showMagician(magician, makeGreat(magician));// makeGreat() function return a new array and pass in argument.