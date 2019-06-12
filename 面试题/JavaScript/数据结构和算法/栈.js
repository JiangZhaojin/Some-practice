// 一种特殊列表：只能头尾操作、先进后出

function Stack() {
    this.top = 0;
    this.dataStore = [];
    this.push = function(element) {
        this.dataStore[this.top ++] = element;
    }
    this.pop = function() {
        return this.dataStore[--this.top];
    }
    this.peek = function() {
        return this.dataStore[this.top - 1];
    }
    this.clear = function() {
        this.dataStore = [];
        this.top = 0;
    }
    this.length = function() {
        return this.top;
    }
}