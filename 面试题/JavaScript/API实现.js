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
function instance (left, right) {
    left = Object.getPrototypeOf(left);
    while(true) {
        if (left === null) {
            return false;
        }
        if(left === right.prototype) {
            return true;
        }
        left = Object.getPrototypeOf(left);
    }
}