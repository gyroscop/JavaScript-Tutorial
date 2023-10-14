const CreatePlayer = function (username, score) {
  this.username = username;
  this.score = score;
};

// console.log(CreatPlayer.prototype);
CreatePlayer.prototype.incrscore = function () {
  this.score++;
  console.log(this.score);
};

const Player1 = new CreatePlayer("Dibya", 200);

Player1.incrscore();
