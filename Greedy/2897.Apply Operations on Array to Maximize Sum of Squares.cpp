#include <vector>

using namespace std;

class Solution
{
public:
    int maxSum(vector<int> &nums, int k)
    {
        vector<int> count(32, 0);
        int n = nums.size();
        int mod = 1e9 + 7;

        for (int num : nums)
        {
            for (int bit = 0; bit < 32; bit++)
            {
                if (num & (1 << bit))
                {
                    count[bit] += 1;
                }
            }
        }

        long long res = 0;

        while (k--)
        {
            long long cur = 0;

            for (int bit = 0; bit < 32; bit++)
            {
                if (count[bit] > 0)
                {
                    cur = cur | (1 << bit);
                    count[bit] -= 1;
                }
            }
            res = (res + cur * cur) % mod;
        }
        return res;
    }
};