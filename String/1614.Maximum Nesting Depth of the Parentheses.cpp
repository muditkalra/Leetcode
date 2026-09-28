#include <string>
#include <numeric>

using namespace std;

class Solution
{
public:
    int maxDepth(string s)
    {
        int n = s.length();
        int openingCount = 0;
        int maxDepth = 0;

        for (int i = 0; i < n; i++)
        {
            if (s[i] == '(')
                openingCount += 1;
            if (s[i] == ')')
            {
                maxDepth = max(openingCount, maxDepth);
                openingCount -= 1;
            }
        }
        return maxDepth;
    }
};