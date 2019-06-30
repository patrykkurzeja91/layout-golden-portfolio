$(document).ready(function () {
	AOS.init({
		// disable: function () {
		// 	var maxWidth = 768;
		// 	return window.innerWidth < maxWidth;
		// }
	});

	//toggle 'active'class to btn
	toggleBtn();
	// showText();
	//toggle 'show'class in navbar-collapsed
	hideMenu();
	var scrollLink = $('nav a');
	scrollLink.click(function (e) {
		e.preventDefault();
		$("html, body").stop().animate({
			scrollTop: $(this.hash).offset().top
		}, 1000);
	});

	$(window).scroll(function () {
		//fixed navbar
		var scroll = $(window).scrollTop();
		if (scroll >= 50) {
			$("nav").addClass("fixed");
		} else {
			$("nav").removeClass("fixed");
		}
		//run parallax in hero
		parallax();

		//active watching on navbar links
		var scrollbarLocation = $(this).scrollTop();
		scrollLink.each(function () {
			var nav = $(this.hash);
			if (nav.length) {
				var sectionOffset = nav.offset().top - 60;
				if (sectionOffset <= scrollbarLocation) {
					$(this).parent().addClass('active');
					$(this).parent().siblings().removeClass('active');
				}
			}
		});
	});


	function parallax() {
		var wScroll = $(window).scrollTop();
		var servicesOffset = $('.services').offset().top;
		var teamOffset = $('.team').offset().top;
		var portfolioOffset = $('#continued').offset().top - 500;
		var timelineScroll = wScroll - portfolioOffset;

		if (wScroll < servicesOffset) {
			$('.parallax-bg').css('background-position', 'center ' + (wScroll * 0.25) + 'px');

		}
		if (wScroll < teamOffset && wScroll > portfolioOffset) {
			$('.last-item-content').css(
				'top', (-timelineScroll * 0.009) + 'rem');
		}


	}

	function toggleBtn() {
		$('#toggle-btn').click(function (e) {
			e.preventDefault();
			$(this).toggleClass('active');
		});
	}

	// funkcja która chowa menu podczas kliknięcia na link - odnośnik
	function hideMenu() {
		$('nav a').click(function (e) {
			e.preventDefault();
			$('.navbar-collapse').toggleClass('show');
			$('#toggle-btn').toggleClass('active');
		});
	}


});
