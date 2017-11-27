$(document).ready(function(){
    $('.slider').bxSlider({
    	pager: false,
    	nextText: '',
    	prevText: '',
    	nextSelector: '.slider_nav_next',
    	prevSelector: '.slider_nav_prev'
    });

	$(".second_row_button").click(function () {
		$(".second_row_button").removeClass("actived");
		$(this).addClass("actived");
	});

	$(".first_row_button").click(function () {
		$(".first_row_button").removeClass("actived");
		$(this).addClass("actived");
	});
});