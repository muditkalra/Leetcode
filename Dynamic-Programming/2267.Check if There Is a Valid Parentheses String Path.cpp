#include <vector>
using namespace std;

class Solution {
public:
    int m, n;
    int dp[101][101][201];

    bool solve(int i, int j, int openCount, vector<vector<char>>& grid) {
        if (i >= m || j >= n)
            return false;

        openCount += (grid[i][j] == '(') ? 1 : -1;

        if (openCount < 0)
            return false;

        if (dp[i][j][openCount] != -1) {
            return dp[i][j][openCount];
        }

        if (i == m - 1 && j == n - 1) {
            return dp[i][j][openCount] = (openCount == 0);
        }

        // down
        if (solve(i + 1, j, openCount, grid)) {
            return dp[i][j][openCount] = true;
        }

        // right
        if (solve(i, j + 1, openCount, grid)) {
            return dp[i][j][openCount] = true;
        }

        return dp[i][j][openCount] = false;
    }

    bool hasValidPath(vector<vector<char>>& grid) {
        m = grid.size();
        n = grid[0].size();

        if (grid[0][0] == ')' || grid[m - 1][n - 1] == '(')
            return false;

        if ((m + n - 1) % 2)
            return false;

        for (int i = m - 1; i >= 0; i--) {
            for (int j = n - 1; j >= 0; j--) {
                for (int openCount = 0; openCount <= i + j + 1; openCount++) {
                    if (i == m - 1 && j == n - 1) {
                        dp[i][j][openCount] = openCount == 0;
                        continue;
                    }

                    dp[i][j][openCount] = false;

                    if (i + 1 < m) {
                        int nextCount = (grid[i + 1][j] == '(') ? openCount + 1
                                                                : openCount - 1;

                        if (nextCount >= 0 && dp[i + 1][j][nextCount] == true) {
                            dp[i][j][openCount] = true;
                        }
                    }
                    if (j + 1 < n) {
                        int nextCount = grid[i][j + 1] == '(' ? openCount + 1
                                                              : openCount - 1;

                        if (nextCount >= 0 && dp[i][j + 1][nextCount] == true) {
                            dp[i][j][openCount] = true;
                        }
                    }
                }
            }
        }

        return dp[0][0][1];
    }
};