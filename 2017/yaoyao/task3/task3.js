addEvent();
function addEvent(){
	EventUtil.addHandler(document.getElementById("student"), "change", showSchool);
	EventUtil.addHandler(document.getElementById("social"), "change", showSocial);
	EventUtil.addHandler(document.getElementById("city"), "change", showCity);
}
function showSchool(){
	showAndHidden("forstudent", "shanghai", "tianjin", "forsocial");
}
function showSocial(){
	showAndHidden("forsocial", "forstudent");
}
function showCity(){
	var city = document.getElementById("city").value;
	switch(city){
		case "BJS":
			showAndHidden("beijing", "shanghai", "tianjin");
			break;
		case "SHA":
			showAndHidden("shanghai", "beijing", "tianjin");
			break;
		case "TJ":
			showAndHidden("tianjin", "beijing", "shanghai");
			break;
		default:
			showAndHidden("beijing", "shanghai", "tianjin");
	}
}
function showAndHidden(){
	for(var i = 0; i < arguments.length; i++){
		if(i === 0){
			document.getElementById(arguments[i]).style.display = "block";
		}else{
			document.getElementById(arguments[i]).style.display = "none";
		}
	}
}