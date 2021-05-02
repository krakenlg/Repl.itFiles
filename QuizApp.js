var readLineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;
var userName = readLineSync.question("What's your name? ");

console.log(chalk.green("Welcome ") + chalk.bgRed(userName) + chalk.grey(" to DO YOU KNOW Billa?"));
console.log("----------");

//quiz function
function quiz(question, answer){
  var userAnswer = readLineSync.question(question);
  
  if (userAnswer == answer) {
    console.log("Right! answer");
    score = score + 1;
  
  } else {
    console.log("Wrong! answer");

  }

  console.log("Current score is ", score);
  console.log("----------");

}

//array of objects
var questions = [{
  question: "Where do I live?"
},
{
  question: "Who is my favourite avenger?"
},
{
  question: "Where do I work?"
}
];

//loop
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer);
}

console.log("YAY! You scored:", score);


