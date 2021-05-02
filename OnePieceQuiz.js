var readLineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;
var maxScore = 3;
var userName = readLineSync.question(chalk.yellow("What's your name? "));

//high score 
var highScores = [];

console.log(chalk.green("Welcome ") + chalk.bgRed(userName) + chalk.grey(" to How welll do you know One-Piece?"));
console.log(chalk.cyan("----------"));

//quiz function
function quiz(question, answer){
  var userAnswer = readLineSync.question(question);
  
  if (userAnswer == answer) {
    console.log(chalk.green("Right! answer"));
    score = score + 1;
  
  } else {
    console.log(chalk.red("Wrong! answer"));

  }

  console.log(chalk.grey("Current score is ", score));
  console.log(chalk.cyan("----------"));

}


//quiz function
function addHighScore(userName, score){
  if (score >= 3) {
  highScores.push({uName:userName, uScore:score});
  }
}

//array of objects
var questions = [{
  question: "Who promised that they would never lose another fight until they defeated a certain someone?",
  answer: "Zoro"
},
{
  question: "Who was the first villain to defeat Luffy?",
  answer: "Crocodile"
},
{
  question: "Who was the first woman to kiss Luffy?",
  answer: "Reiju"
},
{
  question: "Who was the first recruit of the Straw Hat crew?",
  answer: "Zoro"
},
{
  question: "Who gave Shanks the scar on his eye?",
  answer: "Blackbeard"
}
];

//loop
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer);

}

console.log(chalk.white("YAY! You scored:", score));

addHighScore(userName, score);

for (var j=0; j<highScores.length; j++) {
  console.log("High scorers are:");
  var currentUserDetails = highScores[j];
  console.log(chalk.bgMagenta(currentUserDetails.uName), chalk.bgBlue(currentUserDetails.uScore));
}

