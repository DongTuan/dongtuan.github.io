<?php define('ACCESS', true);

    include_once 'function.php';

    if (IS_LOGIN) {
        $title = 'Sửa tập tin theo dòng';
        $page = array('current' => 0, 'total' => 1, 'paramater_0' => null, 'paramater_1' => null);
        $page['current'] = isset($_GET['page']) ? intval($_GET['page']) : 1;
        $page['current'] = $page['current'] <= 0 ? 1 : $page['current'];

        include_once 'header.php';

        echo '<div class="title">' . $title . '</div>';

        if ($dir == null || $name == null || !is_file(processDirectory($dir . '/' . $name))) {
            echo '<div class="list"><span>Đường dẫn không tồn tại</span></div>
            <div class="title">Chức năng</div>
            <ul class="list">
                <li><i class="fa fa-list-ul" aria-hidden="true"></i> <a href="index.php' . $pages['paramater_0'] . '">Danh sách</a></li>
            </ul>';
        } else if (!isFormatText($name) && !isFormatUnknown($name)) {
            echo '<div class="list"><span>Tập tin này không phải dạng văn bản</span></div>
            <div class="title">Chức năng</div>
            <ul class="list">
                <li><i class="fa fa-list-ul" aria-hidden="true"></i> <a href="index.php?dir=' . $dirEncode . $pages['paramater_1'] . '">Danh sách</a></li>
            </ul>';
        } else {
            if ($page['current'] > 1 && $configs['page_file_edit_line'] > 0) {
                $page['paramater_0'] = '?page=' . $page['current'];
                $page['paramater_1'] = '&page=' . $page['current'];
            }

            $path = $dir . '/' . $name;
            $content = file_get_contents($path);
            $lines = array();
            $count = 0;
            $start = 0;
            $end = 0;

            if (strlen($content) > 0) {
                $content = str_replace("\r\n", "\n", $content);
                $content = str_replace("\r", "\n", $content);

                if (strpos($content, "\n") !== false) {
                    $lines = explode("\n", $content);
                    $count = count($lines);

                    if ($configs['page_file_edit_line'] > 0)
                        $page['total'] = ceil($count / $configs['page_file_edit_line']);
                } else {
                    $lines[] = $content;
                    $count = 1;
                }
            } else {
                $lines[] = $content;
                $count = 1;
            }

            if ($configs['page_file_edit_line'] > 0) {
                $start = ($page['current'] * $configs['page_file_edit_line']) - $configs['page_file_edit_line'];
                $end = $start + $configs['page_file_edit_line'] > $count - 1 ? $count : $start + $configs['page_file_edit_line'];
            } else {
                $start = 0;
                $end = $count;
            }

            if ($page['current'] < 0 && $configs['page_file_edit_line'] > 0)
                goURL('edit_text_line.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1']);

            if ($page['current'] > $page['total'] && $configs['page_file_edit_line'] > 0)
                goURL('edit_text_line.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . ($page['total'] > 1 ? '&page=' . $page['total'] : null));

            echo '<div class="list">
                <span class="bull">&bull;</span><span>' . printPath($dir, true) . '</span><hr/>
                <div class="ellipsis break-word">
                    <span class="bull">&bull;</span>Tập tin: <strong class="file_name_edit">' . $name . '</strong>
                </div>
            </div>
            <div class="list_line">';

            for ($i = $start; $i < $end; ++$i) {
                echo '<div id="line">
                    <div id="line_number_' . $i . '">' . htmlspecialchars($lines[$i]) . '</div>
                    <div>
                        <span id="line_number">[<span>' . $i . '</span>]</span>
                        <a href="edit_line.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '&line=' . $i . $page['paramater_1'] . '">Sửa</a>
                        <span> | </span>
                        <a href="delete_line.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '&line=' . $i . $page['paramater_1'] . '">Xóa</a>
                    </div>
                </div>';
            }

            if ($page['total'] > 1 && $configs['page_file_edit_line'] > 0)
                echo page($page['current'], $page['total'], array(PAGE_URL_DEFAULT => 'edit_text_line.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'], PAGE_URL_START => 'edit_text_line.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '&page='));

            echo '</div>
            <div class="tips">
                <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                <span>Khuyên bạn nên sửa dạng văn bản, dạng sửa này xử lý khá nhiều trong một lần request</span>
            </div>
            <div class="title">Chức năng</div>
            <ul class="list">
                <li><i class="fa fa-pencil-square-o" aria-hidden="true"></i> <a href="edit_text.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">Sửa văn bản</a></li>
                <li><i class="fa fa-download" aria-hidden="true"></i> <a href="file_download.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">Tải về</a></li>
                <li><i class="fa fa-info-circle" aria-hidden="true"></i> <a href="file.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">Thông tin</a></li>
                <li><i class="fa fa-magic" aria-hidden="true"></i> <a href="file_rename.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">Đổi tên</a></li>
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