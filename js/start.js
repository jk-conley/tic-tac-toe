/*======================================================
  ON PAGE LOAD SHOW START PAGE AND BTN CLICK SHOW BOARD
======================================================*/

const startGame = () => {

  // on page load hide everything except start div
  $('#board').hide();

  // create start page
  $('body').prepend(`
      <div class="screen screen-start" id="start">
        <header>
          <h1>Tic Tac Toe</h1>
          <a href="#" class="button">Start game</a>
        </header>
      </div>`);

  // on page load show start page
  $('#start').show();

  // when player clicks "Start game"
  $('#start .button').on("click", () => {

    // get player name
    const name = prompt("What is your name?");
    console.log(name);

    // display player name
    $('#board header').append(`<p class="player-name">${name}</p>`)

    // hide start page
    $('#start').hide();

    // make player active
    $(`#player1`).addClass('active');

    // show board
    $('#board').show();

  });

}





