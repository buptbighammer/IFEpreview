function getTable(){
	var tableElem = new createTable();
	tableElem.addTableHead(["姓名", "数学", "语文", "英语", "总分"]);
	tableElem.addRows([["小明", "80", "90", "70", "240"],
	 ["小红", "90", "60", "90", "240"], 
	 ["小亮", "60", "100", "70", "230"]]);
	var n = 0;
	for(var i = 0; i<tableElem.theads.length; i++){
		if(tableElem.theads[i].nodeType === 1){
			if(n > 0){
				EventUtil.addHandler(tableElem.theads[i], "click", (function(i){
					return function(){
						tableElem.sortTable(i);
					}
				})(i));
			}
			n++;
		}
	}
}
getTable();