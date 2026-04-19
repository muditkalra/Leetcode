function maxDistance(nums1: number[], nums2: number[]): number {
    // two-pointer
    let i = 0;
    let j = 0;
    let res = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] > nums2[j]) {
            i++;
        } else {
            res = Math.max(res, j - i);
            j++;
        }
    }
    return res;
};