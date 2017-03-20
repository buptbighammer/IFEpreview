var arr = new Array();
function getInputValue(){
	var value = document.getElementsByTagName("textarea")[0].value;
	var input = value.split(/[\s\n\r\，\,\、\t\ ]/);
	return input;
}
function createNewDiv(input){
	var divElem = document.createElement("div");
	divElem.appendChild(document.createTextNode(input));
	return divElem;
}
function createElement(splitValue){
	var div = document.getElementsByTagName("div")[0];
	div.innerHTML = arr.map(function(item){
		if(typeof splitValue != "undefined" && item.indexOf(splitValue) != -1){
			var itemGroup = item.split(splitValue).map(function(spanItem){
				return spanItem + "<span>"+ splitValue +"</span>";
			}).join("");
			return "<p>"+itemGroup.slice(0, itemGroup.lastIndexOf("<span>"))+"</p>";
		}else{
			return "<p>"+item+"</p>";
		}
	}).join("");
	Array.prototype.slice.call(div.childNodes, 0).forEach(function(x,index){
		x.onclick = function(i){
			return function(){
				div.removeChild(this);
				arr.splice(i,1);
			}
		}(index);
	});
}
function addDivEvent(){
	document.getElementsByTagName("div")[0].removeChild(this);
}
function addButtonClick(){
	//左侧入绑定事件
	document.getElementsByClassName("leftin")[0].onclick = function(){
		arr = getInputValue().concat(arr);
		createElement();
	};
	//右侧入绑定事件
	document.getElementsByClassName("rightin")[0].onclick = function(){
		arr = arr.concat(getInputValue());
		createElement();
	};
	//左侧出绑定事件
	document.getElementsByClassName("leftout")[0].onclick = function(){
		arr.shift();
		document.getElementsByTagName("div")[0].firstChild.onclick = null;
		createElement();
	};
	//右侧出绑定事件
	document.getElementsByClassName("rightout")[0].onclick = function(){
		arr.pop();
		document.getElementsByTagName("div")[0].lastChild.onclick = null;
		createElement();
	};
	//查询按钮绑定事件
	document.getElementsByClassName("search")[0].onclick = function(){
		var value = document.getElementsByTagName("input")[0].value;
		createElement(value);
	};
}
addButtonClick();