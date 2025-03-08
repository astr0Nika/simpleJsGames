import { Player } from "./player.js";
import { getRandomNumber } from "./math.js";

var gridNr = [];
const gridWidth = 15;
const gridHeight = 15;

const player = new Player(gridHeight, gridWidth);

function showGridNr() {
  const gridContainer = document.getElementById("gridContainer");
  gridContainer.innerHTML = ""; // clear

  // create grid for content - rows and columns are defined in style
  for (let row = 0; row < gridHeight; row++) {
    for (let column = 0; column < gridWidth; column++) {
      const element = gridNr[row][column];

      const div = document.createElement("div");
      div.className = "grid-item";
      div.textContent = element;

      if (element === player.character) {
        div.style = "background-color: pink;";
      }

      gridContainer.appendChild(div);
    }
  }
}

function movePlayer(move) {
  gridNr[player.posCoordinates[0]][player.posCoordinates[1]] = "";

  switch (move) {
    case "u":
      player.moveUp();
      break;

    case "r":
      player.moveRight();
      break;

    case "d":
      player.moveDown();
      break;

    case "l":
      player.moveLeft();
      break;

    default:
      break;
  }

  gridNr[player.posCoordinates[0]][player.posCoordinates[1]] = player.character;
  showGridNr();
}

document.addEventListener(
  "keydown",
  function (event) {
    if (event.keyCode === 37) {
      movePlayer("l");
    } else if (event.keyCode === 38) {
      movePlayer("u");
    } else if (event.keyCode === 39) {
      movePlayer("r");
    } else if (event.keyCode === 40) {
      movePlayer("d");
    }
  },
  true
);

// fill grid
for (let row = 0; row < gridHeight; row++) {
  gridNr[row] = [];
  for (let column = 0; column < gridWidth; column++) {
    if (
      row === player.posCoordinates[0] &&
      column === player.posCoordinates[1]
    ) {
      gridNr[row][column] = player.character;
    } else {
      gridNr[row][column] = getRandomNumber(1, 9);
    }
  }
}

showGridNr();

// TODO: input of movement
// TODO: move player
