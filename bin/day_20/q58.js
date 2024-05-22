import inquirer from "inquirer";
let userInfo = await inquirer.prompt([
    {
        message: "Enter Your score? (Your Scorce look like. 00,11,22)",
        type: "input",
        name: "userScore"
    }
]);
console.log(typeof (userInfo.userScore));
let userScore = userInfo.userScore.split(",");
let result = userScore.reduce((acc, curr) => {
    // console.log("acc =>", acc, "curr =>", curr);
    return Number(acc) + Number(curr);
}) / userScore.length;
// console.log(userScore)
console.log(`Your number is ${userScore} and the average of score is ${result}`);
