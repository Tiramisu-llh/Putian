//立即执行函数
(function (d) {
    var bubbles = d.querySelector('.bubbles');
    var bubblesWidth = bubbles.clientWidth;  //对象可见的宽度，不包滚动条等边属线，会随窗口的显示大小改变
    var num = bubbles.getAttribute('num');
    var duration = bubbles.getAttribute('duration');

    bubbleUp();
    setInterval(bubbleUp, duration * 1000);

    function bubbleUp() {
        bubbles.innerHTML = '';   //置空原来的内容
        for (var i = 0; i < num; i++) {  
            var bubbleDiv = d.createElement('div');  //创建一个div
            bubbleDiv.classList.add('bubble');   //给这个div添加一个类
            //设置动画效果的样式
            //transform出现不同尺寸的泡泡，然后旋转
            //animation是动画，往上飘
            bubbleDiv.style.cssText = `       
          transform: translate(${bubblesWidth * Math.random()}px, 0) scale(${5 * Math.random()});
          animation: up ${duration * Math.random() + 1}s ease-in-out;
        `
            bubbles.appendChild(bubbleDiv);  //bubbleDiv追加到bubbles
        };
    };
})(document);