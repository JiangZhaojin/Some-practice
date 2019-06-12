// 重写map
Array.prototype.myMap = function(fn, context) {
    let arr = this;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!this.hasOwnProperty(i)) continue;
        result.push(fn.call(context, arr[i], i, this));
    }
    return result;
}

// 使用reduce方法重写map
Array.prototype.myMap = function (fn, context) {
    return this.reduce((pre, cur, index) => {
        return pre.concat(fn.call(context, cur, index, this));
    }, []);
}

// 实现filter方法
Array.prototype.myFilter = function (fn, context) {
    let result = [];
    for(let i = 0; i < this.length; i ++) {
        if (!this.hasOwnProperty(i)) continue;
        return fn.call(context, this[i], i, this) && result.push(this[i]);
    }
    return result;
}

// 使用reduce实现filter方法
Array.prototype.myFilter = function (fn, context) {
    return this.reduce((pre, cur, index) => {
        return fn.call(context, cur, index, this) ? pre.concat[cur] : pre;
    }, []);
}

// 实现some方法
Array.prototype.mySome = function (fn, context) {
    for (let i = 0; i < this.length; i ++) {
        if (!this.hasOwnProperty(i)) continue;
        if(fn.call(context, this[i], i, this)) {
            return true;
        }
    }
    return false;
}

// 实现reduce方法
Array.prototype.myReduce = function (fn, initValue) {
    let res;
    let startIndex;
    if (initValue === undefined) {
        for (let i = 0; i < this.length; i ++) {
            if (!this.hasOwnProperty(i)) continue;
            startIndex = i;
            res = this[i];
            break;
        }
    } else {
        res = initValue;
    }
    for (let i = startIndex + 1; i < this.length; i ++) {
        if (!this.hasOwnProperty(i)) continue;
        res = fn.call(null, res, this[i], i, this);
    }
    return res;
}

// 实现数组flat方法
Array.prototype.myFlat = function (depth = 1) {
    if (depth === 0) return this;
    return this.reduce((pre, cur) => {
        if(Array.isArray(cur)) {
            return [...pre, ...cur.myFlat(depth - 1)];
        } else {
            return [...pre, cur];
        }
    }, []);
}