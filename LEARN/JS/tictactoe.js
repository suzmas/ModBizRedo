$(document).ready(function redo() {

  $("#start").on("click", function() {
    startGame();
    $("td").html('');
    $("#results").text('');
    redo();
  });

  $("td").on("click", function() {
    $("#results").text(mkMove($(this).attr("id")));
    $(this).html(board[$(this).attr("id")]);
    if (over === true) { $("td").off() };
  });
});

var turn = 0;
var over = false;
var board = [0,0,0,
            0,0,0,
            0,0,0];

// Game Controllers

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

function endGame(why) {
  over = true;
  if (why === 'win') {
    turn--;
    return("A win does not a match make " + who())
  }
  if (why === 'out') {
    return("You're all guessed up");
  }
}

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
