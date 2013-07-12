// Custom JS app business here
var aRamos = {};

// Mimic media queries with JS so we can do smart stuff
if (document.documentElement.clientWidth <= 768){
	//alert('below 768');
}

// Basic Jquery bits below here

$(document).foundation();

$(document).ready(function() {

	// Add a hover effect to portfolio items.
  $('.portfolio-item').mouseenter(function(){
    $(this).find('.portfolio-deets').fadeIn();
  }).mouseleave(function() {
    $(this).find('.portfolio-deets').fadeOut();
  });

  $(".scroll").click(function(event){
   event.preventDefault();
   $('html,body').animate({scrollTop:$('#the-top').offset().top}, 500);
  });

  // Display the top-arrw when the scroll position is greater than 600px
  $(window).scroll( function(){
  
    var winheight = $('body').scrollTop();

    if(winheight >= '600') {
      $('#top-arrw').show()
    } 
    else if(winheight <= '600') {
      $('#top-arrw').hide();
    }
  });  

});