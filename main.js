$(document).ready(function() {

	$('.home-div').hide();
	$('.page-pic').hide();
	$('.home-div').fadeIn(500);
	$('.page-pic').fadeIn(500);

	$('.page-pic').hover(function() {
		$(this).css('cursor', 'pointer');
		$(this).animate({width:'50%', height: '50%'}, 'slow');
	});

	/*$('.page-pic').mouseleave(function() {
		$(this).effect('scale', {percent:80}, 1000);
	});*/

});