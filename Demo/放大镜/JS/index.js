window.addEventListener('load', function () {
    var mask = document.querySelector('.mask');
    var box = document.querySelector('.container');
    var big = document.querySelector('.big');
    // 鼠标移入移出 mask和大图片显示与隐藏
    box.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';

    })
    box.addEventListener('mouseleave', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })

    // ===========================================
    // 遮挡层跟随鼠标移动
    box.addEventListener('mousemove', function (e) {
        //鼠标在盒子内部的位置  = 鼠标在页面的位置 - 盒子的水平位置
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;

        // mask盒子只能在大盒子内部移动
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        // mask盒子最大移动距离 因为设置的大盒子宽高一样 所有 xy的最大移动距离都一样
        var maskMax = box.offsetWidth - mask.offsetWidth;

        if (maskX <= 0) {
            maskX = 0;
        }
        else if (maskX > maskMax) {
            maskX = maskMax;
        }

        if (maskY <= 0) {
            maskY = 0;
        }
        else if (maskY > maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';

        var bigImg = document.querySelector('.bigImg');
        // 计算右侧大图的位置移动  
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        console.log(bigMax);
        // 计算大图的移动距离
        // maskX / maskMax = bigX / bigMax;
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';
    })
})