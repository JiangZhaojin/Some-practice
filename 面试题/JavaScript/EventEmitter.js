class EventEmitter {
    constructor() {
        this.store = {};
    }
    on(event, handler) {
        if (!this.store[event]) {
            this.store[event] = [];
        }
        this.store[event].push(handler);
    }
    off(event, handler) {
        if(this.store[event]) {
            let index = this.store[event].indexOf(handler);
            this.store[event].splice(index, 1);
            if (!this.store[event].length) {
                delete this.store[event];
            }
        }
    }
}