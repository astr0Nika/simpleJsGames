import { Player } from "./player.js";
import { getRandomNumber } from "./math.js";

var gridNr = [];
const gridWidth = 15;
const gridHeight = 15;

const currPlayer = new Player(gridHeight, gridWidth);

function showGridNr() {
  const gridContainer = document.getElementById("gridContainer");
  gridContainer.innerHTML = ""; // clear

  // create grid for content - rows and columns are defined in style
  for (let i = 0; i < gridHeight; i++) {
    for (let j = 0; j < gridWidth; j++) {
      var pos = gridHeight * i + j;
      const element = gridNr[pos];

      const div = document.createElement("div");
      div.className = "grid-item";
      div.textContent = element;

      if (element === currPlayer.character) {
        div.style = "background-color: pink;";
      }

      gridContainer.appendChild(div);
    }
  }
}

function movePlayer(move) {
  gridNr[currPlayer.currPositionNr] = "";

  switch (move) {
    case "u":
      currPlayer.moveUp();
      break;

    case "r":
      currPlayer.moveRight();
      break;

    case "d":
      currPlayer.moveDown();
      break;

    case "l":
      currPlayer.moveLeft();
      break;

    default:
      break;
  }

  gridNr[currPlayer.currPositionNr] = currPlayer.character;
}

document.addEventListener(
  "keydown",
  function (event) {
    if (event.keyCode === 37) {
      movePlayer("l");
      showGridNr();
    } else if (event.keyCode === 38) {
      movePlayer("u");
      showGridNr();
    } else if (event.keyCode === 39) {
      movePlayer("r");
      showGridNr();
    } else if (event.keyCode === 40) {
      movePlayer("d");
      showGridNr();
    }
  },
  true
);

// fill grid
for (let i = 0; i < gridHeight * gridWidth; i++) {
  if (i === currPlayer.currPositionNr) {
    gridNr[i] = currPlayer.character;
  } else {
    gridNr[i] = getRandomNumber(0, 9);
  }
}

showGridNr();

// TODO: input of movement
// TODO: move player
