function minWindow(s: string, t: string): string {
    let map = new Map();
    let l = 0;
    let r = 0;
    let m = s.length;
    let n = t.length;
    let countRequired = n; // this is the count which is required to be included in the window
    let minLen = Infinity;
    let sIndex = -1;


    for (let i = 0; i < n; i++) {
        map.set(t[i], (map.get(t[i]) || 0) + 1);
    }

    while (r < m) {
        if (map.has(s[r]) && map.get(s[r]) > 0) {
            countRequired -= 1; // reducing count required as this char is being included in the window 
        }
        map.set(s[r], (map.get(s[r]) || 0) - 1);

        while (countRequired == 0) {
            if (minLen > r - l + 1) {
                minLen = r - l + 1;
                sIndex = l;
            }
            map.set(s[l], map.get(s[l]) + 1);
            if (map.get(s[l]) > 0) {
                countRequired += 1; // increasing count as now char is required to be included
            }
            l++;
        }
        r++;
    }

    return sIndex == -1 ? "" : s.substring(sIndex, sIndex + minLen);
};