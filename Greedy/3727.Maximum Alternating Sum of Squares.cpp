#include <vector>
#include <algorithm>
using namespace std;

class Solution
{
public:
    long long maxAlternatingSum(vector<int> &nums)
    {
        int n = nums.size();

        for (int i = 0; i < n; i++)
        {
            nums[i] *= nums[i];
        }

        sort(nums.begin(), nums.end());
        long long sum = 0;

        for (int i = 0; i < n / 2; i++)
        {
            sum -= (long long)nums[i];
        }

        for (int i = n / 2; i < n; i++)
        {
            sum += (long long)nums[i];
        }
        return sum;
    }
};