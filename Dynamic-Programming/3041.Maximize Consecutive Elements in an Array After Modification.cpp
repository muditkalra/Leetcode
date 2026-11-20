#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    int n;
    vector<vector<int>> dp;

    int bSearch(int start, int target, vector<int> &nums)
    {
        int j =
            lower_bound(begin(nums) + start, end(nums), target) - begin(nums);

        if (j < n && nums[j] == target)
        {
            return j;
        }
        return -1;
    }

    int solve(int i, int inc, vector<int> &nums)
    {
        // dp
        if (dp[i][inc] != -1)
        {
            return dp[i][inc];
        }

        int currentValue = nums[i] + inc;
        int len = 1;

        // option1: directly find next value
        int j = bSearch(i + 1, currentValue + 1, nums);
        if (j != -1)
        {
            len = max(len, 1 + solve(j, 0, nums));
        }

        // option 2: finding the same value;
        j = bSearch(i + 1, currentValue, nums);
        if (j != -1)
        {
            len = max(len, 1 + solve(j, 1, nums));
        }

        dp[i][inc] = len;
        return len;
    }

    int maxSelectedElements(vector<int> &nums)
    {
        n = nums.size();
        dp.assign(n + 1, vector<int>(2, 0));

        sort(begin(nums), end(nums));

        int res = 1;
        // for (int i = 0; i < n; i++) {
        //     res = max({res, solve(i, 0, nums), solve(i, 1, nums)});
        // }

        for (int i = n - 1; i >= 0; i--)
        {
            for (int inc = 0; inc < 2; inc++)
            {

                int currentValue = nums[i] + inc;
                int len = 1;

                // option1: directly find next value
                int j = bSearch(i + 1, currentValue + 1, nums);
                if (j != -1)
                {
                    len = max(len, 1 + dp[j][0]);
                }

                // option 2: finding the same value;
                j = bSearch(i + 1, currentValue, nums);
                if (j != -1)
                {
                    len = max(len, 1 + dp[j][1]);
                }
                dp[i][inc] = len;
                res = max(res, dp[i][inc]);
            }
        }
        return res;
    }
};