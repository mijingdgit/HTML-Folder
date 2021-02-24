<?php
// 启动 session
session_start();

// header("Access-Control-Allow-Origin","*";

// header("Access-Control-Allow-Credentials", "true");

// 制定允许其他域名访问 必须带类似http://的协议
header("Access-Control-Allow-Origin:http://www.lzj.com.com:8082");
//这里只支持一个域名，所有前端测试都用统一域名，不要使用IP
header('Access-Control-Allow-Methods:POST'); // 响应类型post
header('Access-Control-Allow-Credentials:true'); //运行跨域操作
header('Access-Control-Allow-Headers:x-requested-with, content-type'); // 响应头设置




// 获取输入的验证码，并转为大写
$ucode = strtoupper($_POST['virify_code']);
// 获取 session 中保存的图片显示的验证码
if (isset($_SESSION['authnum_session'])) {
    // 如果使用的是老师提供的
    $scode = strtoupper($_SESSION['authnum_session']);
} else if (isset($_SESSION['code'])){
    // 如果使用的不是老师提供的
    $scode = strtoupper($_SESSION['code']);
} else {
    echo '保存在session中的验证码调用失败';
}

// echo $ucode;
// echo '123';
// echo $scode;
// exit;

// 比较用户输入验证码与实际验证码是否相同
if ($ucode != $scode) {
    // 不同，验证码输入错误
    $res = array(
        "status"=>"error",
        "msg"=>"验证码错误!",
        "code"=>101,
        "data"=>array()
    );
    echo json_encode($res);
}
else {
    // 验证码正确，则进一步判断输入的 用户名和密码 是否对应已存在的用户
    // *数据库连接
    $database = new MySQLi("192.168.0.98","root","root","luluda");
    // *设置编码
    mysqli_set_charset( $database , 'utf8' );
    // *数据库测试
    // echo "<pre>";
    // print_r($database);

    $act = $_POST["act"];
    if ($act != 'claim' && $act && 'card' && $act != 'active') {
        $res = array(
            "status"=>"error",
            "msg"=>"act:".$act."不合法!",
            "code"=>105,
            "data"=>array()
        );
        echo json_encode($res);
        exit;
    }


    // *查询语句
    // $sql = "select * from card";
    $sql = "select * from card left JOIN actived on card.card_id = actived.activeCard_id";
    $user = $_POST["card_id"];
    $sql .= " where card_id like ".$user;

    $pw = $_POST["card_password"];

    // echo $pw;
    // echo "123";
    // echo $user;
    // exit;
    
    // *取得结果对象
    $result = $database->query($sql);

    // *获取具体数据
    $data = array();
    while ($tmp = $result->fetch_assoc()) {
        $data[] = $tmp;
    };

    // echo ($data[0][card_password]);
    // exit;
    if (count($data) != 0) {
        // 当$data的长度不为0，代表查找到该卡号的数据
        if ($act == 'active') {
            // 如果是激活登录，那么密码只能是密码
            if ($data[0]['card_password'] == $pw) {
                $allow = true;
            } else {
                $allow = false;
            }
        } else {
            // 另外两种登录，密码可以是投保人身份证或密码
            if ($data[0]['card_password'] == $pw || $data[0]['IDCardNumA'] == $pw) {
                $allow = true;
            } else {
                $allow = false;
            }
        }
        if ($allow) {
            // 密码正确

            //将用户卡号添加到 session 中
            $_SESSION['cardnumber'] = $user;
            $res = array(
                "status"=>"success",
                "msg"=>"登录成功!",
                "code"=>102,
                "data"=>array("activated_status"=>$data[0]['card_active'])
            );
            echo json_encode($res);

        } else {
            // 密码不正确
            $res = array(
                "status"=>"error",
                "msg"=>"密码错误!",
                "code"=>103,
                "data"=>array()
            );
            echo json_encode($res);
        }
    } else {
        $res = array(
            "status"=>"error",
            "msg"=>"账号错误!",
            "code"=>104,
            "data"=>array()
        );
        echo json_encode($res);
    }
}
?>