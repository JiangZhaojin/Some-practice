// new关键字实现
const selfNew = function(fn, ...args) {
    let instance = Object.create(fn.prototype);
    let res = fn.apply(instance, args);
    if((typeof res === 'object' || typeof res === 'function') && res !== null) {
        return res;
    }
    return instance;
}


// instance实现
function instanceOf (left, right) {
    let prototype = right.prototype;
    left = Object.getPrototypeOf(left);
    while(true) {
        if (left === null || prototype === null) {
            return false;
        }
        if(left === prototype) {
            return true;
        }
        left = Object.getPrototypeOf(left);
    }
}