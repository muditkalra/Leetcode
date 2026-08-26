function shortestBeautifulSubstring(s: string, k: number): string {
    let n = s.length;

    let l = 0;
    let oneCount = 0;
    let result = "";

    for (let r = 0; r < n; r++) {
        if (s[r] == "1") {
            oneCount += 1;
        }

        while (oneCount > k || s[l] == "0") {
            if (s[l] == "1") {
                oneCount -= 1;
            }
            l++;
        }

        if (oneCount == k) {
            let str = s.substring(l, r + 1);
            if (result.length == 0 || result.length > str.length || (result.length == str.length && result > str)) {
                result = str;
            }
        }
    }
    return result;
};

// function shortestBeautifulSubstring(s: string, k: number): string {
//     let n = s.length;
//     let start = -1;
//     let minLen = Infinity;
//     let l = 0;
//     let oneCount = 0;

//     for (let r = 0; r < n; r++) {
//         if (s[r] == "1") {
//             oneCount += 1;
//         }

//         while (oneCount == k) {
//             if (r - l + 1 < minLen) {
//                 start = l;
//                 minLen = r - l + 1;
//             } else if ((r - l + 1) == minLen && s.substring(start, start + minLen) > s.substring(l, r + 1)) {
//                 start = l;
//             }
            
//             if (s[l] == "1") {
//                 oneCount -= 1;
//             }
//             l++;
//         }
//     }
//     return minLen !== Infinity ? s.substring(start, start + minLen) : "";
// };