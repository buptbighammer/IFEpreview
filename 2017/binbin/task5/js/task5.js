function getInputValue(){
	var input = document.getElementsByTagName("input")[0].value;
	if(isNaN(input) || input == ""){
		alert("Please input a number!");
	}
	else if(input <10 || input > 100){
		alert("Please input a number between 10 and 100!");
	}
	else
	{
		return input;
	}
}
function createNewElement(){
	var divElem = document.createElement("p");
	return divElem;
}
function addEvent(){
	this.parentNode.removeChild(this);
}
function checkElementNumber(){
	if(document.getElementsByTagName("div")[0].childNodes.length >= 60){
		alert("the queue has member more than 60!");
	}
}
function sortBubble(element1, element2){
	var height1 = element1.offsetHeight;
	var height2 = element2.offsetHeight;
	if(height1 > height2){
		element1.style.height = height2 + "px";
		element2.style.height = height1 + "px";
	}
	//element1.style.background = "red";
	//element2.style.background = "red";
}
function addButtonClick(){
	//左侧入绑定事件
	document.getElementsByClassName("leftin")[0].onclick = function(){
		input = getInputValue();
		if(input){
			checkElementNumber();
			var arrDiv = document.getElementsByTagName("div")[0];
			var newElem = createNewElement(input);
			arrDiv.insertBefore(newElem, arrDiv.firstChild);
			newElem.onclick = addEvent;
			newElem.style.height = input + "px";
		}
		document.getElementsByTagName("input")[0].value = "";
	};
	//右侧入绑定事件
	document.getElementsByClassName("rightin")[0].onclick = function(){
		var input = getInputValue();
		if(input){
			checkElementNumber();
			var newElem = createNewElement(input);
			document.getElementsByTagName("div")[0].appendChild(newElem);
			newElem.onclick = addEvent;
			newElem.style.height = input + "px";
		}
		document.getElementsByTagName("input")[0].value = "";
	}
	//左侧出绑定事件
	document.getElementsByClassName("leftout")[0].onclick = function(){
		var arrDiv = document.getElementsByTagName("div")[0];
		if(arrDiv.childNodes.length > 0)
		{
			var value = arrDiv.firstChild.innerHTML;
			arrDiv.removeChild(arrDiv.firstChild);
			alert(value);
		}
	};
	//右侧出绑定事件
	document.getElementsByClassName("rightout")[0].onclick = function(){
		var arrDiv = document.getElementsByTagName("div")[0];
		if(arrDiv.childNodes){
			var value = arrDiv.lastChild.innerHTML;
			var reomveElem = arrDiv.removeChild(arrDiv.lastChild);
			alert(value);
		}
	};
	document.getElementsByClassName("sort")[0].onclick = function(){
		var divChildren = document.getElementsByTagName("div")[0].childNodes;
		var len = divChildren.length;
		for(var i = 0; i < len; i++){
			for(var j = 0; j < len-1-i; j++){
				//window.setTimeout("sortBubble(" + divChildren[i] + ", " + divChildren[j] + ")", 100);
				window.setTimeout(function(i,j)
				{

						return function()
						{
							divChildren[j].style.background = "green";
							divChildren[j+1].style.background = "green";
							sortBubble(divChildren[j], divChildren[j+1]);
							divChildren[j].style.background = "blue";
							divChildren[j+1].style.background = "blue";
							if(j == len-2-i){
								divChildren[len-1-i].style.background = "red";
							}
							if(j==0 && i==len-2){
								divChildren[0].style.background = "red";
							}
						}
					}(i,j),((i+1)*10+j)*200);
			}
		}
	};
}
addButtonClick();