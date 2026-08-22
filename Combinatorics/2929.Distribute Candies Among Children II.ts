function distributeCandies(n: number, limit: number): number {
    let min = Math.max(0, n - 2 * limit); // minimum candies first child 
    let max = Math.min(n, limit); // max candies first child
    let ans = 0;

    for (let i = min; i <= max; i++) {
        let N = n - i;
        let min = Math.max(0, N - limit); // minimum 2nd child can have
        let max = Math.min(N, limit); // maximum 2nd child can have
        ans += max - min + 1;
    }

    return ans;
};