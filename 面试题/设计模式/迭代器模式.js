// 外部迭代器
const iterator = function(arr) {
    let current = 0
    const next = function() {
        current = current + 1
    }
    const done = function() {
        return current >= arr.length
    }
    const value = function() {
        return arr[current]
    }
    return {
        next,
        done,
        value,
    }
}

// 内部迭代器
function each(arr, fn) {
    for (let i = 0; i < arr.length; i ++) {
        fn(i, arr[i]);
    }
}