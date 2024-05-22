let car = {
    company: "Toyota",
    model: "Corolla",
    color: "Blue",
    year: 2005
};
function obj(obj) {
    for (let keys in obj) {
        console.log(`${keys}: ${obj[keys]}`);
    }
}
;
obj(car);
export {};
