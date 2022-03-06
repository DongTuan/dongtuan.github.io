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

(function($) {

	$(function() {
		$.yuga.scroll();
	});

	//---------------------------------------------------------------------

	$.yuga = {
		Uri: function(path){
			var self = this;
			this.originalPath = path;
			this.absolutePath = (function(){
				var e = document.createElement('span');
				e.innerHTML = '<a href="' + path + '" />';
				return e.firstChild.href;
			})();
			var fields = {'schema' : 2, 'username' : 5, 'password' : 6, 'host' : 7, 'path' : 9, 'query' : 10, 'fragment' : 11};
			var r = /^((\w+):)?(\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/.exec(this.absolutePath);
			for (var field in fields) {
				this[field] = r[fields[field]];
			}
			this.querys = {};
			if(this.query){
				$.each(self.query.split('&'), function(){
					var a = this.split('=');
					if (a.length == 2) self.querys[a[0]] = a[1];
				});
			}
		},
		
		scroll: function(options) {
			var scroller = (function() {
				var c = $.extend({
					easing:100,
					step:30,
					fps:60,
					fragment:''
				}, options);
				c.ms = Math.floor(1000/c.fps);
				var timerId;
				var param = {
					stepCount:0,
					startY:0,
					endY:0,
					lastY:0
				};
				function move() {
					if (param.stepCount == c.step) {
						setFragment(param.hrefdata.absolutePath);
						window.scrollTo(getCurrentX(), param.endY);
					} else if (param.lastY == getCurrentY()) {
						param.stepCount++;
						window.scrollTo(getCurrentX(), getEasingY());
						param.lastY = getEasingY();
						timerId = setTimeout(move, c.ms); 
					} else {
						if (getCurrentY()+getViewportHeight() == getDocumentHeight()) {
							setFragment(param.hrefdata.absolutePath);
						}
					}
				}
				function setFragment(path){
					location.href = path
				}
				function getCurrentY() {
					return document.body.scrollTop  || document.documentElement.scrollTop;
				}
				function getCurrentX() {
					return document.body.scrollLeft  || document.documentElement.scrollLeft;
				}
				function getDocumentHeight(){
					return document.documentElement.scrollHeight || document.body.scrollHeight;
				}
				function getViewportHeight(){
					return (!$.browser.safari && !$.browser.opera) ? document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight : window.innerHeight;
				}
				function getEasingY() {
					return Math.floor(getEasing(param.startY, param.endY, param.stepCount, c.step, c.easing));
				}
				function getEasing(start, end, stepCount, step, easing) {
					var s = stepCount / step;
					return (end - start) * (s + easing / (100 * Math.PI) * Math.sin(Math.PI * s)) + start;
				}
				return {
					set: function(options) {
						this.stop();
						if (options.startY == undefined) options.startY = getCurrentY();
						param = $.extend(param, options);
						param.lastY = param.startY;
						timerId = setTimeout(move, c.ms); 
					},
					stop: function(){
						clearTimeout(timerId);
						param.stepCount = 0;
					}
				};
			})();
			$('a[href^=#], area[href^=#]').not('a[href=#], area[href=#]').each(function(){
				this.hrefdata = new $.yuga.Uri(this.getAttribute('href'));
			}).click(function(){
				var target = $('#'+this.hrefdata.fragment);
				if (target.length == 0) target = $('a[name='+this.hrefdata.fragment+']');
				if (target.length) {
					scroller.set({
						endY: target.offset().top,
						hrefdata: this.hrefdata
					});
					return false;
				}
			});
		}
	};
})(jQuery);

var sPath = window.location.pathname;
var ie6=navigator.appVersion;
if(ie6.search("MSIE 6.0")==-1)
{ 
   var sPage = sPath.substring(sPath.lastIndexOf('/')+1);
}
else
{
   var sPage = sPath.substring(sPath.lastIndexOf('\\')+1);
}

$(function(){
var n=$('ul.lNav li').length;
	for(i=0; i<n; i++) {
		if($('ul.lNav li:eq('+i+')').find('a').attr('href')==sPage)	
		{
			$('ul.lNav li:eq('+i+')').addClass("current");
		}
		
		if($('ul.lNav li:eq('+i+')').find('a').attr('href')==sPath)	
		{
			$('ul.lNav li:eq('+i+')').addClass("current");
		}
	}
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
			src = $( this ).find( ".demoJqueryInner" ),
			output = $( this ).find( ".demoOutput" );
		if ( !src.length || !output.length ) {
			return;
		}
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
		output.append( iframe );

		var doc = (iframe.contentWindow || iframe.contentDocument).document;
		doc.write( iSrc );
		doc.close();
	});
	
	$('.compare').each(function(){
		var bH = $(this).find('.before').height();
		var aH = $(this).find('.after').height();
		var mH = bH;
		if(bH<aH){mH = aH;}
		else{ mH = bH;}
		$(this).find('.sourceTxt').height(mH);
	});
	
	/*$(window).bind('load resize',function(){
		var wWin = $(window).width();
		$('body').append('<p id="wWin"></p>');
		$('#wWin').text(wWin).css({'position':'fixed','top':50,'right':'0'});
	});*/
});
$(window).bind('load resize',function(){
	var asideH = $('#sidebar').height();
	$('#pageBody').css("min-height",asideH);
});
