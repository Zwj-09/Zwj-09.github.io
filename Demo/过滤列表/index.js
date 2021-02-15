// Get input
var filterInput = document.getElementById('filterInput');

// add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    // 获取输入的内容 并转换为大写
    let vals = filterInput.value.toUpperCase()

    var ul = document.getElementById('names');
    var li = ul.querySelectorAll('li.collection-item');

    // 遍历获得全部的列表信息
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];
        // 将获得的输入内容与已有的数据进行比较 indexOf()
        if (a.innerHTML.toUpperCase().indexOf(vals) > -1) {
            li[i].style.display = 'blcok';
        } else {
            li[i].style.display = 'none';
        }
    }
}