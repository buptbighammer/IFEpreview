function backGroundAction(arr){
	for(var i=0; i<arr.length;i++){
		setTimeout(function(i){
			return function(){
				arr[i].style.background = "blue";
			}
		}(i),i*500);
		setTimeout(function(i){
			return function(){
				arr[i].style.background = "";
			}
		}(i),i*500+499);
	}
}
//nodeList默认为前序遍历，将nodeList转为数组
function preOrder(){
	var nodeList = document.getElementsByTagName("div");
	var arr = Array.prototype.slice.call(nodeList,0);
	backGroundAction(arr);
}
//中序遍历迭代，将左子节点迭代，父节点入数组，右子节点迭代
function _order(node,arr){
	if(node){
		_order(node.firstElementChild,arr);
		arr.push(node);
		_order(node.lastElementChild,arr);
	}
}
//迭代的方法中序遍历
function order(){
	var nodeList = document.getElementsByTagName("div");
	var arr = new Array();
	_order(nodeList[0],arr);
	backGroundAction(arr);
}
//后续遍历迭代，将左子节点迭代，右子节点迭代，父节点入数组
function _posterior(node,arr){
	if(node){
		_posterior(node.firstElementChild,arr);
		_posterior(node.lastElementChild,arr);
		arr.push(node);
	}
}
//迭代的方法后续遍历
function posterior(){
	var nodeList = document.getElementsByTagName("div");
	var arr = new Array();
	_posterior(nodeList[0],arr);
	backGroundAction(arr);
}
function addOnclickEvent(){
	document.getElementById("pre").onclick = preOrder;
	document.getElementById("order").onclick = order;
	document.getElementById("posterior").onclick = posterior;
}
addOnclickEvent();