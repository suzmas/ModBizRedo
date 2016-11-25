$(document).ready(function redo() {
  // Start game- create trs and tds
  $("#start").on("click", function() {
    tid = 0;
    $("#board").empty();
    for (var i = 0; i < 10; i++) {
      $("#board").append("<tr>");
      for (var a = 0; a < 10; a++) {
        $("#board").append("<td id=\"" + tid + "\" > </td>");
        tid ++;
      }
      $("#board").append("</tr>");
    }
  });

// change boxes black when ya click 'em
  $("#board").on("click", "td", function() {
    if (checkHit($(this).attr("id")) === true) {
      $(this).addClass("hit");
    }
    else { $(this).addClass("miss") }
    $("#stats").text("Torpedoes left: " + torpedoes + " Hits: " + hits);
    if (endGame() === true) {
      $("#board").off();
      spots.forEach( function(each) {
        $("#" + each).addClass("spot");
      })
      $("td").removeClass("miss");
    }
    console.log($(this));
});
});
