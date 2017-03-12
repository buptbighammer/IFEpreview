function tab(){
	var title = document.getElementsByClassName("fourth")[0].getElementsByTagName("h3");
	var block = document.getElementsByClassName("fourth")[0].getElementsByTagName("div");
	for(var i = 0; i< title.length; i++){
		title[i].onclick = (function(i){
			return function(){
				if(title[i].className.indexOf("up") == -1){
					title[i].className += " up";
					block[i].className = "block";
				}
				for(var j = 0; j < title.length; j++){
					if(j != i && title[j].className.indexOf("up") != -1){
						pos = title[j].className.indexOf("up");
						title[j].className = title[j].className.substr(0,pos) + title[j].className.substr(pos+2);
						block[j].className = "";
					}
				}
			}
		})(i);
	}
}
tab()