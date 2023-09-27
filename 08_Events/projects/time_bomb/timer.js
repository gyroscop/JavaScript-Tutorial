let timer = document.getElementById("clock");

let displayDate = function () {
  let date = new Date();
  timer.textContent = date.toLocaleTimeString();
};

let timeRemaining = setInterval(displayDate, 1000);

const stop_timer = function () {
  clearInterval(timeRemaining);
};

document.querySelector("#stop").addEventListener("click", stop_timer);
