import { getRandomNumber } from "./math.js";

export class Player {
  height;
  width;
  posCoordinates;
  character;

  constructor(gridHeight, gridWidth) {
    this.height = gridHeight;
    this.width = gridWidth;
    this.posCoordinates = this.getPlayerPosition();
    this.character = "X";
  }

  // TODO: not the best idea to move character - idk if I can move and if I can't than taking the step back will be someone elses job
  // TODO: parameter for how many steps

  getPlayerPosition() {
    var row = getRandomNumber(0, this.height - 1);
    var column = getRandomNumber(0, this.width - 1);
    return [row, column];
  }

  moveUp() {
    // is not on the edge
    if (this.posCoordinates[0] !== 0) {
      this.posCoordinates[0] = this.posCoordinates[0] - 1;
    }
  }

  moveDown() {
    if (this.posCoordinates[0] !== this.height - 1) {
      this.posCoordinates[0] = this.posCoordinates[0] + 1;
    }
  }

  moveLeft() {
    if (this.posCoordinates[1] !== 0) {
      this.posCoordinates[1] = this.posCoordinates[1] - 1;
    }
  }

  moveRight() {
    if (this.posCoordinates[1] !== this.width - 1) {
      this.posCoordinates[1] = this.posCoordinates[1] + 1;
    }
  }
}
