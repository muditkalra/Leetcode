function maximalRectangle(matrix: string[][]): number {
    let row = matrix.length;
    let col = matrix[0].length;

    function calculateArea(arr: number[]) {
        let n = arr.length;
        let stack = [];
        let max = 0;

        for (let i = 0; i < n; i++) {
            while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
                let element = stack.pop()!;
                let nse = i;
                let pse = stack.length ? stack[stack.length - 1] : -1;
                let area = arr[element] * (nse - pse - 1);
                max = Math.max(max, area);
            }
            stack.push(i);
        }

        while (stack.length) {
            let element = stack.pop()!;
            let nse = n;
            let pse = stack.length ? stack[stack.length - 1] : -1;
            let area = arr[element] * (nse - pse - 1);
            max = Math.max(max, area);
        }
        return max;
    }

    let heightPrefix = new Array(col).fill(0);
    let max = 0;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] == "1") {
                heightPrefix[j] += 1;
            } else {
                heightPrefix[j] = 0;
            }
        }
        max = Math.max(max, calculateArea(heightPrefix));
    }
    return max;
};