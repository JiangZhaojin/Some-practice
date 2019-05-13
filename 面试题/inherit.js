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