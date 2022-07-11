/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var deleteDuplicates = function(head) {
    // loop through the linked list    
    // store elements in a Map Object    
    // create another linked list
    // store unique keys 
    let map = new Map();
    let newHead = new ListNode(0);
    let copyHead = newHead;
    
    while(head) {
        map.set(head.val, true);
        head = head.next;
    }    
    
    
    for (const key of map.keys()) {
        copyHead.next = new ListNode(key);
        copyHead = copyHead.next;
    }
    
    return newHead.next;
};