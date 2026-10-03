#include <string>
using namespace std;

class Solution
{
public:
    int longestValidParentheses(string s)
    {
        int n = s.length();
        int open = 0;
        int close = 0;
        int res = 0;

        for (int i = 0; i < n; i++)
        {
            if (s[i] == '(')
            {
                open++;
            }
            else
            {
                close++;
            }

            if (open == close)
            {
                res = max(res, open + close);
            }

            if (open < close)
            {
                open = 0;
                close = 0;
            }
        }

        open = 0;
        close = 0;

        for (int i = n - 1; i >= 0; i--)
        {
            if (s[i] == '(')
            {
                open++;
            }
            else
                close++;

            if (open == close)
            {
                res = max(res, open + close);
            }

            if (open > close)
            {
                open = 0;
                close = 0;
            }
        }
        return res;
    }
};