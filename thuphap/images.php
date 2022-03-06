<?php
header("Content-type: image/gif");
putenv('GDFONTPATH=' . realpath('.'));
$font=$_GET['font'];
$text=$_GET['text'];
$mauchu= "#" . $_GET['mauchu'];
$maunen="#" . $_GET['maunen'];
$nen=$_GET['nen'];
$redtext = hexdec(substr($mauchu, 1, 2));
$greentext = hexdec(substr($mauchu, 3, 2));
$bluetext = hexdec(substr($mauchu, 5, 2));
$redback = hexdec(substr($maunen, 1, 2));
$greenback = hexdec(substr($maunen, 3, 2));
$blueback = hexdec(substr($maunen, 5, 2));
$tsize= 1 + $_GET['size'];
$size = imagettfbbox($tsize, 0, $font, $text);
$xsize = abs($size[0]) +abs($size[2]);
$ysize = abs($size[5]) +  abs($size[1]);
$image = imagecreate($xsize, $ysize);
$blue = imagecolorallocate($image, $redback, $greenback, $blueback);
$white = ImageColorAllocate($image, $redtext, $greentext, $bluetext);
imagettftext($image, $tsize, 0, abs($size[0]), abs($size[5]), $white, $font, $text);
if ($nen == "no") imagecolortransparent($image, $blue);
imagegif($image);
imagedestroy($image);
?>


