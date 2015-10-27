$(document).ready(function(){
	
	var $overlay = $('<div title="click anywhere to exit" id="overlay"><iframe style="height: 75%;" margin="auto" height="80%" width="60%" name="plugin" type="application/pdf" id="pdf" src="PDF/My Resumé.pdf"></iframe></div>');
	

	$("body").append($overlay);
		

	$("#resume").click(function(event) {
		event.preventDefault();
		var resumeLocation = $(this).attr("href");
				
		$overlay.show();				
	});


	$('.social-icon2, .social-icon').mouseover(function() {
	  $(this).css("opacity",".5");
	  console.log("working")
						
	});
	
	$('.social-icon2, .social-icon').mouseleave(function() {
		$(this).css("opacity","1");
		
	}); 	
	
	$overlay.click(function() {
		$overlay.hide();
	});
	
	
});