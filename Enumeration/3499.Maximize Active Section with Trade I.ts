function maxActiveSectionsAfterTrade(s: string): number {
    let n = s.length;

    let zeroSections = [];
    let continuousZeroCount = 0;
    let oneCount = 0;


    for (let i = 0; i < n; i++) {
        if (s[i] == "1") {
            oneCount += 1;
            if (continuousZeroCount > 0) {
                zeroSections.push(continuousZeroCount);
            }
            continuousZeroCount = 0;
        } else {
            continuousZeroCount += 1;
        }
    }

    if (continuousZeroCount > 0) {
        zeroSections.push(continuousZeroCount);
    }

    let zeroSectionsLen = zeroSections.length;
    let max = 0;

    for (let i = 0; i < zeroSectionsLen - 1; i++) {
        max = Math.max(max, zeroSections[i] + zeroSections[i + 1]);
    }

    return max + oneCount;
};