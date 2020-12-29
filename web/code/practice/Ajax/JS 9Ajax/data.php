<?php
	header("Content-type: text/html; charset=utf-8");


	//设置缓存
	//$_SESSION['cardnumber'] = "wx0001";
	$_SESSION['cardnumber'] = null;

	//判断是否有
	isset($_POST['cardnumber'])

	//清除缓存
	unset($_SESSION['cardnumber'])

	// PHP缓存可以存各种数据类型
	// $_SESSION['card'] = array(
	// 	'cardnumber'=>"wx0001",
	// 	'password'=>"123456"
	// )

	// 输出特殊数据类型
	// print_r( $_SESSION ); 

//数据库连接语句
//new MySQLi("主机","数据登录账号","数据库登录密码","数据库名称");
$dbc = new MySQLi("127.0.0.1","root","root","test");
//连接数据库

	
	//执行$sql


	//数据查询函数
	function mydb($sql){
	
		//使用全局变量
		global $dbc;

		$reslut = $dbc->query($sql); //执行查询语句
	
		if ($reslut !== false){ //查询成功
	
			$arr = array(); //定义数组
	
			$arr_data = $reslut->fetch_assoc();//获取当前指针指向的数据并跳至下一个指针
	
			while($arr_data) { //如果有数据
				$arr[] = $arr_data; //把数据存储到数组变量$arr里面
				$arr_data = $reslut->fetch_assoc();//继续获取当前指针指向的数据并跳至下一个指针
			}
	
			return $arr; //返回数组数据
	
		}else{ //没数据 返回 false
	
			return false;
	
		}
	}
	
	//查询语句
	$sql = "select * from student";
	
	//执行语句并将结果赋值给 $res;
	$res = mydb($sql);
	
	//将数组转换为JSON字符串 
	$res = json_encode($res);

	//输出JSON字符串
	echo $res;
	
?>