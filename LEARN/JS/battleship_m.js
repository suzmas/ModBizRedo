
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

function startGame() {
  board = [
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
  hits = 0;
  spots = [];
  torpedoes = 25;
}

for (i = 0; i < 5; i++) {
  var rrow = Math.floor(Math.random() * (10));
  var rcol = Math.floor(Math.random() * (10));
  if (board[rrow][rcol] === 0) {
     board[rrow][rcol] = ship;
     if (rrow != 0) {
     spots.push(String(rrow)+String(rcol))
   }
   else { spots.push(String(rcol)) }
   };
}


// print board
board.forEach(function(each) {
  console.log(each);
});


// Game Controllers

function checkHit(pos) {
  var row = Math.floor(pos/10)
  var col = pos%10

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
  if (hits >= 5) { return true }
}

function endGame() {
  if (checkWin() || torpedoes <= 0)
    { return true }
}





function who() {

  if (turn%2===0) {
    turn ++;
    return 'x'}
  if (turn%2!=0) {
    turn ++;
    return 'o'}
}

function mkMove(choice) {

  if (board[choice] != 0) { return }

  board[choice] = who();
  if (winYet() === true) { return endGame('win') }
  if (turn>7) { return endGame('out') }
}


function startGame() {
  board = [0,0,0,0,0,0,0,0,0];
  turn = 0;
  over = false;
}

// function endGame(why) {
//   over = true;
//   if (why === 'win') {
//     turn--;
//     return("A win does not a match make " + who())
//   }
//   if (why === 'out') {
//     return("You're all guessed up");
//   }
// }

// Conditions

function winYet() {
  if (horiz() || vert() || diag()) {return true}
}

function horiz() {
  if (board[0]!=0 && board[0]===board[1] && board[1]===board[2]) {return true}
  if (board[3]!=0 && board[3]===board[4] && board[4]===board[5]) {return true}
  if (board[6]!=0 && board[6]===board[7] && board[7]===board[8]) {return true}
}

function vert() {
  if (board[0]!=0 && board[0]===board[3] && board[3]===board[6]) {return true}
  if (board[1]!=0 && board[1]===board[4] && board[4]===board[7]) {return true}
  if (board[2]!=0 &&  board[2]===board[5] && board[5]===board[8]) {return true}
}

function diag() {
  if (board[4] === 0) {return false}
  if (board[0]===board[4] && board[4]===board[8]) {return true}
  if (board[2]===board[4] && board[4]===board[6]) {return true}
}
