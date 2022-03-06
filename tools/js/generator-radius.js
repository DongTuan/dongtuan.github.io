$(function(){
	$("#listBu").removeClass();
	$("#listBu button").click(function(){
		$("#listBu button").removeClass('active');
		$(this).addClass("active");
		var buVal = $(this).val();
		if(buVal=="tabBu01"){
			$('#linkTab div').removeClass('active');
			$('#linkTab div#tab01').addClass('active');
				var tl = $('.tl').html();
				var tr = $('.tr').html();
				var bl = $('.bl').html();
				var br = $('.br').html();
				var valueH = $('.hRadius input').val();
				var valueW = $('.wRadius input').val();
				var wb = $('#wBorder').val();
				var cb = $('#cBorder').val();
				var sValue = $('#sBorder').val();
				$("#review").css("border-radius", tl+'px '+tr+'px '+bl+'px '+br+'px');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
				"width: "+ valueW +"px; <br />"+
				"border: " + wb + "px " + sValue + " #" + cb + "; <br />"+
				"border-radius: "+ tl +"px " + tr +"px "+ bl +"px " + br +"px; <br />"+
				"-moz-border-radius: "+ tl +"px " + tr +"px "+ bl +"px " + br +"px; <br />"+
				"-webkit-border-radius: "+ tl +"px " + tr +"px "+ bl +"px " + br +"px;");
		}else if(buVal=="tabBu02"){
			$('#linkTab div').removeClass('active');
			$('#linkTab div#tab02').addClass('active');
				var bAll = $('.bAll').html();
				var valueH = $('.hRadius input').val();
				var valueW = $('.wRadius input').val();
				var wb = $('#wBorder').val();
				var cb = $('#cBorder').val();
				var sValue = $('#sBorder').val();
				$("#review").css("border-radius", bAll+'px');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
				"width: "+ valueW +"px; <br />"+
				"border: " + wb + "px " + sValue + " #" + cb + "; <br />"+
				"border-radius: "+ bAll +"px; <br />"+
				"-moz-border-radius: "+ bAll +"px; <br />"+
				"-webkit-border-radius: "+ bAll +"px;");
		}
	});
	
	$("#cBorder").change(function() {
   		var cb = $(this).val();
		$('#review').css('border-color','#'+cb);	
		$('.generator input').keyup(function () {
			var buVal = $('#listBu .active').val();
			if(buVal=="tabBu01"){
					var tl = $('.tl').html();
					var tr = $('.tr').html();
					var bl = $('.bl').html();
					var br = $('.br').html();
					var valueH = $('.hRadius input').val();
					var valueW = $('.wRadius input').val();
					var wb = $('#wBorder').val();
					var cb = $('#cBorder').val();
					var sValue = $('#sBorder').val();
					$('.styleCode p').html("height: "+ valueH +"px; <br />"+
					"width: "+ valueW +"px; <br />"+
					"border: " + wb + "px " + sValue + " #" + cb + "; <br />"+
					"border-radius: "+ tl +"px " + tr +"px "+ bl +"px " + br +"px; <br />"+
					"-moz-border-radius: "+ tl +"px " + tr +"px "+ bl +"px " + br +"px; <br />"+
					"-webkit-border-radius: "+ tl +"px " + tr +"px "+ bl +"px " + br +"px;");
			}else if(buVal=="tabBu02"){
					var bAll = $('.bAll').html();
					var valueH = $('.hRadius input').val();
					var valueW = $('.wRadius input').val();
					var wb = $('#wBorder').val();
					var cb = $('#cBorder').val();
					var sValue = $('#sBorder').val();
					$('.styleCode p').html("height: "+ valueH +"px; <br />"+
					"width: "+ valueW +"px; <br />"+
					"border: " + wb + "px " + sValue + " #" + cb + "; <br />"+
					"border-radius: "+ bAll +"px; <br />"+
					"-moz-border-radius: "+ bAll +"px; <br />"+
					"-webkit-border-radius: "+ bAll +"px;");
			}
		}).keyup();
	});
});

