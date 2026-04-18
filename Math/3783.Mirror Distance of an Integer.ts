function mirrorDistance(n: number): number {
    let temp = n;
    let reversedN = 0;
    while (temp > 0) {
        let d = temp % 10;
        reversedN = reversedN * 10 + d;
        temp = Math.floor(temp / 10);
    }
    return Math.abs(n - reversedN);
};