#include <string>
#include <vector>
#include <unordered_set>
using namespace std;

class Solution
{
public:
    int n;
    int imbalance;
    unordered_set<string> res;

    void solve(int i, string &curr, int count, string &s)
    {
        if (count < 0)
            return;

        if (i == n)
        {
            if (curr.length() == (n - imbalance) && count == 0)
            {
                res.insert(curr);
            }
            return;
        }

        if (s[i] == '(' || s[i] == ')')
        { // skip, only open and close bracket can be skipped, alphabets can't
            solve(i + 1, curr, count, s);
        }

        count = s[i] == '(' ? count + 1 : s[i] == ')' ? count - 1
                                                      : count;
        curr.push_back(s[i]);
        solve(i + 1, curr, count, s);
        curr.pop_back();
        return;
    }

    vector<string> removeInvalidParentheses(string s)
    {
        n = s.length();
        int count = 0;
        int open = 0;

        for (int i = 0; i < n; i++)
        {
            if (s[i] == '(')
            {
                count++;
            }
            else if (s[i] == ')')
            {
                count--;
            }

            if (count < 0)
            {
                open += 1;
                count = 0;
            }
        }
        imbalance = open + count;

        string curr = "";
        solve(0, curr, 0, s);
        return vector<string>(begin(res), end(res));
    }
};