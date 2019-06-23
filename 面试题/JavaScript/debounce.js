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


// 加强版
function debounce(fn, delay = 50, immediate = true) {
    let context, args, timer;

    let later = () => setTimeout(() => {
        timer = null;
        if(!immediate) {
            fn.apply(context, args);
            context = args = null;
        }
    }, delay);

    return function(...params) {
        if (timer) {
            clearTimeout(timer);
            timer = later;
        } else {
            timer = later;
            if(immediate) {
                fn.apply(this, params);
            } else {
                context = this;
                args = params;
            }
        }
    }
}