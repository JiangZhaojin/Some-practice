// 一种特殊列表：后进后出

function Queue() {
    this.dataStore = [];
    this.enqueue = function(element) {
        this.dataStore.push(element);
    }
    this.dequeue = function() {
        return this.dataStore.shift();
    }
    this.front = function() {
        return this.dataStore[0];
    }
    this.back = function() {
        return this.dataStore[this.dataStore.length - 1];
    }
    this.empty = function() {
        return this.dataStore.length === 0;
    }
    this.toString = function() {
        return this.dataStore;
    }
}