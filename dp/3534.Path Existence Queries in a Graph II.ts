function pathExistenceQueries(
    n: number,
    nums: number[],
    maxDiff: number,
    queries: number[][]
): number[] {

    // Binary search: last index whose value <= target
    function customUpperBound(arr: [number, number][], target: number): number {
        let left = 0;
        let right = arr.length - 1;
        let result = 0;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (arr[mid][0] <= target) {
                result = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    // Build (value, originalIndex)
    const arr: [number, number][] = [];
    for (let i = 0; i < n; i++) {
        arr.push([nums[i], i]);
    }

    arr.sort((a, b) => a[0] - b[0]);

    // original node -> sorted index
    const nodeToIdx = new Array<number>(n);
    for (let i = 0; i < n; i++) {
        nodeToIdx[arr[i][1]] = i;
    }

    const cols = Math.floor(Math.log2(n)) + 1;
    const ancestorTable = Array.from({ length: n }, () =>
        new Array<number>(cols).fill(0)
    );

    // Fill first column
    for (let node = 0; node < n; node++) {
        const farthestIdxOneHop = customUpperBound(
            arr,
            arr[node][0] + maxDiff
        );
        ancestorTable[node][0] = farthestIdxOneHop;
    }

    // Build binary lifting table
    for (let j = 1; j < cols; j++) {
        for (let node = 0; node < n; node++) {
            ancestorTable[node][j] =
                ancestorTable[ancestorTable[node][j - 1]][j - 1];
        }
    }

    const result: number[] = [];

    for (const [u, v] of queries) {
        let a = nodeToIdx[u];
        let b = nodeToIdx[v];

        if (a === b) {
            result.push(0);
            continue;
        }

        if (a > b) {
            [a, b] = [b, a];
        }

        let curr = a;
        let jumps = 0;

        for (let j = cols - 1; j >= 0; j--) {
            if (ancestorTable[curr][j] < b) {
                curr = ancestorTable[curr][j];
                jumps += 1 << j;
            }
        }

        if (ancestorTable[curr][0] >= b) {
            result.push(jumps + 1);
        } else {
            result.push(-1);
        }
    }

    return result;
}