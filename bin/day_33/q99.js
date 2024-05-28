import chalk from "chalk";
// this function return next birthday.
function nextBirthday(date, month) {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let brithday = new Date(`${month}-${date}-${year}`);
    if (currentDate >= brithday) {
        brithday.setFullYear(year + 1);
        return {
            nextBirthdayDate: brithday,
            text: `Today is your birthday and your next birthday is`
        };
    }
    else {
        return {
            nextBirthdayDate: brithday,
            text: `Today is your birthday`
        };
    }
}
;
let namesOfDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Firday",
    "Saturday"
];
let result = nextBirthday(28, 5);
let day = namesOfDays[result.nextBirthdayDate.getDay()];
// console.log(namesOfDays[day]);
console.log(`${result.text} ${chalk.green(result.nextBirthdayDate.toLocaleDateString())} and your birthday day is ${chalk.green(day)}`);
