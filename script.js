    function startTimer() { // Alert Message
      alert("Prepare For Blast Off!");
    }
var timerId; // stores reference to the timeout

function startTimer() {
  var timeLeft = 10;
  const timerEl = document.getElementById("DisplayCountdown"); // ID tag h2
      alert("Prepare For Blast Off!");

  const countDown = function() {
    timeLeft--; //
    timerEl.innerHTML= timeLeft; // Lowers the number by one

    if (timeLeft === 5) {
      alert("Warning Less than ½ way to launch, time left: " + timeLeft + " seconds"); // Alert message with variable
      timerEl.innerHTML= timeLeft; // Lowers the number by one
        timeLeft +4; // Without this variable and integer, the countdown will skip the number 3 and move from 4->2 instead.
        timerId = setTimeout(countDown, 1000) // this will repeat the decrementing function of the countdown
    }
    else if (timeLeft === 0) {
      timerEl.innerHTML= "Blast Off!"; // This change the text of h2 into 'BlastOff' when the timer hit 
      console.log('Blast Off!')
    } else {
      timerId = setTimeout(countDown, 1000); //setTimeout is a function that takes 2 arguments, 1 argument is a function, and 2nd is time or miliseconds. 1000ms = 1second. It will call the function every second. This will run the function indefinetly. This also store to timerId for a reference to stop timer.
    }
  };

  countDown(); // This starts the countdown after button clicked.
}

function stopTimer() {
  clearTimeout(timerId); //clearTimeout, takes one argument of the reference settimeout in this case is the timerId, and stop it from counting.
  startBtn.disabled = false;
}