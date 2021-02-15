// Get Input
const ipt = document.getElementById('jinInput');
var output = document.getElementById('output').style.visibility = "hidden";

// 设置input的placeholder值
// var myselect = document.getElementById('select');
// var index = myselect.selectedIndex;
// myselect.addEventListener('click', function () {
//     ipt.setAttribute("placeholder", `请输入${myselect.options[index].value}`);
// })

ipt.addEventListener('input', function (e) {
    // 获取输入框的输入值
    var iptVal = e.target.value;
    var output = document.getElementById('output').style.visibility = "visible";

    // 斤转换
    document.getElementById('jinOutput').innerHTML = iptVal;
    document.getElementById('kgOutput').innerHTML = iptVal * 0.5;
    document.getElementById('poundOutput').innerHTML = iptVal * 1.1023113;
    document.getElementById('ozOutput').innerHTML = iptVal * 17.636981;
})