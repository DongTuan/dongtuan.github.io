$(function(){
	// rollover
	$('.imgover').each(function(){
		this.osrc = $(this).attr('src');
		this.rollover = new Image();
		this.rollover.src = this.osrc.replace(/(\.gif|\.jpg|\.png)/, "_o$1");
	}).hover(function(){
		$(this).attr('src',this.rollover.src);
	},function(){
		$(this).attr('src',this.osrc);
	});
	
});

function reportMessage(){
	var path = window.parent.location.href;
	var left = ($(window).width()/2)-(550/2);
	var top = ($(window).height()/2)-(420/2);
	window.open("/report/index.php#"+path,"window1","toolbar=no,location=no,directoies=no,status=no,menubar=no,scrollbars=no,resizable=no,width=550,height=420,left="+left+",top="+top);
}

$(function() {
	$( ".demoJquery" ).each(function() {
		var iSrc,
			src = $( ".demoJqueryInner" ),
			output = $( ".demoOutput" );
		
		output.each(function(){
			iSrc = src.find( ".getSource" ).map(function() {
			return $( this ).text().replace( /\xa0/g, " " );
			}).get().join( "\n" );
	
			iSrc = iSrc
				.replace( "</head>",
				"<style>" +
					"html, body { border:0; margin:0; padding:0; }" +
				"</style>" +
				"</head>" )
			.replace( /<script>([\s\S]+)<\/script>/,
				"<script>" +
				"window.onload = function() {" +
					"$1" +
				"};" +
				"</script>" );
			var iframe = document.createElement( "iframe" );
			iframe.width = "100%";
			iframe.height = output.attr( "data-height" ) || 'auto';
		    $(this).append( iframe );
			var doc = (iframe.contentWindow || iframe.contentDocument).document;
			doc.write( iSrc );
			doc.close();
		});
	});
	
	var wWin = $(window).width();
	$('#content').width(wWin - 40);
	
	$('.compare').each(function(){
		var bH = $(this).find('.before').height();
		var aH = $(this).find('.after').height();
		var mH = bH;
		if(bH<aH){mH = aH;}
		else{ mH = bH;}
		$(this).find('.sourceTxt').height(mH);
	});
});
