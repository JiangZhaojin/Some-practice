// 函数防抖：一段时间内只触发一次

function debounce (fn, delay) {
    let timer;
    return function () {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    }
}

// test
document.body.addEventListener('mousemove', debounce(function() {
    console.log('trigger');
}, 1000))