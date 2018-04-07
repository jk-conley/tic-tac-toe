/*=====================
*** VARIABLES ***
=====================*/

/*=====================
INSTANCES OF PLAYER
=====================*/

const player1 = new Player($('#player1'), 'box-filled-1', 'x.svg');
const player2 = new Player($('#player2'), 'box-filled-2', 'o.svg');

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

/*=====================
*** FUNCTIONS ***
=====================*/

/*===================================================
ALTERNATE PLAYERS AFTER THEY PLACE A SYMBOL ON BOARD
===================================================*/

const alternatePalyers = () => {

  $('.boxes').on('click', () => {
    if (player1.id.hasClass('active')) {
      player1.id.removeClass('active');
      player2.id.addClass('active');
    } else {
      player2.id.removeClass('active');
      player1.id.addClass('active');
    }
  });
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
      // player2 is active and square is empty
      else if (player2.id.hasClass('active') && !($(this).hasClass(player1.boxFilled) || $(this).hasClass(player2.boxFilled))) {
        $(this).css('background-image', 'url(./img/x.svg)');
      }

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
    // is player2
    else {
      $(this).addClass(player2.boxFilled);
    }

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
  }
  // row 2
  else if (box4.hasClass(boxFilled) && box5.hasClass(boxFilled) && box6.hasClass(boxFilled)) {
    console.log(`${player} is the winner!`);
  }
  // row 3
  else if (box7.hasClass(boxFilled) && box8.hasClass(boxFilled) && box9.hasClass(boxFilled)) {
    console.log(`${player} is the winner!`);
  }
  /* VERTICAL WINS */
  // col 1
  else if (box1.hasClass(boxFilled) && box4.hasClass(boxFilled) && box7.hasClass(boxFilled)) {
    console.log(`${player} is the winner!`);
  }
  // col 2
  else if (box2.hasClass(boxFilled) && box5.hasClass(boxFilled) && box8.hasClass(boxFilled)) {
    console.log(`${player} is the winner!`);
  }
  // col 3
  else if (box3.hasClass(boxFilled) && box6.hasClass(boxFilled) && box9.hasClass(boxFilled)) {
    console.log(`${player} is the winner!`);
  }
  /* DIAGONAL WINS */
  // Top left to bottom right
  else if (box1.hasClass(boxFilled) && box5.hasClass(boxFilled) && box9.hasClass(boxFilled)) {
    console.log(`${player} is the winner!`);
  }
  // Top right to left bottom
  else if (box3.hasClass(boxFilled) && box5.hasClass(boxFilled) && box7.hasClass(boxFilled)) {
    console.log(`${player} is the winner!`);
  }

}

/*====================================
CHECK IF PLAYER 1 OR PLAYER 2 WINS
====================================*/

const checkIfWinner = () => {

  $('.boxes').on('click', () => {
    isWinner('Player 1', player1.boxFilled);
    isWinner('Player 2', player2.boxFilled);
  });

}