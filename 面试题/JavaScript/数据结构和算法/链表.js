// 双向链表

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

class DList {
    constructor() {
        this.head = new Node('head');
    }
    insert(element, after) {
        let current = this.find(after);
        let newNode = new Node(element);
        current.next.previous = newNode;
        newNode.next = current.next;
        current.next = newNode;
        newNode.previous = current;
    }
    find(element) {
        let current = this.head;
        while(current && element !== current.element) {
            current = current.next;
        }
        return current;
    }
    findLast() {
        let current = this.head;
        while(current.next !== null) {
            current = current.next;
        }
        return current;
    }
    display() {
        let current = this.head;
        while(current !== null) {
            print(current.element);
            current = current.next;
        }
    }
    remove (element) {
        let current = this.find(element);
        current.previous.next = current.next;
        current.next.previous = current.previous;
        current.next = current.previous = null;
    }
}