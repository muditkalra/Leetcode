#include <bits/stdc++.h>
using namespace std;


class Solution
{
public:
    int m, n;

    long long solve(vector<vector<int>> &grid, int i, int j)
    {
        if (i == m || j == n || i < 0 || j < 0 || grid[i][j] == 0)
            return 0;

        long long cur = grid[i][j];
        grid[i][j] = 0;

        long long right = solve(grid, i, j + 1);
        long long left = solve(grid, i, j - 1);
        long long down = solve(grid, i + 1, j);
        long long up = solve(grid, i - 1, j);
        return (long long)left + right + up + down + cur;
    }
    int countIslands(vector<vector<int>> &grid, int k)
    {
        m = grid.size();
        n = grid[0].size();

        int count = 0;
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (grid[i][j] != 0)
                {
                    long long total = solve(grid, i, j);
                    count += total % k == 0 ? 1 : 0;
                }
            }
        }
        return count;
    }
};