// timeInterval for the Timer
var timeEL= document.querySelector("#time");

function TimerFu() {
    var timeLeft = 75;
  
    var timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
  
      if (timeLeft === 0) {
        timerEl.textContent = "";
                  }
  
    }, 1000);
  }
  