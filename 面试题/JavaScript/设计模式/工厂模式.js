// 本质：隐藏生成一个对象的细节。
class Man {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        alert(this.name);
    }
}

class Factory {
    static createMan(name) {
        return new Man(name);
    }
}