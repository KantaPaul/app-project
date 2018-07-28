(function($) {
"use strict";

/*------------------------------------------------------------------
[Javascript Table of contents]


-------------------------------------------------------------------*/

$(window).on('load', function() {
	
}); // END load Function 

$(document).ready(function() {
  if ($('.banner-slider').length > 0) {
    var swiper = new Swiper('.banner-slider', {
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
  }

  if ($('.pricing-slider').length > 0) {
    $('.pricing-slider').owlCarousel({
        items: 3,
        mouseDrag: false,
        autoplay: false,
        nav: false,
        margin: 30,
        dots: false,
        responsive: {
          0: {
            items: 1,
            mouseDrag: true,
            loop: true,
          },
          768: {
            items: 2,
            mouseDrag: true
          },
          1024: {
            items: 3,
            mouseDrag: false,
            loop: false
          }
        }
    });
  }
}); // end ready function

$(window).on('scroll', function() {
	
}); // END Scroll Function 

$(window).on('resize', function() {

}); // End Resize

})(jQuery);