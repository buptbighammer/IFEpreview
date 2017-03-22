var arr = [];
var timer;
var clickElement;
var matched = false;
function addClass(node,classname){
	if(node.className === ""){
		node.className = classname;
	}else{
		node.className += " " + classname;
	}
}
function removeClass(node, classname){
	oldName = node.className;
	if(oldName === classname){
		node.className = "";
	}else{
		index = oldName.indexOf(classname);
		if(index == 0){
			node.className = oldName.substr(classname.length+1);
		}else if(index > 0){
			node.className = oldName.substr(0, index) + oldName.substr(index+classname.length+1);
		}
	}
}
function resetFun(){
	clearInterval(timer);
	arr = [];
	Array.prototype.slice.call(document.getElementsByTagName("div")).forEach(function(item){
		removeClass(item, "select");
		removeClass(item, "found");
		removeClass(item, "click");
	});
}
function matchValue(node, value){
	if(node.firstChild && node.firstChild.nodeType == 3 && node.firstChild.nodeValue.trim() === value){
		addClass(node, "found");
		matched = true;
		return true;
	}
	return false;
}
function display(value){
	var i=0;
	if(value.length > 0){
		matchValue(arr[i], value);
	}
	addClass(arr[i], "select");
	timer = setInterval(function(){
		i++;
		if(i<arr.length){
			removeClass(arr[i-1], "select");
			if(value.length > 0){
				matchValue(arr[i], value);
			}
			addClass(arr[i], "select");;
		}else{
			removeClass(arr[i-1], "select");
			if(typeof value === "string" && matched === false){
				alert("can't find result!");
			}
			clearInterval(timer);
			matched = false;
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
		var i = 0;
		while(i < arr.length){
			node = arr[i];
			var firstChild = node.firstElementChild;
			while(firstChild){
				arr.push(firstChild);
				firstChild = firstChild.nextElementSibling;
			}
			i++;
		}
	}
}
function breadthFirst(value){
	resetFun();
	var root = document.getElementsByTagName("div")[0];
	_breadthFirst(root);

	display(value);
}
function bindDF(){
	var value = document.getElementById("findValue").value;
	deepFirst(value);
}
function bindBF(){
	var value = document.getElementById("findValue").value;
	breadthFirst(value);
}
function divClick(){
	resetFun();
	clickElement = EventUtil.getTarget(event);
	addClass(clickElement, "click");
}
function deleteElement(){
	if(clickElement && clickElement.className.indexOf("click") >-1){
		EventUtil.removeHandler(clickElement, "click", divClick);
		clickElement.parentNode.removeChild(clickElement);
	}
	resetFun();
}
function addElement(){
	clearInterval(timer);
	arr = [];
	Array.prototype.slice.call(document.getElementsByTagName("div")).forEach(function(item){
		removeClass(item, "select");
		removeClass(item, "found");
	});
	if(clickElement && clickElement.className.indexOf("click") >-1){
		clickElement.innerHTML += "<div>" + document.getElementById("addValue").value + "</div>";
	}
}
function addClickEvent(){
	EventUtil.addHandler(document.getElementById("deepFirst"), "click", deepFirst);
	EventUtil.addHandler(document.getElementById("breadthFirst"), "click", breadthFirst);
	EventUtil.addHandler(document.getElementById("searchDF"), "click", bindBF);
	EventUtil.addHandler(document.getElementById("searchBF"), "click", bindBF);
	Array.prototype.slice.call(document.getElementsByTagName("div"),0).forEach(function(item){
		EventUtil.addHandler(item, "click", divClick);
	});
	EventUtil.addHandler(document.getElementById("delete"), "click", deleteElement);
	EventUtil.addHandler(document.getElementById("add"), "click", addElement);
}
addClickEvent();