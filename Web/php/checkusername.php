<?php
    $username = $_GET["username"];
    
    mysql_connect("localhost", "root", "root");
    mysql_select_db("gz2006");
    $sql = "SELECT * FROM user WHERE username= '$username'";
    $result = mysql_query($sql);

    $row = mysql_fetch_array($result);
    if ($row) {
        echo json_encode(array("error" => 1, "data" => "用户名已存在"));
    } else {
        echo json_encode(array("error" => 0, "data" => "此用户名可以使用"));
    }
?>