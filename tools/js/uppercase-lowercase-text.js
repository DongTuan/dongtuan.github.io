function removeBreaks(){

var thecase = document.getElementById("lowerCase").checked;
var caseText = document.getElementById("oldText").value;

if(thecase == 1 || thecase ==  true){
caseText = caseText.toLowerCase();
}else{
caseText = caseText.toUpperCase();
}

document.getElementById("newText").value = caseText;
}
