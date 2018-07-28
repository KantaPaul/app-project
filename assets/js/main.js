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

  $("#date-popover").popover({html: true, trigger: "manual"});
  $("#date-popover").hide();
  $("#date-popover").click(function (e) {
      $(this).hide();
  });

  $("#my-calendar").zabuto_calendar({
      cell_border: true,
      today: true,
      show_days: false,
      weekstartson: 0,
      nav_icon: {
        prev: '<i class="fa fa-chevron-circle-left"></i>',
        next: '<i class="fa fa-chevron-circle-right"></i>'
      },
      action: function () {
          return myDateFunction(this.id, false);
      },
      action_nav: function () {
          return myNavFunction(this.id);
      },
      ajax: {
          url: "assets/php/show_data.php?action=1",
          modal: true
      },
      legend: [
          {type: "text", label: "Special event", badge: "00"},
          {type: "block", label: "Regular event"}
      ]
  });

  $('.current-month').prepend($('.badge-today').text());

}); // end ready function

$(window).on('scroll', function() {
	
}); // END Scroll Function 

$(window).on('resize', function() {

}); // End Resize

})(jQuery);

function myDateFunction(id, fromModal) {
  $("#date-popover").hide();
  if (fromModal) {
      $("#" + id + "_modal").modal("hide");
  }
  var date = $("#" + id).data("date");
  var hasEvent = $("#" + id).data("hasEvent");
  if (hasEvent && !fromModal) {
      return false;
  }
  $("#date-popover-content").html('You clicked on date ' + date);
  $("#date-popover").show();
  return true;
}

function myNavFunction(id) {
  $("#date-popover").hide();
  var nav = $("#" + id).data("navigation");
  var to = $("#" + id).data("to");
  console.log('nav ' + nav + ' to: ' + to.month + '/' + to.year);
}