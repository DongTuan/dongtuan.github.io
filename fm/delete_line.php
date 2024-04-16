<?php define('ACCESS', true);

    include_once 'function.php';

    if (IS_LOGIN) {
        $title = 'Xóa dòng';
        $page = array('current' => 0, 'paramater_0' => null, 'paramater_1' => null);
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
            function process()
            {
                global $content, $lines, $count, $path;

                $content = file_get_contents($path);

                if (strlen($content) > 0) {
                    $content = str_replace("\r\n", "\n", $content);
                    $content = str_replace("\r", "\n", $content);

                    if (strpos($content, "\n") !== false)
                        $lines = explode("\n", $content);
                    else
                        $lines[] = $content;
                } else {
                    $lines[] = $content;
                }

                $count = count($lines);
            }

            $path = $dir . '/' . $name;
            $line = isset($_GET['line']) ? intval($_GET['line']) : 0;
            $content = null;
            $notice = null;
            $lines = array();
            $count = 0;

            if ($page['current'] > 1) {
                $page['paramater_0'] = '?page=' . $page['current'];
                $page['paramater_1'] = '&page=' . $page['current'];
            }

            process();

            if (isset($_POST['continue']) || isset($_POST['delete'])) {
                $data = null;

                if ($count > 1) {
                    if ($line > 0) {
                        for ($i = 0; $i < $line; ++$i)
                            $data .= $lines[$i] . ($i < $line - 1 ? "\n" : null);
                    }

                    if ($line < $count - 1) {
                        for ($i = ($line + 1); $i < $count; ++$i)
                            $data .= ($i > 1 || $line > 0 ? "\n" : null) . $lines[$i];
                    }
                } else {
                    $data = null;
                }

                if (file_put_contents($path, $data)) {
                    $notice = '<div class="notice_succeed">Xóa thành công</div>';

                    if (isset($_POST['delete']))
                        goURL('edit_text_line.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . $page['paramater_1'] . '#line_number_' . ($line > $count - 2 ? $count - 2 : $line));
                } else {
                    $notice = '<div class="notice_failure">Xóa thất bại</div>';
                }

                process();
            }

            $isGO = false;

            if (isset($_POST['go']) && !empty($_POST['line']) && preg_match('#\\b[0-9]+\\b#', $_POST['line'])) {
                $li = intval($_POST['line']);

                if ($li >= 0 && $li <= $count - 1) {
                    $line = $li;
                    $isGO = true;
                }
            }

            if ($line < 0)
                goURL('delete_line.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '&line=0'  . $page['paramater_1']);

            if ($line > $count - 1)
                goURL('delete_line.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '&line='  . ($count - 1) . $page['paramater_1']);

            $page['current'] = $line + 1 > $configs['page_file_edit_line'] ? ceil(($line + 1) / $configs['page_file_edit_line']) : 1;

            if ($page['current'] > 1) {
                $page['paramater_0'] = '?page=' . $page['current'];
                $page['paramater_1'] = '&page=' . $page['current'];
            }

            if ($isGO)
                goURL('delete_line.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '&line=' . $line . $page['paramater_1']);

            $url = array('action' => null, 'prev' => null, 'next' => null);
            $url['action'] = 'delete_line.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '&line=' . $line . $page['paramater_1'] . '#line_label';
            $url['prev'] = $line > 0 ? '<a href="delete_line.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '&line=' . ($line - 1) . ($configs['page_file_edit_line'] > 0 && $line <= $configs['page_file_edit_line'] ? null : '&page=' . ceil($line / $configs['page_file_edit_line'])) . '#line_label"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>' : '<i class="fa fa-arrow-left" aria-hidden="true"></i>';
            $url['next'] = $line < $count - 1 ? '<a href="delete_line.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '&line=' . ($line + 1) . ($configs['page_file_edit_line'] > 0 && $line <= $configs['page_file_edit_line'] ? null : '&page=' . ceil(($line + 2) / $configs['page_file_edit_line'])) . '#line_label"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>' : '<i class="fa fa-arrow-right" aria-hidden="true"></i>';

            echo $notice;
            echo '<div class="list">
                <span class="bull">&bull;</span><span>' . printPath($dir, true) . '</span><hr/>
                <div class="ellipsis break-word">
                    <span class="bull">&bull;</span>Tập tin: <strong class="file_name_edit">' . $name . '</strong>
                </div><hr/>
                <span class="bull" id="line_label">&bull;</span>Dòng [<strong class="line_number_form">' . $line . '</strong>/<strong class="line_number_form">' . ($count - 1) . '</strong>]:
                <div class="box_text break-word">
                    <span>' . htmlspecialchars($lines[$line]) . '</span>
                </div>
                <div style="margin-left: -4px">
                    <form action="delete_line.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '&line=' . $line . $page['paramater_1'] . '#line_label" method="post">
                        <input type="submit" name="continue" value="Tiếp tục"/>
                        <input type="submit" name="delete" value="Xóa"/>
                        <a href="edit_line.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '&line=' . $line . $page['paramater_1'] . '" id="href_line_edit">Sửa</a>
                    </form>
                </div><hr/>
                <form action="' . $url['action'] . '" method="post">
                    <table id="action_page">
                        <tr>
                            <td id="prev">' . $url['prev'] . '</td>
                            <td id="input">
                                <input type="text" name="line" value="' . $line . '"/>
                            </td>
                            <td id="submit">
                                <input type="submit" name="go" value="Đến"/>
                            </td>
                            <td id="next">' . $url['next'] . '</td>
                        </tr>
                    </table>
                </form>
            </div>
            <div class="tips">
              <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                <span>Ấn tiếp tục để xóa và ở lại trang, ấn xóa để xóa và quay về danh sách dòng</span>
            </div>
            <div class="title">Chức năng</div>
            <ul class="list">
                <li><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
 <a href="edit_line.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '&line=' . $line . $page['paramater_1'] . '">Sửa dòng</a></li>
                <li><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
 <a href="edit_text_line.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . $page['paramater_1'] . '#line_number_' . $line . '">Sửa theo dòng</a></li>
                <li><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
 <a href="edit_text.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">Sửa văn bản</a></li>
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
    } else {
        goURL('login.php');
    }

    include_once 'footer.php';

?>