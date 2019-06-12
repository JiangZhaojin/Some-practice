// 含有状态的位置关系型列表

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.append = function(element) {
        this.dataStore[this.listSize ++] = element;
    }
    this.insert = function(element, after) {
        var index = this.find(after);
        if (index > -1) {
            this.dataStore.splice(index + 1, 0, element);
            this.listSize ++;
            return true;
        }
        return false;
    }
    this.remove = function(element) {
        var index = this.find(element);
        if (index > -1) {
            this.dataStore.splice(index, 1);
            --this.listSize;
            return true;
        }
        return false;
    }
    this.clear = function() {
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }
    this.getElement = function(pos) {
        return this.dataStore[pos];
    }
    this.contains = function (element) {
        return this.dataStore.indexOf(element) !== -1;
    }
    this.toString = function() {
        return this.dataStore;
    }
    this.find = function(element) {
        return this.dataStore.indexOf(element);
    }

    this.front = function() {
        this.pos = 0;
    }
    this.end = function() {
        this.pos = this.listSize - 1;
    }
    this.prev = function() {
        this.pos > 0 && this.pos --;
    }
    this.next = function () {
        this.pos < this.listSize && this.pos ++;
    }
    this.hasPrev = function() {
        this.pos > 0;
    }
    this.hasNext = function() {
        this.pos < this.listSize;
    }
    this.curPos = function() {
        return this.pos;
    }
    this.moveTo = function(cur) {
        this.pos = cur;
    }
}