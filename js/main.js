/* =================================*/
/* 				Parallax: 			*/
/* =================================*/
$(window).on('mousemove', function(e){
	var mouseX = e.pageX;
	var mouseY = e.pageY;
	var w = (window.innerWidth / 2) - mouseX;
	var h = (window.innerHeight / 2) - mouseY;
	
	var layer = $('.parallax').find('.layer');

	layer.map(function(key, value) {
		var widthPosition = w * (key / 100);
		var heightPosition = h * (key / 100);
		$(value).css({
			'transform': 'translate3d(' + widthPosition + 'px, ' + heightPosition + 'px, 0)'
		})
	})
})


/* =================================*/
/* 			Hamburger menu: 		*/
/* =================================*/

var link = $('.nav_menu')

	link.click(function(event) {
		link.toggleClass('clicked');

		if ($(this).hasClass('clicked')) {
			$('.main-menu').css('visibility', 'visible');
			$('html, body').css('overflow', 'hidden');
		} else {
			$('.main-menu').css('visibility', 'hidden');
			$('html, body').css('overflow', 'auto');
		}

	});


/* =================================*/
/* 			Scroll 1 viewport: 		*/
/* =================================*/

(function () {
	
	$('.icon_arrow').click(function(e) {
		e.preventDefault();
		var hWindow = $(window).height();
		$('html, body').animate({ scrollTop: hWindow}, 800, 'swing');
		return false;

	});	

	$('.up_icon').click(function(e) {
		e.preventDefault();
		$('html, body').stop().animate({scrollTop: 0}, 800, 'swing');

	});

})();

/* =================================*/
/* 				Flipper:  			*/
/* =================================*/
$(function() {
      $('.authorization').on('click', function(e) {
          $('.flip-card').addClass('flipped');
          $('.flip-card_front').css('display', 'none');
          $('.flip-card_back').css('display', 'block');
          $('.authorization').addClass('clicked');
          e.stopPropagation()
      });
      $('.login_button').on('click', function(e) {
          $('.flip-card').removeClass('flipped');
          $('.flip-card_front').css('display', 'block');
          $('.flip-card_back').css('display', 'none');
          $('.authorization').removeClass('clicked');
          e.stopPropagation()
      });
      $(document).on('click', function(e) {
          if ($(e.target).parents(".flip-card").length == 0) {
              $('.flip-card').removeClass('flipped');
              $('.flip-card_front').css('display', 'block');
              $('.flip-card_back').css('display', 'none');
              $('.authorization').removeClass('clicked');
          }
      });
  });