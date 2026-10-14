#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    string maxSumOfSquares(int num, int sum)
    {
        if (sum > 9 * num)
        {
            return "";
        }

        int r = sum % 9;
        int nines = sum / 9;
        string ans = "";

        ans.append(nines, '9');

        if (r)
        {
            ans.push_back(r + '0');
        }

        int len = ans.length();

        ans.append(num - ans.length(), '0');
        return ans;
    }
};