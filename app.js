$(document).ready(function(){
	
var $overlay = $('<div title="click anywhere to exit" id="overlay"><div class="exitButton" style="font-weight:bolder;color:white;margin-left:75%;font-size:2em;cursor:pointer;margin-top:35px;">EXIT</div><object id="pdf" src="pdf/resume.pdf" data="pdf/resume.pdf" type="application/pdf" width="80%" height="80%"></object></div>');	
		var $fullDiv = $('<div id="closeButton" title="Close". class="closeButton" style="left:85%;width:50px;height:50px;position:fixed;top:-6px;cursor:pointer;"><img src="img/tabletClose.png"></div>');
		var $activated = $('<p><h1 style="color:rgba(9,9,9,0.5);left:0;top:0;"></h1></p>');		
		var $hint = $(".fullscreenHint")
		
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
	
	 $(".exitButton").on('click', function() {
    
        $overlay.hide();
        });
	
	
	$(".parsed").contents().find("body").append($activated);
	$("body").append($fullDiv);
	
	
	
	
	$activated.hide();
	$fullDiv.hide();
	
	$( ".parsed" ).on( "click", function() {  
		
		$fullDiv.show();
	  
	    $( this ).css({
	    'top' : '5%',
	    'left' : '0',
	    'right' : '0',
	    'width' : '80%',
	    'height' : '80%',
	    'position' : 'fixed' 
   
});
});

$(document).ready(function(){	

	$("body").on('click', '.closeButton', function() {

		$(".parsed").css({
		   'background-color' : '#fff',
		   'color' : '#2e2e2e',
		   'float' : 'right',
		   'width' : '43%',
		   'height' : '275px',
		   'float' : 'right',
		   'clear' : 'right',
		   'position' : 'relative',
		   'overflow' : 'scroll'   
		 
		});  
		
	    $fullDiv.hide();
		$( this ).hide();


	});
});


	

$(document).ready(function(){	
	
	$(".source").one('mouseover', function() {
	  
		$(".parsed").animate({
        backgroundColor: "#fff"
		}, 1500 );
			
	
	});	
		
	
});	

$hint.hide();
	
$(".parsed").on('mouseover', function(){
	$hint.show(100);	
});

$(".parsed").on('mouseleave', function(){
	$hint.hide(100);	
});

	
});