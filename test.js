// GET ELEMENT
var closedChest1 = document.getElementById("chest1");
var closedChest2 = document.getElementById("chest2");
var closedChest3 = document.getElementById("chest3");
var startButton = document.getElementById("start");
// IMAGE
var price = "https://darindramantya.github.io/Picture/price.png";
var zonk = "";
var zonk2 = "";
var zonk3 = "";
var chestClosed = "https://darindramantya.github.io/Picture/closed.png";
// PLAYING
let openChest1;
let openChest2;
let openChest3;
var totalClosedChest = 2;
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
  }
};
// START ROUND
const startRound = () => {
  closedChest1.src = chestClosed;
  closedChest2.src = chestClosed;
  closedChest3.src = chestClosed;
  totalClosedChest = 2;
  startButton.innerHTML = "Let's Find The Treasure !";
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
    startButton.innerHTML = "Yeay ! You're Rich !";
  } else {
    startButton.innerHTML = "Oop's ! Play Again?";
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
};
// PLAY GAME
closedChest1.onclick = () => {
  if (currentlyPlaying && !isClicked(closedChest1)) {
    closedChest1.src = openChest1;
    playDoor(closedChest1);
  }
};
closedChest2.onclick = () => {
  if (currentlyPlaying && !isClicked(closedChest2)) {
    closedChest2.src = openChest2;
    playDoor(closedChest2);
  }
};
closedChest3.onclick = () => {
  if (currentlyPlaying && !isClicked(closedChest3)) {
    closedChest3.src = openChest3;
    playDoor(closedChest3);
  }
};
startRound();