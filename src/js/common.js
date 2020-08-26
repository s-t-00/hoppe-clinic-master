$(function () {
  var isTouchDevice = (window.ontouchstart === null);
  if (isTouchDevice) {
    $("body").addClass("is_touchDevice");
  } else {
    $("body").addClass("is_notTouchDevice");
  }

  var $navbar_block = $(".navbar-block");
  $(".navbar-opener").bind("click", function () {
    if ($navbar_block.hasClass("show")) {
      $(this).css("backgroundImage", "url(/images/navbar-opener.svg)");
      $navbar_block.removeClass("show");
    } else {
      $(this).css("backgroundImage", "url(/images/navbar-opener-close.svg)");
      $navbar_block.addClass("show");
    }
  });

  var $quick_diagnosis = $(".quick-diagnosis");
  $quick_diagnosis.fadeOut(0);
  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      $quick_diagnosis.fadeIn();
    } else {
      $quick_diagnosis.fadeOut();
    }
  });

  var $clickable_input = $(".js-clickable");
  $clickable_input.bind("click", function () {
    var target = "input[type=radio], input[type=checkbox]";
    $(this).siblings(target).prop("checked", true);
  });

  var $number_format = $(".js-numberformat");
  $number_format.each(function () {
    var num = $(this).text();
    $(this).text(new Intl.NumberFormat('en-IN', {
      maximumSignificantDigits: 3
    }).format(num));
  });

  var $accordion = $(".js-accordion");
  $accordion.each(function () {
    $target = $(this).siblings("[data-rel='js-accordion']");
    if ($target.attr('data-show') != true) {
      $target.slideUp(0);
    }
  }).bind("click", function () {
    $target = $(this).siblings("[data-rel='js-accordion']");
    $target.slideToggle(200);
  });

  $modal_close = $(".js-modal-close");
  $modal_close.bind("click", function () {
    $(".modal-overlay").css("display", "none");
  });
});