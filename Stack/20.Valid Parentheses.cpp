#include <string>
#include <stack>
using namespace std;

class Solution
{
public:
    bool isValid(string s)
    {
        stack<char> st;

        int n = s.length();

        for (char &c : s)
        {
            if (c == '(' || c == '{' || c == '[')
            {
                st.push(c);
            }
            else
            {
                if (st.size() == 0)
                    return false;
                char lastChar = st.top();

                if (lastChar == '(' && c != ')')
                {
                    return false;
                }
                if (lastChar == '{' && c != '}')
                {
                    return false;
                }
                if (lastChar == '[' && c != ']')
                {
                    return false;
                }
                st.pop();
            }
        }
        return st.size() == 0;
    }
};
