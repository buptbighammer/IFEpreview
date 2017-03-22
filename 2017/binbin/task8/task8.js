var arr = [];
var timer;
function resetFun(){
	clearInterval(timer);
	arr = [];
	Array.prototype.slice.call(document.getElementsByTagName("div")).forEach(function(item){
		item.style.backgroundColor = "";
	});
}
function matchValue(node, value){
	if(node.firstChild.nodeType == 3 && node.firstChild.nodeValue.trim() === value){
		node.style.backgroundColor = "pink";
		arr = [];
		return true;
	}
	return false;
}
function display(value){
	var i=0;
	if(typeof value === "string"){
		if(matchValue(arr[i], value)){
			return;
		}
	}
	arr[i].style.backgroundColor = "blue";
	timer = setInterval(function(){
		i++;
		if(i<arr.length){
			arr[i-1].style.backgroundColor = "";
			if(typeof value === "string"){
				if(matchValue(arr[i], value)){
					clearInterval(timer);
					return;
				}
			}
			arr[i].style.backgroundColor = "blue";
		}
		else{
			arr[i-1].style.backgroundColor = "";
			if(typeof value === "string"){
				alert("can't find result!");
			}
			clearInterval(timer);
			arr = [];
		}
	},500);
}
function _deepFirst(node){
	if(node){
		arr.push(node);
		var firstChild = node.firstElementChild;
		while(firstChild){
			_deepFirst(firstChild);
			firstChild = firstChild.nextElementSibling;
		}
	}
}
function deepFirst(value){
	resetFun();
	var root = document.getElementsByTagName("div")[0];
	_deepFirst(root);
	display(value);
}
function _breadthFirst(node){
	if(node){
		arr.push(node);
		var i = -1;
		do{
			i++;
			node = arr[i];
			var firstChild = node.firstElementChild;
			while(firstChild){
				arr.push(firstChild);
				firstChild = firstChild.nextElementSibling;
			}
		}while(node != arr[arr.length-1])
	}
}
function breadthFirst(value){
	resetFun();
	var root = document.getElementsByTagName("div")[0];
	_breadthFirst(root);

	display(value);
}
function bindDF(){
	var value = document.getElementsByTagName("input")[0].value;
	deepFirst(value);
}
function bindBF(){
	var value = document.getElementsByTagName("input")[0].value;
	breadthFirst(value);
}
function addClickEvent(){
	EventUtil.addHandler(document.getElementById("deepFirst"), "click", deepFirst);
	EventUtil.addHandler(document.getElementById("breadthFirst"), "click", breadthFirst);
	EventUtil.addHandler(document.getElementById("searchDF"), "click", bindBF);
	EventUtil.addHandler(document.getElementById("searchBF"), "click", bindBF);
}
addClickEvent();