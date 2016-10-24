/**
 * jiangzhaojin
 */

// 判断是否是数组
function isArray(arr){
	return typeof arr === 'object' && Object.prototype.toString.call(arr).slice(8,-1) === 'Array';
}

// 判断是否时函数
function isFunction(func){
	return typeof func === 'function';
}

// 深度克隆
function cloneObject(obj){
    var o ;

    if (Object.prototype.toString.call(src).slice(8,-1)=='Array') {
    	o = [];
    } else if (Object.prototype.toString.call(src).slice(8,-1)=='Object') {
    	o = {};
    } else {
    	return obj;
    }

    for (var i in obj) {
    	if(obj.hasOwnPrototype(i)) {
    		if (typeof obj[i] == 'object') {
    			o[i] = cloneObject(obj[i]);
    		} else {
    			o[i] = obj[i];
    		}
    	}
    }

    return o;
}

// 数组去重
Array.prototype.uniq = function(){
	var newArr = [];
	for (var i = 0; i < this.length; i++) {
		if(this.indexOf(this[i]) == i) {
            newArr.push(this[i]);
		} 
	}
	return newArr;
}
var arr = [4,5,5,5,5,56,6,6,21.1,5];
arr.uniq();

Array.prototype.uniq = function(){
	var newArr = [];
	var a = {};
	for (var i = 0; i < this.length; i++) {
		if(a[this[i]]) {
			continue;
		} else {
			newArr.push(this[i]);
			a[this[i]] = true;
		}
	}
	return newArr;
}

Array.prototype.uniq = function(){
	var newArr = [];
	for (var i = 0; i < this.length; i++) {
		if(newArr.indexOf(this[i]) == -1) {
			newArr.push(this[i]);
		}
	}
	return newArr;
}

// 对JavaScript中的5种主要的数据类型（包括Number、String、Object、Array、Boolean）进行值复制
Object.prototype.clone = function(){
    var o = this.constructor === Array ? [] : {};
    for(var e in this){
            o[e] = typeof this[e] === "object" ? this[e].clone() : this[e];
    }
    return o;
}

var arr=[4,4,4,4,5,4,4];
arr.clone();

//编写一个方法 求一个字符串的字节长度
//假设：一个英文字符占用一个字节，一个中文字符占用两个字节

 function GetBytes(str){
    var len = str.length;
    var bytes = len;
    for(var i=0; i<len; i++){
        if (str.charCodeAt(i) > 255) bytes++;
    }
    return bytes;
}


// 遍历数组，对每个元素调用函数
function each(arr, fn){
	for(var i in arr){
		fn(arr[i], i);
	}
}

// 正则表达式练习

// 去空格
function trim(str){
    return str.replace(/^\s+|\s+$/g, '');
}

// 去空元素
function deleteBlank(arr){
	var arr2 = [];
	for (var i = 0; i < arr.length; i++) {
		if( /^\s+$/.test(arr[i]) || arr[i] === undefined ){
			continue;
		} else {
			arr2.push(arr[i]);
		}
	}
	return arr2;
}

// 获取浏览器相对文档位置
function getPosition(element){
    var pos = {};
    pos.x = element.getBoundingClientRect().left + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
    pos.y = element.getBoundingClientRect().top + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    return pos;
}

deleteBlank([1,51,56, , , 54,,])

// 遍历数组
function each(arr, fn){
	for (var i = 0; i < arr.length; i++) {
		fn(arr[i], i);
	}
}

// 获取对象里第一层元素的数量
function getObjectLength(obj){
	return Object.keys(obj).length;
}

// 判断是否邮箱
function isEmail(emailStr) {
	var pattern = /^(\w+\.)*\w+@\w+(\.\w+)+$/;
	return pattern.test(emailStr);
}

// 判断是否手机号
function isMobilePhoneNum(num){
	var pattern = /^(\+\d{1,4})?\d{7,11}$/;
	pattern.test(num);
}

// 判断是否URL
function isUrl(url){

}

