// 获取DOM节点
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

// 初始化变量
const days = [
    '星期天',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
];
const months = [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
];

// 模式切换
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        // 黑夜
        html.classList.remove('dark');
        e.target.innerHTML = '黑夜模式';
    }
    else {
        // 白天
        html.classList.add('dark');
        e.target.innerHTML = '白天模式';
    }
})


// 设置时钟
function setTime() {
    // 获得当前时间
    const time = new Date();
    // 月份 0-11 
    const month = time.getMonth();
    // 星期 0-6
    const day = time.getDay();
    // 日期
    const date = time.getDate();
    // 时分秒
    const hours = time.getHours(),
        minute = time.getMinutes(),
        second = time.getSeconds();
    // 将时间取余 显示在时钟上 
    const hoursClock = hours % 12;

    console.log(hoursClock, minute, second);

    // 设置时钟 旋转角度
    // 30deg 6deg 6deg 
    hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hoursClock, 0, 11, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`;
    timeEl.innerHTML = `${hours < 10 ? `0${hours}` : hours} : ${minute < 10 ? `0${minute}` : minute} : ${second < 10 ? `0${second}` : second} `;
    dateEl.innerHTML = `${days[day]} ${months[month]} <span class="circle">${date}</span>`;
}

const scale = (number, in_min, in_max, out_min, out_max) => {
    return ((number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min);
}

setInterval(setTime, 1000);

setTime();

