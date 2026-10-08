#include <string>
using namespace std;

class Solution
{
public:
    string removeOuterParentheses(string s)
    {
        int n = s.length();

        int count = 0;
        string res = "";

        for (int i = 0; i < n; i++)
        {
            if (s[i] == '(')
            {
                count++;
                if (count <= 1)
                    continue;
            }
            else
            {
                count--;
                if (count == 0)
                    continue;
            }

            res += s[i];
        }
        return res;
    }
};
