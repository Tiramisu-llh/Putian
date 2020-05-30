window.onload = function () {
  //通过标签名获取header元素
  var header = document.getElementsByTagName("header")[0];
  //获取第一个ul
  var father = header.querySelector('ul');
  //通过id名获取
  var first_tabs = document.getElementById('a1')
  //?userName=coco
  var url = location.search; //获取？及以后的内容
  //console.log(url);
  if (url.indexOf("?") != -1) {  //找到返回索引下标，否则返回-1
    //表示的是有登录信息
    var str = url.substr(1);   //去掉问号
    var strArr = str.split("&");  //数据分割  2个数组元素
    var request = {};   //定义对象，用户存放index页面传递的用户参数
    //遍历数组， 获取每一个键和值
    for (var i = 0; i < strArr.length; i++) {
      var key = strArr[i].split("=")[0];
      var value = strArr[i].split("=")[1];
      request[key] = value;  //给request对象添加一个键值对  key:value
    }
    //用户名  request.userName
    var storage = window.localStorage;   //定义localStorage对象
    var str = storage.getItem(request.userName);  //利用方法获取数据
    var data = JSON.parse(str);   //数据转换
    //添加一个节点
    createNode(data.userName);
  } else {
    alert('当前未登录，请登录！3秒后返回登录页面！');
    setTimeout(function () {        //延迟时间执行程序
      location.href = "login.html"
    }, 3000)        //3秒后做页面跳转
  }
  //创建节点
  function createNode(info) {
    var span = document.createElement('span'); //创建父节点
    span.innerHTML = info;   //文本
    father.insertBefore(span, first_tabs);  //父节点添加到al前
  }
  //页面滚动监听
  window.addEventListener("scroll", function () {
    /*  toggle在元素中切换类名  */
    /* 相当于CSS3的属性粘性定位position:sticky */
    header.classList.toggle("sticky", window.scrollY > 0);
  })
  /* 传参数 */
  //获取所有li
  var a = header.querySelectorAll('li');
  var add = location.search; //获取？及以后的内容
  //给每一个li添加一个点击事件
  /*  for (var i = 0; i < a.length; i++) {
     
   } */
  a[0].addEventListener('click', function () {
    location.href = "specialty.html" + add;
  });
  a[1].addEventListener('click', function () {
    location.href = "scenic.html" + add;
  });
  a[2].addEventListener('click', function () {
    location.href = "snack.html" + add;
  });
  a[3].addEventListener('click', function () {
    location.href = "index.html" + add;
  });
}