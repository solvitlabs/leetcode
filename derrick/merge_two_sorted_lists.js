// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Create a Linked List p with value 0
    let head = new ListNode(0);
    let p = head; // link p to head via reference
    
    console.log("inputs: ", list1, list2)
    console.log("head", head);
    let count = 0;
    while(list1!=null && list2!=null){
        console.log("iteration: ", count, "\n");
        if(list1.val < list2.val){
            p.next = list1;
            list1 = list1.next;
        } else {
            p.next = list2;
            list2 = list2.next;
        }
        console.log("p: ", p);
        console.log("head: ", head);
        
        p=p.next;
        count++;
    }
    
    // Which input contains null
    if(list1!=null){
        p.next = list1;
    }
    
    if(list2!=null){
        p.next = list2;
    }
    
    return head.next;
    //     let allInputs = [];
    //     let nodes = [];
        
    //     while(list1.next||list2.next) {
    //         if (list1.next !== null) allInputs.push(list1.val);
    //         if (list2.next !== null) allInputs.push(list2.val);
    //     }
        
    //     allInputs.sort(function(a, b){return a - b});
        
    //     return allInputs;
    
};

// list1
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(4);

node1.next = node2;
node2.next = node3;

let list1 = node1;


// list2
node1 = new ListNode(1);
node2 = new ListNode(3);
node3 = new ListNode(4);

node1.next = node2;
node2.next = node3;

list2 = node1;

// Function call
console.log("result:\n", mergeTwoLists(list1, list2));