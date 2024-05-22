//function declaration.

function square(num:number){
    return num**2;
};

// expression function.
const Expsquare = function (number:number):number{
    return number**2;  
};

console.log(square(6)) //output is 36.
console.log(Expsquare(6)) //output is 36.
//