function touch(){
	var layout = document.getElementById("layout");
	layout.style.display = "none";
	var mask = new layOutMask(layout);
	EventUtil.addHandler(document.getElementById("bottom"), "click", function(){
		mask.show();});
	EventUtil.addHandler(document.forms[0].firstElementChild, "click", function(){
		mask.hide();});
	EventUtil.addHandler(document.forms[0].lastElementChild, "click", function(){
		mask.hide();});
}
touch();