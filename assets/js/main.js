(function($) {
"use strict";

/*------------------------------------------------------------------
[Javascript Table of contents]


-------------------------------------------------------------------*/

$(window).on('load', function() {
	
}); // END load Function 

$(document).ready(function() {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
    },
  });
}); // end ready function

$(window).on('scroll', function() {
	
}); // END Scroll Function 

$(window).on('resize', function() {

}); // End Resize

})(jQuery);