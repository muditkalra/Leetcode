// This need to be solved using digit-dp for optimized solution

function rotatedDigits(n: number): number {

    let rotatedValue: { [x: number]: number } = {
        0: 0,
        1: 1,
        8: 8,
        2: 5,
        5: 2,
        6: 9,
        9: 6
    }

    function rotateNumberAndCheck(x: number) {
        let str = "";
        let temp = x;

        while (x > 0) {
            let d = x % 10;
            if (rotatedValue[d] == undefined) {
                return false;
            }
            str = rotatedValue[d] + str;
            x = Math.floor(x / 10);
        }
        return String(temp) != str;
    }

    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (rotateNumberAndCheck(i)) {
            count++;
        }
    }
    return count;
};