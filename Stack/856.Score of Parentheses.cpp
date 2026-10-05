#include <vector>
#include <string>

using namespace std;

class Solution
{
public:
    int scoreOfParentheses(string s)
    {
        vector<int> vec;
        int n = s.length();
        int score = 0;

        for (int i = 0; i < n; i++)
        {
            char c = s[i];
            if (c == '(')
            {
                vec.push_back(score);
                score = 0;
            }
            else
            {
                if (s[i - 1] == '(')
                {
                    score = vec.back() + 1;
                }
                else
                {
                    score = score * 2 + vec.back();
                }
                vec.pop_back();
            }
        }
        return score;
    }
};