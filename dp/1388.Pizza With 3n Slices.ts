// Points to remember

// - Why dp? 
// - We need to optimially pick slices so that we can maximize 
// - we can't greedily pick slices as our neighbour will pick the next best . example [1,2,3,4,5,6] if we pick 6 then alice and bob will pick 1 and 5 so we need to pick optimially
// -  We need to pick n slices out of 3n slices and no two slices should be adjacent;


// circular Array thing is beig tackled using two case: 
// 1. dont include last index
// 2. dont include first index
// This way we will not cross over in any case


// After converting circular array into linear array, it becomes easy as we need to pick k slices and no two adjacent slices should be picked
// There as well we have two cases lik always
// 1: take : Here we will take the current slice and now we can't take next slice so will move to i+2;
// 2. skip: Here we will skip the current slice and we can take the next slice so will move to to i+1;


function maxSizeSlices(slices: number[]): number {
    let n = slices.length;
    function check(start: number, end: number, picks: number) {
        // bottom up space optimised
        let prev1 = new Array(picks + 1).fill(0);
        let prev2 = new Array(picks + 1).fill(0);

        for (let i = end; i >= start; i--) {
            let cur = new Array(picks + 1).fill(0);
            for (let k = 1; k <= picks; k++) {
                let take = slices[i] + prev2[k - 1];
                let skip = prev1[k];
                cur[k] = Math.max(skip, take);
            }
            prev2 = prev1;
            prev1 = cur;
        }
        return prev1[picks];

        // bottom up 
        // let memo = Array.from({ length: n + 2 }, () => new Array(picks + 1).fill(0));

        // for (let k = 1; k <= picks; k++) {
        //     for (let i = end; i >= start; i--) {
        //         let take = slices[i] + memo[i + 2][k - 1];
        //         let skip = memo[i + 1][k];
        //         let result = Math.max(skip, take);
        //         memo[i][k] = Math.max(result, memo[i][k]);
        //     }
        // }
        // return memo[start][picks];


        // Top down
        // let memo = new Map();

        // function solve(index: number, remain: number) {
        //     if (remain == 0) return 0;
        //     if (index > end) return -Infinity;

        //     let key = `${index},${remain}`;
        //     if (memo.has(key)) {
        //         return memo.get(key);
        //     }

        //     let take = slices[index] + solve(index + 2, remain - 1);
        //     let skip = solve(index + 1, remain);

        //     let result = Math.max(skip, take);

        //     memo.set(key, result);

        //     return result;
        // }
        // return solve(start, picks);
    }

    let case1 = check(0, n - 2, n / 3);
    let case2 = check(1, n - 1, n / 3);
    return Math.max(case1, case2);
};
