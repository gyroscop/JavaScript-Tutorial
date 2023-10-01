const key = document.querySelector(".key");
const keyboard = document.querySelector(".keyboard");

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const turnOn = function () {
  key.style.color = randomColor();
};

setInterval(turnOn, 1000);

window.addEventListener("keydown", (e) => {
  keyboard.innerHTML = `   
 <div class = "keytable">
    <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
</div>
    
    `;
});
