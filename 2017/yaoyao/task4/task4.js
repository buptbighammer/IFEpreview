var direction = ["top", "left", "bottom", "right"];
addEvent();
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
	}
}
function go(){
	var moveBlock = document.getElementById("move-block");
	if(moveBlock.firstElementChild.className === direction[0]){
		if(moveBlock.parentNode.id === "row0"){
			var nextNode = document.querySelector("#row9 ."+moveBlock.className);
			move(moveBlock, nextNode);
		}else{
			var newId = parseInt(moveBlock.parentNode.id.substr(3)) - 1;
			var nextNode = document.querySelector("#row"+ newId +" ."+ moveBlock.className);
			move(moveBlock, nextNode);
		}
	}else if(moveBlock.firstElementChild.className === direction[2]){
		if(moveBlock.parentNode.id === "row9"){
			var nextNode = document.querySelector("#row0 ."+moveBlock.className);
			move(moveBlock, nextNode);
		}else{
			var newId = parseInt(moveBlock.parentNode.id.substr(3)) + 1;
			var nextNode = document.querySelector("#row"+ newId +" ."+ moveBlock.className);
			move(moveBlock, nextNode);
		}
	}else if(moveBlock.firstElementChild.className === direction[1]){
		if(moveBlock.className === "col0"){
			var nextNode = document.querySelector("#" + moveBlock.parentNode.id + " .col9");
			move(moveBlock, nextNode);
		}else{
			var newClass = parseInt(moveBlock.className.substr(3)) - 1;
			var nextNode = document.querySelector("#" + moveBlock.parentNode.id + " .col" + newClass);
			move(moveBlock, nextNode);
		}
	}else if(moveBlock.firstElementChild.className === direction[3]){
		if(moveBlock.className === "col9"){
			var nextNode = document.querySelector("#" + moveBlock.parentNode.id + " .col0");
			move(moveBlock, nextNode);
		}else{
			var newClass = parseInt(moveBlock.className.substr(3)) + 1;
			var nextNode = document.querySelector("#" + moveBlock.parentNode.id + " .col" + newClass);
			move(moveBlock, nextNode);
		}
	}
}
function move(moveBlock, nextNode){
	nextNode.id = "move-block";
	nextNode.innerHTML = moveBlock.innerHTML;
	moveBlock.innerHTML = "";
	moveBlock.id = "";
}
function tunLef(){
	var block = document.getElementById("move-block").firstElementChild;
	switch(block.className){
		case direction[0]:
		block.className = direction[1];
		break;
		case direction[1]:
		block.className = direction[2];
		break;
		case direction[2]:
		block.className = direction[3];
		break;
		case direction[3]:
		block.className = direction[0];
		break;
	}
}
function tunRig(){
	var block = document.getElementById("move-block").firstElementChild;
	switch(block.className){
		case direction[0]:
		block.className = direction[3];
		break;
		case direction[3]:
		block.className = direction[2];
		break;
		case direction[2]:
		block.className = direction[1];
		break;
		case direction[1]:
		block.className = direction[0];
		break;
	}
}
function tunBac(){
	var block = document.getElementById("move-block").firstElementChild;
	switch(block.className){
		case direction[0]:
		block.className = direction[2];
		break;
		case direction[3]:
		block.className = direction[1];
		break;
		case direction[2]:
		block.className = direction[0];
		break;
		case direction[1]:
		block.className = direction[3];
		break;
	}
}