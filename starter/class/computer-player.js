class ComputerPlayer {
  static getValidMoves(grid) {
    const validMoves = [];

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === " ") validMoves.push({ row: row, col: col });
      }
    }

    return validMoves;
  }

  static randomMove(grid) {
    const validMoves = this.getValidMoves(grid);
    return validMoves[Math.floor(Math.random() * validMoves.length)];
  }

  static getWinningMoves(grid, symbol) {
    // Your code here
  }

  static getSmartMove(grid, symbol) {
    // Your code here
  }
}

module.exports = ComputerPlayer;
