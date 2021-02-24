// let precolor =JSON.parse(localStorage.getItem("datacolor"));
let preslide1 = JSON.parse(localStorage.getItem("dataslide1"));
let preslide2 = JSON.parse(localStorage.getItem("dataslide2"));
let preadd = JSON.parse(localStorage.getItem("dataadd"));
let preabout = JSON.parse(localStorage.getItem("dataabouttext"));
let premission = JSON.parse(localStorage.getItem("datamissiontext"));
let prebaozhang = JSON.parse(localStorage.getItem("databaozhang"));
//登录渲染
if (localStorage.getItem("Identification") == null) {
    $(".register")[0].innerHTML = `<a href="./backstageenter.html">登录</a>`;
} else {
    $(".register")[0].innerHTML = `<a href="#">${localStorage.getItem(
        "Identification"
    )}</a>`;
}
// 添加按钮的弹入弹出框
$(".addbox")[0].style.display = "none";
$(".add")[0].onclick = function () {
    $(".addbox")[0].style.display = "none";

    $(".addbox .sp1")[0].onclick = function () {
        $(".addbox")[0].style.display = "none";
    };
};
// TODO 页面初始化
// 导航栏颜色渲染
$(".con1")[0].innerHTML = `
<div class="col-md-2 id">序号</div>
<div class="col-md-6 color">内容/路径</div>
<div class="col-md-2"></div>
<div class="col-md-2 alldelete"></div>`;
$(".cont .con")[0].innerHTML = `<div class="row ">
    <div class="col-md-2 id">颜色</div>
    <div class="col-md-6 color">导航1<select name="" id="" class="colorer1"></select>导航2<select name="" id="" class="colorer2"></select>导航3<select name="" id="" class="colorer3"></select>导航4<select name="" id="" class="colorer4"></select>导航5<select name="" id="" class="colorer5"></select>导航6<select name="" id="" class="colorer6"></select></div>
    <div class="col-md-2 "></div>
    <div class="col-md-2 "></div>
    </div>`;
// TODO 改变hover颜色
for (let i = 0; i < obj.color.length; i++) {
    $(".colorer1")[0].innerHTML += `<option value="${obj.color[i][0]}">${obj.color[i][2]}</option>`;
    $(".colorer2")[0].innerHTML += `<option value="${obj.color[i][0]}">${obj.color[i][2]}</option>`;
    $(".colorer3")[0].innerHTML += `<option value="${obj.color[i][0]}">${obj.color[i][2]}</option>`;
    $(".colorer4")[0].innerHTML += `<option value="${obj.color[i][0]}">${obj.color[i][2]}</option>`;
    $(".colorer5")[0].innerHTML += `<option value="${obj.color[i][0]}">${obj.color[i][2]}</option>`;
    $(".colorer6")[0].innerHTML += `<option value="${obj.color[i][0]}">${obj.color[i][2]}</option>`;
}

localStorage.setItem("datacolor1", JSON.stringify(obj.color[0]));
localStorage.setItem("datacolor2", JSON.stringify(obj.color[0]));
localStorage.setItem("datacolor3", JSON.stringify(obj.color[0]));
localStorage.setItem("datacolor4", JSON.stringify(obj.color[0]));
localStorage.setItem("datacolor5", JSON.stringify(obj.color[0]));
localStorage.setItem("datacolor6", JSON.stringify(obj.color[0]));
$(".colorer1")[0].style.background = "red";
$(".colorer2")[0].style.background = "red";
$(".colorer3")[0].style.background = "red";
$(".colorer4")[0].style.background = "red";
$(".colorer5")[0].style.background = "red";
$(".colorer6")[0].style.background = "red";

$(".colorer1")[0].onclick = function () {
    localStorage.removeItem("datacolor1");
    $(".colorer1")[0].onclick = function () {
        let colorValue = $(".colorer1")[0].value;
        if (colorValue == 1) {
            $(".colorer1")[0].style.background = "red";
            localStorage.setItem("datacolor1", JSON.stringify(obj.color[0]));
        } else if (colorValue == 2) {
            $(".colorer1")[0].style.background = "yellow";
            localStorage.setItem("datacolor1", JSON.stringify(obj.color[1]));
        } else if (colorValue == 3) {
            $(".colorer1")[0].style.background = "skyblue";
            localStorage.setItem("datacolor1", JSON.stringify(obj.color[2]));
        } else {
            $(".colorer1")[0].style.background = "green";
            localStorage.setItem("datacolor1", JSON.stringify(obj.color[3]));
        }
    };
};
$(".colorer2")[0].onclick = function () {
    localStorage.removeItem("datacolor2");
    $(".colorer2")[0].onclick = function () {
        let colorValue = $(".colorer2")[0].value;
        if (colorValue == 1) {
            $(".colorer2")[0].style.background = "red";
            localStorage.setItem("datacolor2", JSON.stringify(obj.color[0]));
        } else if (colorValue == 2) {
            $(".colorer2")[0].style.background = "yellow";

            localStorage.setItem("datacolor2", JSON.stringify(obj.color[1]));
        } else if (colorValue == 3) {
            $(".colorer2")[0].style.background = "skyblue";

            localStorage.setItem("datacolor2", JSON.stringify(obj.color[2]));
        } else {
            $(".colorer2")[0].style.background = "green";

            localStorage.setItem("datacolor2", JSON.stringify(obj.color[3]));
        }
    };
};
$(".colorer3")[0].onclick = function () {
    localStorage.removeItem("datacolo3");
    $(".colorer3")[0].onclick = function () {
        let colorValue = $(".colorer3")[0].value;
        if (colorValue == 1) {
            $(".colorer3")[0].style.background = "red";

            localStorage.setItem("datacolor3", JSON.stringify(obj.color[0]));
        } else if (colorValue == 2) {
            $(".colorer3")[0].style.background = "yellow";

            localStorage.setItem("datacolor3", JSON.stringify(obj.color[1]));
        } else if (colorValue == 3) {
            $(".colorer3")[0].style.background = "skyblue";

            localStorage.setItem("datacolor3", JSON.stringify(obj.color[2]));
        } else {
            $(".colorer3")[0].style.background = "green";
            localStorage.setItem("datacolor3", JSON.stringify(obj.color[3]));
        }
    };
};
$(".colorer4")[0].onclick = function () {
    localStorage.removeItem("datacolor4");
    $(".colorer4")[0].onclick = function () {
        let colorValue = $(".colorer4")[0].value;
        if (colorValue == 1) {
            $(".colorer4")[0].style.background = "red";

            localStorage.setItem("datacolor4", JSON.stringify(obj.color[0]));
        } else if (colorValue == 2) {
            $(".colorer4")[0].style.background = "yellow";
            localStorage.setItem("datacolor4", JSON.stringify(obj.color[1]));
        } else if (colorValue == 3) {
            $(".colorer4")[0].style.background = "skyblue";
            localStorage.setItem("datacolor4", JSON.stringify(obj.color[2]));
        } else {
            $(".colorer4")[0].style.background = "green";
            localStorage.setItem("datacolor4", JSON.stringify(obj.color[3]));
        }
    };
};
$(".colorer5")[0].onclick = function () {
    localStorage.removeItem("datacolor5");
    $(".colorer5")[0].onclick = function () {
        let colorValue = $(".colorer5")[0].value;
        if (colorValue == 1) {
            $(".colorer5")[0].style.background = "red";
            localStorage.setItem("datacolor5", JSON.stringify(obj.color[0]));
        } else if (colorValue == 2) {
            $(".colorer5")[0].style.background = "yellow";
            localStorage.setItem("datacolor5", JSON.stringify(obj.color[1]));
        } else if (colorValue == 3) {
            $(".colorer5")[0].style.background = "skyblue";
            localStorage.setItem("datacolor5", JSON.stringify(obj.color[2]));
        } else {
            $(".colorer5")[0].style.background = "green";
            localStorage.setItem("datacolor5", JSON.stringify(obj.color[3]));
        }
    };
};
$(".colorer6")[0].onclick = function () {
    localStorage.removeItem("datacolor6");
    $(".colorer6")[0].onclick = function () {
        let colorValue = $(".colorer6")[0].value;
        if (colorValue == 1) {
            $(".colorer6")[0].style.background = "red";
            localStorage.setItem("datacolor6", JSON.stringify(obj.color[0]));
        } else if (colorValue == 2) {
            $(".colorer6")[0].style.background = "yellow";
            localStorage.setItem("datacolor6", JSON.stringify(obj.color[1]));
        } else if (colorValue == 3) {
            $(".colorer6")[0].style.background = "skyblue";
            localStorage.setItem("datacolor6", JSON.stringify(obj.color[2]));
        } else {
            $(".colorer6")[0].style.background = "green";
            localStorage.setItem("datacolor6", JSON.stringify(obj.color[3]));
        }
    };
};


