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
    let newHead = new ListNode(0);
    let result = newHead;
    let array = [];
        
    while(head) {
        if (head.val !== val) array.push(head.val);        
        head = head.next;  
    }    
    
    array.forEach(el=>{
        newHead.next = new ListNode(el);
        newHead = newHead.next;
    });  
    
    return result.next;    
};