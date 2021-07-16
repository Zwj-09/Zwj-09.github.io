const fill = document.querySelector('.fill')
const emptys = document.querySelectorAll('.empty')


// 拖拽开始
fill.addEventListener('dragstart',dragStart)
function dragStart(){
	// 拖拽出来时 添加hold类 加了一个border显示
	this.classList.add('hold')
	// console.log(this)
	
	// 解决 拖拽出来 盒子内还保留图片的问题
	var self = this;
	setTimeout(function(){
		self.className ="invisible"
	},0)
}

// 拖拽结束
fill.addEventListener('dragend',dragEnd)
function dragEnd(){
	this.className = 'fill';
}

for(const empty of emptys){
	empty.addEventListener('dragover',dragOver);		
	empty.addEventListener('dragenter',dragEnter);
	empty.addEventListener('dragleave',dragLeave);				
	empty.addEventListener('drop',dragDrop);
}

function dragOver(e){
	e.preventDefault()
	console.log('dragOver');
}

function dragEnter(e){
	e.preventDefault()
	this.classList.add('hovered')
	console.log('dragEnter');
}

function dragLeave(e){
	e.preventDefault()
	this.classList.remove('hovered');
	console.log('dragLeave');
}

function dragDrop(e){
	e.preventDefault()
	this.classList.remove('hovered');
	this.append(fill)
	console.log('dragDrop');
}