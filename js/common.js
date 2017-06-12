$(document).ready(function(){


	/*preloader*/

	$(window).on('load', function () {
	    var $preloader = $('#page-preloader'),
	        $spinner   = $preloader.find('.spinner');
	    $spinner.fadeOut(900);
	    $preloader.delay(1000).fadeOut('slow');
	});

	/*search form open*/

	$('.search-btn').on('click', function(){
		$('.navigation').toggleClass('hidden');
		$('.search-icon').toggleClass('hidden');
		$('.search-form').toggleClass('hidden');
	})


	/*search form close*/

	$('.search-close').on('click', function(){
		$('.navigation').toggleClass('hidden');
		$('.search-icon').toggleClass('hidden');
		$('.search-form').toggleClass('hidden');
	})

	/*search mobile*/

	$('.search-mobile-btn').on('click', function(){
		$('.search-mobile-icon').toggleClass('hidden');
		$('.search-form-mobile').toggleClass('hidden');
	})

	/*search mobile*/

	$('.search-close-mobile').on('click', function(){
		$('.search-mobile-icon').toggleClass('hidden');
		$('.search-form-mobile').toggleClass('hidden');
	})


	/*gamburger menu*/

	$('.gb-menu').click(function(){
		$('.navigation').slideToggle();
	})

	$('.dropdown-toggle').dropdown()

	/*slider*/

	$('.bxslider').bxSlider({
		mode: 'fade',
		captions: true,
		infiniteLoop: false,
		maxSliders: 1
	})

	/*wishlist style*/

	$('.fa-heart-o').on('click', function(){
		$(this).toggleClass('wich-btn-click')
	})

	/*About us slider*/

	$('.about-us-slider').bxSlider({
		mode: 'vertical',
		slideMargin: 10
	})

	/*About us mobile slider*/

	$('.about-us-mobile-slider').bxSlider({
		mode: 'fade',
		captions: true,
		infiniteLoop: false,
		maxSliders: 1,
		height: 250
	})


	/*My menu slideToggle*/

	$('.my-account-link').on('click', function(){
		$('.account').toggleClass('hidden');
	})

	/*register form*/

	$('.register-btn').on('click', function(){
		$('.sing-in-form').addClass('hidden');
		$('.sing-up').removeClass('hidden');
	})

	$('.login-btn-register').on('click', function(){
		$('.sing-in-form').removeClass('hidden');
		$('.sing-up').addClass('hidden');
	})


});