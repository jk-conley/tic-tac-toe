/*================
*** RUN GAME ***
================*/

$(document).ready(function () {

  // start game
  startGame();

  // check to see whose turn it is
  alternatePalyers();

  // when player hovers show silohoutte of their symbol
  playerHovers();

  // If square is empyt fill it with proper symbol
  fillBox();

  // Check for Winner or Draw
  checkIfWinner();

});