
let favouriteFruits: string[] = ["Mango", "Apple", "Orange", "Grapes"];

//this function receive an array and return the last element of the array.
function removedElement(): string | undefined {
    return favouriteFruits.pop(); //removed the last element of the array and return.
};

console.log(removedElement());//output is last element of array is "Grapes".