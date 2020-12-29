<?php
// 获取数据库
$abc = new MySQLi("127.0.0.1","root","root","mijing");
// 编码处理
mysqli_query($abc,'set names utf8');
mysqli_query($abc,'set character_set_client=utf8');
mysqli_query($abc,'set character_set_results=utf8');
// 数据库查询
$sql = "select*from huoguo2";

// 输出数据库中的内容
$result = $abc -> query($sql);
if($result){
    for($i=0;$tmp=$result->fetch_assoc();$i++){
        $data[]=$tmp;
    }
}

echo json_encode($data);
?>