class ComputerPlayer {
  static getValidMoves(grid) {
    const validMoves = [];

    for (let row of grid) {
      let rowJoin = row.join("");
      validMoves.push(...rowJoin);
    }
    return validMoves;
  }

  static randomMove(grid) {
    // Your code here
  }

  static getWinningMoves(grid, symbol) {
    // Your code here
  }

  static getSmartMove(grid, symbol) {
    // Your code here
  }
}

module.exports = ComputerPlayer;
