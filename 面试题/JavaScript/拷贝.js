function isComplexType (target) {
    return (typeof target === 'object' || typeof target === 'function') && target !== null;
}

// 实现一个 Object.assign()
Object.myAssign = function(target, ...source) {
    if(target == null) throw new TypeError('connot convert undefined or function to object.');
    return source.reduce((acc, cur) => {
        isComplexType(acc) || (acc = new Object(acc));
        if(cur == null) return acc;
        [...Object.keys(cur), ...Object.getOwnPropertySymbols(cur)].forEach(key => {
            acc[key] = cur[key];
        });
        return acc;
    }, target);
}

// 实现一个浅拷贝
function shallowClone(target) {
    if(!target || typeof target !== 'object') {
        return target;
    }
    // Array.isArray()好像更好；
    let clone = target.constructor === Array ? [] : {};
    // Object返回自身可枚举属性--不含Symbol
    // for in + hasOwnProperty 返回自身可枚举属性---包含Symbol
    for(let key in target) {
        if(target.hasOwnProperty(key)) {
            clone[key] = target[key];
        }
    }
    return clone;
}

// 实现一个深度拷贝
// 不会复制Symbol键值
function deepClone(target) {
    if(!target || typeof target !== 'object') {
        return target;
    }
    return JSON.parse(JSON.stringify(target));
}

// ES6深拷贝
function deepClone(target) {
    if(!isComplexType(target)) {
        return target;
    }
    let clone = Array.isArray(target) ? [] : {};
    Reflect.ownKeys(target).forEach(key => {
        let value = target[key];
        clone[key] = isComplexType(value) ? deepClone(value) : value;
    });
    return clone;
}