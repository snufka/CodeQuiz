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

//!!!!!

//console.log(questions[0].choices.indexOf(questions[0].answer));
//console.log(questions[0].choices.slice(0, 4));
var length = questions.length;



function scoringFu() {

  if (questions[i].choices.indexOf(userAnswer) == questions[i].choices.indexOf(questions[i].answer)

  ) {
    var score = 0;
    score++;
    prompt("Correct");

  }
  else {
    timeLeft = timeLeft - 5;
    prompt("wrong");
  }
  console.log(score);
}




// find function to find answer inside choices
function slicingFu() {

  for (var i = 0; i < questions.length; i++) {

    questions[i].choices.forEach(function (entry) {
      console.log(entry);
      a = document.createElement('p')

      a.textContent = entry;
      a.addEventListener("click", function (event) {
        console.log("working");
        console.log(event);
      });

      document.body.appendChild(a);




    });

  }

}

slicingFu();


var sliceChoices1 = questions[0].choices.slice(0, 4);
  //console.log(sliceChoices1)