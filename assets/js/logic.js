// timeInterval for the Timer
var timerEL = document.querySelector("#time");
var startEL = document.querySelector("#start");
var startScreenEL = document.querySelector("#start-screen");
//different screens display
var questionsEL = document.querySelector("#questions");
var questionsChoicesEL = document.querySelector(".choices");
var endScreenEL = document.querySelector("#end-screen");
//questions display 
var titleEL = document.querySelector("#question-title");
var choicesEL = document.querySelector("#choices");
//score display 
var initialsEL = document.querySelector("#initials");
var finalScoreEL = document.querySelector("#final-score");
var highscoresFormEL = document.querySelector("#highscoresForm");




var timeLeft = 10;
var score = 0;

//Activeting timer by clicking "Start Quiz"
function TimerFu() {
  timerEL.textContent = timeLeft;
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEL.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timeInterval)
    }
  }, 1000);
  toggleDisplayQuestion(0);
}

startEL.addEventListener("click", TimerFu);

//Display
// first screen: displayed- #startScreen, hidden- #questions, #endscreen
// question screen: displayed - questions[i], hidden- other questions, #startScreen, #endscreen
// last Screen: displayed -#endScreen, hidden-#startScreen, #questions


function toggleDisplayStartScreen() {

  startScreenEL.classList.remove("hide");
  questionsEL.classList.add("hide");
  endScreenEL.classList.add("hide");



}

function toggleDisplayQuestion(index) {

  startScreenEL.classList.add("hide");
  questionsEL.classList.remove("hide");
  endScreenEL.classList.add("hide");
  if (index === questions.length) {
    toggleDisplayEndScreen();
    return;//We are done
  }


  titleEL.textContent = questions[index].title;
  document.querySelector("#choices").innerHTML = "";
  questions[index].choices.forEach(function (entry) {
    console.log(entry);
    a = document.createElement('p')

    a.textContent = entry;
    a.addEventListener("click", function (event) {
      console.log("clicked");

      console.log(event);
      console.log(event.target.innerText);
      console.log(questions[index].answer);




      if (event.target.innerText === questions[index].answer) {
        score++;
        prompt("Correct");

      }
      else {
        timeLeft = timeLeft - 5;
        prompt("wrong");
      }
      toggleDisplayQuestion(index + 1);
    });

    document.querySelector("#choices").appendChild(a);


  })

}

function toggleDisplayEndScreen() {

  startScreenEL.classList.add("hide");
  questionsEL.classList.add("hide");
  endScreenEL.classList.remove("hide");

  //need to add scoring and sort the list from bidest to largest score

  function renderHighScore() {

    initialsEL.innerHTML = "";
    initialsList = [];

    for (var n = 0; n < todos.length; n++) {
      var initials = initialsList;

      var li = document.createElement("li");
      li.textContent = initials;
      initialsList.appendChild(li);
    }
  }

  highscoresFormEL.addEventListener("submit", function (event) {
    event.preventDefault();

    var initialsText = initials.value.trim();

    if (initialsText === "") {
      return;
    }

    initialsList.push(initialsText);



    renderHighScore();
  });




}











