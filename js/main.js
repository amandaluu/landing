$(document).ready(function() {
  $('section#screenshots a').on('click', function() {
    $('div#modal img').attr('src', $(this).attr('data-image-url') );
  });

  var nav = $('.navbar-fixed-top');

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
      nav.addClass('effect');
    } // end if
    else {
      nav.removeClass('effect');
    } // end else
  }); // end .scroll
});
