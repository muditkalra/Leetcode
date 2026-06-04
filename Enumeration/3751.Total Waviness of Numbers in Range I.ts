function totalWaviness(num1: number, num2: number): number {
    if (num2 <= 100) return 0;

    function calWaviness(n: number) {
        let waviness = 0;
        let str = n.toString();

        for (let i = 1; i < str.length - 1; i++) {
            let valley = str.charCodeAt(i) < str.charCodeAt(i + 1) && str.charCodeAt(i) < str.charCodeAt(i - 1)
            let peak = str.charCodeAt(i) > str.charCodeAt(i + 1) && str.charCodeAt(i) > str.charCodeAt(i - 1)
            if (valley || peak) {
                waviness += 1;
            }
        }
        return waviness;
    }

    let total = 0;

    for (let i = num1; i <= num2; i++) {
        if (i <= 100) continue;

        total += calWaviness(i);
    }
    return total;
};