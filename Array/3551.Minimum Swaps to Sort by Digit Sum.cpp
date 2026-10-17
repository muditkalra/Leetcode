#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    int getSumOfDigit(int num)
    {
        int s = 0;
        while (num > 0)
        {
            s += (num % 10);
            num /= 10;
        }
        return s;
    }

    int minSwaps(vector<int> &nums)
    {

        int n = nums.size();
        unordered_map<int, int> valToIdx;

        for (int i = 0; i < n; i++)
        {
            valToIdx[nums[i]] = i;
        }

        vector<int> afterSort(nums);

        auto lambda = [&](int a, int b)
        {
            int num1DS = getSumOfDigit(a);
            int num2DS = getSumOfDigit(b);

            if (num1DS != num2DS)
            {
                return num1DS < num2DS;
            }
            return a < b;
        };

        sort(begin(afterSort), end(afterSort), lambda);
        int swaps = 0;

        for (int i = 0; i < n; i++)
        {
            if (nums[i] != afterSort[i])
            {
                int shouldBe = afterSort[i];
                int shouldBeIdx = valToIdx[shouldBe];
                valToIdx[shouldBe] = i;
                valToIdx[nums[i]] = shouldBeIdx;
                nums[shouldBeIdx] = nums[i];
                nums[i] = shouldBe;
                swaps++;
            }
        }
        return swaps;
    }
};