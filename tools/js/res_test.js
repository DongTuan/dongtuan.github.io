$(function() {
	var fPath = location.hash;
	fPath = fPath.substr(1);
	$('.fExample').attr('src',fPath);
	
	function displayVals(){
		var val = $('#resGet').val();
		$('iframe').attr('src',val);
		}
	$('button').click(function(){
		$('iframe').change(displayVals);
   		displayVals();
	});
	var wWin = $(window).width();
	$('#content').width(wWin - 40);
});
