const love_btn = document.querySelector('.love');
// 鼠标按下 mousedown
love_btn.addEventListener('mousedown', () => {
    love_btn.style.backgroundColor = '#FFF';
    love_btn.style.color = '#e7273f';

    // 设置文本
    const text = document.querySelector('.text');
    text.innerHTML = '<span class="grey-text">发送给:</span>米修';

    // 生成爱心
    createHearts(love_btn.querySelector('.icon-container'));
})



// 鼠标松开 mouseup
love_btn.addEventListener('mouseup', () => {
    love_btn.style.backgroundColor = '#e7273f';
    love_btn.style.color = '#FFF';

    // 修改文本内容
    const text = document.querySelector('.text');
    text.innerHTML = '谢谢支持 ！ <i class="fa fa-repeat"><i>';
})

function createHearts(container) {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('span');
            heart.classList.add('heart');
            heart.innerHTML = '<i class="fa fa-heart"></i>';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.fontSize = Math.random() * 20 + 5 + 'px';
            heart.style.animationDuration = Math.random() * 2 + 3 + 's';
            // 插入
            container.appendChild(heart);
            // 使用定时器 当爱心生成3s之后消失
            setTimeout(() => {
                heart.remove();
            }, 3000);


        }, i * 100);
    }
}