<?php
// 3、ajax访问data.php，输出一个产品列表，data.php里面的数据是手写的JSON字符串。
    $text='[
    {"title":"huya","id":1},
    {"title":"斗鱼","id":2},
    {"title":"战旗","id":3},
    {"title":"熊猫","id":4}
    ]';
        echo ($text);
?>