$(function(){
	var minH = 30;
	var maxH = 600;
	
	var minW = 30;
	var maxW = 600;
	
	var maxR = 1000;
	
	var maxWBdr = 100;
	
	$(".generator input").keydown(function(event) {
 
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true) || (event.keyCode >= 35 && event.keyCode <= 39)) {
            return;
        }
        else {
 
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });
	
	$('.hRadius input').keyup(function () {
    	var valueH = $(this).val();
		
		if(valueH >maxH){
			$(this).val(maxH);
    		$("#review").css("height", maxH+'px');
		}else if(valueH == "" || valueH < minH){
			$(this).val(minH);
			$("#review").css("height", minH+'px');
		}else{$("#review").css("height", valueH+'px');}
    }).keyup();
	
	$('.wRadius input').keyup(function () {
    	var valueW = $(this).val();
		
		if(valueW >maxW){
    		$("#review").css("width", maxW+'px');
			$(this).val(maxW);
		}else if(valueW == "" || valueW <= minW){
			$("#review").css("width", minW+'px');
			$(this).val(minW);
		}else{$("#review").css("width", valueW+'px');}
    }).keyup();
	
	$(".zeroBack input").keyup(function () {
		var cornerInput = $(this).val();
		if(cornerInput == ""){
			$(this).val(0);
		}
	}).keyup();
	
	$(".maxBack input").keyup(function () {
		var cornerInput = $(this).val();
		if(cornerInput >= maxR){
			$(this).val(1000);
		}
	}).keyup();

	$('#wBorder').keyup(function () {
    	var wb = $(this).val();
		if(wb >= maxWBdr){
			$(this).val(maxWBdr);
    		$("#review").css("border-width", maxWBdr +'px');
		}else $("#review").css("border-width", wb+'px');
    }).keyup();
	
	function displayVals(){
		var sValue = $('#sBorder').val();
		$("#review").css("border-style", sValue);
		var tl = $('.tl').html();
		var tr = $('.tr').html();
		var bl = $('.bl').html();
		var br = $('.br').html();
		var valueH = $('.hRadius input').val();
		var valueW = $('.wRadius input').val();
		var wb = $('#wBorder').val();
		var cb = $('#cBorder').val();
		var sValue = $('#sBorder').val();
		$('.styleCode p').html("height: "+ valueH +"px; <br />"+
		"width: "+ valueW +"px; <br />"+
		"border: " + wb + "px " + sValue + " #" + cb + "; <br />"+
		"border-radius: "+ tl +"px " + tr +"px "+ bl +"px " + br +"px; <br />"+
		"-moz-border-radius: "+ tl +"px " + tr +"px "+ bl +"px " + br +"px; <br />"+
		"-webkit-border-radius: "+ tl +"px " + tr +"px "+ bl +"px " + br +"px;");
		var buVal = $('#listBu .active').val();
			if(buVal=="tabBu01"){
					var tl = $('.tl').html();
					var tr = $('.tr').html();
					var bl = $('.bl').html();
					var br = $('.br').html();
					var valueH = $('.hRadius input').val();
					var valueW = $('.wRadius input').val();
					var wb = $('#wBorder').val();
					var cb = $('#cBorder').val();
					var sValue = $('#sBorder').val();
					$('.styleCode p').html("height: "+ valueH +"px; <br />"+
					"width: "+ valueW +"px; <br />"+
					"border: " + wb + "px " + sValue + " #" + cb + "; <br />"+
					"border-radius: "+ tl +"px " + tr +"px "+ bl +"px " + br +"px; <br />"+
					"-moz-border-radius: "+ tl +"px " + tr +"px "+ bl +"px " + br +"px; <br />"+
					"-webkit-border-radius: "+ tl +"px " + tr +"px "+ bl +"px " + br +"px;");
			}else if(buVal=="tabBu02"){
					var bAll = $('.bAll').html();
					var valueH = $('.hRadius input').val();
					var valueW = $('.wRadius input').val();
					var wb = $('#wBorder').val();
					var cb = $('#cBorder').val();
					var sValue = $('#sBorder').val();
					$('.styleCode p').html("height: "+ valueH +"px; <br />"+
					"width: "+ valueW +"px; <br />"+
					"border: " + wb + "px " + sValue + " #" + cb + "; <br />"+
					"border-radius: "+ bAll +"px; <br />"+
					"-moz-border-radius: "+ bAll +"px; <br />"+
					"-webkit-border-radius: "+ bAll +"px;");
			}
	}
	$("#sBorder").change(displayVals);
    displayVals();
	
	$( ".offset > span.slider" ).each(function() {
		function refreshSwatch() {
			var valD = $(this).slider( "value" );
			$(this).next().html(valD);
			var tl = $('.tl').html();
			var tr = $('.tr').html();
			var bl = $('.bl').html();
			var br = $('.br').html();
			var valueH = $('.hRadius input').val();
			var valueW = $('.wRadius input').val();
			var wb = $('#wBorder').val();
			var cb = $('#cBorder').val();
			
			$("#review").css("border-radius", tl+'px '+tr+'px '+bl+'px '+br+'px');
			var sValue = $('#sBorder').val();
			$('.styleCode p').html("height: "+ valueH +"px; <br />"+
			"width: "+ valueW +"px; <br />"+
			"border: " + wb + "px " + sValue + " #"+cb + "; <br />"+
			"border-radius: "+ tl +"px " + tr +"px "+ bl +"px " + br +"px;<br />"+
			"-moz-border-radius: "+ tl +"px " + tr +"px "+ bl +"px " + br +"px;<br />"+
			"-webkit-border-radius: "+ tl +"px " + tr +"px "+ bl +"px " + br +"px;");
		}
		
		var value = parseInt( $( this ).text(), 10 );
		$( this ).empty().slider({
			value: value,
			range: "min",
			value: 10,
			min: 0,
			max: 300,
			animate: true,
			orientation: "horizontal",
			slide: refreshSwatch,
			change: refreshSwatch
		});
		$(this).next().html($(this).slider( "value" ));
	});
	
	$( ".offsetAll > span.slider" ).each(function() {
		function refreshSwatch() {
			var valD = $(this).slider( "value" );
			$(this).next().html(valD);
			var bAll = $('.bAll').html();
			var valueH = $('.hRadius input').val();
			var valueW = $('.wRadius input').val();
			var wb = $('#wBorder').val();
			var cb = $('#cBorder').val();
			
			$("#review").css("border-radius", bAll+'px');
				var sValue = $('#sBorder').val();
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
				"width: "+ valueW +"px; <br />"+
				"border: " + wb + "px " + sValue + " #"+cb + "; <br />"+
				"border-radius: "+ bAll +"px;<br />"+
				"-moz-border-radius: "+ bAll +"px;<br />"+
				"-webkit-border-radius: "+ bAll +"px;");
		}
		
		var value = parseInt( $( this ).text(), 10 );
		$( this ).empty().slider({
			value: value,
			range: "min",
			value: 10,
			min: 0,
			max: 300,
			animate: true,
			orientation: "horizontal",
			slide: refreshSwatch,
			change: refreshSwatch
		});
		$(this).next().html($(this).slider( "value" ));
	});
	
	$('input').keyup(function () {
		var buVal = $('#listBu .active').val();
		if(buVal=="tabBu01"){
				var tl = $('.tl').html();
				var tr = $('.tr').html();
				var bl = $('.bl').html();
				var br = $('.br').html();
				var valueH = $('.hRadius input').val();
				var valueW = $('.wRadius input').val();
				var wb = $('#wBorder').val();
				var cb = $('#cBorder').val();
				var sValue = $('#sBorder').val();
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
				"width: "+ valueW +"px; <br />"+
				"border: " + wb + "px " + sValue + " #" + cb + "; <br />"+
				"border-radius: "+ tl +"px " + tr +"px "+ bl +"px " + br +"px; <br />"+
				"-moz-border-radius: "+ tl +"px " + tr +"px "+ bl +"px " + br +"px; <br />"+
				"-webkit-border-radius: "+ tl +"px " + tr +"px "+ bl +"px " + br +"px;");
		}else if(buVal=="tabBu02"){
				var bAll = $('.bAll').html();
				var valueH = $('.hRadius input').val();
				var valueW = $('.wRadius input').val();
				var wb = $('#wBorder').val();
				var cb = $('#cBorder').val();
				var sValue = $('#sBorder').val();
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
				"width: "+ valueW +"px; <br />"+
				"border: " + wb + "px " + sValue + " #" + cb + "; <br />"+
				"border-radius: "+ bAll +"px; <br />"+
				"-moz-border-radius: "+ bAll +"px; <br />"+
				"-webkit-border-radius: "+ bAll +"px;");
		}
	}).keyup();
});
