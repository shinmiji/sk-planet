;(function(global,$, undefined){
	'use strict';



	// stick menu
	var $header = $('header');
	var $main = $('main');

	// skip navigation
	var $skip_navigation = $('#skip_nav');
	var $skip_links = $skip_navigation
				.addClass('skip-content')
				.find('a').addClass('a11y-hidden focusable');

	// facebook link
	var $facebook_unfd = $('.facebook_unfd');
	var $facebook = $('#facebook');

	// gnb menu
	var $one_depth = $('.one_depth>li');
	var $two_depth = $('.two_depth');
	var $three_depth =  $('.three_depth');
	var $two_depth_links = $('>li>a', $two_depth);

	// family site
	var $family_site_group = $('.family_site_group');

	// toggle view
	var $toggle_view_target = null;
	var $toggle_view = null;

	initFunction();

	function initFunction() {
		// stick menu
		stickMenu();
		
		//advertisement bxslider
		adBxSliderEvent();

		// banner bxslider
		bannerBxSliderEvent();

		// toggle view bxslider
		toggleViewBxSliderEvent();

		// skip navigation
		$skip_links.on('click', function(e) {
			e.preventDefault();
			var $target = $(e.target.getAttribute('href'));
			$target.attr('tabindex', -1).focus();
		});

		// facebook link
		$facebook_unfd.on('click', function(event) {
			event.preventDefault();
			facebookLink.call(this);
		});
		$('li:last-child', $facebook).on('focusout', function(){
			facebookLink.call(this,'focusout');
		});

		// family site
		$family_site_group.on('click', function() {
			$(this).toggleClass('view');
		});


		// gnb menu start
		// gnb one depth mouse enter
		$one_depth.on('mouseenter', function(){
			oneDepthMouseenter.call(this);
		});

		// gnb one depth mouse leave
		$one_depth.on('mouseleave', function() {
			oneDepthMouseleave.call(this);
		});

		// gnb two depth mouse enter
		$two_depth_links.on('mouseenter', function() {
			twoDepthLinksMouseenter.call(this);
		});

		// gnb two depth mouse leave
		$two_depth.on('mouseleave' , function() {
			twoDepthMouseleave.call(this);
		});
		$two_depth_links.on('mouseleave', function() {
			$(this).css({
				'background-color': 'transparent',
				'background-image': 'none'
			});
		});
		$three_depth.on('mouseenter', function() {
			$(this).prev().css({
				'background': 'red url("images/header/gnb/gnb_bg1.gif") no-repeat center bottom'
			})
		});
		$three_depth.on('mouseleave', function() {
			$(this).prev().css({
				'background': 'transparent'
			})
		});
		// gnb menu end

		// toggle view
		$('.toggle_view_link > a > img').on('click', function(event) {
			event.preventDefault();
			toggleViewClick.call(this);
		});

		$('.clse_btn').on('click', function(event) {
			event.preventDefault();
			clseBtnClick();
		});

	};

	// stick menu
	function stickMenu() {
		global.onscroll = function() {
			if ($(this).scrollTop() > 0 ) {
				$header.css('position', 'fixed');
				$main.css('margin-top', '112px');
			} else {
				$header.css('position', 'absolute');
				$main.css('margin-top', '112px');
			}
		}
	}

	//advertisement bxslider
	function adBxSliderEvent(){
		$('#bxslide1').bxSlider({
			auto: true,
			autoControls: true,
			pause: 1500,
			autoControlsCombine: true,
		});
	};
	
	// banner bxslider
	function bannerBxSliderEvent(){
		$('#bxslider2').bxSlider({
			autoHover: true,
			auto: true,
			autoControls: true,
			pause: 1000,
			autoControlsCombine: true,
		});
	};

	// toggle view bxslider
	function toggleViewBxSliderEvent(){

		$('.toggle_view').addClass('view');
			$('#bxslider3').bxSlider({
				minSlieds: 1,
				maxSlides:3,
				slideWidth: 400,
				infiniteLoop:false
			});
		
			
			$('#bxslider4').bxSlider({
				minSlieds: 1,
				maxSlides:3,
				slideWidth: 400,
				infiniteLoop:false
			});
	
		
			$('#bxslider5').bxSlider({
				minSlieds: 1,
				maxSlides:3,
				slideWidth: 400,
				infiniteLoop:false
			});
	
		return $('.toggle_view').removeClass('view');
		
	};


	// facebook link
	function facebookLink(action) {
		var $this = $(this);
		if(action === 'focusout') {
			$this = $facebook_unfd;
		}
		$this.toggleClass('view');
	};

	// gnb one depth mouse enter
	function oneDepthMouseenter() {
		$(this).children('.two_depth').css({'display':'block'});
		$header.stop().animate({
			'height': '148px'
		});
		$header.css({
			'background-image': 'url("images/header/bg.png")'
		});
		var $target = $('>a>img',this);
		var target_string = $target.attr('src').split('_');
		target_string[target_string.length-1] = 'on.png';
		target_string = target_string.join('_');
		$target.attr('src', target_string);
	};

	// gnb one depth mouse leave
	function oneDepthMouseleave() {
		$(this).children('.two_depth').css({'display':'none'});
		$header.stop().animate({
			'height': '112px'
		}, function() {
			$header.css({
				'background': 'rgba(255,255,255,0.9)'
			})
		});
		var $target = $('>a>img',this);
		var target_string = $target.attr('src').split('_');
		target_string[target_string.length-1] = 'off.png';
		target_string = target_string.join('_');
		$target.attr('src', target_string);
	}

	// gnb two depth mouse enter
	function twoDepthLinksMouseenter() {
		var $target = $('+.three_depth', $(this));

		$three_depth.css({'display':'none'});

		if($target.length === 0) {
			$(this).css({
				'background': 'red'
			});
			$header.stop().animate({
				'height': '148px'
			});
			return false;
		} 
		$(this).css({
			'background': 'red url("images/header/gnb/gnb_bg1.gif") no-repeat center bottom'
		});
		$(this).next('.three_depth').css({'display':'block'});
		$header.stop().animate({
			'height': '197px'
		});
		$header.css({
			'background-image': 'url("images/header/bg.png")'
		});
	}

	// gnb two depth mouse leave
	function twoDepthMouseleave() {

		$(this).css({'display':'none'});
		$three_depth.css({'display':'none'});
		$header.stop().animate({
			'height': '112px',
		}, function() {
			$header.css({
				'background': 'rgba(255,255,255,0.9)'
			});
		});
	}


	// toggle view
	function toggleViewClick() {
		$toggle_view = $('.toggle_view.view');
		$toggle_view_target = $('.toggle_view', $(this).parent().parent());
		
		if($toggle_view.attr('class')!==$toggle_view_target.attr('class')) {
			$toggle_view.removeClass('view');
		}

		$toggle_view_target.toggleClass('view');
		if ($toggle_view_target.hasClass('view')) {
			$('.content_mid').css({'margin-top':'258px'});

		} else {
			$('.content_mid').css({'margin-top': '0'});
		}
	};

	// close button
	function clseBtnClick() {
		$toggle_view_target.removeClass('view');
		$('.content_mid').css({'margin-top': '0'});
	};


})(window, jQuery);


