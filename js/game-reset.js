/*==================================
*** RESET BOARD FUNCTION ***
==================================*/

const resetBoard = () => {

  // remove filled boxes
  $('.boxes').each(() => {
    $('.box').removeClass('box-filled-1');
    $('.box').removeClass('box-filled-2');
    $('.box').css('background-image', 'none');
  });

  // remove win page
  $('#finish').remove();

  // show board
  $('#board').show();

}
