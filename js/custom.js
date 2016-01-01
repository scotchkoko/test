// JavaScript Document

$(document).ready(function(){
	
/* ----  search Box ---- */
	$('input').click(function(e){
		e.stopImmediatePropagation();
		$('input').addClass('active');
		$('input').css('background-image','none');	
		console.log(this);
	});
	$('*').click(function(){
		if($('input').hasClass('active')) {
			$("form").each(function() {  
				this.reset();  
			});
			$('input').css('background-image','url(img/search.png)');	
			$('input').removeClass('active');
			console.log(this);
		}
	});


/* ----  slide ---- */
	var scrollTop = $(this).scrollTop();
	$(window).scroll(function(){
		scrollTop = $(this).scrollTop();
	});
	
	$('div#footer_Contents').hide();
	
	$('div#footer > img').click(function(){
		if(!$('div#footer_Contents').hasClass('up')) {
			$('div#footer_Contents').slideDown(800);
			$('div#footer_Contents').addClass('up');
			$('div#footer > img').css({
				'animation':'rotate 0.8s linear',
				'animation-fill-mode':'forwards',
			});
			scrollTop += 250;
			$('html, body').stop().animate({scrollTop : scrollTop}, 800);
		} else if($('div#footer_Contents').hasClass('up')) {
			$('div#footer_Contents').removeClass('up');
			$('div#footer_Contents').slideUp(800);
			$('div#footer > img').css({
				'animation':'re 0.8s linear',
				'animation-fill-mode':'forwards',
			});
		}
		
	});


});