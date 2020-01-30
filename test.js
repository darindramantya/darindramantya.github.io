// GET ELEMENT
var closedChest1 = document.getElementById("chest1");
var closedChest2 = document.getElementById("chest2");
var closedChest3 = document.getElementById("chest3");
var startButton = document.getElementById("start");
// IMAGE
var price = "/Users/darindra23/Documents/HACKTIV8/DOM PROJECT/Picture/price.png";
var zonk = "/Users/darindra23/Documents/HACKTIV8/DOM PROJECT/Picture/zonk.png";
var zonk2 = "/Users/darindra23/Documents/HACKTIV8/DOM PROJECT/Picture/zonk.png";
var zonk3 = "/Users/darindra23/Documents/HACKTIV8/DOM PROJECT/Picture/zonk.png";
var chestClosed = "/Users/darindra23/Documents/HACKTIV8/DOM PROJECT/Picture/closed.png";
// PLAYING
let openChest1;
let openChest2;
let openChest3;
var totalClosedChest = 3;
var currentlyPlaying = true;
// RANDOMIZER
var randomchestNumberGenerator = () => {
  var random = Math.floor(Math.random() * totalClosedChest+1);
  if (random === 0) {
    openChest1 = price;
    openChest2 = zonk;
    openChest3 = zonk2;
  } else if (random === 1) {
    openChest1 = zonk;
    openChest2 = price;
    openChest3 = zonk2;
  } else if (random === 2) {
    openChest1 = zonk;
    openChest2 = zonk2;
    openChest3 = price;
  } else if(random === 3){
    openChest1 = zonk;
    openChest2 = zonk2;
    openChest3 = zonk3;
  }
};
// START ROUND
const startRound = () => {
  closedChest1.src = chestClosed;
  closedChest2.src = chestClosed;
  closedChest3.src = chestClosed;
  totalClosedChest = 3;
  startButton.innerHTML = "LET THE HUNT BEGIN";
  currentlyPlaying = true;
  randomchestNumberGenerator();
};
startButton.onclick = () => {
  if (!currentlyPlaying) {
    startRound();
  }
};
// GAME OVER
const gameOver = status => {
  if (status === "win") {
    startButton.innerHTML = "Yeay! You're Rich !";
  } else {
    startButton.innerHTML = "Game Over ! Play Again?";
  }
  currentlyPlaying = false;
};
// LOGIC
const isPrice = chest => {
  if (chest.src === price) {
    return true;
  } else {
    return false;
  }
};
const isClicked = chest => {
  if (chest.src === chestClosed) {
    return false;
  } else {
    return true;
  }
};
const playDoor = chest => {
  totalClosedChest--;
  if (totalClosedChest === 0 && !isPrice(chest)) {
    gameOver();
  } else if (isPrice(chest)) {
    gameOver("win");
  }
  console.log(chest.src);
  console.log(price);
};
// PLAY GAME
closedChest1.onclick = () => {
  if (currentlyPlaying) {
    closedChest1.src = openChest1;
    playDoor(closedChest1);
  }
};
closedChest2.onclick = () => {
  if (currentlyPlaying) {
    closedChest2.src = openChest2;
    playDoor(closedChest2);
  }
};
closedChest3.onclick = () => {
  if (currentlyPlaying) {
    closedChest3.src = openChest3;
    playDoor(closedChest3);
  }
};
startRound();