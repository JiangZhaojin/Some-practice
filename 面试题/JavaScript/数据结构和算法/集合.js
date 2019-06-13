// 对数据进行批处理的一种数据结构
class DataSet {
    constructor() {
        this.dataStore = [];
    }
    add(data) {
        if(!this.dataStore.includes(data)) {
            this.dataStore.push(data);
            return true;
        } else {
            return false;
        }
    }
    remove(data) {
        let index = this.dataStore.indexOf(data);
        if (index > -1) {
            this.dataStore.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }
    show() {
        return this.dataStore;
    }
    size() {
        return this.dataStore.length;
    }
    contains(data) {
        return this.dataStore.includes(data);
    }
    // 并集
    union(set) {}
    // 交集
    intersect() {}
    // 是否子集
    difference() {}
}