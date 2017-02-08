/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = []; //fixme;[]

  

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = f(0, new Board({"n": n})); //fixme
  console.log("NEW RUN n: ", n);
  
  function f(move, board) {

    var result = 0;
    if(move > n){
      return 0;
    }
    // for each position on the given board
    for(var y = 0; y < n; y++){
      for (var x = 0; x < n; x++) {
        console.log("X:", x, "Y:", y, "MOVE:", move, "N:", n, "SOLUTION:", result);
        // if position is empty
        if (!board.get(y)[x]) {
          // make a new copy of the given board
          var newBoard = new Board(board.rows());
          console.log("OLDBOARD", board.rows());
          console.log("NEWBOARD: ", newBoard);
          // add a piece at position to the new board
          newBoard.set(y)[x] = 1;
          // if there are no conflicts in the new board
          if (!newBoard.hasAnyRooksConflicts()) {
            // if move is equal or grater than n
            if (move === n - 1) {
              result++;
            } else {
              result += f(move + 1, newBoard);
            }
          }
          // (implied) if there arre conflicts, end this branch of the decision tree
        }
      }
    }

    return result;
  };

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
