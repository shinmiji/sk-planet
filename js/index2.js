;(function(global,$, undefined){
	'use strict';



	// toggle view
	var $toggle_view_target = null;
	var $toggle_view = null;

	initFunction();

	function initFunction() {
		

		// toggle view bxslider
		toggleViewBxSliderEvent();

		

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


