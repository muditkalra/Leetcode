#include <string>
using namespace std;

class Solution
{
public:
    int minInsertions(string s)
    {
        int n = s.length();
        int open = 0;
        int res = 0;
        int i = 0;

        while (i < n)
        {
            if (s[i] == '(')
            {
                open++;
                i++;
            }
            else
            {
                if (open == 0)
                {
                    res += 1;
                }
                else
                {
                    open -= 1;
                }

                if (i + 1 < n && s[i + 1] == ')')
                {
                    i += 2;
                }
                else
                {
                    res += 1;
                    i++;
                }
            }
        }
        res += open * 2;
        return res;
    }
};