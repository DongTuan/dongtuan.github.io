function isNum(args)
{
args = args.toString();

if (args.length == 0)
return false;

for (var i = 0;  i<args.length;  i++)
{
	if (args.substring(i,i+1) < "0" || args.substring(i, i+1) > "9")
		{
		return false;
		}
}

return true;

}


function getHexNum(num)
{
	ar1 = new Array('0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15');
	ar2 = new Array('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F');
	if(num > 15)
	{
		return num;
	}
	else
	{
		red = ar2[num];
		return red;
	}
}


function isHexNum(num)
{
	args=num;
	sdsf = args.substring(args.length-1,args.length) ;
	//document.third.hexBin.value = sdsf;
	lc = sdsf.toLowerCase()
	if( isNum(sdsf) || lc =='a' || lc =='b' || lc =='c' || lc =='d' || lc =='e' || lc =='f')
	{
	return true;
	}
	return false;
}

function deciToHex(arg)
{
	res2 = 999;
	args = arg;
	while(args>15)
	{
		arg1=parseInt(args/16);
		arg2=args%16;
		arg2=getHexNum(arg2);
		args=arg1;

		if(res2 == 999)
		{
			res2=arg2.toString();
		}
		else
		{
			res2=arg2.toString()+res2.toString();
		}

	}
	if(args<16 && res2 != 999)
	{
		def = getHexNum(args);
		//document.first.deciBin.value = def;
		res2=def+res2.toString();
	}
	 else if(res2 == 999)
	{
		if(args < 16)
		{
			res2= getHexNum(args);
		}
		else
		{
			res2= 1;
		}
	}

	if(res2.length == 1)
	{
	  res2 = "0"+res2;
	}	
	return res2;

}

function change(name,whos)
{
	var sd = name.value;
	if(isNum(sd) && sd.length<4)
	{
		sd=sd.toLowerCase();
		if(parseInt(sd)<256)
		{
			
			var sdx = document.third.redn.value;
			var result = "#"+deciToHex(sdx);
			
			sdx = document.third.greenn.value;
			result = result+""+deciToHex(sdx);

			sdx = document.third.bluen.value;
			result = result+""+deciToHex(sdx);
	
			document.third.hexcolor.value = result;
			
			var colc = 	document.getElementById("dumm");
			colc.style.backgroundColor = result;
		}
		else
		{
			alert("value should be less than 256");
			if(whos == "r")
				document.third.redn.value = "0";
			else if(whos == "g")
				document.third.greenn.value = "0";
			else if(whos == "b")
				document.third.bluen.value = "0";
		}
	}
	else
	{
		if(whos == "r")
			document.third.redn.value = sd.substring(0,sd.length-1) ;
		else if(whos == "g")
			document.third.greenn.value = sd.substring(0,sd.length-1) ;
		else if(whos == "b")
			document.third.bluen.value = sd.substring(0,sd.length-1) ;
		//alert("Give Proper Integer Value");
	}
}

function color(test)
{

//var ch ="background-color: "+test+"; width: 60px; height: 25px;";
//alert(ch);
	for(var j=3; j<4; j++)
	{
		var myI=document.getElementsByTagName("input").item(j);
		//myI.setAttribute("style",ch);
		myI.style.backgroundColor=test;
	}

//myI.setAttribute("style","background-color: #F70808; width: 60px; height: 25px;");
}


function color1(test)
{
var myI=document.getElementsByTagName("table").item(0);
//myI.setAttribute("style",ch);
myI.style.backgroundColor=test;
}



