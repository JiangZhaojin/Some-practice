let Event = function () {
    this.store = {};
}

Event.prototype.on = function (event, fn) {
    if (!this.store[event]) {
        this.store[event] = [];
    }
    this.store[event].push(fn);
}

Event.prototype.emit = function (event, ...args) {
    if (!this.store[event]) {
        return;
    }
    this.store[event].forEach(fn => {
        fn.apply(fn, args);
    })
}