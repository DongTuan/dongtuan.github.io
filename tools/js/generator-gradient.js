$(function(){
	
	$(".gPosLinear button").click(function () {
		var gPos = $(this).val();
		var gPosKit = $(this).html();
		var so = $('.sOffset').html();
		var eo = $('.eOffset').html();
		var cb = $("#cGradient01").val();
		var cbn = $("#cGradient0n").val();
		var valueH = $('.hItem input').val();
		var valueW = $('.wItem input').val();
		$(".gPosLinear button").removeClass('active');
		$(this).addClass('active');
		$('#review').css('background-image', 'linear-gradient('+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
		$('#review').css('background-image', '-webkit-linear-gradient('+gPosKit+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
		$('.styleCode p').html("height: "+ valueH +"px; <br />"+
				"width: "+ valueW +"px; <br />"+
				"background: linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -moz-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -o-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -ms-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -webkit-linear-gradient("+gPosKit+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
	});
	
	$(".gStyle button").click(function () {
		var gStyle = $(this).text();
		var so = $('.sOffset').html();
		var eo = $('.eOffset').html();
		var cb = $("#cGradient01").val();
		var cbn = $("#cGradient0n").val();
		var valueH = $('.hItem input').val();
		var valueW = $('.wItem input').val();
		$(".gStyle button").removeClass();
		$(this).addClass('active');
		if(gStyle=="linear"){
			$('.gPosLinear').show();
			$('.gPosCircle, .gPosEllipse, .sizeOffset, .gSizeCircle, .gSizeEllipse').hide();
			
			$(".gPosLinear button").click(function () {
				var gPos = $(this).val();
				var gPosKit = $(this).html();
				var so = $('.sOffset').html();
				var eo = $('.eOffset').html();
				var cb = $("#cGradient01").val();
				var cbn = $("#cGradient0n").val();
				var valueH = $('.hItem input').val();
				var valueW = $('.wItem input').val();
				$(".gPosLinear button").removeClass('active');
				$(this).addClass('active');
				$('#review').css('background-image', 'linear-gradient('+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-linear-gradient('+gPosKit+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
				"width: "+ valueW +"px; <br />"+
				"background: linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -moz-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -o-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -ms-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -webkit-linear-gradient("+gPosKit+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			});

			var gPos = $(".gPosLinear button.active").val();
			var gPosKit = $(".gPosLinear button.active").html();
			$('#review').css('background-image', 'linear-gradient('+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
			$('#review').css('background-image', '-webkit-linear-gradient('+gPosKit+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
			$('.styleCode p').html("height: "+ valueH +"px; <br />"+
				"width: "+ valueW +"px; <br />"+
				"background: linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -moz-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -o-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -ms-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -webkit-linear-gradient("+gPosKit+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
		}else if(gStyle=="circle"){
			$('.gPosCircle, .sizeOffset, .gSizeCircle').show();
			$('.gPosLinear, .gPosEllipse, .gSizeEllipse').hide();
			var gSize = $(".gSizeCircle button.active").val();
			var gPos = $(".gPosCircle button.active").val();
			var gPosKit = gPos.substr(3);
			var so = $('.sOffset').html();
			var eo = $('.eOffset').html();
			var cb = $("#cGradient01").val();
			var cbn = $("#cGradient0n").val();
			var valueH = $('.hItem input').val();
			var valueW = $('.wItem input').val();
			$(".gPosCircle button").click(function () {
				var gPos = $(this).val();
				var gPosKit = gPos.substr(3);
				var so = $('.sOffset').html();
				var eo = $('.eOffset').html();
				var cb = $("#cGradient01").val();
				var cbn = $("#cGradient0n").val();
				var valueH = $('.hItem input').val();
				var valueW = $('.wItem input').val();
				var gSize = $(".gSizeCircle button.active").val();
				$(".gPosCircle button").removeClass('active');
				$(this).addClass('active');
				$('#review').css('background-image', 'radial-gradient(circle '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', circle '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
				"width: "+ valueW +"px; <br />"+
				"background: radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -moz-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -o-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -ms-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -webkit-radial-gradient("+gPosKit+", circle "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			});
			
			$(".gSizeCircle button").click(function () {
				var gSize = $(this).val();
				var so = $('.sOffset').html();
				var eo = $('.eOffset').html();
				var cb = $("#cGradient01").val();
				var cbn = $("#cGradient0n").val();
				var valueH = $('.hItem input').val();
				var valueW = $('.wItem input').val();
				var gPos = $(".gPosCircle button.active").val();
				var gPosKit = gPos.substr(3);
				$(".gSizeCircle button").removeClass('active');
				$(this).addClass('active');
				$('#review').css('background-image', 'radial-gradient(circle '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', circle '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
				"width: "+ valueW +"px; <br />"+
				"background: radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -moz-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -o-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -ms-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -webkit-radial-gradient("+gPosKit+", circle "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			});
			
			$('#review').css('background-image', 'radial-gradient(circle '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
			$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', circle '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
			$('.styleCode p').html("height: "+ valueH +"px; <br />"+
				"width: "+ valueW +"px; <br />"+
				"background: radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -moz-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -o-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -ms-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -webkit-radial-gradient("+gPosKit+", circle "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
		}else if(gStyle=="ellipse"){
			$('.gPosEllipse, .sizeOffse, .gSizeEllipse').show();
			$('.gPosLinear, .gPosCircle, .gSizeCircle').hide();
			
			var gSize = $(".gSizeEllipse button.active").val();
			var gPos = $(".gPosEllipse button.active").val();
			var gPosKit = gPos.substr(3);
			var so = $('.sOffset').html();
			var eo = $('.eOffset').html();
			var cb = $("#cGradient01").val();
			var cbn = $("#cGradient0n").val();
			var valueH = $('.hItem input').val();
			var valueW = $('.wItem input').val();
			$(".gPosEllipse button").click(function () {
				var gPos = $(this).val();
				var gPosKit = gPos.substr(3);
				var so = $('.sOffset').html();
				var eo = $('.eOffset').html();
				var cb = $("#cGradient01").val();
				var cbn = $("#cGradient0n").val();
				var valueH = $('.hItem input').val();
				var valueW = $('.wItem input').val();
				var gSize = $(".gSizeEllipse button.active").val();
				$(".gPosEllipse button").removeClass('active');
				$(this).addClass('active');
				$('#review').css('background-image', 'radial-gradient(ellipse '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', ellipse '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
				"width: "+ valueW +"px; <br />"+
				"background: radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -moz-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -o-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -ms-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -webkit-radial-gradient("+gPosKit+", ellipse "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			});
			
			$(".gSizeEllipse button").click(function () {
				var gSize = $(this).val();
				var so = $('.sOffset').html();
				var eo = $('.eOffset').html();
				var cb = $("#cGradient01").val();
				var cbn = $("#cGradient0n").val();
				var valueH = $('.hItem input').val();
				var valueW = $('.wItem input').val();
				var gPos = $(".gPosEllipse button.active").val();
				var gPosKit = gPos.substr(3);
				$(".gSizeEllipse button").removeClass('active');
				$(this).addClass('active');
				$('#review').css('background-image', 'radial-gradient(ellipse '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', ellipse '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
				"width: "+ valueW +"px; <br />"+
				"background: radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -moz-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -o-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -ms-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -webkit-radial-gradient("+gPosKit+", ellipse "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			});
			
			$('#review').css('background-image', 'radial-gradient(ellipse '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
			$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', ellipse '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
			$('.styleCode p').html("height: "+ valueH +"px; <br />"+
				"width: "+ valueW +"px; <br />"+
				"background: radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -moz-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -o-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -ms-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -webkit-radial-gradient("+gPosKit+", ellipse "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			
		}else {
			$('.gPosLinear').show();
			$('.gPosCircle, .gPosEllipse, .sizeOffset, .posList').hide();
			$('#review').css('background-image', '-moz-linear-gradient(center bottom, #cc0000 0%, #330000 100%)');
		}
	});
	
	$('input').change(function() {
		var cb = $("#cGradient01").val();
		var cbn = $("#cGradient0n").val();
		var so = $('.sOffset').html();
		var eo = $('.eOffset').html();
		var valueH = $('.hItem input').val();
		var valueW = $('.wItem input').val();
		var gStyleAcctive = $(".gStyle button.active").text();
		if(gStyleAcctive=="linear"){
			var cb = $("#cGradient01").val();
			var cbn = $("#cGradient0n").val();
			var so = $('.sOffset').html();
			var eo = $('.eOffset').html();
			var valueH = $('.hItem input').val();
			var valueW = $('.wItem input').val();
			var gStyleAcctive = $(".gStyle button.active").text();
			var gPos = $(".gPosLinear button.active").val();
			var gPosKit = $(".gPosLinear button.active").html();
			$('#review').css('background-image', '-moz-linear-gradient('+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
			$('#review').css('background-image', '-moz-linear-gradient('+gPosKit+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
			$('.styleCode p').html("height: "+ valueH +"px; <br />"+
				"width: "+ valueW +"px; <br />"+
				"background: linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -moz-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -o-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -ms-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -webkit-linear-gradient("+gPosKit+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
		}else if(gStyleAcctive=="circle"){
			var cb = $("#cGradient01").val();
			var cbn = $("#cGradient0n").val();
			var so = $('.sOffset').html();
			var eo = $('.eOffset').html();
			var valueH = $('.hItem input').val();
			var valueW = $('.wItem input').val();
			var gPos = $(".gPosCircle button.active").val();
			var gPosKit = gPos.substr(3);
			var gSize = $(".gSizeCircle button.active").val();
			$('#review').css('background-image', 'radial-gradient(circle '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
			$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', circle '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
			$('.styleCode p').html("height: "+ valueH +"px; <br />"+
				"width: "+ valueW +"px; <br />"+
				"background: radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -moz-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -o-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -ms-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -webkit-radial-gradient("+gPosKit+", circle "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
		}else if(gStyleAcctive=="ellipse"){
			var cb = $("#cGradient01").val();
			var cbn = $("#cGradient0n").val();
			var so = $('.sOffset').html();
			var eo = $('.eOffset').html();
			var valueH = $('.hItem input').val();
			var valueW = $('.wItem input').val();
			var gPos = $(".gPosEllipse button.active").val();
			var gPosKit = gPos.substr(3);
			var gSize = $(".gSizeEllipse button.active").val();
			$('#review').css('background-image', 'radial-gradient(ellipse '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
			$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', ellipse '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
			$('.styleCode p').html("height: "+ valueH +"px; <br />"+
				"width: "+ valueW +"px; <br />"+
				"background: radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -moz-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -o-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -ms-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -webkit-radial-gradient("+gPosKit+", ellipse "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
		}
		
		$(".gStyle button").click(function () {
			var gStyle = $(this).text();
			$(".gStyle button").removeClass('active');
			$(this).addClass('active');
			if(gStyle=="linear"){
				var gPos = $(".gPosLinear button.active").val();
				var gPosKit = $(".gPosLinear button.active").html();
				$(".gPosLinear button").click(function () {
					var cb = $("#cGradient01").val();
					var cbn = $("#cGradient0n").val();
					var so = $('.sOffset').html();
					var eo = $('.eOffset').html();
					var valueH = $('.hItem input').val();
					var valueW = $('.wItem input').val();
					var gPos = $(this).val();
					var gPosKit = $(this).html();
					$('#review').css('background-image', 'linear-gradient('+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
					$('#review').css('background-image', '-webkit-linear-gradient('+gPosKit+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
					$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ valueW +"px; <br />"+
						"background: linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-linear-gradient("+gPosKit+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
				});
				$('#review').css('background-image', 'linear-gradient('+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-linear-gradient('+gPosKit+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
			}else if(gStyle=="circle"){
				
				$(".gPosCircle button").click(function () {
					var gPos = $(this).val();
					var gPosKit = gPos.substr(3);
					var cb = $("#cGradient01").val();
					var cbn = $("#cGradient0n").val();
					var so = $('.sOffset').html();
					var eo = $('.eOffset').html();
					var valueH = $('.hItem input').val();
					var valueW = $('.wItem input').val();
					var gSize = $(".gSizeCircle button.active").val();
					$('#review').css('background-image', 'radial-gradient(circle '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
					$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', circle '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
					$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ valueW +"px; <br />"+
						"background: radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-radial-gradient("+gPosKit+", circle "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
				});
				
				$(".gSizeCircle button").click(function () {
					var gSize = $(this).val();
					var cb = $("#cGradient01").val();
					var cbn = $("#cGradient0n").val();
					var so = $('.sOffset').html();
					var eo = $('.eOffset').html();
					var valueH = $('.hItem input').val();
					var valueW = $('.wItem input').val();
					var gPos = $(".gPosCircle button.active").val();
					var gPosKit = gPos.substr(3);
					$('#review').css('background-image', 'radial-gradient(circle '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
					$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', circle '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
					$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ valueW +"px; <br />"+
						"background: radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-radial-gradient("+gPosKit+", circle "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
				});
				var cb = $("#cGradient01").val();
				var cbn = $("#cGradient0n").val();
				var so = $('.sOffset').html();
				var eo = $('.eOffset').html();
				var valueH = $('.hItem input').val();
				var valueW = $('.wItem input').val();
				var gSize = $(".gSizeCircle button.active").val();
				var gPos = $(".gPosCircle button.active").val();
				var gPosKit = gPos.substr(3);
				
				$('#review').css('background-image', 'radial-gradient(circle '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', circle '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
				"width: "+ valueW +"px; <br />"+
				"background: radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -moz-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -o-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -ms-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
				"background: -webkit-radial-gradient("+gPosKit+", circle "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			}else if(gStyle=="ellipse"){
				var cb = $("#cGradient01").val();
				var cbn = $("#cGradient0n").val();
				var so = $('.sOffset').html();
				var eo = $('.eOffset').html();
				var valueH = $('.hItem input').val();
				var valueW = $('.wItem input').val();
				var gSize = $(".gSizeEllipse button.active").val();
				var gPos = $(".gPosEllipse button.active").val();
				var gPosKit = gPos.substr(3);
				
				$(".gPosEllipse button").click(function () {
					var gPos = $(this).val();
					var gPosKit = gPos.substr(3);
					var cb = $("#cGradient01").val();
					var cbn = $("#cGradient0n").val();
					var so = $('.sOffset').html();
					var eo = $('.eOffset').html();
					var valueH = $('.hItem input').val();
					var valueW = $('.wItem input').val();
					var gSize = $(".gSizeEllipse button.active").val();
					$('#review').css('background-image', 'radial-gradient(ellipse '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
					$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', ellipse '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
					$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ valueW +"px; <br />"+
						"background: radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-radial-gradient("+gPosKit+", ellipse "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
				});
				
				$(".gSizeEllipse button").click(function () {
					var gSize = $(this).val();
					var cb = $("#cGradient01").val();
					var cbn = $("#cGradient0n").val();
					var so = $('.sOffset').html();
					var eo = $('.eOffset').html();
					var valueH = $('.hItem input').val();
					var valueW = $('.wItem input').val();
					var gPos = $(".gPosEllipse button.active").val();
					var gPosKit = gPos.substr(3);
					$('#review').css('background-image', 'radial-gradient(ellipse '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
					$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', ellipse '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
					$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ valueW +"px; <br />"+
						"background: radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-radial-gradient("+gPosKit+", ellipse "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
				});
				
				$('#review').css('background-image', 'radial-gradient(ellipse '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', ellipse '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ valueW +"px; <br />"+
						"background: radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-radial-gradient("+gPosKit+", ellipse "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			}
		});
			
	});
	
	$( ".offset > span.slider" ).each(function() {
		function refreshSwatch() {
			var valD = $(this).slider( "value" );
			$(this).next().html(valD);
			var so = $('.sOffset').html();
			var eo = $('.eOffset').html();
			
			var cb = $("#cGradient01").val();
			var cbn = $("#cGradient0n").val();
			var valueH = $('.hItem input').val();
			var valueW = $('.wItem input').val();
			
			var gStyleAcctive = $(".gStyle button.active").text();
			if(gStyleAcctive=="linear"){
				var so = $('.sOffset').html();
				var eo = $('.eOffset').html();
				
				var cb = $("#cGradient01").val();
				var cbn = $("#cGradient0n").val();
				var valueH = $('.hItem input').val();
				var valueW = $('.wItem input').val();
				var gPos = $(".gPosLinear button.active").val();
				var gPosKit = $(".gPosLinear button.active").html();
				$('#review').css('background-image', 'linear-gradient('+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-linear-gradient('+gPosKit+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ valueW +"px; <br />"+
						"background: linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-linear-gradient("+gPosKit+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			}else if(gStyleAcctive=="circle"){
				var so = $('.sOffset').html();
				var eo = $('.eOffset').html();
				var cb = $("#cGradient01").val();
				var cbn = $("#cGradient0n").val();
				var valueH = $('.hItem input').val();
				var valueW = $('.wItem input').val();
				var gPos = $(".gPosCircle button.active").val();
				var gPosKit = gPos.substr(3);
				var gSize = $(".gSizeCircle button.active").val();
				$('#review').css('background-image', 'radial-gradient(circle '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', circle '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ valueW +"px; <br />"+
						"background: radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-radial-gradient("+gPosKit+", circle "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			}else if(gStyleAcctive=="ellipse"){
				var so = $('.sOffset').html();
				var eo = $('.eOffset').html();
				var cb = $("#cGradient01").val();
				var cbn = $("#cGradient0n").val();
				var valueH = $('.hItem input').val();
				var valueW = $('.wItem input').val();
				var gPos = $(".gPosEllipse button.active").val();
				var gPosKit = gPos.substr(3);
				var gSize = $(".gSizeEllipse button.active").val();
				$('#review').css('background-image', 'radial-gradient(ellipse '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', ellipse '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ valueW +"px; <br />"+
						"background: radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-radial-gradient("+gPosKit+", ellipse "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			}
		}
		
		var value = parseInt( $( this ).text(), 10 );
		$( this ).empty().slider({
			value: value,
			range: "min",
			value: 0,
			min: 0,
			max: 100,
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
			var so = $('.sOffset').html();
			var eo = $('.eOffset').html();			
			var cb = $("#cGradient01").val();
			var cbn = $("#cGradient0n").val();
			var valueH = $('.hItem input').val();
			var valueW = $('.wItem input').val();
			
			var gStyleAcctive = $(".gStyle button.active").text();
			if(gStyleAcctive=="linear"){
				var so = $('.sOffset').html();
				var eo = $('.eOffset').html();			
				var cb = $("#cGradient01").val();
				var cbn = $("#cGradient0n").val();
				var valueH = $('.hItem input').val();
				var valueW = $('.wItem input').val();
				var gPos = $(".gPosLinear button.active").val();
				var gPosKit = $(".gPosLinear button.active").html();
				$('#review').css('background-image', 'linear-gradient('+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-linear-gradient('+gPosKit+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ valueW +"px; <br />"+
						"background: linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-linear-gradient("+gPosKit+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			}else if(gStyleAcctive=="circle"){
				var so = $('.sOffset').html();
				var eo = $('.eOffset').html();			
				var cb = $("#cGradient01").val();
				var cbn = $("#cGradient0n").val();
				var valueH = $('.hItem input').val();
				var valueW = $('.wItem input').val();
				var gPos = $(".gPosCircle button.active").val();
				var gPosKit = gPos.substr(3);
				var gSize = $(".gSizeCircle button.active").val();
				$('#review').css('background-image', 'radial-gradient(circle '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', circle '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ valueW +"px; <br />"+
						"background: radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-radial-gradient("+gPosKit+", circle "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			}else if(gStyleAcctive=="ellipse"){
				var so = $('.sOffset').html();
				var eo = $('.eOffset').html();			
				var cb = $("#cGradient01").val();
				var cbn = $("#cGradient0n").val();
				var valueH = $('.hItem input').val();
				var valueW = $('.wItem input').val();
				var gPos = $(".gPosEllipse button.active").val();
				var gPosKit = gPos.substr(3);
				var gSize = $(".gSizeEllipse button.active").val();
				$('#review').css('background-image', 'radial-gradient(ellipse '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', ellipse '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ valueW +"px; <br />"+
						"background: radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-radial-gradient("+gPosKit+", ellipse "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			}
		}
		
		var value = parseInt( $( this ).text(), 10 );
		$( this ).empty().slider({
			value: value,
			range: "min",
			value: 100,
			min: 0,
			max: 100,
			animate: true,
			orientation: "horizontal",
			slide: refreshSwatch,
			change: refreshSwatch
		});
		$(this).next().html($(this).slider( "value" ));
	});
});

$(function(){
	var min30 = 30;
	var max100 = 100;
	var max300 = 300;
	var max600 = 600;
	var max1000 = 1000;
	
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
	
	$('.hItem input').keyup(function () {
    	var valueH = $(this).val();
		
		if(valueH >max300){
			$(this).val(max300);
    		$("#review").css("height", max300+'px');
			var so = $('.sOffset').html();
		var eo = $('.eOffset').html();
		
		var cb = $("#cGradient01").val();
		var cbn = $("#cGradient0n").val();
		var valueW = $('.wItem input').val();
		
		var gStyleAcctive = $(".gStyle button.active").text();
		if(gStyleAcctive=="linear"){
			var gPos = $(".gPosLinear button.active").val();
			var gPosKit = $(".gPosLinear button.active").html();
			$('#review').css('background-image', 'linear-gradient('+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
			$('#review').css('background-image', '-webkit-linear-gradient('+gPosKit+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
			$('.styleCode p').html("height: "+ max300 +"px; <br />"+
					"width: "+ valueW +"px; <br />"+
					"background: linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
					"background: -moz-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
					"background: -o-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
					"background: -ms-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
					"background: -webkit-linear-gradient("+gPosKit+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
		}else if(gStyleAcctive=="circle"){
			var gPos = $(".gPosCircle button.active").val();
			var gPosKit = gPos.substr(3);
			var gSize = $(".gSizeCircle button.active").val();
			$('#review').css('background-image', 'radial-gradient(circle '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
			$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', circle '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
			$('.styleCode p').html("height: "+ max300 +"px; <br />"+
					"width: "+ valueW +"px; <br />"+
					"background: radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
					"background: -moz-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
					"background: -o-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
					"background: -ms-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
					"background: -webkit-radial-gradient("+gPosKit+", circle "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
		}else if(gStyleAcctive=="ellipse"){
			var gPos = $(".gPosEllipse button.active").val();
			var gPosKit = gPos.substr(3);
			var gSize = $(".gSizeEllipse button.active").val();
			$('#review').css('background-image', 'radial-gradient(ellipse '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
			$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', ellipse '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
			$('.styleCode p').html("height: "+ max300 +"px; <br />"+
					"width: "+ valueW +"px; <br />"+
					"background: radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
					"background: -moz-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
					"background: -o-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
					"background: -ms-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
					"background: -webkit-radial-gradient("+gPosKit+", ellipse "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
		}
		}else if(valueH == "" || valueH < min30){
			$(this).val(min30);
			$("#review").css("height", min30+'px');
				var so = $('.sOffset').html();
			var eo = $('.eOffset').html();
			
			var cb = $("#cGradient01").val();
			var cbn = $("#cGradient0n").val();
			var valueW = $('.wItem input').val();
			
			var gStyleAcctive = $(".gStyle button.active").text();
			if(gStyleAcctive=="linear"){
				var gPos = $(".gPosLinear button.active").val();
				var gPosKit = $(".gPosLinear button.active").html();
				$('#review').css('background-image', 'linear-gradient('+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-linear-gradient('+gPosKit+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ min30 +"px; <br />"+
						"width: "+ valueW +"px; <br />"+
						"background: linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkitlinear-gradient("+gPosKit+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			}else if(gStyleAcctive=="circle"){
				var gPos = $(".gPosCircle button.active").val();
				var gPosKit = gPos.substr(3);
				var gSize = $(".gSizeCircle button.active").val();
				$('#review').css('background-image', 'radial-gradient(circle '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', circle '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ min30 +"px; <br />"+
						"width: "+ valueW +"px; <br />"+
						"background: radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-radial-gradient("+gPosKit+", circle "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			}else if(gStyleAcctive=="ellipse"){
				var gPos = $(".gPosEllipse button.active").val();
				var gPosKit = gPos.substr(3);
				var gSize = $(".gSizeEllipse button.active").val();
				$('#review').css('background-image', 'radial-gradient(ellipse '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', ellipse '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ min30 +"px; <br />"+
						"width: "+ valueW +"px; <br />"+
						"background: radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-radial-gradient("+gPosKit+", ellipse "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			}
		}else{
			$("#review").css("height", valueH+'px');
			var so = $('.sOffset').html();
			var eo = $('.eOffset').html();
			
			var cb = $("#cGradient01").val();
			var cbn = $("#cGradient0n").val();
			var valueW = $('.wItem input').val();
			
			var gStyleAcctive = $(".gStyle button.active").text();
			if(gStyleAcctive=="linear"){
				var gPos = $(".gPosLinear button.active").val();
				var gPosKit = $(".gPosLinear button.active").html();
				$('#review').css('background-image', 'linear-gradient('+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-linear-gradient('+gPosKit+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ valueW +"px; <br />"+
						"background: linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-linear-gradient("+gPosKit+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			}else if(gStyleAcctive=="circle"){
				var gPos = $(".gPosCircle button.active").val();
				var gPosKit = gPos.substr(3);
				var gSize = $(".gSizeCircle button.active").val();
				$('#review').css('background-image', 'radial-gradient(circle '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', circle '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ valueW +"px; <br />"+
						"background: radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-radial-gradient("+gPosKit+", circle "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			}else if(gStyleAcctive=="ellipse"){
				var gPos = $(".gPosEllipse button.active").val();
				var gPosKit = gPos.substr(3);
				var gSize = $(".gSizeEllipse button.active").val();
				$('#review').css('background-image', 'radial-gradient(ellipse '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', ellipse '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ valueW +"px; <br />"+
						"background: radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-radial-gradient("+gPosKit+", ellipse "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			}
		}		
    }).keyup();
	
	$('.wItem input').keyup(function () {
    	var valueW = $(this).val();
		
		if(valueW >max600){
    		$("#review").css("width", max600+'px');
			$(this).val(max600);
			var so = $('.sOffset').html();
			var eo = $('.eOffset').html();
			
			var cb = $("#cGradient01").val();
			var cbn = $("#cGradient0n").val();
			var valueH = $('.hItem input').val();
			
			var gStyleAcctive = $(".gStyle button.active").text();
			if(gStyleAcctive=="linear"){
				var gPos = $(".gPosLinear button.active").val();
				var gPosKit = $(".gPosLinear button.active").html();
				$('#review').css('background-image', 'linear-gradient('+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-linear-gradient('+gPosKit+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ max600 +"px; <br />"+
						"background: linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-linear-gradient("+gPosKit+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			}else if(gStyleAcctive=="circle"){
				var gPos = $(".gPosCircle button.active").val();
				var gPosKit = gPos.substr(3);
				var gSize = $(".gSizeCircle button.active").val();
				$('#review').css('background-image', 'radial-gradient(circle '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', circle '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ max600 +"px; <br />"+
						"background: radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-radial-gradient("+gPosKit+", circle "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			}else if(gStyleAcctive=="ellipse"){
				var gPos = $(".gPosEllipse button.active").val();
				var gPosKit = gPos.substr(3);
				var gSize = $(".gSizeEllipse button.active").val();
				$('#review').css('background-image', 'radial-gradient(ellipse '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', ellipse '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ max600 +"px; <br />"+
						"background: radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-radial-gradient("+gPosKit+", ellipse "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			}
		}else if(valueW == "" || valueW <= min30){
			$("#review").css("width", min30+'px');
			$(this).val(min30);
			var so = $('.sOffset').html();
			var eo = $('.eOffset').html();
			
			var cb = $("#cGradient01").val();
			var cbn = $("#cGradient0n").val();
			var valueH = $('.hItem input').val();
			
			var gStyleAcctive = $(".gStyle button.active").text();
			if(gStyleAcctive=="linear"){
				var gPos = $(".gPosLinear button.active").val();
				var gPosKit = $(".gPosLinear button.active").html();
				$('#review').css('background-image', 'linear-gradient('+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-linear-gradient('+gPosKit+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ min30 +"px; <br />"+
						"background: linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-linear-gradient("+gPosKit+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			}else if(gStyleAcctive=="circle"){
				var gPos = $(".gPosCircle button.active").val();
				var gPosKit = gPos.substr(3);
				var gSize = $(".gSizeCircle button.active").val();
				$('#review').css('background-image', 'radial-gradient(circle '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', circle '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ min30 +"px; <br />"+
						"background: radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-radial-gradient("+gPosKit+", circle "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			}else if(gStyleAcctive=="ellipse"){
				var gPos = $(".gPosEllipse button.active").val();
				var gPosKit = gPos.substr(3);
				var gSize = $(".gSizeEllipse button.active").val();
				$('#review').css('background-image', 'radial-gradient(ellipse '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', ellipse '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ min30 +"px; <br />"+
						"background: radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-radial-gradient("+gPosKit+", ellipse "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			}
		}else{
			$("#review").css("width", valueW+'px');
			var so = $('.sOffset').html();
			var eo = $('.eOffset').html();
			
			var cb = $("#cGradient01").val();
			var cbn = $("#cGradient0n").val();
			var valueH = $('.hItem input').val();
			
			var gStyleAcctive = $(".gStyle button.active").text();
			if(gStyleAcctive=="linear"){
				var gPos = $(".gPosLinear button.active").val();
				var gPosKit = $(".gPosLinear button.active").html();
				$('#review').css('background-image', 'linear-gradient('+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-linear-gradient('+gPosKit+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ valueW +"px; <br />"+
						"background: linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-linear-gradient("+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-linear-gradient("+gPosKit+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			}else if(gStyleAcctive=="circle"){
				var gPos = $(".gPosCircle button.active").val();
				var gPosKit = gPos.substr(3);
				var gSize = $(".gSizeCircle button.active").val();
				$('#review').css('background-image', 'radial-gradient(circle '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', circle '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ valueW +"px; <br />"+
						"background: radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-radial-gradient(circle "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-radial-gradient("+gPosKit+", circle "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			}else if(gStyleAcctive=="ellipse"){
				var gPos = $(".gPosEllipse button.active").val();
				var gPosKit = gPos.substr(3);
				var gSize = $(".gSizeEllipse button.active").val();
				$('#review').css('background-image', 'radial-gradient(ellipse '+gSize+' '+gPos+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('#review').css('background-image', '-webkit-radial-gradient('+gPosKit+', ellipse '+gSize+', #'+cb+' '+so+'%, #'+cbn+' '+eo+'%)');
				$('.styleCode p').html("height: "+ valueH +"px; <br />"+
						"width: "+ valueW +"px; <br />"+
						"background: radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -moz-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -o-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -ms-radial-gradient(ellipse "+gSize+" "+gPos+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%); <br />"+
						"background: -webkit-radial-gradient("+gPosKit+", ellipse "+gSize+", #"+cb+" "+so+"%, #"+cbn+" "+eo+"%);");
			}
		}
		
		
    }).keyup();
	
	$(".zeroBack input").keyup(function () {
		var cornerInput = $(this).val();
		if(cornerInput == ""){
			$(this).val(0);
		}
	}).keyup();
	
	$(".maxBack input").keyup(function () {
		var cornerInput = $(this).val();
		if(cornerInput >= max1000){
			$(this).val(1000);
		}
	}).keyup();
	
	$(".maxBackS input").keyup(function () {
		var cornerInput = $(this).val();
		if(cornerInput >= max100){
			$(this).val(100);
		}
	}).keyup();
	
});
