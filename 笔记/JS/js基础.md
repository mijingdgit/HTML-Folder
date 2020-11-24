 # js基础


### typeof 检测js当中的数据类型
* var name="fnsudhfus"  //字符串类型
* console.log(name)  //在控制台中打印
* console.log(typeof name)  //使用typeof后输出为string类型
### js数据类型
#### 五大基本数据类型

1）字符串类型（string）

--------------------------------------------

2）数值类型(number)

_Number：表示整数和浮点数；

var number1 = 45464;//整数

console.log(number1)

var number1 = 3.1741545;//浮点数

console.log(number1)

=========================================================

_NaN：即非数值（Not a Number）是一个特殊的数值

var age = 18;

console.log(age-"abc")

//  因为数值无法减字符串故会返回一个NaN

    PS:    1.任何涉及NaN的操作（列如NaN/10）都会返回NaN。
           2.NaN与任何值都不相等，包括NaN本身。
=========================================================

_isNaN(n)：检测n是否是“非数值”

返回值为Boolean值

-------------------------------------------------------------------

3）布尔值类型/逻辑值类型(boolean)

4）未定义类型（undefined）

申明一个变量但不给他赋值

var addert;//未定义类型

console.log(typeof addert)

5）空值类型（null）

var setting=null;//null空值

console.log(setting)

PS:  undefined值是派生自null值的，所以undefined==null的返回结果是true。


#### 三种引用数据类型

1）数组类型（）

2）对象类型（） 

js Object对象类型
   对象是由大括号包裹的 





3）函数类型（）



