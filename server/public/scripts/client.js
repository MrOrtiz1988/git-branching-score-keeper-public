var team1score = 0;
var team2score = 0;

$(document).ready(function(){
  console.log('jQuery sourced.');
  addEventHandlers();
  updateScoreHTML();
});

function addEventHandlers() {
  // Add four click handlers here

  // After increasing or decreasing the score,
  // call the updateScoreHTML function
}

function updateScoreHTML() {
  $('#t1score').text(team1score);
  $('#t2score').text(team2score);
}
