//document对象获取元素
var ll = document.getElementById("ll");
//element对象父元素div获取子元素div
var divs = ll.getElementsByTagName("div");
var headers = ll.getElementsByTagName("p");
//添加一个index属性，保存i值
for (var i in headers) {
    //为每个headers集合中的元素绑定事件
    headers[i].index = i;
    headers[i].onclick = function () {
        //排他思想
        for (var j = 0; j < headers.length; j++) {
            divs[j].style.display = "none";
        }
        divs[this.index].style.display = "block";
    }
}