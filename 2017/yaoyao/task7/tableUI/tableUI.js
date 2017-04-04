function createTable(){
	this.table = document.createElement("table");
	this.theads = null;
	this.tbody = null;
	this.init();
}
createTable.prototype = {
	init:function(){
		document.body.insertBefore(this.table, document.body.firstChild);
		this.table.innerHTML = "<tbody></tbody>";
	},
	addTableHead:function(head){
		var inner = "<thead><tr><th>";
		inner += head.join("</th><th><div class='top'></div><div class='bottom'></div>");
		inner += "</th></tr></thead>";
		this.table.innerHTML = inner + this.table.innerHTML;
		this.theads = this.table.firstElementChild.firstElementChild.childNodes;
	},
	addRows:function(rows){
		var inner = "";
		for(var i = 0; i<rows.length; i++){
			inner += "<tr><td>";
			inner += rows[i].join("</td><td>");
			inner += "</td></tr>";
		}
		this.table.lastElementChild.innerHTML += inner;
		this.tbody = this.table.lastElementChild;
		var tobdyTr = this.tbody.getElementsByTagName("tr");
		for(var i = 0; i<tobdyTr.length; i++){
			tobdyTr[i].style.top = (i+1)*31 +"px";
		}
	},
	sortTable:function(n, order){
		var tdOrder = [];
		var tobdyTr = this.tbody.getElementsByTagName("tr");
		for(var i = 0; i < tobdyTr.length; i++){
			tdOrder.push([i, parseInt(tobdyTr[i].getElementsByTagName("td")[n].innerHTML)]);
		}
		if(order === "up"){
			tdOrder.sort(function(a,b){
				return a[1] - b[1];
			});
		}else{
			tdOrder.sort(function(a,b){
				return b[1] - a[1];
			});
		}
		var k = 1;
		for(var i = 0; i<tdOrder.length; i++){
			tobdyTr[tdOrder[i][0]].style.top = k*31 + "px";
			k++;
		}
	}
}