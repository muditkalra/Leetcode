#include <vector>
#include <string>
using namespace std;

class Solution
{
public:
    vector<int> maxDepthAfterSplit(string seq)
    {
        int n = seq.size();
        vector<int> res;
        int d = 0;

        for (char &c : seq)
        {
            if (c == '(')
            {
                d++;
                res.push_back(d % 2);
            }
            if (c == ')')
            {
                res.push_back(d % 2);
                d--;
            }
        }
        return res;
    }
};