#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    int m, n;

    bool solve(vector<vector<int>> &grid, int i, int j)
    {
        if (i == m || j == n || i < 0 || j < 0)
            return false;
        if (grid[i][j] == 1)
            return true;

        grid[i][j] = 1;
        bool right = solve(grid, i, j + 1);
        bool down = solve(grid, i + 1, j);
        bool left = solve(grid, i, j - 1);
        bool up = solve(grid, i - 1, j);

        return left && right && up && down;
    }
    int closedIsland(vector<vector<int>> &grid)
    {
        m = grid.size();
        n = grid[0].size();

        int count = 0;

        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (grid[i][j] == 0 && solve(grid, i, j))
                {
                    count++;
                }
            }
        }
        return count;
    }
};