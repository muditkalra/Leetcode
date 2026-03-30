function checkStrings(s1: string, s2: string): boolean {
    let evenMap = new Map<string, number>();
    let oddMap = new Map<string, number>();

    let n = s1.length;
    for (let i = 0; i < n; i++) {
        if (i % 2) {
            evenMap.set(s1[i], (evenMap.get(s1[i]) || 0) + 1);
        } else {
            oddMap.set(s1[i], (oddMap.get(s1[i]) || 0) + 1);
        }
    }


    for (let i = 0; i < n; i++) {
        if (i % 2) {
            if (evenMap.has(s2[i]) && evenMap.get(s2[i])! > 0) {
                evenMap.set(s2[i], evenMap.get(s2[i])! - 1);
            } else {
                return false;
            }
        } else {
            if (oddMap.has(s2[i]) && oddMap.get(s2[i])! > 0) {
                oddMap.set(s2[i], oddMap.get(s2[i])! - 1);
            } else {
                return false;
            }
        }
    }

    return true
};