$(document).ready(function () {

speed = 0;

  $("#submit").on("click", function () {
    $("div").eq(0).hide();
    $("#carinfo").text($("#year").val() + $("#make").val() + $("#model").val());
    $("#carspeed").text(speed);
  });

  $("#increasespeed").on("click", function() {
    accelerate(10);
    $("#carspeed").text(speed);
  });

  $("#decreasespeed").on("click", function() {
    brake();
    $("#carspeed").text(speed);
  });

function accelerate(x) {
  if (speed > 75) {
    x = 85-speed;
  }
  speed += x;
};

function brake() {
  speed -= Math.floor(Math.random() * (speed / 2));

  if (speed < 7) {
    speed = 0;
  }
};
});
