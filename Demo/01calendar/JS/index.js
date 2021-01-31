// 获取节点
const calendar = document.getElementById('calendar'),
    moods = document.querySelectorAll('.mood'),
    randomize = document.querySelector('#randomize'),
    clear = document.querySelector('#clear');

// 设置年月日初始化变量
const currentYear = 2020;
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'Octomber',
    'November',
    'December'
];
const weekDays = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];

// 渲染日历
// 1.获取所有日期
const dates = getAllDays(currentYear);
// 2.循环遍历把日期插入到月份中
var monthHTML = '';
var map = new Map()
months.forEach((month, index) => {

    monthHTML += `<div class="months month_${index}">
                    <h3>${month}</h3>
                    <div class="week_days_container">
                        ${weekDays.map((day) => `<div class="week_days">${day}</div>`).join('')}
                        <div class="days_container"></div>
                    </div>
                </div>`;
});

// 将月份和星期渲染到页面
calendar.innerHTML = monthHTML;

// 3.将日期渲染到页面中
dates.forEach(date => {
    const month = date.getMonth();
    console.log(month);
    // 获取月份节点
    const monthEle = document.querySelector(`.month_${month}  .days_container`);

    // 每个月可能会有空白天数 需要创建
    // getDate()  返回月份的某一天 （1-31） 
    // getDay() 返回的是星期 （0-6）
    // 是第一天但是不是星期天 那么需要添加空白部分
    if (date.getDate() === 1 && date.getDay() !== 0) {
        for (let i = 0; i < date.getDay(); i++) {
            const emptySport = createEmptySport();
            monthEle.appendChild(emptySport);
        }
    }
    const dateEl = createDateEl(date);
    monthEle.appendChild(dateEl);
})


// 初始化心情日历
const colors = [
    '#2d6b5f',
    '#72e3a6',
    '#dff4c7',
    '#edbf98',
    '#ea3d36'
];

// 默认颜色
const defaultColor = '#888';
let activeColor = '';

// 心情图标点击
moods.forEach((mood) => {
    mood.addEventListener('click', () => {
        // 判断是否添加了selected类名
        if (mood.classList.contains('selected')) {
            mood.classList.remove('selected');
            activeColor = defaultColor;
        }
        else {
            // 排他思想
            moods.forEach((mood) => {
                mood.classList.remove('selected');
            });
            mood.classList.add('selected');
            // 获取选择图标的颜色
            // 获得元素
            // getComputedStyle(mood) . 
            // 获得改元素的某一个样式
            // getPropertyValue('color');
            activeColor = getComputedStyle(mood).getPropertyValue('color');
        }
    });
});

// 给日期添加颜色
const circles = document.querySelectorAll('.circle');
console.log(circles);
circles.forEach((circle) => {
    circle.addEventListener('click', () => {
        circle.style.backgroundColor = activeColor;
    });
});


// 随机颜色
randomize.addEventListener('click', () => {
    randomize.style.backgroundColor = '#ea3d36';
    circles.forEach((circle) => {
        circle.style.backgroundColor = getRandomColor();
    });
});
randomize.addEventListener('mouseleave', () => {
    randomize.style.backgroundColor = '#72e3a6';
})

// 清除全部
clear.addEventListener('click', () => {
    clear.style.backgroundColor = '#36e4ea';
    circles.forEach((circle) => {
        circle.style.backgroundColor = defaultColor;
    });
});
clear.addEventListener('mouseleave', () => {
    clear.style.backgroundColor = '#888';
})

// ----------------------------
// 1.获取所有日期
function getAllDays(year) {
    // 获取第一天
    const firstDay = new Date(`January 1 ${year}`);
    console.log(firstDay);
    // 获取最后一天
    const lastDay = new Date(`December 31 ${year}`);
    console.log(lastDay);
    // 所有日期的数组
    const days = [firstDay];

    // 用于追踪日期
    let lastDayInArray = firstDay;
    while (lastDayInArray.getTime() != lastDay.getTime()) {
        days.push(addDays(lastDayInArray, 1));
        lastDayInArray = days[days.length - 1];
    }
    console.log(days);
    return days;
}

// 实现日期自增
function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

// 创建空白位置
function createEmptySport() {
    const emptyEl = document.createElement('div');
    emptyEl.classList.add('days');
    return emptyEl;
}

// 创建日期
function createDateEl(date) {
    const day = date.getDate();
    const dateEl = document.createElement('div');
    dateEl.classList.add('days');
    dateEl.innerHTML = `<span class="circle">${day}</span>`;
    return dateEl;
}

// 随机颜色函数
function getRandomColor() {
    return colors[Math.floor(Math.random() * 5)];
}