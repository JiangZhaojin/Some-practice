function promisify(asyncFun) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            args.push(function callback(err, ...values) {
                if(err) reject(err);
                resolve(...values);
            });
            asyncFun.call(this, ...args);
        })
    }
}

const fsp = new Proxy(fs, {
    get(target, key) {
        return promisify(Reflect.get(target, key));
    }
});