$(function() {
	var maxCount = 5000;
    var count = {};
    $('.inputText textarea').each(function(){
		wCount($(this));
		$(this).keyup(function(){
			wCount($(this));
		})
    });

	function change_alias( alias ){
		var str = alias;
		str= str.toLowerCase(); 
		str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
		str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
		str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
		str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
		str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
		str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
		str= str.replace(/đ/g,"d"); 
		str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g," ");
		return str;
	}
	
    function wCount(field){
        var number = 0;
		var textVal = $(field).val();
		var changeVal = change_alias(textVal);
        var fMatch = changeVal.match(/\b/g);
        if(fMatch){
            number = fMatch.length / 2;
        }
        count[field] = number;
        var fCount = 0;
        $.each(count, function(k, v){
            fCount += v;
        });
		if(fCount<maxCount){
        	$('.result').html('Kết quả: có '+fCount+' từ');
		}else{
			alert('Bạn chỉ được nhập tối đa 5000 từ, xin vui lòng nhập lại.');
		}
    }
});
