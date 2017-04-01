function layOutMask(layoutElem) {
	this.layoutElem = layoutElem;
	this.maskElem = null;
	this.init();
}
layOutMask.prototype = {
	addMouseEvent: function(node) {
		EventUtil.addHandler(node, "mousedown", function() {
			EventUtil.stopPropagation(event);
			EventUtil.preventDefault(event);
			var disX = event.clientX - node.parentNode.offsetLeft;
			var disY = event.clientY - node.parentNode.offsetTop;
			var move = function() {
				var x = event.clientX - disX;
				var y = event.clientY - disY;
				x = x > 0 ? x : 0;
				y = y > 0 ? y : 0;
				if (x > window.screen.availWidth - node.parentNode.offsetWidth) {
					x = window.screen.availWidth - node.parentNode.offsetWidth;
				}
				if (y > window.screen.availHeight - node.parentNode.offsetHeight) {
					y = window.screen.availHeight - node.parentNode.offsetHeight;
				}
				node.parentNode.style.left = x + "px";
				node.parentNode.style.top = y + "px";
			};
			EventUtil.addHandler(node, "mousemove", move);
			EventUtil.addHandler(node, "mouseup", function(event) {
				EventUtil.stopPropagation(event);
				EventUtil.preventDefault(event);
				EventUtil.removeHandler(node, "mousemove", move);
			});

		});
	},
	init: function() {
		this.maskElem = document.createElement("div");
		this.layoutElem.style.position = "fixed";
		this.layoutElem.style.top = "50%";
		this.layoutElem.style.left = "50%";
		this.layoutElem.style.transform = "translate(-50%, -50%)";
		this.layoutElem.style.opacity = "1";
		this.layoutElem.style.zIndex = "999";
		this.maskElem.style.width = window.screen.availWidth + "px";
		this.maskElem.style.height = window.screen.availHeight + "px";
		this.maskElem.style.opacity = "0.5";
		this.maskElem.style.filter = "alpha(opacity=50)";
		this.maskElem.style.backgroundColor = "#ccc";
		this.maskElem.style.display = "none";
		this.maskElem.style.position = "fixed";
		this.maskElem.style.top = "50%";
		this.maskElem.style.left = "50%";
		this.maskElem.style.transform = "translate(-50%, -50%)";
		document.body.insertBefore(this.maskElem, this.layoutElem);
		EventUtil.addHandler(this.maskElem, "click", function() {
			EventUtil.preventDefault(event);
			this.style.display = "none";
			this.nextElementSibling.style.display = "none";
		});
		EventUtil.addHandler(this.layoutElem, "click", function(event) {
			EventUtil.stopPropagation(event);
		});
		this.layoutElem.firstElementChild.style.cursor = "move";
		this.addMouseEvent(this.layoutElem.firstElementChild);
	},
	show:function(){
		this.layoutElem.style.display = "block";
		this.maskElem.style.display = "block";
	},
	hide:function(){
		EventUtil.preventDefault(event);
		this.layoutElem.style.display = "none";
		this.maskElem.style.display = "none";
	}
}