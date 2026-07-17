function gcdValues(nums: number[], queries: number[]): number[] {
    let max = Math.max(...nums);
    let freq = new Array(max + 1).fill(0);
    let n = nums.length;
    let q = queries.length;


    for (let i = 0; i < n; i++) {
        freq[nums[i]] += 1;
    }

    let divisibleCount = new Array(max + 1).fill(0);

    for (let i = 1; i <= max; i++) {
        for (let multiple = i; multiple <= max; multiple += i) {
            divisibleCount[i] += freq[multiple];
        }
    }

    let exactCount = new Array(max + 1).fill(0);

    function calculateTotalPairs(count: number) {
        return count == 0 ? 0 : (count * (count - 1)) / 2;
    }


    for (let i = max; i >= 1; i--) {
        exactCount[i] = calculateTotalPairs(divisibleCount[i]);
        for (let multiple = i * 2; multiple <= max; multiple += i) {
            exactCount[i] -= exactCount[multiple];
        }
    }

    let prefSum = new Array(max + 1).fill(0);

    for (let i = 1; i <= max; i++) {
        prefSum[i] += prefSum[i - 1] + exactCount[i];
    }


    function binarySearch(index: number) {
        let low = 1;
        let high = max;

        while (low <= high) {
            let mid = Math.floor((high + low) / 2);
            if (prefSum[mid] >= index) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return low;
    }

    let res = [];
    for (let i = 0; i < q; i++) {
        let g = binarySearch(queries[i] + 1);
        res.push(g);
    }

    return res
};