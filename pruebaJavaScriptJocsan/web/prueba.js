$("document").ready(function(){
	
	$("#texto").hover(function(){
		
		$("#texto").css("color","red");
	
	});
	
	$("#texto").mouseout(function(){
		
		$("#texto").css("color","green");
	
	});

});