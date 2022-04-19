
const chalk = require('chalk');
console.log(chalk.bgYellow('\nWElCOME TO FRIENDS QUIZ\n'));

var score = 0;

let topScorers = [
    {
        name: "Mehul",
        score: 10
    },
  
]



var readLineSync = require('readline-sync');
var playerName = readLineSync.question(chalk.yellowBright("What's your name ? "));

console.log(chalk.yellowBright("Let's find out how well do you know me :)"));

let questions = [
    {
        question: "A : Where I am from ?",
        answer: "Hyderabad"
    },
    {
        question: "B : Which is my Favourite sport ?",
        answer: "Cricket"
    },
    {
        question: "C : In Which organization do i work ?",
        answer: "Cognizant"
    },
    {
        question: "D : What is my Favourite Food ?",
        answer: "Dosa"
    },
    {
        question: "H : Who is my favourite cricketer ?",
        answer: "Virat Kholi"
    },
    {
        question: "I : Which is my dream place to visit in India ?",
        answer: "Kashmir"
    }
]




function questionBank(questions, num) {
    userAnswer = readLineSync.question(chalk.blue(questions[num].question + "\n"));
    if (userAnswer.toUpperCase() === questions[num].answer.toUpperCase()) {
        console.log(chalk.yellowBright("Correct"));
        score++;
    }
    else {
        console.log(chalk.bold.red("Wrong"));
      //  console.log("Correct Answer " + questions[num].answer);
        score--;
    }
}

for (var i = 0; i < questions.length;i++) {
    questionBank(questions, i);
}

if(score < questions.length)
{
    console.log(chalk.bgRed("\n Better Luck Next Time"));
}
else
console.log(chalk.bgCyan("\n YAY ! Your Score : " + score));


console.log(chalk.yellowBright("\n\n"+"----------------Leader Board----------------"));
console.log(chalk.green("Name     Score"));

for (var j = 0; j < topScorers.length; j++) {
    console.log(chalk.blue(topScorers[j].name
        + "     " + topScorers[j].score));
}

