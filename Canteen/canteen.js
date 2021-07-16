let menu = document.getElementById('menu')
let navbar = document.querySelector('.navbar')


menu.onclick = () => {
    menu.classList.toggle('fa-window-close-o')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('fa-window-close-o')
    navbar.classList.remove('active')

    // 滚动按钮
    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active')
    } else {
        document.querySelector('#scroll-top').classList.remove('active')
    }
}

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out')
}
function fadeOut() {
    setInterval(loader, 3000)
}
window.onload = fadeOut();