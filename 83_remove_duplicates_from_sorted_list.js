//Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
//Return the linked list sorted as well.

//Input: head = [1,1,2]
//Output: [1,2]

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
 var deleteDuplicates = function(head) {
    let currentNode = head
    while (currentNode !== null){
        let nextNode = currentNode.next
        while (nextNode !== null && nextNode.val === currentNode.val){
            nextNode = nextNode.next
        }
        currentNode.next = nextNode
        currentNode = nextNode
    }
    return head
};