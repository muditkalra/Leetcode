#include <numeric>
#include <vector>
using namespace std;
class Solution
{
public:
    int minOperations(vector<int> &nums, int x)
    {
        int n = nums.size();
        int sum = accumulate(nums.begin(), nums.end(), 0);

        if (sum < x)
            return -1;

        int extraSum = sum - x;

        int curSum = 0;
        int l = 0;
        int r = 0;
        int mini = 1e9;

        while (r < n)
        {
            curSum += nums[r];

            while (curSum > extraSum)
            {
                curSum -= nums[l];
                l++;
            }
            if (curSum == extraSum)
            {
                mini = min(n - (r - l + 1), mini);
            }
            r++;
        }
        return mini == 1e9 ? -1 : mini;
    }
};