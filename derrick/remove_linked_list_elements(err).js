/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var removeElements = function(head, val) {
    let newHead = head;
    

    // iterate through the LinkedList
    while(newHead && newHead.next) {
        // write a conditional check for Node.val != val         
        if (newHead.val === val) {
            if (newHead.next !== null) {
                newHead.val = newHead.next.val;
                newHead.next = newHead.next.next;  
            } else {
                newHead.val = null;
            }
          
        }
        // if True, add it to a newHead variable
        newHead = newHead.next;   
    }    
    
    return head;
    
};