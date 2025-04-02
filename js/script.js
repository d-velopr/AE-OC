(function($) {

	"use strict";

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var sticky_Header = $('.sticky-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 300) {
				sticky_Header.addClass("animated slideInDown")
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				sticky_Header.removeClass("animated slideInDown")
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}

	headerStyle();

	//Submenu Dropdown Toggle
	if($('.main-header .navigation > li.dropdown ul').length){
		$('.main-header .navigation > li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

		//Dropdown Button
		$('.main-header .navigation li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});

		//Megamenu Toggle
		$('.main-header .main-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('.mega-menu').slideToggle(500);
		});

		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}


	//Open Main Menu
	if($('.main-header-bar .nav-toggler .toggler-btn').length){
		$('.main-header-bar .nav-toggler .toggler-btn').on('click', function(e) {
			e.preventDefault();
			$(this).toggleClass('active');
			$('.main-nav-outer').toggleClass('now-visible');
		});
	}

    // fixed Top bar Dropdown Toggle
    if($('.fixed-top-bar .main-box > .main-menu li.dropdown ul').length){
    $('.fixed-top-bar .main-box > .main-menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

    //Dropdown Button
    $('.fixed-top-bar .main-box > .main-menu li.dropdown .dropdown-btn').on('click', function() {
    $(this).prev('ul').slideToggle(500);
    });

    //Megamenu Toggle
    $('.fixed-top-bar .main-box > .main-menu li.dropdown .dropdown-btn').on('click', function() {
    $(this).prev('.mega-menu').slideToggle(500);
    });

    //Disable dropdown parent link
    $('.navigation li.dropdown > a').on('click', function(e) {
    e.preventDefault();
    });
    }


	//Search Popup
	if($('#search-popup').length){

		//Show Popup
		$('.fixed-search-box-btn').on('click', function() {
			$('#search-popup').addClass('popup-visible');
		});
		$(document).keydown(function(e){
	        if(e.keyCode == 27) {
	            $('#search-popup').removeClass('popup-visible');
	        }
	    });
		//Hide Popup
		$('.close-search,.search-popup .overlay-layer').on('click', function() {
			$('#search-popup').removeClass('popup-visible');
		});
	}


	//Main Menu Dropdown Toggle
	if($('.main-nav-box .navigation > li.dropdown > ul').length){

		//Show Submenu
		$('.main-nav-box .navigation > li.dropdown > a').on('click', function(e) {
			e.preventDefault();
			$(this).parent('li').addClass('open');
			$(this).parents('.navigation').addClass('subnav-visible');
		});

		//Hide Submenu
		$('.main-nav-box .navigation li > a[href="#menu-back"]').on('click', function(e) {
			e.preventDefault();
			$(this).parents('.navigation').removeClass('subnav-visible');
			$(this).parents('li').removeClass('open');
		});

	}


	//Update Fixed Nav Position
	function fixedNavStyle() {
		if($('.fixed-top-bar').length){
			var windowHeight = $(window).height();
			var windowpos = $(window).scrollTop();
			var fixedBar = $('.fixed-top-bar');
			if (windowpos >= windowHeight) {
				$('body').addClass('banner-height-reached');
				fixedBar.addClass('now-fixed');
			} else {
				$('body').removeClass('banner-height-reached');
				fixedBar.removeClass('now-fixed');
			}
		}
	}

	fixedNavStyle();


	//Progress Bar
	if($('.message-search-box-outer').length){
		$('.message-search-box-outer').on('click', function () {
			$('.dez-quik-search').addClass('view-top-search');
		});
	}

	//Progress Bar
	if($('#quik-search-remove').length){
		$('#quik-search-remove').on('click', function () {
			$('.dez-quik-search').removeClass('view-top-search');
		});
	}


	// Features Carousel
	if ($('.features-carousel').length) {
		$('.features-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			rtl: true,
			smartSpeed: 700,
			autoplay: false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});
	}


	// News Carousel
	if ($('.news-carousel').length) {
		$('.news-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			rtl: true,
			smartSpeed: 700,
			autoplay: false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:2
				},
				1200:{
					items:2
				}
			}
		});
	}


	// Testimonial Carousel
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			rtl: true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:2,
					margin:50
				},
				1200:{
					items:2
				}
			}
		});
	}


	// Testimonial Carousel Two
	if ($('.testimonial-carousel-two').length) {
		$('.testimonial-carousel-two').owlCarousel({
			loop:true,
			margin:100,
			nav:true,
			rtl: true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				800:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});
	}


	// Testimonial Carousel Three
	if ($('.testimonial-carousel-three').length) {
		$('.testimonial-carousel-three').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			rtl: true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				800:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});
	}


	// Sponsors Carousel
	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			rtl: true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1200:{
					items:5
				}

			}
		});
	}


	// Two Item Carousel
	if ($('.two-item-carousel').length) {
		$('.two-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			rtl: true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:2
				},
				1200:{
					items:2
				}

			}
		});
	}


	// Three Item Carousel
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			rtl: true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:3
				}

			}
		});
	}


	//Client Testimonial Carousel
	if ($('.client-testimonial-carousel').length && $('.client-thumbs-carousel').length) {

		var $sync3 = $(".client-testimonial-carousel"),
			$sync4 = $(".client-thumbs-carousel"),
			flag = false,
			duration = 500;

			$sync3
				.owlCarousel({
					loop:true,
					items: 1,
					rtl: true,
					margin: 0,
					nav: true,
					navText: [ '<span class="fas fa-long-arrow-alt-left"></span>', '<span class="fas fa-long-arrow-alt-right"></span>' ],
					dots: true,
					autoplay: true,
					autoplayTimeout: 5000
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = false;
						$sync4.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});

			$sync4
				.owlCarousel({
					loop:true,
					margin:25,
					items: 1,
					nav: false,
					navText: [ '<span class="icon flaticon-left-arrow-2"></span>', '<span class="icon flaticon-right-arrow-1"></span>' ],
					dots: false,
					rtl: true,
					center: false,
					autoplay: true,
					autoplayTimeout: 5000,
					responsive: {
						0:{
				            items:1,
				            autoWidth: false
				        },
				        400:{
				            items:1,
				            autoWidth: false
				        },
				        600:{
				            items:1,
				            autoWidth: false
				        },
				        1000:{
				            items:1,
				            autoWidth: false
				        },
						1200:{
				            items:1,
				            autoWidth: false
				        }
				    },
				})

		.on('click', '.owl-item', function () {
			$sync3.trigger('to.owl.carousel', [$(this).index(), duration, true]);
		})
		.on('changed.owl.carousel', function (e) {
			if (!flag) {
				flag = true;
				$sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);
				flag = false;
			}
		});
	}



	// Services Carousel
	if ($('.services-carousel').length) {
		$('.services-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			rtl: true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:2
				},
				1024:{
					items:3
				}
			}
		});
	}


	// Service Detail Slider
	if ($('.service-detail-slider').length) {
		$('.service-detail-slider').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			rtl: true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});
	}


	// Product Carousel
	if ($('.project-carousel').length) {
		$('.project-carousel').owlCarousel({
			loop:true,
			margin:6,
			nav:false,
			rtl: true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1400:{
					items:5
				},
				1600:{
					items:6
				}
			}
		});
	}


	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){

			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);

			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}

		},{accY: 0});
	}


	if($('.timer').length){
	   $(function(){
		    $('[data-countdown]').each(function() {
		   var $this = $(this), finalDate = $(this).data('countdown');
		   $this.countdown(finalDate, function(event) {
		     $this.html(event.strftime('%D days %H:%M:%S'));
		   });
		 });
		});

	   $('.cs-countdown').countdown('').on('update.countdown', function(event) {
		  var $this = $(this).html(event.strftime('<div><span>%D</span><h6>day</h6></div> <div><span>%H</span><h6>hrs</h6></div> <div><span>%M</span><h6>min</h6></div> <div><span>%S</span><h6>sec</h6></div>'));
		});
	}

	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}

			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}

	//Progress Bar / Levels
	if($('.progress-levels .progress-box .bar-fill').length){
		$(".progress-box .bar-fill").each(function() {
			var progressWidth = $(this).attr('data-percent');
			$(this).css('width',progressWidth+'%');
			$(this).children('.percent').html(progressWidth+'%');
		});
	}

	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}

	//Price Range Slider
	if($('.vehicle-year-slider').length){
		$( ".vehicle-year-slider" ).slider({
			range: true,
			min: 1885,
			max: 2025,
			values: [ 1885, 2025 ],
			slide: function( event, ui ) {
			$( "input.property-amount" ).val( ui.values[ 1 ] );
			}
		});

		$( "input.property-amount" ).val( $( ".vehicle-year-slider" ).slider( "values", 1 ) );
	}

	//Price Range Slider
	if($('.price-range-slider').length){
		$( ".price-range-slider" ).slider({
			range: true,
			min: 0,
			max: 90,
			values: [ 8, 85 ],
			slide: function( event, ui ) {
			$( "input.property-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});

		$( "input.property-amount" ).val( $( ".price-range-slider" ).slider( "values", 0 ) + " - $" + $( ".price-range-slider" ).slider( "values", 1 ) );
	}

	//Custom Seclect Box
	if($('.custom-select-box').length){
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}

	//Gallery Filters
	 if($('.filter-list').length){
	 	 $('.filter-list').mixItUp({});
	 }

	 //Jquery Spinner / Quantity Spinner
	if($('.quantity-spinner').length){
		$("input.quantity-spinner").TouchSpin({
		  verticalbuttons: true
		});
	}


	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}


	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				subject: {
					required: true
				},
				phone: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}


	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);

		});
	}


	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

	$(window).on('scroll', function() {
		headerStyle();
		fixedNavStyle();
	});

/* ==========================================================================
   When document is loaded, do
   ========================================================================== */

	$(window).on('load', function() {
		handlePreloader();
		fixedNavStyle();
	});

})(window.jQuery);
