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

function number_regex(number) {
	var regex = /(^(\+8801|8801|01|008801))[1|5-9]{1}(\d){8}$/;
	return regex.test(number);
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

  $(document).on('submit', '#on-demand-form', function (e) {
    e.preventDefault();
    var select = $('.curencyConvert'),
        hour = $(select)[0],
        hourValue = $(select)[0].value,
        minute = $(select)[1],
        minuteValue = $(select)[1].value,
        error = false,
        loc = window.location,
        pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1),
        baseUrl = $(this).attr('base-url');
  
      if (hourValue.toLowerCase() == 'select' && minuteValue.toLowerCase() == 'select' || $('.result-cash').text().length == 0) {
        $(hour).addClass('error');
        $(minute).addClass('error');
        error = true;
      } else {
        error = false;
        window.location.href = pathName+baseUrl;
      }
  });

  $(document).on('submit', '#confirmation-form', function(e) {
    e.preventDefault();
    var name = $('#input-name'),
        number = $('#input-number'),
        address = $('#input-address'),
        error = false;
    if ($(name).val().trim() === '') {
      $(name).addClass('error');
    } else {
      $(name).removeClass('error')
    }
    if ($(address).val().trim() === '') {
      $(address).addClass('error');
    } else {
      $(address).removeClass('error')
    }
    if ($(number).val().trim() === '') {
      $(number).addClass('error');
    } else if (!number_regex($(number).val()))  {
      $(number).addClass('error');
      if ($('.validate-text').length === 0) {
        $(number).after('<span class="validate-text">Number Example: +8801234567890 Max Carecter 14</span>');
      }
    } else {
      $(number).removeClass('error');
      $('.validate-text').remove();
    }
  });

}); // end ready function

$(window).on('scroll', function() {
	
}); // END Scroll Function 

$(window).on('resize', function() {
  contentCenter();
}); // End Resize

})(jQuery);