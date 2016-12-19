$(document).ready(function redo() {

  var buttonOff = true;

  $("#start").on("click", function() {
    $("#board").empty();
    reset();
    buttonOff = false;
    tid = 0;

    for (i = 0; i < 10; i++) {
      $("#board:first").append("<tr></tr>");
      for (a = 0; a < 10; a++) {
        $("tr:last").append("<td id=\"" + tid + "\" > </td>");
        tid ++;
      }
    }
    $("#board").addClass(".table");
  });

// change box colors when ya click 'em
  $("#board").on("click", "td", function() {
    if (buttonOff) return(false);
    if (checkHit($(this).attr("id")) === true) {
      $(this).addClass("hit");
    }
    else { $(this).addClass("miss") }
    $("#stats").text("Torpedoes left: " + torpedoes + " Hits: " + hits);

    if (endGame() === true) {
      buttonOff = true;
      spots.forEach( function(each) {
        $("#" + each).addClass("spot");
      })
    }
    console.log($(this));
});
});
