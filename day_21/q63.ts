type Shape = {
    type: "Circle" | "Rectangle";
    radius?: number; // only for Circle.
    width?: number;// only for rantangle.
    height?: number; // only for rantangle.
};

let circle: Shape = {
    type: "Circle",
    radius: 6
};

let rantangle: Shape = {
    type: "Rectangle",
    width: 6,
    height: 8
};

//showing that

console.log(circle) // this is a circle.
console.log(rantangle) //Here is the rantangle.

