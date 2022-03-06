$(function(){
	$(".para input").keydown(function(event) {
 
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true) || (event.keyCode >= 35 && event.keyCode <= 39)) {
            return;
        }
        else {
 
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });
	
	$('.para input').blur(function () {
		var min2 = 2;
		var max10 = 10;
		var max20 = 20;
		
		var c = $('#resC').val();
		var m = $('#resM').val();
		
		if(c<min2){$('#resC').val(min2)};
		if(c>max20){$('#resC').val(max20)};
		if(m>max10){$('#resM').val(max10)};
    }).keyup();
	
	$('button').click(function(){
		var w = 100;
		var c = $('#resC').val();
		var m = $('#resM').val();
		var wrapper = $('.wrapper');
		var myList = $( ".boxList" );
		/* copyright hocwebchuan.com */	
		var wrapW = w;
		var itemW = (w-(c-1)*m)/c;
		myList.html("");
		/* copyright hocwebchuan.com */	
		var myItems = [];
		for ( var i = 1; i <= c; i++ ) {
			myItems.push( "<li>item " + i + "</li>" );
		};
		var itemList = myItems.join( "" );
		myList.html(itemList);
		
		var myItemsCode = [];
		for ( var j = 1; j <= c; j++ ) {
			myItemsCode.push( "    &lt;li&gt;item " + j + "&lt;/li&gt;<br />" );
		};
		var itemListCode = myItemsCode.join( "" );
		/* copyright hocwebchuan.com */	
		var wTxt = wrapper.html();
		$('#htmlCode').html("&lt;ul class=&quot;boxList clearfix&quot;&gt;<br />"+
		    	"<span class='blue'>"+itemListCode+"</span>"+
				"&lt;/ul&gt;");
		/* copyright hocwebchuan.com */		
		$('#cssCode').html(".boxList { <br />"+
				"    border: 1px dashed blue; <br />"+
				"    width: <span class='blue'>"+wrapW+"</span>%; <br />"+
				"} <br />"+
				".boxList li { <br />"+
				"    background: #f3f3f3; <br />"+
				"    height: 50px; <br />"+
				"    float: left; <br />"+
				"    font-size:11px; <br />"+
				"    line-height: 50px; <br />"+
				"    margin-left: <span class='blue'>"+m+"</span>%; <br />"+
				"    text-align: center; <br />"+
				"    width: <span class='blue'>"+itemW+"</span>%; <br />"+
				"} <br />"+
				".boxList li:first-child { <br />"+
				"    margin-left: 0!important; <br />"+
				"}");
		/* copyright hocwebchuan.com */	
		$('.wrapW').text(wrapW);
		$('.itemW').text(itemW);
		$('.mar').text(m);
		/* copyright hocwebchuan.com */	
		wrapper.width(wrapW+"%");
		myList.show().width(wrapW+"%");
		$('.boxList li').width(itemW+"%").css('margin-left',m+'%');
	});
});
