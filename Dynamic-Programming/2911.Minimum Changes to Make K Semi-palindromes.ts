function minimumChanges(s: string, k: number): number {
    let n = s.length;
    let costMemo = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(-1));
    let memo = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(-1));

    function getCost(i: number, j: number): number {
        let len = j - i + 1;

        if (costMemo[i][j] !== -1) {
            return costMemo[i][j];
        }

        let minCost = Infinity;
        for (let d = 1; d < len; d++) {
            if (len % d !== 0) continue;

            let cost = 0;

            for (let group = 0; group < d; group++) {
                let l = i + group;
                let r = l + ((len / d) - 1) * d;

                while (l < r) {
                    if (s[l] !== s[r]) {
                        cost += 1;
                    }
                    l += d;
                    r -= d;
                }
            }
            minCost = Math.min(minCost, cost);
        }
        costMemo[i][j] = minCost;
        return minCost;
    }


    function solve(start: number, k: number) {
        if (k == 0) {
            if (start == n) {
                return 0;
            }
            return Infinity;
        }

        if (start + 2 * k > n) {
            return Infinity;
        }

        if (memo[start][k] !== -1) {
            return memo[start][k];
        }
        let minCost = Infinity;

        for (let end = start + 1; end < n; end++) {
            let remainingCost = solve(end + 1, k - 1);
            if (remainingCost == Infinity) continue;

            minCost = Math.min(minCost, getCost(start, end) + remainingCost);
        }
        memo[start][k] = minCost;
        return minCost;
    }
    return solve(0, k);
};