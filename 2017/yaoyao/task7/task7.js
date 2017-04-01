function getTable(){
	var tableElem = new createTable();
	tableElem.addTableHead(["姓名", "数学", "语文", "英语", "总分"]);
	tableElem.addRows([["小明", "80", "90", "70", "240"],
	 ["小红", "90", "60", "90", "240"], 
	 ["小亮", "60", "100", "70", "230"]]);
	var thead = tableElem.table.firstElementChild;
	var n = 0;
	var tth = thead.firstElementChild;
	for(var i = 0; i<tth.childNodes.length; i++){
		if(tth.childNodes[i].nodeType === 1){
			if(n > 0){
				EventUtil.addHandler(tth.childNodes[i], "click", (function(n){
					return function(){
						tableElem.sortTable(n);
					}
				})(n));
			}
			n++;
		}
	}
}
getTable();