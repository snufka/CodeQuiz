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
  
  startEL.addEventListener("click", TimerFu)