/*=====================
*** VARIABLES ***
=====================*/

/*=====================
INSTANCES OF PLAYER
=====================*/

const player1 = new Player($('#player1'), 'box-filled-1', 'url(./img/o.svg)');
const player2 = new Player($('#player2'), 'box-filled-2', 'url(./img/x.svg)');

/*=====================
BOARD VARIABLES
=====================*/

const box1 = $('#one'),
  box2 = $('#two'),
  box3 = $('#three'),
  box4 = $('#four'),
  box5 = $('#five'),
  box6 = $('#six'),
  box7 = $('#seven'),
  box8 = $('#eight'),
  box9 = $('#nine');

let count = 0;
const lis = document.querySelectorAll('.box');

// assign all lis a background style of none
for (let li of lis) {
  li.style.backgroundImage = 'none';
}

/*=====================
*** FUNCTIONS ***
=====================*/

/*===================================================
ALTERNATE PLAYERS AFTER THEY PLACE A SYMBOL ON BOARD
===================================================*/

const alternatePlayers = () => {

  if (player1.id.hasClass('active')) {
    player1.id.removeClass('active');
    player2.id.addClass('active');
  } else if (player2.id.hasClass('active')) {
    player2.id.removeClass('active');
    player1.id.addClass('active');
  }

}

/*==============================================================
CURRENT PLAYER HOVERS OVER, SHOW THE SILOHOUTTE OF THEIR SYMBOL
==============================================================*/

const playerHovers = () => {

  $('.box').hover(
    // Handler for hover in
    function () {
      // player1 is active and square is empty
      if (player1.id.hasClass('active') && !($(this).hasClass(player1.boxFilled) || $(this).hasClass(player2.boxFilled))) {
        $(this).css('background-image', 'url(./img/o.svg)');
      }
      // HUM*** use if you want to shut off pc player and play another human
      // player2 is active and square is empty
      // else if (player2.id.hasClass('active') && !($(this).hasClass(player1.boxFilled) || $(this).hasClass(player2.boxFilled))) {
      //   $(this).css('background-image', 'url(./img/x.svg)');
      // }

    },
    // Handler for hover out
    function () {
      if (!($(this).hasClass(player1.boxFilled) || $(this).hasClass(player2.boxFilled))) {
        $(this).css('background-image', 'none');
      }

    });

}

/*====================================
PLAYER CLICKS EMPTY BOX AND FILLS IT
====================================*/

const fillBox = () => {

  $('.box').on('click', function () {

    // is square empty
    if ($(this).hasClass(player1.boxFilled) || $(this).hasClass(player2.boxFilled)) {
      return false;
    }
    // is player1
    else if (player1.id.hasClass('active')) {
      $(this).addClass(player1.boxFilled);
    }
    // HUM*** use if you want to shut off pc player and play another human
    // is player2
    // else {
    //   $(this).addClass(player2.boxFilled);
    // }

  });

}

/*====================================
*** WINNING FUNCTIONS ***
====================================*/

/*====================================
CHECK BOXES TO SEE IF THERE IS A WIN
====================================*/

const isWinner = (player, boxFilled) => {

  /* HORIZONTAL WINS */
  // row 1
  if (box1.hasClass(boxFilled) && box2.hasClass(boxFilled) && box3.hasClass(boxFilled)) {
    console.log(`${player} is the winner!`);
    return true;
  }
  // row 2
  else if (box4.hasClass(boxFilled) && box5.hasClass(boxFilled) && box6.hasClass(boxFilled)) {
    console.log(`${player} is the winner!`);
    return true;
  }
  // row 3
  else if (box7.hasClass(boxFilled) && box8.hasClass(boxFilled) && box9.hasClass(boxFilled)) {
    console.log(`${player} is the winner!`);
    return true;
  }
  /* VERTICAL WINS */
  // col 1
  else if (box1.hasClass(boxFilled) && box4.hasClass(boxFilled) && box7.hasClass(boxFilled)) {
    console.log(`${player} is the winner!`);
    return true;
  }
  // col 2
  else if (box2.hasClass(boxFilled) && box5.hasClass(boxFilled) && box8.hasClass(boxFilled)) {
    console.log(`${player} is the winner!`);
    return true;
  }
  // col 3
  else if (box3.hasClass(boxFilled) && box6.hasClass(boxFilled) && box9.hasClass(boxFilled)) {
    console.log(`${player} is the winner!`);
    return true;
  }
  /* DIAGONAL WINS */
  // Top left to bottom right
  else if (box1.hasClass(boxFilled) && box5.hasClass(boxFilled) && box9.hasClass(boxFilled)) {
    console.log(`${player} is the winner!`);
    return true;
  }
  // Top right to left bottom
  else if (box3.hasClass(boxFilled) && box5.hasClass(boxFilled) && box7.hasClass(boxFilled)) {
    console.log(`${player} is the winner!`);
    return true;
  }
  // No Wins
  else {
    return false;
  }

}

