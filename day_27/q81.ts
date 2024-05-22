type CarType = { // declare the type alias of object.
company: string;
model: string;
color: string;
year: number;
}
let car:CarType = {
    company: "Toyota",
    model: "Corolla",
    color: "Blue",
    year: 2005
};

function obj(obj:any){
for(let keys in obj){
    console.log(`${keys}: ${obj[keys]}`);
    //it's print the property and values of object.
}
};

obj(car);//call the function obj and give object as argument.

