// timeInterval for the Timer
var timerEL = document.querySelector("#time");
var startEL = document.querySelector("#start");
var timeLeft = 75;

//Activeting Fimer by "Start Quiz"
function TimerFu() { 
setInterval(function()
{timerEL.textContent = timeLeft;
    timeLeft--;
    if(timeLeft <= 0){
        timerEL.textContent=" "
    }
  },
1000);
}
  
startEL.addEventListener("click", TimerFu);

//Display
// first screen: displayed- #startScreen, hidden- #questions, #endscreen
// question screen: displayed - questions[i], hidden- other questions, #startScreen, #endscreen
// last Screen: displayed -#endScreen, hidden-#startScreen, #questions

function toggleDisplay(event) {
    var value = event.target.value;
    if(value === "keydown") {
      mouseEventsEl.classList.add("hide");
      keyEventsEl.classList.remove("hide");
    }
    else {
      mouseEventsEl.classList.remove("hide");
      keyEventsEl.classList.add("hide");
    }
  }
  
  


