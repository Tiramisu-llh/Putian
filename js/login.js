//主要做用户登录
//当单击提交按钮的时候，进行用户信息验证
window.onload = function () {            //加载onload事件
    var form = document.getElementsByTagName("form")[0];     //获取form对象
    form.onsubmit = function () {                            //绑定事件
        var inpts = document.getElementsByTagName("input");  //0用户名  1密码
        //获取数据，利用用户名去localStorage中读取数据
        var storage = window.localStorage;
        var str = storage.getItem(inpts[0].value);           //键

        //如果key存在，返回string值，否则返回null
        if (str == null) {                                   //当用户不存在的时候，提示  不跳转    
            alert("当前用户不存在！");
            return false;
        } else {
            var data = JSON.parse(str);                      //JSON数据转js对象
            if (data.userPwd == inpts[1].value) {           //当用户存在且密码正确的时候，跳转
                return true;
            } else {
                //当用户存在多的时候，但密码不正确，提示，不跳转
                alert("当前用户密码输入错误！");
                return false;
            }
        }
    };
};