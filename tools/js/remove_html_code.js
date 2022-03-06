$(function() {
	function stripAll(str){
        t = str.replace(/<(\/)?(html|head|title|body|h1|h2|h3|h4|h5|h6|p|br|hr|pre|em|strong|code|b|i|a|ul|li|ol|dl|dt|dd|table|tr|th|td|div|map)([^>]*)>/gi, "");
        t = t.replace(/<(\/)?(iframe|frameset|form|input|select|option|textarea|blockquote|address|object|label|noscript|script)([^>]*)>/gi, "");
		t = t.replace(/<(\/)?(canvas|caption|command|datalist|details|fieldset|figcaption|figure|footer|hgroup|keygen|legend|mark|menu|meter|nav)([^>]*)>/gi, "");
		t = t.replace(/<(\/)?(rp|rt|ruby|dfn|kbd|section|source|time|var|video|wbr|output|center|dir|font|frame|noframes|s|strike|tt|u)([^>]*)>/gi, "");
		t = t.replace(/<(\/)?(!DOCTYPE|!doctype|col|colgroup|del|dfn|kbd|q|samp|small|span|style|sub|summary|sup|tbody|tfoot|cite|meta|optgroup|)([^>]*)>/gi, "");
 		t = t.replace(/<!--[^(-->)]+-->/g, '');
        $(".result textarea").val(t);
    }
	
	function stripComment(str){
 		t = str.replace(/<!--[^(-->)]+-->/g, '');
        $(".result textarea").val(t);
    }
	
	$('.buttonList button').click(function(){
		var styleVal = $('#styleChange').val();
		
		if(styleVal=='comment'){
			stripComment($('.inputText textarea').val());
		}else if(styleVal=='all'){
			stripAll($('.inputText textarea').val());
		}
	});
});
