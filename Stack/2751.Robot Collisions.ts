function survivedRobotsHealths(positions: number[], healths: number[], directions: string): number[] {
    const n = positions.length;
    const indices = Array.from({ length: n }, (_, i) => i);
    const result: number[] = [];
    const stack: number[] = [];

    indices.sort((a, b) => positions[a] - positions[b]);

    for (const currentIndex of indices) {
        if (directions[currentIndex] === "R") {
            stack.push(currentIndex);
        } else {
            while (stack.length > 0 && healths[currentIndex] > 0) {
                const topIndex = stack.pop()!;

                if (healths[topIndex] > healths[currentIndex]) {
                    healths[topIndex] -= 1;
                    healths[currentIndex] = 0;
                    stack.push(topIndex);
                } else if (healths[topIndex] < healths[currentIndex]) {
                    healths[currentIndex] -= 1;
                    healths[topIndex] = 0;
                } else {
                    healths[currentIndex] = 0;
                    healths[topIndex] = 0;
                }
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (healths[i] > 0) {
            result.push(healths[i]);
        }
    }

    return result;
};