// TODO 颜色改变
navcolor();
function navcolor() {
    $(".jinhenav")[0].onclick = function () {
        $(".addbox")[0].style.display = "none";

        $(".add")[0].onclick = function () {
            $(".addbox")[0].style.display = "none";

            $(".addbox .sp1")[0].onclick = function () {
                $(".addbox")[0].style.display = "none";
            };
        };
        $(".con1")[0].innerHTML = `
    <div class="col-md-2 id">序号</div>
    <div class="col-md-6 color">内容/路径</div>
    <div class="col-md-2"></div>
    <div class="col-md-2 alldelete"></div>`;
        $(".cont .con")[0].innerHTML = `<div class="row ">
        <div class="col-md-2 id">颜色</div>
        <div class="col-md-6 color">导航1<select name="" id="" class="colorer1"></select>导航2<select name="" id="" class="colorer2"></select>导航3<select name="" id="" class="colorer3"></select>导航4<select name="" id="" class="colorer4"></select>导航5<select name="" id="" class="colorer5"></select>导航6<select name="" id="" class="colorer6"></select></div>
        <div class="col-md-2 "></div>
        <div class="col-md-2 "></div>
        </div>`;
        // TODO 改变hover颜色
        for (let i = 0; i < obj.color.length; i++) {
            $(".colorer1")[0].innerHTML += `<option value="${obj.color[i][0]}">${obj.color[i][2]}</option>`;
            $(".colorer2")[0].innerHTML += `<option value="${obj.color[i][0]}">${obj.color[i][2]}</option>`;
            $(".colorer3")[0].innerHTML += `<option value="${obj.color[i][0]}">${obj.color[i][2]}</option>`;
            $(".colorer4")[0].innerHTML += `<option value="${obj.color[i][0]}">${obj.color[i][2]}</option>`;
            $(".colorer5")[0].innerHTML += `<option value="${obj.color[i][0]}">${obj.color[i][2]}</option>`;
            $(".colorer6")[0].innerHTML += `<option value="${obj.color[i][0]}">${obj.color[i][2]}</option>`;
        }
        localStorage.setItem("datacolor1", JSON.stringify(obj.color[0]));
        localStorage.setItem("datacolor2", JSON.stringify(obj.color[0]));
        localStorage.setItem("datacolor3", JSON.stringify(obj.color[0]));
        localStorage.setItem("datacolor4", JSON.stringify(obj.color[0]));
        localStorage.setItem("datacolor5", JSON.stringify(obj.color[0]));
        localStorage.setItem("datacolor6", JSON.stringify(obj.color[0]));
        $(".colorer1")[0].style.background = "red";
        $(".colorer2")[0].style.background = "red";
        $(".colorer3")[0].style.background = "red";
        $(".colorer4")[0].style.background = "red";
        $(".colorer5")[0].style.background = "red";
        $(".colorer6")[0].style.background = "red";
        $(".colorer1")[0].onclick = function () {
            localStorage.removeItem("datacolor1");
            $(".colorer1")[0].onclick = function () {
                let colorValue = $(".colorer1")[0].value;
                if (colorValue == 1) {
                    $(".colorer1")[0].style.background = "red";
                    localStorage.setItem("datacolor1", JSON.stringify(obj.color[0]));
                } else if (colorValue == 2) {
                    $(".colorer1")[0].style.background = "yellow";
                    localStorage.setItem("datacolor1", JSON.stringify(obj.color[1]));
                } else if (colorValue == 3) {
                    $(".colorer1")[0].style.background = "skyblue";
                    localStorage.setItem("datacolor1", JSON.stringify(obj.color[2]));
                } else {
                    $(".colorer1")[0].style.background = "green";
                    localStorage.setItem("datacolor1", JSON.stringify(obj.color[3]));
                }
            };
        };
        $(".colorer2")[0].onclick = function () {
            localStorage.removeItem("datacolor2");
            $(".colorer2")[0].onclick = function () {
                let colorValue = $(".colorer2")[0].value;
                if (colorValue == 1) {
                    $(".colorer2")[0].style.background = "red";
                    localStorage.setItem("datacolor2", JSON.stringify(obj.color[0]));
                } else if (colorValue == 2) {
                    $(".colorer2")[0].style.background = "yellow";

                    localStorage.setItem("datacolor2", JSON.stringify(obj.color[1]));
                } else if (colorValue == 3) {
                    $(".colorer2")[0].style.background = "skyblue";

                    localStorage.setItem("datacolor2", JSON.stringify(obj.color[2]));
                } else {
                    $(".colorer2")[0].style.background = "green";

                    localStorage.setItem("datacolor2", JSON.stringify(obj.color[3]));
                }
            };
        };
        $(".colorer3")[0].onclick = function () {
            localStorage.removeItem("datacolo3");
            $(".colorer3")[0].onclick = function () {
                let colorValue = $(".colorer3")[0].value;
                if (colorValue == 1) {
                    $(".colorer3")[0].style.background = "red";

                    localStorage.setItem("datacolor3", JSON.stringify(obj.color[0]));
                } else if (colorValue == 2) {
                    $(".colorer3")[0].style.background = "yellow";

                    localStorage.setItem("datacolor3", JSON.stringify(obj.color[1]));
                } else if (colorValue == 3) {
                    $(".colorer3")[0].style.background = "skyblue";

                    localStorage.setItem("datacolor3", JSON.stringify(obj.color[2]));
                } else {
                    $(".colorer3")[0].style.background = "green";
                    localStorage.setItem("datacolor3", JSON.stringify(obj.color[3]));
                }
            };
        };
        $(".colorer4")[0].onclick = function () {
            localStorage.removeItem("datacolor4");
            $(".colorer4")[0].onclick = function () {
                let colorValue = $(".colorer4")[0].value;
                if (colorValue == 1) {
                    $(".colorer4")[0].style.background = "red";

                    localStorage.setItem("datacolor4", JSON.stringify(obj.color[0]));
                } else if (colorValue == 2) {
                    $(".colorer4")[0].style.background = "yellow";
                    localStorage.setItem("datacolor4", JSON.stringify(obj.color[1]));
                } else if (colorValue == 3) {
                    $(".colorer4")[0].style.background = "skyblue";
                    localStorage.setItem("datacolor4", JSON.stringify(obj.color[2]));
                } else {
                    $(".colorer4")[0].style.background = "green";
                    localStorage.setItem("datacolor4", JSON.stringify(obj.color[3]));
                }
            };
        };
        $(".colorer5")[0].onclick = function () {
            localStorage.removeItem("datacolor5");
            $(".colorer5")[0].onclick = function () {
                let colorValue = $(".colorer5")[0].value;
                if (colorValue == 1) {
                    $(".colorer5")[0].style.background = "red";
                    localStorage.setItem("datacolor5", JSON.stringify(obj.color[0]));
                } else if (colorValue == 2) {
                    $(".colorer5")[0].style.background = "yellow";
                    localStorage.setItem("datacolor5", JSON.stringify(obj.color[1]));
                } else if (colorValue == 3) {
                    $(".colorer5")[0].style.background = "skyblue";
                    localStorage.setItem("datacolor5", JSON.stringify(obj.color[2]));
                } else {
                    $(".colorer5")[0].style.background = "green";
                    localStorage.setItem("datacolor5", JSON.stringify(obj.color[3]));
                }
            };
        };
        $(".colorer6")[0].onclick = function () {
            localStorage.removeItem("datacolor6");
            $(".colorer6")[0].onclick = function () {
                let colorValue = $(".colorer6")[0].value;
                if (colorValue == 1) {
                    $(".colorer6")[0].style.background = "red";
                    localStorage.setItem("datacolor6", JSON.stringify(obj.color[0]));
                } else if (colorValue == 2) {
                    $(".colorer6")[0].style.background = "yellow";
                    localStorage.setItem("datacolor6", JSON.stringify(obj.color[1]));
                } else if (colorValue == 3) {
                    $(".colorer6")[0].style.background = "skyblue";
                    localStorage.setItem("datacolor6", JSON.stringify(obj.color[2]));
                } else {
                    $(".colorer6")[0].style.background = "green";
                    localStorage.setItem("datacolor6", JSON.stringify(obj.color[3]));
                }
            };
        };




        $(".addbtn")[0].onclick = function () {
            $(".addbox")[0].style.display = "none";
        };

    };
}