/*====================
NEW GAME
====================*/

const newGame = () => {

  // reset the board for new game
  resetBoard();
  // set player 1 as active
  $('#player1').addClass('active');
  $('#player2').removeClass('active');
  // reset count for new game
  count = 0;

}

/*====================================
CREATE WIN PAGE
====================================*/

const createWinPage = (playerNum, msg) => {

  $('body').prepend(`<div class="screen screen-win screen-win-${playerNum}" id="finish">
                      <header>
                        <h1>Tic Tac Toe</h1>
                        <p class="message">${msg}</p>
                        <a href="#" class="button">New game</a>
                      </header>
                    </div>`
  );

  // add listener when div is created
  $('#finish .button').on('click', () => {
    newGame();
  });

}

/*====================================
CHECK IF PLAYER 1 OR PLAYER 2 WINS
====================================*/

const checkIfWinner = () => {

  // if player two wins
  if (isWinner('Player 2', player2.boxFilled)) {

    // hide game board
    $('#board').hide();

    // display win-two page
    createWinPage('two', 'WINNER');

  }
  // if player 1 wins
  else if (isWinner('Player 1', player1.boxFilled)) {

    // hide game board
    $('#board').hide();

    // display win-one page with player name
    const name = $('.player-name').text();
    let displayName = name.charAt(0).toUpperCase() + name.slice(1);

    createWinPage('one', `${displayName} Wins!`);

  }

}

/*================================================
IF NO WINS AND ALL BOXES ARE FILLED THEN TIE GAME
================================================*/

const isTie = () => {

  $('.boxes').each((i) => {
    // if filled count increments by 1
    if ($('.box').hasClass(player1.boxFilled) || $('.box').hasClass(player2.boxFilled)) {
      count++;
    }
    // when count reaches 9 and there is no winner, it is a tie
    if (count === 9) {

      // hide game board
      $('#board').hide();

      // display win-one page
      createWinPage('tie', "It's a draw!");

    }

  });

}

/*================================================
ADDS COMPUTER PLAYER AS PLAYER 2 EASY MODE
================================================*/

// this creates a blind or easy mode pc player
const computerPlayerTurn = () => {

  // initialize temp array
  let newEmptyBoxes = [];

  // filter for empty boxes only
  newEmptyBoxes = Array.from(lis).filter((box) => {
    return box.style.backgroundImage === 'none';
  });
  console.log(newEmptyBoxes);

  // used a timeout so pc play wasn't so instant
  setTimeout(() => {
    // select a random empty box and fill it
    let randomNumber = Math.floor(Math.random() * newEmptyBoxes.length);
    newEmptyBoxes[randomNumber].classList.add(player2.boxFilled);
    newEmptyBoxes[randomNumber].style.backgroundImage = player2.symbol;

    // switch player
    alternatePlayers();

    // check for Winner
    checkIfWinner();

    // check if there is a tie
    isTie();

  }, 300);

  console.log(newEmptyBoxes);

}

/*====================
INITIALIZE FIRST GAME
====================*/

const initialize = () => {
  // start game
  startGame();

  // set listener on boxes to make changes based on click event
  $('.boxes').on('click', () => {

    // check to see whose turn it is
    alternatePlayers();

    // check for winner
    checkIfWinner();

    // check if there is a tie
    isTie();

    // computer plays
    computerPlayerTurn();

  });

  // when player hovers show silohoutte of their symbol
  // go to this function and uncomment player 2 for second Human player
  // comment out computerPlayerTurn()
  playerHovers();

  // If square is empyt fill it with proper symbol
  // go to this function and uncomment player 2 for second Human player
  // computerPlayerTurn()
  fillBox();

}
