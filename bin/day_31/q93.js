//favourite fruits list.
let favouriteFruits = ["Mango", "Apple", "Orange", "Grapes"];
console.log("log before the replace", favouriteFruits);
//Find the index of "orange" and replace the orange with "Banana".
//so first find the index of "orange".
let index = favouriteFruits.indexOf("Orange");
//now replace the "orange" with "Banana".
favouriteFruits.splice(index, 1, "Banana");
console.log("log after the replace", favouriteFruits);
export {};
