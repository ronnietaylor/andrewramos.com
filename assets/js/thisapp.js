// Custom JS app business here
var aRamos = {};

// Mimic media queries with JS so we can do smart stuff
//  if (document.documentElement.clientWidth <= 768){
//    alert('below 768');
//  }

// Enable Zurb Foundation JS
$(document).foundation();

this.randomtip = function(){
  var length = $("#tips li").length;
  var ran = Math.floor(Math.random()*length) + 1;
  $("#tips li:nth-child(" + ran + ")").show();
};

$(document).ready(function() {

  // Display random client quote on home page
  randomtip();

	// Add a hover effect to portfolio items.
  $('.portfolio-item').mouseenter(function(){
    $(this).find('.portfolio-deets').fadeIn();
  }).mouseleave(function() {
    $(this).find('.portfolio-deets').fadeOut();
  });

  // Animate the scroll-to-top action
  $(".scroll").click(function(event){
   event.preventDefault();
   $('html,body').animate({scrollTop:$('#the-top').offset().top}, 500);
  });

  // Display the top-arrw when the scroll position is greater than 600px
  $(window).scroll( function(){
  
    var winheight = $('body').scrollTop();

    if(winheight >= '600') {
      $('#top-arrw').fadeIn()
    } 
    else if(winheight <= '600') {
      $('#top-arrw').fadeOut();
    }
  });

});