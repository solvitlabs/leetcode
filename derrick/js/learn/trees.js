/**
 * Binary Search Tree
 * - Every node to the left of a parent node is always less than the parent
 * - Every node to the right of a parent node is always greater than the parent
 */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (this.root == null) {
            this.root = new Node(value);
        } else {
            let current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left == null) {
                        current.left = new Node(value);
                        break;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right == null) {
                        current.right = new Node(value);
                        break;
                    } else {
                        current = current.right;
                    }
                } 

            }
        }

        return this;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(7);
tree.insert(11);
tree.insert(13);
console.log(tree);


