#include <vector>
#include <set>
#include <string>
using namespace std;

class Solution
{
public:
    vector<char> ops;
    vector<set<string>> setStack;

    void operate()
    {
        int start = setStack.size() - 2;
        int end = setStack.size() - 1;

        if (ops.back() == '+')
        {
            setStack[start].merge(setStack[end]);
        }
        else
        {
            set<string> temp;

            for (auto &item1 : setStack[start])
            {
                for (auto &item2 : setStack[end])
                {
                    temp.insert(item1 + item2);
                }
            }
            setStack[start] = temp;
        }
        ops.pop_back();
        setStack.pop_back();
    }

    vector<string> braceExpansionII(string expression)
    {
        int n = expression.length();

        for (int i = 0; i < n; i++)
        {
            char ch = expression[i];
            if (ch == ',')
            {
                while (ops.size() > 0 && ops.back() == '*')
                {
                    operate();
                }
                ops.push_back('+');
            }
            else if (ch == '{')
            {
                if (i > 0 &&
                    (expression[i - 1] == '}' || isalpha(expression[i - 1])))
                {
                    ops.push_back('*');
                }
                ops.push_back('{');
            }
            else if (ch == '}')
            {
                while (ops.size() && ops.back() != '{')
                {
                    operate();
                }
                ops.pop_back();
            }
            else
            {
                if (i > 0 &&
                    (expression[i - 1] == '}' || isalpha(expression[i - 1])))
                {
                    ops.push_back('*');
                }
                setStack.push_back({string(1, expression[i])});
            }
        }

        while (ops.size() > 0)
        {
            operate();
        }

        return {setStack.back().begin(), setStack.back().end()};
    }
};