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