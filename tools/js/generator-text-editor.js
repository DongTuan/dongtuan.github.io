$(function(){
	
	String.prototype.replaceAll = function(
	strTarget,
	strSubString
	){
	var strText = this;
	var intIndexOfMatch = strText.indexOf( strTarget );
	 
	while (intIndexOfMatch != -1){
	strText = strText.replace( strTarget, strSubString );
	 
	intIndexOfMatch = strText.indexOf( strTarget );
	}
	return( strText );
	}
	
	$('.fieldChange textarea').hide();
	$('.fieldButton button').click(function(){
		var btnVal = $(this).val();
		if(btnVal == "inputTxt"){
			$('.fieldButton button').val("Ok");
			$('.fieldButton button').html("Ok");
			var txtVal = $('.fieldChange #review').html();
			var matchTxt = txtVal.match("<br>");
			if(matchTxt==null){
				$('textarea').val(txtVal);
			}else{
				var reTxt = txtVal.replaceAll("<br>","\n");		
				$('textarea').val(reTxt);
			}
			
			$('.fieldChange #review').hide();
			$('textarea').show();
			$('textarea').focus();
		}else if(btnVal == "Ok"){
			var txtVal = $('textarea').val();
			var lenghtTxt = txtVal.length;
			if(lenghtTxt>=1500){alert("Số ký tự tối đa không được nhiều hơn 1500, xin vui lòng nhập lại");}
			else{
				$('.fieldButton button').val("inputTxt");
				$('.fieldButton button').html("Nhập text");
				var matchTxt = txtVal.match("\n");
				if(matchTxt==null){
					$('.fieldChange #review').html(txtVal);	
				}else{
					var reTxt = txtVal.replaceAll("\n","<br>");		
					$('.fieldChange #review').html(reTxt);
				}
				$('textarea').hide();
				$('#review').show();	
			}
		}
	})
});

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
	
	function fsize(){
		var fSizeVal = $('#fSize').val();
		$("#review").css("font-size", fSizeVal+'px');
		
		var aChange = $('.alignText button.active').val();
		var ffChange = $('#fFamily').val();
		var fsChange = $('#fSize').val();
		var fwChange = $('.bold').val();
		var fstChange = $('.italic').val();
		var csChange = $('#cShadow').val();
		var bgcChange = $("#bgColor").val();
		var fcChange = $("#fColor").val();
		var ls = $('.letterspacing').html();
		var ws = $('.wordspacing').html();
		var lh = $('.lineheight').html();
		var hsChange = $('.hShadow').html();
		var vsChange = $('.vShadow').html();
		var bsChange = $('.bShadow').html();
		var fsChange = $('#fSize').val();
		$('#fSize').keyup(function () {
			var fsKey = $('#fSize').val();
			if(fsKey>max200){
				$(this).val(max200);
				$("#review").css("font-size", max200+'px');
			}else $("#review").css("font-size", fsKey+'px');
		}).keyup();
		
		$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
		'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
		'text-align: '+aChange+'; <br />'+
		'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
		'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
		
		var isChange = $("#textShadow:checked").val();
		if(isChange == "textShadow"){
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
			'font-family: '+$("#fFamily").attr('title')+'; <br />'+
			'font-size: '+fsChange+'px; <br />'+
			'font-weight: '+fwChange+'; <br />'+
			'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
		}else{
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
			'font-family: '+$("#fFamily").attr('title')+'; <br />'+
			'font-size: '+fsChange+'px; <br />'+
			'font-weight: '+fwChange+'; <br />'+
			'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
		}
		
		var desTextVal = $('.decorationText button.active').attr('title');		
		if($('.formText button').hasClass('smallcaps active')){
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
			'font-family: '+$("#fFamily").attr('title')+'; <br />'+
			'font-size: '+fsChange+'px; <br />'+
			'font-weight: '+fwChange+'; <br />'+
			'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'font-variant: small-caps; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
		}else if($('.formText button').hasClass('uppercase active')){
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
			'font-family: '+$("#fFamily").attr('title')+'; <br />'+
			'font-size: '+fsChange+'px; <br />'+
			'font-weight: '+fwChange+'; <br />'+
			'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'text-transform: uppercase; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
		}
		var desTextVal = $('.decorationText button.active').attr('title');
		if(desTextVal == "underline"){			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
			'font-family: '+$("#fFamily").attr('title')+'; <br />'+
			'font-size: '+fsChange+'px; <br />'+
			'font-weight: '+fwChange+'; <br />'+
			'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'text-decoration: underline; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');	
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			var formTextVal = $('.formText button.active').attr('title');
			if(formTextVal == "Small caps"){				
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if(formTextVal == "Uppercase"){				
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
		}else if(desTextVal == "line-through"){			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
			'font-family: '+$("#fFamily").attr('title')+'; <br />'+
			'font-size: '+fsChange+'px; <br />'+
			'font-weight: '+fwChange+'; <br />'+
			'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'text-decoration: line-through; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			var formTextVal = $('.formText button.active').attr('title');
			if(formTextVal == "Small caps"){				
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if(formTextVal == "Uppercase"){				
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
		}
	}
	$("#fSize").change(fsize);
    fsize();
	
	function ffamily(){
		var ff = $('#fFamily').val();
		if(ff == 'Courier'){$("#review").css('font-family','"Courier New", Courier, monospace');}
		else if(ff == 'Georgia'){$("#review").css('font-family','Georgia, "Times New Roman"');}
		else if(ff == 'Times New Roman'){$("#review").css('font-family','"Times New Roman", Times, serif');}
		else if(ff == 'Arial'){$("#review").css('font-family','"Arial Black", Gadget, sans-serif');}
		else if(ff == 'Helvetica'){$("#review").css('font-family','Helvetica, Arial, sans-serif');}
		else if(ff == 'Tahoma'){$("#review").css('font-family','Tahoma, Geneva, sans-serif');}
		else if(ff == 'Verdana'){$("#review").css('font-family','Verdana, Geneva, sans-serif');}
	}
	$("#fFamily").change(ffamily);
    ffamily();
	
	function valfamily(){
		var ff = $('#fFamily').val();
		if(ff == 'Courier'){$("#fFamily").attr('title','"Courier New", Courier, monospace');}
		else if(ff == 'Georgia'){$("#fFamily").attr('title','Georgia, "Times New Roman"');}
		else if(ff == 'Times New Roman'){$("#fFamily").attr('title','"Times New Roman", Times, serif');}
		else if(ff == 'Arial'){$("#fFamily").attr('title','"Arial Black", Gadget, sans-serif');}
		else if(ff == 'Helvetica'){$("#fFamily").attr('title','Helvetica, Arial, sans-serif');}
		else if(ff == 'Tahoma'){$("#fFamily").attr('title','Tahoma, Geneva, sans-serif');}
		else if(ff == 'Verdana'){$("#fFamily").attr('title','Verdana, Geneva, sans-serif');}
	}
	$("#fFamily").change(valfamily);
    valfamily();
	
	function codefamily(){
		var ff = $('#fFamily').val();
		if(ff == 'Courier'){
			$('#review').css('font-family',ffamily);
			
			var aChange = $('.alignText button.active').val();
			var ffChange = $('#fFamily').val();
			var fsChange = $('#fSize').val();
			var fwChange = $('.bold').val();
			var fstChange = $('.italic').val();
			var csChange = $('#cShadow').val();
			var bgcChange = $("#bgColor").val();
			var fcChange = $("#fColor").val();
			var ls = $('.letterspacing').html();
			var ws = $('.wordspacing').html();
			var lh = $('.lineheight').html();
			var hsChange = $('.hShadow').html();
			var vsChange = $('.vShadow').html();
			var bsChange = $('.bShadow').html();
			var fsChange = $('#fSize').val();
			$('#fSize').keyup(function () {
				var fsKey = $('#fSize').val();
				if(fsKey>max200){
					$(this).val(max200);
					$("#review").css("font-size", max200+'px');
				}else $("#review").css("font-size", fsKey+'px');
			}).keyup();
			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
			'font-family: '+$("#fFamily").attr('title')+'; <br />'+
			'font-size: '+fsChange+'px; <br />'+
			'font-weight: '+fwChange+'; <br />'+
			'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			var desTextVal = $('.decorationText button.active').attr('title');
			if($('.formText button').hasClass('smallcaps active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if($('.formText button').hasClass('uppercase active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
			var desTextVal = $('.decorationText button.active').attr('title');
			if(desTextVal == "underline"){			
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
				
				var formTextVal = $('.formText button.active').attr('title');
				if(formTextVal == "Small caps"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
					
				}else if(formTextVal == "Uppercase"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}
			}else if(desTextVal == "line-through"){			
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
				
				var formTextVal = $('.formText button.active').attr('title');
				if(formTextVal == "Small caps"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}else if(formTextVal == "Uppercase"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}
			}	
		}
		else if(ff == 'Georgia'){
			$('#review').css('font-family',ffamily);
			
			var aChange = $('.alignText button.active').val();
			var ffChange = $('#fFamily').val();
			var fsChange = $('#fSize').val();
			var fwChange = $('.bold').val();
			var fstChange = $('.italic').val();
			var csChange = $('#cShadow').val();
			var bgcChange = $("#bgColor").val();
			var fcChange = $("#fColor").val();
			var ls = $('.letterspacing').html();
			var ws = $('.wordspacing').html();
			var lh = $('.lineheight').html();
			var hsChange = $('.hShadow').html();
			var vsChange = $('.vShadow').html();
			var bsChange = $('.bShadow').html();
			var fsChange = $('#fSize').val();
			$('#fSize').keyup(function () {
				var fsKey = $('#fSize').val();
				if(fsKey>max200){
					$(this).val(max200);
					$("#review").css("font-size", max200+'px');
				}else $("#review").css("font-size", fsKey+'px');
			}).keyup();
			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
			'font-family: '+$("#fFamily").attr('title')+'; <br />'+
			'font-size: '+fsChange+'px; <br />'+
			'font-weight: '+fwChange+'; <br />'+
			'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			var desTextVal = $('.decorationText button.active').attr('title');
			if($('.formText button').hasClass('smallcaps active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if($('.formText button').hasClass('uppercase active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
			var desTextVal = $('.decorationText button.active').attr('title');
			if(desTextVal == "underline"){			
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
				
				var formTextVal = $('.formText button.active').attr('title');
				if(formTextVal == "Small caps"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
					
				}else if(formTextVal == "Uppercase"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}
			}else if(desTextVal == "line-through"){			
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
				
				var formTextVal = $('.formText button.active').attr('title');
				if(formTextVal == "Small caps"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}else if(formTextVal == "Uppercase"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}
			}	
		}
		else if(ff == 'Times New Roman'){
			$('#review').css('font-family',ffamily);
			
			var aChange = $('.alignText button.active').val();
			var ffChange = $('#fFamily').val();
			var fsChange = $('#fSize').val();
			var fwChange = $('.bold').val();
			var fstChange = $('.italic').val();
			var csChange = $('#cShadow').val();
			var bgcChange = $("#bgColor").val();
			var fcChange = $("#fColor").val();
			var ls = $('.letterspacing').html();
			var ws = $('.wordspacing').html();
			var lh = $('.lineheight').html();
			var hsChange = $('.hShadow').html();
			var vsChange = $('.vShadow').html();
			var bsChange = $('.bShadow').html();
			var fsChange = $('#fSize').val();
			$('#fSize').keyup(function () {
				var fsKey = $('#fSize').val();
				if(fsKey>max200){
					$(this).val(max200);
					$("#review").css("font-size", max200+'px');
				}else $("#review").css("font-size", fsKey+'px');
			}).keyup();
			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
			'font-family: '+$("#fFamily").attr('title')+'; <br />'+
			'font-size: '+fsChange+'px; <br />'+
			'font-weight: '+fwChange+'; <br />'+
			'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			var desTextVal = $('.decorationText button.active').attr('title');
			if($('.formText button').hasClass('smallcaps active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if($('.formText button').hasClass('uppercase active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
			var desTextVal = $('.decorationText button.active').attr('title');
			if(desTextVal == "underline"){			
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
				
				var formTextVal = $('.formText button.active').attr('title');
				if(formTextVal == "Small caps"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
					
				}else if(formTextVal == "Uppercase"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}
			}else if(desTextVal == "line-through"){			
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
				
				var formTextVal = $('.formText button.active').attr('title');
				if(formTextVal == "Small caps"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}else if(formTextVal == "Uppercase"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}
			}	
		}
		else if(ff == 'Arial'){
			$('#review').css('font-family',ffamily);
			
			var aChange = $('.alignText button.active').val();
			var ffChange = $('#fFamily').val();
			var fsChange = $('#fSize').val();
			var fwChange = $('.bold').val();
			var fstChange = $('.italic').val();
			var csChange = $('#cShadow').val();
			var bgcChange = $("#bgColor").val();
			var fcChange = $("#fColor").val();
			var ls = $('.letterspacing').html();
			var ws = $('.wordspacing').html();
			var lh = $('.lineheight').html();
			var hsChange = $('.hShadow').html();
			var vsChange = $('.vShadow').html();
			var bsChange = $('.bShadow').html();
			var fsChange = $('#fSize').val();
			$('#fSize').keyup(function () {
				var fsKey = $('#fSize').val();
				if(fsKey>max200){
					$(this).val(max200);
					$("#review").css("font-size", max200+'px');
				}else $("#review").css("font-size", fsKey+'px');
			}).keyup();
			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
			'font-family: '+$("#fFamily").attr('title')+'; <br />'+
			'font-size: '+fsChange+'px; <br />'+
			'font-weight: '+fwChange+'; <br />'+
			'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			var desTextVal = $('.decorationText button.active').attr('title');
			if($('.formText button').hasClass('smallcaps active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if($('.formText button').hasClass('uppercase active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
			var desTextVal = $('.decorationText button.active').attr('title');
			if(desTextVal == "underline"){			
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
				
				var formTextVal = $('.formText button.active').attr('title');
				if(formTextVal == "Small caps"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
					
				}else if(formTextVal == "Uppercase"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}
			}else if(desTextVal == "line-through"){			
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
				'font-family: '+$("#fFamily").attr('title')+'; <br />'+
				'font-size: '+fsChange+'px; <br />'+
				'font-weight: '+fwChange+'; <br />'+
				'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
				
				var formTextVal = $('.formText button.active').attr('title');
				if(formTextVal == "Small caps"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}else if(formTextVal == "Uppercase"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
					'font-family: '+$("#fFamily").attr('title')+'; <br />'+
					'font-size: '+fsChange+'px; <br />'+
					'font-weight: '+fwChange+'; <br />'+
					'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
						'font-family: '+$("#fFamily").attr('title')+'; <br />'+
						'font-size: '+fsChange+'px; <br />'+
						'font-weight: '+fwChange+'; <br />'+
						'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}
			}	
		}
		else if(ff == 'Helvetica'){
			$('#review').css('font-family',ffamily);
			
			var aChange = $('.alignText button.active').val();
			var ffChange = $('#fFamily').val();
			var fsChange = $('#fSize').val();
			var fwChange = $('.bold').val();
			var fstChange = $('.italic').val();
			var csChange = $('#cShadow').val();
			var bgcChange = $("#bgColor").val();
			var fcChange = $("#fColor").val();
			var ls = $('.letterspacing').html();
			var ws = $('.wordspacing').html();
			var lh = $('.lineheight').html();
			var hsChange = $('.hShadow').html();
			var vsChange = $('.vShadow').html();
			var bsChange = $('.bShadow').html();
			var fsChange = $('#fSize').val();
			$('#fSize').keyup(function () {
				var fsKey = $('#fSize').val();
				if(fsKey>max200){
					$(this).val(max200);
					$("#review").css("font-size", max200+'px');
				}else $("#review").css("font-size", fsKey+'px');
			}).keyup();
			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			var desTextVal = $('.decorationText button.active').attr('title');
			if($('.formText button').hasClass('smallcaps active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if($('.formText button').hasClass('uppercase active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
			var desTextVal = $('.decorationText button.active').attr('title');
			if(desTextVal == "underline"){			
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
				
				var formTextVal = $('.formText button.active').attr('title');
				if(formTextVal == "Small caps"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
					
				}else if(formTextVal == "Uppercase"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}
			}else if(desTextVal == "line-through"){			
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
				
				var formTextVal = $('.formText button.active').attr('title');
				if(formTextVal == "Small caps"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}else if(formTextVal == "Uppercase"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}
			}	
		}
		else if(ff == 'Tahoma'){
			$('#review').css('font-family',ffamily);
			
			var aChange = $('.alignText button.active').val();
			var ffChange = $('#fFamily').val();
			var fsChange = $('#fSize').val();
			var fwChange = $('.bold').val();
			var fstChange = $('.italic').val();
			var csChange = $('#cShadow').val();
			var bgcChange = $("#bgColor").val();
			var fcChange = $("#fColor").val();
			var ls = $('.letterspacing').html();
			var ws = $('.wordspacing').html();
			var lh = $('.lineheight').html();
			var hsChange = $('.hShadow').html();
			var vsChange = $('.vShadow').html();
			var bsChange = $('.bShadow').html();
			var fsChange = $('#fSize').val();
			$('#fSize').keyup(function () {
				var fsKey = $('#fSize').val();
				if(fsKey>max200){
					$(this).val(max200);
					$("#review").css("font-size", max200+'px');
				}else $("#review").css("font-size", fsKey+'px');
			}).keyup();
			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			var desTextVal = $('.decorationText button.active').attr('title');
			if($('.formText button').hasClass('smallcaps active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if($('.formText button').hasClass('uppercase active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
			var desTextVal = $('.decorationText button.active').attr('title');
			if(desTextVal == "underline"){			
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
				
				var formTextVal = $('.formText button.active').attr('title');
				if(formTextVal == "Small caps"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
					
				}else if(formTextVal == "Uppercase"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}
			}else if(desTextVal == "line-through"){			
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
				
				var formTextVal = $('.formText button.active').attr('title');
				if(formTextVal == "Small caps"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}else if(formTextVal == "Uppercase"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}
			}	
		}
		else if(ff == 'Verdana'){
			$('#review').css('font-family',ffamily);
			
			var aChange = $('.alignText button.active').val();
			var ffChange = $('#fFamily').val();
			var fsChange = $('#fSize').val();
			var fwChange = $('.bold').val();
			var fstChange = $('.italic').val();
			var csChange = $('#cShadow').val();
			var bgcChange = $("#bgColor").val();
			var fcChange = $("#fColor").val();
			var ls = $('.letterspacing').html();
			var ws = $('.wordspacing').html();
			var lh = $('.lineheight').html();
			var hsChange = $('.hShadow').html();
			var vsChange = $('.vShadow').html();
			var bsChange = $('.bShadow').html();
			var fsChange = $('#fSize').val();
			$('#fSize').keyup(function () {
				var fsKey = $('#fSize').val();
				if(fsKey>max200){
					$(this).val(max200);
					$("#review").css("font-size", max200+'px');
				}else $("#review").css("font-size", fsKey+'px');
			}).keyup();
			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			var desTextVal = $('.decorationText button.active').attr('title');
			if($('.formText button').hasClass('smallcaps active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if($('.formText button').hasClass('uppercase active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
			var desTextVal = $('.decorationText button.active').attr('title');
			if(desTextVal == "underline"){			
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
				
				var formTextVal = $('.formText button.active').attr('title');
				if(formTextVal == "Small caps"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
					
				}else if(formTextVal == "Uppercase"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}
			}else if(desTextVal == "line-through"){			
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
				
				var formTextVal = $('.formText button.active').attr('title');
				if(formTextVal == "Small caps"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}else if(formTextVal == "Uppercase"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}
			}	
		}
	}
	$("#fFamily").change(codefamily);
    codefamily();
	
	$('input#cShadow').change(function(){
		var csChange = $('#cShadow').val();
		var hsChange = $('.hShadow').html();
		var vsChange = $('.vShadow').html();
		var bsChange = $('.bShadow').html();
		$('#review').css('text-shadow',hsChange+'px '+vsChange+'px '+bsChange+'px '+'#'+csChange);
	}).keyup();
		
	$('input').change(function() {
		var aChange = $('.alignText button.active').val();
		var ffChange = $('#fFamily').val();
		var fsChange = $('#fSize').val();
		var fwChange = $('.bold').val();
		var fstChange = $('.italic').val();
		var csChange = $('#cShadow').val();
		var bgcChange = $("#bgColor").val();
		var fcChange = $("#fColor").val();
		var ls = $('.letterspacing').html();
		var ws = $('.wordspacing').html();
		var lh = $('.lineheight').html();
		var hsChange = $('.hShadow').html();
		var vsChange = $('.vShadow').html();
		var bsChange = $('.bShadow').html();
		var fsChange = $('#fSize').val();
		$('#review').css('color','#'+fcChange);
		$('#review').css('background','#'+bgcChange);
		
		$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
		'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
		'text-align: '+aChange+'; <br />'+
		'letter-spacing: '+ls+'px; <br />'+
		'word-spacing: '+ws+'px; <br />'+
		'line-height: '+lh+'px; <br />'+
		'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
		
		var isChange = $("#textShadow:checked").val();
		if(isChange == "textShadow"){
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
		}else{
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
			'font-family: '+$("#fFamily").attr('title')+'; <br />'+
			'font-size: '+fsChange+'px; <br />'+
			'font-weight: '+fwChange+'; <br />'+
			'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
			'word-spacing: '+ws+'px; <br />'+
			'line-height: '+lh+'px;');
		}
		
		var desTextVal = $('.decorationText button.active').attr('title');
		if($('.formText button').hasClass('smallcaps active')){
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'font-variant: small-caps; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
		}else if($('.formText button').hasClass('uppercase active')){
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'text-transform: uppercase; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
		}
		
		if(desTextVal == "underline"){			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'text-decoration: underline; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			var formTextVal = $('.formText button.active').attr('title');
			if(formTextVal == "Small caps"){				
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if(formTextVal == "Uppercase"){				
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
		}else if(desTextVal == "line-through"){			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'text-decoration: line-through; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			var formTextVal = $('.formText button.active').attr('title');
			if(formTextVal == "Small caps"){				
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if(formTextVal == "Uppercase"){				
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
		}
	});
	
	$("button.bold").toggle(function () {
		$('#review').css('font-weight','bold');
		$(this).val('bold');
		$(this).addClass('active');
		var aChange = $('.alignText button.active').val();
		var ffChange = $('#fFamily').val();
		var fsChange = $('#fSize').val();
		var fwChange = $('.bold').val();
		var fstChange = $('.italic').val();
		var csChange = $('#cShadow').val();
		var bgcChange = $("#bgColor").val();
		var fcChange = $("#fColor").val();
		var ls = $('.letterspacing').html();
		var ws = $('.wordspacing').html();
		var lh = $('.lineheight').html();
		var hsChange = $('.hShadow').html();
		var vsChange = $('.vShadow').html();
		var bsChange = $('.bShadow').html();
		var fsChange = $('#fSize').val();
		
		$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
		'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
		'text-align: '+aChange+'; <br />'+
		'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
		'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
		
		var isChange = $("#textShadow:checked").val();
		if(isChange == "textShadow"){
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
		}else{
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
		}

		if($('.formText button').hasClass('smallcaps active')){
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'font-variant: small-caps; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
		}else if($('.formText button').hasClass('uppercase active')){
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'text-transform: uppercase; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
		}
			
		var desTextVal = $('.decorationText button.active').attr('title');
		if(desTextVal == "underline"){			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'text-decoration: underline; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			if($('.formText button').hasClass('smallcaps active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if($('.formText button').hasClass('uppercase active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
			
		}else if(desTextVal == "line-through"){			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'text-decoration: line-through; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			if($('.formText button').hasClass('smallcaps active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if($('.formText button').hasClass('uppercase active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
		}
	},function () {
		$('#review').css('font-weight','normal');
		$(this).val('normal');
		$(this).removeClass('active');
		
		var aChange = $('.alignText button.active').val();
		var ffChange = $('#fFamily').val();
		var fsChange = $('#fSize').val();
		var fwChange = $('.bold').val();
		var fstChange = $('.italic').val();
		var csChange = $('#cShadow').val();
		var bgcChange = $("#bgColor").val();
		var fcChange = $("#fColor").val();
		var ls = $('.letterspacing').html();
		var ws = $('.wordspacing').html();
		var lh = $('.lineheight').html();
		var hsChange = $('.hShadow').html();
		var vsChange = $('.vShadow').html();
		var bsChange = $('.bShadow').html();
		var fsChange = $('#fSize').val();
		
		$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
		'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
		'text-align: '+aChange+'; <br />'+
		'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
		'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
		
		var isChange = $("#textShadow:checked").val();
		if(isChange == "textShadow"){
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
		}else{
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
		}

		if($('.formText button').hasClass('smallcaps active')){
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'font-variant: small-caps; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
		}else if($('.formText button').hasClass('uppercase active')){
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'text-transform: uppercase; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
		}

		var desTextVal = $('.decorationText button.active').attr('title');
		if(desTextVal == "underline"){			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'text-decoration: underline; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			if($('.formText button').hasClass('smallcaps active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if($('.formText button').hasClass('uppercase active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
		}else if(desTextVal == "line-through"){			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'text-decoration: line-through; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			if($('.formText button').hasClass('smallcaps active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if($('.formText button').hasClass('uppercase active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
		}
	});
	
	$("button.italic").toggle(function () {
		$('#review').css('font-style','italic');
		$(this).val('italic');
		$(this).addClass('active');
		
		var aChange = $('.alignText button.active').val();
		var ffChange = $('#fFamily').val();
		var fsChange = $('#fSize').val();
		var fwChange = $('.bold').val();
		var fstChange = $('.italic').val();
		var csChange = $('#cShadow').val();
		var bgcChange = $("#bgColor").val();
		var fcChange = $("#fColor").val();
		var ls = $('.letterspacing').html();
		var ws = $('.wordspacing').html();
		var lh = $('.lineheight').html();
		var hsChange = $('.hShadow').html();
		var vsChange = $('.vShadow').html();
		var bsChange = $('.bShadow').html();
		var fsChange = $('#fSize').val();
		
		$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
		'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
		'text-align: '+aChange+'; <br />'+
		'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
		'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
		
		var isChange = $("#textShadow:checked").val();
		if(isChange == "textShadow"){
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
		}else{
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
		}

		if($('.formText button').hasClass('smallcaps active')){
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'font-variant: small-caps; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
		}else if($('.formText button').hasClass('uppercase active')){
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'text-transform: uppercase; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
		}

		var desTextVal = $('.decorationText button.active').attr('title');
		if(desTextVal == "underline"){
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'text-decoration: underline; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			if($('.formText button').hasClass('smallcaps active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if($('.formText button').hasClass('uppercase active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
		}else if(desTextVal == "line-through"){			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'text-decoration: line-through; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			if($('.formText button').hasClass('smallcaps active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if($('.formText button').hasClass('uppercase active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
		}
	},function () {
		$('#review').css('font-style','normal');
		$(this).val('normal');
		$(this).removeClass('active');
		
		var aChange = $('.alignText button.active').val();
		var ffChange = $('#fFamily').val();
		var fsChange = $('#fSize').val();
		var fwChange = $('.bold').val();
		var fstChange = $('.italic').val();
		var csChange = $('#cShadow').val();
		var bgcChange = $("#bgColor").val();
		var fcChange = $("#fColor").val();
		var ls = $('.letterspacing').html();
		var ws = $('.wordspacing').html();
		var lh = $('.lineheight').html();
		var hsChange = $('.hShadow').html();
		var vsChange = $('.vShadow').html();
		var bsChange = $('.bShadow').html();
		var fsChange = $('#fSize').val();
		
		$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
		'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
		'text-align: '+aChange+'; <br />'+
		'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
		'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
		
		var isChange = $("#textShadow:checked").val();
		if(isChange == "textShadow"){
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
		}else{
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
		}
		
		if($('.formText button').hasClass('smallcaps active')){
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'font-variant: small-caps; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
		}else if($('.formText button').hasClass('uppercase active')){
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'text-transform: uppercase; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
		}

		var desTextVal = $('.decorationText button.active').attr('title');
		if(desTextVal == "underline"){			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'text-decoration: underline; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			if($('.formText button').hasClass('smallcaps active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if($('.formText button').hasClass('uppercase active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
		}else if(desTextVal == "line-through"){			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'text-decoration: line-through; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			if($('.formText button').hasClass('smallcaps active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if($('.formText button').hasClass('uppercase active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
		}
	});
	
	$("button.underline").click(function () {
		var buVal = $(this).val();
		if(buVal == 1){
			$(this).addClass('active');
			$("button.linethrough").removeClass('active');
			$('#review').removeClass('linethroughActive');
			$('#review').addClass('underlineActive');
			$(this).val(0);
			$("button.linethrough").val(1);
			
			var aChange = $('.alignText button.active').val();
			var ftChange = $('.formText button.active').attr('active');
			var ffChange = $('#fFamily').val();
			var fsChange = $('#fSize').val();
			var fwChange = $('.bold').val();
			var fstChange = $('.italic').val();
			var csChange = $('#cShadow').val();
			var bgcChange = $("#bgColor").val();
			var fcChange = $("#fColor").val();
			var ls = $('.letterspacing').html();
			var ws = $('.wordspacing').html();
			var lh = $('.lineheight').html();
			var hsChange = $('.hShadow').html();
			var vsChange = $('.vShadow').html();
			var bsChange = $('.bShadow').html();
			var fsChange = $('#fSize').val();
			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'text-decoration: underline; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			if($('.formText button').hasClass('smallcaps active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if($('.formText button').hasClass('uppercase active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
		}else{
			$("button.underline").removeClass('active');
			$('#review').removeClass('underlineActive');
			$(this).val(1);
			
			var aChange = $('.alignText button.active').val();
			var ffChange = $('#fFamily').val();
			var fsChange = $('#fSize').val();
			var fwChange = $('.bold').val();
			var fstChange = $('.italic').val();
			var csChange = $('#cShadow').val();
			var bgcChange = $("#bgColor").val();
			var fcChange = $("#fColor").val();
			var ls = $('.letterspacing').html();
			var ws = $('.wordspacing').html();
			var lh = $('.lineheight').html();
			var hsChange = $('.hShadow').html();
			var vsChange = $('.vShadow').html();
			var bsChange = $('.bShadow').html();
			var fsChange = $('#fSize').val();
			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			if($('.formText button').hasClass('smallcaps active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if($('.formText button').hasClass('uppercase active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
		}
		
	});
	
	$("button.linethrough").click(function () {
		var buVal = $(this).val();
		if(buVal == 1){
			$(this).addClass('active');
			$("button.underline").removeClass('active');
			$('#review').removeClass('underlineActive');
			$('#review').addClass('linethroughActive');
			$(this).val(0);
			$("button.underline").val(1);
			
			var aChange = $('.alignText button.active').val();
			var ffChange = $('#fFamily').val();
			var fsChange = $('#fSize').val();
			var fwChange = $('.bold').val();
			var fstChange = $('.italic').val();
			var csChange = $('#cShadow').val();
			var bgcChange = $("#bgColor").val();
			var fcChange = $("#fColor").val();
			var ls = $('.letterspacing').html();
			var ws = $('.wordspacing').html();
			var lh = $('.lineheight').html();
			var hsChange = $('.hShadow').html();
			var vsChange = $('.vShadow').html();
			var bsChange = $('.bShadow').html();
			var fsChange = $('#fSize').val();
			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'text-decoration: line-through; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			if($('.formText button').hasClass('smallcaps active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if($('.formText button').hasClass('uppercase active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
			
		}else{
			$("button.linethrough").removeClass('active');
			$('#review').removeClass('linethroughActive');
			$(this).val(1);
			
			var aChange = $('.alignText button.active').val();
			var ffChange = $('#fFamily').val();
			var fsChange = $('#fSize').val();
			var fwChange = $('.bold').val();
			var fstChange = $('.italic').val();
			var csChange = $('#cShadow').val();
			var bgcChange = $("#bgColor").val();
			var fcChange = $("#fColor").val();
			var ls = $('.letterspacing').html();
			var ws = $('.wordspacing').html();
			var lh = $('.lineheight').html();
			var hsChange = $('.hShadow').html();
			var vsChange = $('.vShadow').html();
			var bsChange = $('.bShadow').html();
			var fsChange = $('#fSize').val();
			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			if($('.formText button').hasClass('smallcaps active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if($('.formText button').hasClass('uppercase active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
		}
		
	});
	
	$("button.smallcaps").click(function () {
		var buVal = $(this).val();
		
		if(buVal == 1){
			$('#review').removeClass('uppercaseActive');
			$('#review').addClass('smallcapsActive');
			$(this).val(0);
			$('.formText button').removeClass('active');
			$(this).addClass('active');
			$("button.uppercase").val(1);
			
			var aChange = $('.alignText button.active').val();
			var dChange = $('.decorationText button.active').attr('title');
			var ffChange = $('#fFamily').val();
			var fsChange = $('#fSize').val();
			var fwChange = $('.bold').val();
			var fstChange = $('.italic').val();
			var csChange = $('#cShadow').val();
			var bgcChange = $("#bgColor").val();
			var fcChange = $("#fColor").val();
			var ls = $('.letterspacing').html();
			var ws = $('.wordspacing').html();
			var lh = $('.lineheight').html();
			var hsChange = $('.hShadow').html();
			var vsChange = $('.vShadow').html();
			var bsChange = $('.bShadow').html();
			var fsChange = $('#fSize').val();
			if($('.decorationText button').hasClass('active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: '+dChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: '+dChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: '+dChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
			
		}else{
			$('#review').removeClass('smallcapsActive');
			$(this).val(1);
			$('.formText button').removeClass('active');
			
			var dChange = $('.decorationText button.active').attr('title');
			var aChange = $('.alignText button.active').val();
			var ffChange = $('#fFamily').val();
			var fsChange = $('#fSize').val();
			var fwChange = $('.bold').val();
			var fstChange = $('.italic').val();
			var csChange = $('#cShadow').val();
			var bgcChange = $("#bgColor").val();
			var fcChange = $("#fColor").val();
			var ls = $('.letterspacing').html();
			var ws = $('.wordspacing').html();
			var lh = $('.lineheight').html();
			var hsChange = $('.hShadow').html();
			var vsChange = $('.vShadow').html();
			var bsChange = $('.bShadow').html();
			var fsChange = $('#fSize').val();
			
			if($('.decorationText button').hasClass('active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: '+dChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: '+dChange+'; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: '+dChange+'; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
		}
		
	});
	
	$("button.uppercase").click(function () {
		var buVal = $(this).val();
		if(buVal == 1){
			$('#review').removeClass('smallcapsActive');
			$('#review').addClass('uppercaseActive');
			$(this).val(0);
			$("button.smallcaps").val(1);
			$('.formText button').removeClass('active');
			$(this).addClass('active');
			
			var dChange = $('.decorationText button.active').attr('title');
			var aChange = $('.alignText button.active').val();
			var ffChange = $('#fFamily').val();
			var fsChange = $('#fSize').val();
			var fwChange = $('.bold').val();
			var fstChange = $('.italic').val();
			var csChange = $('#cShadow').val();
			var bgcChange = $("#bgColor").val();
			var fcChange = $("#fColor").val();
			var ls = $('.letterspacing').html();
			var ws = $('.wordspacing').html();
			var lh = $('.lineheight').html();
			var hsChange = $('.hShadow').html();
			var vsChange = $('.vShadow').html();
			var bsChange = $('.bShadow').html();
			var fsChange = $('#fSize').val();
			
			if($('.decorationText button').hasClass('active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: '+dChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: '+dChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: '+dChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
		}else{
			$('#review').removeClass('uppercaseActive');
			$(this).val(1);
			$('.formText button').removeClass('active');
			
			var dChange = $('.decorationText button.active').attr('title');
			var aChange = $('.alignText button.active').val();
			var ffChange = $('#fFamily').val();
			var fsChange = $('#fSize').val();
			var fwChange = $('.bold').val();
			var fstChange = $('.italic').val();
			var csChange = $('#cShadow').val();
			var bgcChange = $("#bgColor").val();
			var fcChange = $("#fColor").val();
			var ls = $('.letterspacing').html();
			var ws = $('.wordspacing').html();
			var lh = $('.lineheight').html();
			var hsChange = $('.hShadow').html();
			var vsChange = $('.vShadow').html();
			var bsChange = $('.bShadow').html();
			var fsChange = $('#fSize').val();
			
			if($('.decorationText button').hasClass('active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: '+dChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: '+dChange+'; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: '+dChange+'; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
		}
		
	});
	
	$('.alignText button').click(function(){
		$('.alignText button').removeClass('active');
		$(this).addClass('active');
		var aChange = $('.alignText button.active').val();
		$('#review').css('text-align',aChange);
		
		var ffChange = $('#fFamily').val();
		var fsChange = $('#fSize').val();
		var fwChange = $('.bold').val();
		var fstChange = $('.italic').val();
		var csChange = $('#cShadow').val();
		var bgcChange = $("#bgColor").val();
		var fcChange = $("#fColor").val();
		var ls = $('.letterspacing').html();
		var ws = $('.wordspacing').html();
		var lh = $('.lineheight').html();
		var hsChange = $('.hShadow').html();
		var vsChange = $('.vShadow').html();
		var bsChange = $('.bShadow').html();
		var fsChange = $('#fSize').val();
		
		$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
		'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
		'text-align: '+aChange+'; <br />'+
		'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
		'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
		
		var isChange = $("#textShadow:checked").val();
		if(isChange == "textShadow"){
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
		}else{
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
		}
		
		var desTextVal = $('.decorationText button.active').attr('title');
		if($('.formText button').hasClass('smallcaps active')){
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'font-variant: small-caps; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
		}else if($('.formText button').hasClass('uppercase active')){
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'text-transform: uppercase; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
		}
		var desTextVal = $('.decorationText button.active').attr('title');
		if(desTextVal == "underline"){			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'text-decoration: underline; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			var formTextVal = $('.formText button.active').attr('title');
			if(formTextVal == "Small caps"){				
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if(formTextVal == "Uppercase"){				
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
		}else if(desTextVal == "line-through"){			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'text-decoration: line-through; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			var formTextVal = $('.formText button.active').attr('title');
			if(formTextVal == "Small caps"){				
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if(formTextVal == "Uppercase"){				
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
		}
	});
		
	$('input#textShadow').change(function() {
		var isChange = $("#textShadow:checked").val();
		var csChange = $('#cShadow').val();
		var hsChange = $('.hShadow').html();
		var vsChange = $('.vShadow').html();
		var bsChange = $('.bShadow').html();
		$('#review').css('text-shadow',hsChange+'px '+vsChange+'px '+bsChange+'px '+'#'+csChange);
		if(isChange == "textShadow"){
			$('.boxShadow').css('display','block');
			
		}else{
			$('.boxShadow').css('display','none');
			$('#review').css('text-shadow','none');
		}
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
			
			var aChange = $('.alignText button.active').val();
			var ffChange = $('#fFamily').val();
			var fsChange = $('#fSize').val();
			var fwChange = $('.bold').val();
			var fstChange = $('.italic').val();
			var csChange = $('#cShadow').val();
			var bgcChange = $("#bgColor").val();
			var fcChange = $("#fColor").val();
			var ls = $('.letterspacing').html();
			var ws = $('.wordspacing').html();
			var lh = $('.lineheight').html();
			var hsChange = $('.hShadow').html();
			var vsChange = $('.vShadow').html();
			var bsChange = $('.bShadow').html();
			var fsChange = $('#fSize').val();
			$('#fSize').keyup(function () {
				var fsKey = $('#fSize').val();
				if(fsKey>max200){
					$(this).val(max200);
					$("#review").css("font-size", max200+'px');
				}else $("#review").css("font-size", fsKey+'px');
			}).keyup();
			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			var desTextVal = $('.decorationText button.active').attr('title');			
			if($('.formText button').hasClass('smallcaps active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if($('.formText button').hasClass('uppercase active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
			var desTextVal = $('.decorationText button.active').attr('title');
			if(desTextVal == "underline"){			
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
				
				var formTextVal = $('.formText button.active').attr('title');
				if(formTextVal == "Small caps"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}else if(formTextVal == "Uppercase"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}
			}else if(desTextVal == "line-through"){			
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
				
				var formTextVal = $('.formText button.active').attr('title');
				if(formTextVal == "Small caps"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}else if(formTextVal == "Uppercase"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}
			}
		}
		
		var value = parseInt( $( this ).text(), 10 );
		$( this ).empty().slider({
			value: value,
			range: "min",
			value: 1,
			min: -20,
			max: 20,
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
			var ls = $('.letterspacing').html();
			var ws = $('.wordspacing').html();
			var lh = $('.lineheight').html();
			var cs01 = $('#cShadow').val();
			
			var bgc01 = $("#bgColor").val();
			var fc01 = $("#fColor").val();
			var fs01 = $('#fSize').val();
			
			$('#review').css('letter-spacing',ls+'px');
			$('#review').css('word-spacing',ws+'px');
			$('#review').css('line-height',lh+'px');
			
			var aChange = $('.alignText button.active').val();
			var ffChange = $('#fFamily').val();
			var fsChange = $('#fSize').val();
			var fwChange = $('.bold').val();
			var fstChange = $('.italic').val();
			var csChange = $('#cShadow').val();
			var bgcChange = $("#bgColor").val();
			var fcChange = $("#fColor").val();
			var hsChange = $('.hShadow').html();
			var vsChange = $('.vShadow').html();
			var bsChange = $('.bShadow').html();
			var fsChange = $('#fSize').val();
			$('#fSize').keyup(function () {
				var fsKey = $('#fSize').val();
				if(fsKey>max200){
					$(this).val(max200);
					$("#review").css("font-size", max200+'px');
				}else $("#review").css("font-size", fsKey+'px');
			}).keyup();
			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			var desTextVal = $('.decorationText button.active').attr('title');			
			if($('.formText button').hasClass('smallcaps active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if($('.formText button').hasClass('uppercase active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
			var desTextVal = $('.decorationText button.active').attr('title');
			if(desTextVal == "underline"){			
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
				var formTextVal = $('.formText button.active').attr('title');
				if(formTextVal == "Small caps"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}else if(formTextVal == "Uppercase"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}
			}else if(desTextVal == "line-through"){			
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
				
				var formTextVal = $('.formText button.active').attr('title');
				if(formTextVal == "Small caps"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}else if(formTextVal == "Uppercase"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}
			}
		}
		
		var value = parseInt( $( this ).text(), 10 );
		$( this ).empty().slider({
			value: value,
			range: "min",
			value: 0,
			min: -10,
			max: 10,
			animate: true,
			orientation: "horizontal",
			slide: refreshSwatch,
			change: refreshSwatch
		});
		$(this).next().html($(this).slider( "value" ));
	});
	
	$( ".offset03 > span.slider" ).each(function() {
		function refreshSwatch() {
			var valD = $(this).slider( "value" );
			$(this).next().html(valD);
			var ls = $('.letterspacing').html();
			var ws = $('.wordspacing').html();
			var lh = $('.lineheight').html();
			var cs01 = $('#cShadow').val();
			$('#review').css('letter-spacing',ls+'px');
			$('#review').css('word-spacing',ws+'px');
			$('#review').css('line-height',lh+'px');
			
			var aChange = $('.alignText button.active').val();
			var ffChange = $('#fFamily').val();
			var fsChange = $('#fSize').val();
			var fwChange = $('.bold').val();
			var fstChange = $('.italic').val();
			var csChange = $('#cShadow').val();
			var bgcChange = $("#bgColor").val();
			var fcChange = $("#fColor").val();
			var hsChange = $('.hShadow').html();
			var vsChange = $('.vShadow').html();
			var bsChange = $('.bShadow').html();
			var fsChange = $('#fSize').val();
			$('#fSize').keyup(function () {
				var fsKey = $('#fSize').val();
				if(fsKey>max200){
					$(this).val(max200);
					$("#review").css("font-size", max200+'px');
				}else $("#review").css("font-size", fsKey+'px');
			}).keyup();
			
			$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
			'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
			'text-align: '+aChange+'; <br />'+
			'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
			'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			
			var isChange = $("#textShadow:checked").val();
			if(isChange == "textShadow"){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
			}else{
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
			}
			
			var desTextVal = $('.decorationText button.active').attr('title');			
			if($('.formText button').hasClass('smallcaps active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'font-variant: small-caps; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}else if($('.formText button').hasClass('uppercase active')){
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-transform: uppercase; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
			}
			var desTextVal = $('.decorationText button.active').attr('title');
			if(desTextVal == "underline"){			
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: underline; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
				
				var formTextVal = $('.formText button.active').attr('title');
				if(formTextVal == "Small caps"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}else if(formTextVal == "Uppercase"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: underline; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: underline; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}
			}else if(desTextVal == "line-through"){			
				$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
				'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
				'text-align: '+aChange+'; <br />'+
				'text-decoration: line-through; <br />'+
				'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
				'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				
				var isChange = $("#textShadow:checked").val();
				if(isChange == "textShadow"){
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
				}else{
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
				}
				
				var formTextVal = $('.formText button.active').attr('title');
				if(formTextVal == "Small caps"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'font-variant: small-caps; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'font-variant: small-caps; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}else if(formTextVal == "Uppercase"){				
					$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
					'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
					'text-align: '+aChange+'; <br />'+
					'text-decoration: line-through; <br />'+
					'text-transform: uppercase; <br />'+
					'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
					'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					
					var isChange = $("#textShadow:checked").val();
					if(isChange == "textShadow"){
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px; <br />'+
						'text-shadow: #'+csChange+' '+hsChange+'px '+vsChange+'px '+bsChange+'px;');
					}else{
						$('.sourceTxt p').html('background: #'+bgcChange+'; <br />'+
						'color: #'+fcChange+'; <br />'+
		'font-family: '+$("#fFamily").attr('title')+'; <br />'+
		'font-size: '+fsChange+'px; <br />'+
		'font-weight: '+fwChange+'; <br />'+
		'font-style: '+fstChange+'; <br />'+
						'text-align: '+aChange+'; <br />'+
						'text-decoration: line-through; <br />'+
						'text-transform: uppercase; <br />'+
						'letter-spacing: '+ls+'px; <br />'+
						'word-spacing: '+ws+'px; <br />'+
						'line-height: '+lh+'px;');
					}
				}
			}
		}
		
		var value = parseInt( $( this ).text(), 10 );
		$( this ).empty().slider({
			value: value,
			range: "min",
			value: 18,
			min: -50,
			max: 50,
			animate: true,
			orientation: "horizontal",
			slide: refreshSwatch,
			change: refreshSwatch
		});
		$(this).next().html($(this).slider( "value" ));
	});
});
