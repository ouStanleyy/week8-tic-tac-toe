const TTT = require("./ttt");

class ComputerPlayer {
  static getValidMoves(grid) {
    const validMoves = [];

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === " ") validMoves.push({ row, col });
      }
    }

    return validMoves;
  }

  static randomMove(grid) {
    const validMoves = this.getValidMoves(grid);
    return validMoves[Math.floor(Math.random() * validMoves.length)];
  }

  static getWinningMoves(grid, symbol) {
    const validMoves = this.getValidMoves(grid);

    for (let move of validMoves) {
      grid[move.row][move.col] = symbol;

      if (TTT.checkWin(grid) === symbol) {
        grid[move.row][move.col] = " ";
        return move;
      } else grid[move.row][move.col] = " ";
    }

    return false;
  }

  static getSmartMove(grid, symbol) {
    const playerSymbol = symbol === "X" ? "O" : "X";
    const winningMove = this.getWinningMoves(grid, symbol);
    const playerWinningMove = this.getWinningMoves(grid, playerSymbol);

    return winningMove ? winningMove : playerWinningMove;
  }
}

module.exports = ComputerPlayer;
