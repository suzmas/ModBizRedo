// Fixed vars //
shipLengths = [2,2,3,3,4,4,5];
board = [];
shipPositions = [];

function makeBoard() {
  board = [];
  for (i=0;i<99;i++) {
    board.push(0);
  }
}

function randInt() {
  return Math.floor(Math.random() * (99));
}

function placeShips(shiplist) {
  // iterate through list of shiplengths
  shiplist.forEach(function oneShip (each) {
    // console.log('Starting to place a ship of '+ each + ' length');
    var startPnt = randInt();
    var vert = false;
    var fullShip = []

    if (startPnt%2 > 0) { vert = true };

    console.log('This ship wants to start at ' + startPnt);
    console.log('This ship is ' + each + ' cells long');

    for (i=0;i<each;i++) {
      if (checkPerimeter(startPnt) === true) {
        fullShip.push(startPnt);
        if (vert === true) { startPnt+=10 }
        else { startPnt++ }
      } // log that said check failed and try to place again
      else {
        // console.log('could not place' + each);
        fullShip = [];
        oneShip(each);
      };
    }
    // console.log('End of one ship check- size:' + each + '. Ships placed at ' + fullShip);


    fullShip.forEach(function(each) {
      board[each] = 1;
      shipPositions.push(each);
    });
    fullShip = []; // reset fullShip holder after ship is placed
  });
  // console.log('End of checking all ships');
};



// Control ship placing

function checkPerimeter(spot) {
  if (board[spot] != 0) { return false };
  if (spot-10 >= 0 && spot+10 <= 99) {
    if ((board[spot-10] === 0) && (board[spot+10] === 0) && (board[spot-1] === 0) && (board[spot+1] === 0)) { return true }
    else { return false }
  }
  else if (spot < 10) {
    if ((board[spot+10] === 0) && (board[spot-1] === 0) && (board[spot+1] === 0)) { return true }
    else { return false }
  }
  else {
    if ((board[spot-10] === 0) && (board[spot-1] === 0) && (board[spot+1] === 0)) { return true }
    else { return false }
  }
}

// function checkRowEnd(spot, len) {
//   start = spot.toString();
//   console.log('Checking row end. '+ spot + ' will end at ' + (spot+(len-1)));
//   end = (spot+(len-1)).toString();
//   if (start.length > end.length || start[0] > end[0]) {
//     return false;
//   }
//   else { return true }
//   }
// };
