// 基于映射关系的数据结构
class Dictionary {
    constructor() {
        this.dataStore = {};
    }
    add(key, value) {
        this.dataStore[key] = value;
    }
    remove(key) {
        delete this.dataStore[key];
    }
    find(key) {
        return this.dataStore[key];
    }
    showAll() {
        for(let key of Object.keys(this.dataStore)) {
            print(key + '->' + this.dataStore[key] + '/n');
        }
    }
}