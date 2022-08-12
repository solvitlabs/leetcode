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
    // Return true if there is a cycle in the linked list. Otherwise, return false.
    let fast = head;
    while (fast && fast.next) {
      head = head.next;      // 2, 5, 7, 8, 10, 11, 15, 16, 1
      fast = fast.next.next; // 5, 8, 11, 16, 2, 7, 10, 15, 1
      

      console.log(head,"\n"); 
      console.log(fast,"\n");
      console.log("================================");
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
let node5 = new ListNode(8);
let node6 = new ListNode(10);
let node7 = new ListNode(11);
let node8 = new ListNode(15);
let node9 = new ListNode(16);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;
// Circular Linked Lists
node9.next = node9;

let list = new LinkedList(node1);

console.log(hasCycle(node1));
