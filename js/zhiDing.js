/*    按钮显示和隐藏    */
//对元素滚动的次数进行计数并添加函数到scroll事件
//scroll事件适用于所有可滚动的元素和window对象（浏览器窗口）
$(window).scroll(function () {
    //如果滚动条距离顶部50就显示出来，否则不显示
    if ($(document).scrollTop() > 50) {  
        $('#goTop').fadeIn(); //渐显
    } else {
        $('#goTop').fadeOut(); //渐隐
    }
});

/*   置顶效果   */
//当单击元素时，发生click事件并添加函数到click事件
$('#goTop').click(function () {
    var timer = setInterval(function () {
        if ($(document).scrollTop() == 0) {
            //如果到达顶部就把定时器关掉
            clearInterval(timer);  
        } else {
            //scrollTop()是滚动条距离顶部的位置，这里就是说开个定时器，每次减少30，就可以慢慢减到顶部
            $(document).scrollTop($(document).scrollTop() - 30);  
        }
    }, 10);
});