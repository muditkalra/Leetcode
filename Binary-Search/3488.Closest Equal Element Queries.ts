function solveQueries(nums: number[], queries: number[]): number[] {
    let posMap = new Map<number, number[]>();
    let len = nums.length;

    for (let i = 0; i < nums.length; i++) {
        if (!posMap.has(nums[i])) {
            posMap.set(nums[i], [i]);
            continue;
        }
        posMap.get(nums[i])?.push(i);
    }


    for (const [ele, list] of posMap) { // adding left and right neighbour for only first and last element as we dont have their nearest neighbour
        let firstEle = list[0];
        let lastEle = list[list.length - 1];
        list.unshift(lastEle - len);
        list.push(firstEle + len);
    }


    let res = new Array(queries.length).fill(-1);
    for (let i = 0; i < queries.length; i++) {
        let ele = nums[queries[i]];
        let list = posMap.get(ele)!;
        if (list.length == 3) { // means only single element index and its left and right converted indexes are only their
            continue;
        }
        // binary search the current index;
        let pos = binarySearch(list, queries[i]); // using binary search to fin the query index in the list of indexes of that number
        res[i] = Math.min(list[pos + 1] - list[pos], list[pos] - list[pos - 1]); // comparing with left and right neighbour
    }

    function binarySearch(list: number[], target: number) {
        let left = 0;
        let right = list.length - 1;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (list[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return right;
    }

    return res;
};