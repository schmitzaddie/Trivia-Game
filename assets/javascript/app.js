window.onload = function() {
    $("#start").on("click", start);
    $("#submit").on("click", submit);
  };
  var userPick;
  var correctAnswer = 0;
  var wrongAnswer = 0;
  var noAnswer = 0;
  var question = 0;

  var stopwatch;

  var clockRunning = false;
  var time = 120;

  function submit () {
      time = 120;
      $(".scoreboard").text("");

  }

  function count() {
    time--;
  }

  function start () {
    if (!clockRunning) {
        intervalId = setInterval(count, 120);
        clockRunning = true;
        $("#timer").text("Time remaining: " + time + " seconds");
      }
    }
 