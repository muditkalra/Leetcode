#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    int n;
    string str;

    vector<vector<int>> costMemo;
    vector<vector<int>> memo;

    int getCost(int i, int j)
    {
        int len = j - i + 1;

        if (costMemo[i][j] != -1)
        {
            return costMemo[i][j];
        }

        int minCost = INT_MAX;

        for (int d = 1; d < len; d++)
        {
            if (len % d != 0)
                continue;

            int cost = 0;

            for (int group = 0; group < d; group++)
            {
                int l = i + group;
                int r = l + (len / d - 1) * d;

                while (l < r)
                {
                    if (str[l] != str[r])
                    {
                        cost++;
                    }
                    l += d;
                    r -= d;
                }
            }
            minCost = min(minCost, cost);
        }
        costMemo[i][j] = minCost;
        return minCost;
    }

    int solve(int start, int k)
    {
        if (k == 0)
        {
            if (start == n)
                return 0;
            return INT_MAX;
        }

        if (start + 2 * k > n)
        {
            return INT_MAX;
        }

        if (memo[start][k] != -1)
        {
            return memo[start][k];
        }

        int cost = INT_MAX;

        for (int end = start + 1; end < n; end++)
        {
            // start ... end -> 1 piece

            int remainingCost = solve(end + 1, k - 1);

            if (remainingCost == INT_MAX)
                continue;

            cost = min(cost, getCost(start, end) + remainingCost);
        }
        memo[start][k] = cost;
        return cost;
    }
    int minimumChanges(string s, int k)
    {
        n = s.length();
        str = s;

        costMemo.assign(n + 1, vector<int>(n + 1, -1));
        memo.assign(n + 1, vector<int>(k + 1, -1));
        return solve(0, k);
    }
};