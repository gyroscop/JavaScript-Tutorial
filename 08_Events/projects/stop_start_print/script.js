const start = document.getElementById("start");

const stop = document.querySelector("#stop");

const name = function () {
  console.log("DibyaJyoti");
};

const displayName = setInterval(name, 1000);

// start.addEventListener("click", displayName);

const stop_print = function () {
  clearInterval(displayName);
  console.log("Dibya");
};

stop.addEventListener("click", stop_print);
