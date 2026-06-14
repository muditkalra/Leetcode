/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function pairSum(head: ListNode | null): number {
    let res = [];

    function traverse(node: ListNode | null) {
        if (!node) return;

        res.push(node.val);
        node = node.next;
        traverse(node);
    }
    let tmp = head;
    traverse(head);

    let n = res.length;

    let l = 0;
    let r = n - 1;
    let max = 0;
    while (l < r) {
        max = Math.max(res[l] + res[r], max);
        l++;
        r--;
    }
    return max
};