// TODO 改变大轮播图
bigswiper();
function bigswiper() {
    $(".jinheslide1")[0].onclick = function () {
        $(".addbox")[0].style.display = "none";

        $(".add")[0].onclick = function () {
            $(".addbox")[0].style.display = "block";

            $(".addbox .sp1")[0].onclick = function () {
                $(".addbox")[0].style.display = "none";
            };
        };
        $(".con1")[0].innerHTML = `
        <div class="col-md-2 id">序号</div>
        <div class="col-md-6 color">内容/路径</div>
        <div class="col-md-2"></div>
        <div class="col-md-2 alldelete"></div>`;
        $(".cont .con")[0].innerHTML = "";
        $(".addid")[0].innerHTML = "";
        for (let i = 0; i < preslide1.length; i++) {
            $(".cont .con")[0].innerHTML += `<div class="row edit ">
                <div class="col-md-2 id">${i + 1}</div>
                <div class="col-md-6 color">${preslide1[i][1]}</div>
                <div class="col-md-2 amend">编辑</div>
                <div class="col-md-2 delete">删除</div>
                </div>`;
        }
        // 删除大轮播数据
        shanslide1();
        function shanslide1() {
            if (preslide1 == "") {
                alert("客户您已经删完了哦！已为您自动跳转初始状态！");
                localStorage.setItem("dataslide1", JSON.stringify(obj.slide1[0]));
                preslide1 = [JSON.parse(localStorage.getItem("dataslide1"))];
                $(".cont .con")[0].innerHTML = `<div class="row edit">
                    <div class="col-md-2 id">1</div>
                    <div class="col-md-6 color">${preslide1[0][1]}</div>
                    <div class="col-md-2 amend">编辑</div>
                    <div class="col-md-2 delete">删除</div>
                    </div>`;
                shanslide1();
            } else {
                for (let i = 0; i < preslide1.length; i++) {
                    $(".con .delete")[i].onclick = function () {
                        $(".cont .con")[0].innerHTML = "";
                        preslide1.splice(i, 1);
                        localStorage.setItem("dataslide1", JSON.stringify(preslide1));
                        preslide1 = JSON.parse(localStorage.getItem("dataslide1"));
                        // 删除后再次渲染页面

                        if (preslide1.length == 1) {
                            $(".cont .con")[0].innerHTML = `<div class="row edit">
                                <div class="col-md-2 id">1</div>
                                <div class="col-md-6 color">${preslide1[0][1]}</div>
                                <div class="col-md-2 amend">编辑</div>
                                <div class="col-md-2 delete">删除</div>
                                </div>`;
                            shanslide1();
                        } else {
                            for (let i = 0; i < preslide1.length; i++) {
                                $(".cont .con")[0].innerHTML += `<div class="row edit">
                                        <div class="col-md-2 id">${i + 1}</div>
                                        <div class="col-md-6 color">${preslide1[i][1]
                                    }</div>
                                        <div class="col-md-2 amend">编辑</div>
                                        <div class="col-md-2 delete">删除</div>
                                        </div>`;
                            }
                            shanslide1();
                        }
                    };
                }
            }
            xiuslide1();

        }

        // 编辑大轮播图

        xiuslide1();
        function xiuslide1() {
            
        //     for (let i = 0; i < preslide1.length; i++) {
        //         $(".con .amend")[i].addEventListener("click", function () {
        //             console.log(i);
        //             $(".cont .con .edit")[i].innerHTML = `<div class="col-md-2 id">${i + 1
        //                 }</div>
        //             <div class="col-md-6 color"><select name="" id="" class="editsild"></select></div>
        //             <div class="col-md-2 amend">点击完成编辑</div>
        //             <div class="col-md-2 delete">删除</div>`;
        //             for (let j = 0; j < obj.slide1.length; j++) {

        //                 $( ".editsild")[i].innerHTML += `<option value="${obj.slide1[j][0]}">${obj.slide1[j][1]}</option>`;
                           
                        

        //             }

        //             $(".con .amend")[i].addEventListener("click", function () {
        //                 if ($(".editsild")[i].value == 1) {

        //                     $(".con .amend")[i].innerHTML = "";
        //                     preslide1[i] = obj.slide1[0];
        //                     localStorage.setItem("dataslide1", JSON.stringify(preslide1));
        //                     preslide1 = JSON.parse(localStorage.getItem("dataslide1"));
        //                     for (let i = 0; i < preslide1.length; i++) {

        //                         $(".cont .con .edit")[i].innerHTML = `<div class="col-md-2 id">${i + 1}</div>
        //                     <div class="col-md-6 color">${preslide1[i][1]}</div>
        //                     <div class="col-md-2 amend">编辑</div>
        //                     <div class="col-md-2 delete">删除</div>`;
        //                     }
        //                     shanslide1();
        //                 } else if ($(".editsild")[i].value == 2) {
        //                     $(".con .amend")[i].innerHTML = "";
        //                     preslide1[i] = obj.slide1[1];
        //                     localStorage.setItem("dataslide1", JSON.stringify(preslide1));
        //                     for (let i = 0; i < preslide1.length; i++) {
        //                         preslide1 = JSON.parse(localStorage.getItem("dataslide1"));
        //                         $(".cont .con .edit")[
        //                             i
        //                         ].innerHTML = `<div class="col-md-2 id">${i + 1}</div>
        //                         <div class="col-md-6 color">${preslide1[i][1]
        //                             }</div>
        //                         <div class="col-md-2 amend">编辑</div>
        //                         <div class="col-md-2 delete">删除</div>`;
        //                     }
        //                     shanslide1();
        //                 } else {
        //                     $(".con .amend")[i].innerHTML = "";
        //                     preslide1[i] = obj.slide1[2];
        //                     localStorage.setItem("dataslide1", JSON.stringify(preslide1));
        //                     preslide1 = JSON.parse(localStorage.getItem("dataslide1"));
        //                     for (let i = 0; i < preslide1.length; i++) {
        //                         $(".cont .con .edit")[
        //                             i
        //                         ].innerHTML = `<div class="col-md-2 id">${i + 1}</div>
        //                     <div class="col-md-6 color">${preslide1[i][1]}</div>
        //                     <div class="col-md-2 amend">编辑</div>
        //                     <div class="col-md-2 delete">删除</div>`;
        //                     }
        //                     shanslide1();
        //                 }
        //                 // xiuslide1();
        //             });
        //         });
        //     }
        }

        $(".addid")[0].innerHTML = `内容/路径：
        <select name="" id="" class="addcont"></select>`;
        for (let i = 0; i < obj.slide1.length; i++) {
            $(
                ".addcont"
            )[0].innerHTML += `<option value="${obj.slide1[i][0]}">${obj.slide1[i][1]}</option>`;
        }

        // 点击添加时
        $(".addbtn")[0].onclick = function () {
            $(".addbox")[0].style.display = "none";
            if ($(".addcont")[0].value == 1) {
                $(".cont .con")[0].innerHTML = "";
                preslide1.push(obj.slide1[0]);
                localStorage.setItem("dataslide1", JSON.stringify(preslide1));
                preslide1 = JSON.parse(localStorage.getItem("dataslide1"));

                for (let i = 0; i < preslide1.length; i++) {
                    $(".cont .con")[0].innerHTML += `<div class="row edit">
                            <div class="col-md-2 id">${i + 1}</div>
                            <div class="col-md-6 color">${preslide1[i][1]}</div>
                            <div class="col-md-2 amend">编辑</div>
                            <div class="col-md-2 delete">删除</div>
                            </div>`;
                }
                shanslide1();
            } else if ($(".addcont")[0].value == 2) {
                $(".cont .con")[0].innerHTML = "";
                preslide1.push(obj.slide1[1]);
                localStorage.setItem("dataslide1", JSON.stringify(preslide1));
                preslide1 = JSON.parse(localStorage.getItem("dataslide1"));

                for (let i = 0; i < preslide1.length; i++) {
                    $(".cont .con")[0].innerHTML += `<div class="row edit">
                            <div class="col-md-2 id">${i + 1}</div>
                            <div class="col-md-6 color">${preslide1[i][1]}</div>
                            <div class="col-md-2 amend">编辑</div>
                            <div class="col-md-2 delete">删除</div>
                            </div>`;
                }
                shanslide1();
            } else {
                $(".cont .con")[0].innerHTML = "";
                preslide1.push(obj.slide1[2]);
                localStorage.setItem("dataslide1", JSON.stringify(preslide1));
                preslide1 = JSON.parse(localStorage.getItem("dataslide1"));
                for (let i = 0; i < preslide1.length; i++) {
                    $(".cont .con")[0].innerHTML += `<div class="row edit">
                            <div class="col-md-2 id">${i + 1}</div>
                            <div class="col-md-6 color">${preslide1[i][1]}</div>
                            <div class="col-md-2 amend">编辑</div>
                            <div class="col-md-2 delete">删除</div>
                            </div>`;
                }
                shanslide1();
            }
            xiuslide1();
        };
        xiuslide1();
    };
}