// -----------------------------------------//
// 增加样式
function addClass(element, className){
	var oldClassName = element.className;
	element.className = oldClassName == "" ? className : oldClassName+" "+className;
}

// 移除样式
function removeClass(element, className){
	var oldClassName = element.className;
	element.className = oldClassName.replace(className, "");
}

// 同一级元素判断
function isSiblingNode(element1, element2){
	return element1.parentNode === element2.parentNode;
}

//-------------实现一个简单的Qeury------------//
function $(selector){
    if (!selector) {
    	return null;
    }
    if (selector == 'document') {
    	return document;
    }
    selector = trim(selector);
    var result = [];
    if (selector.indexOf(' ') !== -1) {
    	var i = 0;
    	var j = 0;
    	var selectorArr = selector.split(/\s+/);
    	var rootEle = myQuery(selectorArr[0]);
    	var targetEle = [];
    	for (i = 1; i < selectorArr.length; i++) {
    		for (j = 0; j < rootEle.length; j++) {
    			result.push(myQuery(selectorArr[i], rootEle[j]));
    		}
    		// 只支持两层查询。有问题
    	}
    	return result[0][0];
    } else {
    	return myQuery(selector, document)[0];
    }
}

/**
 * 针对一个内容查找结果
 */
function myQuery(selector, root){
	var signal = selector[0];
	var allChildren = null;
	var result = [];
	var content = selector.slice(1);
	var curAtrr;
    root = root || document;
    switch (signal) {
        case '#':
            result.push(document.getElementById(content));
            break;
        case '.':
            allChildren = root.getElementsByTagName("*");
            for (var i = 0; i < allChildren.length; i++) {
            	curAtrr = allChildren[i].getAttribute("class");
            	if (curAtrr !== null && curAtrr.search(content) !== -1) {
                    result.push(allChildren[i]);
            	}
            }
            break;
        case '[':
            if (content.search('=') !== -1) {
            	var pattern = /\[(\w+)\s*\=\s*(\w+)\]/;
            	var cut = selector.match(pattern);
            	var key = cut[1];
            	var value = cut[2];
            	allChildren = root.getElementsByTagName('*');
            	for (var i = 0; i < allChildren.length; i++) {
            		if (allChildren[i].getAttribute(key) === value) {
            			result.push(allChildren[i]);
            		}
            	}
            } else {
            	content = content.slice(0, -1);
            	allChildren = root.getElementsByTagName('*');
            	for (var i = 0; i < allChildren.length; i++) {
            		if(allChildren[i].getAttribute(content) != null) {
            			result.push(allChildren[i]);
            		}
            	}
            }
            break;
        default:
            result = root.getElementsByTagName(selector);
            break;
    }
    return result;
}
myQuery("div");

//---------------通用的事件处理---------------//

//添加事件
function addEvent(element, event, listener){
	if (element.addEventListener) {
		element.addEventListener(event, listener);
	} else if (element.attachEvent) {
		element.attachEvent('on'+event, listener);
	} else {
		element['on'+event] = listener;
	}
}

// 移除事件
function removeEvent(element, event, listener){
	if (element.removeEventListener) {
		element.removeEventListener(event, listener);
	} else if (element.detachEvent) {
		element.detachEvent('on'+event, listener);
	} else {
        element['on'+event] = null;
	}
} 

//事件代理
function delegateEvent(element, tag, event, listener){
    addEvent(element, event, function(event){
        event = event || window.event;
        var target = event.target || event.srcElement;
        if (target.tagName.toLowerCase() == tag.toLowerCase()) {
        	listener.call(target, event);
        }
    });
}

// $事件
$.on = function(selector, event, listener){
	addEvent($(selector), event, listener);
};
$.click = function(selector, listener){
	addEvent($(selector), 'click', listener);
}
$.un = function(selector, event, listener){
	removeEvent($(selector), event, listener);
}
$.delegate = function(selector, tag, event, listener){
	delegateEvent($(selector), tag, event, listener); 
}

