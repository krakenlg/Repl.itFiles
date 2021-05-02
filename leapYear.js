var readLineSync = require('readline-sync');
var chalk = require('chalk');

function leapYearCheck(result){
  if ((result % 400 == 0) || (result % 100 != 0) && (result % 4 == 0))
    console.log(chalk.bgGrey(result + " is a leap year"));
  else
    console.log(chalk.bgGrey(result + " is not a leap year"));
}

console.log("Were you born on a leap year?");
console.log("----------");
var userName = readLineSync.question("What's your name? ");

console.log(chalk.green("Welcome ") + chalk.bgRed(userName));
console.log("----------");

var userDate = readLineSync.question("What's your date of birth? Please provide in the format(YYYY-MM-DD):");
console.log("----------");

var result = userDate.split("-");
if ((result.length == 3) && (result[1] <= 12) && (result[2] <= 31) )
  leapYearCheck(result[0])
else
  console.log(chalk.bgRed("The format of the date is wrong! Please use the mentioned format"));
