const player1 = new Player($('#player1'), 'box-filled-1', 'x.svg');
const player2 = new Player($('#player2'), 'box-filled-2', 'o.svg');

// Alternating Players

$('.boxes').on('click', function () {
  if (player1.id.hasClass('active')) {
    player1.id.removeClass('active');
    player2.id.addClass('active');
  } else {
    player2.id.removeClass('active');
    player1.id.addClass('active');
  }
});


// Current Player Mouses Over

$('.box').hover(
  // Handler for hover in
  function () {
    // player1 is active and square is empty
    if (player1.id.hasClass('active') && !($(this).hasClass(player1.boxFilled) || $(this).hasClass(player2.boxFilled))) {
      $(this).css('background-image', 'url(./img/o.svg)');
    } else if (player2.id.hasClass('active') && !($(this).hasClass(player1.boxFilled) || $(this).hasClass(player2.boxFilled))) {
      $(this).css('background-image', 'url(./img/x.svg)');
    }

  },
  // Handler for hover out
  function () {
    if (!($(this).hasClass(player1.boxFilled) || $(this).hasClass(player2.boxFilled))) {
      $(this).css('background-image', 'none');
    }

  });

// Players clicks empty square it fills with their symbol

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

// Does a player have 3 in a row

$('.boxes').on('click', function () {

  $('.box').each(function (index) {

    // check to see if the top three win


  });

});