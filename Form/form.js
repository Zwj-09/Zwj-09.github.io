// 实现表单验证

// 获取DOM节点
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPwd = document.getElementById('confirmPwd');	

// 事件监听
form.addEventListener('submit',function(e){
	e.preventDefault();
	
	checkRequire([username,email,password,confirmPwd]);
	
	// 长度检验
	checkLength(username,3,15);
	checkLength(password,6,12);
	
	// 邮箱检验
	checkEmail(email);
	
	// 验证密码是否匹配
	checkPassword(password,confirmPwd);
})

// 判断表单是否为空
function checkRequire(inputArr){
	// 遍历传入的数据
	inputArr.forEach(function(input){
		console.log(input);
		if(input.value.trim() ===""){
			showError(input,`${getKeyWords(input)}必填项`)
		}else{
			showSuccess(input)		
		}
	})
}

// 截取输入框的后几个参数
function getKeyWords(input){
	console.log(input.placeholder.slice(3));
	return input.placeholder.slice(3);
}

// 长度判断
function checkLength(input,min,max){
	if(input.value.length <min){
		showError(input,`${getKeyWords(input)}至少需要${min}个字符`)
	}else if(input.value.length > max){
		showError(input,`${getKeyWords(input)}最多只能${max}个字符`)
	}else{
		showSuccess(input)
	}
}

// 错误函数
function showError(input,msg){
	const formCtrol = input.parentElement;
	formCtrol.className='form-control error';	
	const small = formCtrol.querySelector('small');
	small.innerText =msg;
}

// 成功函数
function showSuccess(input){
		const formCtrol = input.parentElement;
		formCtrol.className='form-control success';	
}

// 邮箱正则表达式匹配
function checkEmail(input){
	let reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	
	if(reg.test(input.value.trim())){
		showSuccess(input);
	}else{
		showError(input,'邮箱格式错误')
	}
}

// 验证密码是否匹配
function checkPassword(pwd,cpwd){
	if(pwd.value !==cpwd.value){
		showError(cpwd,'密码不匹配')
	}
}