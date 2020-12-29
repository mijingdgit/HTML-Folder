<?php
// 获取数据库
$abc = new MySQLi ("127.0.0.1","root","root","mijing");
// 进行编码的转换
mysqli_query($abc,'set names utf8');
mysqli_query($abc,'set character_set_client=utf8');
mysqli_query($abc,'set character_set_results=utf8');
// 数据库查询
$sql = "select * from huoguo where id >0";
// PHP利用_query(sql)来创建或者删除数据库
// 执行查询语句，返回一个对象
// 输出数据库内容
$result = $abc -> query($sql);
if($result){

    for($i=0 ; $tmp=$result->fetch_assoc();$i++){
        $data[] = $tmp;
    }
}
// 将JSON格式转换为字符串格式，因为HTML查询不到PHP中的JSON格式，只能将JSON转换为字符串模式

echo json_encode($data);






?>