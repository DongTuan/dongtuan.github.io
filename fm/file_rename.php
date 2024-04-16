<?php define('ACCESS', true);

    include_once 'function.php';

    if (IS_LOGIN) {
        $title = 'Đổi tên tập tin';

        include_once 'header.php';

        echo '<div class="title">' . $title . '</div>';

        if ($dir == null || $name == null || !is_file(processDirectory($dir . '/' . $name))) {
            echo '<div class="list"><span>Đường dẫn không tồn tại</span></div>
            <div class="title">Chức năng</div>
            <ul class="list">
                <li><i class="fa fa-list-ul" aria-hidden="true"></i> <a href="index.php' . $pages['paramater_0'] . '">Danh sách</a></li>
            </ul>';
        } else {
            $dir = processDirectory($dir);
            $format = getFormat($name);

            if (isset($_POST['submit'])) {
                echo '<div class="notice_failure">';

                if (empty($_POST['name']))
                    echo 'Chưa nhập đầy đủ thông tin';
                else if (isNameError($_POST['name']))
                    echo 'Tên tập tin không hợp lệ';
                else if (!@rename($dir . '/' . $name, $dir . '/' . $_POST['name']))
                    echo 'Thay đổi thất bại';
                else
                    goURL('index.php?dir=' . $dirEncode . $pages['paramater_1']);

                echo '</div>';
            }

            echo '<div class="list">
                <span class="bull">&bull;</span><span>' . printPath($dir . '/' . $name) . '</span><hr/>
                <form action="file_rename.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '" method="post">
                    <span class="bull">&bull;</span>Tên tập tin:<br/>
                    <input type="text" name="name" value="' . (isset($_POST['name']) ? $_POST['name'] : $name) . '" size="18"/><br/>
                    <input type="submit" name="submit" value="Thay đổi"/>
                </form>
            </div>
            <div class="title">Chức năng</div>
            <ul class="list">
                <li><i class="fa fa-info-circle" aria-hidden="true"></i> <a href="file.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">Thông tin</a></li>';

                if (isFormatText($name)) {
                    echo '<li><i class="fa fa-pencil-square-o" aria-hidden="true"></i> <a href="edit_text.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">Sửa văn bản</a></li>';
                    echo '<li><i class="fa fa-pencil-square-o" aria-hidden="true"></i> <a href="edit_text_line.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">Sửa theo dòng</a></li>';
                } else if (in_array($format, $formats['zip'])) {
                    echo '<li><i class="fa fa-tripadvisor" aria-hidden="true"></i> <a href="file_viewzip.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">Xem</a></li>';
                    echo '<li><i class="fa fa-stack-overflow" aria-hidden="true"></i> <a href="file_unzip.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">Giải nén</a></li>';
                } else if (isFormatUnknown($name)) {
                    echo '<li><i class="fa fa-pencil-square-o" aria-hidden="true"></i> <a href="edit_text.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">Sửa dạng văn bản</a></li>';
                }

                echo '<li><i class="fa fa-download" aria-hidden="true"></i> <a href="file_download.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">Tải về</a></li>
                <li><i class="fa fa-files-o" aria-hidden="true"></i> <a href="file_copy.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">Sao chép</a></li>
                <li><i class="fa fa-arrows" aria-hidden="true"></i> <a href="file_move.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">Di chuyển</a></li>
                <li><i class="fa fa-trash-o" aria-hidden="true"></i> <a href="file_delete.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">Xóa</a></li>
                <li><i class="fa fa-check-square-o" aria-hidden="true"></i> <a href="file_chmod.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">Chmod</a></li>
                <li><i class="fa fa-list-ul" aria-hidden="true"></i> <a href="index.php?dir=' . $dirEncode . $pages['paramater_1'] . '">Danh sách</a></li>
            </ul>';
        }

        include_once 'footer.php';
    } else {
        goURL('login.php');
    }

?>