// 事件处理
var EventUtil = {

	// 当文档加载成功
	readyEvent: function(fn){
		if (typeof fn != 'function') { return false;}
		var onloaded = window.onload;
		if (typeof onloaded != 'function') {
			window.onload = fn;
		} else {
			window.onload = function(){
				onloaded();
				fn();
			}
		}
	},

	// 添加事件
	addEvent: function(element, event, listener){
    	if (element.addEventListener) {
            element.addEventListener(event, listener);
    	} else if(element.attachEvent) {
            element.attachEvent('on' + event, listener);
    	} else {
    		element['on' + event] = listener;
    	}		
	},

	// 去除事件
	removeEvent: function(element, event, listener){
		if (element.removeEventListener) {
			element.removeEventListener(event, listener);
		} else if(element.detachEvent) {
            element.detachEvent(event, listener);
		} else {
			element['on' + event] = null;
		}
	},

	// 阻止冒泡
	stopPropagation: function(event){
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	},

	// 阻止默认事件
	preventDefault: function(event){
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},

	// 获取目标
	getTarget: function(event){
        return event.target || event.srcElement;
	},

	// 获取事件对象
	getEvent: function(event){
		return event || window.event;
	}
}

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays){
	var cookie = cookieName + '=' + encodeURIComponent(cookieValue);
	if (typeof expiredays == 'number') {
		cookie += ';max-age=' + (expiredays*24*60*60);
	}
	document.cookie = cookie;
}

// 获取cookie
function getCookie(cookieName){
	var cookie = {};
	var all = document.cookie;
	var list = all.split(";");
	for (var i = 0; i < list.length; i++) {
		var pos = list[i].indexOf('=');
		var name = list[i].substr(0, pos);
		var value = list[i].substr(pos+1);
		cookie[name] = decodeURIComponent(value);
	}
	return cookie;
}

//----------- ajax -------------------//
function ajax(url, options){

	var dataResult;

	// chuli data
	if (typeof options.data === 'object') {
		var str=' ';
		for (var c in options.data) {
			str = str + c + '=' + options.data[c] + '&';
		}
		dataResult = str.slice();
	}

    options.type = options.type || 'GET';

    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    xhr.open(options.type, url);
    if (options.type === 'GET') {
    	xhr.send(null);
    } else {
    	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    	xhr.send(dataResult);
    }

    xhr.onreadystatechange = function(){
    	if (xhr.readyState === 4 && xhr.status === 200) {
    		if (options.onsuccess) {
    			options.onsuccess(xhr.responseText, xhr.responseXML);
    		}
    	} else {
    		if (options.onfail) {
    			options.onfail();
    		}
    	}
    };

}

// 判断一个字符出现最多的次数，并统计次数
function countSameChars(str){
	var charNum = {};
	var maxChar = -1;
	var letter;
	for (var i = 0; i < str.length; i ++) {
		if (charNum[str[i]]) {
			charNum[str[i]]++;
			if (charNum[str[i]] > maxChar) {
				maxChar = charNum[str[i]];
				letter = str[i];
			}
		} else {
			charNum[str[i]] = 1;
			if (charNum[str[i]] > maxChar) {
				maxChar = charNum[str[i]];
				letter = str[i];
			}
		}
	}
}

// 解析URL
function parseURL(url){
	var params = {};
	var arr = url.split("?");
	if (arr.lenght <= 1) {
		return params;
	}
	arr = arr[1].split("&");
	for (var i = 0; i < arr.length; i++) {
		var a = arr[i].split("=");
		params[a[0]] = a[1];
	}
	return params;
}

// js异步加载
function loadJS(url, callback){
	var script = document.createElement("script");
    if (script.readyState) {
    	script.onreadystatechange = function(){
    		if (scipt.readyState == "loaded" || script.readyState == "complete") {
    			callback();
    		}
    	}
    } else {
        script.onload = function(){
        	callback();
        }
    }
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
}

// 获取文本或者设置文本
function setText(ele, text){
	if (typeof ele.innerText == 'string') {
		ele.innerText = text;
	} else {
		ele.textContent = text;
	}
}
function getText(ele){
	return (typeof ele.innerText == 'string') ? ele.innerText : ele.textContent;
}
