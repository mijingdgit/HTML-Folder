<?php
// 制定允许其他域名访问 必须带类似http://的协议
header("Access-Control-Allow-Origin:http://www.mijin.com:80");
//这里只支持一个域名，所有前端测试都用统一域名，不要使用IP
header('Access-Control-Allow-Methods:POST'); // 响应类型post
header('Access-Control-Allow-Credentials:true'); //运行跨域操作
header('Access-Control-Allow-Headers:x-requested-with, content-type'); // 响应头设置

session_start();
require_once 'ValidateCode.class.php';  //先把类包含进来，实际路径根据实际情况进行修改。
$_vc = new ValidateCode();  //实例化一个对象
$_vc->doimg();  
$_SESSION['authnum_session'] = $_vc->getCode();//验证码保存到SESSION中




// if (isset($_GET["submit"])) {
//     // 获取输入的验证码，并转为大写
//     $ucode = strtoupper($_GET['submit']);
//     // 获取 session 中保存的图片显示的验证码
//     $scode = strtoupper($_SESSION['authnum_session']);
//     // 比较两者是否相同，不同则提示错误信息，并跳转到登录页面重新登录
//     if ($ucode != $scode) {
//         $verify = array(
//             'status' => 'success',
//             'msg' => '失败',
//             'code' => 1,
//             'verify' => "flase"
//         );
//     }else{
//         $verify = array(
//             'status' => 'success',
//             'msg' => '成功',
//             'code' => 1,
//             'verify' => "true"
//         );
//     }
// }
//     echo json_encode($verify);
?>