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

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    let minDistance = Infinity;
    let maxDistance = -1;
    let temp = head;
    let cur = 0;
    let farthest = null; // first maxmima or minima index;
    let prev = null; // last maxima or minima index
    let prevValue = null; // just previous 

    while (temp && temp.next) {
        if (prevValue != null) {
            if ((temp.val > prevValue && temp.val > temp.next.val) || (temp.val < prevValue && temp.val < temp.next.val)) {
                maxDistance = farthest !== null ? Math.max(maxDistance, cur - farthest) : maxDistance;
                farthest = farthest == null ? cur : farthest;

                minDistance = prev != null ? Math.min(minDistance, cur - prev) : minDistance;
                prev = cur;
            }
        }
        prevValue = temp.val;
        temp = temp.next;
        cur++;
    }
    return [minDistance !== Infinity ? minDistance : -1, maxDistance];
};