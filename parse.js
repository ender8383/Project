$(document).ready(function(){
	
	$(".source").keyup(function(){
		var parsed = $(".parsed");
		parsed.contents().find("html").html($(".source").val());	
	});
	
});

