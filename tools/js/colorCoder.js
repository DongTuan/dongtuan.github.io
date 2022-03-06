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

function hexToDeci(num)
{
	res4 = 999;
	args = num;

	k =args.length-1;
	for(var i=0; i<args.length; i++)
	{
	 	thisnum = args.substring(i,i+1) ;
	 	var resd = Math.pow(16,k);
		if(thisnum=='a')
			thisnum=10;
		else if(thisnum=='b')
			thisnum=11;
		else if(thisnum=='c')
			thisnum=12;
		else if(thisnum=='d')
			thisnum=13;
		else if(thisnum=='e')
			thisnum=14;
		else if(thisnum=='f')
			thisnum=15;
		 resd = resd*thisnum;
		 k=k-1;
		 if(res4 == 999)
			{
				res4=resd.toString();
			}
			else
			{
				res4=parseInt(res4)+parseInt(resd);
			}
	}

	return res4;
}

function change(name)
{
	var sd = name.value;
	if(isHexNum(sd) && sd.length<7)
	{
		sd=sd.toLowerCase();
		if(sd.length == 6)
		{
			
			var sdx = sd.substring(0,2);
			var result = hexToDeci(sdx)
			
			sdx = sd.substring(2,4);
			result = result+","+hexToDeci(sdx)

			sdx = sd.substring(4,6);
			result = result+","+hexToDeci(sdx)
	
			document.third.rgbcolor.value = result;
			
			var colc = 	document.getElementById("dumm");
			colc.style.backgroundColor = "#"+sd;
		}
		else
		{
			document.third.rgbcolor.value = "";
		}
	}
	else
	{

		document.third.hexcolor.value = sd.substring(0,sd.length-1) ;
		//alert("Give Proper Integer Value");
	}
}

function color(test)
{

//var ch ="background-color: "+test+"; width: 60px; height: 25px;";
//alert(ch);
	for(var j=1; j<2; j++)
	{
		if(j!=3 && j!=6)
		{
		var myI=document.getElementsByTagName("input").item(j);
		//myI.setAttribute("style",ch);
		myI.style.backgroundColor=test;
		}
	}

//myI.setAttribute("style","background-color: #F70808; width: 60px; height: 25px;");
}


function color1(test)
{
var myI=document.getElementsByTagName("table").item(0);
//myI.setAttribute("style",ch);
myI.style.backgroundColor=test;
}



