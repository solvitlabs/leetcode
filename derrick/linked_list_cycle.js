/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
    let fast = head;
    while (fast && fast.next) {
      head = head.next;
      fast = fast.next.next;

      if (head === fast) return true;
    }
    return false;
  };

class ListNode {
    constructor(data) {
        this.val = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(node){
        this.head = node;
    }
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(5);
let node4 = new ListNode(7);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

let list = new LinkedList(node1);

console.log(hasCycle(node1));
