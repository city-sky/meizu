<?php
    // 接收前端提交的数据
    $username = $_POST["username"];
    $password = $_POST["password"];

     // 连接数据库
     mysql_connect("localhost", "root", "root");

     // 选择数据库
     mysql_select_db("gz2006");
 
     // 定义插入语句
     $sql = "INSERT INTO user VALUES('$username', '$password')";


    //  执行SQL语句
    $result = mysql_query($sql);

    if ($result) {
        echo json_encode(array("error" => 0, "msg" => "注册成功"));
    } else {
        echo json_encode(array("error" => 1, "msg" =>"注册失败"));
    }
 
?>