<?php

    define('ACCESS', true);
    define('INDEX', true);

    include_once 'function.php';

    if (IS_LOGIN) {
        $title = !IS_INSTALL_ROOT_DIRECTORY ? 'Danh sách' : 'Lỗi File Manager';
        $dir = NOT_PERMISSION == false && isset($_GET['dir']) && empty($_GET['dir']) == false ? rawurldecode($_GET['dir']) : $_SERVER['DOCUMENT_ROOT'];
        $dir = processDirectory($dir);
        $handler = null;

        include_once 'header.php';

        if (!IS_INSTALL_ROOT_DIRECTORY) {
            $handler = @scandir($dir);

            if ($handler === false) {
                $dir = $_SERVER['DOCUMENT_ROOT'];
                $dir = processDirectory($dir);

                $handler = @scandir($dir);
            }
        }

        if (!is_array($handler))
            $handler = array();

        $dirEncode = rawurlencode($dir);
        $count = count($handler);
        $lists = array();

        if (!IS_INSTALL_ROOT_DIRECTORY && $count > 0) {
            $folders = array();
            $files = array();

            foreach ($handler AS $entry) {
                if ($entry != '.' && $entry != '..') {
                    if ($entry == DIRECTORY_FILE_MANAGER && IS_ACCESS_PARENT_PATH_FILE_MANAGER);
                        /* Is hide directory File Manager */
                    else if (is_dir($dir . '/' . $entry))
                        $folders[] = $entry;
                    else
                        $files[] = $entry;
                }
            }

            if (count($folders) > 0) {
                asort($folders);

                foreach ($folders AS $entry)
                    $lists[] = array('name' => $entry, 'is_directory' => true);
            }

            if (count($files) > 0) {
                asort($files);

                foreach ($files AS $entry)
                    $lists[] = array('name' => $entry, 'is_directory' => false);
            }
        }

        $count = count($lists);
        $html = null;

        if (!IS_INSTALL_ROOT_DIRECTORY && $dir != '/' && strpos($dir, '/') !== false) {
            $array = explode('/', preg_replace('|^/(.*?)$|', '\1', $dir));
            $html = null;
            $item = null;
            $url = null;

            foreach ($array AS $key => $entry) {
                if ($key === 0) {
                    $seperator = preg_match('|^\/(.*?)$|', $dir) ? '/' : null;
                    $item = $seperator . $entry;
                } else {
                    $item = '/' . $entry;
                }

                if ($key < count($array) - 1)
                    $html .= '/<a href="index.php?dir=' . rawurlencode($url . $item) . '">';
                else
                    $html .= '/';

                $url .= $item;
                $html .= substring($entry, 0, NAME_SUBSTR, NAME_SUBSTR_ELLIPSIS);

                if ($key < count($array) - 1)
                    $html .= '</a>';
            }
        }

        if (!IS_INSTALL_ROOT_DIRECTORY) {
            echo '<script language="javascript" src="checkbox.js"></script>';
            echo '<div class="title">' . $html . '</div>';
        }

        if (NOT_PERMISSION) {
            if (IS_INSTALL_ROOT_DIRECTORY) {
                echo '<div class="title">Lỗi File Manager</div>
                <div class="list">Bạn đang cài đặt File Manager trên thư mục gốc, hãy chuyển vào một thư mục</div>';
            } else if (IS_ACCESS_FILE_IN_FILE_MANAGER) {
                echo '<div class="notice_info">Bạn không thể xem tập tin của File Manager nó đã bị chặn</div>';
            } else {
                echo '<div class="notice_info">Bạn không thể xem thư mục của File Manager nó đã bị chặn</div>';
            }
        }

        if (!IS_INSTALL_ROOT_DIRECTORY) {
            echo '<form action="action.php?dir=' . $dirEncode . $pages['paramater_1'] . '" method="post" name="form"><ul class="list_file">';

            if (preg_replace('|[a-zA-Z]+:|', '', str_replace('\\', '/', $dir)) != '/') {
                $path = strrchr($dir, '/');

                if ($path !== false)
                    $path = 'index.php?dir=' . rawurlencode(substr($dir, 0, strlen($dir) - strlen($path)));
                else
                    $path = 'index.php';

                echo '<li class="normal">
                    <i class="fa fa-undo" aria-hidden="true"></i> 
                    <a href="' . $path . '">
                        <strong class="back">...</strong>
                    </a>
                </li>';
            }

            if ($count <= 0) {
                echo '<li class="normal"><i class="fa fa-dropbox" aria-hidden="true"></i> <span class="empty">Không có thư mục hoặc tập tin</span></li>';
            } else {
                $start = 0;
                $end = $count;

                if ($configs['page_list'] > 0 && $count > $configs['page_list']) {
                    $pages['total'] = ceil($count / $configs['page_list']);

                    if ($pages['total'] <= 0 || $pages['current'] > $pages['total'])
                        goURL('index.php?dir=' . $dirEncode . ($pages['total'] <= 0 ? null : '&page_list=' . $pages['total']));

                    $start = ($pages['current'] * $configs['page_list']) - $configs['page_list'];
                    $end = $start + $configs['page_list'] >= $count ? $count : $start + $configs['page_list'];
                }

                for ($i = $start; $i < $end; ++$i) {
                    $name = $lists[$i]['name'];
                    $path = $dir . '/' . $name;
                    $perms = getChmod($path);

                    if ($lists[$i]['is_directory']) {
                        echo '<li class="folder">
                            <div>
                                <input type="checkbox" name="entry[]" value="' . $name . '"/>
                                <a href="folder_edit.php?dir=' . $dirEncode .'&name=' . $name . $pages['paramater_1'] . '">
                                   <i class="fa fa-folder-o" aria-hidden="true" style="color:red"></i>
                                </a>
                                <a href="index.php?dir=' . rawurlencode($path) . '">' . $name . '</a>
                                <div class="perms">
                                    <a href="folder_chmod.php?dir=' . $dirEncode .'&name=' . $name . $pages['paramater_1'] . '" class="chmod">' . $perms . '</a>
                                </div>
                            </div>
                        </li>';
                    } else {
                        $edit = array(null, '</a>');
                        $icon = '<i class="fa fa-question-circle-o" aria-hidden="true"></i>';
                        $type = getFormat($name);
                        $isEdit = false;

                        if (in_array($type, $formats['other'])) {
                            $icon = '<i class="fa fa-eercast" aria-hidden="true"></i>';
                        } else if (in_array($type, $formats['text'])) {
                            $icon = '<i class="fa fa-file-code-o" aria-hidden="true"></i>';
                            $isEdit = true;
                        } else if (in_array($type, $formats['movie'])) {
                            $icon = '<i class="fa fa-film" aria-hidden="true"></i>';
                            $isEdit = true;
                        } else if (in_array($type, $formats['source'])) {
                            $icon = '<i class="fa fa-linux" aria-hidden="true"></i>';
                            $isEdit = true;
                        } else if (in_array($type, $formats['archive'])) {
                            $icon = '<i class="fa fa-file-archive-o" aria-hidden="true"></i>';
                        } else if (in_array($type, $formats['audio'])) {
                            $icon = '<i class="fa fa-file-audio-o" aria-hidden="true"></i>';
                        } else if (in_array($type, $formats['font'])) {
                            $icon = '<i class="fa fa-font" aria-hidden="true"></i>';
                        } else if (in_array($type, $formats['binary'])) {
                            $icon = '<i class="fa fa-bold" aria-hidden="true"></i>';
                        } else if (in_array($type, $formats['document'])) {
                            $icon = '<i class="fa fa-book" aria-hidden="true"></i>';
                        } else if (in_array($type, $formats['image'])) {
                            $icon = '<i class="fa fa-file-image-o" aria-hidden="true"></i>';
                        } else if (in_array($type, $formats['app'])) {
                            $icon = '<i class="fa fa-briefcase" aria-hidden="true"></i>';
                        } else if (in_array(strtolower(strpos($name, '.') !== false ? substr($name, 0, strpos($name, '.')) : $name), $formats['source'])) {
                            $icon = strtolower(strpos($name, '.') !== false ? substr($name, 0, strpos($name, '.')) : $name);
                            $isEdit = true;
                        } else if (isFormatUnknown($name)) {
                            $icon = '<i class="fa fa-question-circle-o" aria-hidden="true"></i>';
                            $isEdit = true;
                        }

                        if (strtolower($name) == 'error_log' || $isEdit)
                            $edit[0] = '<a href="edit_text.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">';
                        else if (in_array($type, $formats['zip']))
                            $edit[0] = '<a href="file_unzip.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">';
                        else
                            $edit[0] = '<a href="file_rename.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">';

                        echo '<li class="file">
                            <p>
                                <input type="checkbox" name="entry[]" value="' . $name . '"/>
                                ' . $edit[0] . '' . $icon . '' . $edit[1] . '
                                <a href="file.php?dir=' . $dirEncode . '&name=' . $name . $pages['paramater_1'] . '">' . $name . '</a>
                            </p>
                            <p>
                                <span class="size">' . size(filesize($dir . '/' . $name)) . '</span>,
                                <a href="file_chmod.php?dir=' . $dirEncode .'&name=' . $name . $pages['paramater_1'] . '" class="chmod">' . $perms . '</a>
                            </p>
                        </li>';
                    }
                }

                echo '<li class="normal"><input type="checkbox" name="all" value="1" onClick="javascript:onCheckItem();"/> <strong class="form_checkbox_all">Chọn tất cả</strong></li>';

                if ($configs['page_list'] > 0 && $pages['total'] > 1)
                    echo '<li class="normal">' . page($pages['current'], $pages['total'], array(PAGE_URL_DEFAULT => 'index.php?dir=' . $dirEncode, PAGE_URL_START => 'index.php?dir=' . $dirEncode . '&page_list=')) . '</li>';
            }

            echo '</ul>';

            if ($count > 0) {
                echo '<div class="list">
                    <select name="option">
                        <option value="0">Sao chép</option>
                        <option value="1">Di chuyển</option>
                        <option value="2">Xóa</option>
                        <option value="3">Nén zip</option>
                        <option value="4">Chmod</option>
                        <option value="5">Đổi tên</option>
                    </select>
                    <input type="submit" name="submit" value="Thực hiện"/>
                </div>';
            }

            echo '</form>
            <div class="title">Chức năng</div>
            <ul class="list">
                <li><i class="fa fa-plus-circle" aria-hidden="true"></i> <a href="create.php?dir=' . $dirEncode . $pages['paramater_1'] . '">Tạo mới</a></li>
                <li><i class="fa fa-upload" aria-hidden="true"></i> <a href="upload.php?dir=' . $dirEncode . $pages['paramater_1'] . '">Tải lên tập tin</a></li>
                <li><i class="fa fa-sign-in" aria-hidden="true"></i> <a href="import.php?dir=' . $dirEncode . $pages['paramater_1'] . '">Nhập khẩu tập tin</a></li>
            </ul>';
        }

        include_once 'footer.php';
    } else {
        goURL('login.php');
    }

?>