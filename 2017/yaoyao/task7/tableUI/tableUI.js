function createTable(){
	this.table = document.createElement("table");
	this.theads = null;
	this.tbody = null;
	this.sort = [];
	this.init();
}
createTable.prototype = {
	init:function(){
		document.body.insertBefore(this.table, document.body.firstChild);
		this.table.innerHTML = "<tbody></tbody>";
		this.tbody = this.table.firstElementChild;
	},
	addTableHead:function(head){
		var inner = "<thead><tr><th>";
		inner += head.join("</th><th><div class='top'></div><div class='bottom'></div>");
		inner += "</th></tr></thead>";
		this.sort.length = head.length;
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
		var k = 1;
		for(var i = 0; i<this.tbody.children.length; i++){
			this.tbody.children[i].style.top = k*31 +"px";
			k++;
		}
	},
	sortTable:function(n){
		var tdOrder = [];
		var j = 0;
		for(var i = 0; i < this.tbody.children.length; i++){
				var m = 0;
				var trChild = this.tbody.children[i].children;
				for(var k = 0; k<trChild.length; k++){
					if(m === n){
						tdOrder.push([j, parseInt(trChild[k].innerHTML)]);
						j++;
					}
					m++;
			}
		}
		var self = this;
		if(self.sort[n] === 1){
			tdOrder.sort(function(a,b){
				return a[1] - b[1];
			});
			for(var l = 0; l<self.sort.length; l++){
				self.sort[l] = 0;
			}
			self.sort[n] = -1;
		}else{
			tdOrder.sort(function(a,b){
				return b[1] - a[1];
			});
			for(var l = 0; l<self.sort.length; l++){
					self.sort[l] = 0;
			}
			self.sort[n] = 1;
		}
		var k = 1;
		for(var i = 0; i<tdOrder.length; i++){
			var m = 0;
			for(j = 0; j<this.tbody.children.length; j++){
				if(m === tdOrder[i][0]){
					this.tbody.children[j].style.top = k*31 + "px";
					k++;
					break;
				}
				m++;
			}
		}
	}
}