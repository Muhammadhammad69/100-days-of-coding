let magician: string[] = ["Bob", "Allie", "Grace"];

function makeGreat(magicianNames:string[]){
    
magicianNames.forEach((names) => {
    magician[magician.indexOf(names)] = `${names} the Great`;
})
};

function showMagician(magicianNames:string[]){
magicianNames.forEach((names) => {
    console.log(names);
})
}

makeGreat(magician);
showMagician(magician);