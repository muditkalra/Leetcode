// we can also solve this using greedy technique, which means we only need to calculate the maximum between two stones i and i+2;
// we are going to create two sequence which frog will use going forward and backward
// forward: i, i+2,i+4, i+6.. 
// backward: i+1, i+3, i+5, i+7... 


function maxJump(stones: number[]): number {
    let n = stones.length;
    let low = 0;
    let high = stones[n - 1] - stones[0];


    function check(mid: number) {
        if (n == 2) return stones[1] <= mid;
        for (let i = 0; i + 2 < n; i++) {
            if (stones[i + 2] - stones[i] > mid) {
                return false;
            }
        }
        return true;
    }

    while (low <= high) {
        let mid = (low + high) >> 1;

        if (check(mid)) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;

    // Greedy solution;
    // let max = 0;
    // for (let i = 0; i + 2 < n; i++) {
    //     max = Math.max(stones[i + 2] - stones[i], max)
    // }
    // return max;
};
