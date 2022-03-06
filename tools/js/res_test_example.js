$(function() {
	var fPath = location.hash;
	fpath = fpath.substr(1);
	$('#fExample').attr('src',path);
	
	var wWin = $(window).width();
	$('#content').width(wWin - 40);
});
