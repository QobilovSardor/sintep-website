$(document).ready(function () {
	$('.accordion-content').hide(); // accordion-content elementlarni yopish
	$('.accordion-header').click(function () {
		$(this).next('.accordion-content').slideToggle();
		$(this).toggleClass('active');
		$(this).find('.icon').toggleClass('active');
		$('.accordion-content').not($(this).next('.accordion-content')).slideUp();
		$('.accordion-header').not($(this)).removeClass('active');
		$('.accordion-header').not($(this)).find('.icon').removeClass('down').addClass('up');
	});
});
