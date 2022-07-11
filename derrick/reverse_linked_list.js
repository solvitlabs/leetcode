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

var reverseList = function(head) {
    //  Loop through the linked list
    //  create an array from the linked list
    //  reverse the array
    //  create a new linked list from the array
    let array = [];
    let newLL = new ListNode(0);
    let copyLL = newLL;
    
    while(head) {
        array.push(head.val);
        head = head.next;
    }
    
    array.reverse();
    
    array.forEach(el=>{
        copyLL.next = new ListNode(el);
        copyLL = copyLL.next;
    });
    
    return newLL.next;
};