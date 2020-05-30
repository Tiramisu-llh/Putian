window.onload = function () {
	//获取元素
	var inpts = document.getElementsByTagName("input");  //长度为5 0-3即可
	var spanLabel = document.getElementsByClassName("title");   //长度为4

	//regs数组用来存储每个表单控件对象的正则表达式和提示信息
	var regs = [
		{
			//用户名称
			"reg": /^[a-zA-Z]{4,12}$/,
			"msgs": {
				"success": "User name entered correctly.",
				"error": "English letters of length from 4 to 12."
			}, //包含正确和错误信息
			"state": false	//键值对，用来存储当前表单的验证状态，默认没有通过验证
		},
		{
			//密码
			"reg": /^[a-zA-Z0-9]{6,20}$/,
			"msgs": {
				"success": "Password entered correctly.",
				"error": "Letters,numbers and underscores of length from 6 to 20."
			}, //包含正确和错误信息
			"state": false	//键值对，用来存储当前表单的验证状态，默认没有通过验证
		},
		{
			//密码确认
			"reg": RegExp("^" + inpts[1].value + "$"), //等于密码的值
			"msgs": {
				"success": "Enter the same password twice.",
				"error": "The two passwords do not match."
			}, //包含正确和错误信息
			"state": false	//键值对，用来存储当前表单的验证状态，默认没有通过验证
		},
		{
			//手机号码
			"reg": /^1[34578]\d{9}$/,   //元字符\d表示数字
			"msgs": {
				"success": "Enter the phone number correctly.",
				"error": "11 digits starting with 13.14.15.17.18."
			},  //包含正确和错误信息
			"state": false	//键值对，用来存储当前表单的验证状态，默认没有通过验证
		}];

	//-1是因为因为最后一个是按钮，使用for in会遍历到最后一个
	for (var i = 0; i <= inpts.length - 1; i++) {
		inpts[i].index = i;	                        //记录当前input标签的数组下标，为span标签服务
		inpts[i].onblur = function () {            //给每一个表单控件对象添加失去焦点事件
			var value = this.value;                //为重复密码做服务
			var spanObj = spanLabel[this.index];   //获取对应的span标签对象
			var reg = regs[this.index];           //获取对应的表达式

			if (this.index == 2) {
				//对regs数组的中的reg键值进行修改
				regs[2].reg = RegExp("^" + inpts[1].value + "$");
			}

			//判断用户是否已经注册过了，用户名称唯一
			if (this.index == 0) {                //第一个表单控件触发了onblur事件
				//先读取本地存储中对应的值，再进行比较判断
				var str = localStorage.getItem(this.value);
				//如果key存在，则返回字符型数据，否则返回null
				if (str != null) {                 //表示当前用户存在
					spanObj.innerHTML = "The user name has been registered.";
					spanObj.className = "title error";
					regs[this.index].state = false;
					return false;                  //不执行
				}
			}

			//进行正则表达式的判断,重复密码
			if (reg.reg.test(value)) {
				//如果符合要求，显示正确的样式，输出正确的提示信息，
				spanObj.innerHTML = reg.msgs.success;
				spanObj.className = "title success";
				regs[this.index].state = true;
			} else if (value == "") {
				//如果内容为空，显示错误的样式，输出为空的信息
				spanObj.innerHTML = "The input box cannot be empty.";
				spanObj.className = "title error";
				regs[this.index].state = false;
			} else {
				//如果不符合要求，显示错误的样式，输出错误的信息
				spanObj.innerHTML = reg.msgs.error;
				spanObj.className = "title error";
				regs[this.index].state = false;
			}
		};
	}

	//单击提交按钮
	var forms = document.getElementsByTagName("form")[0];  //只有一个表单对象
	forms.onsubmit = function () {
		//判断所有的输入信息是否符合要求，   state = true
		var state = regs.every(function (item) {      //判断当前数组中的每一个元素是否符合设定的规则
			//itme参数表示当前遍历到的数组元素
			return item.state;
		});

		//如果符合要求，保存到本地存储，并跳转页面
		if (state) {
			var data = {};              //采用字面量
			data.userName = inpts[0].value;
			data.userPwd = inpts[1].value;
			data.userTel = inpts[3].value;            //下标2对应确认密码
			//data对象的属性名由我们自己设定
			var str = JSON.stringify(data);           //将JS对象设置转成JSON数据格式
			var storage = window.localStorage;
			storage.setItem(data.userName, str);      //key唯一标识   value
			alert("信息填写无误，注册成功！");         //提示
			return true;                              //跳转触发
		} else {
			//如果不符合要求，不做任何操作，页面不跳转
			alert("信息填写错误，注册失败！");
			return false;                               //跳转不触发
		}
	};
};