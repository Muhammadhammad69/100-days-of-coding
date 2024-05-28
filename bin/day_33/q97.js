/* declare the currentDate function this function return
current date in this format (DD-MM-YYYY).*/
function currentDate() {
    let currDate = new Date();
    let date = String(currDate.getDate()).padStart(2, "0");
    let month = (currDate.getMonth() + 1).toString().padStart(2, "0");
    let year = currDate.getFullYear();
    // console.log(day, month, year);
    return `${date}-${month}-${year}`; //return the current date.
}
;
console.log(currentDate()); //output is today date.
export {};
