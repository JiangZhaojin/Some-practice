// 简易Promise
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECT = 'reject';

function myPromise(fn) {
    const that = this;
    that.state = PENDING;
    that.value = null;
    that.resolvedCallbacks = [];
    that.rejectedCallbacks = [];

    function resolve(value) {
        if(that.state === PENDING) {
            that.state = RESOLVED;
            that.value = value;
            that.resolvedCallbacks.map(cb => cb(value));
        }
    }

    function reject(err) {
        if(that.state === PENDING) {
            that.state = REJECT;
            that.value = err;
            that.rejectedCallbacks.map(cb => cb(err));
        }
    }

    try {
        fn(resolve, reject);
    } catch(err) {
        reject(err);
    }
}

myPromise.prototype.then = function(onResolved, onRejected) {
    onResolved = typeof onResolved === 'function' ? onResolved : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected : v => { throw v; };
    if(this.state === PENDING) {
        this.resolvedCallbacks.push(onResolved);
        this.rejectedCallbacks.push(onRejected);
    }
    if(this.state === RESOLVED) {
        onResolved(this.value);
    }
    if(this.state === REJECT) {
        onRejected(this.value);
    }
}

// test
new myPromise((resolve, reject) => {
    setTimeout(function() {
        resolve(1);
    }, 0);
}).then(value => {
    console.log(value);
})


// 符合Promise/A规范的Promise实现
// todo