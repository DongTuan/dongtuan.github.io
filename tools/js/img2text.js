function encodeImageFileAsURL() {
    var filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0) {
      var fileToLoad = filesSelected[0];
      var fileReader = new FileReader();
      fileReader.onload = function(fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result; // <--- data: base64
var reslut =    document.getElementById("imgTest").innerHTML;
        var newImage = document.createElement('img');
        newImage.src = srcData;       document.getElementById("imgTest").innerHTML = newImage.outerHTML;
        //alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
       //console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);    
  $("#ket_qua").val(newImage.src);
      }
      fileReader.readAsDataURL(fileToLoad);
    }
  }