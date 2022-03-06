$(function(){	
	$("#cRule").change(function() {
   		var cb = $(this).val();
		$("#review").css("column-rule-color",'#'+cb);	
		$("#review").css("-moz-column-rule-color",'#'+cb);	
		$("#review").css("-webkit-column-rule-color",'#'+cb);	
		$("#review").css("-ms-column-rule-color",'#'+cb);	
		$("#review").css("-o-column-rule-color",'#'+cb);
		$('.generator input').keyup(function () {
			var buVal = $('#listBu .active').val();
		}).keyup();
	});
});

$(function(){	
	var max20 = 20;
	
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
	
	$('#wRule').keyup(function () {
    	var wb = $(this).val();
		if(wb >= max20){
			$(this).val(max20);
    		$("#review").css("column-rule-width", max20+'px');
			$("#review").css("-moz-column-rule-width", max20+'px');
			$("#review").css("-webkit-column-rule-width", max20+'px');
			$("#review").css("-ms-column-rule-width", max20+'px');
			$("#review").css("-o-column-rule-width", max20+'px');
		}else {
			$("#review").css("column-rule-width", wb+'px');
			$("#review").css("-moz-column-rule-width", wb+'px');
			$("#review").css("-webkit-column-rule-width", wb+'px');
			$("#review").css("-ms-column-rule-width", wb+'px');
			$("#review").css("-o-column-rule-width", wb+'px');
			}
    }).keyup();
	
	function displayVals(){
		var cc = $('.cc').html();
		var cg = $('.cg').html();
		var wr = $('#wRule').val();
		var cr = $('#cRule').val();
		var sValue = $('#sRule').val();
		$("#review").css("column-rule-style", sValue);
		$("#review").css("-moz-column-rule-style", sValue);
		$("#review").css("-webkit-column-rule-style", sValue);
		$("#review").css("-ms-column-rule-style", sValue);
		$("#review").css("-o-column-rule-style", sValue);
		
		$('.styleCode p').html("column-count: "+cc+";<br />"+
		"-moz-column-count: "+cc+";<br />"+
		"-webkit-column-count: "+cc+";<br />"+
		"-ms-column-count: "+cc+";<br />"+
		"-o-column-count: "+cc+";<br />"+
		"column-gap: "+cg+"px;<br />"+
		"-moz-column-gap: "+cg+"px;<br />"+
		"-webkit-column-gap: "+cg+"px;<br />"+
		"-ms-column-gap: "+cg+"px;<br />"+
		"-o-column-gap: "+cg+"px;<br />"+
		"column-rule: "+wr+"px "+sValue+" #"+cr+";<br />"+
		"-moz-column-rule: "+wr+"px "+sValue+" #"+cr+";<br />"+
		"-webkit-column-rule: "+wr+"px "+sValue+" #"+cr+";<br />"+
		"-ms-column-rule: "+wr+"px "+sValue+" #"+cr+";<br />"+
		"-o-column-rule: "+wr+"px "+sValue+" #"+cr+";<br />");
	}
	$("#sRule").change(displayVals);
    displayVals();
	
	$( ".offset > span.slider" ).each(function() {
		function refreshSwatch() {
			var valD = $(this).slider( "value" );
			$(this).next().html(valD);
			var cc = $('.cc').html();
			var cg = $('.cg').html();
			var wr = $('#wRule').val();
			var cr = $('#cRule').val();
			
			$("#review").css("column-count", cc);
			$("#review").css("-moz-column-count", cc);
			$("#review").css("-webkit-column-count", cc);
			$("#review").css("-ms-column-count", cc);
			$("#review").css("-o-column-count", cc);
			
			var sValue = $('#sRule').val();
			$('.styleCode p').html("column-count: "+cc+";<br />"+
			"-moz-column-count: "+cc+";<br />"+
			"-webkit-column-count: "+cc+";<br />"+
			"-ms-column-count: "+cc+";<br />"+
			"-o-column-count: "+cc+";<br />"+
			"column-gap: "+cg+"px;<br />"+
			"-moz-column-gap: "+cg+"px;<br />"+
			"-webkit-column-gap: "+cg+"px;<br />"+
			"-ms-column-gap: "+cg+"px;<br />"+
			"-o-column-gap: "+cg+"px;<br />"+
			"column-rule: "+wr+"px "+sValue+" #"+cr+";<br />"+
			"-moz-column-rule: "+wr+"px "+sValue+" #"+cr+";<br />"+
			"-webkit-column-rule: "+wr+"px "+sValue+" #"+cr+";<br />"+
			"-ms-column-rule: "+wr+"px "+sValue+" #"+cr+";<br />"+
			"-o-column-rule: "+wr+"px "+sValue+" #"+cr+";<br />");
		}
		
		var value = parseInt( $( this ).text(), 10 );
		$( this ).empty().slider({
			value: value,
			range: "min",
			value: 2,
			min: 1,
			max: 5,
			animate: true,
			orientation: "horizontal",
			slide: refreshSwatch,
			change: refreshSwatch
		});
		$(this).next().html($(this).slider( "value" ));
	});
	
	$( ".offset02 > span.slider" ).each(function() {
		function refreshSwatch() {
			var valD = $(this).slider( "value" );
			$(this).next().html(valD);
			var cc = $('.cc').html();
			var cg = $('.cg').html();
			var wr = $('#wRule').val();
			var cr = $('#cRule').val();
			
			$("#review").css("column-gap", cg+"px");
			$("#review").css("-moz-column-gap", cg+"px");
			$("#review").css("-webkit-column-gap", cg+"px");
			$("#review").css("-ms-column-gap", cg+"px");
			$("#review").css("-o-column-gap", cg+"px");
			
			var sValue = $('#sRule').val();
			$('.styleCode p').html("column-count: "+cc+";<br />"+
			"-moz-column-count: "+cc+";<br />"+
			"-webkit-column-count: "+cc+";<br />"+
			"-ms-column-count: "+cc+";<br />"+
			"-o-column-count: "+cc+";<br />"+
			"column-gap: "+cg+"px;<br />"+
			"-moz-column-gap: "+cg+"px;<br />"+
			"-webkit-column-gap: "+cg+"px;<br />"+
			"-ms-column-gap: "+cg+"px;<br />"+
			"-o-column-gap: "+cg+"px;<br />"+
			"column-rule: "+wr+"px "+sValue+" #"+cr+";<br />"+
			"-moz-column-rule: "+wr+"px "+sValue+" #"+cr+";<br />"+
			"-webkit-column-rule: "+wr+"px "+sValue+" #"+cr+";<br />"+
			"-ms-column-rule: "+wr+"px "+sValue+" #"+cr+";<br />"+
			"-o-column-rule: "+wr+"px "+sValue+" #"+cr+";<br />");
		}
		
		var value = parseInt( $( this ).text(), 10 );
		$( this ).empty().slider({
			value: value,
			range: "min",
			value: 10,
			min: 1,
			max: 100,
			animate: true,
			orientation: "horizontal",
			slide: refreshSwatch,
			change: refreshSwatch
		});
		$(this).next().html($(this).slider( "value" ));
	});
	
	$('input').keyup(function () {
		var cc = $('.cc').html();
		var cg = $('.cg').html();
		var wr = $('#wRule').val();
		var cr = $('#cRule').val();
		$("#review").css("column-rule-color",'#'+cr);	
		$("#review").css("-moz-column-rule-color",'#'+cr);	
		$("#review").css("-webkit-column-rule-color",'#'+cr);	
		$("#review").css("-ms-column-rule-color",'#'+cr);	
		$("#review").css("-o-column-rule-color",'#'+cr);
		
		var sValue = $('#sRule').val();
		$('.styleCode p').html("column-count: "+cc+";<br />"+
		"-moz-column-count: "+cc+";<br />"+
		"-webkit-column-count: "+cc+";<br />"+
		"-ms-column-count: "+cc+";<br />"+
		"-o-column-count: "+cc+";<br />"+
		"column-gap: "+cg+"px;<br />"+
		"-moz-column-gap: "+cg+"px;<br />"+
		"-webkit-column-gap: "+cg+"px;<br />"+
		"-ms-column-gap: "+cg+"px;<br />"+
		"-o-column-gap: "+cg+"px;<br />"+
		"column-rule: "+wr+"px "+sValue+" #"+cr+";<br />"+
		"-moz-column-rule: "+wr+"px "+sValue+" #"+cr+";<br />"+
		"-webkit-column-rule: "+wr+"px "+sValue+" #"+cr+";<br />"+
		"-ms-column-rule: "+wr+"px "+sValue+" #"+cr+";<br />"+
		"-o-column-rule: "+wr+"px "+sValue+" #"+cr+";<br />");
	}).keyup();
});
