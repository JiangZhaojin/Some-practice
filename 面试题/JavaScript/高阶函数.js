// 柯里化函数
function curry(fn) {
    if (fn.length <= 1) return fn;
    return function generator(...args) {
        if(fn.length === args.length) {
            return fn(...args);
        } else {
            return (...args1) => generator(...args, ...args1);
        }
    }
}

// 偏函数
function partialFunc(fn, ...args) {
    return (...args1) => {
        return fn(...args, ...args1);
    }
}

// 斐波那契数列
function fibonacci(n) {
    if(n < 1) throw new Error('参数错误');
    if(n === 1 || n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// 斐波那契数列优化
function memory(fn) {
    let cache = {};
    return (n) => {
        return cache[n] || (cache[n] = fn(n));
    }
}

fibonacci = memory(fibonacci);

// 斐波那契数列尾递归优化
function fibonacci(n) { 
    return (function(n1, n2, i) { 
        return ( i < n ) ? arguments.callee(n2, n1+n2, i+1) : n1;
    })(1,1,1);
}