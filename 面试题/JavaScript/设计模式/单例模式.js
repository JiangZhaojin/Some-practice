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