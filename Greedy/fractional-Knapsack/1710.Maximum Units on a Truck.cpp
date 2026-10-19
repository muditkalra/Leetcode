#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    int maximumUnits(vector<vector<int>> &boxTypes, int truckSize)
    {
        int n = boxTypes.size();

        auto lambda = [](vector<int> &a, vector<int> &b)
        {
            return a[1] > b[1];
        };

        sort(begin(boxTypes), end(boxTypes), lambda);
        int units = 0;

        for (int i = 0; i < n; i++)
        {
            if (truckSize >= boxTypes[i][0])
            {
                truckSize -= boxTypes[i][0];
                units += (boxTypes[i][0] * boxTypes[i][1]);
            }
            else
            {
                units += (truckSize * boxTypes[i][1]);
                break;
            }
        }
        return units;
    }
};