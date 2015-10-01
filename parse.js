$(document).ready(function(){
	
	$(".source").keyup(function(){
		
		$(".parsed").html($(".source").val());	
	});
	
});