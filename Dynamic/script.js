// GET DOM
var time = document.getElementById('time')
var greeting = document.getElementById('greeting')
var person = document.getElementById('name')
var plan = document.getElementById('plan')

// 获取、显示时间
function showTime() {
    const today = new Date()
    // 获取小时、分钟、秒数
    const hour = today.getHours()
    const minute = today.getMinutes()
    const seconds = today.getSeconds()

    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(minute)}<span>:</span>${addZero(seconds)}`;

    setTimeout(showTime, 1000)
}

// 判断时间是否大于10 不大于的话就在前面补0
function addZero(times) {
    return times < 10 ? '0' + times : times;
}

showTime()

// 设置背景和问候语
function setBg() {
    const today = new Date()
    const hour = today.getHours()
    console.log(hour);
    if (hour < 12) {
        document.body.style.background = "url('./img/m1.png') no-repeat center/cover"
        greeting.textContent = "早上好"
    } else if (hour === 12) {
        document.body.style.background = "url('./img/m2.png') no-repeat center/cover"
        greeting.textContent = "中午好"
    }
    else if (hour < 17) {
        document.body.style.background = "url('./img/n1.png') no-repeat center/cover"
        greeting.textContent = "下午好"
    } else {
        document.body.style.background = "url(./img/gn1.png) no-repeat center/cover"
        greeting.textContent = "晚上好"
    }

}
setBg()

// 获得本地姓名
function getName() {
    if (
        localStorage.getItem("name") === null ||
        localStorage.getItem("name") === ""
    ) {
        person.textContent = "...";
    } else {
        person.textContent = localStorage.getItem("name");
    }
}

// 设置姓名
function setName(e) {
    if (e.type === "keypress") {
        if (e.keyCode == 13 || e.which == 13) {
            localStorage.setItem("name", e.target.innerText);
            person.blur();
        }
    } else {
        localStorage.setItem("name", e.target.innerText);
    }
}

// 获得本地计划
function getPlan() {
    if (
        localStorage.getItem("plan") === null ||
        localStorage.getItem("plan") === ""
    ) {
        plan.textContent = "Plan?";
    } else {
        plan.textContent = localStorage.getItem("plan");
    }
}

// 设置姓名
function setPlan(e) {
    if (e.type === "keypress") {
        if (e.keyCode == 13 || e.which == 13) {
            localStorage.setItem("plan", e.target.innerText);
            plan.blur();
        }
    } else {
        localStorage.setItem("plan", e.target.innerText);
    }
}

// 事件监听
person.addEventListener("keypress", setName);
person.addEventListener("blur", setName);
plan.addEventListener("keypress", setPlan);
plan.addEventListener("blur", setPlan);

// 运行
showTime();
setBg();
getName();
getPlan();
