var choicesEL = document.querySelector("#choices");


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


var length = questions.length;


// function to dislay the answers in different rows
function slicingFu() {

  for (var i = 0; i < questions.length; i++) {

    questions[i].choices.forEach(function (entry) {
      console.log(entry);
      a = document.createElement('p')

      a.textContent = entry;
      a.addEventListener("click", function (event) {
        console.log("clicked");
        console.log(event);
        console.log(event.target.innerText);
        console.log(questions[i].choices.indexOf(event.target.innerText));// NOT WORKING
      });

      document.body.appendChild(a);
      a = choicesEL;


    });

  }

}

//NOT WORKING- function to comper users click to the correct answer and score accordingly
function scoringFu(event) {

  for (var m = 0; m < questions.length; m++) {
    var score = 0;


    var usersClick = event.target.innerText;

    if (questions[m].choices.indexOf(usersClick) == questions[m].choices.indexOf(questions[i].answer)

    ) {
      score++;
      prompt("Correct");

    }
    else {
      timeLeft = timeLeft - 5;
      prompt("wrong");
    }
    console.log(score);
  }
}

slicingFu();
scoringFu(event);


