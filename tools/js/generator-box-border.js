$(function(){
	var max200 = 200;
	var min50 = -50;
	var max50 = 50;
	var cs = $("#cShadow").val();
	// Chi chap nhan nhap so
	$(".numberOnly").keydown(function(event) {
 
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true) || (event.keyCode >= 35 && event.keyCode <= 39)) {
            return;
        }
        else {
 
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });
	
	$('input').change(function() {
		var bgcChange = $("#bgColor").val();
		var fcChange = $("#fColor").val();
		var brcChange = $("#cBorder").val();
		//var fsChange = $('#fSize').val();
		var csChange = $("#cShadow").val();
		var isChange = $("#iShadow:checked").val();
		var hsChange = $('.hShadow').html();
		var vsChange = $('.vShadow').html();
		var bsChange = $('.bShadow').html();
		var dsChange = $('.dShadow').html();
		
		$('#review').css('color','#'+fcChange);
		$('#review').css('background','#'+bgcChange);
		$('#review').css('border-color','#'+brcChange);
		/*$('#fSize').keyup(function () {
			var fsKey = $('#fSize').val();
			if(fsKey>max200){
				$(this).val(max200);
				$("#review").css("font-size", max200+'px');
			}else $("#review").css("font-size", fsKey+'px');
		}).keyup();*/
		if(isChange=="inset"){
			$('#review').css('box-shadow',hsChange+'px '+vsChange+'px '+bsChange+'px '+dsChange+'px '+'#'+csChange+' '+isChange);
			$('.sourceTxt pre').html('background: #'+bgcChange+'; <br />'+
/*'font-size: '+fsChange+'px; <br />'+*/
'color: #'+fcChange+'; <br />'+
'box-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px '+dsChange+'px '+isChange+';');
		}else {
			$('#review').css('box-shadow',hsChange+'px '+vsChange+'px '+bsChange+'px '+dsChange+'px '+'#'+csChange);
			$('.sourceTxt pre').html('background: #'+bgcChange+'; <br />'+
/*'font-size: '+fsChange+'px; <br />'+*/
'color: #'+fcChange+'; <br />'+
'box-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px '+dsChange+'px;');
		}
	});
	
	$( ".offset > span.slider" ).each(function() {
		function refreshSwatch() {
			var valD = $(this).slider( "value" );
			$(this).next().html(valD);
			var is = $("#iShadow:checked").val();
			var hs = $('.hShadow').html();
			var vs = $('.vShadow').html();
			var bs = $('.bShadow').html();
			var ds = $('.dShadow').html();
			var cs01 = $('#cShadow').val();
			
			var bgc01 = $("#bgColor").val();
			var fc01 = $("#fColor").val();
			//var fs01 = $('#fSize').val();
			
			if(is=="inset"){
			$("#cShadow").change(function() {
				var cs= $("#cShadow").val();
				$('#review').css('box-shadow',hs+'px '+vs+'px '+bs+'px '+ds+'px '+'#'+cs+' '+is);
				
			});
			$('#review').css('box-shadow',hs+'px '+vs+'px '+bs+'px '+ds+'px '+'#'+cs01+' '+is);
			$('.sourceTxt pre').html('background: #'+bgc01+'; <br />'+
/*'font-size: '+fs01+'px; <br />'+*/
'color: #'+fc01+'; <br />'+
'box-shadow: #'+cs01+' '+hs+'px '+vs+'px '+bs+'px '+ds+'px '+is+';');
			}else {
				$("#cShadow").change(function() {
				var cs= $("#cShadow").val();
				$('#review').css('box-shadow',hs+'px '+vs+'px '+bs+'px '+ds+'px '+'#'+cs);
				
			});
			$('#review').css('box-shadow',hs+'px '+vs+'px '+bs+'px '+ds+'px '+'#'+cs01);
			$('.sourceTxt pre').html('background: #'+bgc01+'; <br />'+
/*'font-size: '+fs01+'px; <br />'+*/
'color: #'+fc01+'; <br />'+
'box-shadow: #'+cs01+' '+hs+'px '+vs+'px '+bs+'px '+ds+'px;');	
			}
		}
		
		var value = parseInt( $( this ).text(), 10 );
		$( this ).empty().slider({
			value: value,
			range: "min",
			value: 10,
			min: -100,
			max: 100,
			animate: true,
			orientation: "horizontal",
			slide: refreshSwatch,
			change: refreshSwatch
		});
		$(this).next().html($(this).slider( "value" ));
	});
	
	$( ".offsetBorder > span.slider" ).each(function() {
		function refreshSwatch() {
			var valD = $(this).slider( "value" );
			$(this).next().html(valD);
			var rb = $('.rBorder').html();
			var wb = $('.wBorder').html();
			
			
			$('#review').css('border-radius',rb+'px');
			$('#review').css('border-width',wb+'px');
		}
		
		var value = parseInt( $( this ).text(), 10 );
		$( this ).empty().slider({
			value: value,
			range: "min",
			value: 10,
			min: 0,
			max: 150,
			animate: true,
			orientation: "horizontal",
			slide: refreshSwatch,
			change: refreshSwatch
		});
		$(this).next().html($(this).slider( "value" ));
	});
});
