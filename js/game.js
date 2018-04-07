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

    if (player1.id.hasClass('active')) {
      $(this).css('background-image', 'url(./img/o.svg)');
    } else {
      $(this).css('background-image', 'url(./img/x.svg)');
    }

  },
  // Handler for hover out
  function () {
    $(this).css('background-image', 'none');

  });