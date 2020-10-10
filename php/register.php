<?php
    header('content-type:text/html;charset="utf-8"');

    $responseDate = array("code" => 0, "message" => "");

    $username = $_POST['username'];
    $password = $_POST['password'];

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

    $link = mysql_connect("10.30.163.205", "root", "123456");

    if(!$link){
        if($password != $repassword){
            $repassword["code"] = 3;
            $responseDate["message"] = "服务器忙";
            echo json_encode($responseDate);
            exit;
        }
    }

    mysql_set_charset("utf8");

    mysql_select_db("logitech");

    $str = md5(md5($password)."beijing");

    $sql = "SELECT * FROM user WHERE username='{$username}' AND password='{$str}'";
    
    $res = mysql_query($sql);

    $row = mysqli_fetch_assoc($res);

    if(!$row){
        $repassword["code"] = 4;
        $responseDate["message"] = "用户名或密码错误";
        echo json_encode($responseDate);
        exit;
    }else{
        $responseDate["message"] = "登陆成功";
        echo json_encode($responseDate);
    }

    mysql_close($link);
?>