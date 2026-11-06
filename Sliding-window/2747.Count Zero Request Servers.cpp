#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    vector<int> countServers(int n, vector<vector<int>> &logs, int x,
                             vector<int> &queries)
    {
        int m = logs.size();

        auto lambda = [](vector<int> &a, vector<int> &b)
        {
            return a[1] < b[1];
        };

        sort(begin(logs), end(logs), lambda);

        int q = queries.size();
        vector<pair<int, int>> timeIndex(q);

        for (int i = 0; i < q; i++)
        {
            timeIndex[i] = {queries[i], i}; // time and index;
        }

        sort(begin(timeIndex), end(timeIndex)); // sorting on the basis of time

        vector<int> result(q);
        int i = 0;
        int j = 0;
        unordered_map<int, int> mp;

        for (auto [time, idx] : timeIndex)
        {
            int s = time - x;
            int e = time;

            while (j < m && logs[j][1] <= e)
            {
                mp[logs[j][0]]++;
                j++;
            }

            while (i < m && logs[i][1] < s)
            {
                mp[logs[i][0]]--;
                if (mp[logs[i][0]] == 0)
                {
                    mp.erase(logs[i][0]);
                }
                i++;
            }

            result[idx] = n - mp.size(); // # server that did not receive any request during the time;
        }
        return result;
    }
};