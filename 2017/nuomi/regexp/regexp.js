function addEvent(){
	EventUtil.addHandler(document.getElementById("tel-button"), "click", testTel);
	EventUtil.addHandler(document.getElementById("str-button"), "click", testStr);
}
function testTel(){
	 /* 移动：134,135,136,137,138,139,147,150,151,152,157,158,159,170,178,182,183,184,187,188
     * 联通：130,131,132,145,152,155,156,1709,171,176,185,186
     * 电信：133,134,153,1700,177,180,181,189
     */
	var value = document.getElementById("tel").value;
	if(/^1([34578])\d{9}$/.test(value)){
		alert("right telphone number");
	}else{
		alert("error telphone number");
	}
}
function testStr(){
	var value = document.getElementById("str").value;
	if(/\b(\w+)\b\s+\1\b/g.test(value)){
		alert("right string");
	}else{
		alert("error string");
	}
}
addEvent();