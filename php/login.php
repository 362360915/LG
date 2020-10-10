<?php
    header('content-type:text/html;charset="utf-8"');

    $responseDate = array("code" => 0, "message" => "");

    $username = $_POST['username'];
    $password = $_POST['password'];
    $repassword = $_POST['repassword'];
    $createtime = $_POST['createtime'];

    if(!$username){
        $repassword["code"] = 1;
        $responseDate["message"] = "用户名不能为空";
        echo json_encode($responseDate);
        exit;
    }

    if(!$password){
        $repassword["code"] = 2;
        $responseDate["message"] = "密码不能为空";
        echo json_encode($responseDate);
        exit;
    }

    if($password != $repassword){
        $repassword["code"] = 3;
        $responseDate["message"] = "两次密码不一致";
        echo json_encode($responseDate);
        exit;
    }

    $link = mysql_connect("10.30.163.205", "root", "123456");

    if(!$link){
        if($password != $repassword){
            $repassword["code"] = 4;
            $responseDate["message"] = "服务器忙";
            echo json_encode($responseDate);
            exit;
        }
    }

    mysql_set_charset("utf8");

    mysql_select_db("logitech");

    $sql = "SELECT * FROM user WHERE username='{$username}'";

    $res = mysql_query($sql);

    $row = mysql_fetch_assoc($res);
    if($row){
        $repassword["code"] = 5;
        $responseDate["message"] = "用户名重";
        echo json_encode($responseDate);
        exit;
    }

    $str = md5(md5($password)."beijing");

    $sql2 = "INSERT INTO user(username,password,createtime) VALUES('{$username}','{$str}',{$createtime})";

    $res2 = mysql_query($sql2);

    if(!$res2){
        $repassword["code"] = 6;
        $responseDate["message"] = "注册失败";
        echo json_encode($responseDate);
        exit;
    }

    $responseDate["message"] = "注册成功";

    echo json_encode($responseDate);

    mysql_close($link);
?>