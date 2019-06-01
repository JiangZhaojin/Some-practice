// 节流函数：一定时间内触发一次

function throttle(fn, delay) {
    var timer;
    return function() {
        if (timer) return;
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null;
        }, delay);
    }
}

// test

document.body.addEventListener('mousemove', throttle(function() {
    console.log('trigger');
}, 1000))