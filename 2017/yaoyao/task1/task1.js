function submitEvent(){
	EventUtil.preventDefault(event);
	var nameValue = document.getElementById("name").value;
	if(nameValue === ""){
		var elementP = document.getElementsByTagName("p");
		var pLen = elementP.length;
		for(var i = 0; i < pLen; i++){
			elementP[i].style.display = "none";
		}
		elementP[1].style.display = "block";
		document.getElementById("name").style.borderColor = "#dd0011";
	}
	else{
		if(nameValue.search(/[\u4e00-\u9fa5]/g) >-1){
			var len = nameValue.match(/[\u4e00-\u9fa5]/g).length + nameValue.length;
		}else{
			var len = nameValue.length;
		}
		if(len<4 || len>16 || nameValue.search(/\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5/) >-1){
			var elementP = document.getElementsByTagName("p");
			for(var i = 0; i < elementP.length; i++){
				elementP[i].style.display = "none";
			}
			elementP[2].style.display = "block";
			document.getElementById("name").style.borderColor = "#ff9800";
		}
		else{
			var elementP = document.getElementsByTagName("p");
			for(var i = 0; i < elementP.length; i++){
				elementP[i].style.display = "none";
			}
			elementP[3].style.display = "block";
			document.getElementById("name").style.borderColor = "#60ba49";
		}
	}
}
function addClickEvent(){
	EventUtil.addHandler(document.getElementById("button"), "click", submitEvent);
}
addClickEvent()