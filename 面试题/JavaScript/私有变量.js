// 闭包
const Person = (function(){
    const _name = Symbol('person name');
    return class Person {
        constructor(name) {
            this[_name] = name;
        }
        getName() {
            return this[_name];
        }
    }
}());

// 利用constructor实现闭包
class Person {
    constructor(name) {
        let _name = name;
        this.getName = function() {
            return _name;
        }
    }
}

// WeakMap+闭包
const Person = (function() {
    const wp = new WeakMap();
    return class Person {
        constructor(name) {
            wp.set(this, name);
        }
        getName() {
            return wp.get(this);
        }
    }
}());

// 使用Proxy代理
const proxy = function(target) {
    return new Proxy(target, {
        get(target, key) {
            if(key.startsWith('_')) {
                throw new Error('private key');
            }
            return Reflect.get(target, key);
        },
        ownKeys(target) {
            Reflect.ownKeys(target).filter(key => !key.startsWith('_'));
        }
    });
}