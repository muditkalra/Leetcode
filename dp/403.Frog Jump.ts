function canCross(stones: number[]): boolean {
    if (stones[1] !== 1) return false;

    let n = stones.length;
    let map = new Map<number, number>(); // stone to index mapping

    for (let i = 1; i < n; i++) {
        map.set(stones[i], i);
    }

    let dp = new Map();

    function solve(i: number, k: number): boolean {
        if (i == n - 1) return true;

        let key = `${i},${k}`;

        if (dp.has(key)) {
            return dp.get(key);
        }

        let result = false;

        for (let nextJump = k - 1; nextJump <= k + 1; nextJump++) {
            if (nextJump > 0) {
                let nextStone = stones[i] + nextJump;
                if (map.has(nextStone)) {
                    result ||= solve(map.get(nextStone)!, nextJump);
                }
            }
        }
        dp.set(key, result);
        return result;
    }
    return solve(0, 0);


    // bottom up

    // let dp: Set<number>[] = Array.from({ length: n }, () => new Set<number>());
    // dp[0].add(0);

    // for (let i = 0; i < n; i++) {
    //     let steps = dp[i];
    //     if (steps.size == 0) continue;

    //     for (let k of steps) {
    //         for (let next = k - 1; next <= k + 1; next++) {
    //             if (next <= 0) continue;
    //             let nextJump = stones[i] + next;
    //             if (map.has(nextJump)) {
    //                 let nextJumpIdx = map.get(nextJump)!;
    //                 if (nextJumpIdx == n - 1) return true;
    //                 dp[nextJumpIdx].add(next);
    //             }
    //         }
    //     }
    // }
    // return false;
};