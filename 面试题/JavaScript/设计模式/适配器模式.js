// 保持原有逻辑物料不变，套上一层接口
class Plug {
    constructor () {}
    getName () {
        return '港版插头';
    }
}

class Target {
    constructor(){
        this.plug = new Plug();
    }
    getName () {
        return this.plug.getName() + ' 转 大陆插头';
    }
}