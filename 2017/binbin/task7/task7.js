var arr = [];
var time;
function reset(){
	clearInterval(time);
	var nodeList = document.getElementsByTagName("div");
	for(var i = 0; i<nodeList.length;i++){
		nodeList[i].style.background = "";
	}
	arr=[];
}
function backGroundAction(){
	arr[0].style.background = "blue";
	var i=0;
	var len = arr.length;
	time = setInterval(function(){
		i++;
		if(i<len){
			arr[i-1].style.background = "";
			arr[i].style.background = "blue";
		}
		else{
			arr[len-1].style.background = "";
			clearInterval(time);
			arr= [];
		}
	},500);
	
}
//nodeList默认为前序遍历，将nodeList转为数组
function preOrder(){
	reset();
	var nodeList = document.getElementsByTagName("div");
	arr = Array.prototype.slice.call(nodeList,0);
	backGroundAction();
}
//中序遍历迭代，将左子节点迭代，父节点入数组，右子节点迭代
function _order(node){
	if(node){
		_order(node.firstElementChild);
		arr.push(node);
		_order(node.lastElementChild);
	}
}
//迭代的方法中序遍历
function order(){
	reset();
	var nodeList = document.getElementsByTagName("div");
	_order(nodeList[0]);
	backGroundAction();
}
//后续遍历迭代，将左子节点迭代，右子节点迭代，父节点入数组
function _posterior(node){
	if(node){
		_posterior(node.firstElementChild);
		_posterior(node.lastElementChild);
		arr.push(node);
	}
}
//迭代的方法后续遍历
function posterior(){
	reset();
	var nodeList = document.getElementsByTagName("div");
	_posterior(nodeList[0]);
	backGroundAction();
}
function addOnclickEvent(){
	document.getElementById("pre").onclick = preOrder;
	document.getElementById("order").onclick = order;
	document.getElementById("posterior").onclick = posterior;
}
addOnclickEvent();