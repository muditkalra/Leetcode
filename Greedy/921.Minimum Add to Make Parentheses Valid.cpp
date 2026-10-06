#include <string>
using namespace std;


// This can be done using stack

class Solution
{
public:
    int minAddToMakeValid(string s)
    {
        int openCount = 0;
        int closeCount = 0;

        for (char &c : s)
        {
            if (c == '(')
            {
                openCount++;
            }
            else
            {
                if (openCount > 0)
                {
                    openCount -= 1;
                }
                else
                {
                    closeCount += 1;
                }
            }
        }
        return openCount + closeCount;
    }
};