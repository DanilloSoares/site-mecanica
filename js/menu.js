$(function(){   
			var nav = $('#menuHeader');   
			$(window).scroll(function () { 
				if ($(this).scrollTop() > 150) { 
					nav.addClass("menuFixo"); 
				} else { 
					nav.removeClass("menuFixo"); 
				} 
			});  
		});