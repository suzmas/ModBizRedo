
var torpedoes = 25;
var ship = 1;
var hits = 0;
var spots = [];
var over = false;
var board = [
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
    ];

function reset() {
  board.forEach( function(l) {
    index = 0;
    l.forEach( function() {
      l[index] = 0;
      index++;
    });
    console.log("reset this row to " + l);
  });
  torpedoes = 25;
  hits = 0;
  spots = [];
  placeShips();
}

placeShips();

function checkSpots(row, col) {
  if ((row + 1 === 10) || (col + 1 === 10) || (col - 1 < 0) || (row - 1 < 0)) { return false }

  // check vert for ships
  if (board[row-1][col] != 0) { return false }
  else if (board[row+1][col] != 0) { return false }
  // check horiz for ships
  else if (board[row][col-1] != 0) { return false }
  else if (board[row][col+1] != 0) { return false }
  // check diag for ships
  else if (board[row-1][col-1] != 0) { return false }
  else if (board[row-1][col+1] != 0) { return false }
  else if (board[row+1][col-1] != 0) { return false }
  else if (board[row+1][col+1] != 0) { return false }
  else { return true }
}





function placeShips() {
  var placed = 0;
  while (placed <= 5) {
    var rrow = Math.floor(Math.random() * (10));
    var rcol = Math.floor(Math.random() * (10));
    console.log(rrow + " placeships row is this");
    console.log(rcol + " placeships col is this");

    if (board[rrow][rcol] === 0 && checkSpots(rrow, rcol) === true) {
      console.log("placing a ship");
      board[rrow][rcol] = ship;
      board[rrow+1][rcol] = ship;
      placed++;
      if (rrow != 0) {   // don't push 0 in front of single dig pos
      spots.push(String(rrow)+String(rcol));
      spots.push(String(rrow+1)+String(rcol));
    }
    else { spots.push(String(rcol)) }
  };
}
}

// Game Controllers

function checkHit(pos) {
  var row = Math.floor(pos/10)
  var col = pos%10
  console.log("row " + row + " column " + col + " value is " + board[row][col]);
  if (board[row][col] === 2) {
    alert('already chosen');
    return false;
  }

  torpedoes --;
  if (board[row][col] != 0) {
    hits ++;
    board[row][col] = 2;
    return true;
  }
  else {
    board[row][col] = 2;
    console.log('miss') }
}


function checkWin() {
  if (hits >= spots.length) { return true }
}

function endGame() {
  if (checkWin() || torpedoes <= 0)
    { return true }
}


// UGH FINISH THIS ANNOYING CRAP
// if (row === 9 && col === 0)
//
//
// if (row === 9) {
//   if (board[(row-1)][col] != 0) { return false }
//   else if (board[row][col-1] != 0) { return false }
//   else if (board[row][col+1] != 0) { return false }
//   else if (board[row-1][col-1] != 0) { return false }
//   else if (board[row-1][col+1] != 0) { return false }
//   else { return true }
// };
// if (col === 9) {
//   if (board[(row-1)][col] != 0) { return false }
//   else if (board[row+1][col] != 0) { return false }
//   else if (board[row][col-1] != 0) { return false }
//   else if (board[row-1][col-1] != 0) { return false }
//   else if (board[row+1][col-1] != 0) { return false }
//   else { return true }
// }
// if (row === 0) {
//   if (board[row+1][col] != 0) { return false }
//   else if (board[row][col-1] != 0) { return false }
//   else if (board[row][col+1] != 0) { return false }
//   else if (board[row+1][col-1] != 0) { return false }
//   else if (board[row+1][col+1] != 0) { return false }
//   else { return true }
// }
// if (col === 0) {
//   if (board[(row-1)][col] != 0) { return false }
//   else if (board[row+1][col] != 0) { return false }
//   else if (board[row][col+1] != 0) { return false }
//   else if (board[row-1][col+1] != 0) { return false }
//   else if (board[row+1][col+1] != 0) { return false }
//   else { return true }
// }
