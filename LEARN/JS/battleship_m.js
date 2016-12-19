
var torpedoes = 25;
var ships = [5,4,4,3,3,2,2,1];
var hits = 0;
var toFill = [];
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

function checkSpots(r, c) {
  var retVal = true;
  console.log("Row is:" + r + "Col is" + c);
  var surrounders = [[r,c], [r+1,c], [r-1,c], [r,c+1], [r,c-1], [r+1,c+1], [r-1,c-1], [r+1,c-1], [r-1,c+1]];
  surrounders.forEach( function(each) {
    if (each[0] < 0 || each[0] > 9) { return }
    if (each[1] < 0 || each[1] > 9) { return }
    if (board[each[0]][each[1]] != 0) {
      retVal = false }
  });
  console.log("finish check spos");
  return retVal;
}

function randInt() {
  return Math.floor(Math.random() * (10));
}

function placeHor(len, rrow, rcol) {
  if (rcol+len > 10) { return false };
  var placed = 0;
  console.log("im i hor");
  while (placed < len) {
    console.log("in while");
    if (checkSpots(rrow, rcol) === true) {
      console.log("NOW LETS PLACE");
      toFill.push([rrow,rcol]);
      console.log(spots);
      console.log(toFill);
      rcol++;
      placed++;
      console.log("placed : " + placed);
    }
    else { return false }
  }
}

function placeVert(len, rrow, rcol) {
  if (rrow+len > 10) { return false };
  var placed = 0;
  toFill = [];
  console.log("im in v");
  while (placed < len) {
    if (checkSpots(rrow, rcol) === true) {
      console.log("NOW LETS PLACE V");
      toFill.push([rrow,rcol]);
      rrow++;
      placed++;
    }
    else { return false }
  }
  toFill.forEach( function(each) {
    board[each[0]][each[1]] = 1;
  });
  return true;
}


function mkSpotList() {
  toFill.forEach( function(each) {
    board[each[0]][each[1]] = 1;
  });
  toFill.forEach( function(each) {
    console.log("This is the mkSpotList function");
    console.log("This spot in the toFill list is" + each);
    if (each[0] === 0) { spots.push(String(each[1])) }
    else { spots.push(String(each[0])+String(each[1])) }
  });
}

function placeShips() {
  var plcd = 0;
  var i = 0;
  while (i<10) {
    i++;
    if (placeHor(ships[0], randInt(), randInt()) == true) {
      plcd++;
      ships.splice(0,1);
    }
    else if (placeVert(ships[0],randInt(),randInt()) == true) {
      plcd++;
      ships.splice(0,1);
    }
    else { continue }
  };
  mkSpotList();
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
