
$(function() {
	'use strict';
/*smoothly scroll to element and 
add active class on navbar link and remove from siblings*/
$('.navbar li a').click(function(e){
  e.preventDefault();
  $('html , body').animate({
  	scrollTop:$('#'+$(this).data('scroll')).offset().top+1
  },1000);
  $(this).addClass('active').parent().siblings().find('a').removeClass('active');
  });
/* scroll-to-top*/
$(window).scroll(function(){
var scrollToTop=$('.scroll-to-top');
if($(window).scrollTop()>1000 ){
	if(scrollToTop.is(':hidden'))
	
		scrollToTop.fadeIn(500);
	}
else
      {  scrollToTop.fadeOut(500);}

});
$('.scroll-to-top').click(function(e){
   e.preventDefault;
   $('html,body').animate({
   	scrollTop:0
   },1000)
});


});