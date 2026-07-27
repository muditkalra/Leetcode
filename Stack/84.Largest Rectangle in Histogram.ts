function largestRectangleArea(heights: number[]): number {
    let n = heights.length;
    let stack = [];
    let max = 0;

    for (let i = 0; i < n; i++) {
        while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
            let lastPop = stack.pop()!;
            let width;
            if (stack.length) {
                width = i - stack[stack.length - 1] - 1;
            } else {
                width = i;
            }
            max = Math.max(max, width * heights[lastPop]);
        }
        stack.push(i);
    }

    while (stack.length) {
        let lastPop = stack.pop()!;
        let width;
        if (stack.length) {
            width = n - stack[stack.length - 1] - 1;
        } else {
            width = n;
        }
        max = Math.max(max, width * heights[lastPop]);
    }

    return max
};