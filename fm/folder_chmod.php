<?php define('ACCESS', true);

    include_once 'function.php';

    if (IS_LOGIN) {
        $title = 'Chmod thư mục';

        include_once 'header.php';

        echo '<div class="title">' . $title . '</div>';

        if ($dir == null || $name == null || !is_dir(processDirectory($dir . '/' . $name))) {
            echo '<div class="list"><span>Đường dẫn không tồn tại</span></div>
            <div class="title">Chức năng</div>
            <ul class="list">
                <li><i class="fa fa-list-ul" aria-hidden="true"></i> <a href="index.php' . $pages['paramater_0'] . '">Danh sách</a></li>
            </ul>';
        } else {
            $dir = processDirectory($dir);

            if (isset($_POST['submit'])) {
                echo '<div class="notice_failure">';

                if (empty($_POST['mode']))
                    echo 'Chưa nhập đầy đủ thông tin';
                else if (!@chmod($dir . '/' . $name, intval($_POST['mode'], 8)))
                    echo 'Chmod thư mục thất bại';
                else
                    goURL('index.php?dir=' . $dirEncode . $pages['paramater_1']);

                echo '</div>';
            }

            echo '<div class="list">
                <span class="bull">&bull;</span><span>' . printPath($dir . '/' . $name, true) . '</span><hr/>
                <form action="folder_chmod.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '" method="post">
                    <span class="bull">&bull;</span>Chế độ:<br/>
                    <input type="text" name="mode" value="' . getChmod($dir . '/' . $name) . '" size="18"/><br/>
                    <input type="submit" name="submit" value="Chmod"/>
                </form>
            </div>
            <div class="title">Chức năng</div>
            <ul class="list">
                <li><i class="fa fa-file-archive-o" aria-hidden="true"></i> <a href="folder_zip.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">Nén zip</a></li>
                <li><i class="fa fa-magic" aria-hidden="true"></i> <a href="folder_edit.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">Đổi tên</a></li>
                <li><i class="fa fa-files-o" aria-hidden="true"></i> <a href="folder_copy.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">Sao chép</a></li>
                <li><i class="fa fa-arrows" aria-hidden="true"></i/> <a href="folder_move.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">Di chuyển</a></li>
                <li><i class="fa fa-trash-o" aria-hidden="true"></i> <a href="folder_delete.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">Xóa</a></li>
                <li><i class="fa fa-list-ul" aria-hidden="true"></i> <a href="index.php?dir=' . $dirEncode . $pages['paramater_1'] . '">Danh sách</a></li>
            </ul>';
        }

        include_once 'footer.php';
    } else {
        goURL('login.php');
    }

?>