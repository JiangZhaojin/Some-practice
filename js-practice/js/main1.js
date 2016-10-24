function isArray(arr){
	return Object.prototype.toString.call(arr).slice(8, -1) === 'Array';
}
function cloneObject(o){
    var obj;
    if (Object.prototype.toString.call(o).slice(8,-1) === 'Array') {
    	obj = [];
    } else if (Object.prototype.toString.call(o).slice(8, -1) === 'Object') {
    	obj = {};
    } else {
    	return o;
    }
    for(var i in o){
    	if (o.hasOwnProperty(i)) {
    		if (typeof o[i] === 'object') {
    			obj[i] = cloneObject(o[i]);
    		} else {
    			obj[i] = o[i];
    		}
    	}
    }
    return obj;
}

Array.prototype.uniq = function(){
	var arr = [];
	for(var i = 0; i < this.length; i ++) {
		if(arr.indexOf(this[i]) < 0) {
			arr.push(this[i]);
		} 
	}
	return arr;
}


Array.prototype.uniq = function(){
	var arr = [];
	var a = {};
	for (var i = 0; i < this.length; i++) {
		if(!a[this[i]]){
			arr.push(this[i]);
			a[this[i]] = true;
		}
	}
	return arr;
}
var arr = [4,5,5,5,5,56,6,6,21.1,5];
arr.uniq();

function getBytes(str){
    var len = str.length;
    for (var i = 0; i < str.length; i++) {
    	if(str.charCodeAt(i) > 255) {
    		len ++;
    	}
    }
    return len;
}

function trim(str){
	var pattern = /^\s+|\s+$/g;
	return str.replace(pattern, "");
}
trim(" af sf  ");

function isEmail(email){
	var pattern = /^(\w+\.)*\w+@(\w+\.)+\w+$/;
	return pattern.test(email);
}
isEmail('jiang.zhaojin@foxmail.com');

function addClass(ele, className){
	var oldClass = ele.className;
	ele.className = oldClass == "" ? className : oldClass + " " + className;
}

function removeClass(ele, className){
    var oldClassName = ele.className;
    ele.className = oldClassName.replace(className,"");
}

function siblingNode(ele1, ele2){
	return ele1.parentNode == ele2.parentNode;
}

EventUtil = {
	readyEvent: function(fn){
        var oldfun = window.onload;
        if (typeof oldfun == "function") {
        	window.onload = function(){
        		oldfun();
        		fn();
        	}
        } else {
        	window.onload = fn;
        }
	},
	addEvent: function(element, event, listener){
		if (element.addEventListener) {
			element.addEventListener(event, listener);
		} else if (element.attachEvent) {
			element.attachEvent("on"+event, listener);
		} else {
            element["on"+event] = listener;
		}
	},
	removeEvent: function(element, event, listener){
		if (element.removeEventListener) {
			element.removeEventListener(event, listener);
		} else if(element.detachEvent) {
			element.detachEvent("on"+event, listener);
		} else {
			element["on"+event] = null;
		}
	},
	getEvent: function(event){
		return event || window.event;
	},
	getTarget: function(event){
		return event.srcElement || event.target;
	},
	stopPropagation: function(event){
        if (event.stopPropagation) {
        	event.stopPropagation();
        } else {
        	event.cancelBubble = true;
        }
	},
	preventDefault: function(event){
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	}
}

function setCookie(cookieName, cookieValue, expirdays){
    var cookie = cookieName + "=" + cookieValue;
    if (typeof expirdays == "number") {
    	cookie += ";max-age=" + (expiredays*60*60*24);
    }
    document.cookie = cookie;
}

var xhr = new XMLHttpRequest();
xhr.open(type, url, true);
xhr.onreadystatechange = function(){
    if (xhr.status == 200 && xhr.readyState == 4) {
    	//......
    	
    }
}
xhr.send();

function loadJS(url, callback){
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = url;
	if (script.readyState) {
		script.onreadystatechange = function(){
            if (script.readyState == "loaded" || script.readyState == "complete") {
            	callback();
            }
		}
	} else {
		script.onload = function(){
			callback();
		}
	}
	document.body.appendChild(script);
}