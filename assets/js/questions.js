var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  }

];

//!!!!!

console.log(questions[0].choices.indexOf(questions[0].answer));
//console.log(questions[0].choices.slice(0, 4));
var length = questions.length;

function scoring(event) {

  for (var i = 0; i < questions.length; i++) {
    if (userClick = questions[i].choices.indexOf(questions[i].answer)

    ) {
      score++;

    }
  }
}

// find function to find answer inside choices
function slicingFu() {

  for (var i = 0; i < questions.length; i++) {


    console.log(questions[i].choices.slice(0, 4));
  }

}
var sliceChoices1 = questions[0].choices.slice(0, 4)
console.log(sliceChoices1);
slicingFu();