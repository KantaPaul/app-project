(function($) {
"use strict";

/*------------------------------------------------------------------
[Javascript Table of contents]


-------------------------------------------------------------------*/

function convertCurrency() {
  let select = $('.curencyConvert'),
      hours = $(select)[0].value,
      totalHours = parseInt(Math.floor(hours * 60), 10) || 0,
      minutes = $(select)[1].value,
      totalMinutes = parseInt(minutes, 10) || 0,
      totalTime = totalHours + totalMinutes,
      resultCash = $('.result-cash'),
      resultCashValue = parseFloat($(resultCash).attr('per-minute'), 10) || 0,
      serviceCharge = parseFloat($(resultCash).attr('service-charge'), 10) || 0,
      totalAmaunt = Math.floor((resultCashValue * totalTime) + serviceCharge);
      $('.result-minutes').text(`${totalTime} Minutes`);
      $('.result-cash').text(`BDT ${totalAmaunt}`);
}

function contentCenter() {
  let footer = $('.footer .mybadge').outerHeight(true),
      confirmContent = $('.confirm-massage-content');
  confirmContent.css('marginTop', -(footer));
}

$(window).on('load', function() {
  contentCenter();
}); // END load Function 


$(document).ready(function() {

  contentCenter();

  $('.curencyConvert').on('change', function () {
    convertCurrency();
  });

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

$(window).on('scroll', function() {
	
}); // END Scroll Function 

$(window).on('resize', function() {
  contentCenter();
}); // End Resize

})(jQuery);