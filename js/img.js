/* 图片轮播 */
window.onload = function () {
    var banner = document.getElementById('banner');
    var one = document.getElementById('one');
    var two = document.getElementById('two');

    //复制一份图片
    two.innerHTML = one.innerHTML;

    setInterval(marquee, 20);//设置定时器

    //轮播函数
    function marquee() {
        if (banner.scrollLeft >= banner.scrollWidth / 2) { //判断滚动距离
            banner.scrollLeft = 0;
        } else {
            banner.scrollLeft += 2;  //设置滚动距离
        }
    }

    //传参数
    var a = document.querySelector('.ban').querySelectorAll('li');
    var search = location.search;
    a[0].addEventListener('click', function () {
        location.href = "index.html" + search;
    });
}