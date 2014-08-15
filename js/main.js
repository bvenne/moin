jQuery(function($) {

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});

	$( '.centered' ).each(function( e ) {
		$(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
	});

	$(window).resize(function(){
		$( '.centered' ).each(function( e ) {
			$(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
		});
	});

	//portfolio
	$(window).load(function(){
		$portfolio_selectors = $('.portfolio-filter >li>a');
		if($portfolio_selectors!='undefined'){
			$portfolio = $('.portfolio-items');
			$portfolio.isotope({
				itemSelector : 'li',
				layoutMode : 'fitRows'
			});
			$portfolio_selectors.on('click', function(){
				$portfolio_selectors.removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$portfolio.isotope({ filter: selector });
				return false;
			});
		}
	});

	//contact form
	var form = $('.contact-form');
	form.submit(function () {
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});

	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	
	
	
	
	
	
	
	
	//REGISTER
	$('#register_user').submit(function(){
		//var landmarkID = $(this).parent().attr('data-landmark-id');
		var postData = $(this).serialize();
		
		$.ajax({
			type: 'POST',
			//data: postData+'&amp;lid='+landmarkID,
			data: postData,
			url: 'http://www.vennemann.us/moin/register.php',
			success: function(data){
				console.log(data);
				alert('Your Account was successfully added');
			},
			error: function(){
				console.log(data);
				alert('There was an error adding your Account');
			}
		});
		
		return false;
	});


	//test send from venni to venni
	$('#send_to_venni').submit(function(){
		var getData = $(this).serialize();
		$.ajax({
			type: 'GET',
			data: getData,
			url: 'http://www.vennemann.us/moin/send_message.php',
			success: function(data){
				alert('Your message to user venni was successfully sent');
			},
			error: function(){
				alert('There was an error sending message to venni');
			}
		});
		
		return false;
	});

	
	
	
	
});
