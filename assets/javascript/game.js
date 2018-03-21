function reset() {
  var randomNumber = Math.floor(Math.random() * 69) + 30;
  var myScore = 0;
  $("#target-score").html(randomNumber);
  $("#my-score").html(myScore);
  startGame();
}
function startGame() {
  var crystal1 = Math.floor(Math.random() * 12) + 1;
  var crystal2 = Math.floor(Math.random() * 12) + 1;
  var crystal3 = Math.floor(Math.random() * 12) + 1;
  var crystal4 = Math.floor(Math.random() * 12) + 1;

  var randomNumber = Math.floor(Math.random() * 69) + 30;
  var myScore = 0;

  $("#target-score").html(randomNumber);
  $("#my-score").html(myScore);

  $(".crystal1").attr("value", crystal1);
  $(".crystal2").attr("value", crystal2);
  $(".crystal3").attr("value", crystal3);
  $(".crystal4").attr("value", crystal4);

  $(".crystals")
    .off()
    .on("click", function() {
      var test1 = $(this).attr("value");
      myScore = parseInt(myScore) + parseInt(test1);
      $("#my-score").html(myScore);

      if (randomNumber === myScore) {
        alert("win");
        win++;
        $("#win").html(win);
        $("#target-score").html(0);
        reset();
      } else if (myScore > randomNumber) {
        alert("loser");
        loss++;
        $("#loss").html(loss);
        $("#target-score").html(0);
        reset();
      }
    });
}

startGame();
