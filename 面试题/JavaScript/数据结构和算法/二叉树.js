// 组织一种含有等级关系的数据
class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
    show() {
        return this.data;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        let node = new Node(data);
        let current = this.root;
        if(root === null) {
            this.root = node;
            return;
        }
        while(true) {
            if(data < current.data) {
                if(current.left === null) {
                    current.left = node;
                    break;
                } else {
                    current = current.left;
                }
            } else {
                if(current.right === null) {
                    current.right = node;
                    break;
                } else {
                    current = current.right;
                }
            }
        }
    }
    // 中序遍历
    inOrder(node) {
        if(node === null) return;
        if(node === undefined) node = this.root;
        this.inOrder(node.left);
        console.log(node.data + '/n');
        this.inOrder(node.right);
    }
    // 先序遍历
    preOrder(node) {
        if(node === null) return;
        if(node === undefined) node = this.root;
        console.log(node.data + '/n');
        this.preOrder(node.left);
        this.preOrder(node.right)
    }
    // 后序遍历
    postOrder(node) {
        if(node === null) return;
        if(node === undefined) node = this.root;
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.data + '/n');
    }
    // 查找最小值
    getMin(node) {
        let current = node || this.root;
        if(current.left !== null) {
            current = current.left;
        }
        return current.data;
    }
    getMax(node) {
        let current = node || this.root;
        if(current.right !== null) {
            current = current.right;
        }
        return current.data;
    }
    // 查找给定点
    find(data) {
        let current = this.root;
        while(current !== null) {
            if(current.data === data) {
                return current;
            } else if (current.data > data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return null;
    }
    // 删除节点
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }
    removeNode(node, data) {
        if(node === null) {
            return null;
        }
        if(node.data === data) {
            if(node.left === null && node.right === null) {
                return null;
            } else if(node.right === null) {
                return node.left;
            } else if(node.left === null) {
                return node.right;
            }
            node.data = this.getMin(node.right);
            node.right = this.removeNode(node.right, node.data);
            return node;
        } else if(data < node.data) {
            node.left = this.removeNode(node.left, data);
        } else {
            node.right = this.removeNode(node.right, data);
        }
    }
}
