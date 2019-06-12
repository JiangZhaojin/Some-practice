// 定义一个全局可访问对象

class Singleton {
    constructor() {}
}

Singleton.getInstance = (function() {
    let instance;
    return function() {
        return instance || (instance = new Singleton());
    }
})();

Singleton.getInstance() === Singleton.getInstance();



// ES6实现单例模式
function proxy(func) {
    let instance;
    return new Proxy(func, {
        construct(target, args) {
            return instance || (instance = Reflect.construct(func, args));
        }
    });
}