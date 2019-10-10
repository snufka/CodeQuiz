// timeInterval for the Timer
var timerEL = document.querySelector("#time");
var startEL = document.querySelector("#start");
var startScreenEL = document.querySelector("#start-screen");
var questionsEL = document.querySelector("#questions");
var questionsChoicesEL = document.querySelector(".choices");
var endScreenEL = document.querySelector("#end-screen");

var timeLeft = 75;

//Activeting timer by clicking "Start Quiz"
function TimerFu() { 
setInterval(function()
{timerEL.textContent = timeLeft;
    timeLeft--;
    if(timeLeft <= 0){
        timerEL.textContent=" "
    }
  },
1000);
toggleDisplayQuestions();
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

    // if the sart quiz button was clicked than
    //    toggleDisplayQuestions()
      
}
  
function toggleDisplayQuestions() {
   
    startScreenEL.classList.add("hide");
    questionsEL.classList.remove("hide");
    endScreenEL.classList.add("hide");
  // if got answer to final question, than 
  // toggleDisplayEndScreen()
 }

 function toggleDisplayEndScreen() {
   
    startScreenEL.classList.add("hide");
    questionsEL.classList.add("hide");
    endScreenEL.classList.remove("hide");
  
 }
// questions
// first question displayed 
// if the user clicked on correct answer than display correct and move to question 2, hide question 1
// if user clicked on the wrong answer than display wrong and reduce 10 secs from the timeLeft, move to question 2 and hide question 1

// if user's choose is equal to question's answer, than scoure++, and display "correct"
//if user's choose is not equal to question's answer, than scoure doent change,  display "wrong" and didacet 10 sec from "time left"


var score=0;







