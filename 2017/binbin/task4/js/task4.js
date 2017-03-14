function getInputValue(){
	var input = document.getElementsByTagName("input")[0].value;
	if(isNaN(input)){
		alert("Please input a number!");
	}
	else{
		return input;
	}
}
function createNewDiv(input){
	var divElem = document.createElement("div");
	divElem.appendChild(document.createTextNode(input));
	return divElem;
}
function addDivEvent(){
	document.body.removeChild(this);
}
function addButtonClick(){
	//左侧入绑定事件
	document.getElementsByClassName("leftin")[0].onclick = function(){
		input = getInputValue();
		if(input){
		var arrDiv = document.getElementsByTagName("div");
		var divElem = createNewDiv(input);
			if(arrDiv.length){
				document.body.insertBefore(divElem, arrDiv[0]);
			}
			else{
				document.body.appendChild(divElem);
			}
			divElem.onclick = addDivEvent;
		}
		document.getElementsByTagName("input")[0].value = "";
	};
	//右侧入绑定事件
	document.getElementsByClassName("rightin")[0].onclick = function(){
		var input = getInputValue();
		if(input){
			var divElem = createNewDiv(input);
			document.body.appendChild(divElem);
			divElem.onclick = addDivEvent;
		}
		document.getElementsByTagName("input")[0].value = "";
	};
	//左侧出绑定事件
	document.getElementsByClassName("leftout")[0].onclick = function(){
		var arrDiv = document.getElementsByTagName("div");
		if(arrDiv.length){
			var value = arrDiv[0].innerHTML;
			document.body.removeChild(arrDiv[0]);
			alert(value);
		}
	};
	//右侧出绑定事件
	document.getElementsByClassName("rightout")[0].onclick = function(){
		var arrDiv = document.getElementsByTagName("div");
		if(arrDiv.length){
			var value = arrDiv[arrDiv.length - 1].innerHTML;
			var reomveElem = document.body.removeChild(arrDiv[arrDiv.length - 1]);
			alert(value);
		}
	};
}
addButtonClick();