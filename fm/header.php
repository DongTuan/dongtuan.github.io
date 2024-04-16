<?php if (!defined('ACCESS')) die('Not access'); ?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="vi">
    <head>
        <title><?php echo $title; ?> - Quản Lý Dữ Liệu</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="style.css" media="all,handheld" />
        <link rel="icon" type="image/png" href="https://xn--ngtun-4ya2214cnka.vn/az/logo.png">
        <link rel="icon" type="image/x-icon" href="https://xn--ngtun-4ya2214cnka.vn/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="https://xn--ngtun-4ya2214cnka.vn/favicon.ico" />
    </head>
    <body>
        <div id="header">
            <ul>
                <li><a href="index.php"><i class="fa fa-home fa-2x" style="color:white" aria-hidden="true"></i></a></li>
                <?php if (!IS_INSTALL_ROOT_DIRECTORY && isset($_SESSION[SESS])) { ?>
                    <?php if (!defined('IS_CONNECT')) { ?>
                        <li><a href="database.php"><i class="fa fa-database fa-2x" style="color:white" aria-hidden="true"></i></a></li>
                    <?php } else { ?>
                        <li><a href="database_disconnect.php"><i class="fa fa-ban fa-2x" text-danger aria-hidden="true"></i> </span></a></li>
                    <?php } ?>
                    <li><a href="setting.php"><i class="fa fa-cog fa-2x" style="color:white" aria-hidden="true"></i></a></li>
                    <li><a href="exit.php"><i class="fa fa-sign-out fa-2x" style="color:red" aria-hidden="true"></i></a></li>
                <?php } ?>
            </ul>
        </div>
        <div id="container">
