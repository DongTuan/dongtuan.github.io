$(function(){	
	$(".tableTag tr").not(':first').hover(
	function () {
    	$(this).css("background","#f6f6f6");
	}, 
	function () {
    	$(this).css("background","");
	}
);
	
});
