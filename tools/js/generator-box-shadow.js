$(function(){
	var max200 = 200;
	var min50 = -50;
	var max50 = 50;
	var cs = $("#cShadow").val();
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
		var csChange = $("#cShadow").val();
		var isChange = $("#iShadow:checked").val();
		var hsChange = $('.hShadow').html();
		var vsChange = $('.vShadow').html();
		var bsChange = $('.bShadow').html();
		var dsChange = $('.dShadow').html();
		
		$('#review').css('color','#'+fcChange);
		$('#review').css('background','#'+bgcChange);
		
		if(isChange=="inset"){
			$('#review').css('box-shadow',hsChange+'px '+vsChange+'px '+bsChange+'px '+dsChange+'px '+'#'+csChange+' '+isChange);
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
'border: 2px solid #FFFFFF; <br />'+
'border-radius: 10px 10px 10px 10px; <br />'+
'font-size: 30px; <br />'+
'height: 120px; <br />'+
'width: 400px; <br />'+
'padding-top: 80px; <br />'+
'text-align: center; <br />'+
'color: #'+fcChange+'; <br />'+
'box-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px '+dsChange+'px '+isChange+';');
		}else {
			$('#review').css('box-shadow',hsChange+'px '+vsChange+'px '+bsChange+'px '+dsChange+'px '+'#'+csChange);
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
'border: 2px solid #FFFFFF; <br />'+
'border-radius: 10px 10px 10px 10px; <br />'+
'font-size: 30px; <br />'+
'height: 120px; <br />'+
'width: 400px; <br />'+
'padding-top: 80px; <br />'+
'text-align: center; <br />'+
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
			
			if(is=="inset"){
			$("#cShadow").change(function() {
				var cs= $("#cShadow").val();
				$('#review').css('box-shadow',hs+'px '+vs+'px '+bs+'px '+ds+'px '+'#'+cs+' '+is);
				
			});
			$('#review').css('box-shadow',hs+'px '+vs+'px '+bs+'px '+ds+'px '+'#'+cs01+' '+is);
			$('.sourceTxt p').html('background: #'+bgc01+'; <br />'+
'border: 2px solid #FFFFFF; <br />'+
'border-radius: 10px 10px 10px 10px; <br />'+
'font-size: 30px; <br />'+
'height: 120px; <br />'+
'width: 400px; <br />'+
'padding-top: 80px; <br />'+
'text-align: center; <br />'+
'color: #'+fc01+'; <br />'+
'box-shadow: #'+cs01+' '+hs+'px '+vs+'px '+bs+'px '+ds+'px '+is+';');
			}else {
				$("#cShadow").change(function() {
				var cs= $("#cShadow").val();
				$('#review').css('box-shadow',hs+'px '+vs+'px '+bs+'px '+ds+'px '+'#'+cs);
				
			});
			$('#review').css('box-shadow',hs+'px '+vs+'px '+bs+'px '+ds+'px '+'#'+cs01);
			$('.sourceTxt p').html('background: #'+bgc01+'; <br />'+
'border: 2px solid #FFFFFF; <br />'+
'border-radius: 10px 10px 10px 10px; <br />'+
'font-size: 30px; <br />'+
'height: 120px; <br />'+
'width: 400px; <br />'+
'padding-top: 80px; <br />'+
'text-align: center; <br />'+
'color: #'+fc01+'; <br />'+
'box-shadow: #'+cs01+' '+hs+'px '+vs+'px '+bs+'px '+ds+'px;');	
			}
		}
		
		var value = parseInt( $( this ).text(), 10 );
		$( this ).empty().slider({
			value: value,
			range: "min",
			value: 10,
			min: -40,
			max: 40,
			animate: true,
			orientation: "horizontal",
			slide: refreshSwatch,
			change: refreshSwatch
		});
		$(this).next().html($(this).slider( "value" ));
	});
});
