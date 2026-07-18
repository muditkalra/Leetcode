function findGCD(nums: number[]): number {
    let min = Math.min(...nums);
    let max = Math.max(...nums);

    function gcd(a: number, b: number) {
        if (a == 0) {
            return b;
        }
        return gcd(b % a, a);
    }

    return gcd(min, max);
};