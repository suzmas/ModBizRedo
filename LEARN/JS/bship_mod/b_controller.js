$(document).ready(function() {
    tid=0;

    makeBoard();
    placeShips(shipLengths);

    // build board
    for (i=0; i<10; i++) {
        $("#board").append("<tr></tr>");
    }
    $("tr").each(function() {
        for (i=0; i<10; i++) {
            $(this).append("<td id='" + tid + "'>");
            if ($.inArray(tid, shipPositions) >= 0 ) { $("td").last().addClass("ship-pos") }
            tid++;
        }
    });

    // style elements on click
    $("#board").on("click","td", function() {
      if ($(this).hasClass("ship-pos")) {
        $(this).css("background-color", "red");
      }
        $(this).addClass("clicked");
        $(this).off();
    });

});
