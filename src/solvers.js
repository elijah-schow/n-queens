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
  var solution = new Board({'n' : n}); // fixme

  if(n === 1){
    return [[1]];
  }

  for(var y = 0; y < n; y++){
    for(var x = 0; x < n; x++){
      solution.attributes[y][x] = 1;
      if(solution.hasAnyRooksConflicts()){
        solution.attributes[y][x] = 0;
      }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution.rows()));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  console.log("n:", n);
  var debugboards = [];

  if(n === 1){
    return 1;
  }

  function func (pieces, board){
    var newboard;
    for(var y = 0; y < n; y++){
      for(var x = 0; x < n; x++){
        newboard = new Board(board.rows());
        console.log('n:', n, 'y:', y, 'x:', x, 'pieces:', pieces, 'new board:', board.rows());
        // Skip spaces that are already filled
        if(newboard.attributes[y][x] === 1){
          continue;
        }
        newboard.attributes[y][x] = 1;
        // Skip spaces that have a conflict
        if(newboard.hasAnyRooksConflicts()){
          continue;
        }
        if(pieces < n){
          func(pieces + 1, newboard);
        } else if(pieces === n){
          solutionCount++;
        }
      }
    }
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  func(0, new Board({'n' : n}));
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
