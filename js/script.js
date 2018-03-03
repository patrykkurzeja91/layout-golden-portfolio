$(document).ready(function () {
	AOS.init({
		disable: function () {
			var maxWidth = 768;
			return window.innerWidth < maxWidth;
		}
	});
	//toggle figcaption in portfolio
	toggleImgFigcaption()
	//toggle 'active'class to btn
	toggleBtn();
	// showText();
	//toggle 'show'class in navbar-collapsed
	//hideMenu();
	var scrollLink = $('header a');
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
		if (wScroll < servicesOffset) {
			$('.parallax-bg').css('background-position', 'center ' + (wScroll * 0.25) + 'px');
		}

	}
	//function showText not working yet
	// function showText() {
	// 	$('.timeline-item').click(function (e) {
	// 		e.preventDefault();
	// 		$('.sub-title p').closest('span').toggleClass('hidden-on-start');
	// 	});
	// }
	function toggleBtn() {
		
		$('#toggle-btn').click(function (e) {
			e.preventDefault();
			$(this).toggleClass('active');
		});
	}
	function toggleImgFigcaption() {
		if (document.documentElement.clientWidth <= 768) {
			$('.portfolio-photo').click(function (e) {
				e.preventDefault();
				$(this).closest('figure').toggleClass('active');
			});
		}
		
		
	}
	
	/* funkcja która chowa menu podczas kliknięcia na link - odnośnik
	function hideMenu() {
		$('#home a').click(function (e) {
			e.preventDefault();
			$('.navbar-collapse').toggleClass('show');
		});
	}
*/
  
});