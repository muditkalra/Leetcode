/**
 * Definition for singly-linked list.
*/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next || k == 0) return head;

    let count = 1;
    let tail: ListNode = head;
    while (tail.next) {
        tail = tail.next;
        count++;
    }

    tail.next = head; // making it circular

    let stepsToCut = count - (k % count) - 1;
    let newTail = head;
    for (let i = 0; i < stepsToCut; i++) {
        newTail = newTail.next!;
    }

    let newHead = newTail.next;
    newTail.next = null; // breaking at the point
    return newHead;
};