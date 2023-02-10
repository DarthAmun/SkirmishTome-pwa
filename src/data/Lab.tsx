import Character from "./Character";

export default class Lab {
    matrix: boolean[][];
    char: Character; 


    constructor(
      matrix: boolean[][],
      char: Character
    ) {
      this.matrix = matrix;
      this.char = char;
    }
  }