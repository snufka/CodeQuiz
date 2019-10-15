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
    event.preventDefault();

    questions[i].choices.forEach(function (entry) {
      console.log(entry);
      a = document.createElement('p')

      var b = i


      a.textContent = entry;
      a.addEventListener("click", function (event) {
        console.log("clicked");

        console.log(event);
        console.log(event.target.innerText);
        console.log(questions[b].answer);




        if (event.target.innerText === questions[b].answer) {
          score++;
          prompt("Correct");

        }
        else {
          timeLeft = timeLeft - 5;
          prompt("wrong");
        }
      });

      document.body.appendChild(a);


    })
  }
};