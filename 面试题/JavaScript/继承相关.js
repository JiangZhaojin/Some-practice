// 相当于 Object.create()

function inherit (o) {
    if (typeof o !== 'object') {
        return;
    }
    function Foo() {};
    Foo.prototype = o;
    Foo.prototype.constructor = Foo;
    return new Foo();
}

// 寄生组合式继承 + 继承静态方法和静态属性
function inherit (subType, superType) {
    subType.prototype = Object.create(superType.prototype, {
        constructor: {
            enumerable: false,
            configurable: true,
            writable: true,
            value: subType
        }
    });
    Object.setPrototypeOf(subType, superType);
}

// ES5: 寄生组合式继承
function Person(name) {
    this.name = name;
}
Person.prototype.sayName = function() {
    console.log(this.name);
}

function Man(name) {
    Person.call(this, name);
}

Man.prototype = Object.create(Person);
Man.prototype.constructor = Man;