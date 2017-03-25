function nameFoucs(){
	var elem = EventUtil.getTarget(event).parentNode.lastElementChild;
	elem.innerHTML = "必填，长度为4~16个字符";
	elem.style.color = "#ccc";
}
function pwdFoucs(){
	var elem = EventUtil.getTarget(event).parentNode.lastElementChild;
	elem.innerHTML = "必填，长度为6~16个字符，不能包含空格，必须包含非数字字符";
	elem.style.color = "#ccc";
}
function pwdRepeatFoucs(){
	var elem = EventUtil.getTarget(event).parentNode.lastElementChild;
	elem.innerHTML = "必填，请再次输入密码";
	elem.style.color = "#ccc";
}
function emailFoucs(){
	var elem = EventUtil.getTarget(event).parentNode.lastElementChild;
	elem.innerHTML = "必填，请输入您常用的邮箱";
	elem.style.color = "#ccc";
}
function telFoucs(){
	var elem = EventUtil.getTarget(event).parentNode.lastElementChild;
	elem.innerHTML = "必填，可通过该手机号码快速找回密码";
	elem.style.color = "#ccc";
}
function nameBlur(){
	var elem = document.getElementById("name");
	var pelem = elem.parentNode.lastElementChild;
	var ret = false;
	elem.style.borderColor = "red";
	pelem.style.color = "red";
	if(elem.value.length === 0){
		pelem.innerHTML = "名称不能为空";
	}else{
		if(elem.value.search(/[\u4e00-\u9fa5]/g) >-1){
			var len = elem.value.match(/[\u4e00-\u9fa5]/g).length + elem.value.length;
		}else{
			var len = elem.value.length;
		}
		if(len<4 || len>16){
			pelem.innerHTML = "长度为4~16个字符";
		}
		else{
			elem.style.borderColor = "lightgreen";
			pelem.style.color = "lightgreen";
			pelem.innerHTML = "名称格式正确";
			ret = true;
		}
	}
	return ret;
}
function pwdBlur(){
	var elem = document.getElementById("pwd");
	var pelem = elem.parentNode.lastElementChild;
	elem.style.borderColor = "red";
	pelem.style.color = "red";
	var ret = false;
	if(elem.value.length === 0){
		pelem.innerHTML = "密码不能为空";
	}else if(elem.value.length > 16 || elem.value.length < 6){
		pelem.innerHTML = "长度为6~16个字符";
	}else if(/^\d{6,16}$/.test(elem.value)){
		pelem.innerHTML = "密码不能为纯数字";
	}else if(/\s/.test(elem.value)){
		pelem.innerHTML = "密码不能包含空格";
	}else{
		elem.style.borderColor = "lightgreen";
		pelem.style.color = "lightgreen";
		pelem.innerHTML = "密码格式正确";
		ret = true;
	}
	return ret;
}
function pwdRepeatBlur(){
	var elem = document.getElementById("repeat-pwd");
	var pelem = elem.parentNode.lastElementChild;
	var ret = false;
	elem.style.borderColor = "red";
	pelem.style.color = "red";
	pwdElem = document.getElementById("pwd");
	if(elem.value.length === 0){
		pelem.innerHTML = "请再次输入密码";
	}
	else if(elem.value !== pwdElem.value){
		pelem.innerHTML = "密码不一致";
	}else if(pwdElem.parentNode.lastElementChild.innerHTML.indexOf("密码格式正确") < 0){
		pelem.innerHTML = "密码格式错误";
	}else{
		elem.style.borderColor = "lightgreen";
		pelem.style.color = "lightgreen";
		pelem.innerHTML = "密码格式正确";
		ret = true;
	}
	return ret;
}
function emailBlur(){
	var elem = document.getElementById("email");
	var pelem = elem.parentNode.lastElementChild;
	var ret = false;
	elem.style.borderColor = "red";
	pelem.style.color = "red";
	if(elem.value.length === 0){
		pelem.innerHTML = "邮箱地址不能为空";
	}
	else if(/^(\w)+(\.\w+)*@(\w)+(\.\w+)+$/.test(elem.value)){
		elem.style.borderColor = "lightgreen";
		pelem.style.color = "lightgreen";
		pelem.innerHTML = "邮箱格式正确";
		ret = true;
	}else{
		pelem.innerHTML = "邮箱格式错误";
	}
	return ret;
}
function telBlur(){
	var elem = document.getElementById("tel");
	var pelem = elem.parentNode.lastElementChild;
	var ret = false;
	elem.style.borderColor = "red";
	pelem.style.color = "red";
	if(elem.value.length === 0){
		pelem.innerHTML = "手机号不能为空";
	}
	else if(/^[\d]{4}-*[\d]{4}-*[\d]{3}$/.test(elem.value)){
		elem.style.borderColor = "lightgreen";
		pelem.style.color = "lightgreen";
		pelem.innerHTML = "手机格式正确";
		ret = true;
	}else{
		pelem.innerHTML = "手机格式错误";
	}
	return ret;
}
function commitClick(){
	EventUtil.preventDefault(event);
	if(nameBlur() && pwdBlur() && pwdRepeatBlur() && emailBlur() && telBlur()){
		alert("提交成功");
	}else{
		alert("提交失败");
	}
}
function addEvent(){
	EventUtil.addHandler(document.getElementById("name"), "focus", nameFoucs);
	EventUtil.addHandler(document.getElementById("pwd"), "focus", pwdFoucs);
	EventUtil.addHandler(document.getElementById("repeat-pwd"), "focus", pwdRepeatFoucs);
	EventUtil.addHandler(document.getElementById("email"), "focus", emailFoucs);
	EventUtil.addHandler(document.getElementById("tel"), "focus", telFoucs);
	EventUtil.addHandler(document.getElementById("name"), "blur", nameBlur);
	EventUtil.addHandler(document.getElementById("pwd"), "blur", pwdBlur);
	EventUtil.addHandler(document.getElementById("repeat-pwd"), "blur", pwdRepeatBlur);
	EventUtil.addHandler(document.getElementById("email"), "blur", emailBlur);
	EventUtil.addHandler(document.getElementById("tel"), "blur", telBlur);
	EventUtil.addHandler(document.getElementById("commit"), "click", commitClick);
}
addEvent();