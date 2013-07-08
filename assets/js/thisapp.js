// Custom JS app business here
var aRamos = {};

// Mimic media queries with JS so we can do smart stuff
if (document.documentElement.clientWidth <= 768){
	//alert('below 768');
}

// Basic Jquery bits below here

$(document).foundation();

$(document).ready(function() {

  $('.portfolio-item').mouseenter(function(){
    $(this).find('.portfolio-deets').fadeIn();
  }).mouseleave(function() {
    $(this).find('.portfolio-deets').fadeOut();
  });
});