function createTable(){
	this.table = document.createElement("table");
	this.tbody = null;
	this.sort = [];
	this.init();
}
createTable.prototype = {
	init:function(){
		document.body.appendChild(this.table);
		this.table.innerHTML = "<tbody></tbody>";
		this.tbody = this.table.firstElementChild;
	},
	addTableHead:function(head){
		var inner = "<thead><tr><th>";
		inner += head.join("</th><th><div class='top'></div><div class='bottom'></div>");
		inner += "</th></tr></thead>";
		this.sort.length = head.length;
		this.table.innerHTML = inner + this.table.innerHTML;
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
		for(var i = 0; i<this.tbody.childNodes.length; i++){
			if(this.tbody.childNodes[i].nodeType === 1){
				this.tbody.childNodes[i].style.top = k*31 +"px";
				k++;
			}
		}
	},
	sortTable:function(n){
		var tdOrder = [];
		var j = 0;
		for(var i = 0; i < this.tbody.childNodes.length; i++){
			if(this.tbody.childNodes[i].nodeName.toLowerCase() === "tr"){
				var m = 0;
				var trChild = this.tbody.childNodes[i].childNodes;
				for(var k = 0; k<trChild.length; k++){
					if(trChild[k].nodeType === 1){
						if(m === n){
							tdOrder.push([j, parseInt(trChild[k].innerHTML)]);
							j++;
						}
						m++;
					}
				}
			}
		}
		var self = this;
		if(self.sort[n] === 1){
			tdOrder.sort(function(a,b){
				var anum = a[1];
				var bnum = b[1];
			
				return anum - bnum;
			});
			for(var l = 0; l<self.sort.length; l++){
				self.sort[l] = 0;
			}
			self.sort[n] = -1;
		}else{
			tdOrder.sort(function(a,b){
				var anum = a[1];
				var bnum = b[1];
				return bnum - anum;
			});
			for(var l = 0; l<self.sort.length; l++){
					self.sort[l] = 0;
			}
			self.sort[n] = 1;
		}
		var k = 1;
		for(var i = 0; i<tdOrder.length; i++){
			var indexAndValue = tdOrder[i];
			var m = 0;
			for(j = 0; j<this.tbody.childNodes.length; j++){
				if(this.tbody.childNodes[j].nodeType === 1){
					if(m === indexAndValue[0]){
						this.tbody.childNodes[j].style.top = k*31 + "px";
						k++;
						break;
					}
					m++;
				}
			}
		}
	}
}