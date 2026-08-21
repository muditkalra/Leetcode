// Idea:

// Brute force will be to generate all multiples for all coins and check for kth smallest or generate till we reached kth smallest, that will be O(k)
// since k is very large : 10^9
// we can't generate k smallest

// so think in this other way is we can guess to find that how many amount are possible for any x value
// let's take any example of coins = [2,3] and k= 8 and their amounts are [2,3,4,6,8,9,10,12,14,15, 16,18,20,21,22,24]
// so first lets check for a number 10 , so can see that at number 10 we got k=7 so need a bigger number to reach k
// let's say take number 20, at this we have k =13, which is more than 8, we need to reduce number
// by this we can understand that this is becoming monotonic as the number get bigger, k becomes bigger too. 
// so need to implement binary search on the number and somehow calculate count of amount equal to k
// if less than k we move go for bigger number\
// else we go for smaller number

function findKthSmallest(coins: number[], k: number): number {
    let n = coins.length;
    let low = 1n;
    let high = BigInt(Math.min(...coins) * k);
    let combinations = 1 << n;
    let lcm: bigint[] = new Array(combinations).fill(0n);
    let bitCount: number[] = new Array(combinations).fill(0);

    function gcd(a: bigint, b: bigint) {
        while (a !== 0n) {
            [a, b] = [b % a, a];
        }
        return b;
    }

    function calculateLcm(a: bigint, b: bigint) {
        return (a / gcd(a, b)) * b;
    }

    for (let mask = 1; mask < (1 << n); mask++) {
        let curLcm = 1n;
        let bits = 0;
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) {
                curLcm = calculateLcm(curLcm, BigInt(coins[i]));
                bits++;
            }
        }
        bitCount[mask] = bits;
        lcm[mask] = curLcm;
    }

    function countValid(x: bigint) {
        let total = 0n;
        for (let mask = 1; mask < (1 << n); mask++) {
            let curLcm = lcm[mask];
            let bits = bitCount[mask];
            let count = x / curLcm;

            if (bits & 1) {
                total += count;
            } else {
                total -= count;
            }
        }
        return total;
    }

    while (low <= high) {
        let mid = (low + high) >> 1n;
        if (countValid(mid) >= k) {
            high = mid - 1n;
        } else {
            low = mid + 1n;
        }
    }
    return Number(low);
};