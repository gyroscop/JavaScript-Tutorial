let startbutton = document.querySelector("#start");
let stoptbutton = document.querySelector("#stop");

// const autoPrint = function () {
//   console.log("Start Button Working");

//   setInterval(printSampleText, 1000);

//   function printSampleText() {
//     console.log("Start Button Working");
//   }
// };

// startbutton.addEventListener("click", autoPrint);

const randomColor = function () {
  const hex = "0123456789ABCDEFGH";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  //   console.log(color);
  return color;
};

let intervalId;

const statChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changefontColor, 1000);
  }

  function changefontColor() {
    document.querySelector("#light").style.color = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

startbutton.addEventListener("click", statChangingColor);
stoptbutton.addEventListener("click", stopChangingColor);
