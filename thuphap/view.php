<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php
$title="Tạo logo mạng thư pháp, tạo hình nền thư pháp";
include "head.php";
$text=$_GET['text'];
if ($text=="") $text="Đồng Tuấn";
echo '<title>Tao logo thư pháp » '.$text.'</title>';
include "unicode.php";
$amaunen=$_GET['maunen'];
if ($amaunen=="") $amaunen="FFFFFF";
$maunen="#" . $amaunen;
$amauchu=$_GET['mauchu'];
if ($amauchu=="") $amauchu="000000";
$mauchu="#" . $amauchu;
$tsize=5 +$_GET['size'];
if($tsize==5) $tsize=18;
$font=$_GET['font'];
if ($font=="") $font="Thuphap.ttf";
$nen=$_GET['nen'];
if ($nen=="") $nen="no";
include"demo.php";
echo'<div class="phdr">Tạo logo thư pháp</div><div class="left">';
print"<div class=\"list1\"><img src=\"$link\"></div>";
print"<div class=\"list1\"><font color=\"green\">Đã tạo thành công: \"<b>$text</b>\"</font></div>";
print "<div class=\"list1\"><font color=\"red\">Tải về:</font><a href=\"images.php?text=$text&maunen=$amaunen&mauchu=$amauchu&nen=$nen&font=$font&size=$tsize\">Logo mạng</a>|<a href=\"images.php?text=$text&maunen=$amaunen&mauchu=$amauchu&nen=$nen&font=$font&size=$tsize\">Hình ảnh</a></div>
<div class=\"list1\"><b>Địa chỉ Logo:</b><form><input value=\"http://dongtuan.tk/tools/thuphap/images.php?text=$text&maunen=$amaunen&mauchu=$amauchu&nen=$nen&font=$font&size=$tsize\"></form></div>";
include"foot.php";
?>

