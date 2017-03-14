function addButtonClick(){
	document.getElementsByClassName("leftin")[0].onclick = function(event){
		event.preventDefault();
		var input = parseInt(document.getElementsByTagName("input")[0].value);
		if(typeof input === "number" && !isNaN(input)){
			var arrDiv = document.getElementsByTagName("div");
			var divElem = document.createElement("div");
			divElem.appendChild(document.createTextNode(input));
			if(arrDiv.length){
				document.body.insertBefore(divElem, arrDiv[0]);
			}
			else{
				document.body.appendChild(divElem);
			}
			divElem.onclick = function(){
				document.body.removeChild(this);
			}
		}
	};
	document.getElementsByClassName("rightin")[0].onclick = function(event){
		event.preventDefault();
		var input = parseInt(document.getElementsByTagName("input")[0].value);
		if(typeof input === "number" && !isNaN(input)){
			var divElem = document.createElement("div");
			divElem.appendChild(document.createTextNode(input));
			document.body.appendChild(divElem);
			divElem.onclick = function(){
				document.body.removeChild(this);
			}
		}
	};
	document.getElementsByClassName("leftout")[0].onclick = function(event){
		event.preventDefault();
		var arrDiv = document.getElementsByTagName("div");
		if(arrDiv.length){
			var value = arrDiv[0].innerHTML;
			document.body.removeChild(arrDiv[0]);
			alert(value);
		}
	};
	document.getElementsByClassName("rightout")[0].onclick = function(event){
		event.preventDefault();
		var arrDiv = document.getElementsByTagName("div");
		if(arrDiv.length){
			var value = arrDiv[arrDiv.length - 1].innerHTML;
			var reomveElem = document.body.removeChild(arrDiv[arrDiv.length - 1]);
			alert(value);
		}
	};
}
addButtonClick();