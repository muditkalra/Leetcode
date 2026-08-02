function stoneGame(piles: number[]): boolean {
    let n = piles.length;
    let dp = Array.from({ length: n }, () => new Array(n).fill(-1));

    function solve(left: number, right: number) {
        if (left == right) return piles[left];

        if (dp[left][right] !== -1) return dp[left][right];

        let takeLeft = piles[left] - solve(left + 1, right);
        let takeRight = piles[right] - solve(left, right - 1);
        dp[left][right] = Math.max(takeLeft, takeRight);
        return dp[left][right];
    }
    return solve(0, n - 1) >= 0;
};

// Although  we can also return true as well because alice will always win as there are even number of piles and their sum is odd, so one half of pile will always be greater
// other half and alice will always pick optimally and will always end up getting the bigger pile sum than bob


/**
 * 
 * Alice clearly always wins the 2 pile game. With some effort, we can see that she always wins the 4 pile game.
 
 * If Alice takes the first pile initially, she can always take the third pile. If she takes the fourth pile initially, she can always take the second pile. At least one of    first + third, second + fourth is larger, so she can always win.

 * We can extend this idea to N piles. Say the first, third, fifth, seventh, etc. piles are white, and the second, fourth, sixth, eighth, etc. piles are black. Alice can always take either all white piles or all black piles, and one of the colors must have a sum number of stones larger than the other color.
 */


