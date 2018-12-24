window.onload = function() {
    $("#start").on("click", start);
    $("#submit").on("click", submit);
  };
  
  var stopwatch;

  var clockRunning = false;
  var time = 120;

  function submit () {
      time = 120;
      $(".scoreboard").text("0");

  }

  function start () {
    if (!clockRunning) {
        intervalId = setInterval(count, 120);
        clockRunning = true;
        $("#timer").text(time);
      }
    }
  function count() {
    time--;
  }
  