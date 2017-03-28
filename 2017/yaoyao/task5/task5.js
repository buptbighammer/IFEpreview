var direction = ["top", "right", "bottom", "left"];
init();
function init(){
	var moveBlock = document.getElementById("move-block");
	moveBlock.style.top = "1px";
	moveBlock.style.left = "1px";
	addEvent();
}
//添加点击事件
function addEvent(){
	EventUtil.addHandler(document.forms["move"], "submit", blockMove);
}
function blockMove(){
	EventUtil.preventDefault(event);
	var action = document.forms["move"].action.value.toLowerCase();
	if(action === "go"){
		go();
	}else if(action === "tun lef"){
		tunLef();
	}else if(action === "tun rig"){
		tunRig();
	}else if(action === "tun bac"){
		tunBac();
	}else if(action === "tra lef"){
		go("left");
	}else if(action === "tra top"){
		go("top");
	}else if(action === "tra rig"){
		go("right");
	}else if(action === "tra bot"){
		go("bottom");
	}else if(action === "mov lef"){
		document.getElementById("move-block").firstElementChild.className = "left";
		go("left");
	}else if(action === "mov top"){
		document.getElementById("move-block").firstElementChild.className = "top";
		go("top");
	}else if(action === "mov rig"){
		document.getElementById("move-block").firstElementChild.className = "right";
		go("right");
	}else if(action === "mov bot"){
		document.getElementById("move-block").firstElementChild.className = "bottom";
		go("bottom");
	}
}
//移动
function go(dir){
	var moveBlock = document.getElementById("move-block");
	if(typeof dir !== "string"){
		dir = moveBlock.firstElementChild.className;
	}
	if(dir === direction[0]){
		var top = parseInt(moveBlock.style.top);
		if(top <= 1){
			
			moveBlock.style.top = "415px";
		}else{
			moveBlock.style.top = top - 46 + "px";
		}
	}else if(dir === direction[1]){
		var left = parseInt(moveBlock.style.left);
		if(left >= 415){
			moveBlock.style.left = "1px";
		}else{
			moveBlock.style.left = left + 46 + "px";
		}
	}else if(dir === direction[2]){
		var top = parseInt(moveBlock.style.top);
		if(top >= 415){
			moveBlock.style.top = "1px";
		}else{
			moveBlock.style.top = top + 46 + "px";
		}
	}else if(dir === direction[3]){
		var left = parseInt(moveBlock.style.left);
		if(left <= 1){
			moveBlock.style.left = "415px";
		}else{
			moveBlock.style.left = left - 46 + "px";
		}
	}
}
//左转
function tunLef(){
	var block = document.getElementById("move-block").firstElementChild;
	var left_dir = ["top", "left", "bottom", "right", "top"];
	block.className = left_dir[left_dir.indexOf(block.className)+1];
}
//右转
function tunRig(){
	var block = document.getElementById("move-block").firstElementChild;
	var right_dir = ["top", "right", "bottom", "left", "top"];
	block.className = right_dir[right_dir.indexOf(block.className)+1];
}
//180度
function tunBac(){
	var block = document.getElementById("move-block").firstElementChild;
	var back_dir = ["top", "left", "bottom", "right", "top", "left"];
	block.className = back_dir[back_dir.indexOf(block.className)+2];
}
//其他思路：
//将红蓝块截为图片，移动图片，转动transform:rotate（CSS3）
//将三种方向存为数组，块状元素的className为数组内index+1