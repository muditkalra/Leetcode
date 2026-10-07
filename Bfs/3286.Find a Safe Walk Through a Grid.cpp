#include <vector>
#include <deque>
#include <climits>
using namespace std;

class Solution
{
public:
    bool findSafeWalk(vector<vector<int>> &grid, int health)
    {
        int m = grid.size();
        int n = grid[0].size();
        vector<vector<int>> dir = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};

        vector<vector<int>> visited(m, vector<int>(n, INT_MAX));

        deque<pair<int, int>> deq;
        deq.push_front({0, 0});
        visited[0][0] = grid[0][0];

        while (!deq.empty())
        {
            auto [r, c] = deq.front();
            deq.pop_front();

            for (auto &d : dir)
            {
                int dx = d[0];
                int dy = d[1];
                int newX = r + dx;
                int newY = c + dy;

                if (newX < 0 || newY < 0 || newX >= m || newY >= n)
                    continue;

                int cost = visited[r][c] + grid[newX][newY];
                if (cost >= health)
                    continue;

                if (cost < visited[newX][newY])
                {
                    visited[newX][newY] = cost;

                    if (grid[newX][newY] == 1)
                    {
                        deq.push_back({newX, newY});
                    }
                    else
                    {
                        deq.push_front({newX, newY});
                    }
                }
            }
        }
        return visited[m - 1][n - 1] < health;
    }
};