// TODO 改变小轮播图
smallswiper();
function smallswiper() {
    $(".jinheslide2")[0].onclick = function () {
        $(".addbox")[0].style.display = "none";

        $(".add")[0].onclick = function () {
            $(".addbox")[0].style.display = "block";

            $(".addbox .sp1")[0].onclick = function () {
                $(".addbox")[0].style.display = "none";
            };
        };
        $(".con1")[0].innerHTML = `
      <div class="col-md-2 id">序号</div>
      <div class="col-md-6 color">内容/路径</div>
      <div class="col-md-2"></div>
      <div class="col-md-2 alldelete"></div>`;
        $(".cont .con")[0].innerHTML = "";
        // $(".addcont")[0].innerHTML = "";
        for (let i = 0; i < preslide2.length; i++) {
            $(".cont .con")[0].innerHTML += `<div class="row edit">
            <div class="col-md-2 id">${i + 1}</div>
            <div class="col-md-6 color">${preslide2[i][1]}</div>
            <div class="col-md-2 amend">编辑</div>
            <div class="col-md-2 delete">删除</div>
            </div>`;
        }
        // 删除小轮播
        shanslide2();
        function shanslide2() {
            if (preslide2 == "") {
                alert("客户您已经删完了哦！已为您自动跳转初始状态！");
                localStorage.setItem("dataslide2", JSON.stringify(obj.slide2[0]));
                preslide2 = [JSON.parse(localStorage.getItem("dataslide2"))];
                $(".cont .con")[0].innerHTML += `<div class="row edit">
                    <div class="col-md-2 id">1</div>
                    <div class="col-md-6 color">${preslide2[0][1]}</div>
                    <div class="col-md-2 amend">编辑</div>
                    <div class="col-md-2 delete">删除</div>
                    </div>`;
                shanslide2();
            } else {
                for (let i = 0; i < preslide2.length; i++) {
                    $(".con .delete")[i].onclick = function () {
                        $(".cont .con")[0].innerHTML = "";
                        preslide2.splice(i, 1);
                        localStorage.setItem("dataslide2", JSON.stringify(preslide2));
                        preslide2 = JSON.parse(localStorage.getItem("dataslide2"));
                        // 删除后再次渲染页面
                        if (preslide2.length == 1) {
                            $(".cont .con")[0].innerHTML += `<div class="row edit">
                                <div class="col-md-2 id">1</div>
                                <div class="col-md-6 color">${preslide2[0][1]}</div>
                                <div class="col-md-2 amend">编辑</div>
                                <div class="col-md-2 delete">删除</div>
                                </div>`;
                            shanslide2();
                        } else {
                            for (let i = 0; i < preslide2.length; i++) {
                                $(".cont .con")[0].innerHTML += `<div class="row edit">
                                    <div class="col-md-2 id">${i + 1}</div>
                                    <div class="col-md-6 color">${preslide2[i][1]
                                    }</div>
                                    <div class="col-md-2 amend">编辑</div>
                                    <div class="col-md-2 delete">删除</div>
                                    </div>`;
                            }
                            shanslide2();
                        }
                    };
                }
            }
            xiuslide2();
        }

        // 编辑小轮播图
        xiuslide2();
        function xiuslide2() {
            for (let i = 0; i < preslide2.length; i++) {
                $(".con .amend")[i].addEventListener("click", function () {
                    $(".cont .con .edit")[i].innerHTML = `<div class="col-md-2 id">${i + 1
                        }</div>
                    <div class="col-md-6 color"><select name="" id="" class="editsild"></select></div>
                    <div class="col-md-2 amend">点击完成编辑</div>
                    <div class="col-md-2 delete">删除</div>`;
                    for (let j = 0; j < obj.slide2.length; j++) {
                        $(
                            ".editsild"
                        )[0].innerHTML += `<option value="${obj.slide2[j][0]}">${obj.slide2[j][1]}</option>`;
                    }

                    $(".con .amend")[i].addEventListener("click", function () {
                        if ($(".editsild")[0].value == 1) {
                            $(".con .amend")[i].innerHTML = "";
                            preslide2[i] = obj.slide2[0];
                            localStorage.setItem("dataslide2", JSON.stringify(preslide2));
                            preslide2 = JSON.parse(localStorage.getItem("dataslide2"));
                            for (let i = 0; i < preslide2.length; i++) {
                                $(".cont .con .edit")[
                                    i
                                ].innerHTML = `<div class="col-md-2 id">${i + 1}</div>
                            <div class="col-md-6 color">${preslide2[i][1]}</div>
                            <div class="col-md-2 amend">编辑</div>
                            <div class="col-md-2 delete">删除</div>`;
                            }
                            shanslide2();
                        } else if ($(".editsild")[0].value == 2) {
                            $(".con .amend")[i].innerHTML = "";
                            preslide2[i] = obj.slide2[1];
                            localStorage.setItem("dataslide2", JSON.stringify(preslide2));
                            for (let i = 0; i < preslide2.length; i++) {
                                preslide2 = JSON.parse(localStorage.getItem("dataslide2"));
                                $(".cont .con .edit")[
                                    i
                                ].innerHTML = `<div class="col-md-2 id">${i + 1}</div>
                                <div class="col-md-6 color">${preslide2[i][1]
                                    }</div>
                                <div class="col-md-2 amend">编辑</div>
                                <div class="col-md-2 delete">删除</div>`;
                            }
                            shanslide2();
                        } else {
                            $(".con .amend")[i].innerHTML = "";
                            preslide2[i] = obj.slide2[2];
                            localStorage.setItem("dataslide2", JSON.stringify(preslide2));
                            preslide2 = JSON.parse(localStorage.getItem("dataslide2"));
                            for (let i = 0; i < preslide2.length; i++) {
                                $(".cont .con .edit")[
                                    i
                                ].innerHTML = `<div class="col-md-2 id">${i + 1}</div>
                            <div class="col-md-6 color">${preslide2[i][1]}</div>
                            <div class="col-md-2 amend">编辑</div>
                            <div class="col-md-2 delete">删除</div>`;
                            }
                            shanslide2();
                        }
                        xiuslide2();
                    });
                });
            }
        }

        $(".addid")[0].innerHTML = `内容/路径：
        <select name="" id="" class="addcont"></select>`;
        for (let i = 0; i < obj.slide2.length; i++) {
            $(
                ".addcont"
            )[0].innerHTML += `<option value="${obj.slide2[i][0]}">${obj.slide2[i][1]}</option>`;
        }

        // 点击添加时
        $(".addbtn")[0].onclick = function () {
            $(".addbox")[0].style.display = "none";
            if ($(".addcont")[0].value == 1) {
                $(".cont .con")[0].innerHTML = "";
                preslide2.push(obj.slide2[0]);
                localStorage.setItem("dataslide2", JSON.stringify(preslide2));
                preslide2 = JSON.parse(localStorage.getItem("dataslide2"));

                for (let i = 0; i < preslide2.length; i++) {
                    $(".cont .con")[0].innerHTML += `<div class="row edit">
                        <div class="col-md-2 id">${i + 1}</div>
                        <div class="col-md-6 color">${preslide2[i][1]}</div>
                        <div class="col-md-2 amend">编辑</div>
                        <div class="col-md-2 delete">删除</div>
                        </div>`;
                }
                shanslide2();
            } else {
                $(".cont .con")[0].innerHTML = "";
                preslide2.push(obj.slide2[1]);
                localStorage.setItem("dataslide2", JSON.stringify(preslide2));
                preslide2 = JSON.parse(localStorage.getItem("dataslide2"));

                for (let i = 0; i < preslide2.length; i++) {
                    $(".cont .con")[0].innerHTML += `<div class="row edit">
                        <div class="col-md-2 id">${i + 1}</div>
                        <div class="col-md-6 color">${preslide2[i][1]}</div>
                        <div class="col-md-2 amend">编辑</div>
                        <div class="col-md-2 delete">删除</div>
                        </div>`;
                }
                shanslide2();
            }
            xiuslide2();
        };
    };
}
// TODO 改变联系锦和
// 地址三级联动数据建立
var adddata = [
    {
        id: 1,
        capital: "四川省",
        chuan: [
            { id: 1, city: "成都市", cheng: ["双流区", "高新区", "武侯区"] },
            { id: 2, city: "广元市", cheng: ["+++", "+++", "+++"] },
            { id: 3, city: "遂宁市", cheng: ["###", "###", "###"] },
        ],
    },
    {
        id: 2,
        capital: "甘肃省",
        chuan: [
            { id: 1, city: "陇南市", cheng: ["武都区", "***", "***"] },
            { id: 2, city: "兰州市", cheng: ["000", "000", "000"] },
            { id: 3, city: "天水市", cheng: ["111", "111", "111"] },
        ],
    },
];
callme();
function callme() {
    $(".jinhecall")[0].onclick = function () {
        $(".addbox")[0].style.display = "none";
        $(".add")[0].onclick = function () {
            $(".addbox")[0].style.display = "none";

            $(".addbox .sp1")[0].onclick = function () {
                $(".addbox")[0].style.display = "none";
            };
        };
        $(".con1")[0].innerHTML = `
         <div class="col-md-8 color">内容/路径</div>
         <div class="col-md-2"></div>
         <div class="col-md-2 alldelete"></div>`;
        $(".cont .con")[0].innerHTML = "";
        $(".addid")[0].innerHTML = "";
        for (let i = 0; i < preadd.length; i++) {
            $(".cont .con")[0].innerHTML += `<div class="row edit">
                <div class="col-md-8 color">${preadd[i][1]}</div>
                <div class="col-md-2 amend">编辑</div>
                <div class="col-md-2 delete"></div>
                </div>`;
        }

        // 编辑底部的联系锦和
        xiuadd();
        function xiuadd() {
            // 地址栏编辑
            $(".con .amend")[0].onclick = function () {
                $(".edit")[0].innerHTML = `
                <div class="col-md-8 color"><select name="" id="" class="addcont1"></select><select name="" id="" class="addcont2"></select><select name="" id="" class="addcont3"></select><input type="text" placeholder="详细地址" name="" id="addtext"></div>
                <div class="col-md-2 amend">点击完成编辑</div>
                <div class="col-md-2 delete"></div>`;
                for (let j = 0; j < adddata.length; j++) {
                    $(
                        ".addcont1"
                    )[0].innerHTML += `<option value="${adddata[j].capital}">${adddata[j].capital}</option>`;

                    // 第二级初始化
                    $(".addcont2")[0].innerHTML = "";
                    for (let i = 0; i < adddata[j].chuan.length; i++) {
                        $(
                            ".addcont2"
                        )[0].innerHTML += `<option value="${adddata[0].chuan[i].city}">${adddata[0].chuan[i].city}</option>`;
                        // 第三级初始化
                        $(".addcont3")[0].innerHTML = "";
                        for (let q = 0; q < adddata[0].chuan[i].cheng.length; q++) {
                            $(
                                ".addcont3"
                            )[0].innerHTML += `<option value="${adddata[0].chuan[0].cheng[q]}">${adddata[0].chuan[0].cheng[q]}</option>`;
                        }
                        // 三级渲染
                        $(".addcont2")[0].onclick = function () {
                            $(".addcont3")[0].innerHTML = "";
                            if ($(".addcont2")[0].value == "成都市") {
                                for (let q = 0; q < adddata[0].chuan[i].cheng.length; q++) {
                                    $(
                                        ".addcont3"
                                    )[0].innerHTML += `<option value="${adddata[0].chuan[0].cheng[q]}">${adddata[0].chuan[0].cheng[q]}</option>`;
                                }
                            } else if ($(".addcont2")[0].value == "广元市") {
                                for (let q = 0; q < adddata[0].chuan[i].cheng.length; q++) {
                                    $(
                                        ".addcont3"
                                    )[0].innerHTML += `<option value="${adddata[0].chuan[1].cheng[q]}">${adddata[0].chuan[1].cheng[q]}</option>`;
                                }
                            } else {
                                for (let q = 0; q < adddata[0].chuan[i].cheng.length; q++) {
                                    $(
                                        ".addcont3"
                                    )[0].innerHTML += `<option value="${adddata[0].chuan[2].cheng[q]}">${adddata[0].chuan[2].cheng[q]}</option>`;
                                }
                            }
                        };
                    }
                    // 二级渲染
                    $(".addcont1")[0].onclick = function () {
                        $(".addcont2")[0].innerHTML = "";
                        if ($(".addcont1")[0].value == "四川省") {
                            for (let i = 0; i < adddata[j].chuan.length; i++) {
                                $(
                                    ".addcont2"
                                )[0].innerHTML += `<option value="${adddata[0].chuan[i].city}">${adddata[0].chuan[i].city}</option>`;
                                // 第三级初始化
                                $(".addcont3")[0].innerHTML = "";
                                for (let q = 0; q < adddata[0].chuan[i].cheng.length; q++) {
                                    $(
                                        ".addcont3"
                                    )[0].innerHTML += `<option value="${adddata[0].chuan[0].cheng[q]}">${adddata[0].chuan[0].cheng[q]}</option>`;
                                }
                                // 三级渲染
                                $(".addcont2")[0].onclick = function () {
                                    $(".addcont3")[0].innerHTML = "";
                                    if ($(".addcont2")[0].value == "成都市") {
                                        for (let q = 0; q < adddata[0].chuan[i].cheng.length; q++) {
                                            $(
                                                ".addcont3"
                                            )[0].innerHTML += `<option value="${adddata[0].chuan[0].cheng[q]}">${adddata[0].chuan[0].cheng[q]}</option>`;
                                        }
                                    } else if ($(".addcont2")[0].value == "广元市") {
                                        for (let q = 0; q < adddata[0].chuan[i].cheng.length; q++) {
                                            $(
                                                ".addcont3"
                                            )[0].innerHTML += `<option value="${adddata[0].chuan[1].cheng[q]}">${adddata[0].chuan[1].cheng[q]}</option>`;
                                        }
                                    } else {
                                        for (let q = 0; q < adddata[0].chuan[i].cheng.length; q++) {
                                            $(
                                                ".addcont3"
                                            )[0].innerHTML += `<option value="${adddata[0].chuan[2].cheng[q]}">${adddata[0].chuan[2].cheng[q]}</option>`;
                                        }
                                    }
                                };
                            }
                        } else {
                            for (let i = 0; i < adddata[j].chuan.length; i++) {
                                $(
                                    ".addcont2"
                                )[0].innerHTML += `<option value="${adddata[1].chuan[i].city}">${adddata[1].chuan[i].city}</option>`;
                                // 第三级初始化
                                $(".addcont3")[0].innerHTML = "";
                                for (let q = 0; q < adddata[1].chuan[i].cheng.length; q++) {
                                    $(
                                        ".addcont3"
                                    )[0].innerHTML += `<option value="${adddata[1].chuan[0].cheng[q]}">${adddata[1].chuan[0].cheng[q]}</option>`;
                                }
                                // 三级渲染
                                $(".addcont2")[0].onclick = function () {
                                    $(".addcont3")[0].innerHTML = "";
                                    if ($(".addcont2")[0].value == "陇南市") {
                                        for (let q = 0; q < adddata[1].chuan[i].cheng.length; q++) {
                                            $(
                                                ".addcont3"
                                            )[0].innerHTML += `<option value="${adddata[1].chuan[0].cheng[q]}">${adddata[1].chuan[0].cheng[q]}</option>`;
                                        }
                                    } else if ($(".addcont2")[0].value == "兰州市") {
                                        for (let q = 0; q < adddata[1].chuan[i].cheng.length; q++) {
                                            $(
                                                ".addcont3"
                                            )[0].innerHTML += `<option value="${adddata[1].chuan[1].cheng[q]}">${adddata[1].chuan[1].cheng[q]}</option>`;
                                        }
                                    } else {
                                        for (let q = 0; q < adddata[1].chuan[i].cheng.length; q++) {
                                            $(
                                                ".addcont3"
                                            )[0].innerHTML += `<option value="${adddata[1].chuan[2].cheng[q]}">${adddata[1].chuan[2].cheng[q]}</option>`;
                                        }
                                    }
                                };
                            }
                        }
                    };
                }

                // 当点击再次点击编辑时判断详细地址是否为空，并且将内容存到缓存中
                let rap = "";

                $(".con .amend")[0].onclick = function () {
                    if ($("#addtext")[0].value == "") {
                        $("#addtext")[0].placeholder = "你好，详细地址不能为空！";
                    } else {
                        rap =
                            $(".addcont1")[0].value +
                            $(".addcont2")[0].value +
                            $(".addcont3")[0].value +
                            $("#addtext")[0].value;
                        preadd[0][1] = rap;
                        localStorage.setItem("dataadd", JSON.stringify(preadd));
                        preadd = JSON.parse(localStorage.getItem("dataadd"));
                        $(".edit")[0].innerHTML = `
                            <div class="col-md-8 color">${preadd[0][1]}</div>
                            <div class="col-md-2 amend">编辑</div>
                            <div class="col-md-2 delete"></div>`;
                        xiuadd();
                    }
                };
            };

            //  后三个编辑
            for (let i = 1; i < preadd.length; i++) {
                $(".con .amend")[i].addEventListener("click", function () {
                    $(".edit")[i].innerHTML = `
                            <div class="col-md-8 color"><input type="text" class = "alter"></div>
                            <div class="col-md-2 amend">点击完成编辑</div>
                            <div class="col-md-2 delete"></div>`;
                    $(".alter")[0].value = preadd[i][1];

                    $(".con .amend")[i].addEventListener("click", function () {
                        preadd[i][1] = $(".alter")[0].value;
                        $(".edit")[i].innerHTML = `
                                    <div class="col-md-8 color">${preadd[i][1]}</div>
                                    <div class="col-md-2 amend">编辑</div>
                                    <div class="col-md-2 delete"></div>`;
                        localStorage.setItem("dataadd", JSON.stringify(preadd));
                        preadd = JSON.parse(localStorage.getItem("dataadd"));
                        xiuadd();
                    });
                });
            }
        }
    };
}

