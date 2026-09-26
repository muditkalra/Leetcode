#include <vector>
#include <unordered_map>
#include <string>
using namespace std;

class Solution
{
public:
    string evaluate(string s, vector<vector<string>> &knowledge)
    {
        unordered_map<string, string> kMap;

        for (auto &pair : knowledge)
        {
            string key = pair[0];
            string value = pair[1];
            kMap[key] = value;
        }

        int n = s.length();
        string newStr;
        bool open = false;
        string temp = "";
        for (char c : s)
        {
            if (c == '(')
            {
                open = true;
                continue;
            }

            if (open)
            {
                if (c == ')')
                {
                    newStr += (kMap.find(temp) != kMap.end() ? kMap[temp] : "?");
                    temp = "";
                    open = false;
                }
                else
                {
                    temp += c;
                }
            }
            else
            {
                newStr += c;
            }
        }
        return newStr;
    }
};