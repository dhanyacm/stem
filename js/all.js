// Sticky footer on full page layout
$(function(){
  var footerHeight = $(".footer").height();
  $("body").css("margin-bottom", footerHeight);
  $(".footer").css("margin-top", -footerHeight);
});

// Fiting video to whole width script https://github.com/davatron5000/FitVids.js
$(".vid-ban-video").fitVids();

// On clicking hamburger open navigation menu
$(".branding a").click(function() {
  $(".navigation-dropdown").slideToggle();
  $(".navigation-dropdown").mouseleave(function() {
    $(this).slideUp();
  });
  return false;
});

$clayTouchSection = $('.section.clay-touch');
$pencils = $('.section.pencils');

// Start animation when entering from top
$clayTouchSection.waypoint(function(direction) {
  if (direction === 'down') {
    $('.section.clay-touch img').attr("src","images/landing-page/section-2.gif");
  }
}, {
  offset: '25%'
});
// Change to static when leaving to bottom
$pencils.waypoint(function(direction){
  if (direction === 'down') {
    $('.section.clay-touch img').attr("src","images/landing-page/section-2-static.gif");
    $('.balloon-initial-position').animate({bottom: "100%"}, 3300, function() {
      $('.balloon').hide();
    });
  }
}, {
  offset: '25%'
});
// Start animation when scrolling up from next section
$pencils.waypoint(function(direction){
  if (direction === 'up') {
    $('.section.clay-touch img').attr("src","images/landing-page/section-2.gif");
  }
}, {
  offset: '25%'
});

// Fit video full width
$(".vid-ban-video").fitVids();

$('.expansion-grid').expansionGrid({
  position: true,
  positionOffset: -6
});

$('a.p1').mouseenter(function() {
  $('.content.p1').fadeIn();
});
$('a.p1').mouseleave(function() {
  $('.content.p1').fadeOut();
});

$('a.p2').mouseenter(function() {
  $('.content.p2').fadeIn();
});
$('a.p2').mouseleave(function() {
  $('.content.p2').fadeOut();
});

$('a.p3').mouseenter(function() {
  $('.content.p3').fadeIn();
});
$('a.p3').mouseleave(function() {
  $('.content.p3').fadeOut();
});

$('a.p4').mouseenter(function() {
  $('.content.p4').fadeIn();
});
$('a.p4').mouseleave(function() {
  $('.content.p4').fadeOut();
});

$('a.p5').mouseenter(function() {
  $('.content.p5').fadeIn();
});
$('a.p5').mouseleave(function() {
  $('.content.p5').fadeOut();
});

$('a.p6').mouseenter(function() {
  $('.content.p6').fadeIn();
});
$('a.p6').mouseleave(function() {
  $('.content.p6').fadeOut();
});

$('a.p7').mouseenter(function() {
  $('.content.p7').fadeIn();
});
$('a.p7').mouseleave(function() {
  $('.content.p7').fadeOut();
});

$('a.p8').mouseenter(function() {
  $('.content.p8').fadeIn();
});
$('a.p8').mouseleave(function() {
  $('.content.p8').fadeOut();
});

$('a.p9').mouseenter(function() {
  $('.content.p9').fadeIn();
});
$('a.p9').mouseleave(function() {
  $('.content.p9').fadeOut();
});

$('a.p10').mouseenter(function() {
  $('.content.p10').fadeIn();
});
$('a.p10').mouseleave(function() {
  $('.content.p10').fadeOut();
});

$('a.p11').mouseenter(function() {
  $('.content.p11').fadeIn();
});
$('a.p11').mouseleave(function() {
  $('.content.p11').fadeOut();
});

// Contact page email switch
$("#category").change(function() {
  if($(this).val() == "Request Thinkroom Presentation") {
    $(".contact-page-form form").attr("action", "https://formspree.io/thinkroom@chrysalis.world");
  } else if($(this).val() == "Hiring") {
    $(".contact-page-form form").attr("action", "https://formspree.io/hr@chrysalis.world");
  } else if($(this).val() == "ThinkRoom") {
    $(".contact-page-form form").attr("action", "https://formspree.io/thinkroom@chrysalis.world");
  } else if($(this).val() == "Corporate") {
    $(".contact-page-form form").attr("action", "https://formspree.io/ganesh@chrysalis.world");
  } else if($(this).val() == "Parents") {
    $(".contact-page-form form").attr("action", "https://formspree.io/thinkroom@chrysalis.world");
  } else if($(this).val() == "General") {
    $(".contact-page-form form").attr("action", "https://formspree.io/contact@chrysalis.world");
  } else {
    $(".contact-page-form form").attr("action", "https://formspree.io/contact@chrysalis.world");
  }
});

// Only one collapse open at one time
var $myGroup = $('#accordion');
$myGroup.on('show.bs.collapse','.collapse', function() {
    $myGroup.find('.collapse.in').collapse('hide');
});
