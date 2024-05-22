// Default parameter function.
function greeting(name = "anonymous") {
    console.log(`Hello ${name}`); // print the name.
}
;
greeting(); // output is Hello anonymous.
greeting("John"); // output is Hello John.
export {};
