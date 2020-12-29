<?php



$array=array("status"=>"true","code"=>1,"msg"=>"成功","data"=>array(
    array("title"=>"耐克520鞋","price"=>430),
    array("title"=>"卡宾红色格子外套","price"=>1350),
    array("title"=>"椰子","price"=>2350),
    array("title"=>"361","price"=>121),
    array("title"=>"乔丹","price"=>230),
    array("title"=>"匡威","price"=>350),
    array("title"=>"空军一号","price"=>2350),
    array("title"=>"阿迪达斯","price"=>1050)
));
echo json_encode($array);
?>