const hoursEls = document.querySelectorAll('#hours .number');
// console.log(hoursEls);
const minutesEls = document.querySelectorAll('#minutes .number');
const secondsEls = document.querySelectorAll('#seconds .number');

// 0-9数字
const states = [
    [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13],
    [3, 5, 8, 10, 13],
    [1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13],
    [1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13],
    [1, 3, 4, 5, 6, 7, 8, 10, 13],
    [1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13],
    [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13],
    [1, 2, 3, 5, 8, 10, 13],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13]
];

function getTime() {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    hours = (hours < 10 ? `0${hours}` : hours).toString().split("");
    minutes = (minutes < 10 ? `0${minutes}` : minutes).toString().split("");
    seconds = (seconds < 10 ? `0${seconds}` : seconds).toString().split("");

    const hour = hours.join("");
    // console.log(hour);
    // 设置时间 渲染到页面
    displayNumber(hoursEls[0], +hours[0]);
    displayNumber(hoursEls[1], +hours[1]);

    displayNumber(minutesEls[0], +minutes[0]);
    displayNumber(minutesEls[1], +minutes[1]);

    displayNumber(secondsEls[0], +seconds[0]);
    displayNumber(secondsEls[1], +seconds[1]);
}

function displayNumber(el, number) {
    const pieces = el.querySelectorAll('.piece');
    pieces.forEach((piece, index) => {
        if (states[+number].includes(index + 1)) {
            piece.classList.add('show');
        }
        else {
            piece.classList.remove('show');
        }
    });
}
getTime();


function ImgChange() {
    const time = new Date();
    let hours = time.getHours();
    console.log(hours);
    if (hours < 12) {
        document.querySelector('h1').innerHTML = '早上好';
        document.body.style.backgroundImage = "url('../Images/01.jpg')";
        // document.body.style.backgroundImage= 'url(http://localhost:63342/前端/Demo/03numberClock/Images/01.jpg?_ijt=d149cmrntj9c2tkdvvmqmeddnk)';
    }
    else if (hours >= 12 && hours < 18) {
        document.querySelector('h1').innerHTML = '下午好';
        document.body.style.backgroundImage = "url('../Images/02.jpg')";
        // document.body.style.backgroundImage = 'url(http://localhost:63342/前端/Demo/03numberClock/Images/02.jpg?_ijt=d149cmrntj9c2tkdvvmqmeddnk)';
    }
    else {
        document.querySelector('h1').innerHTML = '晚上好';
        document.body.style.backgroundImage = "url('../Images/03.jpg')";
        // document.body.style.backgroundImage = 'url(http://localhost:63342/前端/Demo/03numberClock/Images/03.jpg?_ijt=d149cmrntj9c2tkdvvmqmeddnk)';
    }
}
ImgChange();
setInterval(getTime, 1000);