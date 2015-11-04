$(document).ready(function(){
	
	$(".source").on('click keyup' ,function(){
		var parsed = $(".parsed");
		parsed.contents().find("html").html($(".source").val());
			
	});
	
	/* $( ".source" ).click(function() {
		$( ".parsed" ).effect( "highlight", "orange" );
	});
	 */
});

