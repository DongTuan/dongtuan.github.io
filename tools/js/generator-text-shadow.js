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
		var csChange = $('#cShadow').val();
		var bgcChange = $("#bgColor").val();
		var fcChange = $("#fColor").val();
		
		var hsChange = $('.hShadow').html();
		var vsChange = $('.vShadow').html();
		var bsChange = $('.bShadow').html();
		var fsChange = $('#fSize').val();
		$('#review').css('color','#'+fcChange);
		$('#review').css('background','#'+bgcChange);
		$('#review').css('text-shadow',hsChange+'px '+vsChange+'px '+bsChange+'px '+'#'+csChange);
		$('#fSize').keyup(function () {
			var fsKey = $('#fSize').val();
			if(fsKey>max200){
				$(this).val(max200);
				$("#review").css("font-size", max200+'px');
			}else $("#review").css("font-size", fsKey+'px');
		}).keyup();
		
		$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
'font-size: '+fsChange+'px; <br />'+
'color: #'+fcChange+'; <br />'+
'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
	});
	
	$( ".offset > span.slider" ).each(function() {
		function refreshSwatch() {
			var valD = $(this).slider( "value" );
			$(this).next().html(valD);
			var hs = $('.hShadow').html();
			var vs = $('.vShadow').html();
			var bs = $('.bShadow').html();
			var cs01 = $('#cShadow').val();
			
			var bgc01 = $("#bgColor").val();
			var fc01 = $("#fColor").val();
			var fs01 = $('#fSize').val();
			
			$("#cShadow").change(function() {
				var cs= $("#cShadow").val();
				$('#review').css('text-shadow',hs+'px '+vs+'px '+bs+'px '+'#'+cs);
				
			});
			$('#review').css('text-shadow',hs+'px '+vs+'px '+bs+'px '+'#'+cs01);
			$('.sourceTxt p').html('background: #'+bgc01+'; <br />'+
'font-size: '+fs01+'px; <br />'+
'color: #'+fc01+'; <br />'+
'text-shadow: #'+cs01+' '+hs+'px '+vs+'px '+bs+'px;');
		}
		
		var value = parseInt( $( this ).text(), 10 );
		$( this ).empty().slider({
			value: value,
			range: "min",
			value: 4,
			min: -100,
			max: 100,
			animate: true,
			orientation: "horizontal",
			slide: refreshSwatch,
			change: refreshSwatch
		});
		$(this).next().html($(this).slider( "value" ));
	});
});
