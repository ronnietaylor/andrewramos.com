myApp = {};

$(document).foundation();

$(document).ready(function() {

  $('.portfolio-item').mouseenter(function(){
    $(this).find('.portfolio-deets').fadeIn();
  }).mouseleave(function() {
    $(this).find('.portfolio-deets').fadeOut();
  });
});