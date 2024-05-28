let car = {
    company: "Toyota",
    model: "Corolla",
    color: "Blue",
    year: 2005
};
function obj(obj) {
    for (let keys in obj) {
        console.log(`${keys}: ${obj[keys]}`);
        //it's print the property and values of object.
    }
}
;
obj(car); //call the function obj and give object as argument.
export {};
