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
function getType(src){
	if (src === 'null') {
		return 'Null';
	} else if (src === undefined) {
        return 'Undefined'
	} else {
		return Object.prototype.toString.call(src).slice(8,-1);
	}
}
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
    	if(src.hasOwnPrototype(i)) {
    		if (typeof i == 'object') {
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
alert(GetBytes("你好,as"));

// 去空格
function trim(str){
    return str.replace(/^\s+|\s+$/g, '');
}

// 遍历数组，对每个元素调用函数
function each(arr, fn){
	for(var i in arr){
		fn(arr[i], i);
	}
}

// 