// TODO 关于锦和文字编译
about();
function about() {
    $(".guanyu")[0].onclick = function () {
        $(".addbox")[0].style.display = "none";
        $(".add")[0].onclick = function () {
            $(".addbox")[0].style.display = "none";

            $(".addbox .sp1")[0].onclick = function () {
                $(".addbox")[0].style.display = "none";
            };
        };
        $(".con1")[0].innerHTML = `
        <div class="col-md-8 color">内容/路径</div>
        <div class="col-md-2"></div>
        <div class="col-md-2 alldelete"></div>`;
        $(".cont .con")[0].innerHTML = "";
        $(".addid")[0].innerHTML = "";
        for (let i = 0; i < preabout.length; i++) {
            $(".cont .con")[0].innerHTML += `<div class="row edit">
                <div class="col-md-8 color">${preabout[i]}</div>
                <div class="col-md-2 amend">编辑</div>
                <div class="col-md-2 delete"></div>
                </div>`;
        }
        // 编辑关于锦和中的内容
        xiuabout();
        function xiuabout() {
            $(".amend")[0].onclick = function () {
                $(".cont .con")[0].innerHTML = "";
                $(".addid")[0].innerHTML = "";
                for (let i = 0; i < preabout.length; i++) {
                    $(".cont .con")[0].innerHTML += `<div class="row edit">
                <div class="col-md-8 color"><input type="text" name="" id="abouttext" value="${preabout[i]}"> </div>
                <div class="col-md-2 amend">点击完成编辑</div>
                <div class="col-md-2 delete"></div>
                </div>`;
                    $(".amend")[0].onclick = function () {
                        if ($("#abouttext")[0].value == "") {
                            $("#abouttext")[0].placeholder = "必填";
                        } else {
                            preabout[i] = $("#abouttext")[0].value;
                            localStorage.setItem("dataabouttext", JSON.stringify(preabout));
                            preabout = JSON.parse(localStorage.getItem("dataabouttext"));
                            $(".cont .con")[0].innerHTML = "";
                            $(".addid")[0].innerHTML = "";
                            for (let i = 0; i < preabout.length; i++) {
                                $(".cont .con")[0].innerHTML += `<div class="row edit">
                        <div class="col-md-8 color">${preabout[i]}</div>
                        <div class="col-md-2 amend">编辑</div>
                        <div class="col-md-2 delete"></div>
                        </div>`;
                            }
                            xiuabout();
                        }
                    };
                }
            };
        }
    };
}
// TODO 企业使命文字编译
mission()
function mission() {
    $(".qiye")[0].onclick = function () {
        $(".addbox")[0].style.display = "none";
        $(".add")[0].onclick = function () {
            $(".addbox")[0].style.display = "none";

            $(".addbox .sp1")[0].onclick = function () {
                $(".addbox")[0].style.display = "none";
            };
        };
        $(".cont .con1")[0].innerHTML = `<div class="col-md-8 color">内容/路径</div>
        <div class="col-md-2"></div>
        <div class="col-md-2 alldelete"></div>`;
        $(".cont .con")[0].innerHTML = "";
        for (let i = 0; i < premission.length; i++) {
            $(".cont .con")[0].innerHTML += `<div class="row edit">
                <div class="col-md-8 color">${premission[i]}</div>
                <div class="col-md-2 amend">编辑</div>
                <div class="col-md-2 delete"></div>
                </div>`;
        }
        // 编辑文字
        xiumission();
        function xiumission() {
            $(".amend")[0].onclick = function () {
                $(".cont .con")[0].innerHTML = "";
                for (let i = 0; i < premission.length; i++) {
                    $(".cont .con")[0].innerHTML += `<div class="row edit">
                        <div class="col-md-8 color"><input type="text" name="" id="abouttext" value="${premission[i]}"></div>
                        <div class="col-md-2 amend">点击完成编辑</div>
                        <div class="col-md-2 delete"></div>
                        </div>`;
                }
                $(".amend")[0].onclick = function () {
                    if ($("#abouttext")[0].value == "") {
                        $("#abouttext")[0].placeholder = "必填";
                    } else {

                        premission[0] = $("#abouttext")[0].value;
                        localStorage.setItem("datamissiontext", JSON.stringify(premission));
                        premission = JSON.parse(localStorage.getItem("datamissiontext"));
                        $(".cont .con")[0].innerHTML = "";
                        for (let i = 0; i < premission.length; i++) {
                            $(".cont .con")[0].innerHTML += `<div class="row edit">
                                <div class="col-md-8 color">${premission[0]}</div>
                                <div class="col-md-2 amend">编辑</div>
                                <div class="col-md-2 delete"></div>
                                </div>`;
                        }
                        xiumission();
                    }
                }
            }
        }


    }
}
// TODO 锦和好车
baozheng()
function baozheng() {
    $(".baozhang")[0].onclick = function () {
        $(".addbox")[0].style.display = "none";
        $(".add")[0].onclick = function () {
            $(".addbox")[0].style.display = "none";

            $(".addbox .sp1")[0].onclick = function () {
                $(".addbox")[0].style.display = "none";
            };
        };
        $(".cont .con1")[0].innerHTML = `<div class="col-md-2 color">位置</div>
        <div class="col-md-6 color">内容/路径</div>
        <div class="col-md-2"></div>
        <div class="col-md-2"></div>`;
        $(".cont .con")[0].innerHTML = "";
        for (let i = 0; i < prebaozhang.length; i++) {
            $(".cont .con")[0].innerHTML += `<div class = "row edit">
        <div class="col-md-2 color">${prebaozhang[i].place}</div>
        <div class="col-md-6 color">${prebaozhang[i].title}</div>
        <div class="col-md-2 amend">编辑</div>
        <div class="col-md-2 delete"></div>
        </div>`;
        }
        //    编辑保障内容
        xiubaozhang();
        function xiubaozhang() {
            for (let i = 0; i < prebaozhang.length; i++) {
                $(".amend")[i].onclick = function () {
                    $(".edit")[i].innerHTML = "";
                    $(".edit")[i].innerHTML = `<div class="col-md-2 color">${prebaozhang[i].place}</div>
                <div class="col-md-6 color"><input type="text" value="${prebaozhang[i].title}" name="" id="baozhangtext"></div>
                <div class="col-md-2 amend">点击完成编辑</div>
                <div class="col-md-2 delete">`
                    $(".amend")[i].onclick = function () {
                        if ($("#baozhangtext")[0].value == "") {
                            $("#baozhangtext")[0].placeholder = "内容并不能为空！";
                        } else {
                            prebaozhang[i].title = $("#baozhangtext")[0].value;
                            localStorage.setItem("databaozhang", JSON.stringify(prebaozhang));
                            prebaozhang = JSON.parse(localStorage.getItem("databaozhang"));
                            $(".edit")[i].innerHTML = `<div class="col-md-2 color">${prebaozhang[i].place}</div>
                       <div class="col-md-6 color">${prebaozhang[i].title}</div>
                       <div class="col-md-2 amend">编辑</div>
                       <div class="col-md-2 delete">`
                            xiubaozhang()
                        }
                    }
                }
            }
        }

    }
}
