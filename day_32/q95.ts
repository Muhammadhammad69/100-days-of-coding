// define the numbers of array. 
let num: number[] = [8, 10, 15, 19, 24, 2, 6, 56, 78, 9, 85];

function greaterThan(){
  let greaterThanTen =  num.filter(item => item > 10);//filter method create a new array on the basic of condition if the value of index is greater than 10 so it will be added in new array otherwise the do not added.
  return greaterThanTen; //perform the task and return the array. 
};

console.log(greaterThan()); // output is an array and all the index value is greater than 10.