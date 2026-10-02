#include <vector>
#include <string>
using namespace std;

class Solution
{
public:
    vector<string> res;

    void solve(int openCount, int closeCount, string &path, int n)
    {
        if (closeCount == n)
        {
            res.push_back(path);
            return;
        }

        if (openCount < n)
        {
            path.push_back('(');
            solve(openCount + 1, closeCount, path, n);
            path.pop_back();
        }

        if (closeCount < openCount)
        {
            path.push_back(')');
            solve(openCount, closeCount + 1, path, n);
            path.pop_back();
        }
    }

    vector<string> generateParenthesis(int n)
    {
        string path = "";
        solve(0, 0, path, n);
        return res;
    }
};