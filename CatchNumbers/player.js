import { getRandomNumber } from "./math.js";

export class Player {
  height;
  width;
  currPositionNr;
  character;

  constructor(gridHeight, gridWidth) {
    this.height = gridHeight;
    this.width = gridWidth;
    this.currPositionNr = this.getPlayerPosition();
    this.character = "X";
  }

  // TODO: not the best idea to move character - idk if I can move and if I can't than taking the step back will be someone elses job
  // TODO: parameter for how many steps

  getPlayerPosition() {
    return getRandomNumber(0, this.height * this.width - 1);
  }

  moveUp() {
    this.currPositionNr = this.currPositionNr - this.height;
  }

  moveDown() {
    this.currPositionNr = this.currPositionNr + this.height;
  }

  moveLeft() {
    this.currPositionNr = this.currPositionNr - 1;
  }

  moveRight() {
    this.currPositionNr = this.currPositionNr + 1;
  }
}
