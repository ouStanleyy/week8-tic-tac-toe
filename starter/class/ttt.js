const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {
  constructor() {
    this.playerTurn = "O";

    this.grid = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand("t", "test command (remove)", TTT.testCommand);

    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log("TEST COMMAND");
  }

  static checkWin(grid) {
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if no winner

    const rotatedGrid = grid[0].map((val, index) =>
      grid.map((row) => row[index]).reverse()
    );

    if (
      grid[0][0] === grid[1][1] &&
      grid[1][1] === grid[2][2] &&
      grid[0][0] !== " "
    )
      return grid[0][0];

    if (
      grid[0][2] === grid[1][1] &&
      grid[1][1] === grid[2][0] &&
      grid[0][2] !== " "
    )
      return grid[0][2];

    for (let row of rotatedGrid) {
      let rowJoin = row.join("");

      if (rowJoin === "XXX") return "X";
      if (rowJoin === "OOO") return "O";
    }

    let tieCheck = [];

    for (let row of grid) {
      let rowJoin = row.join("");

      if (rowJoin === "XXX") return "X";
      if (rowJoin === "OOO") return "O";

      for (let space of row) {
        if ("XO".includes(space)) tieCheck.push(space);
      }
    }

    if (tieCheck.length === 9) return "T";

    return false;
  }

  static endGame(winner) {
    if (winner === "O" || winner === "X") {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === "T") {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }
}

module.exports = TTT;
