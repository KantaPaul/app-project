(function($) {
"use strict";

/*------------------------------------------------------------------
[Javascript Table of contents]


-------------------------------------------------------------------*/




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

  $('#datepicker').Zebra_DatePicker({
    always_visible: $('.datapicker'),
    show_other_months: false,
    days_abbr: false,
  });

	$(".dp_caption").html(function(){
    var text= $(this).text().trim().split(" "),
        first = text.shift();

    return (text.length > 0 ? "<span class='month_name'>"+ first + "</span> " : first) + text.join(" ");
  });

  $('.dp_caption').prepend('<span class="today">'+ $('.dp_current').text() +'</span>');

}); // end ready function

$(window).on('load', function() {
  
}); // END load Function 

function perfectCenter() {
  // var marginRight = ($('.dp_caption').outerWidth(true) / 2) - $('.today').outerWidth(true);
  // $('.today').css({
  //   marginRight: marginRight
  // })
}

$(window).on('load', function() {
	perfectCenter()
}); // END load Function 

$(document).ready(function () {
  perfectCenter()
})

$(window).on('scroll', function() {
	
}); // END Scroll Function 

$(window).on('resize', function() {
  perfectCenter();
}); // End Resize

})(jQuery);