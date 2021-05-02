var readLineSync = require('readline-sync');
var chalk = require('chalk');

var isPrime = true;

function primNumberCheck(result){
  // check if number is equal to 1
if (result === 1) {
    console.log("Neither Prime nor Composite number.");
}

// check if number is greater than 1
else if (result > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < result; i++) {
        if (result % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${result} is a prime number`);
    } else {
        console.log(`${result} is a not prime number`);
    }
}

}

console.log("Were you birth date is a prime number?");
console.log("----------");
var userName = readLineSync.question("What's your name? ");

console.log(chalk.green("Welcome ") + chalk.bgRed(userName));
console.log("----------");

var userDate = readLineSync.question("What's your date of birth? Please provide in the format(DD/MM):");
console.log("----------");

var result = userDate.split("/");
if ((result.length == 2) && (isNaN(result[0]) == false) && (result[0] <= 31) && (result[1] <= 12) )
{
  if ((result[1] == 2) && (result[0] >29))
  {
    console.log(chalk.bgRed("The format of the date is wrong! Please use the mentioned format"));
  }
  else
  {
  primNumberCheck(result[0])
  }
}
else
  console.log(chalk.bgRed("The format of the date is wrong! Please use the mentioned format"));
