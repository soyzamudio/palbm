'use strict';

$(document).ready(function() {
  $('.inner').click(function() {
    $('#myModal').modal();
    $('.modal-body').css('padding', '200px').css('background', 'url(' + $(this).data('photo') + ') no-repeat center center').css('background-size', 'cover');
  });
});
